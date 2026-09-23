import { useState } from 'react'
import { AREAS } from '../data/drills'
import { useAppSelector } from '../store'
import { ProblemRow } from '../components/ui'
import { NotFound } from '../components/nav'

// DSA is drill-only. This is its problem list, reached from the home grid.
export function DsaList() {
  const area = AREAS.find((a) => a.key === 'dsa')
  const problems = useAppSelector((s) => s.progress.problems)
  const [q, setQ] = useState('')
  const [diff, setDiff] = useState('all')
  const [st, setSt] = useState('all')
  const [topic, setTopic] = useState('all')
  if (!area) return <NotFound />

  const topics = [...new Set(area.drills.map((d) => d.topic))].sort()
  const drills = area.drills.filter((d) => {
    const status = problems[d.id]?.status ?? 'none'
    if (diff !== 'all' && d.difficulty.toLowerCase() !== diff) return false
    if (st !== 'all' && status !== st) return false
    if (topic !== 'all' && d.topic !== topic) return false
    if (q && !(d.title + ' ' + d.topic).toLowerCase().includes(q.toLowerCase())) return false
    return true
  })
  const solved = area.drills.filter((d) => problems[d.id]?.status === 'solved').length

  return (
    <div className="page">
      <a className="crumb" href="#/">
        Home
      </a>
      <h1>DSA</h1>
      <p className="sub">
        {solved}/{area.drills.length} solved. Write and syntax-check here, judge on LeetCode.
      </p>
      <div className="filters">
        <input
          className="search"
          placeholder="search title or topic…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="all">any topic</option>
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
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
