import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';
import { Flex, type FlexProps } from './Flex';

const containerVariants = tv({
  base: 'mx-auto flex',
  variants: {
    size: {
      normal: 'max-w-full',
      tight: 'max-w-7xl',
      tighter: 'max-w-5xl',
      extraTight: 'max-w-3xl',
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
