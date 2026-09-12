export const ABOUT_LEDE = "hi, i'm mihir."

export const ABOUT: string[] = [
  "I'm a software engineer at Amazon in Bengaluru. My team owns the services that take and refund orders for Amazon's Global Stores, so most of my job is keeping systems a lot of people depend on running quietly, and changing them without anyone noticing.",
  "Over the last year the way I work has changed more than the work itself. I use AI for most of the day: to plan, to write the first draft of code, to read logs I would never get through on my own. The chat window is the least interesting part. Things get interesting when a model has real access to a system. At work I connected our production logs to agents that diagnose problems, and later ran the first release in my org where an agent did the engineering end to end and people reviewed it. I think that is where software is going, and I want to be good at it early.",
  'Before Amazon I was the first engineer at a small ad-tech startup. I built their product from nothing, which is the fastest way I know to learn how much of software is everything around the code.',
  "On the side I'm building Helio, a personal assistant that lives in Telegram. I made it because I wanted one that keeps working when my phone loses signal, and because building an assistant is the best way to find out what agents can and cannot do yet.",
  'Away from work: football, on the pitch and on FIFA, and cooking. I studied Mathematics and Computing at IIT Delhi, and I still like a problem with a clean answer.',
]

export const FOCUS: string[] = [
  'migrations nobody notices',
  'agents that work on production systems',
  'products that replace manual setup',
  'the unglamorous reliability work in between',
]

export const ACCOLADES: string[] = ['kvpy 2018 · air 233', 'ntse 2017 · national scholar']

export type Job = { company: string; role: string; when: string; bullets: string[] }
export const EXPERIENCE: Job[] = [
  {
    company: 'Amazon',
    role: 'Software Engineer, Global Stores',
    when: 'Aug 2024 — now',
    bullets: [
      'Moved 19 ordering and refund services onto new infrastructure with no downtime, leading a team of 8 through the ten-month migration.',
      'Connected legacy service logs to diagnosis agents, which cut the time to assess a risky change by 97%.',
      "Ran my org's first release where an AI agent did the engineering end to end, on the system that updates customer orders.",
      'Owned the health of three ordering services and handled 200+ production incidents along the way.',
    ],
  },
  {
    company: 'YOptima',
    role: 'Founding Engineer, CEO Office',
    when: 'Jul 2023 — Aug 2024',
    bullets: [
      'Built nYO, a self-serve platform for YouTube and DV360 ad campaigns. Client onboarding went from days to minutes.',
      'Rebuilt overspend alerting on real-time signals: alerts in 10 minutes instead of 2 hours.',
      'Fine-tuned Llama-2 on channel metadata to match ads to inventory. Live placement variance dropped 40%.',
    ],
  },
  {
    company: 'E-Ring',
    role: 'Software Engineer Intern (PPO)',
    when: 'Jun — Jul 2022',
    bullets: ['Restructured the database behind a US property-tax appraisal system. Queries got 30% faster.'],
  },
  {
    company: 'Early startups',
    role: 'Materate · Pricing · StoryProcess',
    when: '2020 — 2023',
    bullets: [
      "Built Materate's first dashboards and web app, and a tool for StoryProcess that turned a spoken pitch into a short animation.",
    ],
  },
]

export type SkillGroup = { label: string; items: string[] }
export const SKILLS: SkillGroup[] = [
  { label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C/C++', 'Java'] },
  { label: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'Flask', 'FastAPI', 'REST APIs'] },
  { label: 'Cloud', items: ['AWS', 'GCP', 'Docker', 'CI/CD', 'GitHub Actions'] },
  { label: 'AI & Agents', items: ['LangChain', 'LangGraph', 'MCP', 'Context engineering', 'Fine-tuning', 'Claude Code', 'Cursor', 'Kiro'] },
]

/** Technical skill set only — rides the belt as text. */
export const BELT_WORDS: string[] = [...SKILLS.flatMap((g) => g.items), 'Llama-2', 'ASP.NET', 'C#', 'LINQ', 'GAP', 'MATLAB']

export type Project = { name: string; when: string; blurb: string; link?: string }
export const PROJECTS: Project[] = [
  {
    name: 'Prep',
    when: '2026 — now',
    blurb:
      'My personal problem gym. Coding problems run and get graded right here in the browser — no accounts, no servers — and it remembers where I left off.',
    link: 'prep/',
  },
  {
    name: 'Helio',
    when: '2025 — now',
    blurb:
      'A personal assistant that lives in Telegram, with the brain on a server so it keeps working when my phone has no signal. I use it every day.',
    link: 'https://github.com/Mihirokte',
  },
  {
    name: 'Group theory vs the Rubik\u2019s Cube',
    when: 'B.Tech thesis',
    blurb:
      'My undergraduate thesis. Model the cube as a permutation group, treat moves as edges in a graph, and search. It solves any scramble in under two seconds.',
  },
  {
    name: 'Speech-to-animation',
    when: 'StoryProcess',
    blurb: 'Speak a pitch into a microphone and get a short animation back. Built so a small team could produce pitches in bulk.',
  },
]

export const CONTACT = [
  { label: 'email', href: 'mailto:mihirokte77@gmail.com', text: 'mihirokte77@gmail.com' },
  { label: 'linkedin', href: 'https://linkedin.com/in/mihirokte', text: 'linkedin.com/in/mihirokte' },
  { label: 'github', href: 'https://github.com/Mihirokte', text: 'github.com/Mihirokte' },
]
