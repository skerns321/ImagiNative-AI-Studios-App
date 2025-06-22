'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { useState, useEffect } from 'react';

const navigation = {
  main: [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ]
};

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');

  // Use useEffect to handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
  };

  // Don't render form until client-side
  if (!mounted) {
    return null;
  }

  return (
    <footer className="bg-primary-black border-t border-primary-white/10 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter Section */}
        <div className="mb-12">
          <h3 className="text-xl font-mono text-primary-white mb-6">
            _NEWSLETTER
          </h3>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent border-2 border-primary-white 
                         text-primary-white font-mono px-4 py-2 focus:outline-none
                         focus:border-primary-red transition-colors"
                required
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 
                           text-primary-white font-mono animate-blink">
                _
              </span>
            </div>
            <button
              type="submit"
              className="bg-primary-red border-2 border-primary-red px-6 py-2 
                       text-primary-white font-mono hover:bg-primary-red/90 
                       transition-colors relative
                       before:content-[''] before:absolute before:-bottom-1 
                       before:-right-1 before:w-full before:h-full before:border-2 
                       before:border-primary-white before:-z-10"
            >
              SUBSCRIBE_
            </button>
          </form>
        </div>

        {/* Copyright and Scroll Indicators */}
        <div className="flex flex-col md:flex-row justify-between items-center 
                      border-t border-primary-white/10 pt-8">
          <p className="text-primary-white/60 font-mono mb-4 md:mb-0">
            © 2025 ImagiNative AI Studios. All rights reserved_
          </p>
          
          <div className="flex items-center gap-4">
            {/* Scroll to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 border-2 border-primary-white text-primary-white 
                       hover:border-primary-red hover:text-primary-red 
                       transition-colors"
              aria-label="Scroll to top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6"/>
              </svg>
            </button>

            {/* Scroll Progress Indicator */}
            <div className="font-mono text-sm">
              <span className="text-primary-white">SCROLL_</span>
              <span className="text-primary-red">100%</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 