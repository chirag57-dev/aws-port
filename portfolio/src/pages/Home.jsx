import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import OpenSource from '../components/OpenSource';
import Writing from '../components/Writing';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <OpenSource />
        <Writing />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
