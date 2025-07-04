import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    // Check if device is mobile/tablet
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Only add cursor effects on desktop
    if (!isMobile) {
      // Add event listeners to interactive elements
      const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea');
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', checkMobile);
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile) return null;

  const cursorColor = isDark ? '#ffffff' : '#000000';

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
        <div 
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: cursorColor }}
        />
      </motion.div>

      {/* Trailing cursor */}
      <motion.div
        className="fixed pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.8
        }}
      >
        <div 
          className="w-10 h-10 rounded-full opacity-50"
          style={{
            border: `1px solid ${cursorColor}`,
            background: isHovering 
              ? `radial-gradient(circle, ${cursorColor}10 0%, transparent 70%)`
              : 'transparent'
          }}
        />
      </motion.div>

      {/* Particle trail */}
      <motion.div
        className="fixed pointer-events-none z-30"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
      >
        <div 
          className="w-1 h-1 rounded-full opacity-70"
          style={{ backgroundColor: cursorColor }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;