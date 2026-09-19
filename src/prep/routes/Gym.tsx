import { useState } from 'react'
import { AREAS } from '../data/drills'
import { PACKS } from '../data/packs'
import { useAppSelector } from '../store'
import { Bar, ProblemRow } from '../components/ui'
import { NotFound } from '../components/nav'

export function GymHome() {
  const problems = useAppSelector((s) => s.progress.problems)
  return (
    <div className="page">
      <a className="crumb" href="#/">
        ← home
      </a>
      <h1>problems</h1>
      <p className="sub">
        {Object.keys(PACKS).length} problems have a syntax-checkable editor; the rest track your
        progress and link out. Real judging happens on LeetCode.
      </p>
      <div className="area-grid">
        {AREAS.map((a) => {
          const solved = a.drills.filter((d) => problems[d.id]?.status === 'solved').length
          const touched = a.drills.filter((d) => problems[d.id] && problems[d.id].status !== 'none').length
          return (
            <a key={a.key} className="glass-card area-card" href={`#/gym/${a.key}`}>
              <div className="card-head">
                <h3>{a.label}</h3>
                <span className="meta">
                  {solved}/{a.drills.length} solved · {touched} touched
                </span>
              </div>
              <Bar value={a.drills.length ? Math.round((solved / a.drills.length) * 100) : 0} />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export function AreaList({ areaKey }: { areaKey: string }) {
  const area = AREAS.find((a) => a.key === areaKey)
  const problems = useAppSelector((s) => s.progress.problems)
  const [q, setQ] = useState('')
  const [diff, setDiff] = useState('all')
  const [st, setSt] = useState('all')
  if (!area) return <NotFound />
  const drills = area.drills.filter((d) => {
    const status = problems[d.id]?.status ?? 'none'
    if (diff !== 'all' && d.difficulty.toLowerCase() !== diff) return false
    if (st !== 'all' && status !== st) return false
    if (q && !(d.title + ' ' + d.topic).toLowerCase().includes(q.toLowerCase())) return false
    return true
  })
  return (
    <div className="page">
      <a className="crumb" href="#/gym">
        ← problems
      </a>
      <h1>{area.label}</h1>
      <div className="filters">
        <input
          className="search"
          placeholder="search title or topic…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <select value={diff} onChange={(e) => setDiff(e.target.value)}>
          <option value="all">any difficulty</option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
        <select value={st} onChange={(e) => setSt(e.target.value)}>
          <option value="all">any status</option>
          <option value="none">untouched</option>
          <option value="attempted">attempted</option>
          <option value="solved">solved</option>
          <option value="revisit">revisit</option>
        </select>
      </div>
      <div className="list">
        {drills.map((d) => (
          <ProblemRow key={d.id} drill={d} />
        ))}
        {drills.length === 0 && <p className="meta">nothing matches.</p>}
      </div>
    </div>
  )
}
