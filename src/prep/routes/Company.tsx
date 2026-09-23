import { useState } from 'react'
import { COMPANIES, findCompany } from '../content/companies'
import { NotFound } from '../components/nav'
import type { Company } from '../content/companies/types'

// Company Research — public-facing, neutral company interview data.
// Rendered entirely from the COMPANIES registry; no per-company components.

const COVERAGE_LABEL: Record<string, string> = {
  good: 'well documented',
  moderate: 'moderately documented',
  thin: 'limited public data',
}

const countQuestions = (c: Company) => c.questions.reduce((n, g) => n + g.questions.length, 0)

export function CompanyIndex() {
  return (
    <div className="page companies">
      <a className="crumb" href="#/">
        Home
      </a>
      <h1>Interview processes, by company</h1>
      <p className="sub measure">
        What companies ask: the reported interview questions, and the topics their low-level design
        and machine-coding rounds expect.
      </p>
      <div className="list">
        {COMPANIES.map((c) => (
          <a key={c.key} className="list-row company-row" href={`#/company/${c.key}`}>
            <span className="row-title">{c.name}</span>
            <span className="meta">{countQuestions(c)} questions</span>
            <span className={`pill cov-${c.coverage}`}>{COVERAGE_LABEL[c.coverage]}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

type Tab = 'questions' | 'prep' | 'notes'

export function CompanyPage({ companyKey }: { companyKey: string }) {
  const c = findCompany(companyKey)
  const [tab, setTab] = useState<Tab>('questions')
  if (!c) return <NotFound />

  const qCount = countQuestions(c)
  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: 'questions', label: 'Questions', count: qCount },
    { key: 'prep', label: 'LLD prep', count: c.lldPrep.length },
    { key: 'notes', label: 'Notes', count: c.specialNotes.length },
  ]

  return (
    <div className="page companies">
      <a className="crumb" href="#/companies">
        Company research
      </a>
      <h1>{c.name}</h1>
      <p className="sub measure">{c.descriptor}</p>

      {/* at-a-glance orientation, so the page opens with facts not a wall of text */}
      <dl className="co-stats">
        <div>
          <dt>Questions</dt>
          <dd>{qCount}</dd>
        </div>
        <div>
          <dt>Prep topics</dt>
          <dd>{c.lldPrep.length}</dd>
        </div>
        <div>
          <dt>Rounds covered</dt>
          <dd>{c.questions.length}</dd>
        </div>
        <div className="co-stats-cov">
          <dt>Data</dt>
          <dd>
            <span className={`pill cov-${c.coverage}`}>{COVERAGE_LABEL[c.coverage]}</span>
          </dd>
        </div>
      </dl>
      {c.rolesCovered && <p className="meta roles">{c.rolesCovered}</p>}

      <div className="co-tabs" role="tablist" aria-label="Company data sections">
        {tabs.map((t) => (
          <button
            key={t.key}
            role="tab"
            id={`tab-${t.key}`}
            aria-selected={tab === t.key}
            aria-controls={`panel-${t.key}`}
            className={`co-tab ${tab === t.key ? 'on' : ''}`}
            onClick={() => setTab(t.key)}
          >
            {t.label} <span className="co-tab-count">{t.count}</span>
          </button>
        ))}
      </div>

      {tab === 'questions' && (
        <section id="panel-questions" role="tabpanel" aria-labelledby="tab-questions">
          {c.questions.map((g, i) => (
            <details key={g.round} className="qblock" open={i === 0}>
              <summary>
                <span className="qblock-round">{g.round}</span>
                <span className="qblock-count">{g.questions.length}</span>
              </summary>
              <ol className="qlist">
                {g.questions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ol>
            </details>
          ))}
        </section>
      )}

      {tab === 'prep' && (
        <section id="panel-prep" role="tabpanel" aria-labelledby="tab-prep" className="prep-grid">
          {c.lldPrep.map((p) => (
            <article key={p.topic} className="prep-card">
              <h2>{p.topic}</h2>
              <p>{p.why}</p>
            </article>
          ))}
        </section>
      )}

      {tab === 'notes' && (
        <section id="panel-notes" role="tabpanel" aria-labelledby="tab-notes">
          <ul className="notes-list measure">
            {c.specialNotes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </section>
      )}

      <p className="meta updated">Last compiled {c.updated}.</p>
    </div>
  )
}
