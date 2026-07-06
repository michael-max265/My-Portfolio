import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalDetails, navLinks } from '../data/portfolioData';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  return (
    <motion.nav 
      className="glass" 
      style={navStyle}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container" style={navContainerStyle}>
        <motion.div 
          style={logoStyle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-gradient">{personalDetails.name}</span>
        </motion.div>

        {/* Desktop Links */}
        <ul style={desktopLinksStyle} className="desktop-nav">
          {navLinks.map((item) => (
            <motion.li key={item} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <div className="mobile-nav-btn" style={mobileBtnStyle} onClick={() => setIsOpen(!isOpen)}>
          <motion.div
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={burgerLineStyle}
          />
          <motion.div
            animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            style={burgerLineStyle}
          />
          <motion.div
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={burgerLineStyle}
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            style={mobileOverlayStyle}
            className="glass"
          >
            <ul style={mobileLinksStyle}>
              {navLinks.map((item, i) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                >
                  <a href={`#${item.toLowerCase()}`} style={mobileLinkItemStyle}>{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const navStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  padding: '1rem 0',
  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
};

const navContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  fontSize: '1.2rem',
  fontWeight: '700',
  letterSpacing: '-0.5px',
  cursor: 'pointer'
};

const desktopLinksStyle = {
  display: 'flex',
  gap: '2rem',
  listStyle: 'none',
  fontWeight: '500',
  fontSize: '0.95rem'
};

// Handled via CSS hide/show for desktop vs mobile
const mobileBtnStyle = {
  display: 'none',
  flexDirection: 'column',
  gap: '5px',
  cursor: 'pointer',
  zIndex: 2000
};

const burgerLineStyle = {
  width: '25px',
  height: '2px',
  background: 'var(--text-primary)',
  transition: 'all 0.3s ease'
};

const mobileOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1500
};

const mobileLinksStyle = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  textAlign: 'center'
};

const mobileLinkItemStyle = {
  fontSize: '2rem',
  fontWeight: '600',
  color: 'var(--text-primary)',
  textDecoration: 'none'
};

export default Navigation;
