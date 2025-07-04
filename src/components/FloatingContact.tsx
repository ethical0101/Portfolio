import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Mail, Phone, Github, Twitter } from 'lucide-react';

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const contactOptions = [
    {
      icon: Mail,
      label: 'Email',
      action: () => window.location.href = `mailto:${import.meta.env.VITE_PORTFOLIO_EMAIL}`,
      color: 'var(--text-primary)',
    },
    {
      icon: Phone,
      label: 'Call',
      action: () => window.location.href = `tel:${import.meta.env.VITE_PORTFOLIO_PHONE.replace(/\s+/g, '')}`,
      color: 'var(--text-primary)',
    },
    {
      icon: Github,
      label: 'GitHub',
      action: () => window.open(import.meta.env.VITE_GITHUB_URL, '_blank'),
      color: 'var(--text-primary)',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      action: () => window.open(import.meta.env.VITE_TWITTER_URL, '_blank'),
      color: 'var(--text-primary)',
    },
    {
      icon: MessageCircle,
      label: 'Contact Form',
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      },
      color: 'var(--text-primary)',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {contactOptions.map((option, index) => (
              <motion.button
                key={option.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                onClick={option.action}
                className="glassmorphism p-3 rounded-full hover-lift magnetic flex items-center space-x-2 pr-4 group"
                whileHover={{ scale: 1.05 }}
              >
                <option.icon size={20} style={{ color: option.color }} />
                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>
                  {option.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="glassmorphism p-4 rounded-full hover-lift magnetic"
        style={{ backgroundColor: 'var(--text-primary)' }}
      >
        {isOpen ?
          <X size={24} style={{ color: 'var(--bg-primary)' }} /> :
          <MessageCircle size={24} style={{ color: 'var(--bg-primary)' }} />
        }
      </motion.button>
    </div>
  );
};

export default FloatingContact;
