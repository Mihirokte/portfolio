import type { Company } from './types'

// GoodScore — compiled 2026-09-23 from publicly reported candidate experiences.
//
// PROVENANCE (internal only — never rendered):
//  - LeetCode Discuss, "Goodscore | SDE 2 | Bangalore | July 2026":
//    https://leetcode.com/discuss/post/8402813/goodscore-sde-2-bangalore-july-2026-pass-tfbk/
//    (backend DSA → LLD → HLD loop; TaskManager LLD; distributed-logging HLD; InterviewVector)
//  - LeetCode Discuss, "Rupicard | Software Engineer | Bengaluru | August 2024":
//    https://leetcode.com/discuss/interview-experience/5766428/
//    (frontend calculator machine-coding + React/JS hiring-manager round; parent brand)
//  - LeetCode Discuss, in-person hiring-drive report:
//    https://leetcode.com/discuss/post/7030702/goodscore-do-not-interview-waste-of-time-1q95/
//    (in-person drive format only; candidate verdict/complaints excluded as out of scope)
//  - AmbitionBox, GoodScore interview questions (3 experiences: Software Developer, SDE, APM):
//    https://www.ambitionbox.com/interviews/goodscore-interview-questions
//    (Climbing Stairs verbatim; DSA topic list; machine-coding round; <2-week timeline)
//  - Company context: https://inc42.com/company/goodscore/ ,
//    https://entrackr.com/news/goodscore-raises-13-mn-in-series-a-round-led-by-peak-xv-10556674
//
// EXCLUDED name collisions (audit trail): "Goodcore Software" (Glassdoor E574950 /
// Indeed) is an unrelated services firm; US "good score" loan apps; AmbitionBox's
// cross-company "similar companies" question widget.
//
// Coverage is THIN: every concrete question below traces to a single report.
// Nothing here is inferred or padded.

export const goodscore: Company = {
  key: 'goodscore',
  name: 'GoodScore',
  descriptor:
    'Bengaluru-based consumer fintech (founded 2023, Series A led by Peak XV) building an AI credit-score management app for the Indian market. Also appears in older records under its original brand, RupiCard.',
  rolesCovered: 'Software Developer / SDE / SDE-2 — backend and frontend tracks',
  coverage: 'thin',
  updated: '2026-09-23',

  process: [
    {
      name: 'Recruiter screen',
      focus:
        'Background, education, and compensation expectations. Reported across tracks; end-to-end processes typically close in under two weeks.',
    },
    {
      name: 'DSA round',
      format: 'Live coding, conducted on the LeetCode platform',
      focus:
        'Standard data-structures and algorithms problem solving. Scheduling and interviewing for this round has been reported as outsourced to a third-party interviewing service (InterviewVector), with the interviewer selecting problems the candidate has not already solved on their LeetCode profile.',
    },
    {
      name: 'LLD / machine coding',
      format: 'Live design-and-implement exercise',
      focus:
        'Object-oriented design plus working code for a small system, followed by a concurrency discussion. On the frontend track this round is instead a UI build against a supplied design.',
    },
    {
      name: 'HLD / system design',
      format: 'Live discussion',
      focus:
        'Distributed-systems design. Reported at the SDE-2 level on the backend track; not reported for junior roles.',
    },
    {
      name: 'Hiring manager round',
      focus:
        'Language and framework fundamentals with live debugging, plus a discussion of prior work experience. Reported on the frontend track; a work-experience discussion also appears in backend reports.',
    },
  ],

  questions: [
    {
      round: 'DSA',
      questions: [
        'You are climbing a staircase with n steps. Each time you can climb either 1 or 2 steps. In how many distinct ways can you climb to the top?',
        'Topic areas reported for this round: arrays, matrices, strings, sorting, hashing, and linked lists.',
      ],
    },
    {
      round: 'LLD / machine coding (backend)',
      questions: [
        'Design and implement a TaskManager in which tasks are ordered by priority and then by creation time. Expose addTask(priority, userId, details), modifyTask(updatedPriority, taskId), removeTask(taskId), and execute().',
        'Follow-up: how does your design behave under concurrent access?',
      ],
    },
    {
      round: 'Machine coding (frontend)',
      questions: [
        'Build a calculator that reproduces a supplied UI design as closely as possible, then implement its functionality.',
        'Follow-up on exact display behaviour: when an operator is entered, only the next value should be shown and the previous value hidden, so that just one value is visible during input.',
      ],
    },
    {
      round: 'HLD / system design',
      questions: ['Design a distributed logging system.'],
    },
    {
      round: 'Hiring manager — language fundamentals (frontend track)',
      questions: [
        'Explain the React hooks you have used.',
        'What is the difference between useEffect and useLayoutEffect?',
        'What are debouncing and throttling, and when would you use each?',
        "Explain React's change-detection mechanics.",
        'Shallow copy versus deep copy.',
        'What is the difference between var, let, and const?',
        'Explain pass by value versus pass by reference in JavaScript.',
        'Given a set of console.log snippets, debug and explain the output.',
      ],
    },
    {
      round: 'Experience discussion',
      questions: [
        'Walk through your prior work experience and the systems you owned. Reported as a distinct segment in multiple candidate accounts.',
      ],
    },
  ],

  lldPrep: [
    {
      topic: 'Design plus working implementation, not just a class diagram',
      why: 'The reported backend round asked for a functioning TaskManager with a named public API, so code must compile and run within the session rather than remaining a sketch.',
    },
    {
      topic: 'Ordering with a primary and secondary key',
      why: 'The reported task ordering was priority first, then creation time — which maps onto a heap or sorted structure with a composite comparator, and is the core data-structure choice the exercise tests.',
    },
    {
      topic: 'Clean public API design around an internal structure',
      why: 'The exercise specified exact operations (add, modify, remove, execute), so encapsulating the structure behind those methods — and handling modify and remove efficiently, which naive heaps do not — is the discriminating detail.',
    },
    {
      topic: 'Thread safety and concurrent access',
      why: 'A concurrency follow-up was reported on the backend LLD round, so be ready to discuss locking, atomic operations, and which concurrent collection fits, and to say what breaks without them.',
    },
    {
      topic: 'Faithful UI replication with precise state rules (frontend track)',
      why: 'The reported frontend round supplied a design to reproduce and then cross-questioned exact display behaviour, so pixel fidelity and carefully specified input-state transitions both carry weight.',
    },
    {
      topic: 'Core language fundamentals under live debugging',
      why: 'The hiring-manager round mixed framework internals with output-prediction questions on copying semantics, scoping, and parameter passing, which are asked conversationally rather than as a coding task.',
    },
  ],

  specialNotes: [
    'The DSA round has been reported as run on the LeetCode platform through a third-party interviewing service, with the interviewer choosing problems absent from the candidate\u2019s solved history — so a public LeetCode profile may shape which problems appear.',
    'The backend loop reported at SDE-2 level runs three technical rounds — DSA, LLD, then HLD — with no separate online assessment reported.',
    'The LLD round is an implementation exercise with a concurrency follow-up, which is a heavier bar than a diagram-only design discussion.',
    'The frontend track reported a shorter loop: a UI-build machine-coding round followed by a hiring-manager round on framework and language fundamentals.',
    'Senior roles have been recruited through in-person hiring drives, where several candidates are processed on the same day; candidates have reported long waits before their first round, so plan for a full day on site.',
    'Reported processes have closed quickly — under two weeks end to end in every account found.',
    'The company also appears under its earlier brand, RupiCard (the app package is com.rupicard.score), so older interview reports are filed under that name and are worth searching separately.',
    'Publicly available data on this process is limited: each concrete question above comes from a single candidate account, so treat the list as indicative rather than exhaustive.',
  ],
}
