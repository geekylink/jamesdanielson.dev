import { links } from './site.js';

// Text for /about. Each key becomes one window on the page.
// Removed: the old "places I have visited" web app link (it was labelled "Broken").
export const about = {
  intro: [
    "Hey, I'm James Danielson and I am a software developer with over ten years of experience. I've worked in a wide variety of fields from fintech to cyber security, and I like to make games sometimes.",
    `If you're looking for a software developer, check out my [résumé](/Resume.pdf). You can also find me on [LinkedIn](${links.linkedin}).`
  ],
  background: [
    'Graduated from the University of Michigan with a degree in Computer Science and studied a semester abroad at JiaoTong University in Shanghai, China.',
    'I also have experience teaching at both the university and high school level, along with a strange mix of other educational experience. Read more about my [education](/education).',
    'You can also check out my [job experience](/experience).',
    'Prior to university, I was a member of Boy Scouts and achieved the rank of Eagle. You can read about my [scouting experience](/scouts).',
    'You can also learn more about my personal [projects](/projects).'
  ],
  travel: [
    "I've lived on three continents and visited over twenty countries thus far, with a tendency to always be on the move. As a result, I have a full office that can fit into my backpack. It comes complete with an extra portable monitor, and more than enough computing power to simulate an entire network of connected machines, even backup power and data for internet.",
    'I tend to travel slowly, staying in one location for a long time (sometimes years) and gradually exploring the surrounding area.'
  ]
};
