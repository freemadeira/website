'use client';

import { twJoin } from 'tailwind-merge';

import { ScrollButton } from '@/components/ui/atoms';
import { underlineDecorationClasses } from '@/utils/classes';
import type { PartTOC } from '@/utils/types';

export const TocPart = ({ part, number }: { part: PartTOC; number: number }) => {
  const hoverUnderline = underlineDecorationClasses('group-hover');

  return (
    <ScrollButton target={part.id}>
      <span className={twJoin('font-bold', hoverUnderline)}>
        {`Part ${number}`}
        {part.title && ': '}
      </span>

      <span className={hoverUnderline}>{part.title}</span>
    </ScrollButton>
  );
};
