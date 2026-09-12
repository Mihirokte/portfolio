import { MARQUEE_TEXT } from '../content'

export default function Marquee() {
  return (
    <div className="w-full bg-white overflow-hidden py-6 md:py-8">
      <div className="marquee-track">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            aria-hidden={i > 0}
            className="shrink-0 uppercase select-none"
            style={{
              fontFamily: '"Bamboly Demo", sans-serif',
              color: '#EC612C',
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
