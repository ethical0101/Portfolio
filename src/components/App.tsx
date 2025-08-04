import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '../contexts/ThemeContext';
import AnimatedBackground from './AnimatedBackground';
import Preloader from './Preloader';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import FloatingContact from './FloatingContact';
import BackToTop from './BackToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>
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
