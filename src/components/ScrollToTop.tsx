'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!mounted) return null;

  return (
    <motion.button
      onClick={handleScrollToTop}
      style={{ opacity }}
      className="fixed bottom-32 left-8 z-[60] p-3 bg-primary-black border-2 
                border-primary-white group hover:border-primary-red transition-colors
                before:content-[''] before:absolute before:-bottom-1 before:-right-1 
                before:w-full before:h-full before:border-2 before:border-primary-red 
                before:-z-10"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <ArrowUp className="w-6 h-6 text-primary-white group-hover:text-primary-red transition-colors" />
      <span className="sr-only">Scroll to top</span>
    </motion.button>
  );
} 