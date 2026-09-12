export const NAME = 'MIHIR'
export const TAGLINE = 'Software engineer at Amazon. Mathematician by training, builder by habit.'

export const LEFT_WORDS = ['build', 'scale', 'migrate', 'ship']
export const RIGHT_WORDS = ['python', 'react', 'aws', 'agents']

export const MARQUEE_TEXT =
  'AMAZON \u00B7 IIT DELHI \u00B7 PYTHON \u00B7 TYPESCRIPT \u00B7 AWS \u00B7 AGENTS \u00B7 BENGALURU \u00B7 MIHIR \u00B7 '

export const ABOUT = [
  'I studied Mathematics and Computing at IIT Delhi and now write software in Bengaluru.',
  'I like systems that stay calm under load and tools that work while I sleep. When the city gets loud, I think next to water.',
]

export type Job = { company: string; role: string; when: string; bullets: string[] }
export const EXPERIENCE: Job[] = [
  {
    company: 'Amazon',
    role: 'Software Engineer, Global Stores',
    when: 'Aug 2024 — now',
    bullets: [
      'Moved 19 core ordering and refund services onto new AWS infrastructure with zero downtime by sequencing the migration and keeping upstream and downstream systems in sync.',
      'Led a team of 8 over 10 months through infrastructure setup, regression testing, migration, and post-migration validation.',
      'Cut risk-mitigation time by 97% by connecting legacy monolith logs to automated diagnosis agents.',
      "Delivered the organization's first fully AI-led end-to-end rollout by redesigning the infrastructure behind customer order updates.",
      'Resolved 70+ high-severity and 130+ production issues, unblocked 11 partner teams, and owned service health for 3 ordering services.',
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
    bullets: [
      'Cut query time by 30% by restructuring the database behind a US land-tax Mass Appraisal System.',
    ],
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
  { label: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'Flask', 'REST APIs'] },
  { label: 'Cloud', items: ['AWS', 'GCP', 'Docker', 'CI/CD', 'GitHub Actions'] },
  { label: 'AI & Agents', items: ['LangChain', 'MCP', 'Context engineering', 'Claude Code', 'Cursor', 'Kiro'] },
]

/** Every skill plus every other keyword on the page — rides the belt as text. */
export const BELT_WORDS: string[] = Array.from(
  new Set([
    ...SKILLS.flatMap((g) => g.items),
    ...LEFT_WORDS,
    ...RIGHT_WORDS,
    'Amazon', 'IIT Delhi', 'Bengaluru', 'agents', 'zero downtime', 'LLMs', 'mathematics',
  ].map((w) => w.toLowerCase())),
)

export type Project = { name: string; when: string; blurb: string; link?: string }
export const PROJECTS: Project[] = [
  {
    name: 'Helio',
    when: '2025 — now',
    blurb:
      'A personal assistant with a split brain: it answers on Telegram and keeps working when connectivity drops. Hardened for daily use with 168 automated tests.',
    link: 'https://github.com/Mihirokte',
  },
  {
    name: 'Group theory vs the Rubik\u2019s Cube',
    when: 'B.Tech thesis',
    blurb:
      'Modeled cube states as permutation groups and searched them as a graph. Solutions under twenty moves, in under two seconds.',
  },
  {
    name: 'Speech-to-animation engine',
    when: 'StoryProcess',
    blurb: 'Talked into a mic, got an animated pitch out. Made elevator pitches in bulk.',
  },
]

export const ACHIEVEMENTS = [
  'KVPY 2018 — AIR 233 in the national scholarship examination by DST, Govt. of India.',
  'NTSE 2017 — National Talent Search scholar, top-1000 among 1M+ candidates.',
]

export const CONTACT = [
  { label: 'email', href: 'mailto:mihirokte77@gmail.com', text: 'mihirokte77@gmail.com' },
  { label: 'linkedin', href: 'https://linkedin.com/in/mihirokte', text: 'linkedin.com/in/mihirokte' },
  { label: 'github', href: 'https://github.com/Mihirokte', text: 'github.com/Mihirokte' },
]
