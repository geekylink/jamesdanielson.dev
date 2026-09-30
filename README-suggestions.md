# Suggestions

Ideas for improving the content of the site, and for future website work. They are roughly ordered by impact within each section. Nothing here is required; the site works as it is.

## Things to verify first

These came up while moving the old content over.

- **M.E.R.G.E. download link.** On the old site, the "Download to Play" button on the M.E.R.G.E. page pointed to the *LoZ Link's Target Wars* release (`loz-links-target-wars/releases/tag/v1.0.0`). That looks like a copy-paste slip. I pointed it at `M.E.R.G.E.`'s releases page instead (`src/lib/data/projects/merge.js`). Check that a release exists there.
- **"Places I've visited" app.** The About page linked to a web app labelled *Broken*. I left it out. Either revive it (it would be a great project page) or leave it off.
- **Tooth Treks, James Danielson Development, Gekinzuku.** Confirm these sites are still live and still say what the descriptions say. Gekinzuku is marked "Offline"; the other two are not.
- **Expat Citizen** was commented out on the old site. It is kept as a hidden project (`expat-citizen.js`): delete `hidden: true` to show it.
- **Duolingo markers.** The language list on the Education page has `(+)` and `(-)` next to some languages, with no explanation. Either say what they mean (for example "actively studying" / "lapsed") or drop them.
- **Copied files.** `Resume.pdf`, `james.jpeg` and `eagle.jpg` still need to be copied into `static/` (see the main README).

## What I changed in the content

The content is the same, with small cleanups. Revert any you disagree with in `src/lib/data/`.

- Fixed spelling and grammar: *varierty, tendancy, inital, signficant, conviences, oppurtunities, Applicaion,* "Troubleshooted", "lead weekly client syncs", and similar.
- Added a missing word in the Pine River Mines entry ("custom multi-threaded ... using python" now reads "custom multi-threaded management application").
- Replaced vague "here" links with descriptive link text (for example "educational experience" instead of "here"). This is better for screen readers and search engines.
- Jobs are sorted by start date automatically. The old page had the 2013 Microsoft internship above the 2013 to 2014 research job; now the order is strictly chronological.
- The University of Michigan teaching job is stored once (in `jobs.js`) and shown on both the Experience and Education pages, instead of being copy-pasted in two places.
- Added ProcessMitigations (from your Microsoft entry) as a project of type "tool", since the old Tools page only contained a game.
- Fixed image alt texts that were wrong or duplicated (`level3.png` of Santa's Challenge was called "Level One" on one page and "Level Two" on another; several M.E.R.G.E. screenshots shared identical alt text).

## Content improvements

### Say what you want, up front

- The old home page said "Welcome to James Danielson portfolio website." Replace it with a line that says who you help and how. For example: what you build (cloud infrastructure, security tooling, games), for whom, and whether you are looking for full-time work or freelance clients.
- Decide the main call to action and make it obvious. Right now LinkedIn is the only contact route. Add an email address (or a simple contact form) and, if true, an availability line such as "Open to freelance work from November".
- `jamesdanielson.dev` is described as a freelance hire hub. If that is still how you want to be hired, link to it prominently and explain the relationship between the two sites in one sentence.

### Turn duties into results

The job descriptions mostly describe what you were assigned ("Worked on", "Helped with", "Participated in"). Hiring managers look for outcomes. For each role, try to add one or two lines with:

- **Scale:** how many workstations, render nodes, servers, users, machines?
- **Result:** what got faster, cheaper, safer, or more reliable, and by how much?
- **Your part:** what you personally designed, built or led.

Strong candidates in your history: the cloud render farms and workstation standardization at Six Nines IT, the profit-switching and monitoring system at Pine River Mines, the cross-platform prototypes at NIKSUN, and ProcessMitigations at Microsoft. Where client names are confidential, describe the situation generically ("a large animation studio", "a Fortune 500 client").

### Give the best projects a real write-up

The game pages are detailed, but they are the hobby side of your work. The professional work is richer and has no pages at all. Consider short case studies, one per project, using the `blocks` system:

1. The problem
2. What you built and why (a simple architecture diagram helps)
3. The stack
4. What happened afterwards

ProcessMitigations and the Pine River Mines monitoring system (Python, PyQt, C, Arduino, Raspberry Pi) would both make excellent case studies, and you can add photos of the converted hunting shack data center.

### Make skills more useful

- The skills list only contains languages, distros and a few tools. It shows no web or cloud skills, even though this is a web portfolio and you mention AWS Lambda, cloud workstations and render farms. Add the tools you want to be hired for (cloud services, CI/CD, containers, the frameworks you use now, including Svelte).
- Group skills by area (systems, security, cloud/devops, web, game development) instead of one long ranked list.
- Consider adding context such as "years" or "used on" next to the top items. The ranked order tells a reader little on its own.

### Trim and prioritize

- The Education page mixes career-relevant content with personal interests (swimming, piano, wood carving, eight Duolingo languages). Keep the personality, but move the most hire-relevant material higher, and shorten the rest.
- After more than ten years of experience, a 2015 GPA (3.502) carries little weight. Many people drop it at this point.
- Paragraphs are long. Break them into short paragraphs or bullets so they scan quickly.

### Remove things that go stale

- "Over ten years of experience" and "dead for about ten years" will be wrong soon. Prefer dates ("Active 2008 - 2011") or compute the number of years in code.
- Add a "Currently" line to About (what you are working on or learning), and update it a few times a year. It shows the site is maintained.

### Build credibility

- Add two or three short quotes from colleagues or clients (LinkedIn recommendations work well), with their permission.
- Name the people you built things with. Santa's Challenge says "the three of us", so credit the other two and say which parts were yours.
- Add dates and your role (solo or team) to every project entry. The data format already supports `period` and `status`.

### Tell the travel story

"A full office that fits in a backpack" and "lived on three continents" are memorable, and they are also real remote-work credibility. Say a little about how you work with distributed teams: time zones you can cover, how you communicate asynchronously, how you run client syncs from anywhere.

### Discoverability (SEO and sharing)

- Give every page a unique title and description (done for each page in this build, but review the wording).
- Add an Open Graph image so links to the site look good in chat apps and on LinkedIn.
- Add a `sitemap.xml` and structured data (schema.org `Person`) for search engines.
- Use more specific language a recruiter might search for, such as "Python developer", "Windows security engineer", "AWS Lambda".

### Résumé

- Keep `Resume.pdf` in sync with the website. Better still, generate both from the same data (see "Future improvements").
- `CoverLetter.pdf` existed in the old repo but was not linked anywhere. Delete it or link it.

## Future website improvements

### Fun, on-theme features

- **Play in the browser.** The biggest engagement boost available: embed playable versions of your games. Pong 2600 runs in a web Atari 2600 emulator, Santa's Challenge in a web Nintendo DS emulator (both are your own homebrew), and M.E.R.G.E. as a Unity WebGL build. Even a "Play" button linking to itch.io helps.
- **A real terminal page** at `/terminal`: type `help`, `projects`, `open merge`, `contact`. The home page already has the look; this would add the behavior. Keep the normal menu as the accessible default.
- **Pong as the 404 page.** A playable mini-Pong nods to Pong 2600 and is more memorable than an error message.
- **Sound effects** (menu blips, boot sound), off by default with a toggle next to the scanlines switch, using the Web Audio API.
- **Easter egg**: a Konami code that unlocks a hidden project or a fourth monitor color.
- **Achievements**: a tiny "pages explored" tracker ("3 of 7 levels visited"), stored in `localStorage`.

### Content system

- **Long-form projects in Markdown** with [mdsvex](https://mdsvex.pngwn.io/), so case studies can be written as normal documents with code blocks and images.
- **Blog or devlog** with an RSS feed. Even one post per quarter is a strong signal.
- **Single source for the résumé.** Add a `/resume` page rendered from `jobs.js`, `education.js` and `skills.js`, with a print stylesheet for a PDF, plus a [JSON Resume](https://jsonresume.org/) export for applicant tracking systems.
- **Pull repos from GitHub at build time** to show pinned or recent repositories automatically.
- **Filter projects by tag** (for example "Python" or "Unity") and keep the filter in the URL so it can be shared. Right now the filter is by category only.
- If you would rather edit content in a browser, add a git-based CMS such as Decap CMS on top of the same data files.

### Performance, quality and accessibility

- **Host screenshots yourself.** Project images are loaded from `raw.githubusercontent.com`. They can be slow, rate-limited, or break if a repo is renamed. Copy them into `static/` (or use `@sveltejs/enhanced-img`) to get resized, modern formats and no external dependency.
- Add a **light / high-contrast mode** and honor `prefers-contrast`. The current three themes are all dark.
- Run Lighthouse and set budgets. The two pixel fonts are the heaviest assets; preloading them and subsetting (Latin only) is cheap.
- Add a **Playwright smoke test** (home loads, every nav link works, project pages render) and run it in the GitHub Action, along with `svelte-check`.
- Add a **link checker** (for example `lychee`) to CI. It would have caught the broken "places visited" link and the wrong M.E.R.G.E. download link.
- Install the site as an **offline PWA**. The manifest is already there; add a service worker.

### Analytics and contact

- Privacy-friendly analytics (Plausible, GoatCounter) to see which pages and projects people open.
- A contact form through a static-friendly service (Formspree, Web3Forms), or at least a `mailto:` link, so contact does not depend on LinkedIn.

### Hosting

- Point the custom domain at GitHub Pages, Cloudflare Pages or Netlify, and enable preview deployments for pull requests so you can check content changes before publishing.
- Keep the legacy redirects (`/who`, `/jobs`, `/games/...`) for at least a year so old links and search results still work.
