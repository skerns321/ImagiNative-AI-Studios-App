'use client';

import { motion } from 'framer-motion';

interface CyberpunkBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  showTerminalWindows?: boolean;
  showCodeBlocks?: boolean;
  showBinaryRain?: boolean;
  showCircuitBoard?: boolean;
}

export default function CyberpunkBackground({
  intensity = 'medium',
  showTerminalWindows = true,
  showCodeBlocks = true,
  showBinaryRain = true,
  showCircuitBoard = true,
}: CyberpunkBackgroundProps) {
  const opacityMap = {
    low: 'opacity-5',
    medium: 'opacity-10',
    high: 'opacity-15',
  };

  const gridOpacity = opacityMap[intensity];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">

      {/* Terminal Windows */}
      {showTerminalWindows && (
        <>
          <div className="absolute top-8 left-8 w-24 h-16 border border-primary-white/20 opacity-20 hidden sm:block">
            <div className="flex items-center gap-1 p-1 border-b border-primary-white/20">
              <div className="w-2 h-2 rounded-full bg-primary-red/40" />
              <div className="w-2 h-2 rounded-full bg-primary-yellow/40" />
              <div className="w-2 h-2 rounded-full bg-primary-white/40" />
            </div>
          </div>
          
          <div className="absolute top-8 right-8 w-32 h-20 border border-primary-white/20 opacity-20 hidden sm:block">
            <div className="flex items-center gap-1 p-1 border-b border-primary-white/20">
              <div className="w-2 h-2 rounded-full bg-primary-red/40" />
              <div className="w-2 h-2 rounded-full bg-primary-yellow/40" />
              <div className="w-2 h-2 rounded-full bg-primary-white/40" />
            </div>
          </div>
        </>
      )}

      {/* Floating Code Blocks */}
      {showCodeBlocks && (
        <>
          <motion.div
            animate={{ 
              x: [0, 20, 0], 
              y: [0, -10, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-1/4 left-1/4 w-40 h-24 border border-primary-red/20 p-2 hidden lg:block"
          >
            <div className="font-mono text-xs text-primary-white/20">
              <div>&gt; console.log()</div>
              <div>&gt; await fetch()</div>
              <div>&gt; return data</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ 
              x: [0, -15, 0], 
              y: [0, 10, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-2/3 right-1/4 w-36 h-20 border border-primary-yellow/20 p-2 hidden lg:block"
          >
            <div className="font-mono text-xs text-primary-white/20">
              <div>function init() {`{`}</div>
              <div>  return true;</div>
              <div>{`}`}</div>
            </div>
          </motion.div>
        </>
      )}

      {/* Circuit Board Pattern */}
      {showCircuitBoard && (
        <div className="absolute bottom-20 left-20 w-60 h-40 opacity-5 hidden xl:block">
          <svg viewBox="0 0 240 160" className="w-full h-full">
            <path d="M20 20 L220 20 L220 140 L20 140 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-white"/>
            <circle cx="40" cy="40" r="3" fill="currentColor" className="text-primary-red"/>
            <circle cx="200" cy="40" r="3" fill="currentColor" className="text-primary-yellow"/>
            <circle cx="40" cy="120" r="3" fill="currentColor" className="text-primary-white"/>
            <circle cx="200" cy="120" r="3" fill="currentColor" className="text-primary-red"/>
            <path d="M40 40 L200 40 M40 120 L200 120 M40 40 L40 120 M200 40 L200 120" stroke="currentColor" strokeWidth="0.5" className="text-primary-white"/>
          </svg>
        </div>
      )}

      {/* Binary Code Rain Effect */}
      {showBinaryRain && (
        <>
          <div className="absolute top-0 right-10 font-mono text-xs text-primary-white/10 leading-tight hidden lg:block">
            <motion.div
              animate={{ y: [0, 800] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              {Array(20).fill(0).map((_, i) => (
                <div key={i} className="mb-2">
                  {Math.random() > 0.5 ? '1' : '0'}
                  {Math.random() > 0.5 ? '1' : '0'}
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="absolute top-0 right-32 font-mono text-xs text-primary-white/10 leading-tight hidden lg:block">
            <motion.div
              animate={{ y: [0, 800] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 3 }}
            >
              {Array(20).fill(0).map((_, i) => (
                <div key={i} className="mb-2">
                  {Math.random() > 0.5 ? '1' : '0'}
                  {Math.random() > 0.5 ? '1' : '0'}
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </motion.div>
          </div>
        </>
      )}

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-black via-primary-black to-primary-black/95 opacity-90" />
    </div>
  );
}