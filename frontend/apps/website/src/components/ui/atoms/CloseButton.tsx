import { X } from '../svgs';
import { IconButton } from './IconButton';

interface CloseButtonProps extends React.ComponentProps<typeof IconButton> {}

export function CloseButton({ className, ...props }: CloseButtonProps): React.ReactElement {
  return (
    <IconButton className={className} fill="ghost" colour="transparent" {...props}>
      <X className="size-8" />
    </IconButton>
  );
}
