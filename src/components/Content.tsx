import { ABOUT, ABOUT_LEDE, ACCOLADES, CONTACT, EXPERIENCE, FOCUS, PROJECTS } from '../content'
import { slug } from '../nav'
import SkillMap from './SkillMap'

/* Every element with data-spy is a scrollspy target; ids match src/nav.ts. */
export default function Content() {
  return (
    <>
      <section id="about" data-spy="about">
        <p className="eyebrow">about</p>
        <h2 className="script">{ABOUT_LEDE}</h2>

        <div id="about-story" data-spy="about-story" className="panel">
          {ABOUT.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>

        <h3 id="about-focus" data-spy="about-focus" className="sub">
          what i do
        </h3>
        <ul className="focus-list panel">
          {FOCUS.map((f, i) => (
            <li key={f}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <h3 id="about-accolades" data-spy="about-accolades" className="sub">
          accolades
        </h3>
        <ul className="accolades panel">
          {ACCOLADES.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </section>

      <section id="work" data-spy="work">
        <p className="eyebrow">work</p>
        {EXPERIENCE.map((job) => (
          <article key={job.company} id={`work-${slug(job.company)}`} data-spy={`work-${slug(job.company)}`} className="card panel">
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
      </section>

      <section id="skills" data-spy="skills">
        <p className="eyebrow">toolkit</p>
        <SkillMap />
      </section>

      <section id="projects" data-spy="projects">
        <p className="eyebrow">projects</p>
        {PROJECTS.map((p) => {
          const id = `project-${slug(p.name)}`
          const inner = (
            <>
              <div className="card-head">
                <h3>
                  {p.name}
                  {p.link ? ' ↗' : ''}
                </h3>
                <span className="meta when">{p.when}</span>
              </div>
              <p>{p.blurb}</p>
            </>
          )
          return p.link ? (
            <a key={p.name} id={id} data-spy={id} className="card panel link" href={p.link} target="_blank" rel="noopener">
              {inner}
            </a>
          ) : (
            <article key={p.name} id={id} data-spy={id} className="card panel">
              {inner}
            </article>
          )
        })}
      </section>

      <section id="contact" data-spy="contact" className="last">
        <p className="eyebrow">contact</p>
        <h2 className="script">say hi.</h2>
        <div className="ctas">
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
        <p className="foot">mihir okte · bengaluru</p>
      </section>
    </>
  )
}
