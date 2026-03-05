import { events } from '@/data/upcomingEvents';
import { FeaturedGrid } from '../ui/featured/FeaturedGrid';

export function UpcomingEvents(): React.ReactElement {
  return <FeaturedGrid title="Upcoming Events" items={events} />;
}
