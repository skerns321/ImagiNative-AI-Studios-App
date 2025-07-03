'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { teamMembers } from '@/lib/data/team';

export default function About() {
  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-primary-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Brutalist Style */}
        <div className="mb-16 border-4 border-primary-white p-8 relative">
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-red" />
          <h2 className="font-mono text-fluid-4xl uppercase relative z-10">
            <span className="text-primary-red">[</span>
            ABOUT
            <span className="text-primary-red">]_</span>
          </h2>
          <p className="font-mono text-fluid-sm text-primary-white/70 mt-4">
            &gt; SELECT * FROM team_members JOIN company_info ON team.id;
          </p>
        </div>
        <div className="mb-10">
          <p className="font-body text-primary-white/80 mb-4 text-base sm:text-lg leading-relaxed">
            ImagiNative AI Studios is a forward-thinking digital innovation studio dedicated to blending creativity with cutting-edge technology. Our mission is to empower brands and individuals to realize their boldest ideas through the power of artificial intelligence, design, and strategic thinking. With a passion for pushing boundaries, we craft digital experiences that are not only visually stunning but also deeply impactful.
          </p>
          <p className="font-body text-primary-white/80 text-base sm:text-lg leading-relaxed">
            Our multidisciplinary team brings together expertise in AI, design, development, and strategy to deliver solutions that drive real results. Whether you're a startup looking to disrupt your industry or an established brand seeking a fresh perspective, ImagiNative AI Studios is your partner in digital transformation. We believe in the power of collaboration, curiosity, and relentless innovation to shape the future.
          </p>
        </div>
        
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
                <div className="relative aspect-square mb-4 bg-primary-black border-2 border-primary-white">
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
                  <h3 className="font-mono text-lg sm:text-xl text-primary-white">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-primary-white/70 leading-relaxed">
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