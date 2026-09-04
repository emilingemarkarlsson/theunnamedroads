import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import codeHeadersPlugin from './src/plugins/codeHeadersPlugin'
import readingTimePlugin from './src/plugins/readingTimePlugin'
import config from './src/theme.config'

const SITEMAP_EXCLUDE = [
  /^\/tags(\/|$)/,
  /^\/posts\/\d+\/?$/,
  /^\/services(\/|$)/,
  /emil-ingemark-karlsson/,
  /^\/authors\//
]

export default defineConfig({
  site: config.site,
  redirects: {
    '/sitemap.xml': '/sitemap-index.xml',
    '/services/ai-native-venture-studio': '/',
    '/projects/emil-ingemark-karlsson': {
      status: 301,
      destination: '/projects/emil-ingemar-karlsson'
    },
    '/projects/emil-ingemar-karlsson': 'https://emilingemarkarlsson.com/',
    '/authors/Emil Karlsson': {
      status: 301,
      destination: '/authors/Emil Ingemar Karlsson'
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
