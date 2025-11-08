'use client';

import { ScrollButton } from '@/components/ui/atoms';
import type { SubjectTOC } from '@/utils/types';

export const TocSubject = ({ subject, className }: { subject: SubjectTOC; className: string }) => {
  return (
    <ScrollButton target={subject.id} className={className}>
      {subject.title}
    </ScrollButton>
  );
};
