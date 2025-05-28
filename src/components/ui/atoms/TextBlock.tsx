import { type VariantProps, tv } from 'tailwind-variants';

const textBlockVariants = tv({
  base: 'columns-1',
  variants: {
    space: {
      0: 'space-y-0',
      1: 'space-y-1 -mb-1',
      2: 'space-y-2 -mb-2',
      3: 'space-y-3 -mb-3',
      4: 'space-y-4 -mb-4',
      5: 'space-y-5 -mb-5',
      6: 'space-y-6 -mb-6',
      7: 'space-y-7 -mb-7',
      8: 'space-y-8 -mb-8',
      9: 'space-y-9 -mb-9',
      10: 'space-y-10 -mb-10',
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
    columns: {
      1: 'lg:columns-1',
      2: 'lg:columns-2',
      3: 'lg:columns-3',
      4: 'lg:columns-4',
    },
  },
  defaultVariants: {
    space: 4,
    gap: 4,
    columns: 2,
  },
});

type TextBlockVariants = VariantProps<typeof textBlockVariants>;
interface TextBlockProps extends TextBlockVariants, React.ComponentProps<'div'> {
  children: React.ReactElement<typeof Text>[];
  className?: string;
}

export const TextBlock: React.FC<TextBlockProps> = ({
  space,
  gap,
  columns,
  children,
  className,
  ...props
}) => {
  return (
    <div className={textBlockVariants({ space, gap, columns, className })} {...props}>
      {children}
    </div>
  );
};
