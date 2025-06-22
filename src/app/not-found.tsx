'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

function HomeButton() {
  return (
    <Link
      href="/"
      className="inline-block bg-primary-black border-2 border-primary-white px-6 py-3 
               font-mono uppercase relative hover:translate-x-1 hover:-translate-y-1 
               transition-transform group"
    >
      <span className="relative z-10">HOME_</span>
      <div className="absolute inset-0 bg-primary-red -z-0 translate-x-2 
                    translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 
                    transition-transform" />
    </Link>
  );
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-black flex flex-col items-center justify-center px-4">
      <div className="border-4 border-primary-white p-8 relative max-w-2xl w-full">
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-red" />
        
        <motion.div 
          className="text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-8 font-mono">
            <span className="text-6xl md:text-8xl text-primary-white">4</span>
            <span className="text-6xl md:text-8xl text-primary-red mx-4">0</span>
            <span className="text-6xl md:text-8xl text-primary-white">4</span>
            <span className="text-primary-red animate-blink">_</span>
          </div>
          
          <h1 className="text-4xl font-mono text-primary-white mb-4">
            PAGE_NOT_FOUND
          </h1>
          
          <p className="font-mono text-primary-white/70 mb-8">
            &gt; The page you are looking for does not exist or has been moved.
          </p>
          
          <HomeButton />
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Yellow circle */}
        <motion.div 
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary-yellow opacity-20 blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.2, 0.15] 
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Red shape */}
        <motion.div 
          className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary-red opacity-10 blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>
    </div>
  );
} 