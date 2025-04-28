import { Heading } from '../ui/atoms';
import type { Event } from './UpcomingEvents';

interface EventTitleProps {
  children: Event['title'];
}

export const EventTitle: React.FC<EventTitleProps> = ({ children }) => (
  <Heading size="h6">{children}</Heading>
);
