import { AREAS } from './data/drills'
import { PACKS } from './data/packs'
import type { Course } from './content/types'
import type { Drill } from './types'

const DIFF_ORDER: Record<string, number> = { easy: 0, medium: 1, hard: 2 }

export function drillsForArea(areaKey?: string): Drill[] {
  if (!areaKey) return []
  return AREAS.find((a) => a.key === areaKey)?.drills ?? []
}

export function drillById(id: string): Drill | undefined {
  for (const a of AREAS) {
    const d = a.drills.find((x) => x.id === id)
    if (d) return d
  }
  return undefined
}

export function isRunnable(id: string): boolean {
  return Boolean(PACKS[id])
}

export interface ChapterProblems {
  chapterId: string
  drills: Drill[]
}

export interface LeftoverGroup {
  topic: string
  drills: Drill[]
}

/** Textbook layout for a course: each chapter's claimed drills (in the order
 *  the chapter lists them), plus every remaining drill in the course's area
 *  grouped by topic and sorted by difficulty then title. */
export function courseProblemLayout(course: Course): {
  perChapter: Record<string, Drill[]>
  leftovers: LeftoverGroup[]
} {
  const all = drillsForArea(course.problemAreaKey)
  const suppressed = new Set(course.suppressedProblemIds ?? [])
  const byId = new Map(all.filter((d) => !suppressed.has(d.id)).map((d) => [d.id, d]))
  const claimed = new Set<string>()
  const perChapter: Record<string, Drill[]> = {}

  for (const ch of course.chapters) {
    const list: Drill[] = []
    for (const id of ch.problemIds ?? []) {
      const d = byId.get(id)
      if (d && !claimed.has(id)) {
        list.push(d)
        claimed.add(id)
      }
    }
    perChapter[ch.id] = list
  }

  const rest = all.filter((d) => !claimed.has(d.id) && !suppressed.has(d.id))
  const groups = new Map<string, Drill[]>()
  for (const d of rest) {
    const key = d.topic || 'other'
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key)!.push(d)
  }
  const leftovers: LeftoverGroup[] = [...groups.entries()]
    .map(([topic, drills]) => ({
      topic,
      drills: drills.sort(
        (a, b) =>
          (DIFF_ORDER[a.difficulty.toLowerCase()] ?? 9) -
            (DIFF_ORDER[b.difficulty.toLowerCase()] ?? 9) || a.title.localeCompare(b.title),
      ),
    }))
    .sort((a, b) => a.topic.localeCompare(b.topic))

  return { perChapter, leftovers }
}
