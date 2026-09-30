import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    // Fully static output in /build. Works on GitHub Pages, Netlify, Cloudflare Pages, any web host.
    adapter: adapter({ pages: 'build', assets: 'build', fallback: '404.html', strict: true }),
    paths: {
      // Only needed when hosting under a sub-path, e.g. https://user.github.io/repo
      // BASE_PATH=/repo npm run build
      base: process.env.BASE_PATH ?? ''
    },
    prerender: {
      handleHttpError: ({ path, message }) => {
        // Files you still need to copy into /static (see README) should warn, not break the build.
        if (/\.(pdf|jpe?g|png|ico)$/i.test(path)) {
          console.warn(`\n[warn] Missing static file: ${path} - copy it into /static (see README.md)\n`);
          return;
        }
        throw new Error(message);
      }
    }
  }
};

export default config;
