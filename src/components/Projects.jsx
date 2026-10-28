import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const Projects = () => {
  return (
    <section id="projects" style={sectionStyle}>
      <div className="container">

        <motion.div {...fadeUp}>
          <span className="section-label">Production Portfolio</span>
          <h2 style={headingStyle}>Featured Fullstack Deployments</h2>
          <p style={subheadingStyle}>
            A curated collection of web applications featuring 3D experiences, payment infrastructures, 
            e-commerce ateliers, and analytical dashboards.
          </p>
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
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover="hover"
            >
              {/* Image preview with smooth zoom */}
              <div style={imgWrapStyle}>
                <motion.div
                  style={{ width: '100%', height: '100%' }}
                  variants={{ hover: { scale: 1.05 } }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
                <div style={imgOverlayStyle} />
              </div>

              {/* Content */}
              <div style={contentStyle}>
                <div style={headerRowStyle}>
                  <h3 style={titleStyle}>{project.title}</h3>
                  <motion.div
                    style={arrowBoxStyle}
                    variants={{ 
                      hover: { 
                        x: 3, 
                        y: -3, 
                        backgroundColor: 'rgba(59, 130, 246, 0.25)',
                        color: '#60a5fa' 
                      } 
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    ↗
                  </motion.div>
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
const sectionStyle = { padding: '6.5rem 0' };

const headingStyle = {
  fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
  fontWeight: '800',
  letterSpacing: '-1px',
  marginBottom: '0.75rem',
};

const subheadingStyle = {
  color: 'var(--text-secondary)',
  fontSize: '1rem',
  maxWidth: '620px',
  marginBottom: '3rem',
  lineHeight: '1.7',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
  gap: '1.75rem',
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  textDecoration: 'none',
  color: 'inherit',
  cursor: 'pointer',
  height: '100%',
};

const imgWrapStyle = {
  width: '100%',
  aspectRatio: '16/9',
  overflow: 'hidden',
  backgroundColor: '#0a0e17',
  position: 'relative',
  borderBottom: '1px solid var(--border)',
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
};

const imgOverlayStyle = {
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to top, rgba(19, 28, 49, 0.4) 0%, transparent 60%)',
  pointerEvents: 'none',
};

const imgPlaceholderStyle = {
  width: '100%',
  height: '100%',
  background: 'rgba(15, 23, 42, 0.8)',
};

const contentStyle = {
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  flex: 1,
};

const headerRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '0.75rem',
};

const titleStyle = {
  fontSize: '1.1rem',
  fontWeight: '700',
  color: 'var(--text-primary)',
  lineHeight: '1.4',
  letterSpacing: '-0.3px',
};

const arrowBoxStyle = {
  width: '28px',
  height: '28px',
  borderRadius: '6px',
  background: 'rgba(148, 163, 184, 0.08)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.95rem',
  color: 'var(--text-secondary)',
  flexShrink: 0,
  transition: 'all 200ms ease',
};

const descStyle = {
  fontSize: '0.9rem',
  color: 'var(--text-secondary)',
  lineHeight: '1.65',
  flex: 1,
};

const tagsRowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.45rem',
  marginTop: '0.5rem',
};

const tagStyle = {
  fontSize: '0.74rem',
  fontFamily: 'var(--font-mono)',
  color: '#93c5fd',
  background: 'rgba(59, 130, 246, 0.1)',
  padding: '0.25rem 0.65rem',
  border: '1px solid rgba(59, 130, 246, 0.2)',
  borderRadius: '6px',
};

export default Projects;
