import React from 'react';
import { motion } from 'framer-motion';
import { techStack, personalDetails } from '../data/portfolioData';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const About = () => {
  return (
    <section id="about" style={sectionStyle}>
      <div className="container">

        <motion.div {...fadeUp}>
          <p className="section-label">About me</p>
          <h2 style={headingStyle}>
            The person behind the code
          </h2>
        </motion.div>

        <div style={gridStyle}>

          {/* Bio */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={bioColStyle}
          >
            <p style={paraStyle}>
              I'm <strong style={{ color: 'var(--text-primary)' }}>Michael Okpara</strong>, a frontend
              developer with a thing for minimal design and smooth interactions.
              I got into coding because I wanted to build things I could actually
              see — and I never looked back.
            </p>
            <p style={{ ...paraStyle, marginTop: '1rem' }}>
              When I'm not pushing pixels, I'm studying design systems, exploring
              new web APIs, or picking apart how great products work. I obsess over
              the details most people don't notice — because I believe that's where
              the real quality lives.
            </p>

            <div style={quickFactsStyle}>
              {facts.map(f => (
                <div key={f.label} style={factRowStyle}>
                  <span style={factLabelStyle}>{f.label}</span>
                  <span style={factValueStyle}>{f.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stack */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card" style={stackCardStyle}>
              <p style={stackHeadStyle}>Tech I work with</p>
              <div style={tagsStyle}>
                {techStack.map((tech) => (
                  <span key={tech} style={tagStyle}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="card" style={{ ...stackCardStyle, marginTop: '1rem' }}>
              <p style={stackHeadStyle}>Currently learning</p>
              <div style={tagsStyle}>
                {['Next.js', 'Node.js / Express', 'PostgreSQL', 'Docker'].map(t => (
                  <span key={t} style={{ ...tagStyle, borderColor: 'rgba(79,142,255,0.2)', color: 'var(--accent)' }}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const facts = [
  { label: 'Location',   value: 'Nigeria 🇳🇬' },
  { label: 'Focus',      value: 'Frontend / UI' },
  { label: 'Education',  value: 'Self-taught' },
  { label: 'Status',     value: 'Open to work' },
];

/* ── Styles ── */
const sectionStyle = { padding: '6rem 0' };

const headingStyle = {
  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
  fontWeight: '800',
  letterSpacing: '-0.8px',
  marginBottom: '3rem',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2.5rem',
  alignItems: 'start',
};

const bioColStyle = {};

const paraStyle = {
  color: 'var(--text-secondary)',
  lineHeight: '1.8',
  fontSize: '0.97rem',
};

const quickFactsStyle = {
  marginTop: '1.75rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
};

const factRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0.5rem 0',
  borderBottom: '1px solid var(--border)',
};

const factLabelStyle = {
  fontSize: '0.82rem',
  color: 'var(--text-muted)',
  fontFamily: 'var(--font-mono)',
};

const factValueStyle = {
  fontSize: '0.88rem',
  color: 'var(--text-primary)',
  fontWeight: '500',
};

const stackCardStyle = {
  padding: '1.5rem',
};

const stackHeadStyle = {
  fontSize: '0.78rem',
  color: 'var(--text-muted)',
  fontFamily: 'var(--font-mono)',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  marginBottom: '1rem',
};

const tagsStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
};

const tagStyle = {
  fontSize: '0.8rem',
  color: 'var(--text-secondary)',
  padding: '0.3rem 0.75rem',
  border: '1px solid var(--border)',
  borderRadius: '4px',
  fontFamily: 'var(--font-mono)',
};

export default About;
