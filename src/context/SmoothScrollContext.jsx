import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const SmoothScrollContext = createContext();

export const useSmoothScroll = () => {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error('useSmoothScroll must be used within SmoothScrollProvider');
  }
  return context;
};

export const SmoothScrollProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');
  // Ref to the scrollable container div in Container.jsx
  const scrollContainerRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    // Get the actual scrollable container (the h-screen overflow-y-auto div)
    const container = document.querySelector('[data-scroll-container]');

    if (section && container) {
      // Calculate position relative to the container, not the window
      const containerTop = container.getBoundingClientRect().top;
      const sectionTop = section.getBoundingClientRect().top;
      const offset = sectionTop - containerTop + container.scrollTop;

      container.scrollTo({ top: offset, behavior: 'smooth' });
      setActiveSection(sectionId);
    } else if (section) {
      // Fallback to scrollIntoView if container not found
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const container = document.querySelector('[data-scroll-container]');
    if (!container) return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
      // Use container.scrollTop instead of window.scrollY
      const scrollPosition = container.scrollTop + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ scrollToSection, activeSection }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};