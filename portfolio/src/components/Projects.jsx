import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
  return (
    <section className="projects section" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <span className="section-label">Featured work</span>
        <h2 className="section-title" id="projects-heading">Projects</h2>
        <p className="section-desc">
          A selection of things I&apos;ve built. Click a card for the full case study.{' '}
          <span className="placeholder-notice">[PLACEHOLDER]</span>{' '}
          Replace with your real projects in <code>src/data/projects.js</code>.
        </p>

        <ul className="projects-grid" aria-label="Featured projects">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
