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
    // TODO: Check this hover effect
    <Link href={href} className={twMerge('hover:text-dark', underline && 'underline', className)}>
      {children}
    </Link>
  );
}
