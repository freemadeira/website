import { twMerge } from 'tailwind-merge';
import { Link } from './Link';

interface CtaLinkProps {
  href: string;
  underline?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function CtaLink({ href, underline = true, className, children }: CtaLinkProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        'hover:text-primary-500',
        underline && 'underline underline-offset-6 group-hover:underline',
        className,
      )}
    >
      {children}
    </Link>
  );
}
