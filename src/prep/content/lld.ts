import type { Course } from './types'

// Low-Level Design study course. Lessons are deliberately small and plain.
// ```mermaid sequence diagrams render via a lightweight custom renderer.
// Sources are the compiled swe-job-prep/02-lld reference material
// (Hello Interview LLD guide, awesome-low-level-design, Refactoring Guru).

export const lld: Course = {
  key: 'lld',
  label: 'Low-Level Design',
  problemAreaKey: 'lld',
  blurb:
    'Turning a one-line prompt ("design a parking lot") into clean classes, state, and method signatures in 40 minutes. The principles, the handful of patterns that actually recur, and the concurrency wrinkle that shows up at SDE2.',
  chapters: [
    {
      id: 'lld-round',
      title: 'The machine-coding round',
      summary: 'What the round measures, and a time-boxed way to run it without diving into code too early.',
      problemIds: ['lld-013', 'lld-001'],
      lessons: [
        {
          id: 'lld-what-it-is',
          title: 'What LLD actually is',
          minutes: 3,
          body: `LLD, OOD, and machine coding are the same interview under different names. You get a short prompt — "design a parking lot", "design an elevator", "design Tic Tac Toe" — and roughly 35–45 minutes to turn it into classes, interfaces, state, and method signatures. India-style machine-coding rounds run 60–90 minutes and expect compiling, runnable code.

This is **not** system design. System design is architecture at scale — services, databases, queues, sharding — drawn as boxes and arrows with no code. LLD is the blueprint for one box: you write the \`Ticket\` class, the \`SpotType\` enum, the \`FeeCalculator\` interface, and show how they collaborate inside a single process.

Know the regional variant before you walk in. US big-tech wants partial real code and grades your *reasoning* about patterns; India/Asia mid-size rounds often want you to *name* the pattern (Factory, Strategy, Singleton) directly and may run test cases live. Asking the recruiter which variant to expect is sanctioned, not a weakness signal.

The single most penalised failure mode is the same everywhere: jumping straight to code without scoping, then running out of time.`,
        },
        {
          id: 'lld-rubric',
          title: 'What the rubric rewards',
          minutes: 3,
          body: `Every company scores its own way, but the underlying axes repeat. Hello Interview's five:

1. **Problem analysis** — do you extract entities and ask clarifying questions *before* writing a class?
2. **Class design** — are responsibilities, method signatures, and ownership boundaries clean? Weak class design compounds into everything downstream.
3. **Code quality** — encapsulation, composition over inheritance, naming, dependency direction. The craft, even in pseudocode.
4. **Extensibility** — can your design absorb *one* plausible follow-up without a rewrite? Not "anticipate every future".
5. **Communication** — a structured, narrated thought process, and adjusting cleanly when the interviewer probes.

At SDE2 / ~3 YoE the bar is bounded: correct entity decomposition without prompting, SOLID applied *without over-applying it*, one or two extensions handled cleanly, and comfort with at least one concurrency wrinkle if the role touches backend. Heavy pattern-stacking and distributed variants are senior-only — don't over-prepare defensively at the cost of fluency on the basics.`,
        },
        {
          id: 'lld-framework',
          title: 'A framework that fits in 40 minutes',
          minutes: 5,
          body: `A time-boxed structure that prevents both classic failures — diving into code before the interviewer follows your structure, and over-polishing the setup until time runs out.

1. **Requirements (~5 min)** — ask across four themes: primary capabilities, rules and completion conditions, error handling, and scope boundaries (what's explicitly out — UI, persistence, networking, auth). Write an explicit requirements + out-of-scope list.
2. **Entities & relationships (~3 min)** — pull the nouns out of the requirements into entities; sketch ownership with boxes and arrows. No formal UML — engineers design directly in code now, and interviewers rarely expect UML.
3. **Class design (~10–15 min)** — per entity, derive **state** and **behavior** straight from the requirements. Keep rules with the entity that owns the data ("Tell, Don't Ask").
4. **Implementation (~10 min)** — pseudocode the one or two most interesting methods: happy path first, then edge cases. Trace one concrete scenario end to end.
5. **Extensibility (~5 min)** — the interviewer proposes a twist; show which seam absorbs it without a rewrite.

Compressed: **scope it → ground it in entities → commit to a class structure → go deep on the interesting method without breaking down.** Write class outlines as \`state\` + \`behavior\` lists, not UML diagrams.`,
        },
        {
          id: 'lld-worked-tictactoe',
          title: 'A worked pass: Tic Tac Toe',
          minutes: 4,
          body: `Tic Tac Toe is the framework's own worked example — simple enough that you practise *pacing*, not domain complexity.

**Requirements:** two players alternate X/O on a 3x3 grid; win by row/column/diagonal; draw if the board fills; reject invalid moves (occupied cell, move after game over); query state; reset.

**Entities:** \`Game\` (orchestrator), \`Board\`, \`Player\`, \`GameState\` enum (IN_PROGRESS / WON / DRAW).

**The key move is separating concerns.** A naïve version mixes display, input, and win-checking in one \`play()\` loop. Instead each concern owns a class:

- \`Board\` owns the grid and \`hasWinner()\` / \`makeMove(move)\`.
- an \`InputHandler\` owns reading a move.
- a \`Display\` owns rendering.
- \`Game\` just coordinates them.

Payoff: swapping console input for a GUI touches only \`InputHandler\`; changing win conditions touches only \`Board\`. Each concern is independently testable.

Signature detail worth copying: prefer \`makeMove(player, row, col) -> bool\` over a generic \`execute(command)\` — a specific signature communicates the contract without documentation. And \`getWinner() -> Player?\` (nullable) beats returning a string.`,
        },
      ],
    },
    {
      id: 'lld-principles',
      title: 'Design principles',
      summary: 'SOLID, composition, and KISS/DRY/YAGNI — as thinking tools you apply out loud, not an acronym to recite.',
      problemIds: ['lld-007', 'lld-016'],
      lessons: [
        {
          id: 'lld-kiss-dry-yagni',
          title: 'KISS, DRY, YAGNI first',
          minutes: 4,
          body: `If you remember only three principles, make it these — in this order of interview impact.

**KISS — keep it simple.** The most commonly *violated* principle in LLD rounds is KISS, not SOLID. Candidates over-engineer to show off pattern knowledge — factories, builders, decorators where a plain class and a conditional would do. Interviewers read that as over-engineering, not sophistication. Add complexity only when simplicity *stops working*: a class balloons past 10 responsibilities, or a new payment method means touching five places.

**DRY — don't repeat yourself, but not blindly.** Pull duplicated logic into one place only when it's *conceptually the same thing*, not merely textually similar. Two validators that happen to look alike but serve different domain concepts should stay separate — forcing them to share code creates coupling where a change for one reason breaks the other.

**YAGNI — you aren't gonna need it.** Build for the requirements you were given. Designing a parking lot? Don't add EV charging and valet unless the prompt says so. YAGNI does *not* mean "don't think ahead" — it means design seams that *could* extend (an interface, not a hardcoded type) but don't *implement* the extension until asked.

The senior tell is holding DRY and KISS in tension out loud: "I'd keep this inline for now to avoid premature abstraction; if we see it duplicated three or four times, that's the trigger to extract."`,
        },
        {
          id: 'lld-solid',
          title: 'SOLID, with the honest caveat',
          minutes: 5,
          body: `SOLID came from inheritance-heavy Java/C#-era design. Applying it *maximally* is falling out of fashion — modern code favours composition and plain functions. Apply it when the problem calls for it; recognise when you're adding ceremony. Saying that caveat out loud signals judgment.

- **S — Single Responsibility.** One reason to change. A \`Report\` that generates content *and* formats PDF *and* writes files should split into \`Report\`, \`PDFPrinter\`, \`FileStorage\` — so a PDF-library upgrade touches only one class.
- **O — Open/Closed.** Extend without modifying working code. A \`PaymentProcessor\` with an \`if type == "credit" … elif "paypal"\` chain must be edited for every new type. Give it a \`PaymentMethod\` interface instead, and a new \`CryptoPayment\` class is zero edits elsewhere.
- **L — Liskov Substitution.** A subclass must work anywhere the base does. A \`Penguin(Bird)\` whose \`fly()\` raises is a violation; split the capability into a \`FlyingBird\`. Red flags: a subclass raising \`NotImplementedError\`, or callers doing \`if isinstance(x, Penguin)\`.
- **I — Interface Segregation.** Don't force implementers to stub methods they don't need. A \`Robot\` shouldn't implement \`eat()\`/\`sleep()\` as no-ops — split into small \`Workable\` / \`Feedable\` interfaces composed per capability.
- **D — Dependency Inversion.** Depend on an abstraction your business logic defines, not a concrete class. \`NotificationService\` takes a \`MessageSender\` interface in its constructor (dependency injection is the technique; DIP is the principle) — now you unit-test with a mock and swap email for SMS with zero changes.`,
        },
        {
          id: 'lld-composition',
          title: 'Composition over inheritance',
          minutes: 3,
          body: `Prefer "has-a" (a class holds a reference to a behavior object) over "is-a" (deep subclass hierarchies) when the thing that varies is *behavior*, not *identity*.

The Strategy pattern is composition-over-inheritance in its purest interview form. Instead of a hierarchy — \`CreditCardPaymentProcessor extends PaymentProcessor extends AbstractPaymentProcessor\` — you hold a \`PaymentStrategy\` reference and swap it at runtime.

Inheritance hierarchies deeper than one level are a common LLD red flag. If you find yourself subclassing a subclass, ask whether composition would flatten it.

The exception that proves the rule: **Chess pieces**. \`Pawn\`, \`Rook\`, \`Bishop\` each override \`getValidMoves(board, position)\`. That *is* correct inheritance — the variation is tied to the piece's permanent identity and every subtype is substitutable (satisfies LSP), so it's not a Strategy you swap at runtime. Use inheritance when the difference is *what a thing is*; use composition when the difference is *what a thing does right now*.`,
        },
        {
          id: 'lld-coupling-cohesion',
          title: 'Coupling, cohesion, and modeling the right entities',
          minutes: 4,
          body: `Every principle so far serves one goal: **maximise cohesion inside each class, minimise coupling between classes.**

- **Cohesion** — how tightly a class's own responsibilities belong together. High cohesion = SRP satisfied. A \`PDFPrinter\` that only formats PDF is high-cohesion.
- **Coupling** — how much one class leans on another's internals. Low coupling = classes talk through narrow, stable interfaces. Depending on a \`MessageSender\` interface is loose; depending on a concrete \`EmailSender\` is tight.

A related trap the **Law of Demeter** catches: don't reach through objects — \`order.getCustomer().getAddress().getZipCode()\` couples you to three objects' structure. Add \`order.getCustomerZipCode()\` and let \`Order\` navigate internally. (Fluent builder chains are fine — each call returns the *same* type.)

The other half of good modeling is picking the right *entities*. The classic tell is the **Library** problem: model only \`Book\` with a boolean \`available\` and you can't represent owning five copies of a title. Split \`Book\` (catalog entry) from \`BookCopy\` (a lending unit) — "is this book available" really means "is at least one copy available". Getting that split right is worth more than any pattern.`,
        },
        {
          id: 'lld-over-engineering',
          title: 'When NOT to abstract',
          minutes: 3,
          body: `The single biggest anti-pattern flagged across every current source is over-engineering — reaching for a pattern the requirements don't yet justify. Concretely:

- Don't introduce a \`Factory\` for two hardcoded types when a constructor call is fine. Introduce it when the prompt says "support multiple X" or a third type is imminent.
- Don't wrap a 2–4-field object in a \`Builder\`. A \`Player(name, mark)\` needs a constructor. Builders earn their place when fields are numerous, optional, and validation order matters.
- Don't split a 30-line, one-responsibility class into five collaborators "for testability" — that's SRP misapplied as ceremony.
- Don't add a \`Singleton\` unless the requirements explicitly demand exactly one shared instance system-wide. Passing a shared object through constructors is almost always clearer and more testable.

The tell that separates a senior response from a junior one is *saying the tradeoff out loud*: "I could abstract this now, but I'd be guessing at the shape of a requirement we don't have yet, so I'm keeping it simple until it's justified." Picking simple silently reads the same as not knowing the pattern; naming the choice reads as judgment.`,
        },
      ],
    },
    {
      id: 'lld-patterns',
      title: 'Patterns that show up',
      summary: 'The GoF catalog has 23 patterns; interviews test about 8. Each one here, with when it earns its place and the problem it maps to.',
      problemIds: ['lld-008', 'lld-018', 'lld-009', 'lld-010', 'lld-003', 'lld-011', 'lld-015', 'lld-012'],
      lessons: [
        {
          id: 'lld-patterns-overview',
          title: 'How to use patterns without forcing them',
          minutes: 3,
          body: `The single biggest mistake with patterns is forcing one where plain code would do. Hello Interview's guidance, verbatim: "Most interview-ready designs use no patterns, or at most one or two. If you're reaching for three or more, you're probably forcing it." Patterns should *fall out of* good design decisions, not drive them.

The eight-ish that actually recur:

- **Creational:** Factory (create the right type), Builder (complex optional-field construction), Singleton (mostly *not* — prefer injection).
- **Structural:** Adapter (wrap a mismatched third-party interface), Decorator (stack runtime-optional behavior), Facade (your orchestrator class already is one).
- **Behavioral:** Strategy (swap an algorithm), Observer (fan out a state change), State (state-specific behavior in per-state classes), Command (undo/redo/queued execution), Template Method (shared step sequence, differing steps).

Two contrasts worth memorising because interviewers probe them:

- **Factory vs Strategy** — Factory decides *which object to create*; Strategy decides *which behavior* an already-created object delegates to. They often appear together (a factory hands back a strategy).
- **Decorator vs subclass** — Decorator is for *runtime-composable* behavior; a plain subclass is for a stable type distinction fixed at design time.`,
        },
        {
          id: 'lld-strategy',
          title: 'Strategy — the most important one',
          minutes: 4,
          body: `**Intent:** define a family of interchangeable algorithms and let the one in use vary independently of the client. It's the most-requested LLD pattern because it directly tests polymorphism + composition-over-inheritance.

**The signal:** a pile of \`if/elif\` or \`switch\` branching on a type or mode is a Strategy waiting to happen.

\`\`\`python
class PaymentStrategy(ABC):
    @abstractmethod
    def pay(self, amount: float) -> bool: ...

class CreditCardPayment(PaymentStrategy):
    def pay(self, amount): ...   # card logic

class ShoppingCart:
    def set_payment_strategy(self, s: PaymentStrategy): self._strategy = s
    def checkout(self, amount): self._strategy.pay(amount)
\`\`\`

**Where it maps:**
- **Splitwise** — an \`ExpenseSplit\` interface with \`EqualSplit\`, \`ExactSplit\`, \`PercentSplit\`, validated so shares sum to the total. This is the textbook Strategy slot.
- **URL Shortener** — a \`ShortCodeGenerator\` strategy: base62 counter vs. random-with-collision-check vs. hash-of-URL. (The LLD version is about the in-memory map and the generation algorithm, not distributed IDs — say so if the prompt is ambiguous.)
- Parking-fee calculation by vehicle type, surge vs. flat pricing, discount rules — all Strategy.`,
        },
        {
          id: 'lld-state',
          title: 'State — a machine, not a status field',
          minutes: 5,
          body: `**Intent:** let an object change its behavior when its internal state changes, by putting state-specific behavior in per-state classes instead of conditionals scattered across methods.

**The signal:** the requirements keep saying "state" and transitions have real rules. When present, the state machine is usually the *centerpiece* — draw it (states as circles, transitions as labeled arrows) before coding; interviewers explicitly favour that.

The **Vending Machine** is the canonical example — states own the transitions:

\`\`\`python
class NoCoinState(State):
    def insert_coin(self, m): m.set_state(HasCoinState())
    def select_product(self, m): pass        # invalid here

class HasCoinState(State):
    def select_product(self, m): m.set_state(DispenseState())
\`\`\`

Compare that to one giant conditional keyed on a status string — the State pattern makes an illegal transition (dispensing before paying) structurally impossible rather than a check you might forget.

**Where else it maps:**
- **ATM** — IDLE → CARD_INSERTED → PIN_VALIDATED → TRANSACTION_SELECTED → DISPENSING; the state gates which operation is valid at each step. Same shape as the vending machine.
- **Food Delivery** — the \`Order\` lifecycle (placed → confirmed → preparing → out for delivery → delivered); delivering a *cancelled* order should be structurally rejected, not conditionally checked.`,
        },
        {
          id: 'lld-observer',
          title: 'Observer — one change, many reactions',
          minutes: 4,
          body: `**Intent:** a one-to-many dependency — when one subject changes state, all its dependents are notified automatically, without the subject knowing their concrete types. Signal words: "notify", "subscribe", "update multiple components".

\`\`\`python
class Stock:
    def attach(self, obs): self._observers.append(obs)
    def set_price(self, price):
        self.price = price
        for obs in self._observers:
            obs.update(self.symbol, price)
\`\`\`

The fan-out at the heart of it:

\`\`\`mermaid
sequenceDiagram
    participant Stock
    participant Alert
    participant Chart
    participant Feed
    Stock->>Alert: update(price)
    Stock->>Chart: update(price)
    Stock->>Feed: update(price)
    Note over Alert,Feed: each reacts independently
\`\`\`

**Where it maps:** the **Logging** framework is the sharp one. Routing a message to *one* destination is Strategy (pick a \`ConsoleAppender\` or a \`FileAppender\`). But wanting console **and** file **and** network *simultaneously* is Observer/fan-out — the \`Logger\` notifies every attached appender. Recognising which shape the requirement actually calls for is the scored signal. Also: stock tickers, price alerts, an "order placed" event fanning out to inventory + notifications + analytics.`,
        },
        {
          id: 'lld-decorator',
          title: 'Decorator — stack behavior at runtime',
          minutes: 4,
          body: `**Intent:** attach responsibilities to an object dynamically, as a flexible alternative to subclassing. It's specifically for *stacking combinable, runtime-optional* behaviors where subclassing would explode combinatorially (\`LoggedEncryptedCompressedSource\`, \`EncryptedCompressedSource\`, …).

The **Coffee machine with add-ons** is the classic GoF-textbook version: a base \`Beverage\`, wrapped by \`MilkDecorator\`, \`SugarDecorator\`, \`WhipDecorator\` — each adds to \`cost()\` and \`description()\` by delegating to what it wraps.

\`\`\`python
class EncryptionDecorator(DataSource):
    def __init__(self, wrapped): self._wrapped = wrapped
    def write_data(self, data):
        self._wrapped.write_data(self._encrypt(data))

# stack at runtime, any order:
source = CompressionDecorator(EncryptionDecorator(FileDataSource("f")))
\`\`\`

The tell for Decorator vs a plain subclass: if the behavior is *fixed at design time* and represents a stable type, subclass it. If it's *optional and combinable at runtime* — "add milk and whip but not sugar" — decorate it. Also maps to pizza/burger toppings and a logging/caching/retry middleware stack around a service call.`,
        },
        {
          id: 'lld-factory-facade',
          title: 'Factory & Facade — often already there',
          minutes: 4,
          body: `**Factory** — define an interface for creating an object and let a factory decide the concrete class, so callers don't know or care which they get. Earns its place when the prompt says "support multiple types of X"; skip it for two hardcoded types with no growth signal. (What most people call "Factory" in an interview is technically *Simple Factory*; the distinction rarely matters to the interviewer.)

The **Notification Service** is the textbook **Factory + Strategy combo**, explicitly called out as a common pairing:

\`\`\`mermaid
sequenceDiagram
    participant Svc as NotificationService
    participant F as NotificationFactory
    participant Ch as EmailChannel
    Svc->>F: create("email")
    F-->>Svc: EmailChannel
    Svc->>Ch: send(message)
\`\`\`

Factory creates the right \`NotificationChannel\` by type; Strategy is each channel implementing \`send()\` differently.

**Facade** — a unified interface over a subsystem. The honest take: you're already writing one in every LLD round without naming it. Your top-level orchestrator — \`ParkingLot\`, \`ElevatorController\`, \`LibraryManagementSystem\` — that coordinates several collaborators behind a clean public API *is* a facade. No need to announce the name unless it helps communicate the shape.`,
        },
        {
          id: 'lld-command-adapter-builder-singleton',
          title: 'Command, Adapter, Builder, Singleton, Template Method',
          minutes: 4,
          body: `The rest of the recurring set, each in one line of "when it earns its place":

- **Command** — encapsulate a request as an object with everything needed to run (and undo) it. Signal: **undo/redo, an action history, deferred/queued execution**. A text editor's undo stack, an elevator's queued floor requests as command objects, a job scheduler with rollback. Pairs a \`Command.execute()\`/\`undo()\` interface with a \`CommandHistory\` stack.
- **Adapter** — convert a third-party/legacy interface into the one your system expects, when you can't modify it. Wrapping a legacy \`XMLPaymentGateway\` behind your \`PaymentProcessor\` interface; wrapping several vendors' SDKs behind one common interface.
- **Builder** — separate construction of a complex object from its representation. Earns its place with *many optional fields* and validation order that matters: HTTP request builders, config objects, query builders. Not for a 2–4-required-field domain object.
- **Singleton** — exactly one instance system-wide. The honest take: mostly *don't*. It hides dependencies and makes testing harder (you can't substitute a double for \`getInstance()\`). Prefer injecting the shared object. When it genuinely earns its place — a parking-lot registry, a global ID generator, a connection pool — thread-safe lazy init is a detail interviewers do *not* expect you to code live.
- **Template Method** — a fixed skeleton in a base class, subclasses override steps. Simpler than Strategy when the *sequence itself* is the shared contract: a game framework's \`setup() → play() → end()\`, a report pipeline's \`fetch() → transform() → write()\`.`,
        },
      ],
    },
    {
      id: 'lld-concurrency-api',
      title: 'Concurrency & API design',
      summary: 'The follow-up that lands at SDE2 ("now two threads race for the last seat"), plus idempotency and the API-design questions that end almost every round.',
      problemIds: ['lld-004', 'lld-005', 'lld-006', 'lld-014', 'lld-017', 'lld-002'],
      lessons: [
        {
          id: 'lld-concurrency-types',
          title: 'Three kinds of concurrency problem',
          minutes: 4,
          body: `LLD concurrency is single-process, shared-memory, multi-threaded — threads racing over an in-memory object (a \`Seat\`, a \`ParkingSpot\`, a counter). It's *not* distributed-systems concurrency; if an interviewer asks "and across multiple machines?", name that as a system-design pivot.

Recognising which of three types you face tells you which primitive to reach for:

| Type | What breaks | Fix |
|---|---|---|
| **Correctness** | shared state corrupted by concurrent read-modify-write | locks, atomics, immutability |
| **Coordination** | threads must hand off work or wait on each other | blocking queues, condition variables |
| **Scarcity** | a limited resource is contended | semaphores, resource pools |

Most problems *start* as Correctness and grow Coordination/Scarcity as follow-ups.

The classic Correctness bug is **check-then-act**: "check if the seat is free" then "book it" as two separate steps lets two threads both pass the check before either acts. The fix is making check-and-act *one* atomic operation under a single lock — not two separate locked operations. This exact shape recurs in Parking Lot, Movie Booking, Amazon Locker, and Library ("two members borrow the last copy").`,
        },
        {
          id: 'lld-thread-safety',
          title: 'The thread-safety toolbox',
          minutes: 5,
          body: `Reach for the smallest tool that fixes the problem type.

**Locks (mutexes)** — the default for protecting shared state. Coarse-grained (one lock guards everything: simple, but serialises unrelated work) vs. fine-grained (one lock per resource, e.g. per-seat: better throughput, but deadlock risk if threads acquire multiple locks in different orders). Read-write locks let many readers *or* one writer — good when reads vastly outnumber writes.

**Atomics** — lock-free ops on a *single* variable (compare-and-swap). Good for counters and flags; the moment you must update two related fields together, you need a lock. (Python has no real atomics — use a \`Lock\` even for a counter; Java has \`AtomicInteger\`, Go \`sync/atomic\`.)

**Immutability** — the strongest correctness tool: an object that can't change after construction can't be corrupted, because there's no modify step to race on. Prefer immutable value objects (a \`Money\` or \`TimeSlot\`) for anything passed between threads.

**Blocking queue (producer-consumer)** — hands work between threads safely: producers block when full, consumers block when empty, neither burns CPU polling. This is the **Elevator** shape — a controller thread (producer) enqueues floor requests, each elevator's control loop (consumer) drains its queue:

\`\`\`mermaid
sequenceDiagram
    participant Ctrl as Controller
    participant Q as Request queue
    participant Elev as Elevator loop
    Ctrl->>Q: enqueue(floor request)
    Elev->>Q: dequeue (blocks if empty)
    Q-->>Elev: request
    Elev->>Elev: move + open doors
\`\`\`

**Semaphores** — a counting lock with N permits, for Scarcity: at most 5 elevators moving, at most 10 concurrent downloads. Always release in a \`finally\`.`,
        },
        {
          id: 'lld-rate-limiter',
          title: 'Rate limiter: where correctness and scarcity meet',
          minutes: 4,
          body: `The Rate Limiter is *the* canonical LLD concurrency problem, because Correctness and Scarcity both apply at once: concurrent requests from one client update a shared counter/bucket (must be atomic), and the whole point is bounding a scarce resource.

The interview usually wants you to pick one algorithm and justify it:

| Algorithm | Idea | Weakness |
|---|---|---|
| Fixed window | count per calendar minute | 2x burst at the window edge |
| Sliding window log | timestamp per request | memory grows with volume |
| Sliding window counter | weighted current + previous window | approximate, but O(1) memory |
| **Token bucket** | refill tokens at a rate, spend one per request | — allows controlled bursts |
| Leaky bucket | queue and drain at fixed rate | smooths bursts, adds latency |

Token bucket is the usual answer: the cap is your burst tolerance, the refill rate your sustained limit. Sliding window counter is the memory-bounded default when you *don't* want bursts.

Two design points that score: make the per-client counter update **atomic** (lock or CAS), and keep per-client state **independent** — keyed \`Map<ClientId, BucketState>\`, never one global counter, so one client's traffic can't eat another's quota. State usually lives in a shared store (Redis) because a per-server limit behind a load balancer isn't a real limit.`,
        },
        {
          id: 'lld-lru-cache',
          title: 'LRU cache: the design IS the data structure',
          minutes: 4,
          body: `LRU Cache is one of the highest-frequency FAANG problems, and it's pure data-structure composition — the whole problem is getting O(1) on both operations.

**Requirements:** fixed capacity; \`get(key)\` and \`put(key, value)\` both O(1); on overflow evict the least-recently-used entry; any \`get\`/\`put\` marks a key most-recently-used.

**The composition:** a hash map for O(1) lookup, plus a **doubly linked list** ordered by recency (head = most recent, tail = least recent). Know *why* the alternatives fail before being asked — a singly linked list can't unlink a node in O(1); an array can't reorder in O(1).

- \`get(key)\`: look the node up via the map, unlink it, move it to the head.
- \`put\` at capacity: evict the tail node, remove it from the map, insert the new node at the head and into the map.

**Concurrency follow-up:** a single lock around *both* structures — they must be updated together, so this is a genuine multi-field update, not a job for atomics alone.

**LFU variant** (harder follow-up): evict least-*frequently*-used, which needs a frequency count per key plus a map of frequency → doubly-linked list of keys at that frequency, so ties break by recency within a bucket.`,
        },
        {
          id: 'lld-booking-locker',
          title: 'Booking & lockers: atomic allocation',
          minutes: 4,
          body: `Two problems where concurrency is stated, not a bonus.

**BookMyShow / Movie Booking.** The single most important modeling decision: track seat availability **per showtime**, not per screen — the same physical seat is separately bookable for the 2pm and 6pm shows. Concurrency is a *hard requirement* here: two users booking the same seat, exactly one succeeds. Lock per-seat (or per-showtime) around check-and-reserve, and a multi-seat booking must be **all-or-nothing** — a partial booking on failure is an explicit test case. Design \`cancel(confirmationId)\` to be safe against double-cancel.

**Amazon Locker.** Assignment is bin-packing-flavored: pick the *smallest* available locker that still fits the package (\`findSmallestFit(size)\`). Same check-and-assign lock as Parking Lot so two couriers don't get the same locker.

A useful contrast the Locker draws out: a **pickup code is not idempotent** — it must *invalidate after successful pickup*, so presenting it twice fails the second time. That's the opposite of a payment idempotency key, which *replays* the same result on retry. Same word ("has this been seen?"), opposite desired behavior — knowing which one a requirement wants is the signal.`,
        },
        {
          id: 'lld-idempotency-api',
          title: 'Idempotency and API design',
          minutes: 4,
          body: `**Idempotency** — performing an operation many times has the same effect as once. It matters wherever a client might retry: a double-clicked pay button, a client retrying after a timeout without knowing if the first attempt succeeded.

The standard mechanism is an **idempotency key**: the client generates a UUID per logical operation and sends it with every retry. The server checks whether that key was already completed; if so it *replays the original result* without re-running side effects.

\`\`\`python
def charge(self, idempotency_key, amount):
    if idempotency_key in self._processed:
        return self._processed[idempotency_key]   # replay, no double charge
    result = self._do_charge(amount)
    self._processed[idempotency_key] = result
    return result
\`\`\`

Distinguish it from concurrency-safety: idempotency guards against the *same request arriving more than once over time*; locks guard against *different threads racing at the same instant*. A good payment \`charge()\` needs both — a lock around the check-and-insert of the key, plus the key itself for retry safety. In HTTP terms, \`PUT\`/\`DELETE\` are naturally idempotent; \`POST\` isn't, which is exactly why create endpoints need an explicit key.

**API-design rules of thumb** for the "now design the API" tail: design from the caller's need, not implementation convenience; keep methods small and intention-revealing (\`makeMove(player, row, col)\` over \`execute(command)\`); return domain types not primitives (\`getWinner() -> Player?\`); push validation to the boundary and keep the core clean; and model errors explicitly (a result type or \`InvalidMoveException\`, never a silent no-op).`,
        },
      ],
    },
  ],
  references: [
    { label: 'Hello Interview — Low-Level Design (full guide)', url: 'https://www.hellointerview.com/learn/low-level-design/in-a-hurry/introduction' },
    { label: 'Hello Interview — LLD Delivery Framework', url: 'https://www.hellointerview.com/learn/low-level-design/in-a-hurry/delivery' },
    { label: 'Hello Interview — Design Patterns', url: 'https://www.hellointerview.com/learn/low-level-design/in-a-hurry/patterns' },
    { label: 'Hello Interview — Concurrency', url: 'https://www.hellointerview.com/learn/low-level-design/concurrency/intro' },
    { label: 'ashishps1/awesome-low-level-design (GitHub)', url: 'https://github.com/ashishps1/awesome-low-level-design' },
    { label: 'Refactoring Guru — Design Patterns Catalog', url: 'https://refactoring.guru/design-patterns/catalog' },
    { label: 'codeintuition.io — LRU Cache: The Most Tested Problem Across FAANG', url: 'https://www.codeintuition.io/blogs/lru-cache-faang-interview' },
  ],
}
