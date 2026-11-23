import React from 'react';
import { articles } from '../data/writing';
import './Writing.css';

/**
 * Writing section — only renders when articles array has at least one entry.
 */
export default function Writing() {
  if (articles.length === 0) return null;

  return (
    <section className="writing section" id="writing" aria-labelledby="writing-heading">
      <div className="container">
        <span className="section-label">Writing</span>
        <h2 className="section-title" id="writing-heading">Articles</h2>
        <p className="section-desc">
          Thoughts on software, systems, and the craft of building things.
        </p>

        <ul className="writing-grid" aria-label="Articles">
          {articles.slice(0, 3).map((article) => (
            <li key={article.id}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ArticleCard({ article }) {
  const { title, excerpt, publicationDate, readingTimeMinutes, url } = article;

  const formatted = new Date(publicationDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="article-card">
      <div className="article-meta">
        <time dateTime={publicationDate} className="article-date">
          {formatted}
        </time>
        <span className="article-sep" aria-hidden="true">·</span>
        <span className="article-read-time">{readingTimeMinutes} min read</span>
      </div>
      <h3 className="article-title">
        <a href={url} target="_blank" rel="noopener noreferrer" className="article-link">
          {title}
        </a>
      </h3>
      <p className="article-excerpt">{excerpt}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="article-cta">
        Read article →
      </a>
    </article>
  );
}
