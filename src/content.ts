export const ABOUT_LEDE = 'engineer at amazon. i build with ai, not just for it.'

export const ABOUT: string[] = [
  "I'm Mihir. I studied Mathematics and Computing at IIT Delhi and I write software at Amazon in Bengaluru, on the team that keeps ordering and refunds running for Global Stores.",
  "Most of my working day now runs through AI. I plan with it, I let coding agents take the first pass and then review like an editor, and I build the plumbing that lets agents work on real systems: production logs wired into diagnosis agents, tool servers over internal services, context written so a model can act on it instead of guessing. That is how my org shipped its first fully AI-led rollout, and it is how I get more done in a week than I used to in a month. I think this is simply how software gets built from here, and I would rather be early to it.",
  'Before Amazon I was the first engineer at an ad-tech startup, which taught me to ship fast and own the whole stack. On the side I build Helio, a personal assistant I use every day. It lives on Telegram and keeps working when my connection does not.',
  'Off the keyboard: FIFA, which I take too seriously; football on real grass whenever Bengaluru weather allows; and cooking, the one hobby where I still follow instructions.',
]

export const FOCUS: string[] = [
  'move critical services without anyone noticing',
  'put ai agents to work on real production problems',
  'turn days of manual setup into a self-serve product',
  'build tools that keep working while i sleep',
]

export const ACCOLADES: string[] = [
  'KVPY 2018 · AIR 233',
  'NTSE 2017 · national scholar, top 1000 of a million',
]

export type Job = { company: string; role: string; when: string; bullets: string[] }
export const EXPERIENCE: Job[] = [
  {
    company: 'Amazon',
    role: 'Software Engineer, Global Stores',
    when: 'Aug 2024 — now',
    bullets: [
      'Moved 19 core ordering and refund services onto new AWS infrastructure with zero downtime by sequencing the migration and keeping upstream and downstream systems in sync.',
      'Led a team of 8 over 10 months through infrastructure setup, regression testing, migration and post-migration validation.',
      'Cut risk-mitigation time by 97% by connecting legacy monolith logs to automated diagnosis agents.',
      "Delivered the organization's first fully AI-led end-to-end rollout by redesigning the infrastructure behind customer order updates.",
      'Resolved 70+ high-severity and 130+ production issues, unblocked 11 partner teams and owned service health for 3 ordering services.',
    ],
  },
  {
    company: 'YOptima',
    role: 'Founding Engineer, CEO Office',
    when: 'Jul 2023 — Aug 2024',
    bullets: [
      'Cut client onboarding from days to minutes by building nYO, a self-serve campaign automation platform for YouTube and DV360.',
      'Reduced overspend-alert latency from 2 hours to 10 minutes, blocking wasted ad spend, with real-time monitoring.',
      'Cut live ad-placement variance by 40% by fine-tuning a language model on channel metadata.',
    ],
  },
  {
    company: 'E-Ring',
    role: 'Software Engineer Intern (PPO)',
    when: 'Jun — Jul 2022',
    bullets: ['Cut query time by 30% by restructuring the database behind a US land-tax Mass Appraisal System.'],
  },
  {
    company: 'Early startups',
    role: 'Materate · Pricing · StoryProcess',
    when: '2020 — 2023',
    bullets: [
      'Gave Materate its first dashboards with end-to-end web apps and authenticated student and teacher views.',
      'Enabled StoryProcess to produce elevator pitches in bulk with an engine that turned speech into SVG animation.',
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
    name: 'Helio',
    when: '2025 — now',
    blurb:
      'A personal assistant I use every day. It lives on Telegram, thinks on a server, and keeps working when the connection drops.',
    link: 'https://github.com/Mihirokte',
  },
  {
    name: 'Group theory vs the Rubik\u2019s Cube',
    when: 'B.Tech thesis',
    blurb:
      'My thesis turned the cube into a group theory problem: states as permutations, moves as a graph, then a search that solves any scramble in under two seconds.',
  },
  {
    name: 'Speech-to-animation engine',
    when: 'StoryProcess',
    blurb: 'Talk into a mic, get an animated pitch out. Built so a small team could make elevator pitches in bulk.',
  },
]

export const CONTACT = [
  { label: 'email', href: 'mailto:mihirokte77@gmail.com', text: 'mihirokte77@gmail.com' },
  { label: 'linkedin', href: 'https://linkedin.com/in/mihirokte', text: 'linkedin.com/in/mihirokte' },
  { label: 'github', href: 'https://github.com/Mihirokte', text: 'github.com/Mihirokte' },
]
