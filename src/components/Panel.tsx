import { useEffect, useLayoutEffect, useRef, type ReactNode } from 'react'
import { ABOUT, ABOUT_LEDE, ACCOLADES, CONTACT, EXPERIENCE, FOCUS, HOBBIES, PROJECTS, SKILLS } from '../content'
import { type SectionId } from '../nav'

type Props = {
  open: SectionId | null
  origin: { x: number; y: number } | null
  onClose: () => void
}

export default function Panel({ open, origin, onClose }: Props) {
  const ref = useRef<HTMLElement>(null)
  const closeBtn = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    closeBtn.current?.focus({ preventScroll: true })
    ref.current?.scrollTo({ top: 0 })
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // The pop grows out of the object that was clicked. offsetLeft/Top ignore the
  // in-flight scale transform, unlike getBoundingClientRect.
  useLayoutEffect(() => {
    const el = ref.current
    if (!open || !origin || !el) return
    el.style.transformOrigin = `${origin.x - el.offsetLeft}px ${origin.y - el.offsetTop}px`
  }, [open, origin])

  if (!open) return null

  return (
    <aside ref={ref} className="panel" role="dialog" aria-modal="false" aria-labelledby="panel-title" data-section={open}>
      <header className="panel-head">
        <h2 id="panel-title">{open}</h2>
        <button ref={closeBtn} type="button" className="close" onClick={onClose} aria-label="close">
          <span aria-hidden />
        </button>
      </header>
      <div className="panel-body">{SECTION[open]}</div>
    </aside>
  )
}

const SECTION: Record<SectionId, ReactNode> = {
  about: (
    <>
      <p className="lede">{ABOUT_LEDE}</p>
      {ABOUT.map((p) => (
        <p key={p.slice(0, 24)}>{p}</p>
      ))}
      <h3>what i do</h3>
      <ul className="pips">
        {FOCUS.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <p className="muted">{ACCOLADES.join(' · ')}</p>
    </>
  ),
  work: (
    <ol className="labels">
      {EXPERIENCE.map((j) => (
        <li key={j.company} className="label">
          <div className="label-head">
            <h3>{j.company}</h3>
            <span className="when">{j.when}</span>
          </div>
          <p className="role">{j.role}</p>
          <ul>
            {j.bullets.map((b) => (
              <li key={b.slice(0, 32)}>{b}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  ),
  skills: (
    <div className="trays">
      {SKILLS.map((g) => (
        <section key={g.label} className="tray">
          <h3>{g.label}</h3>
          <ul className="tools">
            {g.items.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  ),
  projects: (
    <ul className="windows">
      {PROJECTS.map((p) => (
        <li key={p.name} className="window">
          <div className="titlebar">
            <span className="dot" />
            <h3>{p.name}</h3>
            <span className="when">{p.when}</span>
          </div>
          <p>{p.blurb}</p>
          {p.link && (
            <a href={p.link} className="link">
              {p.link.startsWith('http') ? 'github' : 'open prep'}
            </a>
          )}
        </li>
      ))}
    </ul>
  ),
  hobbies: (
    <ul className="hobbies">
      {HOBBIES.map((h) => (
        <li key={h.name}>
          <h3>{h.name}</h3>
          <p>{h.line}</p>
        </li>
      ))}
    </ul>
  ),
  contact: (
    <>
      <p className="lede">say hi.</p>
      <ul className="envelopes">
        {CONTACT.map((c) => (
          <li key={c.label}>
            <span className="muted">{c.label}</span>
            <a href={c.href} className="link">
              {c.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  ),
}
