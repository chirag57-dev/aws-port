/**
 * EXPERIENCE & EDUCATION
 * Entries are shown newest-first in the timeline.
 * type: 'work' | 'education' | 'project'
 * endDate: null means "Present"
 */

export const experienceItems = [
  {
    id: 1,
    type: 'work',                              // [PLACEHOLDER] change to real type
    company: 'Company Name',                   // [PLACEHOLDER]
    role: 'Job Title',                         // [PLACEHOLDER]
    startDate: '20XX',                         // [PLACEHOLDER]
    endDate: null,                             // null = Present
    responsibilities: [
      'Describe a key responsibility or achievement.', // [PLACEHOLDER]
      'Describe another responsibility or achievement.',
    ],
    technologies: ['React', 'Node.js'],        // [PLACEHOLDER]
  },
  {
    id: 2,
    type: 'education',
    company: 'University / Institution Name',  // [PLACEHOLDER]
    role: 'Degree / Course Name',              // [PLACEHOLDER]
    startDate: '20XX',                         // [PLACEHOLDER]
    endDate: '20XX',                           // [PLACEHOLDER]
    responsibilities: [
      'Relevant coursework, thesis, or project.', // [PLACEHOLDER]
    ],
    technologies: [],
  },
];
