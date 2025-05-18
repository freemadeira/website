import { ArrowRight } from 'lucide-react';
import { Flex, Text } from '.';
import { IconButton } from './IconButton';
import Link from 'next/link';
import type { Url } from '@/utils/types';
import { tv, type VariantProps } from 'tailwind-variants';

const discreetButtonVariants = tv({
  base: 'group w-fit',
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

interface DiscreetButtonProps extends VariantProps<typeof discreetButtonVariants> {
  href: Url;
  children: string;
}

export const DiscreetButton: React.FC<DiscreetButtonProps> = ({ size, href, children }) => {
  return (
    <Link href={href} className={discreetButtonVariants({ size })}>
      <Flex gap={4} alignItems="center">
        <Text className="underline-offset-6 group-hover:underline">{children}</Text>

        <IconButton fill="filled" className="p-1" groupHover>
          <ArrowRight strokeWidth={1.2} size={22} />
        </IconButton>
      </Flex>
    </Link>
  );
};
