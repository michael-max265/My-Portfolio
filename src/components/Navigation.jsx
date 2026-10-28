import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/portfolioData';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <motion.nav
      style={{
        ...navStyle,
        background: scrolled ? 'rgba(10, 14, 23, 0.88)' : 'rgba(10, 14, 23, 0.4)',
        borderBottom: scrolled ? '1px solid rgba(148, 163, 184, 0.12)' : '1px solid transparent',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container" style={navContainerStyle}>
        {/* Logo */}
        <motion.a 
          href="#home" 
          style={logoStyle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          <span style={logoTextStyle}>MO</span>
          <span style={{ color: 'var(--accent-light)', fontSize: '1.4rem' }}>.</span>
          <span style={roleBadgeStyle}>Frontend</span>
        </motion.a>

        {/* Desktop links */}
        <ul style={desktopLinksStyle} className="desktop-nav">
          {navLinks.map((item) => (
            <li key={item}>
              <motion.a
                href={`#${item.toLowerCase()}`}
                style={linkStyle}
                whileHover={{ y: -2, color: '#f8fafc' }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                {item}
              </motion.a>
            </li>
          ))}
          <li>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={resumeBtnStyle}
              whileHover={{ 
                scale: 1.03, 
                backgroundColor: 'rgba(59, 130, 246, 0.15)',
                borderColor: 'var(--accent-light)' 
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              Resume ↗
            </motion.a>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          className={`mobile-nav-btn ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="burger-line line-1" />
          <span className="burger-line line-2" />
          <span className="burger-line line-3" />
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            style={mobileOverlayStyle}
          >
            <ul style={mobileLinksStyle}>
              {[...navLinks, 'Resume'].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setIsOpen(false)}
                >
                  <a
                    href={item === 'Resume' ? '/resume.pdf' : `#${item.toLowerCase()}`}
                    target={item === 'Resume' ? '_blank' : undefined}
                    rel={item === 'Resume' ? 'noreferrer' : undefined}
                    style={mobileLinkItemStyle}
                  >
                    {item}
                  </a>
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
  transition: 'background 300ms ease, border-color 300ms ease, box-shadow 300ms ease',
};

const navContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.35rem',
  textDecoration: 'none',
};

const logoTextStyle = {
  fontSize: '1.25rem',
  fontWeight: '800',
  letterSpacing: '-0.5px',
  color: 'var(--text-primary)',
};

const roleBadgeStyle = {
  fontSize: '0.72rem',
  fontFamily: 'var(--font-mono)',
  color: 'var(--accent-light)',
  background: 'rgba(59, 130, 246, 0.12)',
  padding: '0.15rem 0.5rem',
  borderRadius: '4px',
  marginLeft: '0.3rem',
  border: '1px solid rgba(59, 130, 246, 0.25)',
};

const desktopLinksStyle = {
  display: 'flex',
  gap: '0.4rem',
  listStyle: 'none',
  alignItems: 'center',
};

const linkStyle = {
  color: 'var(--text-secondary)',
  fontSize: '0.9rem',
  fontWeight: '500',
  padding: '0.45rem 0.85rem',
  borderRadius: 'var(--radius-sm)',
  display: 'inline-block',
  transition: 'color 150ms ease',
};

const resumeBtnStyle = {
  color: 'var(--accent-light)',
  fontSize: '0.88rem',
  fontWeight: '600',
  padding: '0.45rem 1rem',
  background: 'rgba(59, 130, 246, 0.08)',
  border: '1px solid rgba(59, 130, 246, 0.3)',
  borderRadius: 'var(--radius-sm)',
  marginLeft: '0.6rem',
  display: 'inline-block',
  transition: 'all 200ms ease',
};

const mobileOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  background: 'rgba(10, 14, 23, 0.98)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1500,
  backdropFilter: 'blur(20px)',
};

const mobileLinksStyle = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  textAlign: 'center',
};

const mobileLinkItemStyle = {
  fontSize: '1.75rem',
  fontWeight: '600',
  color: 'var(--text-primary)',
};

export default Navigation;
