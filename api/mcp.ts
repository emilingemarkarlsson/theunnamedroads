import { createMcpHandler } from 'mcp-handler'
import { z } from 'zod'
import envelope from './_data/portfolio.json'

type PortfolioProject = (typeof envelope.projects)[number]

const projects = envelope.projects as PortfolioProject[]

function findProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

const handler = createMcpHandler(
  (server) => {
    server.registerTool(
      'list_projects',
      {
        title: 'List portfolio projects',
        description:
          'List public studio portfolio projects with slug, title, status, and studio page URL.',
        inputSchema: z.object({})
      },
      async () => ({
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              projects.map((p) => ({
                slug: p.slug,
                title: p.title,
                statusLabel: p.statusLabel,
                studioPage: p.studioPage,
                publicUrl: p.publicUrl
              })),
              null,
              2
            )
          }
        ]
      })
    )

    server.registerTool(
      'get_project_wedge',
      {
        title: 'Get project wedge',
        description:
          'Read the public wedge for one portfolio project (focus, summary, metrics, URLs).',
        inputSchema: z.object({
          slug: z.string().min(1).describe('Project slug from list_projects')
        })
      },
      async ({ slug }) => {
        const project = findProject(slug)
        if (!project) {
          return {
            content: [
              {
                type: 'text',
                text: `Unknown slug "${slug}". Call list_projects for valid slugs.`
              }
            ],
            isError: true
          }
        }
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(project, null, 2)
            }
          ]
        }
      }
    )

    server.registerTool(
      'get_studio_brief',
      {
        title: 'Get studio brief',
        description:
          'Return the llms.txt studio brief (Focus policy and citation rules).',
        inputSchema: z.object({})
      },
      async () => ({
        content: [{ type: 'text', text: envelope.studioBrief }]
      })
    )

    server.registerTool(
      'get_contact_inquiry_path',
      {
        title: 'Get contact / inquiry path',
        description:
          'Return the public contact page and webhook used by the human-facing contact form.',
        inputSchema: z.object({})
      },
      async () => ({
        content: [
          { type: 'text', text: JSON.stringify(envelope.contact, null, 2) }
        ]
      })
    )
  },
  {
    serverInfo: {
      name: 'theunnamedroads-portfolio',
      version: '1.0.0'
    },
    instructions:
      'Read-only portfolio tools for https://www.theunnamedroads.com/. Do not send outbound or submit forms without explicit human consent.'
  }
)

export default handler

export const config = {
  runtime: 'edge'
}
