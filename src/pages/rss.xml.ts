import { getCollection } from 'astro:content';
import { rss } from '@astrojs/rss';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: 'Your Blog',
    description: 'RSS feed',
    site: new URL(context.site).toString(),
    items: posts.map((post) => ({
      link: `/blog/${post.slug}/`,
      title: post.data.title,
      pubDate: post.data.publishedDate,
      description: post.data.description
    }))
  });
}