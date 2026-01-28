import { tv, type VariantProps } from 'tailwind-variants';
import { IconButton } from './IconButton';
import { X } from '../svgs';

const closeButtonVariants = tv({
  base: '',
});

interface CloseButtonProps
  extends
    VariantProps<typeof closeButtonVariants>,
    React.ComponentProps<typeof IconButton> {}

export function CloseButton({ className, ...props }: CloseButtonProps): React.ReactElement {
  return (
    <IconButton className={closeButtonVariants({ className })} fill="ghost" colour='transparent' {...props}>
      <X className='h-8 w-8' />
    </IconButton>
  );
}
