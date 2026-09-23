import { useAppDispatch, useAppSelector } from '../store'
import {
  setProblemNotes,
  setProblemStatus,
  setLessonNotes,
  type ProblemStatus,
} from '../store/progressSlice'
import { isRunnable } from '../selectors'
import type { Drill } from '../types'
import { Badge } from '../ui/badge'
import { Progress } from '../ui/progress'
import { Textarea } from '../ui/textarea'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'
import { cn } from '../lib/utils'

// ---- progress ----
export function Bar({ value, label }: { value: number; label?: string }) {
  return <Progress value={value} aria-label={label ?? 'progress'} className="h-0.5 mt-2" />
}

// ---- status indicator: shape + text, never colour alone ----
const STATUS_TEXT: Record<string, string> = {
  none: 'not started',
  attempted: 'attempted',
  solved: 'solved',
  revisit: 'revisit',
  read: 'read',
  unread: 'not read',
}

export function StatusDot({ status }: { status: string }) {
  return (
    <>
      <span
        aria-hidden="true"
        className={cn(
          'size-2 shrink-0 border-[1.5px] border-muted-foreground',
          status === 'attempted' && 'bg-muted-foreground',
          (status === 'solved' || status === 'read') && 'rounded-full bg-brand border-brand',
          status === 'revisit' && 'border-[3px] border-brand bg-transparent',
        )}
      />
      <span className="sr-only">{STATUS_TEXT[status] ?? status}</span>
    </>
  )
}

// ---- problem status toggle group ----
const PSTATUS: ProblemStatus[] = ['attempted', 'solved', 'revisit']

export function ProblemStatusBar({ id }: { id: string }) {
  const cur = useAppSelector((s) => s.progress.problems[id]?.status ?? 'none')
  const dispatch = useAppDispatch()
  return (
    <ToggleGroup
      type="single"
      value={cur === 'none' ? '' : cur}
      onValueChange={(v) =>
        dispatch(setProblemStatus({ id, status: (v || 'none') as ProblemStatus }))
      }
      variant="outline"
      aria-label="Your status on this problem"
    >
      {PSTATUS.map((s) => (
        <ToggleGroupItem key={s} value={s} className="min-h-11 px-5 text-sm capitalize">
          {s}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
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
      <Textarea
        id={`notes-${id}`}
        placeholder="Notes…"
        defaultValue={notes ?? ''}
        className="min-h-28 resize-y px-4 py-3"
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
      <Textarea
        id={`lnotes-${id}`}
        placeholder="Notes…"
        defaultValue={initial ?? ''}
        className="min-h-28 resize-y px-4 py-3"
        onBlur={(e) => dispatch(setLessonNotes({ id, notes: e.target.value }))}
      />
    </>
  )
}

// ---- rows ----
const ROW =
  'flex items-center gap-4 min-h-14 px-4 py-4 border-b border-border no-underline text-foreground transition-colors hover:bg-secondary'

export function ProblemRow({ drill }: { drill: Drill }) {
  const status = useAppSelector((s) => s.progress.problems[drill.id]?.status ?? 'none')
  return (
    <a className={ROW} href={`#/drill/${drill.id}`}>
      <StatusDot status={status} />
      <span className="flex-1">{drill.title}</span>
      {isRunnable(drill.id) && (
        <span className="text-[0.6875rem] uppercase tracking-wider text-brand">editor</span>
      )}
      <Badge variant="outline" className="uppercase text-[0.6875rem]">
        {drill.difficulty}
      </Badge>
      <span className="hidden sm:block w-36 text-right text-sm text-muted-foreground">
        {drill.topic}
      </span>
    </a>
  )
}

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
    <a className={ROW} href={`#/study/${courseKey}/${lessonId}`}>
      <StatusDot status={read ? 'read' : 'unread'} />
      <span className="flex-1">{title}</span>
      <span className="num text-sm text-muted-foreground">{minutes} min</span>
    </a>
  )
}
