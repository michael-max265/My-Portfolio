import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const About = () => {
  return (
    <section id="about" style={sectionStyle}>
      <div className="container">

        <motion.div {...fadeUp}>
          <span className="section-label">Engineering Profile</span>
          <h2 style={headingStyle}>
            Fullstack engineering with architectural clarity
          </h2>
        </motion.div>

        <div style={gridStyle}>

          {/* Bio & Journey */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={bioColStyle}
          >
            <p style={paraStyle}>
              I'm <strong style={{ color: 'var(--text-primary)' }}>Michael Okpara</strong>, a 
              Fullstack Developer focused on creating reliable, scalable web products. 
              I operate across the entire lifecycle: from crafting sleek, accessible React interfaces 
              to structuring Node.js / Express backends, database relations, and deployment pipelines.
            </p>
            <p style={{ ...paraStyle, marginTop: '1.25rem' }}>
              My engineering philosophy revolves around three core tenets: 
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}> clean modular code</span>, 
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}> sub-second load times</span>, and 
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}> frictionless developer-to-user workflows</span>. 
              Whether developing multi-currency checkout gateways or real-time analytics hubs, I take ownership from concept to production.
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

          {/* Fullstack Capability Pillars */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {skillCategories.map(cat => (
              <motion.div 
                key={cat.title} 
                className="card" 
                style={categoryCardStyle}
                whileHover={{ y: -3, borderColor: 'rgba(99, 102, 241, 0.35)' }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              >
                <div style={catHeaderStyle}>
                  <span style={{ fontSize: '1.1rem' }}>{cat.icon}</span>
                  <h4 style={catTitleStyle}>{cat.title}</h4>
                </div>
                <div style={tagsStyle}>
                  {cat.skills.map(skill => (
                    <motion.span 
                      key={skill} 
                      style={tagStyle}
                      whileHover={{ 
                        scale: 1.05, 
                        borderColor: 'rgba(96, 165, 250, 0.5)',
                        color: '#60a5fa' 
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const facts = [
  { label: 'Role',          value: 'Fullstack Developer' },
  { label: 'Frontend Core',  value: 'React 19, TypeScript, Tailwind' },
  { label: 'Backend Core',   value: 'Node.js, Express, REST APIs' },
  { label: 'Databases',      value: 'PostgreSQL, MongoDB, Firebase' },
  { label: 'Availability',  value: 'Full-time / Contract / Remote' },
];

const skillCategories = [
  {
    title: 'Frontend & UI Architecture',
    icon: '⚡',
    skills: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'State Management (Zustand)']
  },
  {
    title: 'Backend, APIs & Auth',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'RESTful APIs', 'JWT & OAuth', 'Payment Gateways (Stripe, Paystack)']
  },
  {
    title: 'Databases & Infrastructure',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Vercel / Cloud CI/CD', 'Git & Agile']
  }
];

/* ── Styles ── */
const sectionStyle = { padding: '6.5rem 0' };

const headingStyle = {
  fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
  fontWeight: '800',
  letterSpacing: '-1px',
  marginBottom: '3rem',
  maxWidth: '700px',
  lineHeight: '1.25',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '3rem',
  alignItems: 'start',
};

const bioColStyle = {};

const paraStyle = {
  color: 'var(--text-secondary)',
  lineHeight: '1.85',
  fontSize: '1rem',
};

const quickFactsStyle = {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  background: 'rgba(15, 23, 42, 0.4)',
  padding: '1.25rem',
  borderRadius: 'var(--radius-md)',
  border: '1px solid var(--border)',
};

const factRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.4rem 0',
  borderBottom: '1px solid rgba(148, 163, 184, 0.08)',
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
  textAlign: 'right',
};

const categoryCardStyle = {
  padding: '1.4rem',
};

const catHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  marginBottom: '0.9rem',
};

const catTitleStyle = {
  fontSize: '0.95rem',
  fontWeight: '700',
  color: 'var(--text-primary)',
  letterSpacing: '-0.3px',
};

const tagsStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.45rem',
};

const tagStyle = {
  fontSize: '0.8rem',
  color: 'var(--text-secondary)',
  padding: '0.35rem 0.75rem',
  background: 'rgba(15, 23, 42, 0.6)',
  border: '1px solid var(--border)',
  borderRadius: '6px',
  fontFamily: 'var(--font-mono)',
  cursor: 'default',
  transition: 'all 200ms ease',
};

export default About;
