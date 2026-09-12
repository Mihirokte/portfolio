import { useEffect, useRef, useState } from 'react'
import { NAME, LEFT_WORDS, RIGHT_WORDS } from '../content'
import { PALETTE } from '../palette'
import StarScene from './StarScene'

// render order back -> front
const TITLE_LAYERS: { color: string; desktop: number; mobile: number }[] = [
  { color: PALETTE.orange, desktop: 36, mobile: 18 },
  { color: PALETTE.purple, desktop: 24, mobile: 12 }, // gap = background
  { color: PALETTE.gold, desktop: 12, mobile: 6 },
  { color: PALETTE.cream, desktop: 0, mobile: 0 },
]

// space, kept simple: deep purple with two faint nebula tints
const COSMOS = [
  'radial-gradient(900px 600px at 78% 22%, rgba(157, 217, 210, 0.13), transparent 62%)',
  'radial-gradient(800px 700px at 18% 82%, rgba(255, 136, 17, 0.10), transparent 60%)',
  `linear-gradient(180deg, ${PALETTE.purple} 0%, #241d3f 55%, ${PALETTE.space} 100%)`,
].join(', ')

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false,
  )

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const range = el.offsetHeight - window.innerHeight
      const p = range > 0 ? -rect.top / range : 0
      setProgress(Math.min(1, Math.max(0, p)))
      setIsMobile(window.innerWidth < 768)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const scaleFactor = isMobile ? 0.5 : 1
  const opacity = 0.35 + progress * 0.65
  const offset = (i: number) => (60 + i * 40) * scaleFactor * (1 - progress)

  // 70% of the original clamp(1.6rem, 7vw, 9rem), weight 800
  const wordStyle = (translateX: number): React.CSSProperties => ({
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 800,
    fontSize: 'clamp(1.12rem, 4.9vw, 6.3rem)',
    lineHeight: 1.1,
    opacity,
    transform: `translateX(${translateX}px)`,
    transition: 'transform 0.05s linear',
  })

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: '120vh', background: COSMOS }}
    >
      {/* sticky overlay: title + words (z 5) with the star system on top (z 10) */}
      <div className="sticky top-0 h-screen w-full" style={{ zIndex: 5 }}>
        <div className="absolute inset-0 flex items-start justify-center pt-[2vh] md:pt-[3vh]">
          <div className="relative">
            {TITLE_LAYERS.map((layer, i) => {
              const isFront = i === TITLE_LAYERS.length - 1
              const y = isMobile ? layer.mobile : layer.desktop
              return (
                <h1
                  key={layer.color}
                  aria-hidden={!isFront}
                  className={`font-display leading-[0.85] select-none ${isFront ? 'relative' : 'absolute inset-0'}`}
                  style={{
                    color: layer.color,
                    fontSize: 'clamp(7.5rem, 30vw, 28rem)',
                    transform: `translateY(${y}px)`,
                  }}
                >
                  {NAME}
                </h1>
              )
            })}
          </div>
        </div>

        <div
          className="absolute inset-0 flex items-end justify-between px-[3vw] md:px-[6vw] pointer-events-none"
          style={{ bottom: '-8vh' }}
        >
          <div className="flex flex-col gap-1 md:gap-2">
            {LEFT_WORDS.map((w, i) => (
              <span key={w} className="uppercase text-[#FFF8F0]/80 select-none" style={wordStyle(-offset(i))}>
                {w}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-1 md:gap-2 items-end">
            {RIGHT_WORDS.map((w, i) => (
              <span key={w} className="uppercase text-[#FFF8F0]/80 select-none text-right" style={wordStyle(offset(i))}>
                {w}
              </span>
            ))}
          </div>
        </div>

        <StarScene />
      </div>
    </section>
  )
}
