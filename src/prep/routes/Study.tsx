import { AREAS } from '../data/drills'
import { COURSES, findCourse } from '../content'
import { courseProblemLayout } from '../selectors'
import { useAppSelector } from '../store'
import { Bar, LessonRow, ProblemRow } from '../components/ui'
import { NotFound } from '../components/nav'

export function StudyHome() {
  const lessons = useAppSelector((s) => s.progress.lessons)
  return (
    <div className="page">
      <a className="crumb" href="#/">
        ← home
      </a>
      <h1>study</h1>
      <div className="area-grid">
        {COURSES.map((c) => {
          const total = c.chapters.reduce((m, ch) => m + ch.lessons.length, 0)
          const read = c.chapters.reduce(
            (m, ch) => m + ch.lessons.filter((l) => lessons[l.id]?.status === 'read').length,
            0,
          )
          return (
            <a key={c.key} className="glass-card area-card" href={`#/study/${c.key}`}>
              <div className="card-head">
                <h3>{c.label}</h3>
                <span className="meta">
                  {read}/{total} lessons
                </span>
              </div>
              <p className="meta blurb">{c.blurb}</p>
              <Bar value={total ? Math.round((read / total) * 100) : 0} />
            </a>
          )
        })}
        {COURSES.length < 4 && (
          <div className="glass-card area-card soon">
            <div className="card-head">
              <h3>more areas soon</h3>
              <span className="meta">LLD · Architecture · AI Engineering</span>
            </div>
            <p className="meta blurb">
              Being written in the same shape as System Design. Their problems already live under
              the Problems tab.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export function CoursePage({ courseKey }: { courseKey: string }) {
  const course = findCourse(courseKey)
  const lessons = useAppSelector((s) => s.progress.lessons)
  if (!course) return <NotFound />
  const { perChapter, leftovers } = courseProblemLayout(course)
  const areaLabel = AREAS.find((a) => a.key === course.problemAreaKey)?.label

  return (
    <div className="page">
      <a className="crumb" href="#/study">
        ← study
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
            <h2>More practice</h2>
          </div>
          <p className="meta chapter-summary">
            The rest of the {areaLabel ?? course.label} problem bank, grouped by topic — not tied to
            a specific chapter above.
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
    </div>
  )
}
