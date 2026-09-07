import config from '@/theme.config'
import { getPosts } from '@/util/posts'
import { NOINDEX_FOLLOW } from '@/util/seo'
import rss from '@astrojs/rss'

export async function GET() {
  const posts = await getPosts()

  const feed = await rss({
    title: config.title,
    description: config.description,
    site: config.site,
    items: posts.map(({ data, slug }) => ({
      link: `posts/${slug}/`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.publishedDate)
    })),
    customData: `<language>${config.locale}</language>`
  })

  return new Response(feed.body, {
    status: feed.status,
    statusText: feed.statusText,
    headers: {
      ...Object.fromEntries(feed.headers.entries()),
      'X-Robots-Tag': NOINDEX_FOLLOW
    }
  })
}
