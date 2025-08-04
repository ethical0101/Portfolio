import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
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

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 smooth-scroll prevent-layout-shift" style={{ backgroundColor: 'var(--bg-primary)' }}>
        {/* Preloader */}
        <AnimatePresence mode="wait">
          {isLoading && (
            <Preloader onComplete={handlePreloaderComplete} />
          )}
        </AnimatePresence>

        {/* Main Content */}
        {!isLoading && (
          <>
            {/* Background Animation */}
            <AnimatedBackground />

            {/* Navigation */}
            <Navigation />

            {/* Main Sections */}
            <div className="gpu-accelerated will-change-transform">
              <Hero />
              <About />
              <Projects />
              <Contact />
            </div>

            {/* Floating Elements */}
            <FloatingContact />
            <BackToTop />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
