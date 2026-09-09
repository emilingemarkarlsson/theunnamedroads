const APEX_HOST = 'theunnamedroads.com'
const CANONICAL_HOST = 'www.theunnamedroads.com'

export default function middleware(request: Request): Response | undefined {
  const url = new URL(request.url)

  if (url.hostname === APEX_HOST) {
    url.protocol = 'https:'
    url.hostname = CANONICAL_HOST
    return Response.redirect(url.toString(), 301)
  }

  if (url.hostname === 'e.theunnamedroads.com' && url.pathname === '/') {
    return Response.redirect(`https://${CANONICAL_HOST}/`, 301)
  }

  return undefined
}
