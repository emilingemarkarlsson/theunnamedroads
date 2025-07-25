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
User-agent: OpenAI-GPT
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Bard
Allow: /

User-agent: Bing
Allow: /

User-agent: facebookexternalhit
Allow: /

# Block any potential admin or draft areas
Disallow: /admin/
Disallow: /*?preview=*
Disallow: /api/
Disallow: /.well-known/

# Crawl-delay for respectful indexing
Crawl-delay: 1

Sitemap: ${sitemapURL.href}
`

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site)
  return new Response(getRobotsTxt(sitemapURL))
}
