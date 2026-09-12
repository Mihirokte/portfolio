import { useEffect, useState } from 'react'
import { NAME } from '../content'
import { PALETTE } from '../palette'
import StarScene from './StarScene'

// render order back -> front
const TITLE_LAYERS: { color: string; desktop: number; mobile: number }[] = [
  { color: PALETTE.orange, desktop: 36, mobile: 18 },
  { color: PALETTE.space, desktop: 24, mobile: 12 }, // gap = background
  { color: PALETTE.gold, desktop: 12, mobile: 6 },
  { color: PALETTE.cream, desktop: 0, mobile: 0 },
]

// space, kept simple: black with two faint nebula tints
const COSMOS = [
  'radial-gradient(900px 600px at 78% 22%, rgba(157, 217, 210, 0.07), transparent 62%)',
  'radial-gradient(800px 700px at 18% 82%, rgba(255, 136, 17, 0.06), transparent 60%)',
  `linear-gradient(180deg, #0b0b14 0%, ${PALETTE.space} 60%, #000000 100%)`,
].join(', ')

export default function Hero() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false,
  )

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '120vh', background: COSMOS }}>
      {/* sticky overlay: title (z 5) with the star system on top (z 10) */}
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
                    fontSize: 'clamp(4.6rem, 20vw, 19rem)',
                    transform: `translateY(${y}px)`,
                  }}
                >
                  {NAME}
                </h1>
              )
            })}
          </div>
        </div>

        <StarScene />
      </div>
    </section>
  )
}
