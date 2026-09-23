import { findLesson } from '../content'
import { useAppDispatch, useAppSelector } from '../store'
import { setLessonStatus } from '../store/progressSlice'
import Markdown from '../components/Markdown'
import { LessonNotes } from '../components/ui'
import { NotFound, BackLink } from '../components/nav'
import { Button } from '../ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

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
    <div className="max-w-[66ch]">
      <BackLink href={`#/study/${course.key}`}>
        {course.label} — {chapter.title}
      </BackLink>
      <h1>{lesson.title}</h1>
      <div className="mt-8">
        <Markdown body={lesson.body} />
      </div>

      {lesson.deeper && (
        <Accordion type="single" collapsible className="mt-10 border-t border-foreground">
          <AccordionItem value="deeper" className="border-b-0">
            <AccordionTrigger className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-brand hover:no-underline">
              Go deeper
            </AccordionTrigger>
            <AccordionContent>
              <Markdown body={lesson.deeper} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}

      <div className="mt-16">
        <LessonNotes id={lessonId} initial={entry?.notes} />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-border">
        <Button
          variant={read ? 'outline' : 'default'}
          onClick={() => dispatch(setLessonStatus({ id: lessonId, status: read ? 'unread' : 'read' }))}
        >
          {read ? 'Marked read' : 'Mark as read'}
        </Button>
        <div className="flex gap-2">
          {prev && (
            <Button variant="ghost" asChild>
              <a href={`#/study/${course.key}/${prev}`}>Previous</a>
            </Button>
          )}
          {next && (
            <Button variant="ghost" asChild>
              <a href={`#/study/${course.key}/${next}`}>Next</a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
