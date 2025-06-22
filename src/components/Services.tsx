'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
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
    Icon: Monitor
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
    Icon: Cpu
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
    Icon: MessageSquare
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
    Icon: Megaphone
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
    <section id="services" className="py-20 px-4 bg-primary-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-mono mb-12 border-l-4 border-primary-red pl-4"
          initial={false}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          _SERVICES
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <WindowFrame key={service.id} title={service.title}>
              <div className="flex flex-col items-start space-y-4">
                <div className="p-2 border-2 border-primary-red">
                  <service.Icon className="w-8 h-8 text-primary-red" />
                </div>
                <p className="font-mono text-primary-white/80 whitespace-pre-line">
                  {Array.isArray(service.description)
                    ? service.description.join('\n')
                    : service.description}
                </p>

              </div>
            </WindowFrame>
          ))}
        </div>
      </div>
    </section>
  );
} 