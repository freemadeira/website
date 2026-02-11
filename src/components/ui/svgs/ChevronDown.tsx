'use client';

import { Svg } from '../atoms';

type Props = {
  className?: string;
};

export const ChevronDown: React.FC<Props> = ({ className }) => {
  return (
    <Svg viewBox="0 0 9 6" fill="none" className={className}>
      <path d="M0.5 0.5L4.5 4.5L8.5 0.5" stroke="#090506" strokeLinecap="round" />
    </Svg>
  );
};
