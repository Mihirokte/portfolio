import { COMPANIES, findCompany } from '../content/companies'
import { NotFound, BackLink } from '../components/nav'
import type { AskedQuestion, Company, RoundPattern } from '../content/companies/types'
import { findPattern } from '../content/patterns'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

const countQuestions = (c: Company) => c.questions.reduce((n, g) => n + g.questions.length, 0)

/** Links from a question to the pattern cards it exercises. Unknown keys are
 *  dropped rather than rendered dead. */
function PatternChips({ keys }: { keys: string[] }) {
  const pats = keys.map(findPattern).filter((p): p is NonNullable<typeof p> => Boolean(p))
  if (pats.length === 0) return null
  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1.5">
      <span className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
        Pattern
      </span>
      {pats.map((p) => (
        <a
          key={p.key}
          href={`#/pattern/${p.key}`}
          className="px-2.5 py-1 border border-border text-[0.8125rem] no-underline text-muted-foreground transition-colors hover:border-brand hover:text-brand"
        >
          {p.name}
        </a>
      ))}
    </div>
  )
}

export function CompanyIndex() {
  return (
    <div className="max-w-3xl">
      <BackLink href="#/">Home</BackLink>
      <h1>Companies</h1>
      <div className="mt-8 border-t border-border">
        {COMPANIES.map((c) => (
          <a
            key={c.key}
            href={`#/company/${c.key}`}
            className="flex items-center gap-4 min-h-14 px-4 py-4 border-b border-border no-underline text-foreground transition-colors hover:bg-secondary group"
          >
            <span className="flex-1 transition-colors group-hover:text-brand">{c.name}</span>
            <span className="num text-sm text-muted-foreground">{countQuestions(c)}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

/** One asked question: the question, a revealable short answer, and variants. */
function QuestionEntry({ item, n }: { item: AskedQuestion; n: number }) {
  return (
    <li className="py-6 border-b border-border last:border-b-0">
      <div className="flex gap-4">
        <span className="num shrink-0 text-sm text-muted-foreground pt-0.5">
          {String(n).padStart(2, '0')}
        </span>
        <div className="min-w-0 flex-1">
          <p className="leading-relaxed max-w-[66ch]">{item.q}</p>
          {item.patterns && <PatternChips keys={item.patterns} />}

          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="a" className="border-b-0">
              <AccordionTrigger className="px-0 py-3 text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-brand hover:no-underline">
                Answer
              </AccordionTrigger>
              <AccordionContent className="px-0 pb-2">
                <p className="leading-relaxed text-[0.9375rem] text-muted-foreground max-w-[70ch]">
                  {item.answer}
                </p>
                {item.related && item.related.length > 0 && (
                  <div className="mt-6">
                    <p className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-muted-foreground mb-2">
                      Variants they could ask
                    </p>
                    <ul className="pl-5 list-disc marker:text-muted-foreground max-w-[70ch]">
                      {item.related.map((r) => (
                        <li key={r} className="my-1.5 text-[0.9375rem] leading-relaxed">
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </li>
  )
}

/** One pattern expected in the algorithm round: what it is, why it is listed
 *  here, and a way into its card and drill set. */
function RoundPatternRow({ item }: { item: RoundPattern }) {
  const pat = findPattern(item.key)
  if (!pat) return null
  return (
    <article className="px-4 py-7 border-b border-border last:border-b-0">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-base font-medium tracking-normal m-0">
          <a
            href={`#/pattern/${pat.key}`}
            className="no-underline text-foreground transition-colors hover:text-brand"
          >
            {pat.name}
          </a>
        </h3>
        <span
          className={`px-2 py-0.5 border text-[0.6875rem] font-medium uppercase tracking-[0.1em] ${
            item.basis === 'reported'
              ? 'border-brand text-brand'
              : 'border-border text-muted-foreground'
          }`}
        >
          {item.basis === 'reported' ? 'From a reported question' : 'From the reported topics'}
        </span>
        <span className="num ml-auto text-sm text-muted-foreground">
          {pat.problemIds.length} drills
        </span>
      </div>
      <p className="mt-2 text-[0.9375rem] leading-relaxed max-w-[70ch]">{pat.essence}</p>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground max-w-[70ch]">
        {item.why}
      </p>
    </article>
  )
}

export function CompanyPage({ companyKey }: { companyKey: string }) {  const c = findCompany(companyKey)
  if (!c) return <NotFound />
  const qCount = countQuestions(c)
  const variantCount = c.questions.reduce(
    (n, g) => n + g.questions.reduce((m, q) => m + (q.related?.length ?? 0), 0),
    0,
  )

  return (
    <div className="max-w-3xl">
      <BackLink href="#/companies">Companies</BackLink>
      <h1>{c.name}</h1>
      <p className="mt-4 max-w-[66ch] text-muted-foreground">{c.descriptor}</p>

      <dl className="grid grid-cols-3 gap-6 my-8 px-4 py-7 border-y border-border">
        {[
          ['Questions', qCount],
          ['Variants', variantCount],
          ['Patterns', c.dsaPatterns?.length ?? 0],
        ].map(([label, n]) => (
          <div key={String(label)} className="flex flex-col gap-1">
            <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-muted-foreground">
              {label}
            </dt>
            <dd className="num m-0 text-2xl leading-none">{n}</dd>
          </div>
        ))}
      </dl>

      <Tabs defaultValue="questions">
        <TabsList>
          <TabsTrigger value="questions">Questions</TabsTrigger>
          {c.dsaPatterns && c.dsaPatterns.length > 0 && (
            <TabsTrigger value="patterns">DSA patterns</TabsTrigger>
          )}
          <TabsTrigger value="prep">LLD prep</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="questions" className="pt-4">
          {c.questions.map((g) => (
            <section key={g.round} className="mt-10 first:mt-4">
              <div className="flex items-baseline justify-between gap-4 pb-2 border-b border-foreground">
                <h2 className="text-base font-medium tracking-normal">{g.round}</h2>
                <span className="num text-sm text-muted-foreground">{g.questions.length}</span>
              </div>
              <ol className="list-none p-0 m-0">
                {g.questions.map((item, i) => (
                  <QuestionEntry key={item.q} item={item} n={i + 1} />
                ))}
              </ol>
            </section>
          ))}
        </TabsContent>

        {c.dsaPatterns && c.dsaPatterns.length > 0 && (
          <TabsContent value="patterns" className="pt-4">
            <div className="border-t border-foreground">
              {c.dsaPatterns.map((p) => (
                <RoundPatternRow key={p.key} item={p} />
              ))}
            </div>
          </TabsContent>
        )}

        <TabsContent value="prep" className="pt-4">          <div className="grid sm:grid-cols-2 gap-x-8">
            {c.lldPrep.map((p) => (
              <article key={p.topic} className="px-4 py-7 border-t border-border">
                <h2 className="text-base font-medium tracking-normal mb-2">{p.topic}</h2>
                <p className="text-[0.9375rem] text-muted-foreground">{p.why}</p>
              </article>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="notes" className="pt-6 px-1">
          <ul className="pl-6 list-disc marker:text-muted-foreground max-w-[66ch]">
            {c.specialNotes.map((n) => (
              <li key={n} className="mb-3 leading-relaxed">
                {n}
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  )
}
