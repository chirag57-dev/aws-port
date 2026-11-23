import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../data/config';
import './Hero.css';

const typingPhrases = [
  'Full-Stack Developer',
  'Open Source Contributor',
  'Tech Writer',
];

function useTypingEffect(phrases, speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const prefersReduced = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (prefersReduced.current) return; // static fallback rendered separately

    const current = phrases[phraseIndex];
    let timeout;

    if (!deleting && charIndex <= current.length) {
      setDisplayed(current.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex >= 0) {
      setDisplayed(current.slice(0, charIndex));
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex, phrases, speed, pause]);

  return prefersReduced.current ? null : displayed;
}

export default function Hero() {
  const typedText = useTypingEffect(typingPhrases);
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const { name, bio, email, github, linkedin, twitter, resumeFile } = siteConfig;

  return (
    <section className="hero section" id="hero" aria-labelledby="hero-heading">
      <div className="container hero-inner">
        {/* Left column — text */}
        <div className="hero-text">
          <p className="hero-greeting" aria-hidden="true">Hi, I&apos;m</p>
          <h1 id="hero-heading" className="hero-name">
            {name}
          </h1>

          {/* Typing animation with static fallback */}
          <div className="hero-role" aria-label={`${typingPhrases.join(', ')}`}>
            {prefersReduced ? (
              <span className="hero-role-static">
                {typingPhrases[0]}
              </span>
            ) : (
              <>
                <span className="hero-role-typed" aria-hidden="true">
                  {typedText}
                </span>
                <span className="hero-cursor" aria-hidden="true" />
                {/* Screen-reader gets static text */}
                <span className="sr-only">{typingPhrases[0]}</span>
              </>
            )}
          </div>

          <p className="hero-bio">{bio}</p>

          <div className="hero-actions">
            <a href="/#projects" className="btn btn-primary">
              View Projects
            </a>
            {resumeFile ? (
              <a
                href={resumeFile}
                download
                className="btn btn-outline"
              >
                Download Resume
              </a>
            ) : null}
          </div>

          {/* Social links */}
          <div className="hero-social" role="list" aria-label="Social links">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub profile"
                role="listitem"
              >
                <GitHubIcon />
                <span>GitHub</span>
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn profile"
                role="listitem"
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="Twitter / X profile"
                role="listitem"
              >
                <TwitterIcon />
                <span>Twitter / X</span>
              </a>
            )}
          </div>
        </div>

        {/* Right column — terminal */}
        <div className="hero-terminal" aria-label="Developer introduction in terminal style" role="complementary">
          <div className="terminal-chrome" aria-hidden="true">
            <span className="terminal-dot terminal-dot--red" />
            <span className="terminal-dot terminal-dot--yellow" />
            <span className="terminal-dot terminal-dot--green" />
            <span className="terminal-title">~/portfolio</span>
          </div>
          <div className="terminal-body">
            <TerminalLine prompt="$" command="whoami" />
            <TerminalOutput>{name.toLowerCase().replace(' ', '_')}</TerminalOutput>

            <TerminalLine prompt="$" command="cat about.txt" />
            <TerminalOutput>{bio}</TerminalOutput>

            <TerminalLine prompt="$" command="echo $ROLE" />
            <TerminalOutput>{typingPhrases[0]}</TerminalOutput>

            {email && (
              <>
                <TerminalLine prompt="$" command="echo $EMAIL" />
                <TerminalOutput>{email}</TerminalOutput>
              </>
            )}

            <TerminalLine prompt="$" command="ls skills/" />
            <TerminalOutput>
              JavaScript&nbsp;&nbsp;TypeScript&nbsp;&nbsp;React&nbsp;&nbsp;Node.js&nbsp;&nbsp;Python
            </TerminalOutput>

            <TerminalLine prompt="$" command="" active />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="/#about" className="hero-scroll-cue" aria-label="Scroll to About section">
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}

function TerminalLine({ prompt, command, active }) {
  return (
    <p className="terminal-line">
      <span className="terminal-prompt">{prompt}</span>{' '}
      <span className="terminal-command">{command}</span>
      {active && <span className="terminal-cursor-blink" aria-hidden="true" />}
    </p>
  );
}

function TerminalOutput({ children }) {
  return <p className="terminal-output">{children}</p>;
}

/* ── Inline SVG icons ─────────────────────────────────────────────────────── */
function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
