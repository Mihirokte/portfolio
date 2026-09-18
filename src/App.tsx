import { useCallback, useEffect, useRef, useState } from 'react'
import StarScene from './components/StarScene'
import Landing from './components/Landing'
import Overlay from './components/Overlay'
import { ALL_IDS, NAV } from './nav'

export default function App() {
  const [open, setOpen] = useState(false)
  const [target, setTarget] = useState<string | null>(null)
  const touchY = useRef<number | null>(null)

  const begin = useCallback((id?: string) => {
    setTarget(id ?? null)
    setOpen(true)
  }, [])
  const close = useCallback(() => {
    setOpen(false)
    history.replaceState(null, '', location.pathname)
  }, [])

  /* deep link: #work etc. opens straight into the overlay */
  useEffect(() => {
    const h = location.hash.replace('#', '')
    if (ALL_IDS.includes(h)) begin(h)
  }, [begin])

  /* landing input: first scroll down, swipe up, or a key opens the overlay */
  useEffect(() => {
    if (open) return
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 12) begin()
    }
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown', ' ', 'Enter'].includes(e.key)) {
        e.preventDefault()
        begin()
      }
    }
    const onTouchStart = (e: TouchEvent) => {
      touchY.current = e.touches[0].clientY
    }
    const onTouchEnd = (e: TouchEvent) => {
      if (touchY.current !== null && touchY.current - e.changedTouches[0].clientY > 50) begin()
      touchY.current = null
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('keydown', onKey)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [open, begin])

  return (
    <>
      <StarScene />
      <div className="vignette" aria-hidden />
      <div className="grain" aria-hidden />

      <nav className="top" aria-label="Primary">
        <a
          className="brand"
          href="#"
          onClick={(e) => {
            e.preventDefault()
            close()
          }}
        >
          mihir okte
        </a>
        <div className="nav-right">
          <ul>
            {NAV.map((n) => (
              <li key={n.id}>
                <button className="link" onClick={() => begin(n.id)}>
                  {n.label.toLowerCase()}
                </button>
              </li>
            ))}
          </ul>
          <a className="pill" href="https://resume.mihirokte.info">
            resume
          </a>
        </div>
      </nav>

      <Landing onBegin={() => begin()} hidden={open} />
      <Overlay open={open} target={target} onClose={close} />
    </>
  )
}
