'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Github,
  Dribbble 
} from 'lucide-react';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/imaginativeai',
    icon: Facebook,
    color: 'hover:text-[#1877F2]'
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/imaginativeai',
    icon: Instagram,
    color: 'hover:text-[#E4405F]'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/imaginativeai',
    icon: Twitter,
    color: 'hover:text-[#1DA1F2]'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/imaginativeai',
    icon: Linkedin,
    color: 'hover:text-[#0A66C2]'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/imaginativeai',
    icon: Github,
    color: 'hover:text-white'
  },
  {
    name: 'Dribbble',
    href: 'https://dribbble.com/imaginativeai',
    icon: Dribbble,
    color: 'hover:text-[#EA4C89]'
  }
];

export default function SocialLinks({ floating = false }: { floating?: boolean }) {
  return (
    <div
      className={`${
        floating
          ? 'hidden md:flex fixed left-4 bottom-4 z-40 flex-col gap-4'
          : 'flex gap-4'
      }`}
      style={{ position: floating ? 'fixed' : 'relative' }}
    >
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-primary-white/60 transition-all duration-300 ${social.color} hover:scale-110`}
            aria-label={`Follow us on ${social.name}`}
          >
            <Icon className={floating ? 'w-6 h-6' : 'w-5 h-5'} />
          </Link>
        );
      })}
    </div>
  );
}