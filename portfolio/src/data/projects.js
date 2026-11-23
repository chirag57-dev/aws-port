/**
 * PROJECTS
 * Each project may appear as a card on the homepage and as a full case study.
 * Fields marked [PLACEHOLDER] need real content.
 * Set liveUrl or repoUrl to null to hide the respective link.
 */

export const projects = [
  {
    id: 1,
    slug: 'project-one',
    title: 'Project One',                       // [PLACEHOLDER]
    shortDescription:
      'A short description of what this project does and the problem it solves.', // [PLACEHOLDER]
    image: null,              // [PLACEHOLDER] e.g. '/assets/images/project-one.png'
    imageAlt: 'Screenshot of Project One',       // [PLACEHOLDER]
    tags: ['React', 'Node.js', 'PostgreSQL'],    // [PLACEHOLDER]
    repoUrl: null,            // [PLACEHOLDER] e.g. 'https://github.com/you/project-one'
    liveUrl: null,            // [PLACEHOLDER] e.g. 'https://project-one.dev'
    // outcome: verified result or null to show placeholder label
    outcome: null,            // [PLACEHOLDER] e.g. 'Reduced load time by 40%'

    // ── Case-study content ────────────────────────────────────────────────
    problem:
      'Describe the problem this project solved and who it was for.', // [PLACEHOLDER]
    targetUsers: 'Target user group.',           // [PLACEHOLDER]
    myRole: 'Describe your specific responsibilities.',// [PLACEHOLDER]
    constraints:
      'Describe technical constraints or tradeoffs you navigated.', // [PLACEHOLDER]
    architecture:
      'Describe the architecture or key data-flow decisions.', // [PLACEHOLDER]
    lessonsLearned:
      'What did you learn? What would you do differently?', // [PLACEHOLDER]
    screenshots: [], // [PLACEHOLDER] Array of { src, alt } objects
  },
  {
    id: 2,
    slug: 'project-two',
    title: 'Project Two',
    shortDescription:
      'A short description of what this project does and the problem it solves.',
    image: null,
    imageAlt: 'Screenshot of Project Two',
    tags: ['TypeScript', 'Next.js', 'MongoDB'],
    repoUrl: null,
    liveUrl: null,
    outcome: null,
    problem: 'Describe the problem this project solved and who it was for.',
    targetUsers: 'Target user group.',
    myRole: 'Describe your specific responsibilities.',
    constraints: 'Describe technical constraints or tradeoffs you navigated.',
    architecture: 'Describe the architecture or key data-flow decisions.',
    lessonsLearned: 'What did you learn? What would you do differently?',
    screenshots: [],
  },
  {
    id: 3,
    slug: 'project-three',
    title: 'Project Three',
    shortDescription:
      'A short description of what this project does and the problem it solves.',
    image: null,
    imageAlt: 'Screenshot of Project Three',
    tags: ['Python', 'Docker', 'AWS'],
    repoUrl: null,
    liveUrl: null,
    outcome: null,
    problem: 'Describe the problem this project solved and who it was for.',
    targetUsers: 'Target user group.',
    myRole: 'Describe your specific responsibilities.',
    constraints: 'Describe technical constraints or tradeoffs you navigated.',
    architecture: 'Describe the architecture or key data-flow decisions.',
    lessonsLearned: 'What did you learn? What would you do differently?',
    screenshots: [],
  },
];
