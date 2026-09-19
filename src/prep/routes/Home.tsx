import { useRef } from 'react'
import { AREAS } from '../data/drills'
import { COURSES } from '../content'
import { exportProgress, readProgressFile } from '../storage'
import { importAll } from '../store/progressSlice'
import { useAppDispatch, useAppSelector } from '../store'
import { Bar } from '../components/ui'

export default function Home() {
  const progress = useAppSelector((s) => s.progress)
  const dispatch = useAppDispatch()
  const fileRef = useRef<HTMLInputElement>(null)

  const lessonTotal = COURSES.reduce(
    (n, c) => n + c.chapters.reduce((m, ch) => m + ch.lessons.length, 0),
    0,
  )
  const lessonsRead = Object.values(progress.lessons).filter((l) => l.status === 'read').length
  const problemTotal = AREAS.reduce((n, a) => n + a.drills.length, 0)
  const solved = Object.values(progress.problems).filter((p) => p.status === 'solved').length

  return (
    <div className="page">
      <h1>prep</h1>
      <p className="sub">
        Learn the concepts in small lessons, then drill the problems that go with them. Everything —
        what you've read, what you've solved, your notes — is saved in this browser only.
      </p>

      <div className="split">
        <a className="glass-card big-card" href="#/study">
          <h2>study</h2>
          <p className="meta">Read the concepts, then their practice problems, in order.</p>
          <Bar value={lessonTotal ? Math.round((lessonsRead / lessonTotal) * 100) : 0} />
          <span className="meta">
            {lessonsRead}/{lessonTotal} lessons read
          </span>
        </a>
        <a className="glass-card big-card" href="#/gym">
          <h2>problems</h2>
          <p className="meta">Jump straight to the problem bank. Syntax-check here, judge on LeetCode.</p>
          <Bar value={problemTotal ? Math.round((solved / problemTotal) * 100) : 0} />
          <span className="meta">
            {solved}/{problemTotal} solved
          </span>
        </a>
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
      </div>
    </div>
  )
}
