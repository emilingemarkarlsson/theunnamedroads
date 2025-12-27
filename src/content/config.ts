import config from '@/theme.config'
import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string().default(config.author),
      authorAgent: z.string().optional(), // Agent ID (e.g., 'aion', 'nexus')
      description: z.string(),
      publishedDate: z.date(),
      draft: z.boolean().optional().default(false),
      canonicalURL: z.string().optional(),
      openGraphImage: image().or(z.string()).optional(),
      tags: z.array(z.string()).default([]),
      showToC: z.boolean().optional().default(true)
    })
})

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      url: z.string().optional(),
      startDate: z.date(),
      endDate: z.date().optional().nullable(),
      tags: z.array(z.string()).default([]),
      previewImage: image().or(z.string()).optional(),
      homepage: z
        .object({
          featured: z.boolean().default(false),
          order: z.number().optional(),
          statusLabel: z.string().optional(),
          statusTone: z.enum(['active', 'building', 'exploring']).optional(),
          statusDotColor: z.string().optional(),
          animateDot: z.boolean().optional(),
          focus: z.string().optional(),
          summary: z.string().optional(),
          metricLabel: z.string().optional(),
          metricValue: z.string().optional(),
          tag: z.string().optional(),
          href: z.string().optional()
        })
        .optional()
    })
})

const toolLogoSchema = z.union([
  z.object({
    type: z.literal('image'),
    src: z.string(),
    alt: z.string().optional()
  }),
  z.object({
    type: z.literal('monogram'),
    label: z.string(),
    background: z.string().optional()
  })
])

const homepage = defineCollection({
  type: 'data',
  schema: z.object({
    hero: z.object({
      eyebrow: z.string(),
      headline: z.string(),
      subheadline: z.string(),
      supportingLine: z.string(),
      badges: z.array(
        z.object({
          id: z.string(),
          label: z.string()
        })
      ),
      stats: z.array(
        z.object({
          id: z.string(),
          label: z.string(),
          value: z.string(),
          detail: z.string()
        })
      ),
      primaryCta: z.object({
        label: z.string(),
        href: z.string()
      }),
      secondaryCta: z.object({
        label: z.string(),
        href: z.string()
      })
    }),
    ventures: z.object({
      eyebrow: z.string(),
      title: z.string(),
      description: z.string(),
      filters: z.array(
        z.object({
          id: z.string(),
          label: z.string()
        })
      ),
      companies: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          focus: z.string(),
          summary: z.string(),
          tag: z.string(),
          status: z.object({
            label: z.string(),
            tone: z.enum(['active', 'building', 'exploring'])
          }),
          metric: z.object({
            label: z.string(),
            value: z.string()
          }),
          href: z.string().optional()
        })
      )
    }),
    signals: z.object({
      eyebrow: z.string(),
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      highlights: z.array(
        z.object({
          id: z.string(),
          label: z.string(),
          detail: z.string()
        })
      )
    }),
    operatingSystem: z.object({
      eyebrow: z.string(),
      title: z.string(),
      description: z.string(),
      phases: z.array(
        z.object({
          id: z.string(),
          label: z.string(),
          title: z.string(),
          description: z.string(),
          meta: z.string()
        })
      )
    }),
    aiTeams: z.object({
      eyebrow: z.string(),
      title: z.string(),
      subtitle: z.string(),
      note: z.string(),
      groups: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          description: z.string(),
          members: z.array(
            z.object({
              id: z.string(),
              name: z.string(),
              role: z.string(),
              strengths: z.string(),
              bio: z.string(),
              status: z.enum(['active', 'hiring']).optional(),
              statusLabel: z.string().optional()
            })
          )
        })
      )
    }),
    testimonials: z.object({
      eyebrow: z.string(),
      title: z.string(),
      description: z.string(),
      quotes: z.array(
        z.object({
          id: z.string(),
          quote: z.string(),
          author: z.string(),
          role: z.string()
        })
      )
    }),
    tools: z.object({
      eyebrow: z.string(),
      title: z.string(),
      description: z.string(),
      groups: z.array(
        z.object({
          id: z.string(),
          phase: z.string(),
          title: z.string(),
          description: z.string(),
          theme: z.object({
            gradientFrom: z.string(),
            gradientTo: z.string(),
            accent: z.string(),
            glow: z.string().optional()
          }),
          tools: z.array(
            z.object({
              id: z.string(),
              name: z.string(),
              description: z.string(),
              href: z.string(),
              logo: toolLogoSchema.optional()
            })
          )
        })
      )
    }),
    about: z.object({
      eyebrow: z.string(),
      title: z.string(),
      subtitle: z.string(),
      body: z.array(z.string()),
      pillars: z.array(
        z.object({
          id: z.string(),
          title: z.string(),
          detail: z.string()
        })
      ),
      stats: z.array(
        z.object({
          id: z.string(),
          label: z.string(),
          value: z.string()
        })
      )
    }),
    contact: z.object({
      eyebrow: z.string(),
      title: z.string(),
      description: z.string(),
      primaryCta: z.object({
        label: z.string(),
        href: z.string()
      }),
      secondaryCta: z.object({
        label: z.string(),
        href: z.string()
      }),
      note: z.string()
    })
  })
})

export const collections = { posts, projects, homepage }
