import { COURSES } from './content'

// The home grid. DSA is drill-only → links straight to its problem list.
// Each study course links to its course page (lessons + practice + leftovers).
export interface HomeArea {
  key: string
  label: string
  blurb: string
  href: string
  kind: 'problems' | 'study'
}

export const HOME_AREAS: HomeArea[] = [
  {
    key: 'dsa',
    label: 'DSA',
    blurb: 'Data structures & algorithms — straight to the problems. Patterns, drills, links to LeetCode.',
    href: '#/dsa',
    kind: 'problems',
  },
  ...COURSES.map(
    (c): HomeArea => ({
      key: c.key,
      label: c.label,
      blurb: c.blurb,
      href: `#/study/${c.key}`,
      kind: 'study',
    }),
  ),
]
