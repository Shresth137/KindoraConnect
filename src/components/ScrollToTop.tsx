import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Show button when scrolled down 300px
      setIsVisible(currentScrollY > 300);
      
      // Calculate scroll progress percentage
      const progress = (currentScrollY / scrollHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
  <button
    onClick={scrollToTop}
    className={`fixed bottom-8 right-8 z-40 w-12 h-12 bg-white hover:bg-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
    }`}
    aria-label="Scroll to top"
  >
    {/* Circular progress indicator */}
    <svg
      className="absolute inset-0 w-12 h-12 transform -rotate-90"
      viewBox="0 0 56 56"
    >
      <circle
        cx="28"
        cy="28"
        r="26"
        stroke="rgba(0, 0, 0, 0.2)"
        strokeWidth="3"
        fill="none"
      />
      {/* Progress (cyan-400) */}
      <circle
        cx="28"
        cy="28"
        r="26"
        stroke="#0891b2"
        strokeWidth="4"
        fill="none"
        strokeDasharray={`${2 * Math.PI * 26}`}
        strokeDashoffset={`${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`}
        className="text-cyan-400 transition-all duration-150 ease-out"
      />
    </svg>
    
    {/* Arrow icon (black) */}
    <ArrowUp 
      size={22} 
      className="relative z-10 text-black group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform duration-200" 
    />
    
    {/* Hover glow effect */}
    <div className="absolute inset-0 rounded-full bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
  </button>
);

};

export default ScrollToTop;