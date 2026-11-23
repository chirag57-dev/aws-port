/**
 * SKILLS
 * Remove any technology you don't use. Each item needs a label and an svg icon path.
 * Icons are inline SVG strings — swap in your preferred icon set if desired.
 */

export const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { id: 'js',  label: 'JavaScript' },
      { id: 'ts',  label: 'TypeScript' },
      { id: 'py',  label: 'Python' },
      { id: 'go',  label: 'Go' },
      { id: 'sql', label: 'SQL' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { id: 'react',    label: 'React' },
      { id: 'nextjs',   label: 'Next.js' },
      { id: 'vue',      label: 'Vue' },
      { id: 'nuxt',     label: 'Nuxt' },
      { id: 'tailwind', label: 'Tailwind CSS' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { id: 'nodejs',  label: 'Node.js' },
      { id: 'express', label: 'Express' },
      { id: 'pg',      label: 'PostgreSQL' },
      { id: 'mongo',   label: 'MongoDB' },
      { id: 'redis',   label: 'Redis' },
      { id: 'graphql', label: 'GraphQL' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps',
    skills: [
      { id: 'docker',  label: 'Docker' },
      { id: 'k8s',     label: 'Kubernetes' },
      { id: 'aws',     label: 'AWS' },
      { id: 'vercel',  label: 'Vercel' },
      { id: 'ghactions', label: 'GitHub Actions' },
      { id: 'cicd',    label: 'CI/CD' },
    ],
  },
];
