import { COMPANIES, findCompany } from '../content/companies'
import { NotFound } from '../components/nav'

// Company Research — public-facing, neutral company interview data.
// Rendered entirely from the COMPANIES registry; no per-company components.

const COVERAGE_LABEL: Record<string, string> = {
  good: 'well documented',
  moderate: 'moderately documented',
  thin: 'limited public data',
}

export function CompanyIndex() {
  return (
    <div className="page companies">
      <a className="crumb" href="#/">
        ← home
      </a>
      <p className="eyebrow alt">company research</p>
      <h1>Interview processes, by company</h1>
      <p className="sub">
        What companies ask: round structure, reported interview questions, and the topics their
        low-level design and machine-coding rounds expect.
      </p>
      <div className="list">
        {COMPANIES.map((c) => (
          <a key={c.key} className="list-row glass-card company-row" href={`#/company/${c.key}`}>
            <span className="row-title">{c.name}</span>
            <span className="meta">{c.questions.reduce((n, g) => n + g.questions.length, 0)} questions</span>
            <span className={`pill cov-${c.coverage}`}>{COVERAGE_LABEL[c.coverage]}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export function CompanyPage({ companyKey }: { companyKey: string }) {
  const c = findCompany(companyKey)
  if (!c) return <NotFound />
  return (
    <div className="page companies">
      <a className="crumb" href="#/companies">
        ← company research
      </a>
      <p className="eyebrow alt">company research</p>
      <h1>{c.name}</h1>
      <p className="sub">{c.descriptor}</p>
      <div className="co-meta">
        {c.rolesCovered && <span className="meta">{c.rolesCovered}</span>}
        <span className={`pill cov-${c.coverage}`}>{COVERAGE_LABEL[c.coverage]}</span>
      </div>

      <section className="co-section">
        <h2>Interview process</h2>
        <div className="list">
          {c.process.map((r, i) => (
            <div key={r.name} className="glass-card round-card">
              <div className="round-head">
                <span className="step-num">{i + 1}</span>
                <h3>{r.name}</h3>
                {r.format && <span className="meta">{r.format}</span>}
              </div>
              <p>{r.focus}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="co-section">
        <h2>Reported questions</h2>
        {c.questions.map((g) => (
          <div key={g.round} className="qgroup">
            <p className="section-label">{g.round}</p>
            <ul className="qlist">
              {g.questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="co-section">
        <h2>Must-prep for LLD &amp; machine coding</h2>
        <div className="list">
          {c.lldPrep.map((p) => (
            <div key={p.topic} className="glass-card prep-card">
              <h3>{p.topic}</h3>
              <p>{p.why}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="co-section">
        <h2>Special notes</h2>
        <ul className="notes-list">
          {c.specialNotes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </section>

      <p className="meta updated">Last compiled {c.updated}.</p>
    </div>
  )
}
