import { COURSES, findCourse } from './content'

// The home grid, in learning order (from scratch): DSA → LLD → System Design
// → Architecture → Production & Ops → Security. DSA is drill-only (links to
// its problem list); each study area links to its course page.
export interface HomeArea {
  key: string
  label: string
  blurb: string
  href: string
  kind: 'problems' | 'study'
}

// Explicit learning sequence by course key. DSA first, then the study areas
// in dependency order (single-machine design → distributed → above-a-system →
// how real systems run).
const ORDER = ['dsa', 'lld', 'sd', 'arch', 'ai', 'ops', 'sec']

const DSA_AREA: HomeArea = {
  key: 'dsa',
  label: 'DSA',
  blurb: 'Data structures & algorithms — straight to the problems. Patterns, drills, links to LeetCode.',
  href: '#/dsa',
  kind: 'problems',
}

export const HOME_AREAS: HomeArea[] = (() => {
  const toCard = (key: string): HomeArea => {
    if (key === 'dsa') return DSA_AREA
    const c = findCourse(key)!
    return { key: c.key, label: c.label, blurb: c.blurb, href: `#/study/${c.key}`, kind: 'study' }
  }
  const ordered = ORDER.map(toCard)
  // Safety net: surface any registered course the ORDER list forgot, so a new
  // area can never silently vanish from the home grid.
  const seen = new Set(ORDER)
  for (const c of COURSES) if (!seen.has(c.key)) ordered.push(toCard(c.key))
  return ordered
})()
