import { useRef } from 'react'
import { AREAS } from '../data/drills'
import { findCourse } from '../content'
import { COMPANIES } from '../content/companies'
import { HOME_AREAS } from '../areas'
import { exportProgress, readProgressFile } from '../storage'
import { importAll } from '../store/progressSlice'
import { useAppDispatch, useAppSelector } from '../store'
import { Bar } from '../components/ui'
import { Button } from '../ui/button'

export default function Home() {
  const progress = useAppSelector((s) => s.progress)
  const dispatch = useAppDispatch()
  const fileRef = useRef<HTMLInputElement>(null)

  const stat = (key: string, kind: string) => {
    if (kind === 'companies') return { count: `${COMPANIES.length}`, pct: -1 }
    if (kind === 'problems') {
      const drills = AREAS.find((a) => a.key === key)?.drills ?? []
      const solved = drills.filter((d) => progress.problems[d.id]?.status === 'solved').length
      return { count: `${solved}/${drills.length}`, pct: drills.length ? Math.round((solved / drills.length) * 100) : 0 }
    }
    const course = findCourse(key)
    const total = course?.chapters.reduce((m, ch) => m + ch.lessons.length, 0) ?? 0
    const read = course?.chapters.reduce((m, ch) => m + ch.lessons.filter((l) => progress.lessons[l.id]?.status === 'read').length, 0) ?? 0
    return { count: `${read}/${total}`, pct: total ? Math.round((read / total) * 100) : 0 }
  }

  return (
    <div className="max-w-3xl">
      <nav className="border-t border-border" aria-label="Areas">
        {HOME_AREAS.map((a, i) => {
          const s = stat(a.key, a.kind)
          return (
            <a
              key={a.key}
              href={a.href}
              className="grid grid-cols-[2.5rem_minmax(0,1fr)_6rem] items-baseline gap-6 py-6 border-b border-border no-underline text-foreground transition-colors hover:bg-secondary group"
            >
              <span className="num text-sm text-muted-foreground" aria-hidden="true">
                {a.kind === 'companies' ? '' : String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="transition-colors group-hover:text-brand">{a.label}</h2>
              <span className="text-right">
                <span className="num block text-[0.9375rem]">{s.count}</span>
                {s.pct >= 0 && <Bar value={s.pct} label={`${a.label} progress`} />}
              </span>
            </a>
          )
        })}
      </nav>

      <div className="flex flex-wrap gap-2 mt-16 pt-6 border-t border-border">
        <Button variant="outline" onClick={() => exportProgress(progress)}>Export</Button>
        <Button variant="outline" onClick={() => fileRef.current?.click()}>Import</Button>
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
