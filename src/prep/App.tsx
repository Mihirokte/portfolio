import { useEffect, useMemo, useRef, useState } from 'react'
import { AREAS } from './data/drills'
import { PACKS } from './data/packs'
import { judge, type JudgeState } from './judge'
import { exportProgress, importProgress, loadProgress, updateEntry } from './storage'
import type { Drill, Problem, Progress, RunOutcome, Status } from './types'
import Editor from './components/Editor'

const STATUSES: { key: Status; label: string }[] = [
  { key: 'attempted', label: 'attempted' },
  { key: 'solved', label: 'solved' },
  { key: 'revisit', label: 'revisit' },
]

function useHashRoute(): string {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const fn = () => setHash(window.location.hash)
    window.addEventListener('hashchange', fn)
    return () => window.removeEventListener('hashchange', fn)
  }, [])
  return hash
}

function statusOf(p: Progress, id: string): Status {
  return p[id]?.status ?? 'none'
}

// ---------- dashboard --------------------------------------------------------

function Dashboard({ progress }: { progress: Progress }) {
  const fileRef = useRef<HTMLInputElement>(null)
  return (
    <div className="page">
      <p className="eyebrow">prep</p>
      <h1>problem gym</h1>
      <p className="sub">
        {Object.keys(PACKS).length} problems run and get judged in your browser. Progress lives in
        this browser only.
      </p>
      <div className="area-grid">
        {AREAS.map((a) => {
          const solved = a.drills.filter((d) => statusOf(progress, d.id) === 'solved').length
          const attempted = a.drills.filter((d) => statusOf(progress, d.id) !== 'none').length
          const pct = a.drills.length ? Math.round((solved / a.drills.length) * 100) : 0
          return (
            <a key={a.key} className="glass-card area-card" href={`#/area/${a.key}`}>
              <div className="card-head">
                <h3>{a.label}</h3>
                <span className="meta">
                  {solved}/{a.drills.length} solved · {attempted} touched
                </span>
              </div>
              <div className="bar">
                <div className="bar-fill" style={{ width: `${pct}%` }} />
              </div>
            </a>
          )
        })}
      </div>
      <div className="row gap">
        <button className="cta" onClick={exportProgress}>
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
            if (f) importProgress(f).then(() => window.location.reload())
          }}
        />
        <a className="cta" href={`${import.meta.env.BASE_URL}`}>
          ← portfolio
        </a>
      </div>
    </div>
  )
}

// ---------- area list --------------------------------------------------------

function AreaList({ areaKey, progress }: { areaKey: string; progress: Progress }) {
  const area = AREAS.find((a) => a.key === areaKey)
  const [q, setQ] = useState('')
  const [diff, setDiff] = useState('all')
  const [st, setSt] = useState('all')
  if (!area) return <NotFound />
  const drills = area.drills.filter((d) => {
    if (diff !== 'all' && d.difficulty.toLowerCase() !== diff) return false
    if (st !== 'all' && statusOf(progress, d.id) !== st) return false
    if (q && !(d.title + ' ' + d.topic).toLowerCase().includes(q.toLowerCase())) return false
    return true
  })
  return (
    <div className="page">
      <a className="crumb" href="#/">
        ← all areas
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
            <span className={`dot ${statusOf(progress, d.id)}`} />
            <span className="drill-title">{d.title}</span>
            {PACKS[d.id] && <span className="runnable">▶ runnable</span>}
            <span className={`pill ${d.difficulty.toLowerCase()}`}>{d.difficulty}</span>
            <span className="meta topic">{d.topic}</span>
          </a>
        ))}
        {drills.length === 0 && <p className="meta">nothing matches.</p>}
      </div>
    </div>
  )
}

// ---------- shared drill chrome ---------------------------------------------

function StatusBar({
  id,
  progress,
  setProgress,
}: {
  id: string
  progress: Progress
  setProgress: (p: Progress) => void
}) {
  const cur = statusOf(progress, id)
  return (
    <div className="row gap">
      {STATUSES.map((s) => (
        <button
          key={s.key}
          className={`chip ${cur === s.key ? 'on' : ''}`}
          onClick={() =>
            setProgress(updateEntry(progress, id, { status: cur === s.key ? 'none' : s.key }))
          }
        >
          {s.label}
        </button>
      ))}
    </div>
  )
}

function Notes({
  id,
  progress,
  setProgress,
}: {
  id: string
  progress: Progress
  setProgress: (p: Progress) => void
}) {
  return (
    <textarea
      className="notes"
      placeholder="notes to future you…"
      defaultValue={progress[id]?.notes ?? ''}
      onBlur={(e) => setProgress(updateEntry(progress, id, { notes: e.target.value }))}
    />
  )
}

// ---------- runnable problem view -------------------------------------------

function ProblemView({
  problem,
  drill,
  progress,
  setProgress,
}: {
  problem: Problem
  drill: Drill
  progress: Progress
  setProgress: (p: Progress) => void
}) {
  const [code, setCode] = useState(() => progress[problem.id]?.code ?? problem.starter_code)
  const [judgeState, setJudgeState] = useState<JudgeState>(judge.state)
  const [outcome, setOutcome] = useState<RunOutcome | null>(null)
  const [running, setRunning] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  useEffect(() => {
    judge.onState = setJudgeState
    judge.start()
    setJudgeState(judge.state)
  }, [])

  const run = async () => {
    setRunning(true)
    setOutcome(null)
    const next = updateEntry(progress, problem.id, {
      code,
      status: statusOf(progress, problem.id) === 'solved' ? 'solved' : 'attempted',
    })
    setProgress(next)
    const res = await judge.run(code, problem)
    setOutcome(res)
    setRunning(false)
    if (res.status === 'ok' && res.results.every((r) => r.passed)) {
      setProgress(updateEntry(next, problem.id, { status: 'solved' }))
    }
  }

  const passCount =
    outcome?.status === 'ok' ? outcome.results.filter((r) => r.passed).length : 0

  return (
    <div className="problem-cols">
      <div className="problem-desc">
        <pre className="desc">{problem.description_md}</pre>
        <p>
          <a className="ext" href={problem.link} target="_blank" rel="noopener">
            open on LeetCode ↗
          </a>
        </p>
        <StatusBar id={problem.id} progress={progress} setProgress={setProgress} />
        <Notes id={problem.id} progress={progress} setProgress={setProgress} />
        {problem.reference_solution && (
          <details open={showSolution} onToggle={(e) => setShowSolution(e.currentTarget.open)}>
            <summary>reference solution</summary>
            {showSolution && <pre className="desc code">{problem.reference_solution}</pre>}
          </details>
        )}
      </div>
      <div className="problem-code">
        <Editor key={problem.id} initial={code} onChange={setCode} />
        <div className="row gap run-row">
          <button className="cta run" onClick={run} disabled={running || judgeState === 'failed'}>
            {running ? 'running…' : judgeState === 'booting' ? 'run (python loading…)' : 'run tests'}
          </button>
          <button
            className="chip"
            onClick={() => {
              setCode(problem.starter_code)
              setOutcome(null)
              setProgress(updateEntry(progress, problem.id, { code: problem.starter_code }))
            }}
          >
            reset code
          </button>
          {judgeState === 'failed' && (
            <span className="meta">python runtime failed to load — check your connection.</span>
          )}
        </div>
        {outcome?.status === 'timeout' && (
          <div className="verdict bad">Time limit exceeded (15s) — likely an infinite loop.</div>
        )}
        {outcome?.status === 'error' && (
          <div className="verdict bad">
            <pre className="desc code">{outcome.message}</pre>
          </div>
        )}
        {outcome?.status === 'ok' && (
          <div>
            <div className={`verdict ${passCount === outcome.results.length ? 'good' : 'bad'}`}>
              {passCount === outcome.results.length
                ? `accepted — ${passCount}/${outcome.results.length} tests passed`
                : `${passCount}/${outcome.results.length} tests passed`}
            </div>
            <div className="tests">
              {outcome.results.map((r, i) => (
                <details key={i} className={`test ${r.passed ? 'pass' : 'fail'}`} open={!r.passed}>
                  <summary>
                    {r.passed ? '✓' : '✗'} test {i + 1} · {problem.tests[i]?.kind}
                    {r.time_ms ? ` · ${r.time_ms}ms` : ''}
                  </summary>
                  <div className="test-body">
                    <div>
                      <span className="meta">input</span>
                      <pre>{JSON.stringify(problem.tests[i]?.input)}</pre>
                    </div>
                    {r.error ? (
                      <div>
                        <span className="meta">error</span>
                        <pre>{r.error}</pre>
                      </div>
                    ) : (
                      <>
                        <div>
                          <span className="meta">your output</span>
                          <pre>{JSON.stringify(r.output)}</pre>
                        </div>
                        {problem.compare !== 'custom' && (
                          <div>
                            <span className="meta">expected</span>
                            <pre>{JSON.stringify(r.expected)}</pre>
                          </div>
                        )}
                      </>
                    )}
                    {r.stdout && (
                      <div>
                        <span className="meta">stdout</span>
                        <pre>{r.stdout}</pre>
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}
        <p className="meta hint">topic: {drill.topic}</p>
      </div>
    </div>
  )
}

// ---------- non-runnable drill view ------------------------------------------

function DrillView({
  drill,
  progress,
  setProgress,
}: {
  drill: Drill
  progress: Progress
  setProgress: (p: Progress) => void
}) {
  return (
    <div className="drill-detail glass-card">
      <pre className="desc">{drill.prompt}</pre>
      {drill.notes && <p className="meta">{drill.notes}</p>}
      {drill.link && (
        <p>
          <a className="ext" href={drill.link} target="_blank" rel="noopener">
            reference ↗
          </a>
        </p>
      )}
      <StatusBar id={drill.id} progress={progress} setProgress={setProgress} />
      <Notes id={drill.id} progress={progress} setProgress={setProgress} />
    </div>
  )
}

// ---------- detail router -----------------------------------------------------

function DrillPage({
  id,
  progress,
  setProgress,
}: {
  id: string
  progress: Progress
  setProgress: (p: Progress) => void
}) {
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
      <a className="crumb" href={`#/area/${found.area.key}`}>
        ← {found.area.label}
      </a>
      <div className="row gap baseline">
        <h1>{found.drill.title}</h1>
        <span className={`pill ${found.drill.difficulty.toLowerCase()}`}>
          {found.drill.difficulty}
        </span>
      </div>
      {problem ? (
        <ProblemView
          problem={problem}
          drill={found.drill}
          progress={progress}
          setProgress={setProgress}
        />
      ) : (
        <DrillView drill={found.drill} progress={progress} setProgress={setProgress} />
      )}
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

// ---------- app ---------------------------------------------------------------

export default function App() {
  const hash = useHashRoute()
  const [progress, setProgress] = useState<Progress>(loadProgress)
  const area = /^#\/area\/(.+)$/.exec(hash)
  const drill = /^#\/drill\/(.+)$/.exec(hash)
  return (
    <div className="prep-root">
      {drill ? (
        <DrillPage id={drill[1]} progress={progress} setProgress={setProgress} />
      ) : area ? (
        <AreaList areaKey={area[1]} progress={progress} />
      ) : (
        <Dashboard progress={progress} />
      )}
    </div>
  )
}
