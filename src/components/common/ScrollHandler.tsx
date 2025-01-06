'use client';

import { useEffect, useCallback } from 'react';

export function ScrollHandler() {
  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      document.documentElement.style.setProperty(
        '--scroll-y',
        `${window.scrollY}`
      );
    });
  }, []);

  useEffect(() => {
    // Set initial scroll position
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return null;
}