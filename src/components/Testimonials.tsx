'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { testimonials } from '@/lib/data/testimonials';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-primary-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Brutalist Style */}
        <div className="mb-16 border-4 border-primary-white p-8 relative">
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-red" />
          <h2 className="font-mono text-5xl uppercase relative z-10">
            <span className="text-primary-red">[</span>
            TESTIMONIALS
            <span className="text-primary-red">]_</span>
          </h2>
          <p className="font-mono text-primary-white/70 mt-4">
            &gt; SELECT * FROM client_feedback ORDER BY rating DESC;
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="border-2 border-primary-white p-4 relative h-full">
                <div className="absolute -top-3 left-4 bg-primary-black px-2">
                  <span className="font-mono text-sm text-primary-yellow">
                    {testimonial.role}
                  </span>
                </div>

                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4 bg-primary-black border-2 border-primary-white">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <h3 className="font-mono text-lg text-primary-white">
                    {testimonial.name}
                  </h3>
                </div>

                <p className="font-body text-sm text-primary-white/70 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary-red" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 