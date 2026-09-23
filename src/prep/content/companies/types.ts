// Company Research content model.
//
// Public-facing, neutral company interview data: what they ask, a short answer
// sketch for each, and the variants an interviewer could form from the same
// question. Each company is one data file under this directory, registered in
// `index.ts` — adding a company requires no component changes.
//
// Provenance note: source URLs are kept as CODE COMMENTS inside each company
// file and are never rendered. The page presents company data only.

export interface AskedQuestion {
  /** The question as reported, lightly normalised for grammar only. */
  q: string
  /**
   * Short answer sketch — enough to understand the question and answer it well,
   * not a full essay. Reference material, not a reported candidate answer.
   */
  answer: string
  /** Variants an interviewer could form from the same question. */
  related?: string[]
}

export interface QuestionGroup {
  /** Round or theme these questions belong to, e.g. 'DSA', 'LLD / machine coding' */
  round: string
  questions: AskedQuestion[]
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
  /** Every concrete question found, grouped by round. */
  questions: QuestionGroup[]
  /** Must-prep topics specifically for LLD and machine-coding rounds. */
  lldPrep: PrepTopic[]
  /** Company-specific nuances worth knowing. */
  specialNotes: string[]
  /** ISO date this file's data was last compiled. */
  updated: string
}
