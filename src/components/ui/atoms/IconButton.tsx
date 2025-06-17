import { tv, type VariantProps } from 'tailwind-variants';
import { Button } from './Button';

const iconButtonVariants = tv({
  base: 'p-2 rounded-full dark:border-yellow-400 dark:hover:bg-yellow-400 dark:fill-yellow-400 dark:hover:fill-dark dark:text-yellow-400 dark:hover:text-dark',
});

interface IconButtonProps
  extends VariantProps<typeof iconButtonVariants>,
    React.ComponentProps<typeof Button> {}

export function IconButton({ children, className, ...props }: IconButtonProps): React.ReactElement {
  return (
    <Button className={iconButtonVariants({ className })} fill="outlined" {...props}>
      {children}
    </Button>
  );
}
