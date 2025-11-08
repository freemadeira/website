'use client';

import { ScrollButton } from '@/components/ui/atoms';
import type { ChapterTOC } from '@/utils/types';

export const TocChapter = ({ chapter, number }: { chapter: ChapterTOC; number?: number }) => {
  return (
    <ScrollButton target={chapter.id} className="w-full">
      {/* TODO: Decide what version to use */}
      {/* {`${number}. ${title}`} */}
      {chapter.title}
    </ScrollButton>
  );
};
