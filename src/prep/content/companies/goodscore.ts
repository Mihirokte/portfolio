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

  questions: [
    {
      round: 'DSA',
      questions: [
        {
          q: 'You are climbing a staircase with n steps. Each time you can climb either 1 or 2 steps. In how many distinct ways can you climb to the top?',
          answer:
            'Ways to reach step n = ways(n-1) + ways(n-2) — it is Fibonacci. Reaching step n means arriving from n-1 (a 1-step) or n-2 (a 2-step), and those sets are disjoint, which is why they add. Do not memoise a tree; iterate two rolling variables for O(n) time and O(1) space. Base cases: ways(1)=1, ways(2)=2. Say the recurrence out loud before coding — the interviewer is checking that you derived it, not recalled it.',
          related: [
            'Same staircase, but you may climb 1, 2 or 3 steps at a time.',
            'Each step has a cost and you want the cheapest way to the top (min cost climbing stairs).',
            'Some steps are broken and cannot be used — count the valid paths.',
            'Count paths through an m×n grid moving only right or down (the 2-D version of the same recurrence).',
          ],
        },
        {
          q: 'Topic areas reported for this round: arrays, matrices, strings, sorting, hashing, and linked lists.',
          answer:
            'This is a standard easy-to-medium set with no advanced graph or DP theory reported. The highest-yield preparation is hashing for lookup/dedup problems, two pointers on sorted arrays and strings, and pointer manipulation on linked lists (reverse, detect cycle, merge). Matrix questions at this level are traversal and in-place transformation rather than dynamic programming.',
          related: [
            'Two Sum and its sorted-input two-pointer variant.',
            'Reverse a linked list, then detect a cycle in one.',
            'Rotate a matrix in place by 90 degrees.',
            'Group anagrams, or find the first non-repeating character.',
          ],
        },
      ],
    },
    {
      round: 'LLD / machine coding (backend)',
      questions: [
        {
          q: 'Design and implement a TaskManager in which tasks are ordered by priority and then by creation time. Expose addTask(priority, userId, details), modifyTask(updatedPriority, taskId), removeTask(taskId), and execute().',
          answer:
            'Model a Task value object (id, priority, createdAt, userId, details) and order it by a composite comparator: priority first, then createdAt as the tie-break — so a monotonically increasing counter or timestamp must be captured at insert. A bare heap gives you O(log n) add and execute but cannot modify or remove an arbitrary task, which is the real test here. Two workable designs: (a) a heap plus a HashMap from taskId to entry, marking entries stale on modify/remove and skipping them when popping (lazy deletion), or (b) a sorted structure such as a TreeSet/skip-list keyed on the comparator, giving true O(log n) removal. State the trade-off explicitly: lazy deletion is simpler but the heap can grow with tombstones; the tree is cleaner but needs a correct, total comparator. execute() pops the highest-priority live task and runs it.',
          related: [
            'Add a deadline and support "execute everything due before time T".',
            'Support recurring tasks that re-enter the queue after running.',
            'Support task dependencies, so a task runs only after its prerequisites (topological ordering).',
            'Design a rate-limited scheduler that runs at most N tasks per second.',
            'Design an in-memory job queue with retries and a dead-letter path.',
          ],
        },
        {
          q: 'Follow-up: how does your design behave under concurrent access?',
          answer:
            'Name the specific race first: addTask and execute both mutate the ordered structure, and modifyTask does a read-then-write on an entry, so a naive design can lose an update or pop a task that was just removed. The straightforward fix is a single lock around the structure, which is correct but serialises everything. Better answers: use a concurrent priority structure (for example Java\'s PriorityBlockingQueue) so producers never block consumers, keep the id→entry map in a concurrent map, and make modify/remove atomic by compare-and-set on a version or status field rather than mutating in place. If execute() runs the task while holding the lock you have created a long critical section — pop under the lock, execute outside it. Mention idempotency: with at-least-once execution a task may run twice, so the work itself should tolerate a repeat.',
          related: [
            'What happens if two threads call modifyTask on the same id simultaneously?',
            'How would you let multiple worker threads drain the queue without duplicating work?',
            'Where exactly is your critical section, and how long does it hold the lock?',
            'How does this change if the queue must survive a process restart?',
          ],
        },
      ],
    },
    {
      round: 'Machine coding (frontend)',
      questions: [
        {
          q: 'Build a calculator that reproduces a supplied UI design as closely as possible, then implement its functionality.',
          answer:
            'Two things are graded separately: visual fidelity and state correctness. For layout, a CSS grid for the keypad with a spanning display cell matches a calculator design quickly and stays responsive; match spacing, radius and type weight to the supplied design rather than approximating. For behaviour, keep one explicit state object — current entry, stored operand, pending operator, and a flag for "the next digit starts a new entry" — instead of parsing the display string. That flag is what makes operator-then-digit, repeated equals, and decimal handling behave correctly. Handle divide-by-zero and a leading-zero guard, and make each key a real button so keyboard input works.',
          related: [
            'Add keyboard support and an operation history panel.',
            'Build the same exercise as a tip calculator or unit converter.',
            'Make it a controlled component whose value is owned by the parent.',
            'Add undo/redo over the calculation history.',
          ],
        },
        {
          q: 'Follow-up on exact display behaviour: when an operator is entered, only the next value should be shown and the previous value hidden, so that just one value is visible during input.',
          answer:
            'This is the "new entry" flag doing its job. On an operator press you do not clear the display — you commit the current entry to the stored operand, record the operator, and set startNewEntry = true. The display keeps showing the old number until the first digit of the next operand arrives, at which point you replace rather than append. Pressing two operators in a row should overwrite the pending operator, not stack. The trap the interviewer is probing: if you append digits to whatever is on screen, the two operands visually merge, which is exactly the bug this requirement describes.',
          related: [
            'What should pressing equals repeatedly do?',
            'How do you prevent multiple decimal points in one entry?',
            'What happens if an operator is pressed as the very first input?',
            'Should the display show intermediate results as you chain operations?',
          ],
        },
      ],
    },
    {
      round: 'HLD / system design',
      questions: [
        {
          q: 'Design a distributed logging system.',
          answer:
            'Frame it as a write-heavy pipeline: agents on each host tail and batch log lines, push to an ingest tier behind a load balancer, which writes into a partitioned log such as Kafka; consumers then index into a search store and roll older data into cheap object storage. Key decisions to volunteer: partition by service or host so a single hot service cannot swamp one partition; batch and compress on the agent because per-line network calls dominate cost; accept at-least-once delivery and deduplicate on an event id rather than chasing exactly-once; and retain hot data searchable for days while archiving the long tail with a lifecycle policy. Call out backpressure — when ingest lags, the agent buffers to local disk and drops with a counter rather than blocking the application. Capacity sketch: a few thousand hosts at modest lines-per-second lands in the low terabytes per day, which is what justifies tiered retention.',
          related: [
            'Design a metrics and alerting system instead of logs.',
            'Design distributed tracing, where one request spans many services.',
            'How do you make logs searchable by arbitrary field within seconds?',
            'How would you handle a service that suddenly logs 100x its normal volume?',
            'How do you keep PII out of logs, and redact what slips through?',
          ],
        },
      ],
    },
    {
      round: 'Hiring manager — language fundamentals (frontend track)',
      questions: [
        {
          q: 'Explain the React hooks you have used.',
          answer:
            'Answer by grouping rather than listing: state (useState, useReducer for multi-field or transition-driven state), effects and lifecycle (useEffect for synchronising with something outside React), references (useRef for DOM nodes and for values that must persist without re-rendering), performance (useMemo for expensive values, useCallback for stable function identity passed to memoised children), and context (useContext). Name one you have actually reached for under pressure and why — that is what distinguishes a real answer from a recital.',
          related: [
            'When would you use useReducer instead of useState?',
            'What problem does useCallback actually solve, and when is it pointless?',
            'What are the rules of hooks, and why do they exist?',
            'Have you written a custom hook? What did it encapsulate?',
          ],
        },
        {
          q: 'What is the difference between useEffect and useLayoutEffect?',
          answer:
            'Both run after render, but useLayoutEffect fires synchronously after the DOM mutation and before the browser paints, while useEffect fires asynchronously after paint. So useLayoutEffect is the one to use when you must measure the DOM and then change it without the user seeing an intermediate frame — for example reading an element\'s height and repositioning a tooltip. The cost is that it blocks painting, so overusing it makes the app feel slower. Default to useEffect; reach for useLayoutEffect only to prevent a visible flicker.',
          related: [
            'You see a one-frame flicker when a tooltip positions itself. Which hook fixes it?',
            'Why does useLayoutEffect warn during server-side rendering?',
            'In what order do a child\'s and a parent\'s effects run?',
            'How do you clean up a subscription created in an effect?',
          ],
        },
        {
          q: 'What are debouncing and throttling, and when would you use each?',
          answer:
            'Both limit how often a function runs, but they choose differently. Debounce waits for quiet: it delays execution until N milliseconds have passed with no new calls, so only the last call in a burst runs — right for a search-as-you-type field or a resize handler where only the final state matters. Throttle enforces a rate: it runs at most once per N milliseconds during a burst, so you get steady intermediate updates — right for scroll position, mouse tracking, or an infinite-scroll trigger. The one-liner: debounce for "when they stop", throttle for "at most this often".',
          related: [
            'Implement debounce from scratch, then add a cancel method.',
            'Implement throttle, and say whether yours is leading- or trailing-edge.',
            'Which would you use for autosaving a draft, and why?',
            'How does this interact with React state updates and stale closures?',
          ],
        },
        {
          q: "Explain React's change-detection mechanics.",
          answer:
            'React does not watch your data; a re-render is triggered by a state or context update, and by default it re-renders the component and its subtree. It then diffs the new element tree against the previous one and applies the minimum set of DOM mutations — this reconciliation is why keys matter, since a stable key lets React match an item across renders instead of destroying and recreating it. Comparison at the props level is shallow, which is the practical consequence: a new object or array literal each render breaks memoisation even when the contents are identical, and mutating state in place instead of replacing it means React never sees a change at all.',
          related: [
            'Why does mutating an array in state fail to re-render?',
            'What does React.memo compare, and when is it useless?',
            'Why are array indexes a poor choice of key?',
            'How would you debug an unnecessary re-render?',
          ],
        },
        {
          q: 'Shallow copy versus deep copy.',
          answer:
            'A shallow copy duplicates the top level only, so nested objects are still shared references — spread and Object.assign are shallow, which is why mutating a nested field on a copy also changes the original. A deep copy recursively duplicates everything, so the two are fully independent: structuredClone handles this natively now, and the old JSON.parse(JSON.stringify(x)) trick works but silently loses undefined, functions, Dates and Maps, and throws on cycles. The React-relevant point: state updates need a new reference at every level you changed, which is why nested updates need nested spreads.',
          related: [
            'Write a deep clone that handles cycles.',
            'Why does spreading a nested state object still cause a shared-mutation bug?',
            'What does structuredClone not support?',
            'Is a frozen object the same as an immutable one?',
          ],
        },
        {
          q: 'What is the difference between var, let, and const?',
          answer:
            'var is function-scoped and hoisted as initialised-to-undefined, so reading it before assignment gives undefined and re-declaration is allowed — that is the source of the classic loop-closure bug. let and const are block-scoped and live in the temporal dead zone until initialised, so reading early throws a ReferenceError. const prevents reassignment of the binding, not mutation of the value, so a const object\'s fields can still change. Default to const, use let when you must reassign, and treat var as legacy.',
          related: [
            'Why does a for loop with var capture the wrong value in closures, but let does not?',
            'What is the temporal dead zone?',
            'Can you mutate an object declared with const?',
            'What does hoisting mean for function declarations versus expressions?',
          ],
        },
        {
          q: 'Explain pass by value versus pass by reference in JavaScript.',
          answer:
            'JavaScript is always pass-by-value — but for objects the value being copied is a reference. So reassigning the parameter inside a function never affects the caller, while mutating the object it points at does. That single distinction explains the usual confusion: obj.x = 1 inside a function is visible outside, obj = {x: 1} is not. Primitives are copied outright and behave exactly as expected.',
          related: [
            'Given a function that reassigns its parameter, what does the caller see?',
            'How do you pass an object without letting the callee mutate it?',
            'Are function arguments in JavaScript ever truly by reference?',
            'How does this relate to why React state must be replaced rather than mutated?',
          ],
        },
        {
          q: 'Given a set of console.log snippets, debug and explain the output.',
          answer:
            'These are almost always probing one of a few mechanics: hoisting and the temporal dead zone (var logging undefined, let throwing), the event loop (synchronous code, then microtasks from promises, then macrotasks from setTimeout — so a 0ms timeout still runs last), closures in loops (var capturing the final value, let capturing per-iteration), this binding (a regular function losing this, an arrow function inheriting it), or type coercion in comparisons. Read the snippet, name which mechanic it is testing, then walk the execution order aloud — the reasoning is what is being assessed, not the literal output.',
          related: [
            'Order the output of a setTimeout, a resolved promise, and a plain log.',
            'Explain the output of a for loop with var versus let and a setTimeout inside.',
            'What does this refer to inside a regular function versus an arrow function?',
            'Why does 0.1 + 0.2 === 0.3 return false?',
          ],
        },
      ],
    },
    {
      round: 'Experience discussion',
      questions: [
        {
          q: 'Walk through your prior work experience and the systems you owned. Reported as a distinct segment in multiple candidate accounts.',
          answer:
            'Pick one or two systems you genuinely owned and structure each as: what the system did and who depended on it, your specific scope within it, one hard technical decision and the trade-off you accepted, and the measurable outcome. Keep the framing on decisions rather than a tour of the architecture — the signal being read is whether you owned something or worked adjacent to it. Have one failure ready with what you changed afterwards; at a startup that is often weighted more heavily than the successes.',
          related: [
            'What is the hardest bug you have debugged in production?',
            'Tell me about a design decision you got wrong.',
            'Which part of that system would you rebuild, and why?',
            'How did you decide what to work on when nobody assigned it?',
          ],
        },
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
