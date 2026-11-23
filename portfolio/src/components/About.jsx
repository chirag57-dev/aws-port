import React from 'react';
import { siteConfig } from '../data/config';
import './About.css';

export default function About() {
  const { name, bio, currentCompany, currentRole, stats } = siteConfig;
  const hasStats = stats.some((s) => s.value !== null);

  return (
    <section className="about section" id="about" aria-labelledby="about-heading">
      <div className="container">
        <span className="section-label">About me</span>
        <h2 className="section-title" id="about-heading">A bit about myself</h2>

        <div className="about-grid">
          {/* Text */}
          <div className="about-text">
            <p className="about-lead">
              {bio}
            </p>

            {(currentCompany || currentRole) && (
              <p className="about-current">
                Currently{' '}
                {currentRole && <strong>{currentRole}</strong>}
                {currentRole && currentCompany && ' at '}
                {currentCompany && <strong>{currentCompany}</strong>}.
              </p>
            )}

            <div className="about-blocks">
              <AboutBlock title="What I do">
                I build full-stack web applications with a focus on performance,
                accessibility, and developer experience. I enjoy working across
                the entire stack — from database schema design to polished UI
                interactions.{/* [PLACEHOLDER] Update with your own description */}
              </AboutBlock>

              <AboutBlock title="Interests">
                Open source software, distributed systems, developer tooling,
                and writing about technology.{/* [PLACEHOLDER] */}
              </AboutBlock>

              <AboutBlock title="Outside the terminal">
                [PLACEHOLDER — add a personal touch here, e.g. hobbies, location, something memorable]
              </AboutBlock>
            </div>
          </div>

          {/* Stats + tech */}
          <div className="about-sidebar">
            {hasStats && (
              <div className="about-stats">
                {stats.map(
                  ({ label, value }) =>
                    value !== null && (
                      <div key={label} className="stat-card">
                        <span className="stat-value">{value}</span>
                        <span className="stat-label">{label}</span>
                      </div>
                    )
                )}
              </div>
            )}

            <div className="about-tech-card">
              <h3 className="about-tech-title">Core technologies</h3>
              <ul className="about-tech-list">
                {[
                  'JavaScript / TypeScript',
                  'React / Next.js',
                  'Node.js / Express',
                  'PostgreSQL / MongoDB',
                  'Docker / AWS',
                ].map((t) => (
                  <li key={t} className="about-tech-item">
                    <span className="about-tech-bullet" aria-hidden="true">▸</span>
                    {t}
                  </li>
                ))}
              </ul>
              <p className="about-tech-note">
                See the full <a href="/#skills">Skills section</a> below.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutBlock({ title, children }) {
  return (
    <div className="about-block">
      <h3 className="about-block-title">{title}</h3>
      <p className="about-block-body">{children}</p>
    </div>
  );
}
