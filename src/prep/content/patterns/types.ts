/** A coding pattern: the recognition cue, the mechanism, the code skeleton,
 *  and the problems in this portal that it solves.
 *
 *  Taxonomy of the 16 canonical patterns follows
 *  https://github.com/Chanda-Abdul/Several-Coding-Patterns-for-Solving-Data-Structures-and-Algorithms-Problems-during-Interviews
 *  Extended patterns cover the rest of this portal's problem set. */

/** "Easy to confuse with X — here's how to tell them apart." */
export interface PatternContrast {
  /** key of the other pattern */
  key: string
  /** how to tell which one the problem wants */
  how: string
}

export interface Pattern {
  key: string
  name: string
  /** Index grouping, e.g. 'Windows & pointers'. */
  family: string
  /** One of the 16 canonical patterns. */
  canonical: boolean
  /** The whole pattern in one sentence — the front of the card. */
  essence: string
  /** Recognition cues: what in the problem statement points here. */
  cues: string[]
  /** How it works. Short markdown. */
  mechanism: string
  /** Reusable Python skeleton. */
  template: string
  /** Time / space, as an interviewer expects it stated. */
  complexity: string
  /** Where people lose the problem. */
  pitfalls: string[]
  /** Neighbouring patterns and how to disambiguate. */
  contrasts?: PatternContrast[]
  /** Drill ids (dsa-NNN) this pattern solves. */
  problemIds: string[]
}
