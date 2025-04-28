import { Flex, Heading, Text } from '@/components/ui/atoms';
import Image from 'next/image';
import Link from 'next/link';
import { type Event, EventImage, EventLink, EventTags, EventTitle } from './';

type EventCardProps = {
  event: Event;
};

export function EventCard({ event }: EventCardProps): React.ReactElement {
  const eventTitle = <EventTitle>{event.title}</EventTitle>;
  const eventImage = <EventImage imgSrc={event.imgSrc} />;

  return (
    <Flex
      direction="column"
      gap={5}
      className="w-[70vw] flex-1 border-dark border-b pb-6 sm:w-auto"
    >
      {event.link ? (
        <Link href={event.link} target="_blank" rel="noopener noreferrer">
          {eventImage}
        </Link>
      ) : (
        eventImage
      )}

      <Flex direction="column" gap={3} className="grow">
        <Text size="sm" className="text-mountain-mist-400 uppercase leading-4 tracking-[4%]">
          {event.date}
        </Text>

        {event.link ? <EventLink href={event.link}>{eventTitle}</EventLink> : eventTitle}

        <p className="grow">{event.description}</p>
      </Flex>

      <EventTags tags={event.tags} />
    </Flex>
  );
}
