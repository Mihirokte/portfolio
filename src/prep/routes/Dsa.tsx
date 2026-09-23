import { useState } from 'react'
import { AREAS } from '../data/drills'
import { useAppSelector } from '../store'
import { ProblemRow } from '../components/ui'
import { NotFound, BackLink } from '../components/nav'
import { Input } from '../ui/input'

const SELECT =
  'h-11 px-3 text-sm bg-transparent border border-input text-foreground focus-visible:outline-2 focus-visible:outline-ring'

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

  return (
    <div className="max-w-3xl">
      <BackLink href="#/">Home</BackLink>
      <h1>DSA</h1>
      <div className="flex flex-wrap gap-2 mt-8 mb-6">
        <Input className="flex-1 min-w-50 h-11" placeholder="Search…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search problems" />
        <select className={SELECT} value={topic} onChange={(e) => setTopic(e.target.value)} aria-label="Topic">
          <option value="all">Any topic</option>
          {topics.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <select className={SELECT} value={diff} onChange={(e) => setDiff(e.target.value)} aria-label="Difficulty">
          <option value="all">Any difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select className={SELECT} value={st} onChange={(e) => setSt(e.target.value)} aria-label="Status">
          <option value="all">Any status</option>
          <option value="none">Untouched</option>
          <option value="attempted">Attempted</option>
          <option value="solved">Solved</option>
          <option value="revisit">Revisit</option>
        </select>
      </div>
      <div className="border-t border-border">
        {drills.map((d) => <ProblemRow key={d.id} drill={d} />)}
        {drills.length === 0 && <p className="py-6 text-sm text-muted-foreground">No match.</p>}
      </div>
    </div>
  )
}
