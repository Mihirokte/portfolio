import type { Course } from './types'

// Software Architecture study course. Lessons are deliberately small and plain.
// ```mermaid sequence fences render as diagrams. Sources are the compiled
// swe-job-prep/03-architecture reference material (martinfowler.com,
// microservices.io, AWS/Azure architecture guidance, InfoQ 2025 trends).

export const architecture: Course = {
  key: 'arch',
  label: 'Architecture',
  problemAreaKey: 'arch',
  blurb:
    'How to pick an architecture style, draw service and module boundaries, and keep a distributed system alive under failure. At SDE2 you own significant parts of a design and argue the trade-offs out loud.',
  chapters: [
    {
      id: 'arch-styles',
      title: 'Architecture styles',
      summary: 'The handful of shapes a system takes, when each wins, and the 2025-26 pendulum swing back toward the monolith.',
      problemIds: ['arch-001', 'arch-002', 'arch-003', 'arch-004', 'arch-005', 'arch-006', 'arch-007'],
      lessons: [
        {
          id: 'arch-layered',
          title: 'Layered architecture',
          minutes: 3,
          body: `The oldest, most familiar shape: organise code into horizontal layers — presentation on top, then business/domain, then data access — where each layer only calls the one below it. Most CRUD apps start here, and that is fine.

**When it wins:** simple domains, small teams, CRUD-heavy apps where the data model closely matches the business model. It is fast to build and easy to onboard onto, because everyone recognises the shape.

**When it hurts:** the data layer tends to leak upward. ORM entities become domain objects become API DTOs, so a schema change ripples through every layer. Business logic ends up smeared across "service" classes that are really procedural scripts sitting on the database. And nothing *enforces* the boundaries — a UI calling the repository directly compiles just fine, so shortcuts accumulate.

The tell that you have outgrown it: you are afraid to change the database schema because you can't predict what it will break three layers up.`,
        },
        {
          id: 'arch-hexagonal',
          title: 'Hexagonal / ports and adapters',
          minutes: 4,
          body: `Also called ports-and-adapters, and closely related to Clean Architecture. The domain logic sits at the centre with zero knowledge of infrastructure. It exposes **ports** (interfaces like \`OrderRepository\`) that **adapters** implement — a Postgres adapter, an in-memory adapter for tests, a REST controller adapter that drives the domain from the outside.

Clean Architecture (Robert C. Martin) is the same idea drawn as concentric rings (entities inside use cases inside interface adapters inside frameworks) with one rule: **the dependency rule** — dependencies only ever point inward, never outward. The core never imports the framework.

**When it wins:** you need to swap infrastructure without touching business logic (a different DB per environment, adding a queue trigger beside an HTTP one), or you want to unit-test domain logic with no framework mocking. It pays off when the domain is genuinely complex enough to be worth protecting.

**When it hurts:** it is overkill for a thin-logic CRUD app. You pay real ceremony — interfaces everywhere, DTO mapping at every boundary — for flexibility you never use. And nothing enforces the boundary except discipline and code review, so teams new to it build the skeleton correctly and then leak infra concerns into the "core" anyway.`,
        },
        {
          id: 'arch-event-driven',
          title: 'Event-driven architecture',
          minutes: 4,
          body: `Components communicate by producing and consuming events rather than calling each other directly. Martin Fowler distinguishes several styles — the simplest is **event notification** ("a change happened; I don't care what you do with it"), where the source system genuinely doesn't care about the response.

A typical async workflow, where one event triggers a chain of independent reactions:

\`\`\`mermaid
sequenceDiagram
    participant Order as Order service
    participant Bus as Event bus
    participant Inv as Inventory
    participant Pay as Payment
    Order->>Bus: publish "OrderPlaced"
    Bus->>Inv: OrderPlaced
    Bus->>Pay: OrderPlaced
    Note over Inv,Pay: each reacts independently
    Inv->>Bus: publish "StockReserved"
    Pay->>Bus: publish "PaymentCharged"
\`\`\`

**When it wins:** it naturally decouples producers from consumers and supports fan-out — many services react to one event without the producer knowing they exist. It fits workflows with real async/batch semantics.

**When it hurts:** debugging is materially harder. There is no linear call stack to follow, so "why did X happen?" needs correlation IDs and good tracing. Eventual consistency becomes a first-class problem every caller must reason about, and it is easy to build an untraceable "distributed monolith" where every service depends on every event.`,
        },
        {
          id: 'arch-micro-vs-monolith',
          title: 'Microservices vs modular monolith (2025-26)',
          minutes: 5,
          body: `**Microservices** (per Chris Richardson / microservices.io, the standard reference): independently deployable services, each owned by a team, communicating over the network, typically each with its own datastore.

**Modular monolith:** a single deployable unit internally partitioned into modules with enforced boundaries — the same discipline about boundaries as microservices, but the calls are in-process, without the distributed-systems tax.

The current discourse is an actively-forming trend, not settled doctrine, but it clearly leans back toward the monolith:

- Amazon's own Prime Video audio/video monitoring team moved from a distributed serverless/microservices design to a single-process monolith and **cut infrastructure cost by 90%** — per-service orchestration and S3 hops between Lambda steps dominated at their request volume. Caveat: one team, one tightly-coupled high-throughput workload; it is not a blanket "microservices are bad" result.
- A widely-cited 2025 CNCF survey figure (via secondary sources) reports that ~42% of organisations that adopted microservices have consolidated services back into larger deployable units.
- Google's Service Weaver and Spring Modulith are real frameworks built specifically to support the modular-monolith shape.

**Working rule of thumb for 2026:** default to a modular monolith. Reach for microservices only when a *specific, already-felt* pain forces it — independent team scaling (Conway's Law), genuinely independent deploy cadences, or a real per-service scaling bottleneck. Splitting a monolith into network-connected pieces that still share a database and still deploy together is not microservices; it is "a monolith with extra HTTP calls," and strictly worse.

**Interview framing:** if asked "microservices or monolith," don't pick one. Name the actual forcing function — team count, deploy cadence, blast radius — and reason from there.`,
          deeper: `**The mechanism people skip: the distributed-systems tax.** The moment a call crosses the network you inherit partial failure (the callee may have done the work but the response was lost), latency variance, the need for retries + idempotency, and the CAP trade-off. A modular monolith keeps those calls in-process, so an invocation is a function call: no serialization, no timeout tuning, one transaction, one stack trace. Microservices trade that simplicity for *independent deployability* and *independent scaling* — and if you're not cashing in on at least one of those, you paid the tax for nothing.

**Concrete scenario.** A payments team runs a modular monolith with three modules: \`ledger\`, \`payouts\`, \`reconciliation\`. Reconciliation runs a nightly batch that pegs 8 CPU cores for two hours; the rest of the app is a steady 5% CPU. That's a *real* independent-scaling forcing function — you'd rather not provision the whole box for a nightly spike. So you extract \`reconciliation\` (and only that) into its own service with its own autoscaling group. \`ledger\` and \`payouts\` stay in-process because they share transactions and always deploy together. This is the correct shape: extract on a felt bottleneck, not on a diagram.

**The failure mode people get wrong: the distributed monolith.** Teams split by noun (\`user-service\`, \`order-service\`, \`product-service\`), then discover every request fans out to all three and they still share one database. Now they have network hops, distributed transactions, *and* coupled deploys — every downside of microservices with none of the independence. The tell: you can't deploy one service without deploying the others, or a schema change touches three repos.

**Common follow-ups**

- *"When is the network hop actually worth it?"* — When a service scales, deploys, or fails on a genuinely different curve from its neighbours (the reconciliation batch above), or when a distinct team needs to own its release cadence.
- *"How do you split a monolith safely?"* — Enforce module boundaries in-process first (Spring Modulith / Service Weaver), let them harden, then extract the module that has a proven bottleneck. Boundaries earn extraction; extraction doesn't create boundaries.
- *"What breaks first when you go distributed too early?"* — Data consistency. A shared database across services means no service truly owns its data, so you get lock contention and hidden coupling. Each service must own its store first.
- *"Isn't the Prime Video result proof microservices are bad?"* — No — it's one high-throughput, tightly-coupled workload where per-step orchestration and S3 hops dominated. It argues against *over*-decomposition, not against the style.`,
        },
        {
          id: 'arch-cqrs',
          title: 'CQRS',
          minutes: 3,
          body: `Command Query Responsibility Segregation: use a different model to *update* data than the model you use to *read* it. Separate write and read paths, sometimes separate datastores entirely.

Fowler's own bliki is the load-bearing quote: "you can use a different model to update information than the model you use to read information. For some situations this separation can be valuable, but beware that for most systems CQRS adds risky complexity."

**When it wins:** read and write workloads have genuinely different shapes — writes are normalised and transactional, while reads need heavily denormalised, pre-joined views for dashboards — or read and write scale independently by orders of magnitude.

**When it hurts:** most systems should not use it. It is a targeted tool for a specific asymmetry, not a default architecture. It introduces eventual consistency between the write model and the read model that every caller and every UI now has to account for. If you can't name the read/write asymmetry that forces it, you don't need it.`,
          deeper: `**The mechanism: two models, and how the read side stays fresh.** The write model is normalised and validation-heavy — it accepts commands (\`PlaceOrder\`, \`CancelOrder\`), enforces invariants, and persists the change. The read model is one or more denormalised *projections* shaped exactly for a query ("orders per customer with totals", "today's revenue by region"), often in a different store (Postgres for writes, Elasticsearch/Redis for reads). The link between them is a *propagation* step: the write side emits a change (a domain event or a CDC stream), a projector consumes it and updates the read views. That propagation is asynchronous, which is precisely where the eventual-consistency lag lives.

\`\`\`mermaid
sequenceDiagram
    participant U as UI
    participant W as Write model
    participant P as Projector
    participant R as Read model
    U->>W: command (PlaceOrder)
    W-->>U: 202 accepted
    W->>P: OrderPlaced event
    P->>R: update projection
    Note over R: read view now fresh
    U->>R: query "my orders"
\`\`\`

**Concrete scenario.** An e-commerce catalog takes ~200 writes/sec (price and stock edits) but serves ~50,000 reads/sec on product pages, many with complex filters. Writes go to a normalised Postgres schema; a projector consumes change events and maintains a flattened Elasticsearch index with pre-computed facets. Reads never touch Postgres. Read and write scale on completely independent hardware — the exact asymmetry that justifies CQRS.

**The failure mode people get wrong: assuming read-after-write consistency.** A user edits their profile, the command returns 202, the UI immediately re-queries the read model — and shows the *old* value because the projector hasn't caught up (typically tens to hundreds of ms). Teams that don't design for this ship confusing "my change didn't save" bugs. Fixes: return the new value from the command directly, read from the write model for that one screen, or show an optimistic UI. You cannot pretend the lag is zero.

**Common follow-ups**

- *"CQRS vs event sourcing — same thing?"* — No. CQRS is separate read/write models; event sourcing is storing state as an event log. They pair well (events feed projections) but each stands alone.
- *"Do you need two databases?"* — No. CQRS can be two models against one store. Separate stores is an optimisation for the scaling/shape asymmetry, not a requirement.
- *"How do you handle the eventual-consistency window?"* — Bound it and make it visible: measure projection lag, and on write-then-read screens either read the write model or echo the command result.
- *"When is CQRS the wrong call?"* — Any CRUD app where reads and writes share the same shape and scale. It adds a projector, a second model, and consistency reasoning for zero payoff.`,
        },
        {
          id: 'arch-event-sourcing',
          title: 'Event sourcing',
          minutes: 3,
          body: `Persist state as an append-only sequence of events rather than current-state rows. Current state is derived by replaying the log (or replaying from a periodic snapshot).

Two independent sources say the same thing. Fowler: "Event Sourcing ensures that all changes to application state are stored as a sequence of events... we can also use the event log to reconstruct past states." Azure's Architecture Center: "Adopt event sourcing when its benefits, like auditability and historical reconstruction, justify the pattern's complexity. For most systems and most parts of a system, traditional data management is sufficient."

**When it wins:** you need a true audit trail, temporal queries ("what did this look like on date X"), or you are already doing CQRS and want the write-side events to double as the mechanism that feeds the read-side projections.

**When it hurts:** most systems don't need it, and the long-term cost people underestimate is **schema versioning** — replaying events written years ago, in an old shape, forever. Once an event is in the log it is history; you can't migrate it the way you'd ALTER a table.`,
          deeper: `**The mechanism: rebuild state by folding the log.** Current state isn't stored — it's *computed*. You load every event for an entity in order and apply each to an initially-empty aggregate: \`state = events.reduce(apply, empty)\`. \`AccountOpened\` → balance 0; \`Deposited 100\` → 100; \`Withdrew 30\` → 70. The event store is append-only, so writing is a single insert with an optimistic-concurrency check (expected version N, reject if the stream moved). The obvious problem — an account with 4 million events would take forever to replay — is solved with **snapshots**: periodically persist the folded state at version N, then on load start from the latest snapshot and replay only the events after it. A snapshot is a cache, not a source of truth; you can always delete every snapshot and rebuild from the raw log.

**Concrete scenario.** A bank ledger uses event sourcing because the audit requirement is absolute: every balance must be explainable by a sequence of legal transactions, and regulators can ask "what was this balance on 2024-03-15?". That's a native temporal query — replay the stream up to that timestamp. Snapshots are taken every 500 events; a typical account loads one snapshot + a handful of recent events. The log *is* the audit trail, for free.

**The failure mode people get wrong: event schema evolution.** You emitted \`{ amount: 100 }\` for three years, then the business needs currency, so you want \`{ amount: 100, currency: "USD" }\`. You cannot ALTER the old events — they're immutable history. So every consumer and the fold logic must handle *both* shapes forever, usually via an **upcaster** that transforms old event versions into the current shape on read (defaulting \`currency\` to USD for legacy events). Teams that treat events like mutable rows corrupt their history or break replay. Rule: events are facts that happened; you version and upcast, you never rewrite.

**Common follow-ups**

- *"How do you query 'all accounts with balance > X'?"* — You don't, against the log — that's a cross-entity read. You build a projection (a read model / CQRS view) that the events feed. Event sourcing answers "how did *this* entity get here," not ad-hoc aggregate queries.
- *"What are snapshots and when do you take them?"* — A cached fold of state at a version, taken every N events or on a timer, to bound replay cost. Rebuildable from the log, so never authoritative.
- *"How do you handle a bad event that was written by mistake?"* — Append a corrective/compensating event; you don't delete. The mistake and its correction are both part of the true history.
- *"When is event sourcing overkill?"* — When you don't need audit, temporal queries, or event-driven projections. For most CRUD, current-state rows are simpler and sufficient — Azure's own guidance says so.`,
        },
        {
          id: 'arch-saga',
          title: 'Saga: distributed transactions without 2PC',
          minutes: 5,
          body: `A business transaction that spans multiple services can't use a distributed two-phase commit in practice. A **saga** models it as a sequence of local transactions, each with a **compensating transaction** that undoes it if a later step fails.

The failure path is the whole point — a later step fails, and you walk *backwards*, compensating each completed step:

\`\`\`mermaid
sequenceDiagram
    participant O as Orchestrator
    participant Pay as Payment
    participant Inv as Inventory
    participant Ship as Shipping
    O->>Pay: charge card
    Pay-->>O: ok
    O->>Inv: reserve stock
    Inv-->>O: ok
    O->>Ship: create shipment
    Ship-->>O: FAILED
    Note over O: run compensations in reverse
    O->>Inv: release stock
    O->>Pay: refund charge
\`\`\`

Two implementation styles:
- **Orchestration** — a central coordinator tells each service what to do next and triggers compensations on failure. Easier to reason about and debug (one place holds the state machine), but the coordinator becomes a critical dependency.
- **Choreography** — each service publishes events and reacts to others' events, with no central coordinator. More decoupled, but the flow is implicit: to understand it end-to-end you have to read every service's event handlers.

**The hard part:** compensations are not free rollbacks. "Refund the payment" is a different operation from "the charge never happened," with its own edge cases (what if the money was already spent downstream?). Choreographed sagas are notoriously hard to debug without strong distributed tracing.`,
          deeper: `**The mechanism, spelled out.** A saga is a state machine over local ACID transactions. Each forward step \`Tᵢ\` has a compensator \`Cᵢ\` that semantically undoes it. On failure at step \`k\`, you run \`C₍ₖ₋₁₎ … C₁\` in reverse. The non-obvious requirements: every step must be **idempotent** (the coordinator may retry after a lost response, so \`chargeCard\` must not double-charge — key it on the saga ID), and every compensator must be **commutative-safe** and able to run even if the forward step's result was ambiguous. Sagas give you *atomicity* (all-or-nothing eventually) but explicitly **not isolation** — other transactions can observe the intermediate states, which is where the subtle bugs live.

**Orchestration vs choreography, concretely.** In *orchestration*, an \`OrderSaga\` object holds the state (\`AWAITING_PAYMENT\`, \`AWAITING_STOCK\`, \`COMPENSATING\`) and issues commands; the compensation flow is one readable method. In *choreography*, \`Payment\` emits \`PaymentCharged\`, \`Inventory\` listens and emits \`StockReserved\`, \`Shipping\` listens — and on failure \`Shipping\` emits \`ShipmentFailed\`, which \`Inventory\` and \`Payment\` must each listen for to trigger their own compensation. No single place holds the flow.

**Concrete scenario.** Order fulfilment: charge €50, reserve one unit of SKU-123, book a courier. The courier API returns 503. The orchestrator runs \`releaseStock(SKU-123)\` then \`refund(€50)\`. The isolation gap: between "stock reserved" and "stock released," a second customer saw the item as out of stock — a real, observable intermediate state a 2PC transaction would have hidden.

**The failure mode people get wrong: unreliable compensation and lost isolation.** Teams assume \`refund\` always succeeds — but the payment provider can be down exactly when you need to compensate, so compensators themselves need retries, a dead-letter queue, and an alert for stuck sagas. And they forget the isolation gap: money is charged before the order is confirmed, stock is held mid-flight. You mitigate with *semantic locks* (mark the record \`PENDING\` so others treat it carefully) and by ordering steps so the reversible/cheap ones run first.

**Common follow-ups**

- *"Orchestration or choreography — which do you pick?"* — Orchestration for complex flows (4+ steps, conditional branches) because the state machine is explicit and debuggable; choreography for 2–3 loosely-coupled steps where a central coordinator is overkill.
- *"Why not two-phase commit?"* — 2PC needs a blocking coordinator holding locks across services for the whole transaction; it doesn't scale and it stalls everything if the coordinator dies mid-commit. Sagas trade isolation for availability.
- *"What if a compensation itself fails?"* — Retry with backoff, then dead-letter and alert a human. Compensators must be idempotent so retries are safe; a permanently stuck saga is an operational, not silent, failure.
- *"How do you make steps idempotent?"* — Key every operation on the saga/transaction ID so a retried \`charge\` or \`reserve\` recognises it already ran and returns the prior result instead of repeating the effect.`,
        },
      ],
    },
    {
      id: 'arch-ddd',
      title: 'DDD & boundaries',
      summary: 'How to decide where a service or module boundary actually goes — the DDD vocabulary plus Conway\u2019s Law.',
      problemIds: ['arch-008', 'arch-009', 'arch-010', 'arch-011', 'arch-012', 'arch-013'],
      lessons: [
        {
          id: 'arch-bounded-context',
          title: 'Bounded contexts',
          minutes: 4,
          body: `A bounded context is an explicit boundary within which a domain model — its objects, rules, and vocabulary — is internally consistent. Outside that boundary, the same word can mean something genuinely different.

Fowler's example: at a utility company, "meter" meant subtly different things in different parts of the org — the grid-to-location connection, the grid-to-customer connection, or the physical device. These are **polysemes**: the same word, genuinely different concepts. DDD's answer is *not* to force one canonical definition; it is to give each context its own precise model and map explicitly between them.

**Why it matters practically:** this is the DDD concept that maps most directly onto "where do I put the service/module boundary." A bounded context is a *candidate* boundary — not automatically one, but the strongest signal you have.

**How to spot one:** look for where the *language changes*. If the "Customer" the sales team means (a lead, a deal stage) is a fundamentally different concept from the "Customer" support means (a ticket history, an entitlement), you have found a context boundary — even if today's code has one \`Customer\` class serving both.`,
        },
        {
          id: 'arch-aggregates',
          title: 'Aggregates and the sizing mistake',
          minutes: 4,
          body: `An aggregate is a cluster of domain objects treated as a single consistency unit for changes. One member is the **aggregate root** — the only object external code may reference directly; everything else inside is reached through it. The aggregate's job is to enforce its own **invariants** (business rules that must always hold) within a single transaction boundary.

**The common mistake is aggregates that are too large.** Modelling an entire \`Order\` — all its line items, shipments, and payment history — as one aggregate that must be loaded and locked together for any change creates contention (two people can't edit different line items at once) and makes the transaction boundary far bigger than the invariant that actually needs protecting.

**The corrective heuristic:** make aggregates as small as possible while still fully enforcing their invariant. If two pieces of data don't need to be transactionally consistent with each other *right now*, they probably don't belong in the same aggregate — reference the other aggregate by ID and accept eventual consistency between them.

This is the same instinct as boundary-drawing one level down: keep together only what must change together atomically.`,
        },
        {
          id: 'arch-boundary-heuristics',
          title: 'Where to draw the boundary',
          minutes: 4,
          body: `Synthesising DDD into practical heuristics for "where does this line go":

1. **Business capability alignment** — a boundary should correspond to something the business does as a unit ("pricing," "fulfillment," "identity"), not to a technical layer. There should never be a "database service."
2. **Data ownership** — if two pieces of data are always read and written together and nothing else touches one without the other, they belong together. If a team constantly needs another team's data to do its job, either the boundary is wrong or you need a clean, explicit contract (API/event) across it, not a shared table.
3. **Team size / Conway's Law** — the org that owns a boundary needs to be a real, coherent team, not a line that cuts across half of two teams.
4. **Change cadence** — parts that change for different reasons, on different timelines, owned by different stakeholders, are a signal *for* a boundary. Parts that always change together are a signal *against* splitting them — splitting them just adds cross-service coordination for changes that were always going to ship together anyway.

The mistake to avoid: drawing boundaries around nouns you happen to see in the code, rather than around the things that change independently.`,
        },
        {
          id: 'arch-conways-law',
          title: "Conway's Law",
          minutes: 4,
          body: `Melvin Conway, 1968: "Any organization that designs a system will produce a design whose structure is a copy of the organization's communication structure." Fowler's gloss: "if a single team writes a compiler, it will be a one-pass compiler; if the team is divided into two, it will be a two-pass compiler."

The mechanism is human, not technical: software coupling is enabled by human communication. If you can talk easily to the author of some code, it is easier to build shared understanding, which makes your code more coupled to theirs — through shared assumptions, not just function calls. Fowler adds: "if an architecture is designed at odds with the development organization's structure, then tensions appear in the software structure."

**Inverse Conway Maneuver:** deliberately reorganise teams into the shape you want the *architecture* to end up in, rather than designing an architecture and hoping the org follows. If you want a modular architecture, structure teams around those modules first; the architecture follows the communication paths. The modern operational lens on this is *Team Topologies* (stream-aligned, platform, enabling, and complicated-subsystem teams).

**Interview framing:** Conway's Law is one of the highest-leverage things to raise unprompted when discussing boundaries. It reframes "how should I split this system" as inseparable from "how is my organisation structured, and can I change it." Reasoning about boundaries purely technically — data, traffic — while ignoring the org dimension is exactly the half senior interviewers listen for.`,
        },
      ],
    },
    {
      id: 'arch-cross-cutting',
      title: 'Cross-cutting concerns',
      summary: 'Resilience, observability, API evolution, and release patterns \u2014 the concerns that cut across every service regardless of style.',
      problemIds: ['arch-014', 'arch-015', 'arch-016', 'arch-017', 'arch-018', 'arch-019', 'arch-020', 'arch-021', 'arch-022', 'arch-023'],
      lessons: [
        {
          id: 'arch-circuit-breaker',
          title: 'Circuit breaker',
          minutes: 4,
          body: `Wrap calls to a dependency in a state machine: **closed** (calls pass through), **open** (after enough failures, fail fast without calling the dependency), **half-open** (after a cooldown, let one trial request through to test recovery).

\`\`\`mermaid
sequenceDiagram
    participant C as Caller
    participant B as Breaker
    participant D as Dependency
    C->>B: request
    B->>D: forward (closed)
    D-->>B: errors pile up
    Note over B: threshold hit -> OPEN
    C->>B: request
    B-->>C: fail fast (no call to D)
    Note over B: cooldown -> HALF-OPEN
    C->>B: request
    B->>D: trial call
    D-->>B: success -> CLOSED again
\`\`\`

**When it wins:** it stops a caller from wasting threads and connections hammering a dependency that is already down, and it prevents **cascading failure** — one slow dependency taking down every service that calls it by exhausting their resources waiting.

**Pitfall:** tuned too aggressively, it trips on transient blips and makes a healthy system look down; too loosely, it doesn't protect you in time. It must be paired with a sane fallback (cached data, degraded response) — "fail fast" alone just moves the outage to the caller.

**One recency note:** Netflix's Hystrix popularised this pattern but has been in maintenance mode since 2018 and was dropped from Spring Cloud. The current reference implementation is resilience4j (JVM), Polly (.NET), or opossum (Node). Citing Hystrix as your *current* tool in 2026 is a stale-knowledge signal.`,
          deeper: `**The state machine, with the thresholds that actually matter.** Three states, and the transitions are threshold-driven, not vibes:

\`\`\`mermaid
sequenceDiagram
    participant C as Caller
    participant B as Breaker
    Note over B: CLOSED — count failures in a rolling window
    C->>B: call fails past threshold
    Note over B: failure rate >= 50% over >= 20 calls -> OPEN
    C->>B: call while OPEN
    B-->>C: fail fast instantly
    Note over B: cooldown 30s elapses -> HALF-OPEN
    C->>B: limited trial calls
    Note over B: trials succeed -> CLOSED; any fail -> OPEN
\`\`\`

- **Closed:** calls pass through; the breaker counts failures over a *rolling window* — the key config is a **failure-rate threshold over a minimum call volume** (e.g. resilience4j default: open when ≥50% of the last ≥20 calls fail — the volume floor stops one bad call in a quiet period from tripping it).
- **Open:** every call fails fast (no downstream call) for a fixed **cooldown** (e.g. 30s), giving the dependency room to recover.
- **Half-open:** after cooldown, admit a small number of *trial* calls; if they succeed, close; if any fail, re-open and restart the cooldown. This is what prevents flapping straight back into a still-broken dependency.

Also count **slow calls** as failures (resilience4j does): a dependency at p99 = 10s isn't erroring, but it's exhausting your thread pool just as effectively as one returning 500s.

**Concrete scenario.** A checkout service calls a fraud-scoring API with a 200ms budget. The fraud API degrades to 8s latency. Without a breaker, checkout threads block on those 8s calls, the thread pool saturates, and checkout — a healthy service — goes down because of a *dependency's* slowness. With a breaker configured on slow-call rate, it opens after the fraud API's slow-call rate crosses 50%, and checkout instantly falls back to "approve with async review," staying up.

**The failure mode people get wrong: a breaker with no fallback.** "Fail fast" without a fallback just relocates the outage — the caller now errors instantly instead of slowly. The breaker's value is realised by what happens in the open state: serve cached/stale data, a degraded response, or a queued async path. Second common mistake: tuning too tight (trips on transient blips, false outages) or too loose (never protects in time). Tune against real traffic, not guesses.

**Common follow-ups**

- *"Circuit breaker vs retry — when each?"* — Retry handles *transient* single-call failures; the breaker handles *sustained* dependency failure. Pair them, but never retry while open (that defeats the point). Retries feed the breaker's failure count.
- *"What thresholds do you set?"* — A failure-rate % over a minimum call volume, a cooldown before half-open, and a slow-call duration threshold. Numbers come from the dependency's SLO and your latency budget, not defaults.
- *"How does it prevent cascading failure?"* — By capping resources spent on a down dependency, so one failing service can't exhaust the thread/connection pools of everything calling it.
- *"Why is Hystrix a red flag now?"* — Maintenance mode since 2018, dropped from Spring Cloud. Current tools: resilience4j, Polly, opossum.`,
        },
        {
          id: 'arch-retry-backoff',
          title: 'Retry with backoff and jitter',
          minutes: 4,
          body: `On a transient failure, retry after a delay that grows exponentially (1s, 2s, 4s, 8s), with randomised **jitter** added so many clients retrying at once don't all hit the dependency at the same instant. AWS's own Builders' Library guidance is the primary source here.

Without jitter, synchronised retries turn a brief blip into a **retry storm**: the dependency recovers for a moment, every client retries in the same instant, and it falls over again.

\`\`\`mermaid
sequenceDiagram
    participant C1 as Client 1
    participant C2 as Client 2
    participant C3 as Client 3
    participant D as Dependency
    Note over C1,C3: no jitter - all retry at t+2s
    C1->>D: retry
    C2->>D: retry
    C3->>D: retry
    D-->>C1: overloaded again
    Note over C1,C3: with jitter - retries spread out
    C1->>D: retry (t+1.7s)
    C2->>D: retry (t+2.3s)
    C3->>D: retry (t+2.9s)
\`\`\`

**Two hard rules.** First, retrying a *non-idempotent* operation (e.g. "charge the card") without an idempotency key can double-charge — so make the operation idempotent before you retry it. Second, retries must always be bounded (max attempts) and paired with a timeout; an unbounded retry loop against a dead dependency never gives up.`,
        },
        {
          id: 'arch-bulkhead',
          title: 'Bulkhead and cell-based isolation',
          minutes: 4,
          body: `Isolate resources — thread pools, connection pools, or whole deployment units — per dependency or per tenant, so one dependency's failure or one tenant's abusive load can't exhaust resources shared by everything else. Named after ship bulkheads that keep a hull breach from sinking the whole vessel.

**When it wins:** multi-tenant systems, or any system calling several downstream dependencies with very different reliability profiles. Without a bulkhead, one flaky dependency's slow calls can consume the entire thread pool and starve calls to healthy dependencies too.

**Bulkhead at scale — cell-based architecture.** AWS's Well-Architected Framework treats cell-based architecture explicitly as a bulkhead pattern applied to whole deployment units: "a cell-based architecture uses multiple isolated instances of a workload... each cell is independent, does not share state with other cells, and handles a subset of the overall workload requests." A request is routed to exactly one cell (via a partition key cached at login), and a failure inside a cell cannot escape it. InfoQ's 2025 trends panel calls it out as a rising resilience technique, connected to a string of 2025 cloud outages where one shared service or config change triggered cascading failures across everything.`,
        },
        {
          id: 'arch-timeout-budgets',
          title: 'Timeout budgets',
          minutes: 3,
          body: `Every call to a dependency needs an explicit timeout. And in a call chain — A calls B calls C — each hop's timeout must be shorter than the *remaining* budget of the hop that called it, so a slow leaf service doesn't make every caller up the chain wait the maximum possible time.

The concrete failure this prevents: if A gives itself 3s but calls B with no timeout, and B calls a dead C, then A's threads pile up waiting on a call that will never return — exhausting A's pool for *unrelated* requests too. That is the single most common way one dependency's outage becomes everyone's outage.

The rule of thumb: at each hop, spend only a fraction of the budget you were given, and reserve the rest for the caller's own work and for a fallback. Timeouts are the first, cheapest line of defence — the one that circuit breakers and bulkheads build on top of. If a call can block, it needs a timeout, full stop.`,
        },
        {
          id: 'arch-observability',
          title: 'Observability and OpenTelemetry',
          minutes: 4,
          body: `The observability triad, and what each is *for*:
- **Logs** — discrete, timestamped event records; best for "what exactly happened at this point."
- **Metrics** — aggregated numeric time series (request rate, error rate, latency percentiles); best for "is the system healthy right now" and for alerting.
- **Traces** — the path of a single request across services, showing where time went at each hop; best for "why was *this* request slow" in a distributed system.

**OpenTelemetry (OTel) is the current standard**, and this is a genuinely recent, datable shift. All three signals — traces, metrics, and logs — reached GA in 2025 (logs lagged the other two for years), and OTel formally graduated as a CNCF project in 2026, described as "the de facto standard for open source observability" with the second-highest project velocity in the cloud-native ecosystem after Kubernetes.

**Why it matters practically:** OTel gives you one vendor-neutral instrumentation API across all three signals, plus a Collector that fans data out to whatever backend you use (Datadog, Grafana, Honeycomb, CloudWatch). Instrument with OTel semantic conventions rather than a vendor-proprietary agent where you have the choice — otherwise switching observability vendors later becomes a full re-instrumentation project.`,
        },
        {
          id: 'arch-api-versioning',
          title: 'API versioning and evolution',
          minutes: 4,
          body: `The core principle across nearly every current source: **version only when you make a genuinely breaking change.** Prefer backward-compatible, additive evolution whenever possible, because versioning is itself a maintenance cost.

Strategies, with a practical split:
- **URI versioning** (\`/v1/orders\`) — the pragmatic default for public APIs: visible, cache-friendly, trivially routable at a gateway.
- **Header-based versioning** (a custom header or \`Accept\` media-type) — better for internal services where you control every client, since URIs stay stable. It is the one most poorly implemented in practice: teams forget to enforce that clients send it and silently default to "latest," which quietly breaks old clients.
- **Date-based versioning** — pin a client to a release date, resolve internally; the more granular option, common where an API ships frequent additive changes.

**The trap:** "additive" is not the same as "safe." Adding a new optional field or a new endpoint is generally safe; renaming or removing a field, changing a field's type, or changing existing behaviour is breaking — even if the JSON shape looks unchanged. Adding a *required* field, or a new enum value an old client's switch statement doesn't handle, breaks clients despite looking additive.

**Deprecation:** announce with real dates, use a \`Sunset\` HTTP header where applicable, and give clients a genuine migration window rather than a silent cutover.`,
        },
        {
          id: 'arch-feature-flags',
          title: 'Feature flags',
          minutes: 3,
          body: `Feature flags **decouple deploy from release**. You ship code to production dark, then turn it on for a subset of traffic — internal users, a percentage rollout, a specific tenant — independent of the deploy pipeline. This splits "did the deploy work" and "was the feature a good idea" into two separable questions instead of one high-stakes moment.

**Patterns:**
- **Boolean kill-switch** — the fastest rollback path; flip a feature off without a redeploy if something goes wrong.
- **Percentage rollout** — ramp from 1% to 100% while watching metrics.
- **Targeting rules** — by user attribute, tenant, or region.
- **Multi-variate flags** — for A/B experimentation.

**Risks.** The main one is **flag debt**: flags that outlive their purpose and never get cleaned up, leaving dead conditional branches and a combinatorial testing surface. The other is using a flag as a permanent substitute for a real rollback path — a flag is a *temporary* decoupling mechanism, not a substitute for deploy hygiene. Give every flag an owner and an expiry.`,
        },
        {
          id: 'arch-deployment-patterns',
          title: 'Blue-green, canary, and rolling',
          minutes: 4,
          body: `Three ways to ship a new version without a hard cutover:

- **Rolling deployment** — replace old instances with new ones gradually, a few at a time. Simple, but both versions run at once during the rollout, so your API and data must tolerate both simultaneously.
- **Blue-green** — run two full, identical production environments (blue = current live, green = new), and switch all traffic at the router level at once. Rollback is instant (flip back to blue), but you need double the infrastructure during the switch, and any shared stateful resource (the database) still needs its own compatibility story.
- **Canary** — release the new version to a small slice of real traffic first, watch key metrics (error rate, latency), then progressively widen the slice if healthy or roll back fast if not. Lowest blast radius, at the cost of needing good real-time observability to detect a bad canary before it is fully out.

**The common thread:** none of these are safe without the observability to detect a problem quickly (the OTel section) and the resilience patterns — timeouts, circuit breakers — to contain a problem's blast radius while you roll back. These are not independent topics; they compose into one story about shipping safely.`,
        },
      ],
    },
    {
      id: 'arch-messaging',
      title: 'Messaging & event flow',
      summary: 'How services talk asynchronously — and what goes wrong when they do.',
      lessons: [
        {
          id: 'arch-queues-pubsub',
          title: 'Message queues vs pub/sub',
          minutes: 5,
          body: `Both decouple a sender from a receiver so work happens asynchronously, but they differ in *who gets the message*.

A **message queue** (point-to-point) delivers each message to exactly **one** consumer. Many workers can read from the same queue, but a given message is processed once — this is **work distribution**. Use it to spread a backlog of tasks (send email, resize image) across a worker pool. SQS, RabbitMQ.

**Pub/sub** (publish-subscribe) delivers each message to **every** subscriber. The publisher doesn't know who's listening; N independent consumers each get their own copy. Use it for **event fan-out** — one "order placed" event feeds billing, inventory, and analytics, each reacting independently. Kafka topics, SNS, Google Pub/Sub.

\`\`\`mermaid
sequenceDiagram
    participant P as Publisher
    participant T as Topic
    participant Billing
    participant Inventory
    participant Analytics
    P->>T: "order placed"
    T->>Billing: event copy
    T->>Inventory: event copy
    T->>Analytics: event copy
\`\`\`

The interview distinction: "one consumer does this work" → queue; "many systems need to know this happened" → pub/sub. Kafka blurs the line — it's a durable log where **consumer groups** give you queue semantics (one group = one logical consumer) while multiple groups give you pub/sub.`,
        },
        {
          id: 'arch-backpressure-dlq',
          title: 'Backpressure & dead letter queues',
          minutes: 4,
          body: `Async messaging introduces two failure modes you must answer for.

**Backpressure** — what happens when producers outpace consumers? Messages pile up. A little buffering is the *point* of a queue (it absorbs bursts), but unbounded growth means rising latency and eventual memory/disk exhaustion. Handling it: let the queue buffer bursts, **scale consumers** when depth grows (autoscale on queue length), and if the source is synchronous, **shed load** — reject or slow producers rather than fall over. The anti-pattern is pretending the queue is infinite.

**Dead letter queue (DLQ)** — what happens to a message that keeps failing? A consumer that can't process a message (bad data, downstream is down) shouldn't retry it forever and block the queue, nor drop it silently. After N failed attempts the message is moved to a **dead letter queue** — a side queue for poison messages.

\`\`\`mermaid
sequenceDiagram
    participant Q as Main queue
    participant W as Worker
    participant DLQ as Dead letter queue
    Q->>W: message (attempt 1)
    W-->>Q: fail, requeue
    Q->>W: message (attempt 2, 3…)
    W-->>DLQ: still failing → move to DLQ
    Note over DLQ: inspect, fix, replay later
\`\`\`

The DLQ turns "a bad message silently wedges the pipeline" into "a bad message is set aside for a human to inspect and replay" — which is why it's a standard part of any serious queue design. Pair it with idempotent consumers, since at-least-once delivery means the same message can arrive twice.`,
        },
      ],
    },
  ],
  references: [
    { label: 'Martin Fowler — CQRS', url: 'https://martinfowler.com/bliki/CQRS.html' },
    { label: 'Martin Fowler — Bounded Context', url: 'https://martinfowler.com/bliki/BoundedContext.html' },
    { label: "Martin Fowler — Conway's Law", url: 'https://martinfowler.com/bliki/ConwaysLaw.html' },
    { label: 'microservices.io — Saga pattern (Chris Richardson)', url: 'https://microservices.io/patterns/data/saga.html' },
    { label: "AWS Builders' Library — Timeouts, retries, and backoff with jitter", url: 'https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/' },
    { label: 'Azure Architecture Center — Event Sourcing pattern', url: 'https://learn.microsoft.com/en-us/azure/architecture/patterns/event-sourcing' },
    { label: 'InfoQ — Software Architecture and Design Trends Report 2025', url: 'https://www.infoq.com/articles/architecture-trends-2025/' },
  ],
}
