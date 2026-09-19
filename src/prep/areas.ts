import { findCourse } from './content'

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
const ORDER = ['dsa', 'lld', 'sd', 'arch', 'ops', 'sec']

const DSA_AREA: HomeArea = {
  key: 'dsa',
  label: 'DSA',
  blurb: 'Data structures & algorithms — straight to the problems. Patterns, drills, links to LeetCode.',
  href: '#/dsa',
  kind: 'problems',
}

export const HOME_AREAS: HomeArea[] = ORDER.map((key): HomeArea => {
  if (key === 'dsa') return DSA_AREA
  const c = findCourse(key)!
  return { key: c.key, label: c.label, blurb: c.blurb, href: `#/study/${c.key}`, kind: 'study' }
})
