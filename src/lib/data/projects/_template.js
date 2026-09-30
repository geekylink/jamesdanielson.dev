// TEMPLATE - copy this file (or run `npm run new:project -- my-slug "My Title" game`).
// Files starting with "_" are ignored by the site. Every other .js file in this folder becomes a project.
//
// Only slug, title, category and summary are required. Everything else is optional:
// add `blocks` for a detailed page, or leave it out for a simple entry.

/** @type {import('../types.js').Project} */
export default {
  slug: 'my-project', // used in the URL: /projects/my-project
  title: 'My Project',
  category: 'game', // 'game' | 'website' | 'tool' (see ../categories.js)
  order: 100, // lower shows first
  // hidden: true, // uncomment to keep the file but not show it on the site
  summary: 'One or two sentences that show up on the project list.',
  period: '', // e.g. '2008 - 2011'
  status: '', // e.g. 'Offline'
  tags: [],
  thumbnail: '', // image URL, or '/file.png' from /static
  links: [
    // { label: 'GitHub', url: 'https://github.com/you/project' },
  ],
  blocks: [
    // { type: 'text', heading: 'About', body: ['Paragraph one.', 'Paragraph two.'] },
    // { type: 'images', heading: 'Screenshots', items: [{ src: 'https://...png', alt: 'What the image shows' }] },
    // { type: 'video', youtube: 'VIDEO_ID', title: 'Gameplay video' }
  ]
};
