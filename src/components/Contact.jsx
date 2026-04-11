import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/portfolioData';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000); // reset after 5s
    }, 1500);
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div className="container" style={containerStyle}>
        <motion.div 
          style={contentStyle}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={sectionTitleStyle}>Let's <span className="text-gradient">Connect</span></h2>
          <p style={subtitleStyle}>
            I'm currently open for new opportunities. Whether you have a question 
            or just want to say hi, I'll try my best to get back to you!
          </p>
          <div style={infoGridStyle}>
            {socialLinks.map((link) => (
              <motion.a key={link.platform} href={link.url} target="_blank" rel="noreferrer" style={infoCardStyle} className="glass" whileHover={{ y: -5 }}>
                <h4>{link.platform}</h4>
                <p style={{color: 'var(--text-secondary)', wordBreak: 'break-all'}}>{link.handle}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <motion.form 
          onSubmit={handleSubmit}
          style={formStyle} 
          className="glass"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div style={formGroupStyle}>
            <label style={labelStyle}>Name</label>
            <input type="text" required className="form-input" placeholder="Your name" />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Email</label>
            <input type="email" required className="form-input" placeholder="you@example.com" />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Message</label>
            <textarea required className="form-input" style={{minHeight: '150px', resize: 'vertical'}} placeholder="Say hello..."></textarea>
          </div>
          
          {isSuccess ? (
             <motion.div 
                initial={{opacity:0, scale: 0.9}} 
                animate={{opacity:1, scale: 1}} 
                style={successBannerStyle}
             >
               ✨ Message sent successfully! I'll get back to you soon.
             </motion.div>
          ) : (
            <motion.button 
              type="submit" 
              disabled={isSubmitting}
              style={{...submitButtonStyle, opacity: isSubmitting ? 0.7 : 1}}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          )}
        </motion.form>
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '6rem 0',
  position: 'relative'
};

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '4rem',
  justifyContent: 'space-between'
};

const contentStyle = {
  flex: '1 1 400px',
};

const sectionTitleStyle = {
  fontSize: '2.5rem',
  marginBottom: '1rem',
};

const subtitleStyle = {
  color: 'var(--text-secondary)',
  marginBottom: '2rem',
  lineHeight: '1.7'
};

const infoGridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem'
};

const infoCardStyle = {
  flex: 1,
  minWidth: '120px',
  padding: '1.5rem',
  borderRadius: 'var(--radius-md)',
  textDecoration: 'none',
  color: 'inherit'
};

const formStyle = {
  flex: '1 1 400px',
  padding: '2rem',
  borderRadius: 'var(--radius-lg)',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
};

const formGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
};

const labelStyle = {
  fontSize: '0.9rem',
  fontWeight: '500',
  color: 'var(--text-secondary)'
};

const submitButtonStyle = {
  background: 'var(--gradient-vibrant)',
  color: '#fff',
  padding: '1rem',
  borderRadius: 'var(--radius-md)',
  fontWeight: '600',
  marginTop: '0.5rem',
  boxShadow: '0 4px 14px rgba(139, 92, 246, 0.4)',
  border: 'none',
  cursor: 'pointer'
};

const successBannerStyle = {
  background: 'rgba(16, 185, 129, 0.1)',
  border: '1px solid rgba(16, 185, 129, 0.5)',
  color: '#10b981',
  padding: '1rem',
  borderRadius: 'var(--radius-md)',
  textAlign: 'center',
  fontWeight: '500'
}

export default Contact;
