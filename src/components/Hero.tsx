import { useEffect, useRef, useState } from 'react'
import { NAME, LEFT_WORDS, RIGHT_WORDS } from '../content'
import { PALETTE } from '../palette'

// Drop a transparent PNG of yourself (chest-up, centered) at
// public/images/mihir.png — the hero hides the slot until it exists.
const CHARACTER_SRC = `${import.meta.env.BASE_URL}images/mihir.png`

// render order back -> front
const TITLE_LAYERS: { color: string; desktop: number; mobile: number }[] = [
  { color: PALETTE.ink, desktop: 36, mobile: 18 },
  { color: PALETTE.sky, desktop: 24, mobile: 12 }, // gap = background
  { color: PALETTE.aqua, desktop: 12, mobile: 6 },
  { color: PALETTE.white, desktop: 0, mobile: 0 },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)
  const [hasImage, setHasImage] = useState(true)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false,
  )

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const sectionHeight = el.offsetHeight
      const range = sectionHeight - window.innerHeight
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

  const wordStyle = (translateX: number): React.CSSProperties => ({
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 500,
    fontSize: 'clamp(1.6rem, 7vw, 9rem)',
    lineHeight: 1.1,
    opacity,
    transform: `translateX(${translateX}px)`,
    transition: 'transform 0.05s linear',
  })

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: '120vh', backgroundColor: PALETTE.sky }}
    >
      {/* B. sticky text overlay (z 5) */}
      <div className="sticky top-0 h-screen w-full" style={{ zIndex: 5 }}>
        {/* BEYOND stacked title */}
        <div className="absolute inset-0 flex items-start justify-center pt-[2vh] md:pt-[3vh]">
          <div className="relative">
            {TITLE_LAYERS.map((layer, i) => {
              const isFront = i === TITLE_LAYERS.length - 1
              const y = isMobile ? layer.mobile : layer.desktop
              return (
                <h1
                  key={layer.color}
                  aria-hidden={!isFront}
                  className={`font-bamboly leading-[0.85] tracking-tight select-none ${
                    isFront ? 'relative' : 'absolute inset-0'
                  }`}
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

        {/* side word columns */}
        <div
          className="absolute inset-0 flex items-end justify-between px-[3vw] md:px-[6vw] pointer-events-none"
          style={{ bottom: '-8vh' }}
        >
          <div className="flex flex-col gap-1 md:gap-2">
            {LEFT_WORDS.map((w, i) => (
              <span
                key={w}
                className="uppercase text-white/80 select-none"
                style={wordStyle(-offset(i))}
              >
                {w}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-1 md:gap-2 items-end">
            {RIGHT_WORDS.map((w, i) => (
              <span
                key={w}
                className="uppercase text-white/80 select-none text-right"
                style={wordStyle(offset(i))}
              >
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* A. character (z 10) */}
      {hasImage && (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
          <img
            src={CHARACTER_SRC}
            alt=""
            onError={() => setHasImage(false)}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto max-w-none block"
            style={{ height: '115%', maxHeight: '115%', minHeight: '80%' }}
          />
        </div>
      )}
    </section>
  )
}
