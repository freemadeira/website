import { type VariantProps, tv } from 'tailwind-variants';

const flexVariants = tv({
  base: 'flex',
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
    stackOnMobile: {
      true: 'flex-col sm:flex-row',
    },
    grow: {
      true: 'grow',
    },
    gap: {
      0: 'gap-0',
      0.5: 'gap-0.5',
      1: 'gap-1',
      1.5: 'gap-1.5',
      2: 'gap-2',
      2.5: 'gap-2.5',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
      6: 'gap-6',
      7: 'gap-7',
      8: 'gap-8',
      9: 'gap-9',
      10: 'gap-10',
      12: 'gap-12',
    },
    justifyContent: {
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    alignItems: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
  },
  defaultVariants: {
    gap: 0,
    direction: 'row',
  },
});

export interface FlexProps<T>
  extends VariantProps<typeof flexVariants>,
    React.ComponentProps<'div'> {
  as?: T;
}

export function Flex<T extends React.ElementType = 'div'>({
  children,
  as,
  direction,
  stackOnMobile,
  grow,
  gap,
  justifyContent,
  alignItems,
  className,
  ...props
}: FlexProps<T>): React.ReactElement {
  const Component = as || 'div';

  return (
    <Component
      className={flexVariants({
        direction,
        stackOnMobile,
        grow,
        gap,
        justifyContent,
        alignItems,
        className,
      })}
      {...props}
    >
      {children}
    </Component>
  );
}
