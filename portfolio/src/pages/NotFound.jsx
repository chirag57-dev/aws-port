import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — Page not found | Aman Kumar';
    return () => { document.title = 'Aman Kumar — Developer'; };
  }, []);

  return (
    <>
      <Nav />
      <main
        id="main-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100dvh',
          gap: '1.5rem',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent)',
            fontSize: '0.875rem',
          }}
        >
          404
        </p>
        <h1 style={{ color: 'var(--text-primary)' }}>Page not found</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '40ch' }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Go home
        </Link>
      </main>
      <Footer />
    </>
  );
}
