import { PATTERN_FAMILIES, PATTERNS, findPattern, patternsForProblem } from '../content/patterns'
import type { Pattern } from '../content/patterns'
import { PACKS } from '../data/packs'
import { drillById, isRunnable } from '../selectors'
import { useAppSelector } from '../store'
import { StatusDot } from '../components/ui'
import Markdown, { InlineMarkdown } from '../components/Markdown'
import { NotFound, BackLink } from '../components/nav'
import { Badge } from '../ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

const LABEL = 'text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-muted-foreground'

/** Index: every pattern, grouped by family, one scannable line each. */
export function PatternIndex() {
  return (
    <div className="max-w-3xl">
      <BackLink href="#/">Home</BackLink>
      <h1>Patterns</h1>

      {PATTERN_FAMILIES.map((family) => (
        <section key={family.name} className="mt-14 first:mt-10">
          <div className="flex items-baseline justify-between gap-4 pb-2 border-b border-foreground">
            <h2 className="text-base font-medium tracking-normal">{family.name}</h2>
            <span className="num text-sm text-muted-foreground">{family.patterns.length}</span>
          </div>

          {family.patterns.map((pat) => (
            <a
              key={pat.key}
              href={`#/pattern/${pat.key}`}
              className="grid grid-cols-[minmax(0,1fr)_3rem] items-baseline gap-4 px-4 py-5 border-b border-border no-underline text-foreground transition-colors hover:bg-secondary group"
            >
              <span className="min-w-0">
                <span className="block transition-colors group-hover:text-brand">{pat.name}</span>
                <span className="block mt-1 max-w-[62ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {pat.essence}
                </span>
              </span>
              <span className="num text-right text-sm text-muted-foreground">
                {pat.problemIds.length}
              </span>
            </a>
          ))}
        </section>
      ))}
    </div>
  )
}

/** One mapped problem: title row, expanding to the whole question. */
function ProblemEntry({ id, exclude }: { id: string; exclude: string }) {
  const drill = drillById(id)
  const status = useAppSelector((s) => s.progress.problems[id]?.status ?? 'none')
  if (!drill) return null
  const pack = PACKS[id]

  return (
    <AccordionItem value={id} className="border-b border-border">
      <AccordionTrigger className="px-4 py-4 gap-4 hover:no-underline hover:bg-secondary">
        <span className="flex flex-1 items-center gap-4 min-w-0 text-left">
          <StatusDot status={status} />
          <span className="flex-1 min-w-0 truncate font-normal">{drill.title}</span>
          {isRunnable(id) && (
            <span className="hidden sm:inline text-[0.6875rem] uppercase tracking-wider text-brand">
              editor
            </span>
          )}
          <Badge variant="outline" className="uppercase text-[0.6875rem]">
            {drill.difficulty}
          </Badge>
        </span>
      </AccordionTrigger>

      <AccordionContent className="px-4 pt-1 pb-8">
        <div className="max-w-[70ch]">
          {pack ? <Markdown body={pack.description_md} /> : <p className="leading-relaxed">{drill.prompt}</p>}

          <div className="flex flex-wrap gap-6 mt-6">
            <a href={`#/drill/${id}`} className="text-sm text-brand underline">
              {isRunnable(id) ? 'Open with editor' : 'Open problem'}
            </a>
            {drill.link && (
              <a href={drill.link} target="_blank" rel="noopener" className="text-sm text-muted-foreground underline">
                LeetCode
              </a>
            )}
          </div>

          <OtherPatterns id={id} exclude={exclude} />
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

/** "This problem also belongs to…" — the cross-pattern link. */
function OtherPatterns({ id, exclude }: { id: string; exclude?: string }) {
  const others = patternsForProblem(id).filter((pat) => pat.key !== exclude)
  if (others.length === 0) return null
  return (
    <p className="mt-6 text-sm text-muted-foreground">
      <span className={LABEL}>Also</span>{' '}
      {others.map((pat, i) => (
        <span key={pat.key}>
          {i > 0 && ' · '}
          <a href={`#/pattern/${pat.key}`} className="text-brand underline">
            {pat.name}
          </a>
        </span>
      ))}
    </p>
  )
}

/** The card: essence + cues visible, the depth one tap away, problems below. */
export function PatternPage({ patternKey }: { patternKey: string }) {
  const pat = findPattern(patternKey)
  if (!pat) return <NotFound />

  return (
    <div className="max-w-3xl">
      <BackLink href="#/patterns">Patterns</BackLink>

      <div className="flex flex-wrap items-baseline gap-4">
        <h1>{pat.name}</h1>
        {pat.canonical && (
          <Badge variant="outline" className="uppercase text-[0.6875rem]">
            core 16
          </Badge>
        )}
      </div>
      <p className="mt-5 max-w-[62ch] text-lg leading-relaxed">{pat.essence}</p>

      <section className="mt-12">
        <h2 className={`${LABEL} mb-4`}>Reach for it when</h2>
        <ul className="pl-5 list-disc marker:text-brand max-w-[68ch]">
          {pat.cues.map((cue) => (
            <li key={cue} className="my-2.5 leading-relaxed">
              <InlineMarkdown body={cue} />
            </li>
          ))}
        </ul>
      </section>

      <Accordion type="multiple" className="mt-12 border-t border-foreground">
        <AccordionItem value="mechanism">
          <AccordionTrigger className="px-4 py-5 text-base font-normal hover:no-underline">
            How it works
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-8">
            <div className="max-w-[68ch]">
              <Markdown body={pat.mechanism} />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="template">
          <AccordionTrigger className="px-4 py-5 text-base font-normal hover:no-underline">
            Code template
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-8">
            <pre className="overflow-x-auto bg-secondary border-l border-border px-5 py-4 font-mono text-[0.8125rem] leading-relaxed">
              {pat.template}
            </pre>
            <p className="mt-5 max-w-[68ch] text-[0.9375rem] leading-relaxed text-muted-foreground">
              <span className={LABEL}>Cost</span> {pat.complexity}
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="pitfalls">
          <AccordionTrigger className="px-4 py-5 text-base font-normal hover:no-underline">
            Where it goes wrong
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-8">
            <ul className="pl-5 list-disc marker:text-muted-foreground max-w-[68ch]">
              {pat.pitfalls.map((pit) => (
                <li key={pit} className="my-2.5 text-[0.9375rem] leading-relaxed">
                  <InlineMarkdown body={pit} />
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        {pat.contrasts && pat.contrasts.length > 0 && (
          <AccordionItem value="contrasts">
            <AccordionTrigger className="px-4 py-5 text-base font-normal hover:no-underline">
              Don't confuse it with
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-8">
              <dl className="max-w-[68ch]">
                {pat.contrasts.map((c) => {
                  const other = findPattern(c.key)
                  return (
                    <div key={c.key} className="py-4 border-b border-border last:border-b-0">
                      <dt>
                        <a href={`#/pattern/${c.key}`} className="text-brand underline">
                          {other?.name ?? c.key}
                        </a>
                      </dt>
                      <dd className="mt-1.5 ml-0 text-[0.9375rem] leading-relaxed text-muted-foreground">
                        <InlineMarkdown body={c.how} />
                      </dd>
                    </div>
                  )
                })}
              </dl>
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>

      <section className="mt-16">
        <div className="flex items-baseline justify-between gap-4 pb-2 border-b border-foreground">
          <h2 className="text-base font-medium tracking-normal">Problems</h2>
          <span className="num text-sm text-muted-foreground">{pat.problemIds.length}</span>
        </div>
        <Accordion type="multiple">
          {pat.problemIds.map((id) => (
            <ProblemEntry key={id} id={id} exclude={pat.key} />
          ))}
        </Accordion>
      </section>
    </div>
  )
}

/** Pattern chips for the drill page — the reverse mapping. */
export function PatternChips({ problemId }: { problemId: string }) {
  const pats: Pattern[] = patternsForProblem(problemId)
  if (pats.length === 0) return null
  return (
    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
      <span className={LABEL}>Pattern</span>
      {pats.map((pat) => (
        <a key={pat.key} href={`#/pattern/${pat.key}`} className="text-sm text-brand underline">
          {pat.name}
        </a>
      ))}
    </div>
  )
}

export const PATTERN_COUNT = PATTERNS.length
