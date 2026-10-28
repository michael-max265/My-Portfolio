import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails, socialLinks } from '../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
  return (
    <section id="home" style={sectionStyle}>
      <div className="container" style={containerStyle}>

        {/* Left — text content */}
        <div style={leftStyle}>
          <motion.p {...fadeUp(0.1)} style={availStyle}>
            <span style={dotStyle} />
            Available for work
          </motion.p>

          <motion.h1 {...fadeUp(0.2)} style={headingStyle}>
            Hi, I'm Michael.<br />
            <span style={{ color: 'var(--text-secondary)', fontWeight: 700 }}>
              I build things for the web.
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.3)} style={bioStyle}>
            Frontend developer focused on crafting clean, fast interfaces.
            I care deeply about UX, performance, and the little details that
            make products feel great to use.
          </motion.p>

          <motion.div {...fadeUp(0.4)} style={ctaRowStyle}>
            <a href="#projects" style={primaryBtnStyle}>
              See my work
            </a>
            <a href="#contact" style={ghostBtnStyle}>
              Get in touch
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.5)} style={socialRowStyle}>
            {socialLinks.map(link => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                style={socialLinkStyle}
                title={link.platform}
              >
                {link.platform}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — stat card grid */}
        <motion.div
          style={rightStyle}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={statGridStyle}>
            {stats.map((s, i) => (
              <div key={i} className="card" style={statCardStyle}>
                <span style={statNumStyle}>{s.value}</span>
                <span style={statLabelStyle}>{s.label}</span>
              </div>
            ))}
          </div>

          <div className="card" style={codeCardStyle}>
            <p style={codeLineStyle}>
              <span style={{ color: '#888' }}>const</span>{' '}
              <span style={{ color: '#7dd3fc' }}>dev</span>{' '}
              <span style={{ color: '#888' }}>=</span>{' '}
              <span style={{ color: '#f9a8d4' }}>'Michael Okpara'</span>
            </p>
            <p style={codeLineStyle}>
              <span style={{ color: '#888' }}>// Frontend · UI · React</span>
            </p>
            <p style={{ ...codeLineStyle, marginTop: '0.5rem' }}>
              <span style={{ color: '#86efac' }}>status</span>
              <span style={{ color: '#888' }}>:</span>{' '}
              <span style={{ color: '#fde68a' }}>'open to roles'</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const stats = [
  { value: '5+', label: 'Projects shipped' },
  { value: '3+', label: 'Years building' },
  { value: '100%', label: 'Client satisfaction' },
  { value: 'React', label: 'Primary stack' },
];

/* ── Styles ── */
const sectionStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  paddingTop: '90px',
  paddingBottom: '4rem',
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '4rem',
  flexWrap: 'wrap',
};

const leftStyle = {
  flex: '1 1 380px',
  maxWidth: '560px',
};

const availStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  fontSize: '0.82rem',
  color: 'var(--text-secondary)',
  marginBottom: '1.5rem',
  fontFamily: 'var(--font-mono)',
};

const dotStyle = {
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  background: '#4ade80',
  boxShadow: '0 0 8px #4ade80',
  flexShrink: 0,
};

const headingStyle = {
  fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
  fontWeight: '800',
  lineHeight: '1.18',
  marginBottom: '1.4rem',
  letterSpacing: '-1.5px',
};

const bioStyle = {
  fontSize: '1rem',
  color: 'var(--text-secondary)',
  lineHeight: '1.75',
  marginBottom: '2rem',
  maxWidth: '440px',
};

const ctaRowStyle = {
  display: 'flex',
  gap: '0.75rem',
  flexWrap: 'wrap',
  marginBottom: '2rem',
};

const primaryBtnStyle = {
  background: 'var(--accent)',
  color: '#fff',
  padding: '0.75rem 1.5rem',
  borderRadius: 'var(--radius-md)',
  fontWeight: '600',
  fontSize: '0.92rem',
  letterSpacing: '0.01em',
};

const ghostBtnStyle = {
  color: 'var(--text-secondary)',
  padding: '0.75rem 1.5rem',
  borderRadius: 'var(--radius-md)',
  fontWeight: '600',
  fontSize: '0.92rem',
  border: '1px solid var(--border)',
};

const socialRowStyle = {
  display: 'flex',
  gap: '1.25rem',
};

const socialLinkStyle = {
  fontSize: '0.82rem',
  color: 'var(--text-muted)',
  fontFamily: 'var(--font-mono)',
  transition: 'color 150ms ease',
};

const rightStyle = {
  flex: '1 1 280px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const statGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.75rem',
};

const statCardStyle = {
  padding: '1.25rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
};

const statNumStyle = {
  fontSize: '1.6rem',
  fontWeight: '800',
  color: 'var(--text-primary)',
  letterSpacing: '-1px',
};

const statLabelStyle = {
  fontSize: '0.78rem',
  color: 'var(--text-muted)',
  fontFamily: 'var(--font-mono)',
};

const codeCardStyle = {
  padding: '1.25rem 1.5rem',
  fontFamily: 'var(--font-mono)',
  fontSize: '0.82rem',
  lineHeight: '1.8',
};

const codeLineStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
};

export default Hero;
