'use client';

import { useEffect } from 'react';

export function useTheme() {
  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
    );
  }, []);
  console.log('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

// const useTheme = (): void => {
//   useEffect(() => {
//     const root = document.documentElement;
//     const theme = localStorage.getItem('theme');
//
//     if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//       root.classList.add('dark');
//     } else {
//       root.classList.remove('dark');
//     }
//   }, []);
// };
