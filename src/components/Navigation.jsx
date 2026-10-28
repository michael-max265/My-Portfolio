import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/portfolioData';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
        background: scrolled ? 'rgba(13,13,13,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container" style={navContainerStyle}>
        {/* Logo — initials only, clean */}
        <a href="#home" style={logoStyle}>
          MO<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop links */}
        <ul style={desktopLinksStyle} className="desktop-nav">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                style={linkStyle}
                onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={resumeBtnStyle}
            >
              Resume ↗
            </a>
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={mobileOverlayStyle}
          >
            <ul style={mobileLinksStyle}>
              {[...navLinks, 'Resume'].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
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
  padding: '1.1rem 0',
  transition: 'background 300ms ease, border-color 300ms ease',
};

const navContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  fontSize: '1.15rem',
  fontWeight: '800',
  letterSpacing: '-0.5px',
  color: 'var(--text-primary)',
  textDecoration: 'none',
};

const desktopLinksStyle = {
  display: 'flex',
  gap: '0.25rem',
  listStyle: 'none',
  alignItems: 'center',
};

const linkStyle = {
  color: 'var(--text-secondary)',
  fontSize: '0.9rem',
  fontWeight: '500',
  padding: '0.4rem 0.75rem',
  borderRadius: 'var(--radius-sm)',
  transition: 'color 150ms ease',
};

const resumeBtnStyle = {
  color: 'var(--accent)',
  fontSize: '0.88rem',
  fontWeight: '500',
  padding: '0.45rem 0.9rem',
  border: '1px solid rgba(79,142,255,0.35)',
  borderRadius: 'var(--radius-sm)',
  marginLeft: '0.5rem',
  transition: 'background 150ms ease',
};

const mobileOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  background: 'rgba(13,13,13,0.97)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1500,
};

const mobileLinksStyle = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  textAlign: 'center',
};

const mobileLinkItemStyle = {
  fontSize: '1.6rem',
  fontWeight: '600',
  color: 'var(--text-primary)',
};

export default Navigation;
