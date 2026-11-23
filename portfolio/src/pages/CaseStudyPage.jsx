import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CaseStudy from '../components/CaseStudy';
import { projects } from '../data/projects';
import './CaseStudyPage.css';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  // Update page title
  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Case Study | Aman Kumar`;
    } else {
      document.title = 'Project not found | Aman Kumar';
    }
    return () => { document.title = 'Aman Kumar — Developer'; };
  }, [project]);

  return (
    <>
      <Nav />
      <main id="main-content" className="cs-page">
        {project ? (
          <CaseStudy project={project} />
        ) : (
          <div className="cs-not-found container">
            <h1>Project not found</h1>
            <p>That case study doesn&apos;t exist. Check the URL or browse all projects below.</p>
            <Link to="/#projects" className="btn btn-primary">
              Back to projects
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
