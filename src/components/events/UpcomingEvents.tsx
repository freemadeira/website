import { Container, Flex, Heading } from '@/components/ui/atoms';
import { events } from '@/data/upcomingEvents';
import { EventCard } from './';

export function UpcomingEvents(): React.ReactElement {
  return (
    <Container wrapperClasses="mb-16 px-0" className="gap-7">
      <Heading size="h5" className="mx-4 sm:mx-0">
        Upcoming Events
      </Heading>

      <div className="no-scrollbar overflow-x-auto">
        <Flex gap={8} className="w-fit overflow-x-auto px-4 sm:px-0">
          {events.map((event) => (
            <EventCard key={event.date + event.title} event={event} />
          ))}
        </Flex>
      </div>
    </Container>
  );
}
