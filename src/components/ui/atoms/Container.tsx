import { type VariantProps, tv } from 'tailwind-variants';

import { Flex } from './Flex';

// TODO: Rethink this component. It should stop expanding beyond the width of a 15" screen
const containerVariants = tv({
  base: 'flex flex-col px-4 sm:px-12',
  variants: {
    size: {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      full: 'max-w-full',
      xl: 'max-w-screen-xl px-20',
      lg: 'max-w-5xl',
      prose: 'max-w-prose',
    },
  },
  defaultVariants: {
    // size: 'lg',
  },
});

interface ContainerProps
  extends VariantProps<typeof containerVariants>,
    React.ComponentProps<'div'> {
  children: React.ReactNode;
}

export function Container({ size, children, ...props }: ContainerProps): React.ReactElement {
  return <Flex className={containerVariants(props)}>{children}</Flex>;
}
