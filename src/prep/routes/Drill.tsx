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
import { NotFound, BackLink } from '../components/nav'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import type { Drill, Problem } from '../types'

function ProblemView({ problem }: { problem: Problem }) {
  const dispatch = useAppDispatch()
  const savedCode = useAppSelector((s) => s.progress.problems[problem.id]?.code)
  const [code, setCode] = useState(() => savedCode ?? problem.starter_code)
  const [state, setState] = useState<JudgeState>(validator.state)
  const [outcome, setOutcome] = useState<ValidateOutcome | null>(null)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    validator.onState = setState
    validator.start()
    setState(validator.state)
  }, [])

  const check = async () => {
    setBusy(true)
    setOutcome(null)
    dispatch(setProblemCode({ id: problem.id, code }))
    setOutcome(await validator.validate(code, problem.signature?.name))
    setBusy(false)
  }

  return (
    <div className="grid lg:grid-cols-[5fr_7fr] gap-10 items-start">
      <div className="[&>*+*]:mt-6">
        <Markdown body={problem.description_md} />
        <a href={problem.link} target="_blank" rel="noopener" className="block text-sm text-brand underline">
          Open on LeetCode
        </a>
        <ProblemStatusBar id={problem.id} />
        <ProblemNotes id={problem.id} />
        {problem.reference_solution && (
          <Accordion type="single" collapsible className="border-t border-border">
            <AccordionItem value="sol" className="border-b-0">
              <AccordionTrigger className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-brand hover:no-underline">
                Reference solution
              </AccordionTrigger>
              <AccordionContent>
                <pre className="overflow-x-auto bg-secondary p-4 font-mono text-[0.8125rem] leading-relaxed">
                  {problem.reference_solution}
                </pre>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </div>
      <div>
        <div className="border border-input">
          <Editor key={problem.id} initial={code} onChange={setCode} />
        </div>
        <div className="flex flex-wrap gap-2 my-4">
          <Button onClick={check} disabled={busy || state !== 'ready'}>
            {busy ? 'Checking…' : state === 'booting' ? 'Loading Python…' : state === 'failed' ? 'Python failed' : 'Check syntax'}
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setCode(problem.starter_code)
              setOutcome(null)
              dispatch(setProblemCode({ id: problem.id, code: problem.starter_code }))
            }}
          >
            Reset
          </Button>
        </div>
        {outcome && (
          <div className={`p-4 bg-secondary border-l-2 text-[0.9375rem] ${outcome.status === 'ok' ? 'border-brand' : 'border-foreground'}`}>
            {outcome.status === 'ok' ? outcome.message : outcome.status === 'timeout' ? 'Timed out — runtime restarted.' : outcome.message}
          </div>
        )}
      </div>
    </div>
  )
}

function DrillView({ drill }: { drill: Drill }) {
  return (
    <div className="max-w-[66ch] [&>*+*]:mt-6">
      <p className="whitespace-pre-wrap bg-secondary p-4 leading-relaxed">{drill.prompt}</p>
      {drill.link && (
        <a href={drill.link} target="_blank" rel="noopener" className="block text-sm text-brand underline">
          Reference
        </a>
      )}
      <ProblemStatusBar id={drill.id} />
      <ProblemNotes id={drill.id} />
      {drill.solution && (
        <Accordion type="single" collapsible className="border-t border-foreground">
          <AccordionItem value="sol" className="border-b-0">
            <AccordionTrigger className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-brand hover:no-underline">
              Show solution
            </AccordionTrigger>
            <AccordionContent>
              <Markdown body={drill.solution} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
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
  const back = areaKey === 'dsa' ? { href: '#/dsa', label: 'DSA' } : areaKey ? { href: `#/study/${areaKey}`, label: 'Course' } : { href: '#/', label: 'Home' }
  return (
    <div>
      <BackLink href={back.href}>{back.label}</BackLink>
      <div className="flex flex-wrap items-baseline gap-4 mb-8">
        <h1>{drill.title}</h1>
        <Badge variant="outline" className="uppercase text-[0.6875rem]">{drill.difficulty}</Badge>
      </div>
      {problem ? <ProblemView problem={problem} /> : <DrillView drill={drill} />}
    </div>
  )
}
