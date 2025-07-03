'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)'
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group touch-manipulation"
          aria-label="Scroll to top"
        >
          {/* Button Background */}
          <div className="relative">
            {/* Shadow/Offset Background */}
            <div className="absolute inset-0 bg-primary-red translate-x-1 translate-y-1 w-12 h-12 
                          group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
            
            {/* Main Button */}
            <div className="relative bg-primary-black border-2 border-primary-white w-12 h-12 
                          flex items-center justify-center group-hover:border-primary-yellow 
                          transition-colors">
              <ChevronUp className="w-5 h-5 text-primary-white group-hover:text-primary-yellow 
                                 transition-colors" />
            </div>
            
            {/* Terminal Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary-yellow 
                          opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary-yellow 
                          opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Terminal-style label (appears on hover) */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-16 top-1/2 transform -translate-y-1/2 
                     bg-primary-black border border-primary-white px-2 py-1 
                     font-mono text-xs text-primary-white whitespace-nowrap
                     pointer-events-none"
          >
            &gt; scroll_to_top();
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}