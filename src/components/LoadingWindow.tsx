'use client';

import { motion } from 'framer-motion';

interface LoadingWindowProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function LoadingWindow({ 
  message = 'LOADING', 
  size = 'md' 
}: LoadingWindowProps) {
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-xl',
    lg: 'max-w-2xl'
  };

  return (
    <div className={`w-full ${sizes[size]} mx-auto`}>
      <motion.div 
        className="border-4 border-primary-white bg-primary-black p-4 relative"
        animate={{
          borderColor: ['#FFFFFF', '#E50914', '#FFFFFF'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Window Header */}
        <div className="flex items-center justify-between mb-4 border-b-2 border-primary-white pb-2">
          <h3 className="font-mono text-lg text-primary-white">SYSTEM_STATUS_</h3>
          <div className="flex gap-2">
            <motion.div 
              className="w-3 h-3 rounded-full bg-primary-yellow"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-primary-red"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </div>

        {/* Loading Content */}
        <div className="flex items-center space-x-4">
          <motion.div
            className="w-6 h-6 border-2 border-primary-red border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <div className="font-mono text-xl text-primary-white flex items-center">
            {message}
            <motion.span
              className="ml-1 text-primary-red"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              _
            </motion.span>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div 
          className="mt-4 h-2 bg-primary-black border-2 border-primary-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.div 
            className="h-full bg-primary-red"
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Decorative Corner */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-red" />
      </motion.div>
    </div>
  );
} 