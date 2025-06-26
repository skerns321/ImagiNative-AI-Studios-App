'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const menuItems = ['WORK', 'SERVICES', 'ABOUT', 'TESTIMONIALS', 'INSIGHTS', 'CONTACT'];

  const handleMenuClick = (item: string) => {
    setIsOpen(false);
    // Smooth scroll to section
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 bg-primary-black transition-all duration-300
                ${scrolled ? 'border-b-4' : ''} border-primary-red backdrop-blur-sm bg-primary-black/95`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="font-mono text-sm sm:text-base lg:text-lg xl:text-xl relative group whitespace-nowrap flex-shrink-0">
            <span className="text-primary-red">[</span>
            <span className="hidden xs:inline">IMAGI</span><span className="text-primary-yellow">NATIVE</span>
            <span className="text-primary-red">]</span>
            <span className="text-primary-white hidden sm:inline">_AI STUDIOS</span>
            <span className="text-primary-white sm:hidden">_AI</span>
            <span className="text-primary-red animate-blink">_</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleMenuClick(item)}
                className="font-mono text-xs xl:text-sm text-primary-white hover:text-primary-red relative group px-2 py-1 transition-colors"
              >
                _{item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-red 
                               group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-primary-white hover:text-primary-red 
                     border-2 border-primary-white hover:border-primary-red transition-colors
                     touch-manipulation"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 border-t-2 border-primary-white/20 space-y-1">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleMenuClick(item)}
                    className="block w-full text-left py-3 px-4 font-mono text-sm sm:text-base text-primary-white hover:text-primary-red 
                             hover:bg-primary-white/5 transition-colors touch-manipulation"
                  >
                    _{item}
                  </motion.button>
                ))}
                
                {/* Additional mobile-only content */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="pt-4 mt-4 border-t border-primary-white/20"
                >
                  <div className="px-4 text-xs font-mono text-primary-white/60">
                    &gt; Ready to start your project?
                  </div>
                  <button
                    onClick={() => handleMenuClick('CONTACT')}
                    className="w-full mt-2 mx-4 py-2 px-4 bg-primary-red text-primary-white font-mono text-sm
                             hover:bg-primary-red/80 transition-colors touch-manipulation"
                    style={{ width: 'calc(100% - 2rem)' }}
                  >
                    GET_STARTED_
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
} 