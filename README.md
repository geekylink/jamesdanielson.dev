# James Danielson - retro portfolio

A retro video game / hacker themed portfolio, built with [SvelteKit](https://svelte.dev/docs/kit) (Svelte 5) and exported as a fully static site. No React.

- Keyboard-navigable game menu on the home page (up / down arrows, Enter)
- Boot-sequence terminal that types once per visit (any key skips it, reduced motion respected)
- Three monitor colors (green, amber, ice) and optional CRT scanlines, remembered between visits
- Responsive, keyboard accessible, no runtime dependencies beyond Svelte
- Old URLs (`/who`, `/jobs`, `/games/merge`, ...) redirect to the new pages

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static site in /build (runs content validation first)
npm run preview    # serve the production build locally
```

Needs Node 20 or newer.

### Copy these files from the old site first

The old repo's binary files were not part of the export I worked from, so copy them from the old `public/` folder into `static/`:

| File | Used by |
| --- | --- |
| `Resume.pdf` | header nav, home menu, about page |
| `james.jpeg` | home and about page avatar (a pixel placeholder shows until you add it) |
| `eagle.jpg` | scouts page (hidden until you add it) |
| `favicon.ico` | optional, `favicon.svg` is already included |

`CoverLetter.pdf` was in the old repo but never linked from any page, so it is not referenced. Drop it in `static/` if you want to link it later.

## Where things live

```
src/
  lib/data/           <- ALL of your content
    site.js             name, nav, home menu, boot text, "Player 1" stats, social links
    about.js            /about text
    jobs.js             work experience
    education.js        /education and /scouts text
    skills.js           languages, distros, tools
    categories.js       project categories (game, website, tool)
    projects/           ONE FILE PER PROJECT
      _template.js        copy me
      merge.js, ...
  lib/components/     Window, MenuList, ProjectCard, BootSequence, ...
  routes/             pages
  app.css             colors, fonts, global styles
static/               files served as-is (PDFs, images, icons)
scripts/              new-project.js, validate-content.js
```

## Add a project

Each project is one small file in `src/lib/data/projects/`. The site picks it up automatically.

```bash
npm run new:project -- my-cool-app "My Cool App" website
```

That creates `src/lib/data/projects/my-cool-app.js` from the template. Fill in the fields:

```js
export default {
  slug: 'my-cool-app',          // URL: /projects/my-cool-app
  title: 'My Cool App',
  category: 'website',          // game | website | tool
  order: 100,                   // lower shows first
  summary: 'One or two sentences for the project list.',
  tags: ['Svelte', 'SQLite'],
  thumbnail: 'https://.../screenshot.png',   // or '/local.png' from /static
  links: [{ label: 'Live site', url: 'https://example.com' }],
  blocks: [                                  // optional detail page, shown in order
    { type: 'text', heading: 'About', body: ['Paragraph one.', 'Paragraph two.'] },
    { type: 'images', heading: 'Screenshots', items: [{ src: 'https://...', alt: 'What it shows' }] },
    { type: 'video', youtube: 'VIDEO_ID', title: 'Demo video' }
  ]
};
```

- Only `slug`, `title`, `category` and `summary` are required.
- Set `hidden: true` to keep a file without showing it (like `expat-citizen.js`).
- A new category (for example `app`) is one line in `src/lib/data/categories.js`.
- Text supports `[links](https://...)`, internal links like `[education](/education)`, and `**bold**`.
- `npm run validate` catches mistakes (bad slug, unknown category, missing alt text, duplicate slugs). The build runs it automatically.

## Add work experience

Open `src/lib/data/jobs.js` and add an object to the array. The page sorts by `start` (newest first), so position in the file does not matter. Use `end: null` for a current job. A commented template sits at the top of the file.

## Change the look

- Colors: the tokens at the top of `src/app.css`. Each monitor theme (`[data-theme='amber']`, ...) swaps them.
- Fonts: [Press Start 2P](https://fontsource.org/fonts/press-start-2p) for headings and [VT323](https://fontsource.org/fonts/vt323) for body text, self-hosted through `@fontsource`.
- Home page menu, boot text and stats: `src/lib/data/site.js`.

## Deploy

**GitHub Pages (workflow included):** push to `main`, then in the repo go to Settings -> Pages -> Source: "GitHub Actions". The workflow is `.github/workflows/deploy.yml`. For a project page (`user.github.io/repo`) set `BASE_PATH: '/repo'` in the workflow; for a custom domain leave it empty (and add a `static/CNAME` file containing the domain).

**Anywhere else:** run `npm run build` and upload the `build/` folder (Netlify, Cloudflare Pages, S3, any web server).

## Notes

- The first time you run `npm install`, commit the generated `package-lock.json`. The workflow uses `npm ci` when a lockfile exists.
- Screenshots on the project pages are loaded from GitHub raw URLs, as on the old site. See `README-suggestions.md` for why you may want to host copies yourself.
- See [README-suggestions.md](README-suggestions.md) for content and feature ideas.
