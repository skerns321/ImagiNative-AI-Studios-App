'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import WindowFrame from './WindowFrame';
import {
  Monitor,
  Cpu,
  MessageSquare,
  Megaphone
} from 'lucide-react';


const services = [
  {
    id: 'web-dev',
    title: 'WEB_DEVELOPMENT',
    description: [
      '> Web Presence & Development',
      '> E-commerce & Marketing',
      '> Custom Applications',
      '> Managed Services'
    ],
    Icon: Monitor,
    href: '/services/web-development'
  },
  {
    id: 'ai-business',
    title: 'AI_BUSINESS_SOLUTIONS',
    description: [
      '> Custom ChatGPT Integrations',
      '> Prompt Engineering Training',
      '> Tailored AI Solutions',
      '> AI Strategy & Consultation'
    ],
    Icon: Cpu,
    href: '/services/ai-business-solutions'
  },
  {
    id: 'social-media',
    title: 'SOCIAL_MEDIA_MANAGEMENT',
    description: [
      '> Strategy & Planning',
      '> Content Creation & Scheduling',
      '> Campaign & Ad Management',
      '> Engagement & Analytics'
    ],
    Icon: MessageSquare,
    href: '/services/social-media-management'
  },
  {
    id: 'branding-marketing',
    title: 'BRANDING_AND_MARKETING',
    description: [
      '> Cohesive brand identity',
      '> Impactful marketing campaigns',
      '> Data-driven visibility strategies',
      '> Social listening for targeted outreach'
    ],
    Icon: Megaphone,
    href: '/services/branding-and-marketing'
  }
];

export default function Services() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-primary-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-mono mb-8 sm:mb-10 lg:mb-12 border-l-4 border-primary-red pl-4"
          initial={false}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          _SERVICES
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={service.href} className="block group">
                <WindowFrame title={service.title}>
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 
                                group-hover:transform group-hover:translate-x-1 transition-transform">
                    <div className="flex-shrink-0 p-2 sm:p-3 border-2 border-primary-red 
                                  group-hover:border-primary-yellow transition-colors">
                      <service.Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-red 
                                              group-hover:text-primary-yellow transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="font-mono text-sm sm:text-base text-primary-white/80 
                                   group-hover:text-primary-white whitespace-pre-line leading-relaxed 
                                   transition-colors">
                        {Array.isArray(service.description)
                          ? service.description.join('\n')
                          : service.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-primary-yellow 
                                    group-hover:text-primary-white transition-colors">
                        <span className="font-mono text-sm">LEARN_MORE</span>
                        <span className="font-mono text-sm">&gt;&gt;</span>
                      </div>
                    </div>
                  </div>
                </WindowFrame>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="border-2 border-primary-white p-6 sm:p-8 relative max-w-2xl mx-auto">
            <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 bg-primary-red" />
            <h3 className="font-mono text-lg sm:text-xl lg:text-2xl text-primary-white mb-4">
              READY_TO_START?
            </h3>
            <p className="font-mono text-sm sm:text-base text-primary-white/70 mb-6">
              &gt; Let's discuss your project and bring your ideas to life
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-block bg-primary-black border-2 border-primary-white px-6 py-3 
                       font-mono uppercase relative hover:translate-x-1 hover:-translate-y-1 
                       transition-transform group touch-manipulation"
            >
              <span className="relative z-10 text-sm sm:text-base">GET_STARTED</span>
              <div className="absolute inset-0 bg-primary-red -z-0 translate-x-2 
                            translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 
                            transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 