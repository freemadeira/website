import { type VariantProps, tv } from 'tailwind-variants';
import { Flex, FlexProps } from './Flex';

// TODO: Rethink this component. It should stop expanding beyond the width of a 15" screen
const containerVariants = tv({
  base: 'flex',
  variants: {
    outer: {
      true: 'mx-4 sm:mx-12',
      false: 'px-4 sm:px-12',
    },
    tight: {
      true: 'max-w-7xl mx-auto',
      false: '',
    },
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
  },
  defaultVariants: {
    outer: false,
    tight: false,
    direction: 'column',
  },
});

interface ContainerProps<T extends React.ElementType = 'div'>
  extends VariantProps<typeof containerVariants>,
    FlexProps<T> {
  children: React.ReactNode;
}

export function Container({
  outer,
  tight,
  direction,
  children,
  className,
  as,
  ...props
}: ContainerProps): React.ReactElement {
  return (
    <Flex as={as} className={containerVariants({ outer, tight, direction, className })} {...props}>
      {children}
    </Flex>
  );
}
