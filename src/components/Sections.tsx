import { useEffect } from 'react'
import { ABOUT, ABOUT_LEDE, ACCOLADES, CONTACT, EXPERIENCE, FOCUS, PROJECTS } from '../content'
import SkillMap from './SkillMap'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        }
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function Sections() {
  useReveal()
  return (
    <main>
      <section id="about">
        <p className="eyebrow reveal">about</p>
        <h2 className="glass reveal">{ABOUT_LEDE}</h2>
        <div className="glass reveal about-body">
          {ABOUT.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
        <div className="about-row reveal">
          <ul className="focus-list glass">
            {FOCUS.map((f, i) => (
              <li key={f}>
                <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <ul className="accolades glass">
            {ACCOLADES.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="experience">
        <p className="eyebrow reveal">work</p>
        <div className="stack">
          {EXPERIENCE.map((job) => (
            <article key={job.company} className="glass-card reveal">
              <div className="card-head">
                <h3>{job.company}</h3>
                <span className="meta">{job.role}</span>
                <span className="meta when">{job.when}</span>
              </div>
              <ul className="bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="skills">
        <p className="eyebrow reveal">toolkit</p>
        <SkillMap />
      </section>

      <section id="projects">
        <p className="eyebrow reveal">projects</p>
        <div className="stack">
          {PROJECTS.map((p) =>
            p.link ? (
              <a key={p.name} className="glass-card reveal" href={p.link} target="_blank" rel="noopener">
                <div className="card-head">
                  <h3>{p.name} ↗</h3>
                  <span className="meta when">{p.when}</span>
                </div>
                <p>{p.blurb}</p>
              </a>
            ) : (
              <article key={p.name} className="glass-card reveal">
                <div className="card-head">
                  <h3>{p.name}</h3>
                  <span className="meta when">{p.when}</span>
                </div>
                <p>{p.blurb}</p>
              </article>
            ),
          )}
        </div>
      </section>

      <section id="contact" style={{ minHeight: '60vh' }}>
        <p className="eyebrow reveal">say hi</p>
        <h2 className="glass reveal">let's talk.</h2>
        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 24 }}>
          {CONTACT.map((c) => (
            <a
              key={c.label}
              className="cta"
              href={c.href}
              target={c.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener"
            >
              {c.label} <span aria-hidden>→</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="foot mono">mihir okte · bengaluru</footer>
    </main>
  )
}
