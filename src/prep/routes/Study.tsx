import { findCourse } from '../content'
import { courseProblemLayout } from '../selectors'
import { useAppSelector } from '../store'
import { LessonRow, ProblemRow } from '../components/ui'
import { NotFound, BackLink } from '../components/nav'

const LABEL = 'mt-10 mb-3 text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-muted-foreground'

export function CoursePage({ courseKey }: { courseKey: string }) {
  const course = findCourse(courseKey)
  const lessons = useAppSelector((s) => s.progress.lessons)
  if (!course) return <NotFound />
  const { perChapter, leftovers } = courseProblemLayout(course)

  return (
    <div className="max-w-3xl">
      <BackLink href="#/">Home</BackLink>
      <h1>{course.label}</h1>

      {course.chapters.map((ch) => {
        const read = ch.lessons.filter((l) => lessons[l.id]?.status === 'read').length
        const probs = perChapter[ch.id] ?? []
        return (
          <section key={ch.id} className="mt-16">
            <div className="flex items-baseline justify-between gap-4 pb-2 border-b border-foreground">
              <h2>{ch.title}</h2>
              <span className="num text-sm text-muted-foreground">
                {read}/{ch.lessons.length}
              </span>
            </div>
            <p className={LABEL}>Learn</p>
            <div className="border-t border-border">
              {ch.lessons.map((l) => (
                <LessonRow key={l.id} courseKey={course.key} lessonId={l.id} title={l.title} minutes={l.minutes} />
              ))}
            </div>
            {probs.length > 0 && (
              <>
                <p className={LABEL}>Practice</p>
                <div className="border-t border-border">
                  {probs.map((d) => (
                    <ProblemRow key={d.id} drill={d} />
                  ))}
                </div>
              </>
            )}
          </section>
        )
      })}

      {leftovers.length > 0 && (
        <section className="mt-24 pt-6 border-t border-foreground">
          <h2>More problems</h2>
          {leftovers.map((g) => (
            <div key={g.topic}>
              <p className={LABEL}>{g.topic}</p>
              <div className="border-t border-border">
                {g.drills.map((d) => (
                  <ProblemRow key={d.id} drill={d} />
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {course.references && course.references.length > 0 && (
        <section className="mt-24 pt-6 border-t border-foreground">
          <h2>References</h2>
          <ul className="mt-4 pl-6 flex flex-col gap-2">
            {course.references.map((r) => (
              <li key={r.url}>
                <a href={r.url} target="_blank" rel="noopener" className="text-sm text-brand underline">
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
