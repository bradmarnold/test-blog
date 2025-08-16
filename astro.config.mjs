import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bradmarnold.github.io/test-blog',
  base: '/test-blog/',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap()
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-light'
    }
  }
});