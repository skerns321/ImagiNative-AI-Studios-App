import { useCallback } from 'react';

export function useCustomScroll() {
  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const header = document.querySelector('header');
    const headerHeight = header?.getBoundingClientRect().height || 0;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }, []);

  return { scrollToElement };
} 