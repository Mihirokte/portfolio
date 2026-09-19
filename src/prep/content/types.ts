// Study-portal content model. A Course (one of the 4 study areas) has
// Chapters; each Chapter has Lessons authored as markdown (with optional
// ```mermaid sequence diagrams) and MAY claim practice problems by id.
// Problems themselves live in data/drills.ts (+ runnable packs in packs.ts);
// a chapter references them so the course page can show, in textbook order,
// a chapter's lessons then its problems, with unclaimed problems collected
// into a final "more practice" section.

export interface Lesson {
  id: string // stable, e.g. 'sd-caching'
  title: string
  minutes: number // rough read time
  body: string // markdown; ```mermaid fences render as diagrams
}

export interface Chapter {
  id: string // e.g. 'sd-fundamentals'
  title: string
  summary: string
  lessons: Lesson[]
  /** Drill ids (from data/drills.ts) this chapter's material prepares you for.
   *  Rendered as the chapter's practice set, after its lessons. */
  problemIds?: string[]
}

export interface Course {
  key: string // 'sd' | 'lld' | 'arch' | 'ai'
  label: string
  blurb: string
  /** Which drills.ts area supplies this course's practice problems. */
  problemAreaKey?: string
  chapters: Chapter[]
}
