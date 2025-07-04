'use client';

import { useState, useEffect } from 'react';

export function useResponsive() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        setIsMobile(width < 768);
        setIsTablet(width >= 768 && width < 1024);
        setIsDesktop(width >= 1024);
      }
    };

    handleResize();
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Return default values until mounted to prevent hydration mismatch
  if (!mounted) {
    return { isMobile: true, isTablet: false, isDesktop: false };
  }

  return { isMobile, isTablet, isDesktop };
} 