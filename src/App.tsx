import { useEffect, useState } from 'react'
import Carousel from './components/Carousel'
import Theatre from './components/Theatre'
import { isSceneId, type SceneId } from './nav'

const COMPACT = '(max-width: 820px)'
const fromHash = (): SceneId | null => {
  const h = location.hash.replace('#', '')
  return isSceneId(h) ? h : null
}

export default function App() {
  const [scene, setScene] = useState<SceneId | null>(fromHash)
  const [compact, setCompact] = useState(() => matchMedia(COMPACT).matches)

  useEffect(() => {
    const mq = matchMedia(COMPACT)
    const on = () => setCompact(mq.matches)
    mq.addEventListener('change', on)
    const onHash = () => setScene(fromHash())
    window.addEventListener('hashchange', onHash)
    return () => {
      mq.removeEventListener('change', on)
      window.removeEventListener('hashchange', onHash)
    }
  }, [])

  return (
    <main className={`theatre-root ${compact ? 'compact' : ''} ${scene ? 'staged' : 'curtain'}`}>
      {/* pencil wobble used by paw prints, the floor line and tab underlines */}
      <svg width="0" height="0" aria-hidden style={{ position: 'absolute' }}>
        <filter id="wobble" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="1.6" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <Theatre compact={compact} />

      <header className="marquee">
        <a
          className="name"
          href="#"
          onClick={(e) => {
            e.preventDefault()
            setScene(null)
          }}
        >
          <span>mihir</span>
          <span>okte</span>
        </a>
        <p className="script strap">software engineer · bengaluru</p>
      </header>

      <Carousel scene={scene} onChange={setScene} />
    </main>
  )
}
