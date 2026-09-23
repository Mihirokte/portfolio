import { useRef } from 'react'
import { AREAS } from '../data/drills'
import { findCourse } from '../content'
import { COMPANIES } from '../content/companies'
import { HOME_AREAS } from '../areas'
import { exportProgress, readProgressFile } from '../storage'
import { importAll } from '../store/progressSlice'
import { useAppDispatch, useAppSelector } from '../store'
import { Bar } from '../components/ui'

export default function Home() {
  const progress = useAppSelector((s) => s.progress)
  const dispatch = useAppDispatch()
  const fileRef = useRef<HTMLInputElement>(null)

  const stat = (key: string, kind: string) => {
    if (kind === 'companies') return { count: `${COMPANIES.length}`, pct: -1 }
    if (kind === 'problems') {
      const drills = AREAS.find((a) => a.key === key)?.drills ?? []
      const solved = drills.filter((d) => progress.problems[d.id]?.status === 'solved').length
      return {
        count: `${solved}/${drills.length}`,
        pct: drills.length ? Math.round((solved / drills.length) * 100) : 0,
      }
    }
    const course = findCourse(key)
    const total = course?.chapters.reduce((m, ch) => m + ch.lessons.length, 0) ?? 0
    const read =
      course?.chapters.reduce(
        (m, ch) => m + ch.lessons.filter((l) => progress.lessons[l.id]?.status === 'read').length,
        0,
      ) ?? 0
    return { count: `${read}/${total}`, pct: total ? Math.round((read / total) * 100) : 0 }
  }

  return (
    <div className="page">
      <nav className="index" aria-label="Areas">
        {HOME_AREAS.map((a, i) => {
          const s = stat(a.key, a.kind)
          return (
            <a key={a.key} className="index-row" href={a.href}>
              <span className="index-num" aria-hidden="true">
                {a.kind === 'companies' ? '' : String(i + 1).padStart(2, '0')}
              </span>
              <h2>{a.label}</h2>
              <span className="index-stat">
                <span className="count">{s.count}</span>
                {s.pct >= 0 && <Bar value={s.pct} label={`${a.label} progress`} />}
              </span>
            </a>
          )
        })}
      </nav>

      <div className="data-row">
        <button className="cta" data-variant="quiet" onClick={() => exportProgress(progress)}>
          Export
        </button>
        <button className="cta" data-variant="quiet" onClick={() => fileRef.current?.click()}>
          Import
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json"
          hidden
          onChange={(e) => {
            const f = e.target.files?.[0]
            if (f) readProgressFile(f).then((p) => dispatch(importAll(p)))
          }}
        />
      </div>
    </div>
  )
}
