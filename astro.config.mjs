import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// If deploying to https://ahmedn1.github.io/personal-website/, set:
//   site: 'https://ahmedn1.github.io'
//   base: '/personal-website'
// If using a custom domain or the ahmedn1.github.io root repo, set:
//   site: 'https://ahmedn1.github.io'  (or your custom domain)
//   and remove `base`
export default defineConfig({
  site: 'https://ahmedn1.github.io',
  integrations: [tailwind(), sitemap()],
});
