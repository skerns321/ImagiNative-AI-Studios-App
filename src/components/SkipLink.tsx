'use client';

import { scrollToSection } from '@/lib/utils/scroll';

export default function SkipLink() {
  const handleSkip = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection('main-content');
  };

  return (
    <button
      onClick={handleSkip}
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-1/2 
                focus:-translate-x-1/2 focus:z-50 bg-primary-red text-primary-white 
                px-6 py-3 font-mono focus:outline-none focus:ring-2 
                focus:ring-primary-yellow focus:ring-offset-2"
    >
      SKIP_TO_MAIN_CONTENT
    </button>
  );
} 