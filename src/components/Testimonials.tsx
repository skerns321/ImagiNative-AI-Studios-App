'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { testimonials } from '@/lib/data/testimonials';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-mono mb-12 text-primary-white">
          _TESTIMONIALS
        </h2>
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
                  <div className="relative w-12 h-12 mr-4 bg-[#1A1A1A] border-2 border-primary-white">
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

                <p className="font-mono text-sm text-primary-white/70">
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