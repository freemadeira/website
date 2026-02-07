'use client';

import { useDarkMode } from '@/hooks';

type Props = {
  className?: string;
};

export function X({ className }: Props): React.ReactElement {
  const darkMode = useDarkMode();

  if (darkMode) {
    return (
      <svg
        viewBox='0 0 44 45'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M10.9883 33.0571L32.9627 11.0193'
          stroke='#FFFFFF'
          strokeWidth='2'
        />
        <path
          d='M10.9883 11.0181L32.9627 33.0559'
          stroke='#FFFFFF'
          strokeWidth='2'
        />
      </svg>
    );
  }
  return (
    <svg
      viewBox='0 0 44 45'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M10.9883 33.0571L32.9627 11.0193'
        stroke='#090506'
        strokeWidth='2'
      />
      <path
        d='M10.9883 11.0181L32.9627 33.0559'
        stroke='#090506'
        strokeWidth='2'
      />
    </svg>
  );
}
