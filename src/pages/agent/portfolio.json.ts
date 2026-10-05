import envelope from '../../../api/_data/portfolio.json'

export function GET() {
  return new Response(JSON.stringify(envelope, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  })
}
