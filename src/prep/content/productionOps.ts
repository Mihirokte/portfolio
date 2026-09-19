import type { Course } from './types'

// Production & Ops study course (SRE / DevOps). Lessons are deliberately small
// and plain, grouped by theme rather than one-term-per-lesson. ```mermaid
// fences render as sequence diagrams only. Sources: Google SRE Book,
// Kubernetes docs, HashiCorp Terraform docs, martinfowler.com, AWS
// Well-Architected. This course has no practice problems.

export const productionOps: Course = {
  key: 'ops',
  label: 'Production & Ops',
  blurb:
    'How software actually ships, runs, and survives in production — the delivery pipeline, the release, the signals you watch, and what you do when it breaks.',
  chapters: [
    {
      id: 'ops-delivery',
      title: 'Containers & delivery',
      summary:
        'How code gets from a commit to a running artifact — pipelines, containers, orchestration, and reproducible infrastructure.',
      lessons: [
        {
          id: 'ops-cicd',
          title: 'CI/CD: the pipeline from commit to prod',
          minutes: 5,
          body: `Continuous Integration (CI) and Continuous Delivery/Deployment (CD) turn "it works on my machine" into "it works, verifiably, every time we merge."

**CI** means every push is automatically built and tested against the shared mainline. The point is to catch integration problems within minutes of introducing them, while the change is still small and fresh in your head — not weeks later during a painful merge.

**CD** is the extension: an artifact that passes CI is automatically prepared for release. *Continuous Delivery* keeps a deployable build ready at all times and ships on a button press; *Continuous Deployment* removes the button and ships every green build to production automatically.

A typical pipeline runs stages in order, and a failure at any stage stops the line:

\`\`\`mermaid
sequenceDiagram
    participant Dev
    participant CI as CI runner
    participant Reg as Artifact registry
    participant Prod
    Dev->>CI: push commit
    CI->>CI: build + unit tests
    CI->>CI: lint + integration tests
    CI->>Reg: publish versioned artifact
    Reg->>Prod: deploy (auto or gated)
\`\`\`

Principles that make it work: keep the pipeline **fast** (developers won't wait 40 minutes), keep it **trustworthy** (a red build must mean a real problem, or people start ignoring it), and make every build produce **one immutable, versioned artifact** that is promoted unchanged through environments — you test the exact thing you ship.`,
        },
        {
          id: 'ops-docker',
          title: 'Docker: packaging the runtime',
          minutes: 4,
          body: `A container packages your application **together with everything it needs to run** — libraries, runtime, system tools — into one image. That image runs identically on a laptop, in CI, and in production, which is what kills "works on my machine."

The mental model: an **image** is a read-only, layered blueprint built from a \`Dockerfile\`; a **container** is a running instance of that image. Layers are cached and shared, so two images built on the same base share those bytes.

Containers are **not** virtual machines. A VM ships a whole guest OS and boots in seconds-to-minutes; a container shares the host kernel and starts in milliseconds, using isolation primitives (namespaces, cgroups) rather than hardware virtualization. That lightness is why you can pack many containers on one host and start them on demand.

Two habits that matter in practice:

- **Small images**: start from a slim base, copy only what you need, and use multi-stage builds so compilers and build tools don't ship to production.
- **Immutable and stateless**: treat a container as disposable. State (files, sessions) belongs in a database or object store, not inside the container's writable layer — because the next deploy throws that container away.`,
        },
        {
          id: 'ops-kubernetes-helm',
          title: 'Kubernetes and Helm: running containers at scale',
          minutes: 6,
          body: `One container is easy. Hundreds of containers across many machines — restarted when they crash, rescheduled when a node dies, load-balanced, rolled out gradually — is what **Kubernetes (k8s)** manages.

The core idea is **declarative desired state**. You don't tell Kubernetes "start this container here." You declare "I want 5 replicas of this image," and a control loop continuously works to make reality match. A crashed pod is replaced; a dead node's pods are rescheduled elsewhere. You describe the *what*; the system owns the *how*.

Objects you'll name in an interview:

- **Pod** — the smallest unit; one (or a few tightly-coupled) containers sharing a network address.
- **Deployment** — declares how many replicas of a pod to keep running and manages rollouts/rollbacks.
- **Service** — a stable virtual IP / DNS name in front of a changing set of pods, so callers don't chase individual pod addresses.
- **ConfigMap / Secret** — configuration and credentials injected at runtime, kept out of the image.

**Helm** is the package manager on top. A **chart** is a templated, versioned bundle of these manifests with values you fill in per environment — so "deploy the payments service to staging with 3 replicas" is one command against one chart, not a folder of hand-edited YAML. It gives you versioned, repeatable, parameterized deploys and a clean rollback to a previous release.`,
        },
        {
          id: 'ops-iac-terraform',
          title: 'Infrastructure as Code and Terraform',
          minutes: 5,
          body: `Infrastructure as Code (IaC) means your servers, networks, databases, and DNS are defined in **version-controlled files**, not clicked into existence in a console. The payoff: infrastructure becomes reviewable, repeatable, and recoverable. You can stand up an identical environment from scratch, diff a proposed change before it happens, and roll back by reverting a commit.

**Terraform** is the common declarative tool. You describe the desired end state; Terraform figures out the create/update/delete actions to reach it:

- **\`terraform plan\`** shows exactly what will change before anything happens — the single most valuable habit, because it turns "hope this works" into a reviewable diff.
- **\`terraform apply\`** executes that plan.
- **State file** — Terraform records what it currently manages so it knows the delta next time. This state is shared and must live in a locked remote backend (not on one laptop), or two engineers applying at once will corrupt it.

Two disciplines separate mature IaC from a mess: prefer **immutable infrastructure** (replace servers rather than mutating them in place, so drift can't accumulate) and never make **out-of-band manual changes** — a console edit that Terraform doesn't know about causes confusing "drift" the next plan tries to undo.`,
        },
      ],
    },
    {
      id: 'ops-release',
      title: 'Deployment & release',
      summary:
        'Getting a new version into production safely — release strategies, flags, health signals, scaling, and schema changes.',
      lessons: [
        {
          id: 'ops-deploy-strategies',
          title: 'Deploy strategies and rollbacks',
          minutes: 6,
          body: `A deploy is a moment of risk: the new version might be broken in a way tests missed. Deployment strategies exist to **shrink the blast radius** and make going back easy.

- **Rolling** — replace instances a few at a time. Old and new run side by side during the transition; no extra fleet needed. Simple and common, but rollback is slow (you have to roll *back* the same way), and both versions serve traffic at once.
- **Blue-green** — stand up a full second environment (green) alongside the live one (blue), test it, then flip all traffic at once. Rollback is instant — flip back. The cost is running two full environments during the cutover.
- **Canary** — release to a small slice of traffic (say 1%), watch the metrics, and only widen if it's healthy. This catches problems real tests can't, with minimal user impact.

A canary with an automated health gate:

\`\`\`mermaid
sequenceDiagram
    participant CD as Deploy system
    participant Canary as Canary (1%)
    participant Mon as Monitoring
    participant Fleet as Full fleet
    CD->>Canary: route 1% of traffic to new version
    Canary->>Mon: error rate, latency
    Mon-->>CD: within thresholds?
    CD->>Fleet: promote to 100%
    Note over CD,Fleet: if unhealthy: auto-rollback
\`\`\`

**Rollback** is the safety net under all of this. The rule: you should always be able to get back to the last known-good version *fast* and without thinking. This is far easier when releases are **immutable versioned artifacts** (roll back = redeploy the previous artifact) and when database changes are **backward compatible** — a schema the old code can't read makes rollback impossible.`,
        },
        {
          id: 'ops-feature-flags',
          title: 'Feature flags: decoupling deploy from release',
          minutes: 4,
          body: `A feature flag is a runtime switch that decides whether a piece of behaviour is active — without a redeploy. Its deepest value is **separating deployment from release**: you can ship code to production with the feature turned off, then turn it on for users when you (or product) choose. Deploy becomes a low-risk technical event; release becomes a business decision.

What that unlocks:

- **Progressive rollout** — enable a feature for 1% → 10% → 100% of users, or for internal staff first, watching metrics as you widen.
- **A kill switch** — if a new feature misbehaves, flip it off in seconds instead of rushing an emergency rollback.
- **Trunk-based development** — merge incomplete work behind an off flag, avoiding long-lived branches and painful merges.

The discipline flags demand: they are **temporary debt**. Every flag is a branch in your code and a state to test. Remove a flag once its feature is fully rolled out and stable, or you accumulate a maze of dead conditionals and combinatorial test paths that nobody dares delete.`,
        },
        {
          id: 'ops-health-probes',
          title: 'Health checks: liveness and readiness',
          minutes: 4,
          body: `An orchestrator and a load balancer need to know two *different* things about your instance, and conflating them causes outages.

- **Liveness** — "is this process alive, or is it wedged and needs a restart?" A failing liveness check tells Kubernetes to **kill and restart** the container. Use it for unrecoverable states like a deadlock.
- **Readiness** — "is this instance ready to *serve traffic right now*?" A failing readiness check tells the system to **stop sending requests** to this instance, but leave it running. Use it during startup (still loading a cache, warming a connection pool) or when a dependency is temporarily unavailable.

Why the distinction matters:

\`\`\`mermaid
sequenceDiagram
    participant K8s as Orchestrator
    participant Pod
    participant LB as Load balancer
    K8s->>Pod: readiness probe
    Pod-->>K8s: 503 — still warming up
    K8s->>LB: keep this pod OUT of rotation
    Pod->>Pod: finishes warming
    K8s->>Pod: readiness probe
    Pod-->>K8s: 200 OK
    K8s->>LB: add pod to rotation
\`\`\`

The classic mistake is using a liveness probe that checks a downstream dependency: when that dependency has a blip, *every* instance fails liveness, gets **restarted at once**, and you turn a small dependency hiccup into a full self-inflicted outage. Liveness = "am I healthy?"; readiness = "can I serve *right now*?"`,
        },
        {
          id: 'ops-autoscaling',
          title: 'Autoscaling: horizontal vs vertical',
          minutes: 4,
          body: `Load isn't constant, so capacity shouldn't be either. Autoscaling adjusts resources to match demand — saving money at the trough and preventing meltdown at the peak.

Two axes:

- **Vertical scaling (scale up)** — give one instance more CPU/RAM. Simple, no distribution needed, but bounded by the biggest machine you can buy, and resizing usually means downtime or a restart.
- **Horizontal scaling (scale out)** — add more instances behind a load balancer. This is the cloud-native default: near-limitless headroom and fault tolerance (one instance dies, others carry on). The requirement it imposes is that instances be **stateless**, so any request can hit any instance.

**Horizontal autoscaling** watches a signal — CPU, request rate, queue depth — and adds or removes instances to keep it near a target. Two cautions: scale on the metric that actually reflects *your* bottleneck (a queue-backed worker should scale on queue depth, not CPU), and account for **warm-up time** — if a new instance takes 90 seconds to be ready, you must scale *ahead* of the load, not after it has already arrived.`,
        },
        {
          id: 'ops-serverless-coldstart',
          title: 'Serverless: cold starts and limits',
          minutes: 4,
          body: `Serverless (AWS Lambda and friends) runs your code without you managing servers: you deploy a function, the platform spins up an execution environment on demand, runs it, and scales instances up and down with traffic — to zero when idle. You pay per invocation, not for idle capacity.

The signature trade-off is the **cold start**. When a request arrives and no warm environment is waiting, the platform must create one — download your code, start the runtime, initialize — before your function even begins. That added latency (tens of milliseconds to seconds, worst on heavy runtimes and large dependencies) hits the *first* request to a new instance. Once warm, the environment is reused for a while, so subsequent requests are fast. Mitigations: keep the deployment package small, keep expensive setup outside the handler, and use provisioned/warm concurrency for latency-sensitive paths.

The other reality is **limits**. Serverless functions are meant to be small and short: there are caps on execution time, memory, package size, and payload size, and each invocation is stateless (nothing persists between calls — state goes to a database or cache). Serverless shines for spiky, event-driven, bursty workloads; it fits long-running, stateful, or steady-high-throughput work far less well.`,
        },
        {
          id: 'ops-migrations-cron',
          title: 'Database migrations and scheduled jobs',
          minutes: 5,
          body: `Two operational tasks that quietly cause outages when done naively.

**Database migrations and schema versioning.** Your schema evolves — new columns, new tables, changed types — and those changes must be **versioned, ordered, and repeatable**, exactly like code. Migration tools apply numbered scripts in sequence and track which have run, so every environment converges to the same schema.

The hard part is applying a migration to a live system without downtime, especially since a deploy may need to **roll back**. The rule is **expand, then contract**:

1. **Expand** — make an additive, backward-compatible change (add the new column). Old and new code both still work.
2. **Migrate** — deploy code that writes to both old and new, backfill data.
3. **Contract** — only after the new code is stable everywhere, remove the old column.

A destructive change in one step (rename or drop a column the running code still uses) breaks either the old version during rollout or the new version on rollback.

**Cron jobs / scheduled tasks.** Recurring work — nightly reports, cleanup, billing runs — needs three properties people forget: **idempotency** (a job that runs twice, because of a retry or overlap, must not double-charge or double-send), **monitoring** (a silent cron that stops firing is invisible until something downstream is missing — alert on *absence* of the expected run), and **overlap handling** (decide what happens if a run starts before the previous one finished).`,
        },
      ],
    },
    {
      id: 'ops-observability',
      title: 'Observability & reliability',
      summary:
        'Knowing what your system is doing and whether it is meeting its promises — signals, tracing, alerting, and the SLO framework.',
      lessons: [
        {
          id: 'ops-three-pillars',
          title: 'Metrics, logs, and the three pillars',
          minutes: 5,
          body: `You cannot operate what you cannot see. **Observability** is the property of being able to ask *new* questions about your system's behaviour from the outside, without shipping new code to answer them. It rests on three complementary signals — the "three pillars."

- **Metrics** — numeric measurements aggregated over time: request rate, error rate, latency, CPU, queue depth. Cheap to store, ideal for dashboards and alerts, and they answer *"is something wrong, and how bad?"* But they're aggregates — they lose per-request detail.
- **Logs** — timestamped records of discrete events, ideally **structured** (JSON with fields, not free-text) so you can search and filter them. They answer *"what exactly happened for this request/user?"* Powerful but voluminous and costly at scale, so sample and set retention deliberately.
- **Traces** — the path of a single request across services (next lesson). They answer *"where did the time go / where did it fail?"*

The distinction that matters: **monitoring** is watching known signals for known failure modes (dashboards, thresholds); **observability** is having enough rich, correlated data to debug problems you *didn't* anticipate. Metrics tell you the *what*; logs and traces let you find the *why*. A useful default is Google's "Four Golden Signals" to instrument first: **latency, traffic, errors, and saturation**.`,
        },
        {
          id: 'ops-tracing',
          title: 'Distributed tracing',
          minutes: 4,
          body: `In a monolith, a slow request is one stack trace. In a system of many services, a single user action fans out into a chain of internal calls, and "the checkout is slow" could be any hop. **Distributed tracing** reconstructs that chain.

The mechanism: when a request enters the system it's assigned a **trace id**; every service it touches records a **span** (its own slice of work, with start/end time) tagged with that trace id and its parent span. Propagating the trace id across every service call is what lets you stitch the spans back into one timeline.

\`\`\`mermaid
sequenceDiagram
    participant Gateway
    participant Orders
    participant Payments
    participant DB
    Gateway->>Orders: request (trace-id abc)
    Orders->>Payments: charge (trace-id abc)
    Payments->>DB: write (trace-id abc)
    DB-->>Payments: ok
    Payments-->>Orders: ok
    Orders-->>Gateway: ok
\`\`\`

The result is a waterfall view: you see each span's duration and can point at the exact service and call that dominated the latency or threw the error. This is the pillar that answers **"where"** in a microservice system, and it's why teams standardize on a propagation format (OpenTelemetry) — a trace is only as good as its weakest, un-instrumented hop.`,
        },
        {
          id: 'ops-alerting',
          title: 'Alerting: paging on symptoms, not causes',
          minutes: 4,
          body: `An alert's job is to get a human's attention when — and *only* when — action is genuinely needed. The failure mode isn't too few alerts; it's too many. **Alert fatigue** is when so many alerts fire (many noisy or non-actionable) that on-call engineers start ignoring them, and the one that mattered is lost in the noise.

Principles for alerts worth waking someone for:

- **Alert on symptoms, not causes.** Page on *"users are seeing errors / latency is above the SLO,"* not on *"CPU is at 90%."* High CPU may be totally fine; a served-error rate is what actually hurts users. Cause-based alerts fire constantly and often don't correspond to real user pain.
- **Every page must be actionable.** If the recipient can't do anything about it right now, it shouldn't page — make it a ticket or a dashboard, not a 3 a.m. wake-up.
- **Tie alerts to your SLOs (next lesson).** The strongest signal to page on is *"we are burning our error budget fast enough to breach the objective."*
- **Use severity tiers.** A page (immediate human action) is different from a ticket (handle during business hours) is different from an FYI. Route them differently.

The test for any alert: *"if this fires and the human does nothing, was that the right outcome?"* If yes often enough, delete or downgrade it.`,
        },
        {
          id: 'ops-slo-sli',
          title: 'SLIs, SLOs, and error budgets',
          minutes: 6,
          body: `This is the framework (from Google's SRE practice) that turns "reliable" from a vibe into a number you can manage.

- **SLI — Service Level Indicator.** A *measured* quantity of your service's behaviour: e.g. the proportion of requests served successfully in under 300 ms. It's the raw signal.
- **SLO — Service Level Objective.** Your *target* for an SLI over a window: e.g. "99.9% of requests succeed under 300 ms, measured over 28 days." This is an internal goal you hold yourselves to.
- **SLA — Service Level Agreement.** A *contract* with customers, with financial consequences if breached. Your SLO should be **stricter** than your SLA, so you notice trouble before a customer can invoke the contract.

The powerful idea is the **error budget**. If your SLO is 99.9% success, then 0.1% of requests are *allowed* to fail — that 0.1% is a budget you get to spend:

- **Budget remaining** → you can take risks: ship features faster, run experiments, do a bold migration.
- **Budget exhausted** → you stop shipping risky changes and spend engineering effort on reliability until you're back in budget.

This dissolves the classic dev-vs-ops fight ("ship faster" vs "stay stable") into a shared, data-driven rule. 100% reliability is the wrong target — it's impossible, ruinously expensive, and users can't tell the difference between 99.9% and 100% anyway. The error budget makes the *right* amount of unreliability an explicit, spendable resource.`,
        },
        {
          id: 'ops-latency-tail',
          title: 'Latency, throughput, and tail (P99)',
          minutes: 4,
          body: `Two different performance questions, and the statistic that separates good engineers from ones who quote averages.

- **Latency** — how long *one* request takes (a duration).
- **Throughput** — how many requests you handle *per unit time* (a rate, e.g. QPS).

They trade off: pushing throughput toward saturation causes queuing, which drives latency up sharply. You optimize for one or the other depending on the workload (an interactive API cares about latency; a batch pipeline cares about throughput).

The crucial move on latency is to **stop looking at the average**. The mean hides pain: if 1 in 100 requests takes 5 seconds and the rest take 20 ms, the average looks fine while some users have a terrible experience. So measure **percentiles**:

- **P50 (median)** — the typical experience.
- **P99 / P99.9 — tail latency** — the slowest 1% / 0.1%. This is where timeouts, retries, and angry users live.

Tail latency matters more than it seems because of **fan-out**: if one user action makes 100 internal calls in parallel and waits for all of them, the odds that *at least one* hits the slow P99 are high — so your user-facing latency is effectively governed by your backend's *tail*, not its median. Set SLOs and alerts on the tail, not the average.`,
        },
      ],
    },
    {
      id: 'ops-resilience',
      title: 'Resilience & incidents',
      summary:
        'Surviving failure — recovery, geographic redundancy, deliberately injected chaos, cost control, and how to run and learn from an incident.',
      lessons: [
        {
          id: 'ops-dr-backups',
          title: 'Disaster recovery, backups, and failover',
          minutes: 5,
          body: `Everything fails eventually — a disk, a datacenter, a bad deploy that corrupts data. Disaster recovery (DR) is planning for the bad day so it's a controlled event, not a company-ending one.

Two numbers frame every DR plan:

- **RPO — Recovery Point Objective**: how much *data* you can afford to lose, measured in time. "RPO of 5 minutes" means backups/replication must be at most 5 minutes behind, so a disaster loses at most 5 minutes of writes.
- **RTO — Recovery Time Objective**: how long you can afford to be *down* while recovering. "RTO of 1 hour" means you must be back within an hour.

Tighter targets cost more, so set them per system by business impact.

**Backups** are the foundation — but an untested backup is a *hope*, not a plan. The single most important discipline is to **regularly test restores**; teams routinely discover their backups are incomplete or unrestorable only during a real disaster. Also keep backups off the primary system (a ransomware event or a fat-fingered delete that hits your live data shouldn't reach your backups).

**Failover** is switching to a standby when the primary fails — a replica database promoted to primary, or traffic rerouted to a healthy region. It can be automatic (fast, but risks flapping and split-brain) or manual (slower, safer). Whichever you choose, **rehearse it** before you need it.`,
        },
        {
          id: 'ops-multi-region',
          title: 'Multi-region deployments',
          minutes: 4,
          body: `Running in more than one geographic region buys two things: **lower latency** (serve users from a nearby region) and **disaster survival** (an entire region can go down and you stay up). It also introduces the hardest problem in distributed systems — keeping data consistent across long distances — so it's a deliberate trade-off, not a default.

Common shapes, increasing in cost and complexity:

- **Active-passive** — one region serves all traffic; a second stands by with replicated data, ready to take over on failover. Simpler; the standby's capacity is mostly idle.
- **Active-active** — multiple regions serve live traffic simultaneously. Best latency and utilization, but now writes can happen in two places at once, forcing you to confront conflict resolution and cross-region replication lag head-on.

The physics you can't escape: the speed of light makes a synchronous, strongly-consistent write across continents slow (a round trip of ~100 ms+). So multi-region systems usually accept **eventual consistency** for most data and reserve synchronous cross-region coordination for the few things that truly need it. Data residency and regulatory rules (where user data is legally allowed to live) often drive the design as much as performance does.`,
        },
        {
          id: 'ops-cost',
          title: 'Cost optimization',
          minutes: 4,
          body: `In the cloud, architecture decisions are spending decisions — every running resource has a meter. Cost optimization is treating money as a first-class operational metric, alongside latency and reliability, rather than a surprise on the monthly bill.

Where the waste usually hides:

- **Idle and over-provisioned resources** — instances sized for a peak that rarely comes, or left running with nothing to do. **Right-sizing** (match capacity to actual usage) and **autoscaling** (shed capacity at the trough) recover most of this.
- **The right purchasing model** — on-demand for spiky/unpredictable load, reserved or committed-use pricing for steady baseline load (big discount for a commitment), and spot/preemptible instances for fault-tolerant, interruptible work (deep discount, can be reclaimed).
- **Storage tiering** — hot data on fast expensive storage, cold/archival data on cheap slow tiers, with lifecycle rules that move it automatically.
- **Data transfer** — cross-region and egress traffic is often a silently large line item.

The discipline that makes it stick is **visibility**: tag resources by team/service so cost is attributable, and put spend on a dashboard people actually look at. You can't optimize a bill you can't attribute. The trade-off is always cost *versus* performance and resilience — cheaper is a valid choice only when you've named what reliability you're giving up.`,
        },
        {
          id: 'ops-incidents',
          title: 'Incidents, on-call, and postmortems',
          minutes: 6,
          body: `An incident is any unplanned disruption that needs an urgent response. How a team handles the live event — and what it does afterward — is the clearest signal of operational maturity.

**During the incident**, structure beats heroics:

- **Roles.** An **Incident Commander (IC)** coordinates and decides — they don't fix, they run the response. Others investigate and mitigate. This prevents ten people debugging in ten directions.
- **Mitigate first, diagnose later.** The priority is stopping user pain — roll back, fail over, flip a feature flag — *before* hunting the root cause. Recovery is the goal; understanding can wait.
- **Communicate.** Keep a running timeline and update stakeholders; a silent incident channel breeds a dozen "is it fixed yet?" interruptions.

Escalation when the first responder is stuck:

\`\`\`mermaid
sequenceDiagram
    participant Alert as Alerting
    participant P as Primary on-call
    participant IC as Incident Commander
    participant SME as Service expert
    Alert->>P: page (SLO burn / errors)
    P->>P: assess + attempt mitigation
    P->>IC: escalate (impact is broad)
    IC->>SME: pull in owning team
    IC->>IC: coordinate until resolved
\`\`\`

**On-call** is the rotation that makes someone responsible for responding. Healthy on-call is *sustainable*: reasonable rotations, alerts that are actually actionable (see the alerting lesson), and enough runbooks that the responder isn't starting from zero.

**Postmortems** are how you convert an outage into a permanent improvement. The non-negotiable principle is **blameless**: the goal is to fix the *system and process*, never to punish a person — because in a blameful culture people hide mistakes and the same failure recurs. A good postmortem records the timeline, the real (often multi-layered) root cause, the customer impact, and — most importantly — **action items with owners** that make this class of failure less likely or less severe. Human error is almost never the root cause; it's a symptom of a system that made the error easy to make and hard to catch.`,
        },
      ],
    },
  ],
  references: [
    { label: 'Google SRE Book (free online)', url: 'https://sre.google/books/' },
    { label: 'Google SRE Workbook — Implementing SLOs', url: 'https://sre.google/workbook/implementing-slos/' },
    { label: 'Kubernetes Documentation — Concepts', url: 'https://kubernetes.io/docs/concepts/' },
    { label: 'HashiCorp — What is Infrastructure as Code with Terraform?', url: 'https://developer.hashicorp.com/terraform/tutorials/aws-get-started/infrastructure-as-code' },
    { label: 'Martin Fowler — Continuous Integration', url: 'https://martinfowler.com/articles/continuousIntegration.html' },
    { label: 'Martin Fowler — Feature Toggles (Flags)', url: 'https://martinfowler.com/articles/feature-toggles.html' },
    { label: 'AWS Well-Architected Framework', url: 'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html' },
    { label: 'Principles of Chaos Engineering', url: 'https://principlesofchaos.org/' },
  ],
}
