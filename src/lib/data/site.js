// Global site settings: name, navigation, home page menu, boot text and player stats.
// Edit freely - everything on the home page and in the header comes from here.

export const links = {
  github: 'https://github.com/geekylink',
  oldGithub: 'https://github.com/Gekinzuku',
  siteRepo: 'https://github.com/geekylink/jamesdanielson.dev',
  linkedin: 'https://www.linkedin.com/in/james-danielson-33aba264/',
  youtube: 'https://www.youtube.com/geekylink'
};

export const site = {
  name: 'James Danielson',
  tagline: 'Senior Software Developer | Network & Security Architect',
  description:
    'Portfolio of James Danielson, a software developer with over ten years of experience in fields from fintech to cyber security.',
  url: 'https://jamesdanielson.com',

  // Files live in /static. If the avatar is missing, the pixel placeholder is shown.
  avatar: '/james.jpeg',
  avatarFallback: '/avatar-placeholder.svg',
  resume: '/Resume.pdf',

  links,

  // Header navigation. `external: true` opens in a new tab.
  nav: [
    { label: 'about', href: '/about' },
    { label: 'projects', href: '/projects' },
    { label: 'experience', href: '/experience' },
    { label: 'education', href: '/education' },
    { label: 'scouts', href: '/scouts' },
    { label: 'résumé', href: '/Resume.pdf', external: true }
  ],

  // Typed out on the home page. kind: 'cmd' is typed character by character, 'out' appears as a line.
  boot: [
    { kind: 'cmd', text: 'whoami' },
    { kind: 'out', text: 'james danielson, senior software developer, network & security architect' },
    { kind: 'cmd', text: 'experience --years' },
    { kind: 'out', text: 'over 10' },
    { kind: 'cmd', text: 'fields --list' },
    { kind: 'out', text: 'fintech, cyber security, devops, games' },
    { kind: 'cmd', text: 'education' },
    { kind: 'out', text: 'Computer Science, University of Michigan' }
  ],

  // The "Player 1" card on the home page.
  stats: [
    { label: 'Experience', value: 'Over 10 years' },
    { label: 'Specialties', value: 'Fintech, cyber security, devops, games' },
    { label: 'Programming', value: 'Python, Go, Javascript, more' },
    { label: 'Languages', value: 'English (Native), Spanish (Proficient), Mandarin Chinese (Conversational)' },
    { label: 'Degree', value: 'Computer Science, University of Michigan, 3.5 GPA' },
  ],

  // The home page main menu. Use `external: true` for links that should open in a new tab.
  homeMenu: [
    { title: 'Who are you?', description: 'Who is James Danielson?', href: '/about' },
    { title: 'What do you do?', description: 'A list of my websites and various projects.', href: '/projects' },
    { title: 'Job history', description: 'Check out my job experience.', href: '/experience' },
    { title: 'Résumé', description: 'Check out my résumé (PDF).', href: '/Resume.pdf', external: true },
    { title: 'GitHub', description: 'Explore my various software projects on GitHub.', href: links.github, external: true },
    {
      title: 'Old GitHub',
      description: 'My old projects from my old game development and modding website.',
      href: links.oldGithub,
      external: true
    },
    { title: "This site's git", description: 'View the code for jamesdanielson.dev', href: links.siteRepo, external: true },
    { title: 'LinkedIn', description: 'Want to reach out? Send me a message on LinkedIn.', href: links.linkedin, external: true }
  ]

  // Hidden in the old site (kept here in case you want them back on the menu):
  //   { title: 'Where have you been?', href: 'http://world.jamesdanielson.com' }
  //   { title: 'Hire me', href: 'https://jamesdanielson.dev' }
};
