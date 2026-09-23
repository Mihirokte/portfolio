import { COMPANIES, findCompany } from '../content/companies'
import { NotFound, BackLink } from '../components/nav'
import type { Company } from '../content/companies/types'
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
            className="flex items-center gap-4 min-h-13 py-3 border-b border-border no-underline text-foreground transition-colors hover:bg-secondary group"
          >
            <span className="flex-1 transition-colors group-hover:text-brand">{c.name}</span>
            <span className="num text-sm text-muted-foreground">{countQuestions(c)}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export function CompanyPage({ companyKey }: { companyKey: string }) {
  const c = findCompany(companyKey)
  if (!c) return <NotFound />
  const qCount = countQuestions(c)

  return (
    <div className="max-w-3xl">
      <BackLink href="#/companies">Companies</BackLink>
      <h1>{c.name}</h1>
      <p className="mt-4 max-w-[66ch] text-muted-foreground">{c.descriptor}</p>

      <dl className="grid grid-cols-3 gap-6 my-8 py-6 border-y border-border">
        {[
          ['Questions', qCount],
          ['Prep topics', c.lldPrep.length],
          ['Rounds', c.questions.length],
        ].map(([label, n]) => (
          <div key={String(label)} className="flex flex-col gap-1">
            <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-muted-foreground">{label}</dt>
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

        <TabsContent value="questions">
          <Accordion type="multiple" defaultValue={[c.questions[0]?.round ?? '']}>
            {c.questions.map((g) => (
              <AccordionItem key={g.round} value={g.round}>
                <AccordionTrigger className="hover:no-underline">
                  <span className="font-medium">{g.round}</span>
                  <span className="num ml-auto mr-2 text-xs text-muted-foreground">{g.questions.length}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <ol className="pl-6 list-decimal marker:font-mono marker:text-muted-foreground max-w-[66ch]">
                    {g.questions.map((q) => (
                      <li key={q} className="my-2 leading-relaxed">{q}</li>
                    ))}
                  </ol>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        <TabsContent value="prep">
          <div className="grid sm:grid-cols-2 gap-x-8">
            {c.lldPrep.map((p) => (
              <article key={p.topic} className="py-6 border-t border-border">
                <h2 className="text-base font-medium tracking-normal mb-2">{p.topic}</h2>
                <p className="text-[0.9375rem] text-muted-foreground">{p.why}</p>
              </article>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="notes">
          <ul className="pl-6 list-disc marker:text-muted-foreground max-w-[66ch]">
            {c.specialNotes.map((n) => (
              <li key={n} className="mb-3 leading-relaxed">{n}</li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  )
}
