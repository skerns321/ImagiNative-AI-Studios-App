'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const sections = ['HERO', 'WORK', 'SERVICES', 'ABOUT', 'INSIGHTS', 'CONTACT'];

export default function SectionIndicator() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const sectionElements = sections.map(section => 
        document.getElementById(section.toLowerCase())
      );

      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY + (viewportHeight * 0.3); // Adjust trigger point

      sectionElements.forEach((element, index) => {
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = rect.bottom + window.scrollY;
        
        // Add buffer zone for better section detection
        const buffer = viewportHeight * 0.2;
        
        if (
          scrollPosition >= (elementTop - buffer) && 
          scrollPosition <= (elementBottom + buffer)
        ) {
          setActiveSection(index);
        }
      });
    };

    // Initial check
    handleScroll();

    // Add passive flag for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="flex flex-col gap-4">
        {sections.map((section, index) => (
          <motion.a
            key={section}
            href={`#${section.toLowerCase()}`}
            className={`font-mono text-sm relative group px-4 py-2 ${
              index === activeSection ? 'text-primary-red' : 'text-primary-white'
            }`}
            whileHover={{ x: -5 }}
          >
            <span className="relative z-10">_{section}</span>
            <motion.div
              className="absolute left-0 top-0 w-full h-full bg-primary-black -z-0"
              initial={false}
              animate={{
                width: index === activeSection ? '100%' : '0%'
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
} 