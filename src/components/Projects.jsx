import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Projects = () => {
  return (
    <section id="projects" style={sectionStyle}>
      <div className="container">
        <motion.h2 
          style={sectionTitleStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>
        
        <motion.div 
          style={gridStyle}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectsData.map(project => (
            <motion.div 
              key={project.id} 
              className="glass" 
              style={cardStyle}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 10px 30px rgba(41, 121, 255, 0.2)' }}
            >
              <div style={imagePlaceholderStyle}>
                {project.image && <img src={project.image} alt={project.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />}
              </div>
              <div style={contentStyle}>
                <h3 style={projectTitleStyle}>{project.title}</h3>
                <p style={projectDescStyle}>{project.description}</p>
                <div style={tagsContainerStyle}>
                  {project.tags.map(tag => (
                    <span key={tag} style={tagStyle}>{tag}</span>
                  ))}
                </div>
                <motion.a 
                  href={project.link} 
                  style={linkStyle}
                  whileHover={{ x: 5, color: 'var(--accent-secondary)' }}
                >
                  View Project &rarr;
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '6rem 0',
};

const sectionTitleStyle = {
  fontSize: '2.5rem',
  marginBottom: '3rem',
  textAlign: 'center'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '2rem'
};

const cardStyle = {
  borderRadius: 'var(--radius-lg)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
};

const imagePlaceholderStyle = {
  height: '200px',
  background: 'linear-gradient(45deg, rgba(23, 23, 23, 0.8), rgba(41, 121, 255, 0.2))',
  borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
};

const contentStyle = {
  padding: '1.5rem',
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
};

const projectTitleStyle = {
  fontSize: '1.25rem',
  marginBottom: '0.5rem'
};

const projectDescStyle = {
  color: 'var(--text-secondary)',
  marginBottom: '1.5rem',
  fontSize: '0.95rem',
  flex: 1
};

const tagsContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginBottom: '1.5rem'
};

const tagStyle = {
  fontSize: '0.8rem',
  color: 'var(--accent-secondary)',
  background: 'rgba(41, 121, 255, 0.1)',
  padding: '0.2rem 0.6rem',
  borderRadius: 'var(--radius-sm)'
};

const linkStyle = {
  fontWeight: '600',
  color: 'var(--text-primary)',
  display: 'inline-flex',
  alignItems: 'center',
  marginTop: 'auto',
  textDecoration: 'none'
};

export default Projects;
