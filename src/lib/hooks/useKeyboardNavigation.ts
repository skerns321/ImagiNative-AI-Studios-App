'use client';

import { useEffect } from 'react';

export function useKeyboardNavigation() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content with Alt + 1
      if (e.altKey && e.key === '1') {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
        }
      }

      // Navigate to next section with Alt + Arrow Down
      if (e.altKey && e.key === 'ArrowDown') {
        e.preventDefault();
        const sections = document.querySelectorAll('section[id]');
        const currentSection = Array.from(sections).find(section => {
          const rect = section.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        });

        if (currentSection) {
          const currentIndex = Array.from(sections).indexOf(currentSection);
          if (currentIndex < sections.length - 1) {
            sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
          }
        }
      }

      // Navigate to previous section with Alt + Arrow Up
      if (e.altKey && e.key === 'ArrowUp') {
        e.preventDefault();
        const sections = document.querySelectorAll('section[id]');
        const currentSection = Array.from(sections).find(section => {
          const rect = section.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        });

        if (currentSection) {
          const currentIndex = Array.from(sections).indexOf(currentSection);
          if (currentIndex > 0) {
            sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
} 