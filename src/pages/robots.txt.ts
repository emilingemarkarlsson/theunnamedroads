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

# Block any potential admin or draft areas
Disallow: /admin/
Disallow: /*?preview=*

Sitemap: ${sitemapURL.href}
`

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site)
  return new Response(getRobotsTxt(sitemapURL))
}
