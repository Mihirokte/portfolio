import type { ReactNode } from 'react'
import { ABOUT, ABOUT_LEDE, ACCOLADES, CONTACT, EXPERIENCE, FOCUS, PROJECTS, type Job, type Project } from '../content'
import type { SceneId } from '../nav'
import { PawTrail } from './PawTrail'

type Flats = { left: ReactNode; right: ReactNode }

function Clipping({ job }: { job: Job }) {
  return (
    <article className="clipping">
      <h3>{job.company}</h3>
      <p className="meta">
        {job.role} <span className="when">{job.when}</span>
      </p>
      <ul className="bullets">
        {job.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  )
}

function ProjectNote({ p, size }: { p: Project; size: 'lg' | 'md' | 'sm' }) {
  const head = (
    <>
      <h3>{p.name}</h3>
      <p className="meta">{p.when}</p>
    </>
  )
  return (
    <article className={`clipping project ${size}`}>
      {p.link ? (
        <a href={p.link} target={p.link.startsWith('http') ? '_blank' : undefined} rel="noopener" className="project-link">
          {head}
        </a>
      ) : (
        head
      )}
      <p>{p.blurb}</p>
    </article>
  )
}

const FLATS: Record<SceneId, Flats> = {
  about: {
    left: (
      <>
        <h2 className="script lede">{ABOUT_LEDE}</h2>
        {ABOUT.slice(0, 3).map((t) => (
          <p key={t}>{t}</p>
        ))}
      </>
    ),
    right: (
      <>
        {ABOUT.slice(3).map((t) => (
          <p key={t}>{t}</p>
        ))}
        <h3 className="script sub">what i do</h3>
        <ul className="focus">
          {FOCUS.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <ul className="notes">{ACCOLADES.map((a) => <li key={a}>{a}</li>)}</ul>
      </>
    ),
  },
  work: {
    left: (
      <>
        {EXPERIENCE.slice(0, 2).map((j) => (
          <Clipping key={j.company} job={j} />
        ))}
      </>
    ),
    right: (
      <>
        {EXPERIENCE.slice(2).map((j) => (
          <Clipping key={j.company} job={j} />
        ))}
      </>
    ),
  },
  skills: {
    left: (
      <div className="trails">
        <PawTrail groupIndex={0} />
        <PawTrail groupIndex={1} />
      </div>
    ),
    right: (
      <div className="trails">
        <PawTrail groupIndex={2} />
        <PawTrail groupIndex={3} />
      </div>
    ),
  },
  projects: {
    left: (
      <>
        <ProjectNote p={PROJECTS[0]} size="lg" />
        <ProjectNote p={PROJECTS[2]} size="sm" />
      </>
    ),
    right: (
      <>
        <ProjectNote p={PROJECTS[1]} size="md" />
        <ProjectNote p={PROJECTS[3]} size="sm" />
      </>
    ),
  },
  contact: {
    left: (
      <>
        <h2 className="script lede">say hi.</h2>
        <p>Email is the fastest. LinkedIn works too, and the code lives on GitHub.</p>
      </>
    ),
    right: (
      <>
        <ul className="tags">
          {CONTACT.map((c) => (
            <li key={c.label}>
              <a href={c.href} target={c.href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener">
                <span className="tag-label">{c.label}</span>
                <span className="tag-text">{c.text}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="notes">mihir okte · bengaluru</p>
      </>
    ),
  },
}

/** Both flats of one scene; the CSS positions .fl and .fr. */
export default function SceneFlats({ id }: { id: SceneId }) {
  return (
    <div className="flats">
      <div className="flat fl">
        <div className="paper">{FLATS[id].left}</div>
      </div>
      <div className="flat fr">
        <div className="paper">{FLATS[id].right}</div>
      </div>
    </div>
  )
}
