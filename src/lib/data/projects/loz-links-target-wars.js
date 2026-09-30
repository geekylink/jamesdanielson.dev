const shots = 'https://raw.githubusercontent.com/geekylink/loz-links-target-wars/main/screenshots';

/** @type {import('../types.js').Project} */
export default {
  slug: 'loz-links-target-wars',
  title: "LoZ Link's Target Wars",
  category: 'game',
  order: 40,
  period: '~2008',
  summary: 'A simple fan game where you play as Link and try to shoot as many targets as you can in a limited amount of time.',
  tags: ['Fan game'],
  thumbnail: `${shots}/Gameplay1.png`,
  links: [
    { label: 'GitHub', url: 'https://github.com/geekylink/loz-links-target-wars' },
    { label: 'Download to play', url: 'https://github.com/geekylink/loz-links-target-wars/releases/tag/v1.0.0' }
  ],
  blocks: [
    {
      type: 'text',
      heading: 'About',
      body: [
        'LoZ game where you try to shoot as many targets as possible before the time expires. Really old game from ~2008.',
        'Please note, all art is owned by Nintendo. I only wrote this as a fan game and distribute it for free.'
      ]
    },
    { type: 'video', youtube: 'k6D3rDN3Rg0', title: "LoZ Link's Target Wars gameplay video" },
    {
      type: 'text',
      heading: 'Scoring system',
      body: [
        'You have sixty seconds per round. Every second that goes by you lose a point. Every time you shoot and miss a target you lose another second and 10 points. Hitting a target however will give you a second back, and the score of the target depends on how far away and how fast it is moving. So aiming for the farther and faster targets can pay off (assuming you can hit them).'
      ]
    },
    {
      type: 'images',
      items: [
        { src: `${shots}/TitleScreen.png`, alt: 'Title Screen' },
        { src: `${shots}/Gameplay1.png`, alt: 'Gameplay' }
      ]
    }
  ]
};
