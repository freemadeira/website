import { Flex, Heading, Link, Text } from '@/components/ui/atoms';
import { Labels } from '../ui';
import { type Event, EventImage } from './';

type EventCardProps = {
  event: Event;
};

export function EventCard({ event }: EventCardProps): React.ReactElement {
  const link = event.href ? { as: Link, href: event.href } : {};

  return (
    <Flex
      direction="column"
      gap={5}
      className="group w-[70vw] flex-1 border-dark border-b pb-6 sm:w-auto"
      {...link}
    >
      <EventImage imgSrc={event.imgSrc} link={event.href} />

      <Flex direction="column" gap={3} className="grow">
        <Text size="sm" className="text-mountain-mist-400 uppercase leading-4 tracking-[4%]">
          {event.date}
        </Text>

        <Heading size="h6">{event.title}</Heading>

        <Text className="grow">{event.description}</Text>
      </Flex>

      <Labels tags={event.tags} />
    </Flex>
  );
}
