import type { Course } from './types'

// AI Engineering study course. Lessons are deliberately small and plain.
// ```mermaid fences render as diagrams. This area moves fast — lessons that
// touch fast-moving specifics say so. Sources are the compiled
// swe-job-prep/05-ai-engineering reference material (Chip Huyen's AI
// Engineering, Anthropic/OpenAI engineering docs, the MCP spec, arXiv
// eval research, and practitioner surveys).

export const aiEngineering: Course = {
  key: 'ai',
  label: 'AI Engineering',
  problemAreaKey: 'ai',
  blurb:
    'Building applications on top of foundation models: the patterns (RAG, tool use, agents, context engineering), what production actually demands (evals, cost, guardrails), and an honest read on the stack. Written for a mid-level SWE who can already ship software.',
  chapters: [
    {
      id: 'ai-patterns',
      title: 'LLM app patterns',
      summary:
        'How real applications are built on top of a model you call via API — prompting, retrieval, tools, agents, and the token budget that ties them together.',
      problemIds: [
        'ai-002',
        'ai-003',
        'ai-004',
        'ai-005',
        'ai-006',
        'ai-007',
        'ai-008',
        'ai-009',
        'ai-017',
        'ai-018',
        'ai-019',
        'ai-020',
        'ai-022',
        'ai-023',
        'ai-025',
      ],
      lessons: [
        {
          id: 'ai-role',
          title: 'What "AI engineer" means',
          minutes: 4,
          body: `The term crystallised around 2023–2025 as a role distinct from "ML engineer." The clearest framing is Chip Huyen's (author of *AI Engineering*, O'Reilly 2025): **ML engineering starts with the model; AI engineering starts with the product.**

Traditional ML engineering is a slow, model-specific loop — collect and label data, train, evaluate, deploy — with the engineer deep in model internals. AI engineering starts from a product idea and uses an existing foundation model via API from day one, only reaching for data collection or custom training much later, if ever.

The practical consequences for your day-to-day:

- You do not need an ML degree or a labelled dataset to start. The barrier to *entry* is low; the barrier to doing it *well* is high, and the hard part is evaluation, not calling an API.
- Your core skills are prompting, retrieval, tool and agent design, evaluation, and inference cost/latency — not training loops or feature engineering.
- Fine-tuning is a last resort. Many teams never do it.

An interview implication worth internalising: expect **system-design-style** questions ("design an eval suite for X", "design a RAG pipeline for Y", "cut cost/latency for Z") far more than LeetCode. The rest of this course is built around those.`,
        },
        {
          id: 'ai-structured-outputs',
          title: 'Prompting and structured outputs',
          minutes: 4,
          body: `Prompting fluency is assumed, not impressive on its own. What genuinely changed since 2023-era "prompt engineering" tips is that **structured outputs became a first-class API feature, not a prompting trick.**

OpenAI shipped Structured Outputs (Aug 2024): set \`strict: true\` on a schema and the output is *guaranteed* to match your JSON Schema, enforced at generation time rather than merely requested. In practice you define the schema with Pydantic (Python) or Zod (TypeScript) instead of hand-writing JSON Schema. Anthropic's tool use works the same way — you define tools with JSON Schema input, the model emits a \`tool_use\` block, you execute and return a \`tool_result\`.

The mental model: **"call this tool with this exact shape" and "return this exact JSON shape" are now the same underlying mechanism.** Function calling and structured outputs have converged.

The design question that survives strict mode: what do you do when the *shape* is valid but the *content* is wrong — a hallucinated field value that parses fine? Strict mode removes most parse-error handling but does not remove the need to validate the values themselves.

(Fast-moving: exact strictness guarantees and grammar-engine details differ per provider and per model version — check the current docs before quoting specifics.)`,
        },
        {
          id: 'ai-rag',
          title: 'RAG: grounding a model in your data',
          minutes: 5,
          body: `Retrieval-Augmented Generation is still the default way to ground a model in private or fast-changing data. The shape is: embed your corpus offline, then at query time retrieve the most relevant chunks and feed them to the model alongside the question.

\`\`\`mermaid
sequenceDiagram
    participant User
    participant App
    participant Embed as Embedding model
    participant VDB as Vector store
    participant LLM
    User->>App: question
    App->>Embed: embed(question)
    Embed-->>App: query vector
    App->>VDB: retrieve top-k similar chunks
    VDB-->>App: relevant chunks
    App->>LLM: question + retrieved chunks
    LLM-->>User: grounded answer
\`\`\`

Two parts of the pipeline decide quality more than the choice of vector DB does:

- **Chunking.** How you split documents. There is no single confirmed "best" strategy — it is empirically tuned. Chunking plus metadata often matters more than which store you pick.
- **Contextual retrieval** (Anthropic, 2024). Prepend a short LLM-generated explanation of *where a chunk came from* before embedding it, so a chunk like "revenue grew 3% this quarter" doesn't lose the company and quarter when read out of context. This cut failed retrievals by ~49%, and ~67% when combined with reranking.

The honest interview line: the retriever is the product. Most RAG failures are retrieval failures, not generation failures.`,
        },
        {
          id: 'ai-hybrid-search',
          title: 'Hybrid search and reranking',
          minutes: 4,
          body: `Dense (vector) retrieval is good at paraphrase and semantic matches but *bad* at exact identifiers, product codes, and rare technical terms. Keyword search (BM25) is the reverse. Running both and fusing the results beats either alone.

The standard pipeline:

1. **Retrieve twice** — a BM25 keyword search and a dense vector search, each returning a ranked list.
2. **Fuse** the two lists with **Reciprocal Rank Fusion (RRF)**, the usual merge method.
3. **Rerank** the top-N fused candidates with a cross-encoder — a separate, more expensive model that re-scores each candidate against the query, run only on the small candidate set.

Chip Huyen's advice is worth repeating: **try keyword retrieval (BM25) before reaching for vector search.** Vector databases add cost and can obscure exact-keyword matches; get the cheap baseline right first, then add dense retrieval where it demonstrably helps.

A good drill answer explains *why* each retriever fails on certain query types — not just that you wired two libraries together.`,
        },
        {
          id: 'ai-rag-vs-long-context',
          title: 'RAG vs. long context',
          minutes: 5,
          body: `One of the most actively contested, fastest-moving debates in the field — treat any specific number here as fast-moving and re-verify before quoting.

The tension: with million-token context windows, why retrieve at all — why not stuff everything in?

- A Jan 2025 arXiv study found long-context prompting often *outperforms* RAG on QA benchmarks, especially encyclopedic questions; RAG kept an edge on dialogue and general queries.
- **Cost is the counterweight.** One 2026 benchmark reported long context scoring higher on correctness at roughly *26x* the per-query token cost of RAG. (Secondary source — plausible given per-token pricing, not independently confirmed.)
- **Prompt caching changes the math**, making repeated long-context calls much cheaper on the repeated prefix — which undercuts the older "long context is always too expensive" framing.

A recurring practitioner metaphor: **RAG is the filing cabinet, long context is the bigger whiteboard.** Use RAG when data is large, frequently updated, or you need per-document citations and access control. Use long context for cross-document reasoning over a bounded, static corpus you can afford. Many systems do both — retrieve a broad candidate set, then reason over a larger-than-chunk window of it.

The strong interview answer is not "RAG is dead" or "RAG always wins." It is: name the cost/accuracy/freshness trade-off, and say what you'd actually benchmark on your own eval set before deciding.`,
        },
        {
          id: 'ai-agents-vs-workflows',
          title: 'Agents vs. workflows',
          minutes: 4,
          body: `Anthropic's Dec 2024 "Building effective agents" drew the distinction the field still uses:

- **Workflows** — LLMs and tools orchestrated through *predefined code paths*. You write the control flow.
- **Agents** — the LLM *dynamically directs its own process and tool use*, deciding the next step from what it observes. By late 2025 Anthropic's working definition compressed to: **an LLM autonomously using tools in a loop.**

The named workflow patterns (still the standard vocabulary):

- **Prompt chaining** — sequential steps, each call consumes the prior output, with programmatic gates between them.
- **Routing** — classify the input, dispatch to a specialised prompt or model (cheap model for easy, capable model for hard).
- **Parallelization** — *sectioning* (independent subtasks in parallel) or *voting* (same task run several times for confidence).
- **Orchestrator-workers** — a central LLM decomposes a task *at runtime* and delegates, because the subtasks can't be predicted in advance (a coding agent doesn't know how many files it'll touch).
- **Evaluator-optimizer** — one LLM generates, another critiques, in a loop.

Anthropic's explicit guidance: **find the simplest solution first.** Often a single optimised call with retrieval is enough. Reach for agents only when the task is open-ended, the number of steps can't be hardcoded, and you can tolerate the latency, cost, and error-compounding of autonomous operation.`,
        },
        {
          id: 'ai-agent-loop',
          title: 'The agent loop and its interface',
          minutes: 4,
          body: `The classic agent loop is **plan → act → observe → adjust → repeat** until the task is done or the agent needs to check in.

\`\`\`mermaid
sequenceDiagram
    participant Agent
    participant Tools
    Agent->>Agent: plan next step
    Agent->>Tools: call tool (act)
    Tools-->>Agent: result (observe)
    Agent->>Agent: adjust plan
    Note over Agent: repeat until done or checkpoint
\`\`\`

Two things separate agents that ship from agents that thrash:

- **The agent-computer interface (ACI).** Anthropic's three principles: *simplicity*, *transparency* (show planning steps explicitly), and treating tool definitions with the same design care as a human-facing API — minimal overlap between tools, unambiguous descriptions, and error-prevention baked into the tool. A documented real mistake: relative filepaths broke once the agent changed directories; switching to always-absolute paths fixed it.
- **Stopping conditions.** Autonomous loops don't reliably self-terminate. Set explicit max-iteration and cost caps rather than trusting the loop to stop itself.

For interviews this maps onto ReAct-style "reason + act" loops if you need the academic vocabulary, though Anthropic describes the same mechanism in plainer language.`,
        },
        {
          id: 'ai-single-vs-multi-agent',
          title: 'Single vs. multi-agent',
          minutes: 4,
          body: `The headline number: Anthropic's own Research feature uses a lead agent that spawns parallel subagents, each with an isolated context window returning only a condensed 1,000–2,000 token summary. On an internal eval this multi-agent setup beat a single agent by **90.2%**, at roughly **15x** the token cost of a normal chat.

That 15x is the whole trade. Multi-agent **wins** for breadth-first, parallelisable exploration; it **loses** when the task is narrow, latency-sensitive, cost-constrained, or has tightly interdependent subtasks.

A 2026 Anthropic/Claude post names five coordination patterns and when to use each:

- **generator-verifier** — quality-critical output with explicit criteria.
- **orchestrator-subagent** — clear decomposition into bounded subtasks.
- **agent teams** — parallel, independent, long-running subtasks.
- **message bus** — event-driven pipelines and growing agent ecosystems.
- **shared-state** — collaborative work building on each other's findings.

Their recommendation: **start with the simplest pattern and evolve based on where it struggles** — never pick one because it "sounds sophisticated." And say the quiet part if asked to judge the hype — Anthropic's own line is that *"true multi-agent systems are still in their infancy."* That's a direct quote, not your opinion.`,
        },
        {
          id: 'ai-hitl',
          title: 'Human-in-the-loop checkpoints',
          minutes: 3,
          body: `Agents must operate autonomously — that's the point — but humans should keep control over *how* goals are pursued, especially before high-stakes or irreversible actions.

The design lever is **irreversibility and blast radius**, not action type:

\`\`\`mermaid
sequenceDiagram
    participant Agent
    participant Policy as Approval gate
    participant Human
    Agent->>Policy: proposed action
    Policy-->>Agent: read-only / reversible -> run freely
    Policy->>Human: destructive / external -> request approval
    Human-->>Agent: approve or reject
    Note over Agent: max-iteration + cost cap always on
\`\`\`

Concretely: read-only or easily reversible actions (searching, reading files) run without asking. Destructive or externally visible actions (sending an email, deleting data, spending money) require explicit approval. And regardless of action, always attach a stopping condition — a max-iteration count or cost cap — so a confused loop can't run away.

This is a design principle, not a library. You build the checkpoints; the model doesn't provide them.`,
        },
        {
          id: 'ai-mcp',
          title: 'Model Context Protocol (MCP)',
          minutes: 4,
          body: `MCP is an open standard introduced by Anthropic in Nov 2024 for connecting AI applications to external tools, data, and workflows through one client-server protocol — described as "a USB-C port for AI applications."

The distinction that gets tested: **tool use is the *mechanism*** (the model emits a structured call, you execute it). **MCP standardises the *transport and discovery* layer** — instead of writing a bespoke integration per tool per app, a server exposes its tools/resources/prompts once, and any MCP-compatible client (Claude, ChatGPT, VS Code, Cursor, and others) can connect to it.

So the payoff is **combinatorial**: it grows with N clients × M tools, not with either alone. For a true 1:1 integration — one agent, one internal API — the protocol overhead may not pay for itself yet; the counter-argument is optionality for future clients.

Fast-moving governance note: on Dec 9, 2025 Anthropic donated MCP to an Agentic AI Foundation under the Linux Foundation (the same track as Kubernetes and PyTorch), with OpenAI, AWS, Google, Microsoft, and others as members. The governance transfer is well-corroborated; specific adoption *percentages* vary wildly by source, so don't quote one as settled — say "adoption is real and accelerating, governance moved to the Linux Foundation in Dec 2025, but survey numbers vary by methodology."`,
        },
        {
          id: 'ai-context-engineering',
          title: 'Context engineering',
          minutes: 5,
          body: `The single most important 2025 terminology shift. Anthropic's definition (Sep 29, 2025): *the set of strategies for curating and maintaining the optimal set of tokens during inference* — everything that lands in the window, not just the prompt.

Prompt engineering is about *writing* one instruction well. Context engineering treats the **entire** context window — system prompt, tools, MCP-supplied data, retrieved documents, message history — as a finite, degrading resource you curate *iteratively*, at every turn of an agent loop.

Why it matters: **context rot.** As token count grows, recall accuracy degrades *even well within* the advertised context limit. Transformer attention is O(n²) in pairwise token relationships and training skews toward shorter sequences, so models have an effective "attention budget" that depletes — a gradient, not a hard cliff. The guiding principle, verbatim: *"finding the smallest possible set of high-signal tokens that maximise the likelihood of some desired outcome."*

Concrete techniques for long-horizon tasks:

- **Compaction** — near the limit, summarise the conversation and restart from the summary plus recently touched state. The hard part is choosing what to keep (decisions, open bugs) vs. discard (stale tool output).
- **Structured note-taking** — the agent writes persistent notes outside the window (a \`NOTES.md\`, a to-do list) and reads them back after a reset.
- **Sub-agents** — offload deep exploration to a clean context window that returns a condensed summary.
- **Just-in-time retrieval** — hand the agent lightweight references (file paths, queries) and let it load data on demand, like a human using an index instead of memorising everything.

One-liner: prompt engineering optimises the words in one instruction; context engineering curates a finite, degrading window at every turn, because "just add more information" loses past a point.`,
        },
      ],
    },
    {
      id: 'ai-production',
      title: 'Production',
      summary:
        'What separates a demo from a system people trust: evaluation, observability, guardrails, and the cost/latency levers that make it affordable.',
      problemIds: ['ai-001', 'ai-010', 'ai-011', 'ai-012', 'ai-013', 'ai-014', 'ai-021', 'ai-024'],
      lessons: [
        {
          id: 'ai-evals',
          title: 'Evals: the part everyone calls the hard part',
          minutes: 5,
          body: `Every primary source consulted names evaluation as *the* hard part of AI engineering. Chip Huyen, asked directly: *"there is no single, simple solution to evaluation... a combination of methods is required... Do not skip the hard and manual work. Manual data inspection is critical and still offers the highest ratio of value."*

Two axes you'll be asked to design across:

- **Offline evaluation** — run before deploy against a fixed set: golden examples, adversarial cases, and regression cases harvested from past failures. Cheap to iterate, but only as good as your dataset's coverage of real usage.
- **Online evaluation** — measure against live traffic: user signals (thumbs up/down, edits, re-asks), sampled human review, and automated production metrics. Necessary because offline sets go stale and can't anticipate every real input.

Neither substitutes for direct human inspection of real outputs, and it's not "pick one" — you need both plus the manual work.

A concrete design worth having ready: for a RAG chatbot, **evaluate retrieval and generation separately** — retrieval metrics (recall@k, MRR) tell you if the right chunks came back; generation metrics (faithfulness, relevance) tell you if the model used them well. Conflating the two hides which half is broken.`,
        },
        {
          id: 'ai-llm-as-judge',
          title: 'LLM-as-judge and its pitfalls',
          minutes: 5,
          body: `Using an LLM to score another LLM's output is now standard — human review of every output doesn't scale. But 2024–2025 research documents specific, reproducible failure modes, so treat judge scores as a measurement instrument that needs calibrating, not as ground truth.

Documented biases (all paper-backed):

- **Position, verbosity, self-preference** — judges favour a position, longer answers, or outputs resembling their own style.
- **Recency and provenance** — judges systematically favour "new" over "old" responses, and rate the *same* content differently depending on whether they're told the source is Expert > Human > LLM > Unknown.
- **Fragility** — a judge can flip its verdict on repeated evaluation of the same case, and cosmetic prompt edits or rubric wording can swing outcomes.

\`\`\`mermaid
sequenceDiagram
    participant Cand as Candidate output
    participant Judge as LLM judge
    participant Human as Human sample
    Cand->>Judge: pairwise, order randomized, provenance blinded
    Judge-->>Human: judge scores
    Human->>Human: check judge-vs-human agreement
    Note over Human: trust at scale only after agreement holds
\`\`\`

Mitigations that follow directly from the research: prefer **pairwise** comparison over pointwise scoring; **randomise order and blind provenance** before judging; **validate judge-vs-human agreement** on a labelled sample before trusting it at scale; and **re-run the judge on identical inputs** to measure its own variance before shipping it as a gate.`,
        },
        {
          id: 'ai-observability',
          title: 'Observability and tracing',
          minutes: 4,
          body: `LLM calls need trace-level visibility that traditional APM doesn't give you: not just latency and error rate, but the full prompt and context sent, the retrieved chunks, every tool call with its arguments and results, and token usage and cost per step.

Why it matters concretely — when a user reports "the agent gave a wrong answer," a trace lets you decompose that into distinct failure categories instead of treating the agent as a black box:

- **Retrieval problem** — the right context never came back.
- **Generation problem** — good context came back, the model reasoned over it badly.
- **Tool-use problem** — a tool returned bad data or was called wrong.

Those need completely different fixes, and you can't tell them apart without the trace.

The tooling category is genuinely new relative to APM. Leaders cited across independent comparisons (a fragmented, fast-moving space — treat any "who's best" ranking as opinion): **LangSmith** (coupled to LangChain/LangGraph), **Arize Phoenix** (framework-agnostic, open-source layer), **Langfuse** and **Comet Opik** (open-source, self-hostable), **Braintrust** (evaluation-first), and **Datadog** (if you want it correlated with existing infra).`,
        },
        {
          id: 'ai-guardrails',
          title: 'Guardrails and safety',
          minutes: 4,
          body: `Guardrails come in layers, and the interview-relevant insight is architectural, not a list of products.

- **Provider moderation** (OpenAI's Moderation API, Anthropic's classifiers) is the baseline layer for clearly disallowed content — not a substitute for application-specific checks.
- **Approval gates** for high-stakes actions, grounded in irreversibility and blast radius (see the human-in-the-loop lesson).
- **Open-source libraries** (Guardrails AI, NVIDIA NeMo Guardrails) for input/output validation, PII redaction, jailbreak detection. (Fast-moving — confirm current maturity before quoting specifics.)

The one primary-sourced architectural recommendation worth stating precisely: **a separate, dedicated model call that screens a response tends to outperform having the same call both generate *and* self-check.** This is Anthropic's parallelization/sectioning pattern applied to safety — one model answers, another independent call screens it.

So for a coding agent with shell access, the concrete guardrails are: sandboxing, command allow/deny lists, approval gates on destructive commands, and a *separate* screening call over the output — not asking the generating call to also police itself.`,
        },
        {
          id: 'ai-prompt-caching',
          title: 'Cost and latency: prompt caching',
          minutes: 4,
          body: `Prompt caching is the single biggest cost lever documented with hard numbers, because it charges you far less for the *repeated prefix* of your calls.

- **OpenAI** — automatic on gpt-4o and newer, no code changes, no extra fee: up to **80% latency reduction** and up to **90% input-token cost reduction** on cache hits.
- **Anthropic** — explicit opt-in via \`cache_control\` breakpoints marking the end of a cacheable prefix. Writing a 5-minute cache costs ~1.25x base input price; reading from cache costs ~0.1x. (Verify exact multipliers against current pricing — they change.)

The catch that gets tested: **caching only helps if the prefix is byte-identical across calls.** If your retrieved RAG context changes every turn and sits *before* the cache breakpoint, you get zero cache hits. So ordering matters — put stable content (system prompt, tool definitions) first, variable content (the retrieved context, the user turn) last.

This is also why "long context is too expensive" arguments from 2023 are weaker now: caching makes the repeated long prefix cheap. It matters most for long, repeated system prompts and RAG pipelines that re-send the same context across turns.`,
        },
        {
          id: 'ai-routing-batching',
          title: 'Cost and latency: routing and batching',
          minutes: 3,
          body: `Two more proven cost levers beyond caching:

- **Model routing.** Anthropic's own named "Routing" workflow pattern: classify each request as easy or hard and send easy ones to a small, cheap, fast model and hard ones to a frontier model. The classifier can be a small model call, a heuristic, or embeddings + nearest-neighbour to labelled examples. Evaluate the routing itself by tracking accuracy split *by route* and periodically sampling "easy" misroutes that actually needed the frontier model. This is also the core pitch of LLM gateways (see the stack chapter).

- **Batching.** Batch APIs accept asynchronous, latency-tolerant request batches at a reduced per-token cost, for non-interactive workloads — bulk classification, offline eval runs, dataset generation. (The mechanism is well-known; confirm current discount rates before quoting.)

- **Distillation** sits further downstream — train a smaller model to imitate a larger one on your specific task distribution, once you have production data and stable evals. Not something to reach for before you have solid evals and a stable task definition.`,
        },
        {
          id: 'ai-fine-tune-vs-prompt',
          title: 'Fine-tune vs. prompt: a decision order',
          minutes: 4,
          body: `Chip Huyen's guidance is unambiguous: fine-tuning is *"often a last resort and many teams never do it."* Two reasons: the complexity of hosting and maintaining a fine-tuned model, and the fact that rapid base-model improvement erodes a fine-tuned model's advantage — you can end up locked to a checkpoint that's worse than the next base release.

OpenAI's stated order of operations reinforces it: **get evaluations in place first**, and only invest in fine-tuning once you can measure whether it actually helps. You cannot rationally decide to fine-tune without the eval infrastructure already built.

The decision order that follows:

1. **Prompting** — with good structured outputs and few-shot examples. Exhaust this first.
2. **RAG / retrieval** — when the model needs facts it doesn't have, especially private, large, or changing data.
3. **Fine-tuning** — only when prompting plus retrieval demonstrably can't reach the needed behaviour, format, or latency; you have evals to prove it; and you've accepted the cost of owning a model artifact you'll re-train as base models improve.

Where fine-tuning *does* start to make sense: high volume, a fixed taxonomy, and latency/cost sensitivity (e.g. classifying 500K tickets/month into 40 categories) — but even then the memo should first prove prompting-only can't hit the bar.`,
        },
        {
          id: 'ai-prompt-versioning',
          title: 'Shipping prompt changes safely',
          minutes: 3,
          body: `Teams that ship prompt changes weekly need to know a change actually improved outcomes before rolling it out fully. The pattern combines the two eval modes from earlier:

1. **Offline eval-set regression test as a cheap pre-filter.** Run the new prompt against your golden and regression sets first to catch obvious regressions *before* spending any live traffic.
2. **Online A/B test as the real gate.** Offline sets can't capture the full production input distribution, so the actual rollout decision is gated on a live metric — pick one that reflects real value (task success rate, edit rate, thumbs-down rate), not just a proxy.

This echoes Huyen's "no single solution to evaluation" point: the offline set is necessary but not sufficient, and the online signal is where you make the call. Treat prompts like code — version them, test them, and gate their release.`,
        },
      ],
    },
    {
      id: 'ai-stack',
      title: 'The stack',
      summary:
        'Frameworks, vector DBs, eval tools, and gateways — separating the primary-sourced consensus from SEO-driven hype, which is itself the skill being tested.',
      problemIds: ['ai-015', 'ai-016'],
      lessons: [
        {
          id: 'ai-frameworks',
          title: 'Frameworks: the honest LangChain take',
          minutes: 5,
          body: `LangChain is the original, broadest LLM orchestration framework; LangGraph is its graph-based agent layer for more explicit control flow. The interview-worthy answer holds two true things at once rather than picking a side.

**The primary-sourced caution against frameworks generally** — Anthropic's own "Building effective agents": *"many patterns can be implemented in a few lines of code... [frameworks] often create extra layers of abstraction that can obscure the underlying prompts and responses, making them harder to debug... If you do use a framework, ensure you understand the underlying code."* Their top recommendation is to **start with direct API calls.**

**Practitioner sentiment on LangChain, 2025–2026** (secondary, but genuinely convergent across independent authors): recurring "it's just a wrapper" complaints, dependency bloat, frequent breaking API changes, and abstraction that slows debugging. One representative framing: the question "should I use LangChain" went from "obvious yes" to "it depends, and most of the time, no."

**Where it still gets recommended:** teams already in the ecosystem (LangSmith tracing pairs natively), and genuinely complex explicit-graph control flow where LangGraph's primitives save real work.

The strong answer to "should this team use LangChain": for a 3-person startup prototyping with no existing investment, probably not — start with direct API calls. For a 40-engineer platform team standardising across a dozen teams, the case for a shared framework (consistency, tracing, onboarding) is real. Hold both, don't treat it as binary. Alternatives to know: direct SDKs, Pydantic AI / Instructor / DSPy (focused libraries), CrewAI / AutoGen / OpenAI Agents SDK / Claude Agent SDK (multi-agent oriented) — all fast-moving; read their own docs, not comparison blogs.`,
        },
        {
          id: 'ai-vector-dbs',
          title: 'Vector databases',
          minutes: 4,
          body: `The landscape: **Pinecone** (managed, historical mindshare leader), **Weaviate** (schema flexibility, native hybrid search), **Qdrant** (Rust, performance-focused, open-source), **Chroma** (developer experience, common in prototyping), **Milvus** (large scale), and **pgvector** (a Postgres extension, not a standalone DB).

The one claim that survives scrutiny because it recurs independently *and* matches sound engineering: **pgvector is displacing standalone vector DBs at small-to-mid scale (roughly under 10M vectors).** If you already run Postgres, adding a vector column avoids standing up new infrastructure, and pgvector has closed much of the performance gap at moderate scale.

So for a 2M-document RAG system already on Postgres, the defensible answer is **add pgvector** — 2M is comfortably inside the cited sweet spot — while naming the ~10M threshold as a heuristic to revisit with your own benchmark, not gospel.

**Where dedicated vector DBs still win:** very large scale (tens of millions+), fully managed ops with no team ownership (Pinecone's pitch), or native hybrid-search/schema features (Weaviate's pitch).

Every specific number in this space — QPS, recall %, pricing, market-size projections — comes from vendor or comparison-blog content. State the *shape* of the trade-off (managed vs. self-hosted vs. Postgres-native) confidently; don't quote a specific benchmark number without re-verifying it against your own workload.`,
        },
        {
          id: 'ai-eval-and-gateway-tools',
          title: 'Eval tools and gateways',
          minutes: 4,
          body: `**Eval tools** are a genuinely fragmented category, and that fragmentation is the honest state. Names: RAGAS (RAG-specific metrics), DeepEval (broader open-source), LangSmith (coupled to LangChain), Braintrust (evaluation-first commercial), Arize Phoenix (open-source, framework-agnostic), Langfuse (open-source, self-hostable), OpenAI Evals (first-party). The useful answer isn't the list — it's the **taxonomy**: open-source vs. commercial, trajectory-level (did the agent take a good path) vs. final-output-only, offline experiment-running vs. online monitoring, and framework-coupled vs. framework-agnostic. That mental model is sound regardless of which blog you read.

**LLM gateways / routers** give you one endpoint routing to many providers, with failover, caching, and centralised cost tracking — useful the moment you call more than one provider or want to swap providers without rewriting call sites. **LiteLLM** (open-source, self-hosted, no per-token markup) is the most consistently recommended for teams willing to operate it; **OpenRouter** (managed, zero-setup); **Portkey** (managed, enterprise governance). A directional (secondary-sourced) trend worth naming: gateways are evolving from "a 2024 convenience" toward "the control point of the AI stack" — cost governance, guardrails, and compliance sitting at the gateway layer rather than scattered through application code.`,
        },
        {
          id: 'ai-stack-judgment',
          title: 'What to actually say about "the stack"',
          minutes: 3,
          body: `Most search results for "best X in 2026" are SEO or vendor content with suspiciously precise, unverifiable numbers — dozens of near-identical posts. The strongest interview answer is not "here are the best tools" but a demonstration that you can tell signal from hype:

1. **Name the primary-sourced consensus.** Start with direct API calls before a framework (Anthropic's own advice). Prompt caching and model routing are proven cost levers with hard numbers from the providers themselves. RAG vs. long context is a real, actively-researched trade-off, not settled. LLM-as-judge has documented, paper-backed bias problems you design around.

2. **Be explicit about what's hype-adjacent.** Most "best vector DB / best gateway / best eval tool in 2026" rankings are vendor or SEO content — a good engineer picks tools by benchmarking against their own workload, not a blog's ranking.

3. **Show you can tell the difference.** That judgment — knowing which claims have primary backing and which are marketing — is the actual thing being tested, more than any specific tool name.

This whole area moves fast. Re-check anything version- or number-specific within a few months of relying on it.`,
        },
      ],
    },
  ],
  references: [
    { label: 'Chip Huyen, AI Engineering (O\u2019Reilly, 2025)', url: 'https://www.oreilly.com/library/view/ai-engineering/9781098166298/' },
    { label: 'The Pragmatic Engineer \u2014 AI Engineering with Chip Huyen', url: 'https://newsletter.pragmaticengineer.com/p/ai-engineering-with-chip-huyen' },
    { label: 'Anthropic \u2014 Building effective agents', url: 'https://www.anthropic.com/engineering/building-effective-agents' },
    { label: 'Anthropic \u2014 Effective context engineering for AI agents', url: 'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents' },
    { label: 'Anthropic \u2014 Introducing Contextual Retrieval', url: 'https://www.anthropic.com/engineering/contextual-retrieval' },
    { label: 'Model Context Protocol \u2014 official docs', url: 'https://modelcontextprotocol.io/' },
    { label: 'OpenAI \u2014 Introducing Structured Outputs in the API', url: 'https://openai.com/index/introducing-structured-outputs-in-the-api' },
  ],
}
