import { useEffect, useMemo, useRef, useState } from 'react'
import { AREAS } from './data/drills'
import { PACKS } from './data/packs'
import { COURSES, findCourse, findLesson } from './content'
import { validator, type JudgeState, type ValidateOutcome } from './judge'
import { exportProgress, readProgressFile } from './storage'
import {
  importAll,
  setLessonNotes,
  setLessonStatus,
  setProblemCode,
  setProblemNotes,
  setProblemStatus,
  type ProblemStatus,
} from './store/progressSlice'
import { useAppDispatch, useAppSelector } from './store'
import type { Drill, Problem } from './types'
import Editor from './components/Editor'
import Markdown from './components/Markdown'

const HOME = import.meta.env.VITE_HOME_URL ?? import.meta.env.BASE_URL

function mdLite(t: string): string {
  return t.replace(/\*\*(.+?)\*\*/g, '$1').replace(/`([^`]+)`/g, '$1')
}

function useHashRoute(): string {
  const [hash, setHash] = useState(() => window.location.hash || '#/')
  useEffect(() => {
    const fn = () => setHash(window.location.hash || '#/')
    window.addEventListener('hashchange', fn)
    return () => window.removeEventListener('hashchange', fn)
  }, [])
  return hash
}

// ---------- top bar ----------------------------------------------------------

function TopBar() {
  const hash = useHashRoute()
  const tab = hash.startsWith('#/gym') ? 'gym' : hash.startsWith('#/study') ? 'study' : 'home'
  return (
    <header className="topbar">
      <a className="brand" href="#/">
        prep
      </a>
      <nav className="tabs">
        <a className={`tab ${tab === 'study' ? 'on' : ''}`} href="#/study">
          study
        </a>
        <a className={`tab ${tab === 'gym' ? 'on' : ''}`} href="#/gym">
          problems
        </a>
      </nav>
      <a className="home-link" href={HOME}>
        ← site
      </a>
    </header>
  )
}

// ---------- home -------------------------------------------------------------

function Home() {
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
        Learn the concepts in small lessons, then drill problems. Everything — what you've read,
        what you've solved, your notes — is saved in this browser only.
      </p>

      <div className="split">
        <a className="glass-card big-card" href="#/study">
          <h2>study</h2>
          <p className="meta">Read the concepts. {COURSES.length} area(s), lessons with diagrams.</p>
          <Bar value={lessonTotal ? Math.round((lessonsRead / lessonTotal) * 100) : 0} />
          <span className="meta">
            {lessonsRead}/{lessonTotal} lessons read
          </span>
        </a>
        <a className="glass-card big-card" href="#/gym">
          <h2>problems</h2>
          <p className="meta">Drill the patterns. Syntax-check here, judge on LeetCode.</p>
          <Bar value={problemTotal ? Math.round((solved / problemTotal) * 100) : 0} />
          <span className="meta">
            {solved}/{problemTotal} solved
          </span>
        </a>
      </div>

      <div className="row gap wrap data-row">
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

function Bar({ value }: { value: number }) {
  return (
    <div className="bar">
      <div className="bar-fill" style={{ width: `${value}%` }} />
    </div>
  )
}

// ---------- study: course list ----------------------------------------------

function StudyHome() {
  const lessons = useAppSelector((s) => s.progress.lessons)
  return (
    <div className="page">
      <a className="crumb" href="#/">
        ← home
      </a>
      <h1>study</h1>
      <div className="area-grid">
        {COURSES.map((c) => {
          const total = c.chapters.reduce((m, ch) => m + ch.lessons.length, 0)
          const read = c.chapters.reduce(
            (m, ch) => m + ch.lessons.filter((l) => lessons[l.id]?.status === 'read').length,
            0,
          )
          return (
            <a key={c.key} className="glass-card area-card" href={`#/study/${c.key}`}>
              <div className="card-head">
                <h3>{c.label}</h3>
                <span className="meta">
                  {read}/{total} lessons
                </span>
              </div>
              <p className="meta blurb">{c.blurb}</p>
              <Bar value={total ? Math.round((read / total) * 100) : 0} />
            </a>
          )
        })}
        {COURSES.length < 4 && (
          <div className="glass-card area-card soon">
            <div className="card-head">
              <h3>more areas soon</h3>
              <span className="meta">LLD · Architecture · AI Engineering</span>
            </div>
            <p className="meta blurb">
              Being written in the same shape as System Design. Problems for these already live
              under the Problems tab.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// ---------- study: chapter/lesson list for a course --------------------------

function CoursePage({ courseKey }: { courseKey: string }) {
  const course = findCourse(courseKey)
  const lessons = useAppSelector((s) => s.progress.lessons)
  if (!course) return <NotFound />
  return (
    <div className="page">
      <a className="crumb" href="#/study">
        ← study
      </a>
      <h1>{course.label}</h1>
      <p className="sub">{course.blurb}</p>
      {course.chapters.map((ch) => {
        const read = ch.lessons.filter((l) => lessons[l.id]?.status === 'read').length
        return (
          <section key={ch.id} className="chapter">
            <div className="chapter-head">
              <h2>{ch.title}</h2>
              <span className="meta">
                {read}/{ch.lessons.length}
              </span>
            </div>
            <p className="meta">{ch.summary}</p>
            <div className="lesson-list">
              {ch.lessons.map((l) => (
                <a
                  key={l.id}
                  className="lesson-row glass-card"
                  href={`#/study/${course.key}/${l.id}`}
                >
                  <span className={`dot ${lessons[l.id]?.status === 'read' ? 'solved' : ''}`} />
                  <span className="drill-title">{l.title}</span>
                  <span className="meta">{l.minutes} min</span>
                </a>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

// ---------- study: a single lesson -------------------------------------------

function LessonPage({ courseKey, lessonId }: { courseKey: string; lessonId: string }) {
  const found = findLesson(courseKey, lessonId)
  const dispatch = useAppDispatch()
  const entry = useAppSelector((s) => s.progress.lessons[lessonId])
  if (!found) return <NotFound />
  const { course, chapter, lesson } = found

  // sibling nav within the whole course (flattened lesson order)
  const flat = course.chapters.flatMap((ch) => ch.lessons.map((l) => l.id))
  const idx = flat.indexOf(lessonId)
  const prev = idx > 0 ? flat[idx - 1] : null
  const next = idx < flat.length - 1 ? flat[idx + 1] : null
  const read = entry?.status === 'read'

  return (
    <div className="page wide lesson-page">
      <a className="crumb" href={`#/study/${course.key}`}>
        ← {course.label}
      </a>
      <p className="eyebrow">{chapter.title}</p>
      <h1>{lesson.title}</h1>
      <Markdown body={lesson.body} />

      <div className="lesson-notes">
        <textarea
          className="notes"
          placeholder="your notes on this lesson…"
          defaultValue={entry?.notes ?? ''}
          onBlur={(e) => dispatch(setLessonNotes({ id: lessonId, notes: e.target.value }))}
        />
      </div>

      <div className="lesson-foot">
        <button
          className={`cta ${read ? 'done' : 'run'}`}
          onClick={() =>
            dispatch(setLessonStatus({ id: lessonId, status: read ? 'unread' : 'read' }))
          }
        >
          {read ? '✓ marked read — undo' : 'mark as read'}
        </button>
        <div className="row gap">
          {prev && (
            <a className="chip" href={`#/study/${course.key}/${prev}`}>
              ← prev
            </a>
          )}
          {next && (
            <a className="chip" href={`#/study/${course.key}/${next}`}>
              next →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

// ---------- gym: area list ---------------------------------------------------

function GymHome() {
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
          const touched = a.drills.filter(
            (d) => problems[d.id] && problems[d.id].status !== 'none',
          ).length
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

function AreaList({ areaKey }: { areaKey: string }) {
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
      <div className="row gap wrap">
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
      <div className="drill-list">
        {drills.map((d) => (
          <a key={d.id} className="drill-row glass-card" href={`#/drill/${d.id}`}>
            <span className={`dot ${problems[d.id]?.status ?? ''}`} />
            <span className="drill-title">{d.title}</span>
            {PACKS[d.id] && <span className="runnable">▶ editor</span>}
            <span className={`pill ${d.difficulty.toLowerCase()}`}>{d.difficulty}</span>
            <span className="meta topic">{d.topic}</span>
          </a>
        ))}
        {drills.length === 0 && <p className="meta">nothing matches.</p>}
      </div>
    </div>
  )
}

// ---------- shared status chips ---------------------------------------------

const PSTATUS: { key: ProblemStatus; label: string }[] = [
  { key: 'attempted', label: 'attempted' },
  { key: 'solved', label: 'solved' },
  { key: 'revisit', label: 'revisit' },
]

function ProblemStatusBar({ id }: { id: string }) {
  const cur = useAppSelector((s) => s.progress.problems[id]?.status ?? 'none')
  const dispatch = useAppDispatch()
  return (
    <div className="row gap wrap">
      {PSTATUS.map((s) => (
        <button
          key={s.key}
          className={`chip ${cur === s.key ? 'on' : ''}`}
          onClick={() =>
            dispatch(setProblemStatus({ id, status: cur === s.key ? 'none' : s.key }))
          }
        >
          {s.label}
        </button>
      ))}
    </div>
  )
}

function ProblemNotes({ id }: { id: string }) {
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

// ---------- runnable problem view (syntax validator) -------------------------

function ProblemView({ problem, drill }: { problem: Problem; drill: Drill }) {
  const dispatch = useAppDispatch()
  const savedCode = useAppSelector((s) => s.progress.problems[problem.id]?.code)
  const [code, setCode] = useState(() => savedCode ?? problem.starter_code)
  const [state, setState] = useState<JudgeState>(validator.state)
  const [outcome, setOutcome] = useState<ValidateOutcome | null>(null)
  const [busy, setBusy] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  useEffect(() => {
    validator.onState = setState
    validator.start()
    setState(validator.state)
  }, [])

  const check = async () => {
    setBusy(true)
    setOutcome(null)
    dispatch(setProblemCode({ id: problem.id, code }))
    const res = await validator.validate(code, problem.signature?.name)
    setOutcome(res)
    setBusy(false)
  }

  return (
    <div className="problem-cols">
      <div className="problem-desc">
        <Markdown body={problem.description_md} />
        <p>
          <a className="ext" href={problem.link} target="_blank" rel="noopener">
            open on LeetCode ↗
          </a>
        </p>
        <ProblemStatusBar id={problem.id} />
        <ProblemNotes id={problem.id} />
        {problem.reference_solution && (
          <details open={showSolution} onToggle={(e) => setShowSolution(e.currentTarget.open)}>
            <summary>reference solution</summary>
            {showSolution && <pre className="desc code">{problem.reference_solution}</pre>}
          </details>
        )}
      </div>
      <div className="problem-code">
        <Editor key={problem.id} initial={code} onChange={setCode} />
        <div className="row gap run-row wrap">
          <button className="cta run" onClick={check} disabled={busy || state !== 'ready'}>
            {busy
              ? 'checking…'
              : state === 'booting'
                ? 'loading python… (first time takes a few s)'
                : state === 'failed'
                  ? 'python failed to load'
                  : 'check syntax'}
          </button>
          <button
            className="chip"
            onClick={() => {
              setCode(problem.starter_code)
              setOutcome(null)
              dispatch(setProblemCode({ id: problem.id, code: problem.starter_code }))
            }}
          >
            reset code
          </button>
        </div>
        {outcome?.status === 'ok' && <div className="verdict good">✓ {outcome.message}</div>}
        {outcome?.status === 'invalid' && (
          <div className="verdict bad">
            <pre className="desc code">{outcome.message}</pre>
          </div>
        )}
        {outcome?.status === 'timeout' && (
          <div className="verdict bad">Check timed out — the runtime was restarted, try again.</div>
        )}
        {outcome?.status === 'error' && (
          <div className="verdict bad">
            <pre className="desc code">{outcome.message}</pre>
          </div>
        )}
        <p className="meta hint">
          topic: {drill.topic} · this checks that your code compiles, not that it's correct — run it
          on LeetCode to judge.
        </p>
      </div>
    </div>
  )
}

function DrillView({ drill }: { drill: Drill }) {
  return (
    <div className="drill-detail glass-card">
      <pre className="desc">{mdLite(drill.prompt)}</pre>
      {drill.notes && <p className="meta">{drill.notes}</p>}
      {drill.link && (
        <p>
          <a className="ext" href={drill.link} target="_blank" rel="noopener">
            reference ↗
          </a>
        </p>
      )}
      <ProblemStatusBar id={drill.id} />
      <ProblemNotes id={drill.id} />
    </div>
  )
}

function DrillPage({ id }: { id: string }) {
  const found = useMemo(() => {
    for (const a of AREAS) {
      const d = a.drills.find((x) => x.id === id)
      if (d) return { area: a, drill: d }
    }
    return null
  }, [id])
  if (!found) return <NotFound />
  const problem = PACKS[id]
  return (
    <div className="page wide">
      <a className="crumb" href={`#/gym/${found.area.key}`}>
        ← {found.area.label}
      </a>
      <div className="row gap baseline wrap">
        <h1>{found.drill.title}</h1>
        <span className={`pill ${found.drill.difficulty.toLowerCase()}`}>
          {found.drill.difficulty}
        </span>
      </div>
      {problem ? <ProblemView problem={problem} drill={found.drill} /> : <DrillView drill={found.drill} />}
    </div>
  )
}

function NotFound() {
  return (
    <div className="page">
      <h1>nothing here</h1>
      <a className="crumb" href="#/">
        ← home
      </a>
    </div>
  )
}

// ---------- app + router -----------------------------------------------------

export default function App() {
  const hash = useHashRoute()
  const m = {
    lesson: /^#\/study\/([^/]+)\/([^/]+)$/.exec(hash),
    course: /^#\/study\/([^/]+)$/.exec(hash),
    study: /^#\/study\/?$/.exec(hash),
    area: /^#\/gym\/([^/]+)$/.exec(hash),
    gym: /^#\/gym\/?$/.exec(hash),
    drill: /^#\/drill\/(.+)$/.exec(hash),
  }
  let view
  if (m.lesson) view = <LessonPage courseKey={m.lesson[1]} lessonId={m.lesson[2]} />
  else if (m.course) view = <CoursePage courseKey={m.course[1]} />
  else if (m.study) view = <StudyHome />
  else if (m.drill) view = <DrillPage id={m.drill[1]} />
  else if (m.area) view = <AreaList areaKey={m.area[1]} />
  else if (m.gym) view = <GymHome />
  else view = <Home />
  return (
    <div className="prep-root">
      <TopBar />
      {view}
    </div>
  )
}
