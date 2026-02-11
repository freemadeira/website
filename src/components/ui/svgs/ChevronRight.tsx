'use client';

import { Svg } from '../atoms';

type Props = {
  className?: string;
  color?: string;
};

export const ChevronRight: React.FC<Props> = ({ className, color = '#090506' }) => {
  return (
    <Svg viewBox="0 0 15 26" fill="none" className={className}>
      <path d="M1 25L13 13L0.999999 1" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
};
