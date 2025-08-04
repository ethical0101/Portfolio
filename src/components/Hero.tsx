import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Instagram, ChevronDown, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);

  const texts = [
    "Hi, I'm Kommi Druthendra",
    "Frontend & Full Stack Developer",
    "Building Digital Experiences"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 4000); // Increased interval for better performance
    return () => clearInterval(interval);
  }, [texts.length]);

  const socialLinks = [
    { icon: Github, href: import.meta.env.VITE_GITHUB_URL, label: 'GitHub' },
    { icon: Linkedin, href: import.meta.env.VITE_LINKEDIN_URL, label: 'LinkedIn' },
    { icon: Twitter, href: import.meta.env.VITE_TWITTER_URL, label: 'Twitter' },
    { icon: Instagram, href: import.meta.env.VITE_INSTAGRAM_URL, label: 'Instagram' },
  ];

  const handleDownloadCV = () => {
    const cvFilename = import.meta.env.VITE_CV_FILENAME || 'kommi-druthendra-cv.pdf';
    const portfolioName = import.meta.env.VITE_PORTFOLIO_NAME || 'Kommi Druthendra';

    const link = document.createElement('a');
    link.href = `/cv/${cvFilename}`;
    link.download = `${portfolioName.replace(/\s+/g, '-')}-CV.pdf`;
    link.click();
  };

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden gpu-accelerated will-change-transform">
      <div className="container relative z-10 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 120 }} // Faster animation
            className="flex justify-center mb-8 will-change-transform"
          >
            <motion.div
              className="relative gpu-accelerated"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }} // Faster hover
            >
              <div className="profile-glow w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden glassmorphism p-0.5 sm:p-1 shadow-lg sm:shadow-2xl will-change-transform">
                <img
                  src="/images/profile-2.jpg"
                  alt="Kommi Druthendra"
                  className="object-cover w-full h-full rounded-full"
                  onError={(e) => {
                    console.error('Image failed to load:', e);
                    e.currentTarget.src = 'https://via.placeholder.com/400x400/6366f1/ffffff?text=KD';
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Animated Text */}
          <motion.div
            key={currentText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }} // Simplified animation for better performance
            className="mb-6 will-change-opacity"
          >
            <motion.h1
              className="text-4xl font-bold font-space-grotesk md:text-6xl lg:text-7xl text-shadow"
              style={{ color: 'var(--text-primary)' }}
              whileHover={{ scale: 1.02 }}
            >
              {texts[currentText]}
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-2xl mx-auto mb-12 text-lg leading-relaxed md:text-xl"
            style={{ color: 'var(--text-secondary)' }}
            whileHover={{ scale: 1.02 }}
          >
            Passionate about creating beautiful, high-performance web applications
            with cutting-edge technology. I transform ideas into seamless digital experiences.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col items-center justify-center mb-12 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6"
          >
            <motion.button
              onClick={handleDownloadCV}
              className="flex items-center px-8 py-4 space-x-2 font-semibold rounded-full shadow-lg btn-primary hover-lift magnetic"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.button>

            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 font-semibold rounded-full shadow-lg btn-secondary hover-lift magnetic"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5, type: "spring" }}
                className="p-4 rounded-full shadow-lg glassmorphism hover-lift magnetic"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={24} style={{ color: 'var(--text-primary)' }} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute z-20 transform -translate-x-1/2 bottom-8 left-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="cursor-pointer magnetic"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.2 }}
        >
          <ChevronDown size={32} style={{ color: 'var(--text-secondary)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
