import NextLink, { type LinkProps as NextLinkProps } from 'next/link';
import { tv } from 'tailwind-variants';

const linkVariants = tv({
  base: 'font-bold',
  variants: {
    underlined: {
      true: 'underline underline-offset-2',
    },
  },
  defaultVariants: {
    underlined: false,
  },
});

interface LinkProps extends NextLinkProps {
  underlined?: boolean;
  className?: string;
}
export function Link<T extends React.ElementType = 'a'>({
  underlined,
  className,
  ...props
}: LinkProps): React.ReactElement {
  return <NextLink className={linkVariants({ underlined, className })} {...props} />;
}
