import { ArrowRight } from 'lucide-react';
import { Flex, Text } from '.';
import { IconButton } from './IconButton';
import Link from 'next/link';
import type { Url } from '@/utils/types';
import { tv, type VariantProps } from 'tailwind-variants';

interface DiscreetButtonProps {
  href: Url;
  children: string;
}

export const DiscreetButton: React.FC<DiscreetButtonProps> = ({ href, children }) => {
  return (
    <Link href={href} className="group w-fit">
      <Flex gap={4} alignItems="center">
        <Text className="underline-offset-6 group-hover:underline">{children}</Text>

        <IconButton fill="filled" className="p-1" groupHover>
          <ArrowRight strokeWidth={1.2} size={22} />
        </IconButton>
      </Flex>
    </Link>
  );
};
