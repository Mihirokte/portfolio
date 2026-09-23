import { AREAS } from '../data/drills'
import { findCourse } from '../content'
import { courseProblemLayout } from '../selectors'
import { useAppSelector } from '../store'
import { LessonRow, ProblemRow } from '../components/ui'
import { NotFound } from '../components/nav'

export function CoursePage({ courseKey }: { courseKey: string }) {
  const course = findCourse(courseKey)
  const lessons = useAppSelector((s) => s.progress.lessons)
  if (!course) return <NotFound />
  const { perChapter, leftovers } = courseProblemLayout(course)
  const areaLabel = AREAS.find((a) => a.key === course.problemAreaKey)?.label

  return (
    <div className="page">
      <a className="crumb" href="#/">
        Home
      </a>
      <h1>{course.label}</h1>
      <p className="sub">{course.blurb}</p>

      {course.chapters.map((ch) => {
        const read = ch.lessons.filter((l) => lessons[l.id]?.status === 'read').length
        const probs = perChapter[ch.id] ?? []
        return (
          <section key={ch.id} className="chapter">
            <div className="chapter-head">
              <h2>{ch.title}</h2>
              <span className="meta">
                {read}/{ch.lessons.length} read
              </span>
            </div>
            <p className="meta chapter-summary">{ch.summary}</p>

            <p className="section-label">Learn</p>
            <div className="list">
              {ch.lessons.map((l) => (
                <LessonRow
                  key={l.id}
                  courseKey={course.key}
                  lessonId={l.id}
                  title={l.title}
                  minutes={l.minutes}
                />
              ))}
            </div>

            {probs.length > 0 && (
              <>
                <p className="section-label">Practice</p>
                <div className="list">
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
        <section className="chapter leftover">
          <div className="chapter-head">
            <h2>More problems</h2>
          </div>
          <p className="meta chapter-summary">
            The rest of the {areaLabel ?? course.label} problem bank — broader exercises not tied to
            a single chapter above.
          </p>
          {leftovers.map((g) => (
            <div key={g.topic} className="leftover-group">
              <p className="section-label">{g.topic}</p>
              <div className="list">
                {g.drills.map((d) => (
                  <ProblemRow key={d.id} drill={d} />
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {course.references && course.references.length > 0 && (
        <section className="chapter references">
          <div className="chapter-head">
            <h2>References</h2>
          </div>
          <p className="meta chapter-summary">Go deeper on any of this.</p>
          <ul className="ref-list">
            {course.references.map((r) => (
              <li key={r.url}>
                <a className="ext" href={r.url} target="_blank" rel="noopener">
                  {r.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
