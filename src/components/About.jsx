import React from 'react';
import { motion } from 'framer-motion';
import { techStack, personalDetails } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" style={sectionStyle}>
      <div className="container">
        <motion.h2 
          style={sectionTitleStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>
        
        <div style={gridStyle}>
          <motion.div 
            className="glass" 
            style={cardStyle}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 style={cardTitleStyle}>The Journey</h3>
            <p style={textStyle}>
              {personalDetails.about}
            </p>
          </motion.div>
          
          <motion.div 
            className="glass" 
            style={cardStyle}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={cardTitleStyle}>Tech Stack</h3>
            <div style={tagsContainerStyle}>
              {techStack.map((tech, i) => (
                <motion.span 
                  key={tech} 
                  style={tagStyle}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.3)' }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
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
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem'
};

const cardStyle = {
  padding: '2rem',
  borderRadius: 'var(--radius-lg)'
};

const cardTitleStyle = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
  color: 'var(--text-primary)'
};

const textStyle = {
  color: 'var(--text-secondary)',
  lineHeight: '1.8'
};

const tagsContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.75rem'
};

const tagStyle = {
  background: 'rgba(255, 255, 255, 0.05)',
  padding: '0.5rem 1rem',
  borderRadius: 'var(--radius-full)',
  fontSize: '0.9rem',
  color: 'var(--text-secondary)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  cursor: 'default'
};

export default About;
