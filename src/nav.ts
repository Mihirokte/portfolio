export type SectionId = 'about' | 'work' | 'skills' | 'projects' | 'hobbies' | 'contact'
export type Section = { id: SectionId; label: string }

/** Every panel the room can open, in nav order. */
export const SECTIONS: Section[] = [
  { id: 'about', label: 'about' },
  { id: 'work', label: 'work' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'hobbies', label: 'hobbies' },
  { id: 'contact', label: 'contact' },
]

export const SECTION_IDS = SECTIONS.map((s) => s.id)

export const isSectionId = (s: string): s is SectionId => (SECTION_IDS as string[]).includes(s)

/** The door leaves the room. */
export const RESUME_URL = 'https://resume.mihirokte.info'

export const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
