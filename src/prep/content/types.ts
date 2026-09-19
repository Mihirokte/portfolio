// Study-portal content model. A Course (one of the 4 study areas) has
// Chapters; each Chapter has Lessons authored as markdown (with optional
// mermaid sequence/flow diagrams fenced as ```mermaid). Problems (the DSA
// gym + discussion drills) keep living in drills.ts / packs.ts.

export interface Lesson {
  id: string // stable, e.g. 'sd-caching-strategies'
  title: string
  minutes: number // rough read time
  body: string // markdown; ```mermaid fences render as diagrams
}

export interface Chapter {
  id: string // e.g. 'sd-fundamentals'
  title: string
  summary: string
  lessons: Lesson[]
}

export interface Course {
  key: string // 'sd' | 'lld' | 'arch' | 'ai'
  label: string
  blurb: string
  chapters: Chapter[]
}
