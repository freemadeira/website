import type { ReactNode } from 'react';

import { ChevronDown } from 'lucide-react';

import { Container, Flex, Heading } from '@/components/ui/atoms';
import { buildKey } from '@/utils/functions';

type MdxChapterProps = {
  title: string;
  duration?: string;
  children?: ReactNode;
};

export function MdxChapter({ title, children }: MdxChapterProps) {
  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <Heading size="h6" id={buildKey('chapter', title)} className="grow">
          {title}
        </Heading>

        <ChevronDown className="-my-3" strokeWidth={0.7} size={50} />
      </Flex>

      <Container size="extraTight" className="my-7 text-lg">
        {children}
      </Container>
    </>
  );
}
