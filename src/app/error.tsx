'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

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
          <h1 className="font-mono text-4xl text-primary-white mb-4">
            SYSTEM_ERROR_
          </h1>
          
          <p className="font-mono text-primary-white/70 mb-8">
            &gt; An unexpected error has occurred. Please try again.
          </p>
          
          <button
            onClick={reset}
            className="inline-block bg-primary-black border-2 border-primary-white px-6 py-3 
                     font-mono uppercase relative hover:translate-x-1 hover:-translate-y-1 
                     transition-transform group"
          >
            <span className="relative z-10">TRY_AGAIN</span>
            <div className="absolute inset-0 bg-primary-red -z-0 translate-x-2 
                          translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 
                          transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}