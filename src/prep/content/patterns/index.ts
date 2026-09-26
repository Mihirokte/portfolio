import { CORE_PATTERNS } from './core'
import { EXTENDED_PATTERNS } from './extended'
import type { Pattern } from './types'

export type { Pattern, PatternContrast } from './types'

/** Every pattern, canonical 16 first. */
export const PATTERNS: Pattern[] = [...CORE_PATTERNS, ...EXTENDED_PATTERNS]

/** Index order: families grouped, roughly easiest-to-hardest. */
export const FAMILY_ORDER = [
  'Windows & pointers',
  'Arrays, hashing & matrix',
  'Stacks',
  'Linked lists',
  'Search & selection',
  'Trees & tries',
  'Graphs',
  'Recursion & combinatorics',
  'Dynamic programming',
  'Intervals & greedy',
  'Bits & math',
]

export interface PatternFamily {
  name: string
  patterns: Pattern[]
}

/** Patterns grouped by family, in FAMILY_ORDER. Any family missing from the
 *  order list is appended, so a new family can never silently vanish. */
export const PATTERN_FAMILIES: PatternFamily[] = (() => {
  const byFamily = new Map<string, Pattern[]>()
  for (const pat of PATTERNS) {
    if (!byFamily.has(pat.family)) byFamily.set(pat.family, [])
    byFamily.get(pat.family)!.push(pat)
  }
  const out: PatternFamily[] = []
  for (const name of FAMILY_ORDER) {
    const patterns = byFamily.get(name)
    if (patterns) {
      out.push({ name, patterns })
      byFamily.delete(name)
    }
  }
  for (const [name, patterns] of byFamily) out.push({ name, patterns })
  return out
})()

export const findPattern = (key: string): Pattern | undefined =>
  PATTERNS.find((pat) => pat.key === key)

/** problem id → the patterns that solve it. Built once. */
const REVERSE: Map<string, Pattern[]> = (() => {
  const m = new Map<string, Pattern[]>()
  for (const pat of PATTERNS) {
    for (const id of pat.problemIds) {
      if (!m.has(id)) m.set(id, [])
      m.get(id)!.push(pat)
    }
  }
  return m
})()

/** Which patterns a problem belongs to — drives the drill page's pattern chips. */
export const patternsForProblem = (problemId: string): Pattern[] =>
  REVERSE.get(problemId) ?? []

/** Sibling problems that share a pattern with this one, nearest first
 *  (problems sharing the most patterns rank highest), excluding itself. */
export function relatedProblems(problemId: string, limit = 8): string[] {
  const score = new Map<string, number>()
  for (const pat of patternsForProblem(problemId)) {
    for (const id of pat.problemIds) {
      if (id === problemId) continue
      score.set(id, (score.get(id) ?? 0) + 1)
    }
  }
  return [...score.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([id]) => id)
}
