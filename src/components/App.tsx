import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import CustomCursor from './components/CustomCursor';
import AnimatedBackground from './components/AnimatedBackground';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FloatingContact from './components/FloatingContact';
import BackToTop from './components/BackToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>
        {/* Custom Cursor */}
        {!prefersReducedMotion && <CustomCursor />}
        
        {/* Animated Background */}
        <AnimatedBackground />
        
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Preloader key="preloader" onComplete={handlePreloaderComplete} />
          ) : (
            <div key="main-content">
              <Navigation />
              <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
              </main>
              <FloatingContact />
              <BackToTop />
            </div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;