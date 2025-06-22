'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';

export function MediaLoader() {
  return (
    <div className="relative aspect-video mb-4">
      <motion.div
        className="absolute inset-0 bg-primary-black border-2 border-primary-white"
        animate={{
          borderColor: ['#FFFFFF', '#E50914', '#FFFFFF'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </div>
  );
}

export function MediaWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<MediaLoader />}>
      {children}
    </Suspense>
  );
} 