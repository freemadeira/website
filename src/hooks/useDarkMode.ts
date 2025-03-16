'use client';

import React, { useEffect, useState } from 'react';

// Custom hook to check for dark mode class
export function useDarkMode(): boolean {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Check on initial render
    checkDarkMode();

    // Listen for changes to the class
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return isDarkMode;
}
