import { useRef } from 'react'
import { AREAS } from '../data/drills'
import { COURSES, findCourse } from '../content'
import { HOME_AREAS } from '../areas'
import { exportProgress, readProgressFile } from '../storage'
import { importAll } from '../store/progressSlice'
import { useAppDispatch, useAppSelector } from '../store'
import { Bar } from '../components/ui'

export default function Home() {
  const progress = useAppSelector((s) => s.progress)
  const dispatch = useAppDispatch()
  const fileRef = useRef<HTMLInputElement>(null)

  const areaProgress = (key: string, kind: string): { label: string; pct: number } => {
    if (kind === 'problems') {
      const drills = AREAS.find((a) => a.key === key)?.drills ?? []
      const solved = drills.filter((d) => progress.problems[d.id]?.status === 'solved').length
      return {
        label: `${solved}/${drills.length} solved`,
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
    return { label: `${read}/${total} lessons read`, pct: total ? Math.round((read / total) * 100) : 0 }
  }

  return (
    <div className="page">
      <h1>prep</h1>
      <p className="sub">
        Pick an area. DSA goes straight to problems; the rest teach the concepts first, then their
        practice. Everything — what you've read, solved, and noted — is saved in this browser only.
      </p>

      <div className="area-grid">
        {HOME_AREAS.map((a, i) => {
          const p = areaProgress(a.key, a.kind)
          return (
            <a key={a.key} className="glass-card area-card" href={a.href}>
              <div className="card-head">
                <h3>
                  <span className="step-num">{i + 1}</span>
                  {a.label}
                </h3>
                <span className="meta">
                  {a.kind === 'problems' ? 'problems' : 'study'} · {p.label}
                </span>
              </div>
              <p className="meta blurb">{a.blurb}</p>
              <Bar value={p.pct} />
            </a>
          )
        })}
      </div>

      <div className="data-row">
        <button className="cta" onClick={() => exportProgress(progress)}>
          export progress
        </button>
        <button className="cta" onClick={() => fileRef.current?.click()}>
          import progress
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
        <span className="meta count-note">
          {COURSES.length} study areas · {AREAS.reduce((n, a) => n + a.drills.length, 0)} problems
        </span>
      </div>
    </div>
  )
}
