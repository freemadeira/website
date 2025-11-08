import { twJoin } from 'tailwind-merge';

import { Flex, Heading, Info } from '@/components/ui/atoms';
import type { ChapterTOC, ContentsTable, PartTOC, SubjectTOC } from '@/utils/types';
import { TocChapter, TocPart, TocSubject } from '.';

// `desktop` and `mobile` are mutually exclusive
type Viewport = { desktop: true; mobile?: false } | { mobile: true; desktop?: false };

type Props = {
  items: ContentsTable; // TODO: Use content type when available
} & Viewport;

export const TableOfContents = ({ items, desktop, mobile }: Props) => {
  const visibility = twJoin(desktop && 'hidden md:block', mobile && 'block md:hidden');

  const tableOfContentsStyles = twJoin(
    'sticky top-6',
    visibility,
    // desktop && 'h-full w-[330px]',
    // mobile && 'top-0 w-full border-y bg-white dark:bg-dark',
  );

  if (desktop) {
    return (
      <div className={twJoin(tableOfContentsStyles, 'h-full w-[330px]')}>
        <Flex direction="column" gap={9}>
          <Info className="flex h-[26px] items-center">Table of Contents</Info>

          <Flex direction="column" gap={4}>
            {items.parts.map((part: PartTOC, index: number) => (
              // Parts
              <Flex direction="column" gap={4} key={part.id}>
                <TocPart part={part} number={index + 1} />

                {part.chapters && (
                  // Chapters
                  <Flex direction="column" gap={4} className="pl-4">
                    {part.chapters.map((chapter: ChapterTOC, index: number) => (
                      <Flex direction="column" gap={4} key={chapter.id}>
                        {/* TODO: remove number prop if we decide to use title only */}
                        <TocChapter chapter={chapter} number={index + 1} />

                        {chapter.subjects?.map((subject: SubjectTOC) => (
                          // Subjects
                          <TocSubject key={subject.id} subject={subject} className="pl-4" />
                        ))}
                      </Flex>
                    ))}
                  </Flex>
                )}
              </Flex>
            ))}
          </Flex>
        </Flex>
      </div>
    );
  }

  if (mobile) {
    return (
      <Flex
        direction="column"
        justifyContent="center"
        className={twJoin(
          tableOfContentsStyles,
          '-top-[1px] min-h-14 w-full border-y bg-white py-2 dark:bg-dark',
        )}
      >
        <Heading size="h6">Table of Contents</Heading>
      </Flex>
    );
  }
};
