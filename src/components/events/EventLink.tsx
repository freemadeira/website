import type { Url } from '@/utils/types';
import Link from 'next/link';
import type { Event } from './UpcomingEvents';

interface EventLinkProps {
  href: Url;
  children: React.ReactNode;
}

export const EventLink: React.FC<EventLinkProps> = ({ href, children }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);
