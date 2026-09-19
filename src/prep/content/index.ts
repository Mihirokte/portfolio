import type { Course } from './types'
import { systemDesign } from './systemDesign'

// Study courses. System Design is the built template; lld / arch / ai
// will be added following the same shape.
export const COURSES: Course[] = [systemDesign]

export function findCourse(key: string): Course | undefined {
  return COURSES.find((c) => c.key === key)
}

export function findLesson(courseKey: string, lessonId: string) {
  const course = findCourse(courseKey)
  if (!course) return undefined
  for (const ch of course.chapters) {
    const lesson = ch.lessons.find((l) => l.id === lessonId)
    if (lesson) return { course, chapter: ch, lesson }
  }
  return undefined
}
