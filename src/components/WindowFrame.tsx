'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import LoadingWindow from './LoadingWindow';

interface WindowFrameProps {
  title: string;
  children: ReactNode;
  className?: string;
  loading?: boolean;
}

export default function WindowFrame({ 
  title, 
  children, 
  className = '',
  loading = false 
}: WindowFrameProps) {
  if (loading) {
    return <LoadingWindow message={`LOADING_${title}`} size="sm" />;
  }

  return (
    <motion.div
      className={`relative border-4 border-primary-white bg-primary-black ${className}`}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Window Header */}
      <div className="flex items-center justify-between p-2 border-b-4 border-primary-white bg-primary-black">
        <h3 className="font-mono text-lg text-primary-white">{title}</h3>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-primary-yellow" />
          <div className="w-3 h-3 rounded-full bg-primary-red" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {children}
      </div>

      {/* Decorative Corner */}
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-red" />
    </motion.div>
  );
} 