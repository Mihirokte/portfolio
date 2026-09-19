import type { Course } from './types'

// System Design study course. Lessons are deliberately small and plain.
// ```mermaid fences render as diagrams. Sources are the compiled
// swe-job-prep/04-system-design reference material (Hello Interview, DDIA,
// system-design-primer, company engineering blogs).

export const systemDesign: Course = {
  key: 'sd',
  label: 'System Design',
  problemAreaKey: 'sd',
  // These drills just ask you to recite what a lesson already teaches 1:1
  // (CAP split, caching strategy, rate-limit algorithms, SQL-vs-NoSQL,
  // vector-DB decision) — hidden so we don't re-ask a concept right after it.
  suppressedProblemIds: ['sd-015', 'sd-016', 'sd-019', 'sd-020', 'sd-025'],
  blurb:
    'How to walk from a vague prompt to a defensible design, plus the fundamentals every box on your diagram rests on. Built for an SDE2-level round.',
  chapters: [
    {
      id: 'sd-interview',
      title: 'The interview itself',
      summary: 'What the round actually measures at mid-level, and a time-boxed way to run it.',
      problemIds: ['sd-021'],
      lessons: [
        {
          id: 'sd-what-is-measured',
          title: 'What an SDE2 round measures',
          minutes: 4,
          body: `System design rounds are no longer senior-only. By late 2025 they show up in most SDE2 / L4 loops. The good news: the bar is bounded. You are judged as a strong individual contributor, not an architect.

Evan King (Hello Interview) frames the level along three axes:

- **Breadth** — wide but shallow is fine. You are not assumed to know every technology. If you name-drop an "API gateway," expect "what does that actually do?" — so only draw boxes you can explain.
- **Depth** — limited depth is acceptable. Textbook understanding of concepts is enough; you are transitioning from book knowledge to applied use.
- **Proactiveness** — *you* drive requirements, API, schema, and the first high-level design. It is normal for the interviewer to steer the deep-dive and point out weaknesses.

The mid-level scope is a **single service or feature**, a known scaling range (say 100 → 10K QPS), correct fundamentals, and honest trade-off reasoning. You are **not** penalised for skipping multi-region, global rollout, or cost optimisation unless you brought it up yourself.

The most common way mid-level candidates fail is not a knowledge gap — it is **structure**: going too deep too early and running out of time.`,
        },
        {
          id: 'sd-delivery-framework',
          title: 'A framework that fits in 45 minutes',
          minutes: 5,
          body: `Hello Interview's delivery framework exists to stop you running out of time. For a 45–60 min round:

1. **Requirements (~5 min)** — functional ("users should be able to…"), then non-functional (quantified: "search under 500ms" beats "fast"). Prioritise; a long list hurts you.
2. **Core entities (~2 min)** — just the nouns: User, Tweet, Follow. Don't fill columns yet.
3. **API (~5 min)** — define the contract before the architecture. Default REST. Never take the current user id from the request body — derive it from the auth token.
4. **[Optional] Data flow (~5 min)** — only for pipeline systems (e.g. a crawler).
5. **High-level design (~10–15 min)** — boxes and arrows that satisfy the API, one endpoint at a time. Stay simple; note where you'll add complexity later.
6. **Deep dives (~10 min)** — harden against the non-functional requirements: scale, bottlenecks, edge cases.

The shape of the conversation:

\`\`\`mermaid
sequenceDiagram
    participant Y as You
    participant I as Interviewer
    Y->>I: Clarify functional + non-functional requirements
    I-->>Y: Confirms scope, adds a constraint
    Y->>I: Core entities + API contract
    Y->>I: High-level design (simple, end to end)
    I->>Y: "What happens at 10x traffic here?"
    Y->>I: Deep dive — caching, sharding, trade-offs
\`\`\`

A compressed mental checklist: **scope → ground in data/APIs → commit to a structure → go deep without breaking down.**`,
        },
        {
          id: 'sd-estimation',
          title: 'Estimation, only when it changes the design',
          minutes: 3,
          body: `Back-of-the-envelope math is a tool, not a ritual. Hello Interview's advice: **skip it unless a number will change your design** — and say that out loud.

Compute inline only when the result forces a decision. Example: "Will trending topics fit in one in-memory heap, or do I need to shard it?" — that is worth 60 seconds of math. "How many bytes is a username?" is not.

Numbers worth memorising:

- 1 request/user/day at 100M users ≈ **~1,150 QPS** average, and peak is often 2–3x average.
- Reads usually dominate writes 10:1 to 1000:1 for consumer products — this decides whether you optimise for read or write path.
- 1 KB × 1M writes/day ≈ **1 GB/day** ≈ ~365 GB/year. This tells you if data fits on one node or must be partitioned.

If the math doesn't move a box on your diagram, don't do it.`,
        },
      ],
    },
    {
      id: 'sd-fundamentals',
      title: 'Fundamentals',
      summary: 'The building blocks every design rests on — enough to explain any box you draw.',
      problemIds: ['sd-017', 'sd-018', 'sd-022', 'sd-023'],
      lessons: [
        {
          id: 'sd-caching',
          title: 'Caching',
          minutes: 5,
          body: `A cache trades memory for latency by keeping hot data close to the reader. The three questions an interviewer will probe: **where**, **what strategy**, and **how do you invalidate**.

**Where:** client → CDN (static/media) → application-tier cache (Redis/Memcached) → database buffer pool. Each layer catches what the layer above missed.

**Strategy — cache-aside** is the default. The app checks the cache, and on a miss loads from the DB and populates the cache:

\`\`\`mermaid
sequenceDiagram
    participant App
    participant Cache
    participant DB
    App->>Cache: GET key
    Cache-->>App: miss
    App->>DB: SELECT …
    DB-->>App: row
    App->>Cache: SET key (with TTL)
    App-->>App: return row
\`\`\`

Alternatives: **write-through** (write to cache and DB together — consistent, slower writes), **write-back** (write to cache, flush later — fast, risks loss on crash).

**Invalidation is the hard part.** Two real options: a **TTL** (simple, but serves stale data until it expires) or **explicit invalidation** on write (fresh, but easy to miss a path and leak stale entries). Most systems use TTL plus explicit invalidation on the paths that matter.

Watch for the **thundering herd**: when a hot key expires, thousands of requests miss simultaneously and stampede the DB. Mitigate with a short lock on repopulation or slightly randomised TTLs.`,
        },
        {
          id: 'sd-sql-vs-nosql',
          title: 'SQL vs NoSQL',
          minutes: 5,
          body: `The honest answer is rarely "NoSQL because scale." Choose on the shape of your data and access patterns.

**Reach for a relational DB (Postgres/MySQL) when** you have relationships and need joins, you want ACID transactions (money, inventory), or your query patterns will evolve and you can't predict them. Modern Postgres scales much further than interview folklore admits — read replicas and partitioning take you a long way.

**Reach for NoSQL when** the access pattern is known and simple (key → value, or a document fetched by id), you need horizontal write scaling beyond one node, or the schema is genuinely flexible. Families:

- **Key-value** (DynamoDB, Redis) — fastest, simplest; you design around the partition key.
- **Document** (MongoDB) — nested JSON fetched as a unit.
- **Wide-column** (Cassandra, ScyllaDB) — huge write throughput, query-first schema.

The interviewer's real question is **"why?"** "I'll use DynamoDB because the only access pattern is get-cart-by-user-id, writes are heavy, and I never join" is a strong answer. "NoSQL scales better" is not.

A useful tell: if you find yourself wanting joins and transactions on top of a NoSQL store, you probably picked wrong.`,
        },
        {
          id: 'sd-replication-partitioning',
          title: 'Replication and partitioning',
          minutes: 5,
          body: `Two different tools people conflate.

**Replication** = copies of the *same* data on multiple nodes. It buys availability (a node dies, a replica serves) and read scaling (reads spread across replicas). The cost is consistency: with async replication a replica can lag, so a read right after a write may not see it.

\`\`\`mermaid
sequenceDiagram
    participant Client
    participant Primary
    participant Replica
    Client->>Primary: write X=1
    Primary-->>Client: ack
    Primary->>Replica: replicate X=1 (async)
    Client->>Replica: read X
    Replica-->>Client: X=0  (stale — replication lag)
\`\`\`

**Partitioning (sharding)** = splitting *different* data across nodes so no single node holds it all. It buys write scaling and storage beyond one machine. The cost is that cross-partition queries and transactions get hard.

The make-or-break decision is the **partition key**. A good key spreads load evenly and keeps related data together. A bad key creates a **hot partition** — e.g. sharding by \`country\` when 60% of traffic is one country. When asked "what's your partition key," never answer "id" reflexively; answer with the access pattern that key serves.`,
        },
        {
          id: 'sd-cap',
          title: 'CAP and PACELC, in plain terms',
          minutes: 4,
          body: `CAP: when the network **partitions** (nodes can't talk), you must choose **Consistency** or **Availability** — you cannot have both during the partition.

- **CP** — refuse or block requests that can't be made consistent. Pick this for money, inventory, anything where a wrong answer is worse than no answer.
- **AP** — keep serving, accept that different nodes may briefly disagree, reconcile later. Pick this for feeds, likes, presence — where stale is fine and downtime is not.

CAP only describes behaviour *during a partition*, which is rare. **PACELC** completes it: **E**lse (normal operation), you still trade **L**atency vs **C**onsistency. A globally consistent write needs a round trip to a quorum; a fast local write risks staleness. So the real everyday question isn't "CP or AP" — it's "how much staleness can this feature tolerate for how much latency?"

Say the trade-off in feature terms: "The balance must be consistent, so that path is CP even if it means rejecting a write during a partition. The activity feed is AP — I'd rather show a slightly stale feed than an error."`,
        },
        {
          id: 'sd-queues',
          title: 'Message queues and streams',
          minutes: 4,
          body: `A queue decouples a producer from a consumer so slow or bursty work doesn't block the request path. The classic use: return to the user immediately, do the heavy work asynchronously.

\`\`\`mermaid
sequenceDiagram
    participant User
    participant API
    participant Queue
    participant Worker
    User->>API: upload video
    API->>Queue: enqueue "transcode job"
    API-->>User: 202 Accepted (fast)
    Worker->>Queue: dequeue job
    Worker->>Worker: transcode (slow)
    Worker->>User: notify when done
\`\`\`

Two flavours:

- **Task queue** (SQS, RabbitMQ) — a job is consumed once and removed. Good for work distribution: send email, resize image, process payment.
- **Log/stream** (Kafka, Kinesis) — an append-only log many consumers read independently at their own offset. Good for event pipelines, analytics, and fan-out to multiple systems.

The properties to reason about: **delivery** (at-least-once is normal → your consumer must be **idempotent**), **ordering** (global ordering is expensive; per-key ordering via partitions is usually enough), and **backpressure** (what happens when producers outpace consumers — the queue absorbs the burst, which is the point).`,
        },
        {
          id: 'sd-rate-limiting',
          title: 'Rate limiting',
          minutes: 3,
          body: `Rate limiting protects a service from abuse and overload. The algorithm you name signals how much you understand.

- **Fixed window** — count requests per calendar minute. Simple, but allows a burst of 2x the limit at the window boundary.
- **Sliding window** — smooths the boundary problem by weighting the previous window.
- **Token bucket** — the usual interview answer. A bucket refills tokens at a steady rate up to a cap; each request spends one. It allows short bursts (spend the saved tokens) while bounding the sustained rate. Cap = burst tolerance, refill rate = sustained limit.

Where it lives: at the edge (API gateway) for coarse per-client limits, and sometimes per-service for fine-grained ones. State (the counters/buckets) usually lives in Redis so all app servers share one view — a per-server limit is not a real limit behind a load balancer.`,
        },
      ],
    },
    {
      id: 'sd-building-blocks',
      title: 'Reusable building blocks',
      summary: 'Components that recur across designs — recognise them so you assemble instead of invent.',
      problemIds: ['sd-024', 'sd-013'],
      lessons: [
        {
          id: 'sd-id-generation',
          title: 'Unique ID generation',
          minutes: 3,
          body: `You need unique ids constantly (tweets, orders, messages) and "just use auto-increment" breaks once you shard — two shards both hand out id 1001.

Options:

- **UUID** — 128-bit, generated anywhere with no coordination. Downside: random, so it hurts database index locality and is bulky.
- **Snowflake (Twitter)** — the standard interview answer. A 64-bit int packed as \`timestamp | machine-id | per-ms sequence\`. No coordination needed, roughly **time-sortable** (newer ids are larger — great for feeds), compact. Each machine only needs a unique machine id.
- **Ticket server / DB range allocation** — a central service hands out blocks of ids to each node; nodes burn through their block locally. Simple, but the allocator is a dependency.

The winning move is usually Snowflake, and the reason to say is "time-sortable + no coordination," which is what makes it fit feeds and logs.`,
        },
        {
          id: 'sd-fanout',
          title: 'Feed fan-out: push vs pull',
          minutes: 5,
          body: `The canonical design tension behind news feeds, timelines, and notifications. When someone posts, how do their followers see it?

**Fan-out on write (push):** when you post, immediately write the post id into every follower's precomputed feed. Reads are then trivial — just read your own feed list.

\`\`\`mermaid
sequenceDiagram
    participant Poster
    participant Service
    participant F1 as Follower feeds
    Poster->>Service: new post
    Service->>F1: insert post id into each follower's feed
    Note over F1: read is cheap later
\`\`\`

Great for read-heavy timelines — until a celebrity with 50M followers posts, and one write becomes 50M writes (the **hot-key / fan-out storm** problem).

**Fan-out on read (pull):** store the post once. When a follower opens their feed, gather recent posts from everyone they follow and merge. Cheap writes, expensive reads.

**The real answer is hybrid:** push for normal users (cheap fan-out, fast reads), pull for the handful of celebrities (avoid the storm), and merge the two at read time. Naming this hybrid — and *why* — is what separates a mid-level answer from a strong one.`,
        },
        {
          id: 'sd-realtime',
          title: 'Real-time delivery',
          minutes: 4,
          body: `When the server must push to the client (chat, presence, live scores, collaborative editing), polling wastes requests. Options, weakest to strongest:

- **Short polling** — client asks every N seconds. Simple, laggy, wasteful.
- **Long polling** — client asks, server holds the request open until there's data. Better, still HTTP-request-shaped.
- **WebSockets** — a persistent bidirectional connection. The standard answer for chat and live updates.
- **Server-Sent Events (SSE)** — one-way server→client stream over HTTP. Lighter than WebSockets when you don't need client→server on the same channel (good for live feeds/notifications).

The scaling wrinkle interviewers probe: **connections are stateful**. A user's WebSocket lives on one specific server, so to deliver a message you must route it to the right server. That needs a **connection registry** (which user is on which server, e.g. in Redis) and often a pub/sub layer so any server can publish to the server holding the target connection.`,
        },
        {
          id: 'sd-search',
          title: 'Search and the inverted index',
          minutes: 3,
          body: `"Let users search posts by keyword" quietly means full-text search, and a \`LIKE '%term%'\` scan won't scale.

The core structure is an **inverted index**: instead of doc → words, you store word → list of docs containing it. A search then intersects the doc lists for the query terms. This is what Elasticsearch / OpenSearch (built on Lucene) give you, plus ranking, tokenisation, and fuzzy matching.

The architectural point for an interview: search is almost always a **separate system fed asynchronously** from your primary store. You write to Postgres/DynamoDB, then stream changes (via a queue or change-data-capture) into the search index. Don't try to make your primary database also be your search engine — that couples two very different workloads.`,
        },
        {
          id: 'sd-vector-db',
          title: 'Vector databases (the 2025–26 addition)',
          minutes: 4,
          body: `The most consistently cited *new* topic in 2025–26 system design rounds, driven by embeddings-based search and LLM retrieval-augmented generation (RAG).

A **vector database** stores high-dimensional embeddings (arrays of floats that capture meaning) and answers **"find the k most similar vectors to this one"** fast. Similarity is cosine/dot-product distance, and exact nearest-neighbour is too slow at scale, so these DBs use **approximate nearest neighbour (ANN)** indexes like HNSW.

Where it fits — semantic search and RAG:

\`\`\`mermaid
sequenceDiagram
    participant User
    participant App
    participant Embed as Embedding model
    participant VDB as Vector DB
    participant LLM
    User->>App: question
    App->>Embed: embed(question)
    Embed-->>App: query vector
    App->>VDB: top-k similar chunks
    VDB-->>App: relevant docs
    App->>LLM: question + retrieved docs
    LLM-->>User: grounded answer
\`\`\`

Most interviews don't need HNSW internals. They want to see that you know **when** to reach for one (semantic similarity, not keyword match) and **how it slots in** (offline: chunk + embed + index your corpus; online: embed the query, retrieve top-k, feed an LLM). Options named in practice: Pinecone, Weaviate, pgvector (Postgres extension — a strong "don't add infra yet" answer).`,
        },
      ],
    },
    {
      id: 'sd-request-path',
      title: 'Networking & the request path',
      summary: 'Everything a request passes through between the user and your service.',
      lessons: [
        {
          id: 'sd-load-balancing',
          title: 'Load balancers & reverse proxies',
          minutes: 5,
          body: `A **reverse proxy** sits in front of your servers and forwards client requests to them. The client only ever talks to the proxy. That one indirection buys a lot: TLS termination, caching, compression, request routing, and hiding your internal topology. Nginx and Envoy are the common ones.

A **load balancer** is a reverse proxy whose main job is spreading traffic across many identical servers so no one is overwhelmed. Two layers:

- **L4** (transport) — routes by IP/port without looking at the request. Fast, protocol-agnostic.
- **L7** (application) — reads the HTTP request and can route by path, header, or cookie (e.g. \`/api\` to one pool, \`/img\` to another). More capable, slightly more work per request.

Balancing algorithms worth naming: **round-robin** (simple), **least-connections** (favours idle servers — good for uneven request costs), and **consistent hashing** (sticks a given key to the same server — important for caches, covered later).

The interview point: a load balancer also does **health checks** and stops sending traffic to a server that fails them — that's how it gives you availability, not just distribution.`,
        },
        {
          id: 'sd-gateway-discovery',
          title: 'API gateways & service discovery',
          minutes: 4,
          body: `An **API gateway** is an L7 reverse proxy specialised for API traffic. It's the single front door to a set of services and centralises the cross-cutting work you don't want in every service: authentication, rate limiting, request routing, API-key checks, and request/response shaping. In a microservices system, the gateway is what the outside world hits; it fans requests out to internal services.

Don't confuse it with a **load balancer**: the LB spreads traffic across copies of *one* service; the gateway routes across *different* services and enforces policy. They're often layered — gateway behind an LB.

**Service discovery** solves a related problem: in a dynamic system, service instances come and go (autoscaling, deploys, crashes) and their IPs change. Instead of hard-coding addresses, instances **register** themselves in a registry (Consul, etcd, or your platform's built-in DNS), and callers **look up** healthy instances by name.

\`\`\`mermaid
sequenceDiagram
    participant Svc as New instance
    participant Reg as Registry
    participant Caller
    Svc->>Reg: register "orders" @ 10.0.1.7 (healthy)
    Caller->>Reg: where is "orders"?
    Reg-->>Caller: 10.0.1.7, 10.0.1.9
    Caller->>Svc: request
\`\`\`

Kubernetes bundles this in: a Service name resolves via cluster DNS to healthy pods, so app code just calls \`http://orders\`.`,
        },
        {
          id: 'sd-cdn-dns',
          title: 'CDNs, edge caching & DNS',
          minutes: 4,
          body: `A **CDN** (Content Delivery Network) is a globally distributed set of caches. You push static assets — images, video, JS/CSS, sometimes cached API responses — to it, and users are served from a **point of presence** physically near them instead of your origin. That cuts latency (fewer, shorter network hops) and offloads huge read traffic from your servers. **Edge caching** is the general idea: cache as close to the user as possible.

The cost is the same as any cache: **invalidation**. When you change an asset, edges may still serve the old copy until its TTL expires — the standard fix is content-hashed filenames (\`app.9f3a.js\`) so a new version is a new URL.

**DNS** is the internet's lookup layer: it turns a name (\`api.example.com\`) into an IP. It matters in system design for two reasons: it's the *first* hop of every request (a slow or failed DNS resolution stalls everything), and it's a coarse routing tool — **geo-DNS** can return different IPs by region to send users to the nearest data centre, and DNS-level failover can redirect traffic away from a dead region. TTLs on DNS records trade propagation speed against lookup load.`,
        },
        {
          id: 'sd-protocols',
          title: 'TCP/UDP, HTTP/2 & 3, gRPC, webhooks',
          minutes: 5,
          body: `**TCP vs UDP** — TCP is reliable, ordered, connection-oriented (handshake, retransmits, congestion control): the default for anything that must arrive intact. UDP is fire-and-forget: no handshake, no ordering, no retransmit — you accept loss for lower latency. Use UDP for real-time media, gaming, DNS queries; TCP for basically everything else.

**HTTP versions** — HTTP/1.1 opens roughly one request per connection and suffers head-of-line blocking. **HTTP/2** multiplexes many streams over one TCP connection (big win for many small assets). **HTTP/3** runs over **QUIC** (built on UDP) and removes TCP's head-of-line blocking entirely, so a single lost packet doesn't stall unrelated streams — noticeably better on flaky mobile networks.

**gRPC** — a high-performance RPC framework over HTTP/2 using Protocol Buffers (compact binary, schema-defined). It's the usual choice for **internal service-to-service** calls: fast, strongly typed, supports streaming. Less suited to public browser-facing APIs (REST/JSON is friendlier there).

**Webhooks** — the inverse of polling. Instead of you repeatedly asking "any updates?", the other system **calls you** at a URL you registered when an event happens (payment succeeded, PR merged). Cheaper and near-real-time. The catches: you must verify the caller (signatures), and delivery is at-least-once, so your handler must be **idempotent** and you should return quickly (do heavy work async).`,
        },
      ],
    },
    {
      id: 'sd-data-at-scale',
      title: 'The data layer at scale',
      summary: 'What breaks in the database first, and the moves that keep reads and writes fast.',
      lessons: [
        {
          id: 'sd-indexing',
          title: 'Indexing, query optimization & N+1',
          minutes: 5,
          body: `An **index** is a secondary data structure (usually a B-tree) that lets the database find rows without scanning the whole table. A query filtering on an unindexed column does a **full table scan** — fine at 1,000 rows, fatal at 100M. The interview reflex: any column you filter, join, or sort on frequently probably needs an index.

Indexes aren't free — each one slows writes (every insert/update must maintain it) and uses space, so you index deliberately, not everywhere. A **composite index** on \`(a, b)\` also serves queries on \`a\` alone (leftmost-prefix rule) but not \`b\` alone.

**Query optimization** starts with reading the query plan (\`EXPLAIN\`): is it using the index or scanning? Common wins: add the missing index, select only needed columns, avoid functions on indexed columns (they defeat the index), paginate with a cursor instead of a huge \`OFFSET\`.

The **N+1 query** problem is the one that bites everyone: you fetch N parent rows, then fire one more query *per row* to load its children — 1 + N round trips.

\`\`\`mermaid
sequenceDiagram
    participant App
    participant DB
    App->>DB: SELECT * FROM posts (N rows)
    DB-->>App: N posts
    App->>DB: SELECT author WHERE post=1
    App->>DB: SELECT author WHERE post=2
    Note over App,DB: …N more round trips
\`\`\`

Fix it with a **join** or a single batched \`WHERE id IN (…)\` — turning N+1 queries into 1 or 2. ORMs cause this silently; the fix is eager-loading.`,
        },
        {
          id: 'sd-connection-replicas',
          title: 'Connection pooling & read replicas',
          minutes: 4,
          body: `Opening a database connection is expensive (TCP + auth + session setup), and databases cap how many can be open at once. A **connection pool** keeps a set of open connections and hands them out to requests, returning them when done. Without it, a traffic spike opens thousands of connections and the database falls over. The pool size is a real tuning knob: too small and requests queue; too large and you exhaust the DB's limit.

**Read replicas** attack a different problem: read-heavy load. You keep one **primary** that takes all writes, and stream its changes to one or more **replicas** that serve reads. Reads scale horizontally by adding replicas; the primary is freed up for writes.

The catch is **replication lag** — a replica may be milliseconds-to-seconds behind, so a user who just wrote and immediately reads from a replica might not see their own change ("read-your-writes" violation). Fixes: route that user's reads to the primary briefly, or read from the primary for read-after-write paths. Name this trade-off when you propose replicas — it's the follow-up the interviewer is waiting for.`,
        },
        {
          id: 'sd-locking',
          title: 'Concurrency control: optimistic, pessimistic & distributed locks',
          minutes: 5,
          body: `When two requests touch the same row at once, you need a concurrency-control strategy.

**Pessimistic locking** — lock the row before you touch it (\`SELECT … FOR UPDATE\`); others wait. Correct and simple, but locks hurt throughput and risk **deadlocks** if two transactions grab locks in different orders. Use when contention is high and conflicts are likely (e.g. decrementing scarce inventory).

**Optimistic locking** — don't lock; assume no conflict. Read a version number with the row, and on write check the version hasn't changed (\`UPDATE … WHERE version = 7\`). If it did, someone else won — you retry. Great when conflicts are *rare*; you pay nothing in the common case.

\`\`\`mermaid
sequenceDiagram
    participant A as Request A
    participant B as Request B
    participant DB
    A->>DB: read row (version 7)
    B->>DB: read row (version 7)
    A->>DB: UPDATE … WHERE version=7  → ok, now 8
    B->>DB: UPDATE … WHERE version=7  → 0 rows! retry
\`\`\`

**Distributed locks** extend this across machines when the resource isn't a single database row (e.g. "only one worker runs this job"). Usually a key in Redis with a TTL (so a crashed holder doesn't lock forever). They're genuinely hard to get right — clock skew and lost locks cause subtle bugs — so the strong interview answer is often "avoid needing one: make the operation idempotent or partition the work so each key has a single owner."`,
        },
        {
          id: 'sd-latency-multiregion',
          title: 'Latency, tail latency & multi-region',
          minutes: 4,
          body: `**Latency** is time per request; **throughput** is requests per second. They're different axes — a system can be high-throughput and high-latency (a batch pipeline) or low-latency and low-throughput. Design targets should name both.

The number that matters in practice is not the average but the **tail**: **p99 latency** means 99% of requests are faster than this, 1% are slower. Averages hide pain — if 1% of requests take 5 seconds, plenty of users feel it, especially since one page often makes many backend calls and waits for the slowest. Optimising the tail (p99, p999) is usually where reliability work goes. A related trap: **fan-out** amplifies tail latency — call 10 services in parallel and your latency is the *slowest* of the 10, so p99s compound.

**Clock skew** — machine clocks drift apart, so "wall-clock time" can't be trusted to order events across servers. This is why distributed systems lean on logical ordering (sequence numbers, vector clocks) rather than timestamps for correctness.

**Multi-region** deployment puts your system in several geographic regions for lower user latency and survival of a whole-region outage. It's a large step up in complexity — cross-region data replication, consistency, and failover — and at SDE2 level you're expected to know *when* it's warranted (global users, strict availability SLAs) and that it's not free, not to design the whole thing unprompted.`,
        },
      ],
    },
  ],
  references: [
    { label: 'Hello Interview — System Design in a Hurry', url: 'https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction' },
    { label: 'Hello Interview — Delivery Framework', url: 'https://www.hellointerview.com/learn/system-design/in-a-hurry/delivery' },
    { label: 'The System Design Interview: What is Expected at Each Level (Evan King)', url: 'https://www.hellointerview.com/blog/the-system-design-interview-what-is-expected-at-each-level' },
    { label: 'donnemartin/system-design-primer (GitHub)', url: 'https://github.com/donnemartin/system-design-primer' },
    { label: 'Designing Data-Intensive Applications (Kleppmann)', url: 'https://www.oreilly.com/library/view/designing-data-intensive-applications/9781098119058/' },
    { label: 'ByteByteGo', url: 'https://bytebytego.com/' },
  ],
}
