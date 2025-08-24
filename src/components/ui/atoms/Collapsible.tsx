'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible } from 'radix-ui';
import * as React from 'react';
import { Flex } from './Flex';
import { Text } from './Text';

type CollapsibleProps = {
  title: string;
  children: React.ReactNode;
};

const CollapsibleFAQ = ({ title, children }: CollapsibleProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className="border-mountain-mist-200 border-b py-4"
    >
      <div className="flex items-center justify-between">
        <Collapsible.Trigger asChild>
          <Flex justifyContent="between" alignItems="center" className="w-full cursor-pointer">
            <Text size="lg" weight="medium">
              {title}
            </Text>

            <button
              type="button"
              className="inline-flex size-[25px] cursor-pointer items-center justify-center"
            >
              {open ? <ChevronUp /> : <ChevronDown />}
            </button>
          </Flex>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content className="mt-2">{children}</Collapsible.Content>
    </Collapsible.Root>
  );
};

export default CollapsibleFAQ;
