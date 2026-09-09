/** Shared crawl/index rules — keep in sync with astro.config sitemap filter. */

export const NOINDEX_FOLLOW = 'noindex, follow'

/** Studio Person author; archive pages stay noindex but posts keep Person schema. */
export const PERSON_AUTHOR = 'Emil Ingemar Karlsson'

/** Legacy/fake author slugs → 301 to home (not indexable archive pages). */
export const LEGACY_AUTHOR_SLUGS = [
  'CORE',
  'The Unnamed Road',
  'The Unnamed Roads',
  'The Agent Fabric'
] as const

/** Tag hub slugs worth indexing; all other tag URLs are noindex + sitemap-excluded. */
export const CURATED_TAG_HUBS: readonly string[] = []

/**
 * Sitemap inclusion (deny-list). Everything else on the static site is eligible.
 * Core claim URLs: home, insights, Field Notes posts, Focus projects, policy/tools/contact.
 */
export const SITEMAP_EXCLUDE: RegExp[] = [
  /^\/tags(\/|$)/,
  /^\/posts\/\d+\/?$/,
  /^\/services(\/|$)/,
  /^\/search(\/|$)/,
  /emil-ingemark-karlsson/,
  /^\/authors\//,
  /^\/feed\.xml\/?$/
]

export const isLegacyAuthor = (author: string) =>
  LEGACY_AUTHOR_SLUGS.some(
    (legacy) => legacy.toLowerCase() === author.toLowerCase()
  )

export const isCuratedTagHub = (tag: string) =>
  CURATED_TAG_HUBS.some((hub) => hub.toLowerCase() === tag.toLowerCase())

export const shouldExcludeFromSitemap = (pathname: string) => {
  const path = pathname.replace(/\/$/, '') || '/'
  return SITEMAP_EXCLUDE.some((pattern) => pattern.test(path))
}
