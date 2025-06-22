'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { teamMembers } from '@/lib/data/team';

export default function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };
  
  const circleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.34, 1.56, 0.64, 1],
        delay: 0.3
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-mono mb-12 text-primary-white">
          _TEAM
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Member Card */}
              <div className="border-2 border-primary-white p-4 relative">
                {/* Role Tag */}
                <div className="absolute -top-3 left-4 bg-primary-black px-2">
                  <span className="font-mono text-sm text-primary-yellow">
                    {member.role}
                  </span>
                </div>

                {/* Member Image */}
                <div className="relative aspect-square mb-4 bg-[#1A1A1A] border-2 border-primary-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>

                {/* Member Info */}
                <div className="space-y-2">
                  <h3 className="font-mono text-lg text-primary-white">
                    {member.name}
                  </h3>
                  <p className="font-mono text-sm text-primary-white/70">
                    {member.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary-red" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 