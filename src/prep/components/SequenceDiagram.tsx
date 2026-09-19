import type { JSX } from 'react'

// Minimal sequence-diagram renderer — parses the subset of mermaid
// `sequenceDiagram` syntax the lessons use (participant, ->>, -->>, Note).
// Purpose-built so we don't ship the ~4MB full mermaid engine to mobile.

interface Step {
  kind: 'msg' | 'note'
  from: string
  to: string
  text: string
  dashed?: boolean
}

function parse(src: string): { actors: string[]; steps: Step[] } {
  const actors: string[] = []
  const alias: Record<string, string> = {}
  const steps: Step[] = []
  const add = (name: string) => {
    if (!actors.includes(name)) actors.push(name)
  }
  for (const raw of src.split('\n')) {
    const line = raw.trim()
    if (!line || line === 'sequenceDiagram') continue
    let m
    if ((m = /^participant\s+(\S+)(?:\s+as\s+(.+))?$/.exec(line))) {
      const id = m[1]
      const label = (m[2] ?? id).trim()
      alias[id] = label
      add(label)
    } else if ((m = /^Note\s+(?:over|left of|right of)\s+([^:]+):\s*(.+)$/.exec(line))) {
      const who = m[1].split(',')[0].trim()
      const name = alias[who] ?? who
      add(name)
      steps.push({ kind: 'note', from: name, to: name, text: m[2].trim() })
    } else if ((m = /^(\S+)\s*(--?>>?)\s*(\S+)\s*:\s*(.+)$/.exec(line))) {
      const from = alias[m[1]] ?? m[1]
      const to = alias[m[3]] ?? m[3]
      add(from)
      add(to)
      steps.push({ kind: 'msg', from, to, text: m[4].trim(), dashed: m[2].startsWith('--') })
    }
  }
  return { actors, steps }
}

export default function SequenceDiagram({ chart }: { chart: string }): JSX.Element {
  const { actors, steps } = parse(chart)
  if (actors.length === 0) return <pre className="desc code">{chart}</pre>

  const colW = 118
  const padX = 14
  const headerH = 38
  const rowH = 40
  const width = padX * 2 + colW * Math.max(actors.length, 1)
  const height = headerH + rowH * steps.length + 24
  const lifeX = (name: string) => padX + colW * actors.indexOf(name) + colW / 2

  return (
    <div className="seqdiagram">
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" role="img" aria-label="sequence diagram">
        {/* lifelines */}
        {actors.map((a) => (
          <line
            key={`ll-${a}`}
            x1={lifeX(a)}
            y1={headerH}
            x2={lifeX(a)}
            y2={height - 10}
            stroke="#9dd9d2"
            strokeOpacity="0.25"
            strokeDasharray="4 4"
          />
        ))}
        {/* actor headers */}
        {actors.map((a) => (
          <g key={`h-${a}`}>
            <rect
              x={lifeX(a) - colW / 2 + 8}
              y={8}
              width={colW - 16}
              height={28}
              rx={7}
              fill="#392f5a"
              stroke="#9dd9d2"
              strokeOpacity="0.5"
            />
            <text
              x={lifeX(a)}
              y={26}
              textAnchor="middle"
              fill="#fff8f0"
              fontSize="12"
              fontFamily="'IBM Plex Mono', monospace"
            >
              {a.length > 16 ? a.slice(0, 15) + '…' : a}
            </text>
          </g>
        ))}
        {/* steps */}
        {steps.map((s, i) => {
          const y = headerH + rowH * i + 30
          if (s.kind === 'note') {
            const x = lifeX(s.from)
            return (
              <g key={i}>
                <rect
                  x={x - colW / 2 + 14}
                  y={y - 16}
                  width={colW - 28}
                  height={26}
                  rx={5}
                  fill="#1a1530"
                  stroke="#f4d06f"
                  strokeOpacity="0.5"
                />
                <text x={x} y={y + 1} textAnchor="middle" fill="#f4d06f" fontSize="10.5" fontFamily="'IBM Plex Mono', monospace">
                  {s.text.length > 20 ? s.text.slice(0, 19) + '…' : s.text}
                </text>
              </g>
            )
          }
          const x1 = lifeX(s.from)
          const x2 = lifeX(s.to)
          const self = x1 === x2
          const mid = (x1 + x2) / 2
          return (
            <g key={i}>
              <text
                x={self ? x1 + 6 : mid}
                y={y - 8}
                textAnchor={self ? 'start' : 'middle'}
                fill="#e8e2d6"
                fontSize="11"
                fontFamily="'IBM Plex Mono', monospace"
              >
                {s.text.length > 34 ? s.text.slice(0, 33) + '…' : s.text}
              </text>
              {self ? (
                <path
                  d={`M ${x1} ${y} h 30 v 16 h -30`}
                  fill="none"
                  stroke="#9dd9d2"
                  strokeDasharray={s.dashed ? '5 4' : undefined}
                  markerEnd="url(#arr)"
                />
              ) : (
                <line
                  x1={x1}
                  y1={y}
                  x2={x2}
                  y2={y}
                  stroke="#9dd9d2"
                  strokeDasharray={s.dashed ? '5 4' : undefined}
                  markerEnd="url(#arr)"
                />
              )}
            </g>
          )
        })}
        <defs>
          <marker id="arr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 Z" fill="#9dd9d2" />
          </marker>
        </defs>
      </svg>
    </div>
  )
}
