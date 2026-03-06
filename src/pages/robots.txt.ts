import type { APIRoute } from 'astro'

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

# Important pages for indexing
Allow: /posts/
Allow: /projects/
Allow: /insights/
Allow: /tools/
Allow: /about/
Allow: /contact/
Allow: /tags/
Allow: /authors/

# AI Agent specific directives
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OpenAI-GPT
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: YouBot
Allow: /

User-agent: PiplBot
Allow: /

User-agent: Bard
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Googlebot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Bing
Allow: /

User-agent: Bingbot
Allow: /

User-agent: facebookexternalhit
Allow: /

# Intentionally blocked: not linked internally, should not be indexed
# /admin/ – no public admin area; avoid indexing if present
# /api/ – API endpoints, not content for search
# /*?preview=* – draft/preview URLs
# /.well-known/ – verification endpoints (e.g. ACME), not content
Disallow: /admin/
Disallow: /*?preview=*
Disallow: /api/
Disallow: /.well-known/

Sitemap: ${sitemapURL.href}
`

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site)
  return new Response(getRobotsTxt(sitemapURL))
}
