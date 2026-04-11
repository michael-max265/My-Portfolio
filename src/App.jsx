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
    <div className="app-container">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="glass footer-container">
        <div className="container">
          <p className="footer-text">
            &copy; {personalDetails.copyrightYear} {personalDetails.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
