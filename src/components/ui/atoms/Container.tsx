import { type VariantProps, tv } from 'tailwind-variants';
import { Flex, type FlexProps } from './Flex';
import { twMerge } from 'tailwind-merge';

// TODO: Rethink this component. It should stop expanding beyond the width of a 15" screen
const containerVariants = tv({
  base: 'flex mx-auto',
  variants: {
    width: {
      normal: 'max-w-full',
      tight: 'max-w-7xl',
    },
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
  },
  defaultVariants: {
    width: 'normal',
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
  width,
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
      <Flex className={containerVariants({ width, direction, className })} {...props}>
        {children}
      </Flex>
    </div>
  );
}
