import { useAppDispatch, useAppSelector } from '../store'
import {
  setProblemNotes,
  setProblemStatus,
  setLessonNotes,
  type ProblemStatus,
} from '../store/progressSlice'
import { isRunnable } from '../selectors'
import type { Drill } from '../types'

// ---- progress bar ----
export function Bar({ value }: { value: number }) {
  return (
    <div className="bar" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <div className="bar-fill" style={{ width: `${value}%` }} />
    </div>
  )
}

// ---- problem status chips ----
const PSTATUS: { key: ProblemStatus; label: string }[] = [
  { key: 'attempted', label: 'attempted' },
  { key: 'solved', label: 'solved' },
  { key: 'revisit', label: 'revisit' },
]

export function ProblemStatusBar({ id }: { id: string }) {
  const cur = useAppSelector((s) => s.progress.problems[id]?.status ?? 'none')
  const dispatch = useAppDispatch()
  return (
    <div className="chips">
      {PSTATUS.map((s) => (
        <button
          key={s.key}
          className={`chip ${cur === s.key ? 'on' : ''}`}
          onClick={() => dispatch(setProblemStatus({ id, status: cur === s.key ? 'none' : s.key }))}
        >
          {s.label}
        </button>
      ))}
    </div>
  )
}

export function ProblemNotes({ id }: { id: string }) {
  const notes = useAppSelector((s) => s.progress.problems[id]?.notes)
  const dispatch = useAppDispatch()
  return (
    <textarea
      className="notes"
      placeholder="notes to future you…"
      defaultValue={notes ?? ''}
      onBlur={(e) => dispatch(setProblemNotes({ id, notes: e.target.value }))}
    />
  )
}

export function LessonNotes({ id, initial }: { id: string; initial?: string }) {
  const dispatch = useAppDispatch()
  return (
    <textarea
      className="notes"
      placeholder="your notes on this lesson…"
      defaultValue={initial ?? ''}
      onBlur={(e) => dispatch(setLessonNotes({ id, notes: e.target.value }))}
    />
  )
}

// ---- a single problem row in a list ----
export function ProblemRow({ drill }: { drill: Drill }) {
  const status = useAppSelector((s) => s.progress.problems[drill.id]?.status ?? 'none')
  return (
    <a className="list-row glass-card" href={`#/drill/${drill.id}`}>
      <span className={`dot ${status}`} />
      <span className="row-title">{drill.title}</span>
      {isRunnable(drill.id) && <span className="runnable">▶ editor</span>}
      <span className={`pill ${drill.difficulty.toLowerCase()}`}>{drill.difficulty}</span>
      <span className="meta topic">{drill.topic}</span>
    </a>
  )
}

// ---- a single lesson row in a list ----
export function LessonRow({
  courseKey,
  lessonId,
  title,
  minutes,
}: {
  courseKey: string
  lessonId: string
  title: string
  minutes: number
}) {
  const read = useAppSelector((s) => s.progress.lessons[lessonId]?.status === 'read')
  return (
    <a className="list-row glass-card" href={`#/study/${courseKey}/${lessonId}`}>
      <span className={`dot ${read ? 'solved' : ''}`} />
      <span className="row-title">{title}</span>
      <span className="meta">{minutes} min</span>
    </a>
  )
}
