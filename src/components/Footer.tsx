'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

// Custom TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.288-1.989-1.288-3.338h-3.28v13.367c0 2.48-2.016 4.496-4.496 4.496s-4.496-2.016-4.496-4.496c0-2.48 2.016-4.496 4.496-4.496.247 0 .487.02.722.059v-3.366a7.842 7.842 0 0 0-.722-.035C4.064 6.529 0 10.593 0 15.506s4.064 8.977 8.977 8.977 8.977-4.064 8.977-8.977V9.848a9.65 9.65 0 0 0 5.564 1.786V8.388a6.166 6.166 0 0 1-4.197-2.826z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/imaginativestudios', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/imaginativestudios', label: 'X (Twitter)' },
    { icon: Instagram, href: 'https://instagram.com/imaginativestudios', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/imaginativestudios', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/imaginativestudios', label: 'GitHub' },
    { icon: TikTokIcon, href: 'https://tiktok.com/@imaginativestudios', label: 'TikTok' },
  ];

  const quickLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Web Development',
    'AI Solutions',
    'Social Media',
    'Branding',
  ];

  return (
    <footer className="bg-primary-black border-t-4 border-primary-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <motion.div 
            className="sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-mono text-base sm:text-lg lg:text-xl mb-4">
              <span className="text-primary-red">[</span>
              <span className="text-primary-white">IMAGI</span>
              <span className="text-primary-yellow">NATIVE</span>
              <span className="text-primary-red">]</span>
              <span className="text-primary-white">_STUDIOS</span>
            </div>
            <p className="text-xs sm:text-sm text-primary-white/70 font-mono leading-relaxed max-w-xs">
              &gt; Transforming ideas into digital reality through innovative AI solutions 
              and cutting-edge development.
            </p>
            
            {/* Social Links */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6 max-w-[180px]">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-primary-white/30 hover:border-primary-red 
                           text-primary-white hover:text-primary-red transition-colors
                           touch-manipulation"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-mono text-sm sm:text-base text-primary-red uppercase mb-3 sm:mb-4">
              _NAVIGATION
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-mono text-xs sm:text-sm text-primary-white/70 
                             hover:text-primary-white transition-colors block py-1"
                  >
                    &gt; {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-mono text-sm sm:text-base text-primary-red uppercase mb-3 sm:mb-4">
              _SERVICES
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-mono text-xs sm:text-sm text-primary-white/70 block py-1">
                    &gt; {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-mono text-sm sm:text-base text-primary-red uppercase mb-3 sm:mb-4">
              _CONNECT
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <div>
                <p className="font-mono text-xs text-primary-white/50 uppercase">Email</p>
                <a 
                  href="mailto:hello@imaginative.studio"
                  className="font-mono text-xs sm:text-sm text-primary-white/70 
                           hover:text-primary-white transition-colors break-all"
                >
                  hello@imaginative.studio
                </a>
              </div>
              <div>
                <p className="font-mono text-xs text-primary-white/50 uppercase">Phone</p>
                <a 
                  href="tel:+15551234567"
                  className="font-mono text-xs sm:text-sm text-primary-white/70 
                           hover:text-primary-white transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-primary-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="font-mono text-xs text-primary-white/50">
                © {currentYear} ImagiNative Studios. All rights reserved.
              </p>
              <p className="font-mono text-xs text-primary-white/30 mt-1">
                &gt; Built with passion and innovation_
              </p>
            </div>
            
          </div>
        </motion.div>

        {/* Terminal Style Bottom Line */}
        <motion.div 
          className="mt-6 sm:mt-8"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="h-px bg-gradient-to-r from-primary-red via-primary-yellow to-primary-red opacity-50" />
          <div className="mt-2 font-mono text-xs text-primary-white/30 text-center">
            &gt; END_OF_FILE_
            <span className="animate-blink text-primary-red">_</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 