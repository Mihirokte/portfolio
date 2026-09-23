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
export function Bar({ value, label }: { value: number; label?: string }) {
  return (
    <div
      className="bar"
      role="progressbar"
      aria-label={label ?? 'progress'}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="bar-fill" style={{ width: `${value}%` }} />
    </div>
  )
}

// ---- status indicator ----
// The coloured dot is decorative; the status is also carried as text (visually
// hidden in dense rows) so meaning never depends on colour alone.
const STATUS_TEXT: Record<string, string> = {
  none: 'not started',
  attempted: 'attempted',
  solved: 'solved',
  revisit: 'revisit',
  read: 'read',
  unread: 'not read',
}

function StatusDot({ status }: { status: string }) {
  return (
    <>
      <span className={`dot ${status}`} aria-hidden="true" />
      <span className="sr-only">{STATUS_TEXT[status] ?? status}</span>
    </>
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
    <div className="chips" role="group" aria-label="Mark your status on this problem">
      {PSTATUS.map((s) => (
        <button
          key={s.key}
          className={`chip ${cur === s.key ? 'on' : ''}`}
          aria-pressed={cur === s.key}
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
    <>
      <label className="sr-only" htmlFor={`notes-${id}`}>
        Your notes on this problem
      </label>
      <textarea
        id={`notes-${id}`}
        className="notes"
        placeholder="notes to future you…"
        defaultValue={notes ?? ''}
        onBlur={(e) => dispatch(setProblemNotes({ id, notes: e.target.value }))}
      />
    </>
  )
}

export function LessonNotes({ id, initial }: { id: string; initial?: string }) {
  const dispatch = useAppDispatch()
  return (
    <>
      <label className="sr-only" htmlFor={`lnotes-${id}`}>
        Your notes on this lesson
      </label>
      <textarea
        id={`lnotes-${id}`}
        className="notes"
        placeholder="your notes on this lesson…"
        defaultValue={initial ?? ''}
        onBlur={(e) => dispatch(setLessonNotes({ id, notes: e.target.value }))}
      />
    </>
  )
}

// ---- a single problem row in a list ----
export function ProblemRow({ drill }: { drill: Drill }) {
  const status = useAppSelector((s) => s.progress.problems[drill.id]?.status ?? 'none')
  return (
    <a className="list-row glass-card" href={`#/drill/${drill.id}`}>
      <StatusDot status={status} />
      <span className="row-title">{drill.title}</span>
      {isRunnable(drill.id) && (
        <span className="runnable">
          <span aria-hidden="true">▶</span> editor
        </span>
      )}
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
      <StatusDot status={read ? 'read' : 'unread'} />
      <span className="row-title">{title}</span>
      <span className="meta">{minutes} min</span>
    </a>
  )
}
