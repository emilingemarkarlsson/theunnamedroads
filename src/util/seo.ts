/** Shared crawl/index rules — keep in sync with astro.config sitemap filter. */

export const MAX_TITLE_LENGTH = 70
export const MAX_META_DESCRIPTION_LENGTH = 160

/** Strip a trailing brand suffix so BaseLayout does not double-append. */
export const stripBrandSuffix = (
  title: string,
  brand = 'The Unnamed Roads'
) => {
  const pattern = new RegExp(
    `\\s*(?:[|–—-])\\s*${brand.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`,
    'i'
  )
  return title.trim().replace(pattern, '').trim()
}

const trimToMaxLength = (title: string, max: number, siteTitle?: string) => {
  if (title.length <= max) return title

  const suffix = siteTitle ? ` | ${siteTitle}` : ''
  if (siteTitle && title.endsWith(suffix) && title.length > suffix.length) {
    const maxBase = max - suffix.length
    if (maxBase > 10) {
      const base = title.slice(0, title.length - suffix.length).trim()
      return `${base.slice(0, maxBase - 1).trim()}…${suffix}`
    }
  }

  return `${title.slice(0, max - 1).trim()}…`
}

/** Build document title: single brand suffix, trimmed to SERP-friendly length. */
export const buildPageTitle = (
  pageTitle: string,
  siteTitle = 'The Unnamed Roads',
  maxLength = MAX_TITLE_LENGTH
) => {
  const trimmed = pageTitle.trim()

  if (trimmed.toLowerCase() === siteTitle.toLowerCase()) {
    return siteTitle
  }

  const withoutSuffix = stripBrandSuffix(trimmed, siteTitle)
  const hadBrandSuffix = withoutSuffix !== trimmed
  const startsWithBrand = trimmed
    .toLowerCase()
    .startsWith(`${siteTitle.toLowerCase()} `)

  if (hadBrandSuffix || startsWithBrand) {
    return trimToMaxLength(trimmed, maxLength, siteTitle)
  }

  const withSuffix = `${withoutSuffix} | ${siteTitle}`
  return trimToMaxLength(withSuffix, maxLength, siteTitle)
}

export const trimMetaDescription = (
  description: string,
  maxLength = MAX_META_DESCRIPTION_LENGTH
) => {
  const trimmed = description.trim()
  if (trimmed.length <= maxLength) return trimmed
  return `${trimmed.slice(0, maxLength - 1).trim()}…`
}

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
