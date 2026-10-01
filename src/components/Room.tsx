import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { PALETTE } from '../palette'
import { RESUME_URL, isSectionId } from '../nav'
import { blit, blitOutlined, dottedRect, loadSheets, paintBackdrop, type Sheets } from '../room/draw'
import { CYCLE, DESKTOP, FPS, LABELS, PORTRAIT, SPRITES, hitOf, type Layout, type Placement, type Target } from '../room/layout'

export type Geometry = { s: number; layout: Layout; nw: number; nh: number; ox: number; oy: number }

type Props = {
  compact: boolean
  /** Section panel currently open; shifts the camera on desktop. */
  panned: boolean
  onOpen: (target: Target, origin: { x: number; y: number }) => void
}

const BREATH = [0, 0, 0, -1, -1, -1, -1, -1, -1, 0, 0, 0]
const REDUCED = '(prefers-reduced-motion: reduce)'

const measure = (el: HTMLElement, compact: boolean): Geometry => {
  const layout = compact ? PORTRAIT : DESKTOP
  const vw = el.clientWidth
  const vh = el.clientHeight
  const s = Math.max(1, Math.min(Math.floor(vw / layout.w), Math.floor(vh / layout.h)))
  const nw = Math.ceil(vw / s)
  const nh = Math.ceil(vh / s)
  return { s, layout, nw, nh, ox: Math.floor((nw - layout.w) / 2), oy: Math.floor((nh - layout.h) / 2) }
}

export default function Room({ compact, panned, onOpen }: Props) {
  const wrap = useRef<HTMLDivElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)
  const backdrop = useRef<HTMLCanvasElement | null>(null)
  const sheets = useRef<Sheets | null>(null)
  const hoverRef = useRef<Target | null>(null)
  const [geo, setGeo] = useState<Geometry | null>(null)
  const [hover, setHover] = useState<Target | null>(null)
  const [ready, setReady] = useState(false)
  hoverRef.current = hover

  useEffect(() => {
    let alive = true
    loadSheets().then((s) => {
      if (!alive) return
      sheets.current = s
      setReady(true)
    })
    return () => {
      alive = false
    }
  }, [])

  // Geometry follows the viewport; the backdrop is repainted on every change.
  useLayoutEffect(() => {
    const el = wrap.current!
    const update = () => {
      const g = measure(el, compact)
      setGeo(g)
      const c = canvas.current!
      c.width = g.nw
      c.height = g.nh
      c.style.width = `${g.nw * g.s}px`
      c.style.height = `${g.nh * g.s}px`
      backdrop.current ??= document.createElement('canvas')
      backdrop.current.width = g.nw
      backdrop.current.height = g.nh
      paintBackdrop(backdrop.current.getContext('2d')!, g.nw, g.nh, g.ox, g.oy + g.layout.floor)
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [compact])

  // Paint loop: 12 fps idle cycle, redrawn only when the frame or hover state changes.
  useEffect(() => {
    if (!ready || !geo) return
    const g = canvas.current!.getContext('2d')!
    g.imageSmoothingEnabled = false
    const reduced = matchMedia(REDUCED).matches
    let last = -1
    let lastHover: Target | null | undefined
    let raf = 0
    const { layout, ox, oy } = geo
    const fig = layout.items.find((p) => p.sprite === 'figure')!
    const figCx = fig.x + 28

    const lookAt = (h: Target | null): 0 | 1 | 2 => {
      if (!h || h === 'projects') return 1
      const p = layout.items.find((i) => i.target === h)
      if (!p) return 1
      const r = hitOf(p)
      const cx = r.x + r.w / 2
      return cx < figCx - 10 ? 0 : cx > figCx + 10 ? 2 : 1
    }

    const paint = (now: number) => {
      raf = requestAnimationFrame(paint)
      const t = reduced ? 0 : Math.floor(now / (1000 / FPS)) % CYCLE
      const h = hoverRef.current
      if (t === last && h === lastHover) return
      last = t
      lastHover = h
      g.clearRect(0, 0, geo.nw, geo.nh)
      g.drawImage(backdrop.current!, 0, 0)
      const S = sheets.current!
      for (const item of layout.items) {
        const meta = SPRITES[item.sprite]
        let row = 0
        if (item.sprite === 'figure') row = lookAt(h)
        if (item.sprite === 'cat' && h === 'cat') row = 1
        const frame = meta.frames > 1 ? t : 0
        const hovered = !!item.target && item.target === h && item.target !== 'cat'
        const b = {
          sheet: S[item.sprite],
          meta,
          frame,
          row,
          x: ox + item.x + meta.dx,
          y: oy + item.y + meta.dy - (hovered ? 1 : 0),
        }
        if (hovered) blitOutlined(g, b, PALETTE.accent)
        else blit(g, b)
        if (item.sprite === 'figure' && h === 'projects') {
          const L = layout.laptop
          dottedRect(g, ox + L.x - 1, oy + L.y - 1 + BREATH[t], L.w + 2, L.h + 2, PALETTE.accent)
        }
      }
    }
    raf = requestAnimationFrame(paint)
    return () => cancelAnimationFrame(raf)
  }, [ready, geo])

  // Hit areas, left to right so the tab order walks the room.
  const hits = useMemo(() => {
    if (!geo) return []
    const { layout } = geo
    const list: { key: string; target: Target; rect: { x: number; y: number; w: number; h: number }; z: number }[] = []
    for (const p of layout.items as Placement[]) {
      if (!p.target) continue
      list.push({ key: p.sprite, target: p.target, rect: hitOf(p), z: 1 })
    }
    list.push({ key: 'laptop', target: 'projects', rect: layout.laptop, z: 2 })
    return list.sort((a, b) => a.rect.x - b.rect.x)
  }, [geo])

  const pan = geo && panned && !compact ? Math.round((geo.nw * geo.s * 0.19) / geo.s) * geo.s : 0

  return (
    <div
      ref={wrap}
      className={`room ${ready ? 'ready' : ''}`}
      style={{ ['--s' as string]: geo?.s ?? 2, ['--pan' as string]: `${pan}px` }}
    >
      <div className="stage">
        <canvas ref={canvas} aria-hidden />
        {geo && (
          <div className="hits">
            {hits.map(({ key, target, rect, z }) => {
              const style = {
                left: (geo.ox + rect.x) * geo.s,
                top: (geo.oy + rect.y) * geo.s,
                width: rect.w * geo.s,
                height: rect.h * geo.s,
                zIndex: z,
              }
              const enter = () => setHover(target)
              const leave = () => setHover((h) => (h === target ? null : h))
              const origin = () => {
                const r = wrap.current!.getBoundingClientRect()
                return { x: r.left + style.left + style.width / 2 - pan, y: r.top + style.top + style.height / 2 }
              }
              const tag = (
                <span className="tag" aria-hidden>
                  {LABELS[target]}
                </span>
              )
              if (target === 'cat') {
                return <span key={key} className="hit flavour" style={style} aria-hidden onPointerEnter={enter} onPointerLeave={leave} />
              }
              if (target === 'medal' || target === 'star') {
                return (
                  <span key={key} className="hit flavour" style={style} role="img" aria-label={LABELS[target]} onPointerEnter={enter} onPointerLeave={leave}>
                    {tag}
                  </span>
                )
              }
              if (target === 'resume') {
                return (
                  <a key={key} className="hit" style={style} href={RESUME_URL} onPointerEnter={enter} onPointerLeave={leave} onFocus={enter} onBlur={leave}>
                    <span className="sr-only">resume (opens the resume site)</span>
                    {tag}
                  </a>
                )
              }
              return (
                <button
                  key={key}
                  type="button"
                  className="hit"
                  style={style}
                  onPointerEnter={enter}
                  onPointerLeave={leave}
                  onFocus={enter}
                  onBlur={leave}
                  onClick={() => isSectionId(target) && onOpen(target, origin())}
                >
                  <span className="sr-only">{LABELS[target]}</span>
                  {tag}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
