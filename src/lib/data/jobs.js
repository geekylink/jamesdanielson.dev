// Work experience. The page sorts by `start` (newest first), so order in this file does not matter.
//
// To add a job, copy a block and fill it in:
//   {
//     id: 'company-role-year',           // unique
//     company: 'Company',
//     location: 'City, ST',              // or 'City (Remote)'
//     role: 'Job title',
//     start: '2024-03',                  // YYYY-MM
//     end: null,                         // YYYY-MM, or null if you still work there
//     description: ['Paragraph one.', 'Paragraph two with a [link](https://example.com).'],
//     tags: ['Python', 'AWS']
//   },
//
/** @type {import('./types.js').Job[]} */
export const jobs = [
  {
    id: 'six-nines-it',
    company: 'Six Nines IT',
    location: 'Michigan (Remote)',
    role: 'Software Engineer',
    start: '2021-11',
    end: null,
    description: [
      'Small software consultancy, working with a variety of major corporations primarily to stand up and manage cloud based workstations to improve the work-from-home experience and standardize the workstation experience.',
      'Took a leading role with a client and led weekly client syncs. Gathered information and requests from the client, created [Jira](https://www.atlassian.com/software/jira) tickets and distributed tasks to meet client needs.',
      'Also worked to design, deploy, and manage render farms in the cloud for processing major artistic projects.',
      'Helped design and deploy various solutions, such as custom AWS Lambdas, to problems that would arise and provided customization of modules to meet business needs.'
    ],
    tags: ['AWS Lambda', 'Cloud workstations', 'Render farms', 'Jira']
  },
  {
    id: 'niksun',
    company: 'NIKSUN',
    location: 'Michigan (Remote)',
    role: 'Software Engineer',
    start: '2020-08',
    end: '2021-11',
    description: [
      'Designed and developed several prototypes for high availability, data integrity and security analysis tools for a variety of systems: *BSD, Linux, and Windows, with one project requiring cross-platform support for all three. Primarily prototyped with Python, but C++ modules were developed for improved performance.',
      'Helped interview, hire, and train new team members for further product development beyond the initial prototypes.',
      'Worked with and had root access to many Linux and *BSD servers on a daily basis. Troubleshot odd issues, checked logs, etc.',
      'Implemented a Linux data center feature in an old enterprise edition of Windows with Python and scapy.'
    ],
    tags: ['Python', 'C++', 'scapy', 'Linux', '*BSD', 'Windows']
  },
  {
    id: 'pine-river-mines',
    company: 'Pine River Mines LLC',
    location: 'Michigan (Remote)',
    role: 'Technology Partner & Founder',
    start: '2017-11',
    end: '2020-12',
    description: [
      'Founded and ran a small family-owned cryptocurrency mining company. Primarily focused on mining with ASICs (Bitcoin, Litecoin, etc) and also mined with GPU rigs (primarily ETH).',
      'Constructed a miniature data center from an old hunting shack, upgrading the electrical and network capability to meet the requirements of a small mine.',
      'Developed a custom multi-threaded management application using Python, PyQt, C and Arduinos for managing the system and monitoring temperature, humidity and status of all mining equipment, with remote control. Miners and sensors fed data into a centralized on-site Raspberry Pi which could then be remotely connected to for management.',
      'Also implemented functionality to automatically determine the most profitable coin to mine and automatically switch ASICs and other equipment to another set of pools to maximize profitability.'
    ],
    tags: ['Python', 'PyQt', 'C', 'Arduino', 'Raspberry Pi']
  },
  {
    id: 'microsoft-sde',
    company: 'Microsoft',
    location: 'Redmond, WA',
    role: 'Software Development Engineer',
    start: '2016-02',
    end: '2017-10',
    description: [
      'Worked in the Operating Systems Group (OSG) Security Active Defense team doing research on vulnerabilities and developing systems to mitigate them.',
      'Developed a new tool called ProcessMitigations, written in C++ (Windows API), for managing security settings on Windows 10 Enterprise through PowerShell. It allows individual mitigations to be toggled on a system-wide or application basis, and lets the user export or import them as a security policy to use on other machines. Check out the tool on the [PowerShell Gallery](https://www.powershellgallery.com/packages/ProcessMitigations/1.0.7).'
    ],
    tags: ['C++', 'Windows API', 'PowerShell', 'Security']
  },
  {
    id: 'microsoft-intern-2014',
    company: 'Microsoft',
    location: 'Redmond, WA',
    role: 'Software Development Engineer Intern',
    start: '2014-05',
    end: '2014-08',
    description: ['Developed a static variable tracking tool in C++ for security code reviews on the Windows code base.'],
    tags: ['C++']
  },
  {
    id: 'umich-research',
    company: 'University of Michigan',
    location: 'Ann Arbor, MI',
    role: 'Research Assistant',
    start: '2013-09',
    end: '2014-04',
    description: [
      'Helped with various tasks and research with the Network and Security Research Group (NSRG) on Python based software binary analysis, in an attempt to develop a novel way to protect machines from malware.',
      'Worked with [IDA Pro](https://hex-rays.com/IDA-pro/) to debug malware and worked on analysis and disassembly scripts on both Windows and Linux systems.'
    ],
    tags: ['Python', 'IDA Pro', 'Malware analysis']
  },
  {
    id: 'microsoft-intern-2013',
    company: 'Microsoft',
    location: 'Redmond, WA',
    role: 'Software Development Engineer Intern',
    start: '2013-05',
    end: '2013-08',
    description: [
      'Worked on application frameworks for Windows Phone, implementing features in C++ to expose functionality in Visual Studio for other developers to use.',
      'Also developed a test application to expose and test the added functionality.'
    ],
    tags: ['C++', 'Visual Studio', 'Windows Phone']
  },
  {
    id: 'umich-eecs101',
    company: 'University of Michigan',
    location: 'Ann Arbor, MI',
    role: 'Tutor/IA (Instructional Aid) for EECS 101',
    start: '2012-09',
    end: '2012-12',
    alsoTeaching: true,
    description: [
      'I helped write and teach the labs for EECS 101, a new class at the University of Michigan which was designed to encourage interest in Computer Science for students with zero prior experience.',
      'Taught students basic smartphone app design using the MIT App Inventor to introduce programming logic to beginners.',
      'Held regular weekly office hours for students to get help with homework and other issues.'
    ],
    tags: ['Teaching', 'MIT App Inventor']
  },
  {
    id: 'jpmorgan-intern',
    company: 'J.P. Morgan',
    location: 'New York City',
    role: 'Application Developer Intern',
    start: '2012-06',
    end: '2012-08',
    description: [
      'Worked in Treasury & Securities Services on a web based application written in Java with the Spring Framework for entitlement management.',
      'Redesigned parts of the frontend to be cross-browser compatible (HTML, JavaScript).',
      'Participated in a corporate hack-a-thon and wrote a simple prototype project with Python using the Django framework.'
    ],
    tags: ['Java', 'Spring', 'HTML', 'JavaScript', 'Python', 'Django']
  }
];
