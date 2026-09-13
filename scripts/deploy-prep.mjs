// Publish dist-prep/ to the Mihirokte/prep repository (GitHub Pages site for
// prep.mihirokte.info). Source stays here; that repo only holds built output.
import { execSync } from 'node:child_process'
import { cpSync, mkdirSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'

const REPO = 'https://github.com/Mihirokte/prep.git'
const DOMAIN = 'prep.mihirokte.info'
const dist = join(process.cwd(), 'dist-prep')
if (!existsSync(join(dist, 'index.html'))) throw new Error('run `npm run build:prep` first')

const work = join(process.env.KIROCREW_SCRATCH ?? tmpdir(), `prep-deploy-${Date.now()}`)
mkdirSync(work, { recursive: true })
const sh = (cmd) => execSync(cmd, { cwd: work, stdio: 'inherit' })

sh(`git clone -q --depth 1 ${REPO} .`)
for (const entry of ['assets', 'index.html', 'prep']) rmSync(join(work, entry), { recursive: true, force: true })
cpSync(dist, work, { recursive: true })
// the classic worker and its Python harness live outside the bundle
cpSync(join(process.cwd(), 'public', 'prep'), join(work, 'prep'), { recursive: true })
writeFileSync(join(work, 'CNAME'), `${DOMAIN}\n`)
writeFileSync(join(work, '.nojekyll'), '')

sh('git add -A')
try {
  sh(`git commit -q -m "Deploy prep portal ${new Date().toISOString()}"`)
} catch {
  console.log('nothing to deploy')
  process.exit(0)
}
sh('git push origin HEAD:main')
console.log(`published to https://${DOMAIN}`)
