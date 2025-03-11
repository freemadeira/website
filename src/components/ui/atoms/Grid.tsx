import { type VariantProps, tv } from 'tailwind-variants';

export const gridVariants = tv(
  {
    base: 'grid',
    variants: {
      cols: {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        7: 'grid-cols-7',
        8: 'grid-cols-8',
        9: 'grid-cols-9',
        10: 'grid-cols-10',
        11: 'grid-cols-11',
        12: 'grid-cols-12',
      },
      gap: {
        0: 'gap-0',
        1: 'gap-1',
        2: 'gap-2',
        3: 'gap-3',
        4: 'gap-4',
        5: 'gap-5',
        6: 'gap-6',
        7: 'gap-7',
        8: 'gap-8',
        9: 'gap-9',
        10: 'gap-10',
      },
    },
    defaultVariants: {
      gap: 0,
      cols: 1,
    },
  },
  // TODO: Enable responsive variants when it is supported in Tailwind v4
  // {
  //   responsiveVariants: true,
  // },
);

export type GridVariants = VariantProps<typeof gridVariants>;

interface GridProps extends GridVariants, React.ComponentProps<'div'> {
  children: React.ReactNode;
}

export function Grid({ cols, gap, children, className, ...props }: GridProps): React.ReactElement {
  return (
    <div className={gridVariants({ cols, gap, className })} {...props}>
      {children}
    </div>
  );
}
