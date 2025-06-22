'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgress() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-[80px] left-0 right-0 h-1 bg-primary-red z-40 origin-[0%]"
        style={{ scaleX }}
      />
      
      {/* Scroll to Top Button */}
      <motion.button
        onClick={handleScrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-32 right-8 z-[60] p-3 bg-primary-black border-2 border-primary-white 
                 group hover:border-primary-red transition-colors relative
                 before:content-[''] before:absolute before:-bottom-1 before:-right-1 
                 before:w-full before:h-full before:border-2 before:border-primary-red 
                 before:-z-10"
      >
        <ArrowUp className="w-6 h-6 text-primary-white group-hover:text-primary-red transition-colors" />
        <span className="sr-only">Scroll to top</span>
      </motion.button>
    </>
  );
} 