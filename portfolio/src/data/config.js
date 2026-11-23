/**
 * SITE CONFIGURATION
 * Edit these values to personalise your portfolio.
 * All fields marked [PLACEHOLDER] need real content before publishing.
 */

export const siteConfig = {
  // ── Identity ──────────────────────────────────────────────────────────────
  name: 'Aman Kumar',
  role: 'Developer',

  // Short intro shown in hero and <meta> description
  bio: 'Short Introduction', // [PLACEHOLDER] Replace with 1–2 sentence bio

  // ── Contact ───────────────────────────────────────────────────────────────
  email: 'your@email.com', // [PLACEHOLDER]

  // ── Social links ──────────────────────────────────────────────────────────
  // Set a value to null to hide the link entirely
  github: 'https://github.com/yourusername',      // [PLACEHOLDER]
  linkedin: 'https://linkedin.com/in/yourusername', // [PLACEHOLDER]
  twitter: 'https://twitter.com/yourusername',     // [PLACEHOLDER]

  // ── Resume ────────────────────────────────────────────────────────────────
  // Set resumeFile to null to hide the "Download Resume" button
  resumeFile: null, // e.g. '/assets/resume.pdf' once the file exists

  // ── Contact form ──────────────────────────────────────────────────────────
  // Set contactEndpoint to null to show the email-fallback message
  contactEndpoint: null, // e.g. 'https://formspree.io/f/YOUR_ID'

  // ── Current work ──────────────────────────────────────────────────────────
  // Set to null to omit from the About section
  currentCompany: null, // [PLACEHOLDER] e.g. 'Acme Corp'
  currentRole: null,    // [PLACEHOLDER] e.g. 'Senior Engineer'

  // ── About stats ───────────────────────────────────────────────────────────
  // Each stat will only be shown if its value is not null
  stats: [
    { label: 'Years of experience', value: null }, // [PLACEHOLDER] e.g. 4
    { label: 'Projects shipped',    value: null }, // [PLACEHOLDER] e.g. 20
    { label: 'Open-source PRs',     value: null }, // [PLACEHOLDER] e.g. 60
  ],
};
