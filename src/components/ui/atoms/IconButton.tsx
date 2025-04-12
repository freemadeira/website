import { tv, type VariantProps } from 'tailwind-variants';

import { Button } from './Button';

const iconButtonVariants = tv({
  base: 'p-2 rounded-full',
});

interface IconButtonProps
  extends VariantProps<typeof iconButtonVariants>,
    React.ComponentProps<typeof Button> {}

export function IconButton({ children, className, ...props }: IconButtonProps): React.ReactElement {
  return (
    <Button className={iconButtonVariants({ ...props, className })} {...props}>
      {children}
    </Button>
  );
}
