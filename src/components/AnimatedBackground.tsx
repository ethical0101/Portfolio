import React from 'react';

const AnimatedBackground: React.FC = () => {
  // Simple gradient background without animated shapes for better performance
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.02) 0%, transparent 50%)
        `
      }}
    />
  );
};

export default AnimatedBackground;
