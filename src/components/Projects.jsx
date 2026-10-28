import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const Projects = () => {
  return (
    <section id="projects" style={sectionStyle}>
      <div className="container">

        <motion.div {...fadeUp}>
          <p className="section-label">Work</p>
          <h2 style={headingStyle}>Selected projects</h2>
        </motion.div>

        <div className="proj-grid" style={gridStyle}>
          {projectsData.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="card"
              style={cardStyle}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover="hover"
            >
              {/* Image */}
              <motion.div
                style={imgWrapStyle}
                variants={{ hover: { scale: 1.02 } }}
                transition={{ duration: 0.3 }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={imgStyle}
                    loading="lazy"
                  />
                ) : (
                  <div style={imgPlaceholderStyle} />
                )}
              </motion.div>

              {/* Content */}
              <div style={contentStyle}>
                <div style={headerRowStyle}>
                  <h3 style={titleStyle}>{project.title}</h3>
                  <motion.span
                    style={arrowStyle}
                    variants={{ hover: { x: 4, y: -4 } }}
                    transition={{ duration: 0.2 }}
                  >
                    ↗
                  </motion.span>
                </div>

                <p style={descStyle}>{project.description}</p>

                <div style={tagsRowStyle}>
                  {project.tags.map(tag => (
                    <span key={tag} style={tagStyle}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

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
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  gap: '1.25rem',
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  textDecoration: 'none',
  color: 'inherit',
  cursor: 'pointer',
};

const imgWrapStyle = {
  width: '100%',
  aspectRatio: '16/9',
  overflow: 'hidden',
  backgroundColor: '#111',
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
};

const imgPlaceholderStyle = {
  width: '100%',
  height: '100%',
  background: '#1a1a1a',
};

const contentStyle = {
  padding: '1.25rem 1.25rem 1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
  flex: 1,
};

const headerRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '0.5rem',
};

const titleStyle = {
  fontSize: '1rem',
  fontWeight: '600',
  color: 'var(--text-primary)',
  lineHeight: '1.4',
};

const arrowStyle = {
  fontSize: '1rem',
  color: 'var(--text-muted)',
  flexShrink: 0,
};

const descStyle = {
  fontSize: '0.875rem',
  color: 'var(--text-secondary)',
  lineHeight: '1.65',
  flex: 1,
};

const tagsRowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.4rem',
  marginTop: '0.5rem',
};

const tagStyle = {
  fontSize: '0.72rem',
  fontFamily: 'var(--font-mono)',
  color: 'var(--text-muted)',
  padding: '0.2rem 0.55rem',
  border: '1px solid var(--border)',
  borderRadius: '4px',
};

export default Projects;
