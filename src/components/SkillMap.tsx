import { useMemo } from 'react'
import { SKILLS } from '../content'

const W = 1000
const H = 560

/* deterministic random so the sky is the same on every visit */
function mulberry32(a: number) {
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Star = { x: number; y: number; r: number; label: string }
type Constellation = { name: string; stars: Star[]; links: [number, number][] }

/* one constellation per skill group, each in its own patch of sky */
const REGIONS = [
  { x: 30, y: 60, w: 430, h: 200 },
  { x: 540, y: 40, w: 430, h: 210 },
  { x: 30, y: 320, w: 400, h: 200 },
  { x: 500, y: 300, w: 470, h: 230 },
]

function buildSky(): Constellation[] {
  return SKILLS.map((group, gi) => {
    const rnd = mulberry32(101 + gi * 37)
    const R = REGIONS[gi]
    const stars: Star[] = []
    for (const label of group.items) {
      // rejection sampling keeps stars from crowding each other
      let x = 0, y = 0, tries = 0
      do {
        x = R.x + 30 + rnd() * (R.w - 60)
        y = R.y + 20 + rnd() * (R.h - 40)
        tries++
      } while (tries < 40 && stars.some((s) => Math.hypot(s.x - x, s.y - y) < 85))
      stars.push({ x, y, r: 2.2 + rnd() * 2.4, label })
    }
    // link stars in a wandering chain, then close one loop for a constellation shape
    const order = stars.map((_, i) => i).sort((a, b) => stars[a].x - stars[b].x)
    const links: [number, number][] = []
    for (let i = 0; i < order.length - 1; i++) links.push([order[i], order[i + 1]])
    if (order.length > 3) links.push([order[0], order[Math.floor(order.length / 2) + 1]])
    return { name: group.label.toLowerCase(), stars, links }
  })
}

export default function SkillMap() {
  const sky = useMemo(buildSky, [])
  return (
    <div className="glass skymap reveal" role="img" aria-label="Skill map drawn as constellations">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="auto">
        <defs>
          <radialGradient id="starglow">
            <stop offset="0" stopColor="#FFF8F0" stopOpacity="0.9" />
            <stop offset="0.45" stopColor="#F4D06F" stopOpacity="0.35" />
            <stop offset="1" stopColor="#F4D06F" stopOpacity="0" />
          </radialGradient>
        </defs>
        {sky.map((c, ci) => (
          <g key={c.name} className="constellation">
            {/* constellation name, faint, top-left of its region */}
            <text className="sky-name" x={REGIONS[ci].x + 4} y={REGIONS[ci].y - 6}>
              {c.name}
            </text>
            {c.links.map(([a, b], i) => (
              <line
                key={i}
                className="sky-link"
                x1={c.stars[a].x}
                y1={c.stars[a].y}
                x2={c.stars[b].x}
                y2={c.stars[b].y}
              />
            ))}
            {c.stars.map((s) => {
              const flip = s.x > W - 130
              return (
                <g key={s.label} className="sky-star">
                  <circle cx={s.x} cy={s.y} r={s.r * 6} fill="url(#starglow)" />
                  <circle cx={s.x} cy={s.y} r={s.r} className="sky-core" />
                  <text x={flip ? s.x - 10 : s.x + 10} y={s.y + 4} textAnchor={flip ? 'end' : 'start'} className="sky-label">
                    {s.label.toLowerCase()}
                  </text>
                </g>
              )
            })}
          </g>
        ))}
      </svg>
    </div>
  )
}
