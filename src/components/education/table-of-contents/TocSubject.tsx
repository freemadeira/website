'use client';

import { ScrollButton } from '@/components/ui/atoms';
import type { SubjectTOC } from '@/components/education/types';

export const TocSubject = ({ subject, className }: { subject: SubjectTOC; className: string }) => {
  return (
    <ScrollButton target={subject.id} className={className}>
      {subject.title}
    </ScrollButton>
  );
};
