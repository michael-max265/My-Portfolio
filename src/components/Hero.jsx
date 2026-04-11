import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" style={heroSectionStyle}>
      <div className="container" style={heroContainerStyle}>
        <motion.div 
          style={contentStyle}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 style={titleStyle}>
            Hi, I'm {personalDetails.name.split(' ')[0]}. 
            <br />
            <motion.span 
              className="text-gradient"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, ease: "linear", repeat: Infinity }}
              style={{ display: 'inline-block', backgroundSize: '200% auto' }}
            >
              {personalDetails.role}.
            </motion.span>
          </h1>
          <p style={subtitleStyle}>
            {personalDetails.tagline}
          </p>
          <div style={buttonGroupStyle}>
            <motion.a 
              href="#projects" 
              style={primaryButtonStyle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              style={secondaryButtonStyle} 
              className="glass"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a 
              href={personalDetails.resumeLink} 
              target="_blank"
              style={{...secondaryButtonStyle, borderColor: 'var(--accent-purple)'}} 
              className="glass"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              &#8595; Download Resume
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          style={visualContainerStyle}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div style={glowingOrbStyle}></div>
        </motion.div>
      </div>
    </section>
  );
};

const heroSectionStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  paddingTop: '80px', 
};

const heroContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',
  flexWrap: 'wrap'
};

const contentStyle = {
  flex: '1 1 500px',
  maxWidth: '600px'
};

const titleStyle = {
  fontSize: 'clamp(3rem, 5vw, 4.5rem)',
  lineHeight: '1.1',
  fontWeight: '800',
  marginBottom: '1.5rem',
  letterSpacing: '-1px'
};

const subtitleStyle = {
  fontSize: '1.25rem',
  color: 'var(--text-secondary)',
  marginBottom: '2rem',
  lineHeight: '1.7'
};

const buttonGroupStyle = {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap'
};

const primaryButtonStyle = {
  background: 'var(--gradient-vibrant)',
  color: '#fff',
  padding: '0.875rem 1.5rem',
  borderRadius: 'var(--radius-md)',
  fontWeight: '600',
  boxShadow: '0 4px 14px rgba(139, 92, 246, 0.4)',
  display: 'inline-flex',
  alignItems: 'center',
  textDecoration: 'none'
};

const secondaryButtonStyle = {
  color: 'var(--text-primary)',
  padding: '0.875rem 1.5rem',
  borderRadius: 'var(--radius-md)',
  fontWeight: '600',
  display: 'inline-flex',
  alignItems: 'center',
  textDecoration: 'none',
  border: '1px solid rgba(255, 255, 255, 0.1)'
};

const visualContainerStyle = {
  flex: '1 1 400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  height: '400px'
};

const glowingOrbStyle = {
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  background: 'var(--gradient-vibrant)',
  filter: 'blur(80px)',
  opacity: '0.6',
  animation: 'pulse 8s infinite alternate'
};

export default Hero;
