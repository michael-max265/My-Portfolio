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
    <div>
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
          <span style={footerLogoStyle}>MO.</span>
          <p style={footerTextStyle}>
            © {personalDetails.copyrightYear} {personalDetails.name} — Designed & built from scratch
          </p>
          <a href="#home" style={backTopStyle}>Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

const separatorStyle = {
  height: '1px',
  background: 'var(--border)',
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '0 2rem',
};

const footerStyle = {
  borderTop: '1px solid var(--border)',
  padding: '2.5rem 0',
  marginTop: '2rem',
};

const footerInnerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
};

const footerLogoStyle = {
  fontSize: '1rem',
  fontWeight: '800',
  color: 'var(--text-muted)',
};

const footerTextStyle = {
  fontSize: '0.82rem',
  color: 'var(--text-muted)',
  fontFamily: 'var(--font-mono)',
};

const backTopStyle = {
  fontSize: '0.82rem',
  color: 'var(--text-muted)',
  fontFamily: 'var(--font-mono)',
  textDecoration: 'none',
};

export default App;
