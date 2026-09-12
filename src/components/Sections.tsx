import type { ReactNode } from 'react'
import { ABOUT, ACHIEVEMENTS, CONTACT, EXPERIENCE, PROJECTS, SKILLS, TAGLINE } from '../content'
import { PALETTE } from '../palette'

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
    <section
      id={id}
      className="w-full px-[6vw] py-16 md:py-24 border-t"
      style={{ borderColor: 'rgba(193, 207, 218, 0.12)' }}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
        <h2
          className="font-display uppercase leading-none select-none"
          style={{ color: accent, fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}
        >
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  )
}

const body = 'leading-relaxed text-base md:text-lg'
const bodyColor = { color: 'rgba(193, 207, 218, 0.85)' } as const
const dimColor = { color: 'rgba(193, 207, 218, 0.5)' } as const
const poppins = { fontFamily: '"Poppins", sans-serif', fontWeight: 500 } as const

export default function Sections() {
  return (
    <main style={{ backgroundColor: PALETTE.ink, color: PALETTE.white }}>
      <Section id="about" title="About" accent={PALETTE.sky}>
        <p className="text-xl md:text-2xl mb-6" style={{ ...poppins, color: PALETTE.white }}>
          {TAGLINE}
        </p>
        {ABOUT.map((p) => (
          <p key={p} className={`${body} mb-4`} style={bodyColor}>
            {p}
          </p>
        ))}
      </Section>

      <Section id="experience" title="Work" accent={PALETTE.aqua}>
        <div className="flex flex-col gap-10">
          {EXPERIENCE.map((job) => (
            <article key={job.company}>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                <h3 className="text-xl md:text-2xl" style={{ ...poppins, color: PALETTE.white }}>
                  {job.company}
                </h3>
                <span className="text-sm md:text-base" style={dimColor}>
                  {job.role}
                </span>
                <span className="text-sm ml-auto" style={dimColor}>
                  {job.when}
                </span>
              </div>
              <ul className="flex flex-col gap-2">
                {job.bullets.map((b) => (
                  <li key={b} className={`${body} pl-5 relative`} style={bodyColor}>
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.8em] h-[2px] w-3"
                      style={{ background: PALETTE.crimson }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills" accent={PALETTE.steel}>
        <div className="grid sm:grid-cols-2 gap-8">
          {SKILLS.map((g) => (
            <div key={g.label}>
              <h3 className="uppercase tracking-[0.2em] text-xs mb-3" style={dimColor}>
                {g.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="px-3 py-1.5 rounded-full border text-sm"
                    style={{ ...poppins, borderColor: 'rgba(32, 164, 243, 0.45)', color: PALETTE.steel }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects" accent={PALETTE.sky}>
        <div className="flex flex-col gap-8">
          {PROJECTS.map((p) => (
            <article key={p.name}>
              <div className="flex flex-wrap items-baseline gap-x-4 mb-2">
                <h3 className="text-xl" style={{ ...poppins, color: PALETTE.white }}>
                  {p.name}
                </h3>
                <span className="text-sm" style={dimColor}>
                  {p.when}
                </span>
              </div>
              <p className={body} style={bodyColor}>
                {p.blurb}
              </p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener"
                  className="inline-block mt-2 text-sm underline underline-offset-4"
                  style={{ color: PALETTE.aqua }}
                >
                  github ↗
                </a>
              )}
            </article>
          ))}
        </div>
        <ul className="mt-12 flex flex-col gap-2">
          {ACHIEVEMENTS.map((a) => (
            <li key={a} className="text-sm md:text-base" style={dimColor}>
              {a}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" title="Say hi" accent={PALETTE.crimson}>
        <ul className="flex flex-col gap-3">
          {CONTACT.map((c) => (
            <li key={c.label} className="flex flex-wrap items-baseline gap-x-4">
              <span className="uppercase tracking-[0.2em] text-xs w-20" style={dimColor}>
                {c.label}
              </span>
              <a
                href={c.href}
                target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener"
                className="text-lg md:text-xl hover:underline underline-offset-4"
                style={{ ...poppins, color: PALETTE.white }}
              >
                {c.text}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-16 text-xs tracking-[0.2em] uppercase" style={{ color: 'rgba(193, 207, 218, 0.3)' }}>
          Mihir Okte · Bengaluru
        </p>
      </Section>
    </main>
  )
}
