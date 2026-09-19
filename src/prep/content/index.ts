import type { Course } from './types'
import { systemDesign } from './systemDesign'
import { lld } from './lld'
import { architecture } from './architecture'
import { aiEngineering } from './aiEngineering'
import { productionOps } from './productionOps'
import { security } from './security'

// Study courses, in display order. DSA is intentionally absent — it's
// drill-only (no study material) and is surfaced directly on the home grid.
// Production & Ops and Security are study-only (no practice problems).
export const COURSES: Course[] = [
  systemDesign,
  lld,
  architecture,
  aiEngineering,
  productionOps,
  security,
]

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
