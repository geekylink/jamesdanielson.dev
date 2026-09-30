/** @type {import('../types.js').Project} */
export default {
  slug: 'gekinzuku',
  title: 'Gekinzuku',
  category: 'website',
  order: 60,
  period: '2008 - 2011',
  status: 'Offline',
  summary:
    'Old homebrew game and game modding community, largely focused on modding the Nintendo 64 Legend of Zelda games.',
  tags: ['Forum', 'IRC', 'Game modding', 'Homebrew'],
  links: [
    { label: 'Website', url: 'https://gekinzuku.com' },
    { label: 'Old GitHub', url: 'https://github.com/Gekinzuku' },
    { label: 'YouTube', url: 'https://www.youtube.com/geekylink' }
  ],
  blocks: [
    {
      type: 'text',
      heading: 'About',
      body: [
        'Back in high school, I ran a website dedicated to modding old Nintendo games as well as homebrew game development, called Gekinzuku. It was largely focused on modding the Nintendo 64 Legend of Zelda games, and was active from 2008 - 2011.',
        'It used to feature a forum and a small IRC network (three Linux servers in Michigan, California, and London with a simple round-robin load balancer).',
        '**Note:** The website has been dead for about ten years at this point.'
      ]
    },
    {
      type: 'text',
      heading: 'Where to find the old projects',
      body: [
        'If you are interested, you can find the old projects on the [Gekinzuku GitHub](https://github.com/Gekinzuku) and some of the old videos on [YouTube](https://www.youtube.com/geekylink).'
      ]
    }
  ]
};
