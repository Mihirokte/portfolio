import { useCallback, useEffect, useRef, useState } from 'react'
import { NAV, parentOf } from '../nav'
import Content from './Content'

type Props = {
  open: boolean
  target: string | null
  onClose: () => void
}

export default function Overlay({ open, target, onClose }: Props) {
  const paneRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<string>(NAV[0].id)
  const upAccum = useRef(0)

  const scrollTo = useCallback((id: string) => {
    const pane = paneRef.current
    const el = pane?.querySelector<HTMLElement>(`[data-spy="${id}"]`)
    if (!pane || !el) return
    pane.scrollTo({ top: el.offsetTop - 24, behavior: 'smooth' })
  }, [])

  /* jump to the requested target when opening */
  useEffect(() => {
    if (!open) return
    const id = target ?? NAV[0].id
    // wait one frame so the pane has layout
    const t = requestAnimationFrame(() => scrollTo(id))
    return () => cancelAnimationFrame(t)
  }, [open, target, scrollTo])

  /* scrollspy: last anchor whose top has passed the pane's reading line */
  useEffect(() => {
    const pane = paneRef.current
    if (!pane) return
    let raf = 0
    const spy = () => {
      raf = 0
      const line = pane.scrollTop + pane.clientHeight * 0.28
      const anchors = pane.querySelectorAll<HTMLElement>('[data-spy]')
      let current = anchors[0]?.dataset.spy ?? NAV[0].id
      for (const a of anchors) if (a.offsetTop <= line) current = a.dataset.spy ?? current
      // at the very bottom, the last anchor wins
      if (pane.scrollTop + pane.clientHeight >= pane.scrollHeight - 4) current = anchors[anchors.length - 1]?.dataset.spy ?? current
      setActive(current)
      history.replaceState(null, '', `#${current}`)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(spy)
    }
    pane.addEventListener('scroll', onScroll, { passive: true })
    spy()
    return () => {
      pane.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [open])

  /* wheel up at the very top closes the overlay (one-page-scroll feel) */
  const onWheel = (e: React.WheelEvent) => {
    const pane = paneRef.current
    if (!pane) return
    if (pane.scrollTop <= 0 && e.deltaY < 0) {
      upAccum.current += -e.deltaY
      if (upAccum.current > 220) {
        upAccum.current = 0
        onClose()
      }
    } else {
      upAccum.current = 0
    }
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const activeParent = parentOf(active)

  return (
    <div className={`overlay ${open ? 'open' : ''}`} aria-hidden={!open}>
      <div className="sheet glass">
        <button className="close" onClick={onClose} aria-label="Back to start">
          ✕ <span>esc</span>
        </button>

        <nav className="tree" aria-label="Sections">
          <ul>
            {NAV.map((n) => (
              <li key={n.id} className={activeParent === n.id ? 'on' : ''}>
                <button className={`t1 ${active === n.id ? 'active' : ''}`} onClick={() => scrollTo(n.id)}>
                  {n.label}
                </button>
                {n.children && (
                  <ul className="t2">
                    {n.children.map((c) => (
                      <li key={c.id}>
                        <button className={active === c.id ? 'active' : ''} onClick={() => scrollTo(c.id)}>
                          {c.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="pane" ref={paneRef} onWheel={onWheel} tabIndex={-1}>
          <Content />
        </div>
      </div>
    </div>
  )
}
