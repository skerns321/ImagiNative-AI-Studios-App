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

  const menuItems = ['WORK', 'SERVICES', 'ABOUT', 'INSIGHTS', 'CONTACT'];

  return (
    <header 
      className={`fixed w-full top-0 z-50 bg-primary-black transition-all duration-300
                ${scrolled ? 'border-b-4' : ''} border-primary-red`}
    >
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="font-mono text-xl md:text-2xl relative group">
            <span className="text-primary-red">[</span>
            IMAGI<span className="text-primary-yellow">NATIVE</span>
            <span className="text-primary-red">]</span>
            <span className="text-primary-white">_AI STUDIOS</span>
            <span className="text-primary-red animate-blink">_</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-primary-white hover:text-primary-red relative group"
              >
                _{item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-red 
                               group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary-white hover:text-primary-red 
                     border-2 border-primary-white hover:border-primary-red transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 border-t-2 border-primary-white/20">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 font-mono text-primary-white hover:text-primary-red 
                             hover:bg-primary-white/5 transition-colors"
                  >
                    _{item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
} 