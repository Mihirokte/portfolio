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
          deeper: `The precise version of each letter is sharper than the slogan. **SRP's "one reason to change"** means one *actor* — group behaviour by who requests the change, not by what the code touches. An accountant and a DBA both editing a \`Report\` class is the smell, even if both changes are "about reports". **OCP** is achieved by depending on a stable abstraction and adding new *implementations*; you don't literally never edit files, you avoid editing the *tested, working* class. **LSP** is about behavioural substitutability, not just compiling — a subclass may not strengthen preconditions or weaken postconditions (a \`ReadOnlyList\` that throws on \`add()\` breaks callers written against \`List\`).

Worked example — a naïve order processor that violates all five, then the DIP+OCP fix:

\`\`\`python
class OrderService:
    def __init__(self, sender: MessageSender, store: OrderStore):
        self._sender = sender      # abstraction, not EmailSender
        self._store = store

    def place(self, order: Order) -> None:
        self._store.save(order)                    # SRP: persistence elsewhere
        self._sender.send(order.customer, "placed") # DIP: interface

class DiscountPolicy(ABC):
    @abstractmethod
    def apply(self, order: Order) -> Money: ...
# new policy = new class, OrderService untouched (OCP)
\`\`\`

**The subtle point that trips people up:** SRP is about *reasons to change*, not *number of methods*. A class with ten cohesive methods that all change for the same reason is fine; a two-method class that changes for two unrelated reasons violates SRP. People split by size and think they've "done SOLID".

**Common follow-ups**
- Q: How is DIP different from just dependency injection? A: DI is the *mechanism* (pass the dependency in); DIP is the *principle* (the dependency is an abstraction your module owns, so the arrow points inward). You can DI a concrete class and still violate DIP.
- Q: Doesn't OCP mean I can never edit a class? A: No — you avoid modifying *stable, tested* behaviour. Bug fixes and new abstractions are fine; adding a variant should mean a new implementation, not an edit to the branching.
- Q: When is inheritance an LSP violation vs fine? A: Fine when every subtype honours the base contract everywhere the base is used. A violation the moment callers must \`isinstance\`-check or a subclass throws on an inherited method.
- Q: Is applying all five always right? A: No — over-applying ISP/DIP on a small design adds ceremony. Name the tradeoff: "I'd keep this concrete until a second implementation is real."`,
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
          deeper: `Strategy has three moving parts people conflate: the **Context** (holds a reference and delegates), the **Strategy interface** (the one method the context calls), and the **concrete strategies**. The context must *not* know which concrete one it holds — if it ever \`isinstance\`-checks the strategy, the pattern has collapsed back into the conditional you were escaping.

A fuller Splitwise slice showing validation living *in* each strategy, which is where the correctness lives:

\`\`\`python
class ExpenseSplit(ABC):
    @abstractmethod
    def shares(self, total: float, users: list, meta: dict) -> dict: ...

class PercentSplit(ExpenseSplit):
    def shares(self, total, users, meta):
        pct = meta["percents"]            # {user: percent}
        if abs(sum(pct.values()) - 100) > 1e-9:
            raise ValueError("percents must sum to 100")
        return {u: total * pct[u] / 100 for u in users}

class Expense:
    def __init__(self, split: ExpenseSplit): self._split = split
    def compute(self, total, users, meta): return self._split.shares(total, users, meta)
\`\`\`

**The subtle point that trips people up:** where does validation live? A weak answer validates in the \`Expense\`/context (\`if isinstance(split, PercentSplit): check...\`) — that re-couples the context to every concrete type and defeats the pattern. Each strategy validates its *own* invariant (percents sum to 100, exact shares sum to the total). The context stays ignorant.

**Common follow-ups**
- Q: How is Strategy different from just passing a function? A: For one behaviour, a first-class function *is* a lightweight Strategy. The pattern earns its keep when the strategy needs multiple methods, its own state/config, or a name in the type system — then an object beats a bare lambda.
- Q: Strategy vs State — same UML, so what's the difference? A: Intent. Strategy is chosen by the *client* and rarely changes itself; State transitions *itself* to the next state based on events. Strategy objects usually don't know each other; State objects do.
- Q: Where does the factory fit? A: A factory picks *which* strategy to instantiate from input ("EQUAL" → \`EqualSplit\`); Strategy governs how the chosen one behaves. They compose — factory creates, strategy executes.
- Q: How do you set the strategy — constructor or setter? A: Constructor injection when it's fixed for the object's life; a setter only if it genuinely varies at runtime. Prefer the constructor to keep the object always-valid.`,
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
          deeper: `The mechanism has one rule people skip: the transition logic lives *inside the state classes*, and the context exposes a package-private \`set_state()\` that only states call. If the context decides transitions, you've rebuilt the giant conditional with extra steps. Each state answers *every* event of the machine — usually by doing nothing (an illegal transition) or moving the machine forward. That "handle every event, mostly by rejecting" is what makes illegal transitions structurally impossible.

A fuller vending slice, including a rejected event and the context wiring:

\`\`\`python
class State(ABC):
    def insert_coin(self, m): ...
    def select(self, m): ...
    def dispense(self, m): ...

class NoCoinState(State):
    def insert_coin(self, m): m.set_state(HasCoinState())
    def select(self, m): raise InvalidOp("insert coin first")  # rejected

class HasCoinState(State):
    def select(self, m):
        if m.stock == 0: m.set_state(NoCoinState()); raise SoldOut()
        m.set_state(DispenseState())

class VendingMachine:
    def __init__(self): self._state: State = NoCoinState()
    def set_state(self, s): self._state = s
    def insert_coin(self): self._state.insert_coin(self)
    def select(self): self._state.select(self)
\`\`\`

**The subtle point that trips people up:** where do transitions live? Put them in the context (a \`transition_to(status)\` on the machine that switches on the target) and you're back to a conditional — just relocated. The state *object itself* decides the next state, so adding a state means adding a class, not editing a growing \`if\`. The second subtlety: guard conditions (out of stock, insufficient funds) belong to the state handling the event, not a pre-check in the context.

**Common follow-ups**
- Q: When is a simple enum + switch actually fine? A: When there are 2–3 states and transitions are trivial with no per-state behaviour. State earns its place when behaviour differs *per state* and illegal transitions must be prevented, not just checked.
- Q: How is this different from Strategy? A: Strategy is set by the client and doesn't change itself; State transitions *itself* in response to events and the states know each other. Same class diagram, opposite control of change.
- Q: Where do you store shared data like the coin balance? A: On the context (\`machine.balance\`), not the state objects — states are behaviour, the context is data. States are often stateless singletons.
- Q: How do you handle an event invalid in the current state? A: The current state's handler rejects it (raise / return an error) — the machine never reaches the illegal action, versus a status-field design that must remember to check.`,
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
          deeper: `The choice among these follows from the problem *type*, not taste. Correctness on one variable → atomic; correctness across two related fields → lock; handoff/waiting → blocking queue or condition variable; a capped resource → semaphore. The commonest live-coding bug is scope: too coarse and you serialise unrelated work (throughput dies), too fine and you invite deadlock. The right granularity is "lock the smallest unit that must change together."

The atomic-vs-lock boundary is where people slip. A single counter is atomic-safe; two fields that must agree are not:

\`\`\`python
# WRONG — two atomics don't compose: the pair can be observed mid-update
balance = AtomicInt(); count = AtomicInt()
balance.add(-100); count.inc()   # another thread can read between these

# RIGHT — one lock guards the invariant "balance and count move together"
class Account:
    def __init__(self): self._lock = Lock(); self._balance = 0; self._count = 0
    def withdraw(self, amt):
        with self._lock:                 # atomic across BOTH fields
            if self._balance < amt: raise Insufficient()
            self._balance -= amt; self._count += 1
\`\`\`

**The subtle point that trips people up:** atomicity does not compose. Two individually-atomic operations are *not* atomic together — a reader can observe the state between them. The moment an invariant spans more than one variable, atomics are insufficient and you need a lock (or a CAS loop on a single immutable snapshot object). Also: in CPython the GIL makes many ops *look* atomic, but \`+=\` on a shared int is still a read-modify-write race — use a \`Lock\`.

**Common follow-ups**
- Q: When do you pick a semaphore over a lock? A: A lock is a semaphore with one permit (mutual exclusion). Use a semaphore when N > 1 things may proceed concurrently — a pool of 5 connections, 10 concurrent downloads.
- Q: Coarse vs fine-grained locking — how do you decide? A: Start coarse for correctness, then split locks only where profiling shows contention. Fine-grained buys throughput at the cost of deadlock risk (multiple locks) and complexity.
- Q: Why prefer immutability over locking? A: An object that can't change after construction has no modify step to race on, so it needs no lock at all — the cheapest correctness. Pass immutable value objects between threads.
- Q: A blocking queue vs a lock + condition variable? A: The blocking queue *is* that pattern packaged: it hides the condition variables and the empty/full waits, so you get producer-consumer safety without hand-rolling wait/notify.`,
        },
        {
          id: 'lld-deadlocks-memory',
          title: 'Deadlocks, leaks & garbage collection',
          minutes: 4,
          body: `Two runtime hazards a reviewer may probe once your locking works.

**Deadlock** — two threads each hold a lock the other needs, so both wait forever. It needs four conditions to occur (mutual exclusion, hold-and-wait, no preemption, circular wait); break any one and it can't happen. The practical fixes:

- **Lock ordering** — always acquire multiple locks in the same global order (e.g. always the lower seat-id first). Breaks the circular wait; this is the fix you'll actually name in an LLD round.
- **Lock timeouts** — try-acquire with a timeout and back off instead of blocking forever.
- **Avoid holding two locks** — often you can restructure so only one lock is ever held at a time, sidestepping the problem entirely.

\`\`\`mermaid
sequenceDiagram
    participant T1 as Thread 1
    participant T2 as Thread 2
    T1->>T1: lock A
    T2->>T2: lock B
    T1->>T2: wait for B…
    T2->>T1: wait for A…
    Note over T1,T2: circular wait — deadlock
\`\`\`

**Memory leaks** — memory that's no longer needed but never released. In garbage-collected languages (Java, Python, Go) this isn't manual-free bugs but **unintended references**: objects still reachable from a long-lived collection (a cache/map that only grows, listeners never unregistered, a static list). The GC can't collect what's still referenced. The fixes: bounded caches (LRU with a cap — exactly the LRU lesson), weak references for listeners, and unregistering observers when done.

**Garbage collection** itself: the runtime periodically reclaims unreachable objects. You rarely design around it in an LLD round, but know the one operational cost — a GC pause can add **tail latency** — which is why the truly latency-sensitive path minimises allocations. That connects to the p99/tail-latency point in System Design.`,
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
          deeper: `The mechanism is a three-state key, not a two-state one, and that third state is what people miss. An idempotency key isn't just "seen / not seen" — it's **not-started / in-progress / completed**. The gap between "started but not finished" and "finished" is exactly where a concurrent retry double-charges, so the record and the side effect must be committed together (one transaction) or the key stored *before* the side effect and reconciled.

\`\`\`python
def charge(self, key: str, amount: Money) -> Result:
    with self._lock:                               # guard check-and-claim
        rec = self._keys.get(key)
        if rec and rec.state == "completed":
            return rec.result                      # replay, no re-charge
        if rec and rec.state == "in_progress":
            raise Conflict("retry in flight")      # 409, client backs off
        self._keys[key] = Record(state="in_progress")
    result = self._gateway.charge(amount)          # side effect OUTSIDE lock
    with self._lock:
        self._keys[key] = Record("completed", result)
    return result
\`\`\`

**The subtle point that trips people up:** the key must be scoped to the *logical operation*, not the HTTP request, and the response must be *stored*, not recomputed — recomputing can drift (a new timestamp, a changed price) and break the "same result" promise. And "idempotent" ≠ "returns success twice": a second \`DELETE\` legitimately returns 404/no-op; the guarantee is *same effect*, not *same status code*.

The flip side is the Amazon-Locker contrast: a pickup code must *invalidate* after use (idempotency's opposite — succeed once, fail after), while a payment key *replays*. Same question ("seen before?"), opposite required behaviour.

**Common follow-ups**
- Q: How do you make an operation idempotent under retries? A: Client sends a stable UUID per logical action; server records key→result and replays the stored result on any retry instead of re-running side effects. Claim the key before the side effect to close the concurrent-retry window.
- Q: Which HTTP verbs are idempotent, and why does POST need a key? A: \`GET\`/\`PUT\`/\`DELETE\` are idempotent by spec (repeat → same state); \`POST\` creates a new resource each call, so a retried create duplicates unless an explicit idempotency key dedupes it.
- Q: Idempotency vs locking — do I need both? A: Yes for payments. The lock stops two threads racing at one instant; the key stops the *same request replayed over time*. Neither substitutes for the other.
- Q: Where does the key live in a multi-server deployment? A: A shared store (Redis/DB), not per-server memory — a load balancer can route the retry to a different instance, so in-memory dedup would miss it.`,
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
