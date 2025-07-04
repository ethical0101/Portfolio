import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Responsive shape count based on screen size
    const getShapeCount = () => {
      if (window.innerWidth < 480) return 4;
      if (window.innerWidth < 768) return 6;
      if (window.innerWidth < 1024) return 8;
      return 10;
    };

    // Black and white geometric shapes
    const shapes: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      opacity: number;
      type: 'circle' | 'square' | 'triangle';
      color: 'black' | 'white';
    }> = [];

    const initShapes = () => {
      shapes.length = 0;
      const shapeCount = getShapeCount();
      
      for (let i = 0; i < shapeCount; i++) {
        const radius = Math.random() * 40 + 20; // Smaller shapes for mobile
        shapes.push({
          x: Math.random() * (canvas.width - radius * 2) + radius,
          y: Math.random() * (canvas.height - radius * 2) + radius,
          radius,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.08 + 0.02, // Lower opacity
          type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
          color: Math.random() > 0.5 ? 'white' : 'black'
        });
      }
    };

    initShapes();

    const drawShape = (shape: typeof shapes[0]) => {
      ctx.save();
      ctx.globalAlpha = shape.opacity;
      
      // Adjust colors based on theme to avoid conflicts
      let shapeColor = shape.color;
      if (isDark && shape.color === 'black') {
        shapeColor = 'white';
      } else if (!isDark && shape.color === 'white') {
        shapeColor = 'black';
      }
      
      ctx.fillStyle = shapeColor;
      ctx.strokeStyle = shapeColor;
      ctx.lineWidth = 1;

      switch (shape.type) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2);
          ctx.stroke();
          break;
        
        case 'square':
          ctx.strokeRect(
            shape.x - shape.radius,
            shape.y - shape.radius,
            shape.radius * 2,
            shape.radius * 2
          );
          break;
        
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(shape.x, shape.y - shape.radius);
          ctx.lineTo(shape.x - shape.radius, shape.y + shape.radius);
          ctx.lineTo(shape.x + shape.radius, shape.y + shape.radius);
          ctx.closePath();
          ctx.stroke();
          break;
      }
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      shapes.forEach((shape, index) => {
        // Smooth movement
        shape.x += shape.vx + Math.sin(time + index) * 0.1;
        shape.y += shape.vy + Math.cos(time + index * 0.7) * 0.1;

        // Bounce off edges with padding
        const padding = shape.radius;
        if (shape.x <= padding || shape.x >= canvas.width - padding) {
          shape.vx *= -1;
          shape.x = Math.max(padding, Math.min(canvas.width - padding, shape.x));
        }
        if (shape.y <= padding || shape.y >= canvas.height - padding) {
          shape.vy *= -1;
          shape.y = Math.max(padding, Math.min(canvas.height - padding, shape.y));
        }

        // Apply blur filter
        ctx.filter = 'blur(8px)';
        drawShape(shape);
        ctx.filter = 'none';
      });

      animationId = requestAnimationFrame(animate);
    };

    // Reinitialize shapes on resize
    const handleResize = () => {
      resizeCanvas();
      initShapes();
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [isDark]);

  return (
    <>
      {/* Canvas with responsive black and white shapes */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ background: 'transparent' }}
      />
      
      {/* CSS-based responsive geometric shapes */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Responsive shapes that adjust based on screen size */}
        <motion.div
          className="absolute top-10 left-5 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 opacity-3"
          style={{ 
            backgroundColor: isDark ? '#ffffff' : '#000000',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            filter: 'blur(12px)'
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/4 right-5 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full opacity-2"
          style={{ 
            backgroundColor: isDark ? '#000000' : '#ffffff',
            filter: 'blur(15px)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/4 w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 opacity-4"
          style={{ 
            backgroundColor: isDark ? '#ffffff' : '#000000',
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            filter: 'blur(10px)'
          }}
          animate={{
            rotate: [0, -360],
            scale: [1, 1.4, 1],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-10 right-1/4 w-18 h-18 sm:w-24 sm:h-24 md:w-32 md:h-32 opacity-3"
          style={{ 
            backgroundColor: isDark ? '#000000' : '#ffffff',
            filter: 'blur(18px)'
          }}
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-4"
          style={{ 
            backgroundColor: isDark ? '#ffffff' : '#000000',
            transform: 'rotate(45deg)',
            filter: 'blur(8px)'
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [45, 225, 405],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Responsive animated grid */}
        <div 
          className="absolute inset-0 opacity-1"
          style={{
            backgroundImage: `
              linear-gradient(${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'} 1px, transparent 1px),
              linear-gradient(90deg, ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'} 1px, transparent 1px)
            `,
            backgroundSize: window.innerWidth < 768 ? '60px 60px' : '80px 80px',
            animation: 'gridMove 60s linear infinite',
            filter: 'blur(3px)'
          }}
        />
      </div>
      
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(${window.innerWidth < 768 ? '60px, 60px' : '80px, 80px'}); }
        }
      `}</style>
    </>
  );
};

export default AnimatedBackground;