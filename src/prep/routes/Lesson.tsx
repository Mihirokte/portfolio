import { findLesson } from '../content'
import { useAppDispatch, useAppSelector } from '../store'
import { setLessonStatus } from '../store/progressSlice'
import Markdown from '../components/Markdown'
import { LessonNotes } from '../components/ui'
import { NotFound } from '../components/nav'

export function LessonPage({ courseKey, lessonId }: { courseKey: string; lessonId: string }) {
  const found = findLesson(courseKey, lessonId)
  const dispatch = useAppDispatch()
  const entry = useAppSelector((s) => s.progress.lessons[lessonId])
  if (!found) return <NotFound />
  const { course, chapter, lesson } = found

  const flat = course.chapters.flatMap((ch) => ch.lessons.map((l) => l.id))
  const idx = flat.indexOf(lessonId)
  const prev = idx > 0 ? flat[idx - 1] : null
  const next = idx < flat.length - 1 ? flat[idx + 1] : null
  const read = entry?.status === 'read'

  return (
    <div className="page wide lesson-page">
      <a className="crumb" href={`#/study/${course.key}`}>
        ← {course.label}
      </a>
      <p className="eyebrow">{chapter.title}</p>
      <h1>{lesson.title}</h1>
      <Markdown body={lesson.body} />

      {lesson.deeper && (
        <details className="deeper">
          <summary>Go deeper — mechanism, numbers & follow-ups</summary>
          <Markdown body={lesson.deeper} />
        </details>
      )}

      <div className="lesson-notes">
        <LessonNotes id={lessonId} initial={entry?.notes} />
      </div>

      <div className="lesson-foot">
        <button
          className={`cta ${read ? 'done' : 'run'}`}
          onClick={() => dispatch(setLessonStatus({ id: lessonId, status: read ? 'unread' : 'read' }))}
        >
          {read ? '✓ marked read — undo' : 'mark as read'}
        </button>
        <div className="row gap">
          {prev && (
            <a className="chip" href={`#/study/${course.key}/${prev}`}>
              ← prev
            </a>
          )}
          {next && (
            <a className="chip" href={`#/study/${course.key}/${next}`}>
              next →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
