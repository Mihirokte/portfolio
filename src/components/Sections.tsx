import { useEffect } from 'react'
import { ABOUT, ACHIEVEMENTS, CONTACT, EXPERIENCE, PROJECTS, SKILLS } from '../content'

const FOCUS = [
  'moving core services onto new infrastructure with zero downtime',
  'wiring legacy systems to ai agents that diagnose faster than people',
  'building platforms that turn days of setup into minutes',
  'shipping tools that keep working while i sleep',
]

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
      { threshold: 0.15 },
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
        <h2 className="glass reveal">mathematician by training, builder by habit.</h2>
        <div className="glass reveal" style={{ padding: '28px 32px', marginTop: 24 }}>
          {ABOUT.map((t) => (
            <p key={t} style={{ marginBottom: 12 }}>
              {t}
            </p>
          ))}
        </div>
      </section>

      <section id="focus">
        <p className="eyebrow reveal">what i do</p>
        <ul className="focus-list glass reveal">
          {FOCUS.map((f, i) => (
            <li key={f}>
              <span className="mono">{String(i + 1).padStart(2, '0')}</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="experience">
        <p className="eyebrow reveal">work</p>
        <h2 className="glass reveal">where the calm under load got built.</h2>
        <div className="grid-cards reveal" style={{ marginTop: 24 }}>
          {EXPERIENCE.map((job) => (
            <article key={job.company} className="glass-card">
              <span className="meta">{job.when}</span>
              <h3>
                {job.company} <span style={{ color: 'var(--faint)', fontWeight: 500 }}>· {job.role}</span>
              </h3>
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
        <p className="eyebrow reveal">skills</p>
        <h2 className="glass reveal">the toolkit.</h2>
        <div className="grid-cards reveal" style={{ marginTop: 24 }}>
          {SKILLS.map((g) => (
            <div key={g.label} className="glass-card">
              <span className="meta">{g.label.toLowerCase()}</span>
              <div className="chips">
                {g.items.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects">
        <p className="eyebrow reveal">projects</p>
        <h2 className="glass reveal">things built on the side.</h2>
        <div className="grid-cards reveal" style={{ marginTop: 24 }}>
          {PROJECTS.map((p) =>
            p.link ? (
              <a key={p.name} className="glass-card" href={p.link} target="_blank" rel="noopener">
                <span className="meta">{p.when}</span>
                <h3>{p.name} ↗</h3>
                <p>{p.blurb}</p>
              </a>
            ) : (
              <article key={p.name} className="glass-card">
                <span className="meta">{p.when}</span>
                <h3>{p.name}</h3>
                <p>{p.blurb}</p>
              </article>
            ),
          )}
        </div>
        <div className="glass reveal" style={{ padding: '20px 24px', marginTop: 16 }}>
          {ACHIEVEMENTS.map((a) => (
            <p key={a} style={{ fontSize: 15, marginBottom: 6 }}>
              {a}
            </p>
          ))}
        </div>
      </section>

      <section id="contact" style={{ minHeight: '70vh' }}>
        <p className="eyebrow reveal">say hi</p>
        <h2 className="glass reveal">let's talk.</h2>
        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 28 }}>
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
