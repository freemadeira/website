import { ChevronDown } from 'lucide-react';

import { Container, Flex, Heading } from '@/components/ui/atoms';
import type { Chapter as CourseChapter } from '../types';

type ChapterProps = {
  content: CourseChapter;
};

export const Chapter = ({ content }: ChapterProps) => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <Heading size="h6" className="grow">
          {content.title}
        </Heading>

        <ChevronDown className="-my-3" strokeWidth={0.7} size={50} />
      </Flex>

      <Container size="extraTight" className="my-7 text-lg">
        {content.description}

        {content.subjects?.map((_subject) => {
          // TODO: Display subject
        })}
      </Container>
    </>
  );
};
