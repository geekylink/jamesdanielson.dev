/** @type {import('../types.js').Project} */
export default {
  slug: 'pong-2600',
  title: 'Pong 2600',
  category: 'game',
  order: 30,
  period: '2010',
  summary: 'A homebrew clone of Pong for the Atari 2600, written in 6502 assembly.',
  tags: ['Atari 2600', '6502 ASM', 'Homebrew'],
  thumbnail: 'https://raw.githubusercontent.com/Gekinzuku/pong-2600/main/screenshot.png',
  links: [{ label: 'GitHub', url: 'https://github.com/Gekinzuku/pong-2600' }],
  blocks: [
    {
      type: 'text',
      heading: 'About',
      body: [
        'An old homebrew Pong clone for the Atari 2600 written in 6502 ASM back in 2010.',
        'This was my first project with 6502 ASM.'
      ]
    },
    {
      type: 'text',
      heading: 'Gameplay',
      body: [
        'At the start of the game you press the "Select" button a few times. This sets the size of your paddle. Once you are happy, press "Reset." This starts the game. Every time you score a point your paddle gets smaller. You win when your paddle no longer exists. The last few points can be pretty tricky. Of course after that you can press "Reset" again to play again.',
        'Also, no sound... that\'s just kinda the way it is.'
      ]
    },
    { type: 'video', youtube: 't-PAIlWh2R4', title: 'Pong 2600 gameplay video' },
    {
      type: 'images',
      items: [{ src: 'https://raw.githubusercontent.com/Gekinzuku/pong-2600/main/screenshot.png', alt: 'Pong for the 2600' }]
    }
  ]
};
