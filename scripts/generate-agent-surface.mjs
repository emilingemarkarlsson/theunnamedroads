import fs from 'fs'
import path from 'path'
import { parse as parseYaml } from 'yaml'

const ROOT = process.cwd()
const PROJECTS_DIR = path.join(ROOT, 'src/content/projects')
const EXCLUDED_SLUGS = new Set(['emil-ingemar-karlsson'])
const SITE = 'https://www.theunnamedroads.com'

function parseProjectFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8')
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return null
  const data = parseYaml(match[1])
  const slug = path.basename(filePath, path.extname(filePath))
  if (EXCLUDED_SLUGS.has(slug)) return null

  const homepage = data.homepage ?? {}
  const publicUrl =
    (homepage.href ?? data.url ?? null)?.toString().trim() || null

  return {
    slug,
    title: data.title,
    description: data.description,
    publicUrl,
    studioPage: `${SITE}/projects/${slug}/`,
    statusLabel: homepage.statusLabel ?? null,
    focus: homepage.focus ?? null,
    summary: homepage.summary ?? null,
    metricLabel: homepage.metricLabel ?? null,
    metricValue: homepage.metricValue ?? null,
    tags: data.tags ?? []
  }
}

function loadProjects() {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith('.md'))
  const projects = files
    .map((f) => parseProjectFile(path.join(PROJECTS_DIR, f)))
    .filter(Boolean)
    .sort((a, b) => a.title.localeCompare(b.title))

  return projects
}

function writePortfolioEnvelope(projects) {
  const llmsPath = path.join(ROOT, 'public/llms.txt')
  const studioBrief = fs.readFileSync(llmsPath, 'utf8')
  const envelope = {
    site: SITE,
    generatedAt: new Date().toISOString(),
    studioBrief,
    contact: {
      page: `${SITE}/contact/`,
      webhook: 'https://tur-automations.vercel.app/api/webhooks/contact',
      sourceLabel: 'Contact Form - The Unnamed Roads',
      note: 'Agents must not submit the contact form on behalf of a user without explicit human consent.'
    },
    mcpUrl: `${SITE}/api/mcp`,
    agentInstructionsUrl: `${SITE}/agent-instructions.txt`,
    projects
  }

  const outDir = path.join(ROOT, 'api/_data')
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(
    path.join(outDir, 'portfolio.json'),
    `${JSON.stringify(envelope, null, 2)}\n`
  )
  return envelope
}

function writeLlmsFull(studioBrief, projects) {
  const lines = projects.map(
    (p) =>
      `- ${p.slug}: ${p.title} | status=${p.statusLabel ?? '—'} | ${p.studioPage}`
  )
  const full = `${studioBrief.trim()}

## Full portfolio index (machine)

${lines.join('\n')}
`
  fs.writeFileSync(path.join(ROOT, 'public/llms-full.txt'), full)
  fs.writeFileSync(path.join(ROOT, 'llms-full.txt'), full)
}

const projects = loadProjects()
const envelope = writePortfolioEnvelope(projects)
writeLlmsFull(envelope.studioBrief, projects)
console.log(
  `Agent surface: ${projects.length} projects → api/_data/portfolio.json, llms-full.txt`
)
