import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { personalDetails, socialLinks } from '../data/portfolioData';
import emailjs from '@emailjs/browser';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess]       = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_7ewymsv',
      'template_w3rkqjs',
      e.target,
      { publicKey: 'RrmEUJAYAFkEDE6dG' }
    ).then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      form.current.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, (error) => {
      setIsSubmitting(false);
      console.error(error.text);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div className="container">

        <motion.div {...fadeUp}>
          <p className="section-label">Contact</p>
          <h2 style={headingStyle}>Let's work together</h2>
        </motion.div>

        <div style={layoutStyle}>

          {/* Left — info */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={infoColStyle}
          >
            <p style={descStyle}>
              I'm currently open to freelance projects and full-time roles.
              If you have something in mind — or just want to say hi — drop me a message.
            </p>

            <div style={contactLinksStyle}>
              {socialLinks.map(link => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={contactLinkStyle}
                >
                  <span style={platformStyle}>{link.platform}</span>
                  <span style={handleStyle}>{link.handle}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            className="card"
            style={formStyle}
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div style={fieldStyle}>
              <label style={labelStyle}>Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="form-input"
                placeholder="Your name"
              />
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="form-input"
                placeholder="you@email.com"
              />
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Message</label>
              <textarea
                name="message"
                required
                className="form-input"
                placeholder="Tell me about your project or just say hi..."
                style={{ minHeight: '130px', resize: 'vertical' }}
              />
            </div>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                style={successStyle}
              >
                Message sent — I'll get back to you soon!
              </motion.div>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                style={{ ...submitStyle, opacity: isSubmitting ? 0.6 : 1 }}
              >
                {isSubmitting ? 'Sending…' : 'Send message →'}
              </button>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  );
};

/* ── Styles ── */
const sectionStyle = { padding: '6rem 0 8rem' };

const headingStyle = {
  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
  fontWeight: '800',
  letterSpacing: '-0.8px',
  marginBottom: '3rem',
};

const layoutStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '3rem',
  alignItems: 'start',
};

const infoColStyle = {};

const descStyle = {
  color: 'var(--text-secondary)',
  lineHeight: '1.8',
  fontSize: '0.97rem',
  marginBottom: '2rem',
};

const contactLinksStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
};

const contactLinkStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.85rem 0',
  borderBottom: '1px solid var(--border)',
  textDecoration: 'none',
  color: 'inherit',
};

const platformStyle = {
  fontSize: '0.8rem',
  fontFamily: 'var(--font-mono)',
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
};

const handleStyle = {
  fontSize: '0.9rem',
  color: 'var(--text-secondary)',
  fontWeight: '500',
};

const formStyle = {
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
};

const fieldStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.45rem',
};

const labelStyle = {
  fontSize: '0.8rem',
  fontFamily: 'var(--font-mono)',
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
};

const submitStyle = {
  background: 'var(--accent)',
  color: '#fff',
  padding: '0.85rem 1.5rem',
  borderRadius: 'var(--radius-md)',
  fontWeight: '600',
  fontSize: '0.92rem',
  border: 'none',
  cursor: 'pointer',
  alignSelf: 'flex-start',
};

const successStyle = {
  background: 'rgba(74,222,128,0.07)',
  border: '1px solid rgba(74,222,128,0.3)',
  color: '#4ade80',
  padding: '0.875rem 1rem',
  borderRadius: 'var(--radius-sm)',
  fontSize: '0.88rem',
  fontWeight: '500',
};

export default Contact;
