'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { MonitoringService } from '@/lib/services/monitoring';

export default function Monitoring() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page load performance
    const startTime = performance.now();
    
    const trackPageLoad = () => {
      const loadTime = performance.now() - startTime;
      MonitoringService.trackPageLoad(pathname, loadTime);
    };

    window.addEventListener('load', trackPageLoad);
    return () => window.removeEventListener('load', trackPageLoad);
  }, [pathname]);

  return null; // This component doesn't render anything
} 