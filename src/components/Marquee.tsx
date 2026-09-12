import { MARQUEE_TEXT } from '../content'
import { PALETTE } from '../palette'

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden py-6 md:py-8" style={{ backgroundColor: PALETTE.steel }}>
      <div className="marquee-track">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            aria-hidden={i > 0}
            className="shrink-0 uppercase select-none"
            style={{
              fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800,
              color: PALETTE.ink,
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: 1,
              paddingRight: '0.25em',
            }}
          >
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>
    </div>
  )
}
