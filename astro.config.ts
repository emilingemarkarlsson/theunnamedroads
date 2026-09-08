import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import codeHeadersPlugin from './src/plugins/codeHeadersPlugin'
import readingTimePlugin from './src/plugins/readingTimePlugin'
import config from './src/theme.config'
import { LEGACY_AUTHOR_SLUGS, SITEMAP_EXCLUDE } from './src/util/seo'

const legacyAuthorRedirects = Object.fromEntries(
  LEGACY_AUTHOR_SLUGS.map((author) => [
    `/authors/${author}`,
    { status: 301 as const, destination: '/' }
  ])
)

export default defineConfig({
  site: config.site,
  trailingSlash: 'always',
  redirects: {
    '/sitemap': '/sitemap-index.xml',
    '/sitemap.xml': '/sitemap-index.xml',
    ...legacyAuthorRedirects,
    '/services/ai-native-venture-studio': '/',
    '/projects/emil-ingemark-karlsson': {
      status: 301,
      destination: '/projects/emil-ingemar-karlsson'
    },
    '/projects/emil-ingemar-karlsson': 'https://emilingemarkarlsson.com/',
    '/authors/Emil Karlsson': {
      status: 301,
      destination: '/authors/Emil Ingemar Karlsson'
    },
    // GSC 404 cluster — dead tags (no published content; #53)
    '/tags/experimental-methodology': {
      status: 301,
      destination: '/insights/experimentation-frameworks'
    },
    '/tags/strategy': { status: 301, destination: '/posts/' },
    '/tags/building': { status: 301, destination: '/posts/' },
    '/tags/funding': { status: 301, destination: '/posts/' },
    '/tags/setup': {
      status: 301,
      destination: '/posts/coolify-hetzner-automated-infrastructure'
    },
    '/tags/public': {
      status: 301,
      destination: '/posts/why-anonymity-accelerates-innovation'
    },
    '/tags/nhl-analytics': {
      status: 301,
      destination: '/projects/the-hockey-analytics'
    },
    // GSC 404 cluster — dead post slugs (#53)
    '/posts/solo-founder-mental-health-practices-2026-03-25': {
      status: 301,
      destination: '/posts/solo-founder-mental-health-practices-2026-04-08'
    },
    '/posts/digital-nomad-infrastructure-setup-2026-04-30': {
      status: 301,
      destination: '/posts/'
    }
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      filter: (page) => {
        const path = page.replace(config.site, '').replace(/\/$/, '') || '/'
        return !SITEMAP_EXCLUDE.some((pattern) => pattern.test(path))
      }
    })
  ],
  markdown: {
    shikiConfig: {
      themes: config.shikiThemes,
      wrap: true,
      transformers: [codeHeadersPlugin]
    },
    remarkPlugins: [readingTimePlugin]
  }
})
