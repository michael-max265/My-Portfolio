import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails, socialLinks } from '../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const Hero = () => {
  return (
    <section id="home" style={sectionStyle}>
      <div className="container" style={containerStyle}>

        {/* Left — text content */}
        <div style={leftStyle}>
          <motion.div {...fadeUp(0.1)} style={availContainerStyle}>
            <span className="status-beacon" />
            <span style={availTextStyle}>Available for fullstack engineering roles & projects</span>
          </motion.div>

          <motion.h1 {...fadeUp(0.2)} style={headingStyle}>
            Hi, I'm Michael.<br />
            <span style={highlightTitleStyle}>
              Fullstack Engineer & Architect.
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.3)} style={bioStyle}>
            I design and build end-to-end digital products — from responsive, pixel-perfect frontend 
            interfaces to resilient backend microservices, secure APIs, and database architectures.
          </motion.p>

          <motion.div {...fadeUp(0.4)} style={ctaRowStyle}>
            <motion.a 
              href="#projects" 
              style={primaryBtnStyle}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: '0 8px 24px -4px rgba(59, 130, 246, 0.45)' 
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              Explore Projects →
            </motion.a>
            <motion.a 
              href="#contact" 
              style={ghostBtnStyle}
              whileHover={{ 
                scale: 1.03, 
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                borderColor: 'var(--border-hover)'
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              Get in touch
            </motion.a>
          </motion.div>

          <motion.div {...fadeUp(0.5)} style={socialRowStyle}>
            {socialLinks.map(link => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                style={socialLinkStyle}
                title={link.platform}
                whileHover={{ color: 'var(--accent-light)', y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {link.platform} ↗
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right — Interactive Stats & Terminal Showcase */}
        <motion.div
          style={rightStyle}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Stats 2x2 grid */}
          <div style={statGridStyle}>
            {stats.map((s, i) => (
              <motion.div 
                key={i} 
                className="card" 
                style={statCardStyle}
                whileHover={{ y: -4, borderColor: 'rgba(99, 102, 241, 0.4)' }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              >
                <span style={statNumStyle}>{s.value}</span>
                <span style={statLabelStyle}>{s.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Terminal / Code Card */}
          <motion.div 
            className="card" 
            style={terminalCardStyle}
            whileHover={{ borderColor: 'rgba(59, 130, 246, 0.4)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          >
            <div style={terminalHeaderStyle}>
              <div style={trafficLightsStyle}>
                <span style={{ ...trafficDotStyle, background: '#ef4444' }} />
                <span style={{ ...trafficDotStyle, background: '#f59e0b' }} />
                <span style={{ ...trafficDotStyle, background: '#10b981' }} />
              </div>
              <span style={terminalTitleStyle}>michael@fullstack: ~</span>
            </div>

            <div style={terminalBodyStyle}>
              <p style={codeLineStyle}>
                <span style={{ color: 'var(--text-muted)' }}>1</span>{' '}
                <span style={{ color: '#818cf8' }}>const</span>{' '}
                <span style={{ color: '#93c5fd' }}>developer</span>{' '}
                <span style={{ color: 'var(--text-muted)' }}>=</span>{' '}
                <span style={{ color: '#34d399' }}>'Michael Okpara'</span>;
              </p>
              <p style={codeLineStyle}>
                <span style={{ color: 'var(--text-muted)' }}>2</span>{' '}
                <span style={{ color: '#818cf8' }}>const</span>{' '}
                <span style={{ color: '#93c5fd' }}>capabilities</span>{' '}
                <span style={{ color: 'var(--text-muted)' }}>=</span>{' '}
                <span style={{ color: '#fbcfe8' }}>['Frontend', 'Backend', 'APIs', 'Cloud']</span>;
              </p>
              <p style={codeLineStyle}>
                <span style={{ color: 'var(--text-muted)' }}>3</span>{' '}
                <span style={{ color: '#818cf8' }}>const</span>{' '}
                <span style={{ color: '#93c5fd' }}>status</span>{' '}
                <span style={{ color: 'var(--text-muted)' }}>=</span>{' '}
                <span style={{ color: '#fed7aa' }}>'Building scalable systems'</span>;
              </p>
              <p style={{ ...codeLineStyle, marginTop: '0.4rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>4</span>{' '}
                <span style={{ color: '#60a5fa' }}>export default</span>{' '}
                <span style={{ color: '#93c5fd' }}>developer</span>;
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

const stats = [
  { value: '5+', label: 'Shipped Projects' },
  { value: 'Full-Cycle', label: 'Architecture & UI' },
  { value: '100%', label: 'Commitment & Speed' },
  { value: 'End-to-End', label: 'Stack Mastery' },
];

/* ── Styles ── */
const sectionStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  paddingTop: '100px',
  paddingBottom: '5rem',
  position: 'relative',
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '4rem',
  flexWrap: 'wrap',
};

const leftStyle = {
  flex: '1 1 420px',
  maxWidth: '600px',
};

const availContainerStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.65rem',
  background: 'rgba(16, 185, 129, 0.08)',
  border: '1px solid rgba(16, 185, 129, 0.25)',
  padding: '0.4rem 0.9rem',
  borderRadius: '999px',
  marginBottom: '1.75rem',
};

const availTextStyle = {
  fontSize: '0.82rem',
  color: '#34d399',
  fontFamily: 'var(--font-mono)',
  fontWeight: '500',
};

const headingStyle = {
  fontSize: 'clamp(2.2rem, 4.8vw, 3.6rem)',
  fontWeight: '800',
  lineHeight: '1.16',
  marginBottom: '1.5rem',
  letterSpacing: '-1.5px',
};

const highlightTitleStyle = {
  background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #c084fc 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
  fontWeight: '800',
};

const bioStyle = {
  fontSize: '1.05rem',
  color: 'var(--text-secondary)',
  lineHeight: '1.8',
  marginBottom: '2.25rem',
  maxWidth: '520px',
};

const ctaRowStyle = {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
  marginBottom: '2.5rem',
};

const primaryBtnStyle = {
  background: 'linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)',
  color: '#fff',
  padding: '0.85rem 1.75rem',
  borderRadius: 'var(--radius-md)',
  fontWeight: '600',
  fontSize: '0.95rem',
  letterSpacing: '0.01em',
  display: 'inline-flex',
  alignItems: 'center',
  boxShadow: '0 4px 18px rgba(59, 130, 246, 0.35)',
};

const ghostBtnStyle = {
  color: 'var(--text-primary)',
  padding: '0.85rem 1.75rem',
  borderRadius: 'var(--radius-md)',
  fontWeight: '600',
  fontSize: '0.95rem',
  background: 'rgba(15, 23, 42, 0.5)',
  border: '1px solid var(--border)',
  display: 'inline-flex',
  alignItems: 'center',
};

const socialRowStyle = {
  display: 'flex',
  gap: '1.5rem',
  flexWrap: 'wrap',
};

const socialLinkStyle = {
  fontSize: '0.86rem',
  color: 'var(--text-secondary)',
  fontFamily: 'var(--font-mono)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.2rem',
};

const rightStyle = {
  flex: '1 1 320px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
};

const statGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',
};

const statCardStyle = {
  padding: '1.4rem 1.25rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',
};

const statNumStyle = {
  fontSize: '1.8rem',
  fontWeight: '800',
  color: 'var(--text-primary)',
  letterSpacing: '-0.5px',
};

const statLabelStyle = {
  fontSize: '0.78rem',
  color: 'var(--text-muted)',
  fontFamily: 'var(--font-mono)',
  letterSpacing: '0.04em',
};

const terminalCardStyle = {
  padding: '0',
  overflow: 'hidden',
};

const terminalHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.75rem 1.25rem',
  background: 'rgba(15, 23, 42, 0.7)',
  borderBottom: '1px solid var(--border)',
};

const trafficLightsStyle = {
  display: 'flex',
  gap: '0.45rem',
};

const trafficDotStyle = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
};

const terminalTitleStyle = {
  fontSize: '0.75rem',
  fontFamily: 'var(--font-mono)',
  color: 'var(--text-muted)',
};

const terminalBodyStyle = {
  padding: '1.25rem 1.4rem',
  fontFamily: 'var(--font-mono)',
  fontSize: '0.84rem',
  lineHeight: '1.85',
  background: 'rgba(10, 14, 23, 0.6)',
};

const codeLineStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

export default Hero;
