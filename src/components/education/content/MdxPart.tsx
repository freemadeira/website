import type { ReactNode } from 'react';

import { Flex, Heading } from '@/components/ui/atoms';
import { buildKey } from '@/utils/functions';

type MdxPartProps = {
  title: string;
  number?: number;
  children: ReactNode;
};

export function MdxPart({ title, number, children }: MdxPartProps) {
  return (
    <section id={buildKey('part', title)}>
      <Heading size="h5" className="border-b pb-5">
        {number !== undefined ? `Part ${number}: ${title}` : title}
      </Heading>

      <Flex direction="column" className="border-b py-3 ps-4">
        {children}
      </Flex>
    </section>
  );
}
