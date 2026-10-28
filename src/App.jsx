import React from 'react';
import './index.css';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { personalDetails } from './data/portfolioData';

function App() {
  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      <Navigation />
      <main>
        <Hero />

        {/* Subtle section separator */}
        <div style={separatorStyle} />

        <About />

        <div style={separatorStyle} />

        <Projects />

        <div style={separatorStyle} />

        <Contact />
      </main>

      <footer style={footerStyle}>
        <div className="container" style={footerInnerStyle}>
          <div style={brandColStyle}>
            <span style={footerLogoStyle}>MO<span style={{ color: 'var(--accent-light)' }}>.</span></span>
            <span style={footerSubStyle}>Frontend Engineering</span>
          </div>

          <p style={footerTextStyle}>
            © {personalDetails.copyrightYear} {personalDetails.name} — Designed & engineered with React & Vite
          </p>

          <a href="#home" style={backTopStyle}>
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

const separatorStyle = {
  height: '1px',
  background: 'linear-gradient(90deg, transparent 0%, rgba(148, 163, 184, 0.15) 50%, transparent 100%)',
  maxWidth: '1140px',
  margin: '0 auto',
};

const footerStyle = {
  borderTop: '1px solid var(--border)',
  background: 'rgba(10, 14, 23, 0.75)',
  padding: '3rem 0',
};

const footerInnerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '1.5rem',
};

const brandColStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
};

const footerLogoStyle = {
  fontSize: '1.15rem',
  fontWeight: '800',
  color: 'var(--text-primary)',
};

const footerSubStyle = {
  fontSize: '0.78rem',
  fontFamily: 'var(--font-mono)',
  color: 'var(--accent-light)',
  background: 'rgba(59, 130, 246, 0.1)',
  padding: '0.15rem 0.5rem',
  borderRadius: '4px',
  border: '1px solid rgba(59, 130, 246, 0.2)',
};

const footerTextStyle = {
  fontSize: '0.85rem',
  color: 'var(--text-secondary)',
};

const backTopStyle = {
  fontSize: '0.85rem',
  color: 'var(--accent-light)',
  fontFamily: 'var(--font-mono)',
  textDecoration: 'none',
  transition: 'color 150ms ease',
};

export default App;
