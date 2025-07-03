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
      className={`fixed w-full top-0 z-50 transition-all duration-300 safe-area-top
                ${scrolled 
                  ? 'bg-primary-black/95 backdrop-blur-md border-b-2 border-primary-red shadow-lg' 
                  : 'bg-primary-black/90 backdrop-blur-sm'
                }`}
    >
      <nav className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 lg:h-24">
          {/* Logo - Responsive sizing and visibility */}
          <Link 
            href="/" 
            className="font-mono relative group flex-shrink-0 
                     text-fluid-base
                     hover:scale-105 transition-transform duration-200"
            aria-label="ImagiNative AI Studios Home"
          >
            <span className="text-primary-red">[</span>
            <span className="text-primary-yellow">IMAGINATIVE</span>
            <span className="text-primary-red">]</span>
            <span className="text-primary-white hidden xs:inline">_AI STUDIOS</span>
            <span className="text-primary-white xs:hidden">_AI</span>
            <span className="text-primary-red animate-blink">_</span>
          </Link>

          {/* Tablet Navigation - Shows on medium screens */}
          <div className="hidden md:flex lg:hidden items-center gap-2">
            {menuItems.slice(0, 4).map((item) => (
              <button
                key={item}
                onClick={() => handleMenuClick(item)}
                className="font-mono text-xs text-primary-white hover:text-primary-red 
                         relative group px-3 py-2 transition-colors touch-target"
              >
                _{item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-red 
                               group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-primary-white hover:text-primary-red 
                       border border-primary-white hover:border-primary-red transition-colors
                       touch-target ml-2"
              aria-label="More menu options"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>

          {/* Desktop Navigation - Full menu on large screens */}
          <div className="hidden lg:flex items-center">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleMenuClick(item)}
                className="font-mono text-xs xl:text-sm text-primary-white hover:text-primary-red 
                         relative group px-3 xl:px-4 py-2 transition-colors touch-target
                         min-w-[80px] xl:min-w-[90px] text-center"
              >
                _{item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-red 
                               group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button - Shows on small screens - Enhanced touch target */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-primary-white hover:text-primary-red 
                     border-2 border-primary-white hover:border-primary-red transition-colors
                     min-w-[44px] min-h-[44px] flex items-center justify-center
                     rounded-sm touch-manipulation active:scale-95"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile/Tablet Overlay Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Menu Content */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute top-full left-0 right-0 bg-primary-black border-b-2 border-primary-red
                         shadow-2xl z-50 max-h-[calc(100vh-4rem)] overflow-y-auto"
              >
                <div className="container-padding py-4 space-y-1">
                  {/* Menu Items */}
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                      onClick={() => handleMenuClick(item)}
                      className="block w-full text-left py-5 px-6 font-mono 
                               text-base sm:text-lg text-primary-white hover:text-primary-red 
                               hover:bg-primary-white/5 transition-colors touch-manipulation
                               border-l-2 border-transparent hover:border-primary-red
                               min-h-[56px] flex items-center active:bg-primary-white/10"
                    >
                      <span className="flex items-center">
                        <span className="text-primary-red mr-2">&gt;</span>
                        _{item}
                      </span>
                    </motion.button>
                  ))}
                  
                  {/* Call-to-Action Section */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: menuItems.length * 0.05 + 0.1, duration: 0.2 }}
                    className="pt-6 mt-6 border-t border-primary-white/20"
                  >
                    <div className="px-4 space-y-3">
                      <div className="text-xs font-mono text-primary-white/60">
                        &gt; Ready to start your project?
                      </div>
                      <button
                        onClick={() => handleMenuClick('CONTACT')}
                        className="w-full py-4 px-6 bg-primary-red text-primary-white font-mono text-base
                                 hover:bg-primary-red/80 transition-colors touch-manipulation
                                 min-h-[48px] active:bg-primary-red/70
                                 border-2 border-primary-red hover:border-primary-white
                                 relative group overflow-hidden"
                      >
                        <span className="relative z-10">GET_STARTED_</span>
                        <div className="absolute inset-0 bg-primary-white/10 transform scale-x-0 
                                     group-hover:scale-x-100 transition-transform origin-left duration-300" />
                      </button>
                      
                      {/* Contact Info */}
                      <div className="text-xs font-mono text-primary-white/40 space-y-1">
                        <div>&gt; hello@imaginative-ai.com</div>
                        <div>&gt; +1 (555) 123-4567</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
} 