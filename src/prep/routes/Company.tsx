import { COMPANIES, findCompany } from '../content/companies'
import { NotFound, BackLink } from '../components/nav'
import type { AskedQuestion, Company } from '../content/companies/types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

const countQuestions = (c: Company) => c.questions.reduce((n, g) => n + g.questions.length, 0)

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

export function CompanyPage({ companyKey }: { companyKey: string }) {
  const c = findCompany(companyKey)
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
          ['Prep topics', c.lldPrep.length],
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

        <TabsContent value="prep" className="pt-4">
          <div className="grid sm:grid-cols-2 gap-x-8">
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
