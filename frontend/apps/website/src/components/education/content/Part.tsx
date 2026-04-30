import { Flex, Heading } from '@/components/ui/atoms';
import { buildKey } from '@/utils/functions';
import type { Part as CoursePart } from '../types';
import { Chapter } from '.';

type PartProps = {
  number: number;
  content: CoursePart;
};

export const Part = ({ number, content }: PartProps) => {
  return (
    <>
      <Heading size="h5" className="border-b pb-5">
        Part {number}
        {content.title && `: ${content.title}`}
      </Heading>

      <Flex direction="column" className="border-b py-3 ps-4">
        {content.chapters.map((chapter, index) => (
          <Chapter key={buildKey(index, chapter.title)} content={chapter} />
        ))}
      </Flex>
    </>
  );
};
