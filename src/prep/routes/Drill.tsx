import { useEffect, useMemo, useState } from 'react'
import { PACKS } from '../data/packs'
import { drillById } from '../selectors'
import { AREAS } from '../data/drills'
import { validator, type JudgeState, type ValidateOutcome } from '../judge'
import { useAppDispatch, useAppSelector } from '../store'
import { setProblemCode } from '../store/progressSlice'
import Editor from '../components/Editor'
import Markdown from '../components/Markdown'
import { ProblemNotes, ProblemStatusBar } from '../components/ui'
import { NotFound } from '../components/nav'
import type { Drill, Problem } from '../types'

function mdLite(t: string) {
  return t.replace(/\*\*(.+?)\*\*/g, '$1').replace(/`([^`]+)`/g, '$1')
}

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
        <div className="run-row">
          <button className="cta run" onClick={check} disabled={busy || state !== 'ready'}>
            {busy
              ? 'checking…'
              : state === 'booting'
                ? 'loading python…'
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
          <div className="verdict bad">Check timed out — runtime restarted, try again.</div>
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
  const [showSolution, setShowSolution] = useState(false)
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
      {drill.solution && (
        <details
          className="solution"
          open={showSolution}
          onToggle={(e) => setShowSolution(e.currentTarget.open)}
        >
          <summary>{showSolution ? 'hide solution' : 'show solution'}</summary>
          {showSolution && <Markdown body={drill.solution} />}
        </details>
      )}
    </div>
  )
}

export function DrillPage({ id }: { id: string }) {
  const drill = useMemo(() => drillById(id), [id])
  const areaKey = useMemo(() => {
    for (const a of AREAS) if (a.drills.some((d) => d.id === id)) return a.key
    return undefined
  }, [id])
  if (!drill) return <NotFound />
  const problem = PACKS[id]
  // DSA drills return to the DSA list; study-course drills return to the course page.
  const back = areaKey === 'dsa' ? { href: '#/dsa', label: 'DSA' } : areaKey ? { href: `#/study/${areaKey}`, label: 'course' } : { href: '#/', label: 'home' }
  return (
    <div className="page wide">
      <a className="crumb" href={back.href}>
        ← {back.label}
      </a>
      <div className="drill-title-row">
        <h1>{drill.title}</h1>
        <span className={`pill ${drill.difficulty.toLowerCase()}`}>{drill.difficulty}</span>
      </div>
      {problem ? <ProblemView problem={problem} drill={drill} /> : <DrillView drill={drill} />}
    </div>
  )
}
