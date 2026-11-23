import React from 'react';
import { siteConfig } from '../data/config';
import './OpenSource.css';

/**
 * Open Source section.
 * No API tokens are used. Activity data is not fetched client-side.
 * Displays profile link and placeholder contribution notes.
 */
export default function OpenSource() {
  const { github } = siteConfig;

  return (
    <section className="oss section" id="open-source" aria-labelledby="oss-heading">
      <div className="container">
        <span className="section-label">Open source</span>
        <h2 className="section-title" id="oss-heading">Open Source Contributions</h2>
        <p className="section-desc">
          I believe in giving back to the ecosystem. Here are some ways I contribute.{' '}
          <span className="placeholder-notice">[PLACEHOLDER]</span>{' '}
          Replace with your real contributions in this component.
        </p>

        <div className="oss-grid">
          {/* Activity notice */}
          <div className="oss-activity-card">
            <h3 className="oss-card-title">Contribution Activity</h3>
            <p className="oss-card-body">
              Contribution graphs are not embedded here because they require an API token that
              would be exposed in browser code. Visit the GitHub profile below to see activity
              directly on GitHub.
            </p>
            {github && (
              <a
                href={`${github}?tab=overview`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                View activity on GitHub →
              </a>
            )}
          </div>

          {/* Notable contributions — placeholder */}
          <div className="oss-contributions">
            <h3 className="oss-card-title">Notable Contributions</h3>
            <ul className="oss-contrib-list">
              <OSSItem
                repo="org/repo-name"
                description="Describe the contribution — bug fix, feature, docs improvement."
                url={null}
              />
              <OSSItem
                repo="org/another-repo"
                description="Describe the contribution."
                url={null}
              />
            </ul>
            <p className="oss-placeholder-note">
              <span className="placeholder-notice">[PLACEHOLDER]</span>{' '}
              Edit <code>src/components/OpenSource.jsx</code> and add your real contributions with repository URLs.
            </p>
          </div>
        </div>

        {github && (
          <div className="oss-profile-cta">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <GitHubIcon />
              View GitHub Profile
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function OSSItem({ repo, description, url }) {
  return (
    <li className="oss-contrib-item">
      <div className="oss-contrib-header">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer" className="oss-repo-link">
            {repo}
          </a>
        ) : (
          <span className="oss-repo-name">{repo}</span>
        )}
        {!url && <span className="placeholder-notice">[PLACEHOLDER]</span>}
      </div>
      <p className="oss-contrib-desc">{description}</p>
    </li>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}
