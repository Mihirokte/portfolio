import { EXPERIENCE, PROJECTS } from './content'

export type NavItem = { id: string; label: string; children?: NavItem[] }

export const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const NAV: NavItem[] = [
  {
    id: 'about',
    label: 'About',
    children: [
      { id: 'about-story', label: 'story' },
      { id: 'about-focus', label: 'what i do' },
      { id: 'about-accolades', label: 'accolades' },
    ],
  },
  { id: 'work', label: 'Work', children: EXPERIENCE.map((j) => ({ id: `work-${slug(j.company)}`, label: j.company.toLowerCase() })) },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects', children: PROJECTS.map((p) => ({ id: `project-${slug(p.name)}`, label: p.name.toLowerCase() })) },
  { id: 'contact', label: 'Contact' },
]

export const ALL_IDS = NAV.flatMap((n) => [n.id, ...(n.children?.map((c) => c.id) ?? [])])

export function parentOf(id: string): string {
  for (const n of NAV) if (n.id === id || n.children?.some((c) => c.id === id)) return n.id
  return NAV[0].id
}
