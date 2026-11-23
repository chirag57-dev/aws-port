import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/config';
import './Nav.css';

const navLinks = [
  { label: 'About',      href: '/#about' },
  { label: 'Skills',     href: '/#skills' },
  { label: 'Projects',   href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact',    href: '/#contact' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => setMenuOpen(false), [location]);

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Trap focus inside open mobile menu
  useEffect(() => {
    if (!menuOpen) return;
    const focusable = menuRef.current?.querySelectorAll(
      'a[href], button:not([disabled])'
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === 'Tab') {
        if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
          e.preventDefault();
          (e.shiftKey ? last : first)?.focus();
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    first?.focus();
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  function handleNavClick(e, href) {
    // Smooth-scroll to hash on the same page
    if (href.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const id = href.slice(2);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  }

  return (
    <header className={`nav-header${scrolled ? ' nav-header--scrolled' : ''}`} role="banner">
      <div className="container nav-inner">
        {/* Logo / wordmark */}
        <Link to="/" className="nav-logo" aria-label="Aman Kumar — home">
          <span className="nav-logo-bracket" aria-hidden="true">{'{'}</span>
          <span className="nav-logo-name">{siteConfig.name.split(' ')[0]}</span>
          <span className="nav-logo-bracket" aria-hidden="true">{'}'}</span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary navigation">
          <ul className="nav-links">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger toggle */}
        <button
          ref={toggleRef}
          className={`nav-toggle${menuOpen ? ' nav-toggle--open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="hamburger-line" aria-hidden="true" />
          <span className="hamburger-line" aria-hidden="true" />
          <span className="hamburger-line" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`nav-mobile${menuOpen ? ' nav-mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="nav-mobile-links">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="nav-mobile-link"
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay behind mobile menu */}
      {menuOpen && (
        <div
          className="nav-overlay"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
