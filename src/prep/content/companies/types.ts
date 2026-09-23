// Company Research content model.
//
// Public-facing, neutral company interview data. Each company is one data file
// under this directory, registered in `index.ts` — adding a company requires no
// component changes.
//
// Provenance note: source URLs are kept as CODE COMMENTS inside each company
// file and are never rendered. The page presents company data only.

export interface InterviewRound {
  /** e.g. 'Online assessment', 'Machine coding', 'Hiring manager' */
  name: string
  /** Format/duration where reported, e.g. '90 min, live shared editor' */
  format?: string
  /** What this round covers, in a sentence or two. */
  focus: string
}

export interface QuestionGroup {
  /** Round or theme these questions belong to, e.g. 'DSA', 'LLD / machine coding' */
  round: string
  /** Questions as reported, lightly normalised for grammar only. */
  questions: string[]
}

export interface PrepTopic {
  topic: string
  /** Why it matters for this company's rounds, concretely. */
  why: string
}

export interface Company {
  key: string // url slug, e.g. 'goodscore'
  name: string
  /** One line of neutral context: what the company does, where, size band. */
  descriptor: string
  /** Roles this data covers, e.g. 'SDE / SDE-2, backend & full-stack'. */
  rolesCovered?: string
  /** How well-documented this company's process is publicly. */
  coverage: 'good' | 'moderate' | 'thin'
  /** The round sequence, in order. */
  process: InterviewRound[]
  /** Every concrete question found, grouped by round. */
  questions: QuestionGroup[]
  /** Must-prep topics specifically for LLD and machine-coding rounds. */
  lldPrep: PrepTopic[]
  /** Company-specific nuances worth knowing. */
  specialNotes: string[]
  /** ISO date this file's data was last compiled. */
  updated: string
}
