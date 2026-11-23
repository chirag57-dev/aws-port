import React, { useState } from 'react';
import { siteConfig } from '../data/config';
import './Contact.css';

export default function Contact() {
  const { email, contactEndpoint } = siteConfig;
  const hasEndpoint = Boolean(contactEndpoint);

  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | error

  function validate() {
    const e = {};
    if (!fields.name.trim()) e.name = 'Name is required.';
    if (!fields.email.trim()) {
      e.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      e.email = 'Enter a valid email address.';
    }
    if (!fields.message.trim()) e.message = 'Message is required.';
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    if (!hasEndpoint) return; // shouldn't reach here — form is disabled

    setStatus('submitting');
    try {
      const res = await fetch(contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus('success');
        setFields({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="contact section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <span className="section-label">Get in touch</span>
        <h2 className="section-title" id="contact-heading">
          Interested in working together?
        </h2>
        <p className="section-desc">
          Whether you have a project in mind, a full-time role, or just want to say hello — I&apos;d
          love to hear from you.
        </p>

        <div className="contact-grid">
          {/* Left — info */}
          <div className="contact-info">
            <div className="contact-email-block">
              <p className="contact-email-label">Email me directly</p>
              <a href={`mailto:${email}`} className="contact-email-link">
                {email}
              </a>
            </div>

            <div className="contact-copy">
              <p>
                Available for <strong>freelance</strong>, <strong>full-time</strong>, and{' '}
                <strong>consulting</strong> engagements.
              </p>
            </div>

            {!hasEndpoint && (
              <div className="contact-no-endpoint" role="note" aria-label="Form configuration notice">
                <span className="contact-notice-icon" aria-hidden="true">ℹ</span>
                <p>
                  The contact form is not connected to an endpoint yet. Set{' '}
                  <code>contactEndpoint</code> in <code>src/data/config.js</code> to enable
                  submissions. Until then, please use the email link above.
                </p>
              </div>
            )}
          </div>

          {/* Right — form */}
          <div className="contact-form-wrap">
            {status === 'success' ? (
              <div className="contact-success" role="status" aria-live="polite">
                <span className="contact-success-icon" aria-hidden="true">✓</span>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <Field
                  id="contact-name"
                  name="name"
                  label="Name"
                  type="text"
                  value={fields.name}
                  error={errors.name}
                  onChange={handleChange}
                  autoComplete="name"
                  disabled={!hasEndpoint}
                />
                <Field
                  id="contact-email"
                  name="email"
                  label="Email"
                  type="email"
                  value={fields.email}
                  error={errors.email}
                  onChange={handleChange}
                  autoComplete="email"
                  disabled={!hasEndpoint}
                />
                <Field
                  id="contact-message"
                  name="message"
                  label="Message"
                  type="textarea"
                  value={fields.message}
                  error={errors.message}
                  onChange={handleChange}
                  disabled={!hasEndpoint}
                />

                {status === 'error' && (
                  <p className="contact-form-error" role="alert">
                    Something went wrong. Please try again or use the email link above.
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-primary contact-submit"
                  disabled={!hasEndpoint || status === 'submitting'}
                  aria-disabled={!hasEndpoint}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send message'}
                </button>

                {!hasEndpoint && (
                  <p className="contact-form-disabled-hint">
                    Form submission is disabled until a <code>contactEndpoint</code> is configured.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ id, name, label, type, value, error, onChange, autoComplete, disabled }) {
  const invalid = Boolean(error);
  const inputProps = {
    id,
    name,
    value,
    onChange,
    autoComplete,
    disabled,
    'aria-invalid': invalid || undefined,
    'aria-describedby': invalid ? `${id}-error` : undefined,
    className: `contact-input${invalid ? ' contact-input--error' : ''}${disabled ? ' contact-input--disabled' : ''}`,
  };

  return (
    <div className="contact-field">
      <label htmlFor={id} className="contact-label">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea {...inputProps} rows={5} />
      ) : (
        <input type={type} {...inputProps} />
      )}
      {invalid && (
        <p id={`${id}-error`} className="contact-field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
