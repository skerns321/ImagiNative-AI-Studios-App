'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'AI Solutions', href: '/services/ai-business-solutions' },
    { name: 'Social Media', href: '/services/social-media-management' },
    { name: 'Branding', href: '/services/branding-and-marketing' },
  ];

  return (
    <footer className="bg-primary-black border-t-4 border-primary-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {/* Brand & Description */}
          <motion.div 
            className="col-span-2 sm:col-span-3 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-6">
              <div className="flex-1">
                <div className="font-mono text-base sm:text-lg lg:text-xl mb-3">
                  <span className="text-primary-red">[</span>
                  <span className="text-primary-white">IMAGI</span>
                  <span className="text-primary-yellow">NATIVE</span>
                  <span className="text-primary-red">]</span>
                  <span className="text-primary-white">_STUDIOS</span>
                </div>
                <p className="text-xs sm:text-sm text-primary-white/70 font-mono leading-relaxed max-w-md">
                  &gt; Transforming ideas into digital reality through innovative AI solutions 
                  and cutting-edge development.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-2 sm:gap-3">
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
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-mono text-sm text-primary-red uppercase mb-2 sm:mb-3">
              _NAVIGATION
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-mono text-xs text-primary-white/70 
                             hover:text-primary-white transition-colors block py-0.5"
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
            <h3 className="font-mono text-sm text-primary-red uppercase mb-2 sm:mb-3">
              _SERVICES
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="font-mono text-xs text-primary-white/70 
                             hover:text-primary-white transition-colors block py-0.5"
                  >
                    &gt; {service.name}
                  </Link>
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
            <h3 className="font-mono text-sm text-primary-red uppercase mb-2 sm:mb-3">
              _CONNECT
            </h3>
            <div className="space-y-2">
              <div>
                <p className="font-mono text-xs text-primary-white/50 uppercase">Email</p>
                <a 
                  href="mailto:hello@imaginative.studio"
                  className="font-mono text-xs text-primary-white/70 
                           hover:text-primary-white transition-colors break-all"
                >
                  hello@imaginative.studio
                </a>
              </div>
              <div>
                <p className="font-mono text-xs text-primary-white/50 uppercase">Phone</p>
                <a 
                  href="tel:+15551234567"
                  className="font-mono text-xs text-primary-white/70 
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
          className="border-t border-primary-white/20 mt-6 sm:mt-8 pt-4 sm:pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
            <div className="text-center sm:text-left">
              <p className="font-mono text-xs text-primary-white/50">
                © {currentYear} ImagiNative Studios. All rights reserved.
              </p>
              <p className="font-mono text-xs text-primary-white/30 mt-0.5">
                &gt; Built with passion and innovation_
              </p>
            </div>
          </div>
        </motion.div>

        {/* Terminal Style Bottom Line */}
        <motion.div 
          className="mt-4 sm:mt-6"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="h-px bg-gradient-to-r from-primary-red via-primary-yellow to-primary-red opacity-50" />
          <div className="mt-1 font-mono text-xs text-primary-white/30 text-center">
            &gt; END_OF_FILE_
            <span className="animate-blink text-primary-red">_</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 