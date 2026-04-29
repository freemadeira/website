import { type VariantProps, tv } from 'tailwind-variants';
import { Flex, type FlexProps } from './Flex';
import { twMerge } from 'tailwind-merge';

// TODO: Rethink this component. It should stop expanding beyond the width of a 15" screen
const containerVariants = tv({
  base: 'flex mx-auto',
  variants: {
    size: {
      normal: 'max-w-full',
      tight: 'max-w-7xl',
      tighter: 'max-w-5xl',
    },
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
  },
  defaultVariants: {
    size: 'normal',
    direction: 'column',
  },
});

interface ContainerProps<T extends React.ElementType = 'div'>
  extends VariantProps<typeof containerVariants>,
    FlexProps<T> {
  wrapperClasses?: string;
  children: React.ReactNode;
}

export function Container({
  size,
  direction,
  children,
  wrapperClasses,
  className,
  ...props
}: ContainerProps): React.ReactElement {
  return (
    <div
      className={twMerge(
        'mx-auto w-full max-w-[1536px] px-4 sm:px-8 md:px-10 xl:px-12',
        wrapperClasses,
      )}
    >
      <Flex className={containerVariants({ size, direction, className })} {...props}>
        {children}
      </Flex>
    </div>
  );
}
