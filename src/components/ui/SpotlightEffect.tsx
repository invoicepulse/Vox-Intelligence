import React, { useEffect } from 'react';

export function SpotlightEffect() {
  useEffect(() => {
    // Create a persistent spotlight element
    const spotlight = document.createElement('div');
    spotlight.className = 'spotlight-effect';
    document.body.appendChild(spotlight);

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY + window.scrollY;
      
      spotlight.style.background = `radial-gradient(circle at center, rgba(139, 92, 246, 0.35) 0%, transparent 60%)`;
      spotlight.style.left = `${x}px`;
      spotlight.style.top = `${y}px`;
      spotlight.style.transform = 'translate(-50%, -50%)';
      spotlight.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Add the required styles to the document
    const style = document.createElement('style');
    style.textContent = `
      .spotlight-effect {
        pointer-events: none;
        position: absolute;
        width: 200px;
        height: 200px;
        transition: all 0.2s ease;
        z-index: 9999;
        opacity: 0;
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.head.removeChild(style);
      document.body.removeChild(spotlight);
    };
  }, []);

  return null;
}
