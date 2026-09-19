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
        },
        {
          id: 'arch-cqrs',
          title: 'CQRS',
          minutes: 3,
          body: `Command Query Responsibility Segregation: use a different model to *update* data than the model you use to *read* it. Separate write and read paths, sometimes separate datastores entirely.

Fowler's own bliki is the load-bearing quote: "you can use a different model to update information than the model you use to read information. For some situations this separation can be valuable, but beware that for most systems CQRS adds risky complexity."

**When it wins:** read and write workloads have genuinely different shapes — writes are normalised and transactional, while reads need heavily denormalised, pre-joined views for dashboards — or read and write scale independently by orders of magnitude.

**When it hurts:** most systems should not use it. It is a targeted tool for a specific asymmetry, not a default architecture. It introduces eventual consistency between the write model and the read model that every caller and every UI now has to account for. If you can't name the read/write asymmetry that forces it, you don't need it.`,
        },
        {
          id: 'arch-event-sourcing',
          title: 'Event sourcing',
          minutes: 3,
          body: `Persist state as an append-only sequence of events rather than current-state rows. Current state is derived by replaying the log (or replaying from a periodic snapshot).

Two independent sources say the same thing. Fowler: "Event Sourcing ensures that all changes to application state are stored as a sequence of events... we can also use the event log to reconstruct past states." Azure's Architecture Center: "Adopt event sourcing when its benefits, like auditability and historical reconstruction, justify the pattern's complexity. For most systems and most parts of a system, traditional data management is sufficient."

**When it wins:** you need a true audit trail, temporal queries ("what did this look like on date X"), or you are already doing CQRS and want the write-side events to double as the mechanism that feeds the read-side projections.

**When it hurts:** most systems don't need it, and the long-term cost people underestimate is **schema versioning** — replaying events written years ago, in an old shape, forever. Once an event is in the log it is history; you can't migrate it the way you'd ALTER a table.`,
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
          id: 'arch-ubiquitous-language',
          title: 'Ubiquitous language',
          minutes: 3,
          body: `The shared, rigorous vocabulary built up between developers and domain experts, used consistently in conversation, code, and documentation within one bounded context. Fowler, quoting Evans: it is "the practice of building up a common, rigorous language between developers and users."

**Practical heuristic:** if your class and method names don't match the words the business side actually uses in meetings, you have an invisible translation layer that will silently rot. Every conversation requires mentally re-mapping terms, and bugs hide in the mismatch.

A fast diagnostic you can run in any requirements conversation: count the terms that appear in the ticket but not in the codebase, or vice versa. A large gap is a sign the model has drifted from the domain — and it is exactly the kind of drift that makes a codebase feel harder to change than it should be.`,
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
          id: 'arch-context-mapping',
          title: 'Context mapping',
          minutes: 3,
          body: `Once you have multiple bounded contexts, you need explicit relationships between them. The standard strategic-design patterns:

- **Shared Kernel** — two teams explicitly share a small, jointly-owned piece of model. Rare in practice; needs tight coordination.
- **Customer-Supplier** — one context's team (supplier) provides for another's needs (customer), but the customer doesn't dictate the supplier's model wholesale.
- **Conformist** — the downstream context simply conforms to the upstream model as-is. Common when you have no influence over an upstream or vendor API.
- **Anticorruption Layer (ACL)** — the one most engineers reach for pragmatically. You build a translation layer that converts an external or legacy model into your own clean model at the boundary, so the external system's mess doesn't leak into your domain.

Evans's related **bubble context** technique uses an explicit bounded context plus an ACL to graft new, clean functionality onto a legacy system incrementally, instead of a big-bang rewrite. When someone hands you "integrate with the legacy billing system without letting its shape infect our new code," the ACL is the answer.`,
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
