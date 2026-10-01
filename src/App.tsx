import { useCallback, useEffect, useState } from 'react'
import Panel from './components/Panel'
import Room from './components/Room'
import { RESUME_URL, SECTIONS, isSectionId, type SectionId } from './nav'
import type { Target } from './room/layout'

const COMPACT = '(max-width: 820px)'
const fromHash = (): SectionId | null => {
  const h = location.hash.replace('#', '')
  return isSectionId(h) ? h : null
}

export default function App() {
  const [open, setOpen] = useState<SectionId | null>(fromHash)
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null)
  const [compact, setCompact] = useState(() => matchMedia(COMPACT).matches)

  useEffect(() => {
    const mq = matchMedia(COMPACT)
    const onMq = () => setCompact(mq.matches)
    mq.addEventListener('change', onMq)
    const onHash = () => setOpen(fromHash())
    window.addEventListener('hashchange', onHash)
    return () => {
      mq.removeEventListener('change', onMq)
      window.removeEventListener('hashchange', onHash)
    }
  }, [])

  // The hash mirrors the open panel so deep links and back/forward work.
  useEffect(() => {
    const want = open ? `#${open}` : ''
    if (location.hash !== want) history.replaceState(null, '', want || location.pathname)
  }, [open])

  const show = useCallback((target: Target, at: { x: number; y: number }) => {
    if (!isSectionId(target)) return
    setOrigin(at)
    setOpen(target)
  }, [])
  const close = useCallback(() => setOpen(null), [])

  return (
    <main className={`site ${compact ? 'compact' : ''} ${open ? 'open' : ''}`}>
      <Room compact={compact} panned={!!open} onOpen={show} />

      <header className="chrome">
        <a className="name" href="/" onClick={(e) => (e.preventDefault(), close())}>
          mihir okte
        </a>
        <nav className="textnav" aria-label="sections">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              className={open === s.id ? 'active' : ''}
              aria-pressed={open === s.id}
              onClick={(e) => {
                const r = e.currentTarget.getBoundingClientRect()
                show(s.id, { x: r.left + r.width / 2, y: r.bottom })
              }}
            >
              {s.label}
            </button>
          ))}
          <a href={RESUME_URL}>resume</a>
        </nav>
      </header>

      {open && compact && <button type="button" className="scrim" aria-label="close panel" onClick={close} />}
      <Panel open={open} origin={origin} onClose={close} />
    </main>
  )
}
