import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest('nav') && !target.closest('[data-mobile-menu]')) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const menuItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const toggleOpen = () => {
    console.log('Menu toggle clicked, current state:', isOpen);
    setIsOpen(prev => {
      console.log('Setting isOpen to:', !prev);
      return !prev;
    });
  };

  const scrollToSection = (href: string) => {
    console.log('Scrolling to:', href);

    // Close mobile menu immediately
    setIsOpen(false);

    // Optimized smooth scrolling with shorter delay
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);

      console.log('Looking for element with ID:', targetId);
      console.log('Element found:', element);

      if (element) {
        const headerHeight = 80; // Height of fixed header
        const elementTop = element.offsetTop - headerHeight;

        console.log('Scrolling to position:', elementTop);

        // Ultra-smooth scrolling with optimized behavior
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });

        // Fallback for better browser support
        window.scrollTo({
          top: elementTop,
          behavior: 'smooth'
        });
      } else {
        console.error('Element not found:', targetId);
      }
    }, 150); // Reduced delay for faster response
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 will-change-transform gpu-accelerated ${
          isScrolled ? 'glassmorphism shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-space-grotesk text-2xl font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              KD
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="font-medium transition-all duration-200 hover:scale-105 magnetic"
                  style={{ color: 'var(--text-secondary)' }}
                  whileHover={{ color: 'var(--text-primary)' }}
                >
                  {item.name}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                onClick={toggleTheme}
                className="p-2 rounded-full glassmorphism hover-lift magnetic"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4 relative">
              <motion.button
                onClick={toggleTheme}
                className="p-1 rounded-full glassmorphism z-[60] relative w-8 h-8 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              {/* Working hamburger button */}
              <button
                type="button"
                className="z-[60] relative p-3 rounded-lg transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center cursor-pointer hover:bg-opacity-10 hover:bg-gray-500"
                onClick={() => {
                  console.log('Hamburger button clicked!');
                  toggleOpen();
                }}
                style={{ color: 'var(--text-primary)' }}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[55]"
                onClick={() => setIsOpen(false)}
              />
              {/* Menu */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }} // Faster animation
                className="md:hidden glassmorphism border-t fixed top-[80px] left-0 right-0 z-[60] max-h-[calc(100vh-80px)] overflow-y-auto will-change-transform gpu-accelerated"
                style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
                data-mobile-menu
              >
                <div className="container mx-auto px-6 py-4">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }} // Faster stagger
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center space-x-3 w-full py-3 font-medium transition-colors duration-200 hover:bg-opacity-10 hover:bg-gray-500 rounded-lg px-2 will-change-transform"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <item.icon size={20} />
                      <span>{item.name}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation;
