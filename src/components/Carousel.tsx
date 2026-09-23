import { useCallback, useEffect, useRef, useState } from 'react'
import { SCENE_IDS, SCENES, type SceneId } from '../nav'
import SceneFlats from './Scenes'

type Props = {
  /** null = curtain up, flats parked offstage */
  scene: SceneId | null
  onChange: (s: SceneId | null) => void
}

const LOCK_MS = 700

export default function Carousel({ scene, onChange }: Props) {
  const [prev, setPrev] = useState<SceneId | null>(null)
  const [dir, setDir] = useState<1 | -1>(1)
  const lock = useRef(0)
  const touchX = useRef<number | null>(null)
  const touchY = useRef<number | null>(null)

  const go = useCallback(
    (next: SceneId | null, d: 1 | -1) => {
      const now = performance.now()
      if (now < lock.current) return
      lock.current = now + LOCK_MS
      setPrev(scene)
      setDir(d)
      onChange(next)
    },
    [scene, onChange],
  )

  const step = useCallback(
    (d: 1 | -1) => {
      if (scene === null) {
        go(d === 1 ? SCENE_IDS[0] : SCENE_IDS[SCENE_IDS.length - 1], d)
        return
      }
      const i = SCENE_IDS.indexOf(scene) + d
      go(SCENE_IDS[(i + SCENE_IDS.length) % SCENE_IDS.length], d)
    },
    [scene, go],
  )

  const jump = useCallback(
    (id: SceneId) => {
      if (id === scene) return
      const a = scene === null ? -1 : SCENE_IDS.indexOf(scene)
      go(id, SCENE_IDS.indexOf(id) > a ? 1 : -1)
    },
    [scene, go],
  )

  /* inputs */
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
      if (Math.abs(d) < 14) return
      // let a scrolling flat consume vertical wheel on compact layouts
      const t = e.target as HTMLElement
      if (t.closest('.compact .flats') && Math.abs(e.deltaY) >= Math.abs(e.deltaX)) return
      step(d > 0 ? 1 : -1)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement && /^(input|textarea)$/i.test(e.target.tagName)) return
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault()
        step(1)
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault()
        step(-1)
      } else if (e.key === 'Escape' && scene !== null) {
        go(null, -1)
      } else if (e.key === 'Home') {
        go(null, -1)
      }
    }
    const onTouchStart = (e: TouchEvent) => {
      touchX.current = e.touches[0].clientX
      touchY.current = e.touches[0].clientY
    }
    const onTouchEnd = (e: TouchEvent) => {
      if (touchX.current === null || touchY.current === null) return
      const dx = touchX.current - e.changedTouches[0].clientX
      const dy = touchY.current - e.changedTouches[0].clientY
      touchX.current = touchY.current = null
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) step(dx > 0 ? 1 : -1)
      else if (scene === null && dy > 50) step(1)
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
  }, [step, go, scene])

  /* scene -> hash (initial hash is read in App) */
  useEffect(() => {
    history.replaceState(null, '', scene ? `#${scene}` : location.pathname)
  }, [scene])

  /* clear the outgoing pair after the transition */
  useEffect(() => {
    if (prev === null) return
    const t = setTimeout(() => setPrev(null), LOCK_MS)
    return () => clearTimeout(t)
  }, [prev, scene])

  const open = scene !== null

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Sections">
        {SCENES.map((s) => (
          <button
            key={s.id}
            role="tab"
            id={`tab-${s.id}`}
            aria-selected={scene === s.id}
            aria-controls={`scene-${s.id}`}
            tabIndex={scene === s.id || (scene === null && s.id === 'about') ? 0 : -1}
            className={`tab ${scene === s.id ? 'on' : ''}`}
            onClick={() => jump(s.id)}
          >
            {s.label}
          </button>
        ))}
        <a className="tab leave" href="https://resume.mihirokte.info">
          resume
        </a>
      </div>

      <button className="wing left" onClick={() => step(-1)} aria-label="Previous section">
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M15 5 8 12l7 7" />
        </svg>
      </button>
      <button className="wing right" onClick={() => step(1)} aria-label="Next section">
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="m9 5 7 7-7 7" />
        </svg>
      </button>

      <div className={`scenes ${open ? 'open' : ''} ${dir === 1 ? 'fwd' : 'back'}`}>
        {SCENES.map((s) => {
          const state = s.id === scene ? 'in' : s.id === prev ? 'out' : 'off'
          return (
            <section
              key={s.id}
              id={`scene-${s.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${s.id}`}
              hidden={state === 'off'}
              className={`scene ${state}`}
            >
              <h2 className="title-strip">{s.label}</h2>
              <SceneFlats id={s.id} />
            </section>
          )
        })}
      </div>

      {!open && (
        <button className="cue" onClick={() => step(1)}>
          <span className="script">scroll, swipe, or press →</span>
        </button>
      )}
    </>
  )
}
