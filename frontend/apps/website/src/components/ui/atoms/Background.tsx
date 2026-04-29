import { tv, type VariantProps } from 'tailwind-variants';

const backgroundVariants = tv({
  base: '',
  variants: {
    color: {
      bridal: 'bg-bridal-50 dark:bg-mountain-mist-800',
    },
  },
  defaultVariants: {
    color: 'bridal',
  },
});

interface BackgroundProps extends VariantProps<typeof backgroundVariants> {
  className?: string;
  children: React.ReactNode;
}

export const Background = ({ color, className, children }: BackgroundProps): React.ReactElement => {
  return <div className={backgroundVariants({ color, className })}>{children}</div>;
};
