import { type VariantProps, tv } from 'tailwind-variants';

import { Flex } from './Flex';

// TODO: Rethink this component. It should stop expanding beyond the width of a 15" screen
const containerVariants = tv({
  base: 'flex flex-col',
  variants: {
    outer: {
      true: 'mx-4 sm:mx-12',
      false: 'px-4 sm:px-12',
    },
  },
  defaultVariants: {
    outer: false,
  },
});

interface ContainerProps
  extends VariantProps<typeof containerVariants>,
    React.ComponentProps<'div'> {
  children: React.ReactNode;
}

export function Container({ children, ...props }: ContainerProps): React.ReactElement {
  return <Flex className={containerVariants(props)}>{children}</Flex>;
}
