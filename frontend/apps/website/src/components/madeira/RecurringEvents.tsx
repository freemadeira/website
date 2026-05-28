import { Container, Flex, Heading, Text } from '@/components/ui/atoms';
import { events } from '@/data/recurringEvents';
import { EventCard } from '@/components/events';

export function RecurringEvents(): React.ReactElement {
  return (
    <Container wrapperClasses="px-0" className="gap-7">
      <Heading className="mx-4 sm:mx-0" size="h5">
        FREE Madeira events
      </Heading>
      <Text className="mx-4 sm:mx-0">Plan your visit around an event.</Text>

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
