/** @type {import('../types.js').Project} */
export default {
  slug: 'process-mitigations',
  title: 'ProcessMitigations',
  category: 'tool',
  order: 50,
  summary:
    'A C++ (Windows API) tool for managing security settings on Windows 10 Enterprise through PowerShell, built at Microsoft.',
  tags: ['C++', 'Windows API', 'PowerShell', 'Security'],
  links: [{ label: 'PowerShell Gallery', url: 'https://www.powershellgallery.com/packages/ProcessMitigations/1.0.7' }],
  blocks: [
    {
      type: 'text',
      heading: 'About',
      body: [
        'Developed while working in the Operating Systems Group (OSG) Security Active Defense team at Microsoft, where I did research on vulnerabilities and developed systems to mitigate them.',
        'ProcessMitigations manages security settings on Windows 10 Enterprise through PowerShell. It allows individual mitigations to be toggled on a system-wide or application basis, and lets the user export or import them as a security policy to use on other machines.'
      ]
    }
  ]
};
