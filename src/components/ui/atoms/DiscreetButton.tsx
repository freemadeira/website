import type { Url } from '@/utils/types';
import { ArrowRight } from 'lucide-react';
import { type VariantProps, tv } from 'tailwind-variants';
import { Flex, Link, Text } from '.';
import { IconButton } from './IconButton';

interface DiscreetButtonProps {
  href: Url;
  children: string;
}

export const DiscreetButton: React.FC<DiscreetButtonProps> = ({ href, children }) => {
  return (
    <Link href={href} className="group w-fit">
      <Flex gap={4} alignItems="center">
        <Text className="underline-offset-6 group-hover:underline">{children}</Text>

        <IconButton fill="filled" className="p-1">
          <ArrowRight strokeWidth={1.2} size={22} />
        </IconButton>
      </Flex>
    </Link>
  );
};
