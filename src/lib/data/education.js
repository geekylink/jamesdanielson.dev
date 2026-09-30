// Content for /education. Jobs flagged `alsoTeaching` in jobs.js are shown under "Teaching experience" automatically.

export const education = {
  preUniversity: [
    'I had a rather unusual experience growing up. My mother had a masters in education and decided to homeschool me after about half of first grade in public school.',
    'For high school, to improve my chances of getting into a good university, my mother enrolled me in [Oak Meadow High School](https://www.oakmeadow.com/high-school/), a distance learning high school for remote learning.',
    'During this time, I ended up running a small website and IRC network for a homebrew game development and game modding community that was primarily focused on old Nintendo game systems. Check out my [projects](/projects/gekinzuku) for more information.',
    'My parents encouraged me to spend my time learning programming but they also enrolled me in Boy Scouts, where I stayed until I was eighteen years old and had earned both a spot in the [Order of the Arrow](https://oa-bsa.org/) and the rank of [Eagle Scout](https://en.wikipedia.org/wiki/Eagle_Scout). You can read more about my experience in Boy Scouts and my Eagle project on the [scouting page](/scouts).'
  ],

  university: [
    {
      school: 'University of Michigan, College of Engineering',
      url: 'https://www.engin.umich.edu/',
      location: 'Ann Arbor, MI',
      details: [
        { label: 'Graduation', value: 'December 2015' },
        { label: 'Degree', value: "Bachelor's of Engineering, Computer Science Major, Music Minor" },
        { label: 'G.P.A.', value: '3.502' }
      ],
      coursesLabel: 'Courses',
      courses: ['Operating Systems', 'Networks', 'Security', 'Compilers', 'Cryptography', 'Databases', 'Game Design', 'Linear Algebra']
    },
    {
      school: 'JiaoTong University (上海交通大学)',
      url: 'https://en.sjtu.edu.cn/',
      location: 'Shanghai, China',
      details: [
        { label: 'Study abroad', value: 'May 2015 - August 2015' }
      ],
      coursesLabel: 'Courses',
      courses: ['Chinese Language', 'Chinese Culture']
    }
  ],

  // Shown after the teaching jobs flagged in jobs.js.
  teaching: [
    {
      name: 'Honor North-America Education',
      place: 'Shanghai, China',
      role: 'Part time teacher at an international high school',
      description: ['Developed curricula and taught Western Music History and Introductory Computer Programming with Python.']
    },
    {
      name: 'Boy Scouts',
      place: '',
      role: 'Den Chief',
      description: [
        'While in Boy Scouts, I served as a [Den Chief](https://www.scouting.org/training/youth/den-chief-training/) and helped lead and teach a group of cub scouts in my community and encourage them to transition to full Boy Scouts after Webelos.'
      ]
    }
  ],

  other: [
    'Excellent swimmer, literally been swimming since I was six months old',
    'Practiced piano for around ten years',
    'Wood carving',
    'Basic construction with lumber and plumbing',
    'Attended various entrepreneurship seminars and business classes'
  ],

  languages: {
    studied: ['Studied Chinese and Chinese culture in Shanghai, China', 'Studied Spanish in South America, in a small town in Ecuador'],
    duolingoSince: 2016,
    // note: '+' and '-' are kept from the old site (they mark how far along each language is).
    duolingo: [
      { name: 'Spanish', note: '+' },
      { name: 'Chinese', note: '+' },
      { name: 'Russian' },
      { name: 'Arabic' },
      { name: 'Portuguese', note: '-' },
      { name: 'Japanese', note: '-' },
      { name: 'German', note: '-' },
      { name: 'Korean', note: '-' }
    ]
  }
};

// Content for /scouts
export const scouts = {
  intro: [
    'I was in Boy Scouts from the first rank, Bobcat, of Cub Scouts until I was eighteen years old and had earned both a spot in the [Order of the Arrow](https://oa-bsa.org/) and the rank of [Eagle Scout](https://en.wikipedia.org/wiki/Eagle_Scout).',
    'While in Boy Scouts, I served as a [Den Chief](https://www.scouting.org/training/youth/den-chief-training/) and helped lead and teach a group of cub scouts in my community and encourage them to transition to full Boy Scouts after Webelos.'
  ],
  eagleProject: [
    'Raised money and gathered donated lumber and other supplies to get enough materials to lead a group of Boy Scouts to build a set of raised beds to grow food for a local wildlife sanctuary in my hometown.'
  ],
  photo: { src: '/eagle.jpg', alt: 'Photo of receiving the Eagle badge.', caption: 'Photo of receiving the Eagle badge.' }
};
