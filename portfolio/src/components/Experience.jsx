import React from 'react';
import { experienceItems } from '../data/experience';
import './Experience.css';

const typeLabel = {
  work:      'Work',
  education: 'Education',
  project:   'Project',
};

export default function Experience() {
  return (
    <section className="experience section" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <span className="section-label">Background</span>
        <h2 className="section-title" id="experience-heading">Experience &amp; Education</h2>
        <p className="section-desc">
          Where I&apos;ve worked, studied, and built things.{' '}
          <span className="placeholder-notice">[PLACEHOLDER]</span>{' '}
          Edit entries in <code>src/data/experience.js</code>.
        </p>

        {/* Timeline */}
        <ol className="timeline" aria-label="Career timeline">
          {experienceItems.map((item, index) => (
            <li key={item.id} className="timeline-item">
              {/* Connector line + dot */}
              <div className="timeline-track" aria-hidden="true">
                <div className="timeline-dot" />
                {index < experienceItems.length - 1 && (
                  <div className="timeline-line" />
                )}
              </div>

              {/* Content */}
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className={`timeline-badge timeline-badge--${item.type}`}>
                    {typeLabel[item.type] ?? item.type}
                  </span>
                  <span className="timeline-dates">
                    <time>{item.startDate}</time>
                    {' – '}
                    {item.endDate ? <time>{item.endDate}</time> : <span>Present</span>}
                  </span>
                </div>

                <h3 className="timeline-role">{item.role}</h3>
                <p className="timeline-company">{item.company}</p>

                {item.responsibilities.length > 0 && (
                  <ul className="timeline-responsibilities" aria-label="Responsibilities">
                    {item.responsibilities.map((r, i) => (
                      <li key={i} className="timeline-resp-item">
                        <span className="timeline-resp-bullet" aria-hidden="true">▸</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                )}

                {item.technologies.length > 0 && (
                  <ul className="timeline-tags" aria-label="Technologies">
                    {item.technologies.map((t) => (
                      <li key={t}>
                        <span className="tag">{t}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
