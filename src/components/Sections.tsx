import type { ReactNode } from 'react'
import { ABOUT, ACHIEVEMENTS, CONTACT, EXPERIENCE, PROJECTS, SKILLS, TAGLINE } from '../content'

const ORANGE = '#EC612C'
const GREEN = '#90EE90'
const BLUE = '#89CFF0'

function Section({
  id,
  title,
  accent,
  children,
}: {
  id: string
  title: string
  accent: string
  children: ReactNode
}) {
  return (
    <section id={id} className="w-full px-[6vw] py-16 md:py-24 border-t border-white/10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
        <h2
          className="font-bamboly uppercase leading-none select-none"
          style={{ color: accent, fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}
        >
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  )
}

const body = 'text-white/80 leading-relaxed text-base md:text-lg'
const poppins = { fontFamily: '"Poppins", sans-serif', fontWeight: 500 } as const

export default function Sections() {
  return (
    <main className="bg-black text-white">
      <Section id="about" title="About" accent={ORANGE}>
        <p className="text-white text-xl md:text-2xl mb-6" style={poppins}>
          {TAGLINE}
        </p>
        {ABOUT.map((p) => (
          <p key={p} className={`${body} mb-4`}>
            {p}
          </p>
        ))}
      </Section>

      <Section id="experience" title="Work" accent={GREEN}>
        <div className="flex flex-col gap-10">
          {EXPERIENCE.map((job) => (
            <article key={job.company}>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                <h3 className="text-white text-xl md:text-2xl" style={poppins}>
                  {job.company}
                </h3>
                <span className="text-white/60 text-sm md:text-base">{job.role}</span>
                <span className="text-white/40 text-sm ml-auto">{job.when}</span>
              </div>
              <ul className="flex flex-col gap-2">
                {job.bullets.map((b) => (
                  <li key={b} className={`${body} pl-5 relative`}>
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.8em] h-[2px] w-3"
                      style={{ background: GREEN }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills" accent={BLUE}>
        <div className="grid sm:grid-cols-2 gap-8">
          {SKILLS.map((g) => (
            <div key={g.label}>
              <h3 className="text-white/50 uppercase tracking-[0.2em] text-xs mb-3">{g.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="px-3 py-1.5 rounded-full border border-white/15 text-white/85 text-sm"
                    style={poppins}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects" accent={ORANGE}>
        <div className="flex flex-col gap-8">
          {PROJECTS.map((p) => (
            <article key={p.name}>
              <div className="flex flex-wrap items-baseline gap-x-4 mb-2">
                <h3 className="text-white text-xl" style={poppins}>
                  {p.name}
                </h3>
                <span className="text-white/40 text-sm">{p.when}</span>
              </div>
              <p className={body}>{p.blurb}</p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener"
                  className="inline-block mt-2 text-sm underline underline-offset-4"
                  style={{ color: BLUE }}
                >
                  github ↗
                </a>
              )}
            </article>
          ))}
        </div>
        <ul className="mt-12 flex flex-col gap-2">
          {ACHIEVEMENTS.map((a) => (
            <li key={a} className="text-white/60 text-sm md:text-base">
              {a}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" title="Say hi" accent={GREEN}>
        <ul className="flex flex-col gap-3">
          {CONTACT.map((c) => (
            <li key={c.label} className="flex flex-wrap items-baseline gap-x-4">
              <span className="text-white/40 uppercase tracking-[0.2em] text-xs w-20">{c.label}</span>
              <a
                href={c.href}
                target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener"
                className="text-white text-lg md:text-xl hover:underline underline-offset-4"
                style={poppins}
              >
                {c.text}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-16 text-white/30 text-xs tracking-[0.2em] uppercase">Mihir Okte · Bengaluru</p>
      </Section>
    </main>
  )
}
