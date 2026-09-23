import { useMemo } from 'react'
import { SKILLS } from '../content'

/* deterministic random so the trails are the same on every visit */
function mulberry32(a: number) {
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

type Print = { x: number; y: number; rot: number; scale: number; label: string; side: 1 | -1 }
type Trail = { name: string; prints: Print[]; path: string }

const W = 420
const ROW = 66 // vertical distance per print

/**
 * One trail per skill group. Prints alternate left/right of a gently
 * wandering centre line, like a cat walking across wet paper.
 */
function buildTrail(gi: number): Trail {
  const group = SKILLS[gi]
  const rnd = mulberry32(41 + gi * 17)
  const prints: Print[] = []
  const cx0 = W / 2 + (rnd() - 0.5) * 30
  for (let i = 0; i < group.items.length; i++) {
    const side: 1 | -1 = i % 2 === 0 ? -1 : 1
    const cx = cx0 + Math.sin(i * 0.9 + gi) * 40
    prints.push({
      x: cx + side * (62 + rnd() * 14),
      y: 58 + i * ROW + (rnd() - 0.5) * 12,
      rot: side * (8 + rnd() * 14) + Math.cos(i * 0.9 + gi) * 12,
      scale: 0.92 + rnd() * 0.16,
      label: group.items[i],
      side,
    })
  }
  // faint dotted walking line through the centre of the trail
  const path = prints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${(p.x - p.side * 62).toFixed(1)} ${p.y.toFixed(1)}`)
    .join(' ')
  return { name: group.label.toLowerCase(), prints, path }
}

function Paw({ p }: { p: Print }) {
  return (
    <g className="paw" transform={`translate(${p.x} ${p.y}) rotate(${p.rot}) scale(${p.scale})`}>
      {/* toe beans */}
      <ellipse cx={-22} cy={-26} rx={7} ry={9} transform="rotate(-18 -22 -26)" />
      <ellipse cx={-8} cy={-34} rx={7} ry={9.5} transform="rotate(-6 -8 -34)" />
      <ellipse cx={8} cy={-34} rx={7} ry={9.5} transform="rotate(6 8 -34)" />
      <ellipse cx={22} cy={-26} rx={7} ry={9} transform="rotate(18 22 -26)" />
      {/* main pad */}
      <path d="M -26 -6 C -26 -20 -14 -20 0 -14 C 14 -20 26 -20 26 -6 C 26 8 16 16 0 16 C -16 16 -26 8 -26 -6 Z" />
      <text x={0} y={36} textAnchor="middle" className="paw-label" transform={`rotate(${-p.rot} 0 36)`}>
        {p.label}
      </text>
    </g>
  )
}

export function PawTrail({ groupIndex }: { groupIndex: number }) {
  const trail = useMemo(() => buildTrail(groupIndex), [groupIndex])
  const H = 70 + trail.prints.length * ROW
  return (
    <figure className="trail">
      <figcaption className="script">{trail.name}</figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} role="list" aria-label={`${trail.name} skills`}>
        <path className="walk" d={trail.path} />
        {trail.prints.map((p) => (
          <g key={p.label} role="listitem" aria-label={p.label}>
            <Paw p={p} />
          </g>
        ))}
      </svg>
    </figure>
  )
}
