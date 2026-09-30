/** @type {import('../types.js').Project} */
export default {
  slug: 'merge',
  title: 'M.E.R.G.E.',
  category: 'game',
  order: 10,
  summary:
    'Simple cooperative Unity game similar to Asteroids. Players must work together to defeat larger enemies by combining ships together.',
  tags: ['Unity', 'Co-op'],
  thumbnail: 'https://raw.githubusercontent.com/geekylink/M.E.R.G.E./main/screenshots/gameplay1.png',
  links: [
    { label: 'GitHub', url: 'https://github.com/geekylink/M.E.R.G.E.' },
    // NOTE: the old site's "Download to Play" link pointed at the loz-links-target-wars release,
    // which looks like a copy-paste slip. This points at M.E.R.G.E.'s own releases page - please verify.
    { label: 'Download to play', url: 'https://github.com/geekylink/M.E.R.G.E./releases' }
  ],
  blocks: [
    {
      type: 'text',
      heading: 'About the game',
      body: [
        'Simple cooperative Unity game similar to Asteroids, players must work together to defeat larger enemies by combining ships together.',
        'Players don\'t "die", you lose levels and power-ups, and only lose the game by losing all planets.',
        "You can't kill the bigger baddies without merging ships with at least one other player for more powerful shots."
      ]
    },
    {
      type: 'images',
      heading: 'How to play',
      items: [
        { src: 'https://raw.githubusercontent.com/geekylink/M.E.R.G.E./main/screenshots/info2.png', alt: 'How to Play - Information' },
        { src: 'https://raw.githubusercontent.com/geekylink/M.E.R.G.E./main/screenshots/info.png', alt: 'Players and Enemies' },
        { src: 'https://raw.githubusercontent.com/geekylink/M.E.R.G.E./main/screenshots/controls.png', alt: 'How to Play - Controls' }
      ]
    },
    {
      type: 'images',
      heading: 'Some gameplay',
      items: [
        { src: 'https://raw.githubusercontent.com/geekylink/M.E.R.G.E./main/screenshots/gameplay1.png', alt: 'Gameplay Screenshot' },
        { src: 'https://raw.githubusercontent.com/geekylink/M.E.R.G.E./main/screenshots/gameplay2.png', alt: 'Gameplay Screenshot, second example' }
      ]
    },
    {
      type: 'images',
      heading: 'End of game stats',
      items: [
        { src: 'https://raw.githubusercontent.com/geekylink/M.E.R.G.E./main/screenshots/stats1.png', alt: 'End Game Stats' },
        { src: 'https://raw.githubusercontent.com/geekylink/M.E.R.G.E./main/screenshots/stats2.png', alt: 'End Game Stats, second example' }
      ]
    }
  ]
};
