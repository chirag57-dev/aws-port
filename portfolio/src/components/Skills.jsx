import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import { skillIcon } from './SkillIcons';
import './Skills.css';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeTab);

  return (
    <section className="skills section" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <span className="section-label">What I work with</span>
        <h2 className="section-title" id="skills-heading">Skills &amp; Technologies</h2>
        <p className="section-desc">
          A snapshot of the tools I reach for most. Remove any you don&apos;t use from{' '}
          <code>src/data/skills.js</code>.
        </p>

        {/* Category tabs */}
        <div className="skills-tabs" role="tablist" aria-label="Skill categories">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              aria-controls={`panel-${cat.id}`}
              id={`tab-${cat.id}`}
              className={`skills-tab${activeTab === cat.id ? ' skills-tab--active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid — only the active panel rendered for accessibility */}
        {skillCategories.map((cat) => (
          <div
            key={cat.id}
            id={`panel-${cat.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${cat.id}`}
            hidden={cat.id !== activeTab}
          >
            <ul className="skills-grid">
              {cat.skills.map((skill) => (
                <li key={skill.id} className="skill-card">
                  <span className="skill-icon" aria-hidden="true">
                    {skillIcon(skill.id)}
                  </span>
                  <span className="skill-label">{skill.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
