import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/portfolioData';
import emailjs from '@emailjs/browser';

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
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
          <span className="section-label">Get in Touch</span>
          <h2 style={headingStyle}>Let's build something exceptional</h2>
        </motion.div>

        <div style={layoutStyle}>

          {/* Left — info & social channels */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={infoColStyle}
          >
            <p style={descStyle}>
              Whether you're looking to build a new fullstack product from scratch, optimize an existing architecture, 
              or discuss an engineering role — my inbox is always open.
            </p>

            <div style={contactLinksStyle}>
              {socialLinks.map(link => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={contactLinkStyle}
                  whileHover={{ x: 4, borderColor: 'rgba(99, 102, 241, 0.4)' }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                >
                  <span style={platformStyle}>{link.platform}</span>
                  <span style={handleStyle}>{link.handle} ↗</span>
                </motion.a>
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
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={fieldStyle}>
              <label style={labelStyle}>Your Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="form-input"
                placeholder="Michael Okpara"
              />
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Email Address</label>
              <input
                type="email"
                name="user_email"
                required
                className="form-input"
                placeholder="you@domain.com"
              />
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Project Details or Message</label>
              <textarea
                name="message"
                required
                className="form-input"
                placeholder="Tell me about your product, timeline, or engineering goals..."
                style={{ minHeight: '135px', resize: 'vertical' }}
              />
            </div>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={successStyle}
              >
                ✓ Message received! I will get back to you promptly.
              </motion.div>
            ) : (
              <motion.button
                type="submit"
                disabled={isSubmitting}
                style={{ ...submitStyle, opacity: isSubmitting ? 0.6 : 1 }}
                whileHover={!isSubmitting ? { scale: 1.02, boxShadow: '0 8px 24px -4px rgba(59, 130, 246, 0.4)' } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                {isSubmitting ? 'Transmitting…' : 'Send Message →'}
              </motion.button>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  );
};

/* ── Styles ── */
const sectionStyle = { padding: '6.5rem 0 8.5rem' };

const headingStyle = {
  fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
  fontWeight: '800',
  letterSpacing: '-1px',
  marginBottom: '3rem',
};

const layoutStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '3.5rem',
  alignItems: 'start',
};

const infoColStyle = {};

const descStyle = {
  color: 'var(--text-secondary)',
  lineHeight: '1.85',
  fontSize: '1rem',
  marginBottom: '2.25rem',
};

const contactLinksStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
};

const contactLinkStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 0.5rem',
  borderBottom: '1px solid var(--border)',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'all 200ms ease',
};

const platformStyle = {
  fontSize: '0.82rem',
  fontFamily: 'var(--font-mono)',
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
};

const handleStyle = {
  fontSize: '0.92rem',
  color: '#93c5fd',
  fontWeight: '500',
};

const formStyle = {
  padding: '2.2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.4rem',
};

const fieldStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const labelStyle = {
  fontSize: '0.8rem',
  fontFamily: 'var(--font-mono)',
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
};

const submitStyle = {
  background: 'linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)',
  color: '#fff',
  padding: '0.9rem 1.75rem',
  borderRadius: 'var(--radius-md)',
  fontWeight: '600',
  fontSize: '0.95rem',
  border: 'none',
  cursor: 'pointer',
  alignSelf: 'flex-start',
  boxShadow: '0 4px 18px rgba(59, 130, 246, 0.35)',
};

const successStyle = {
  background: 'rgba(16, 185, 129, 0.1)',
  border: '1px solid rgba(16, 185, 129, 0.35)',
  color: '#34d399',
  padding: '1rem 1.25rem',
  borderRadius: 'var(--radius-sm)',
  fontSize: '0.92rem',
  fontWeight: '500',
};

export default Contact;
