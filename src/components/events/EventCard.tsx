import { Flex, Heading, Text } from '@/components/ui/atoms';
import { EventTags } from './EventTags';
import Image from 'next/image';

type EventCardProps = {
  event: {
    date: string;
    title: string;
    description: string;
    tags: string[];
  };
};

export function EventCard({ event }: EventCardProps): React.ReactElement {
  return (
    <Flex
      direction="column"
      gap={5}
      className="w-[70vw] flex-1 border-dark border-b pb-6 sm:w-auto"
    >
      <Image
        src="/test-photo.jpg"
        alt="Event"
        width={6240}
        height={4160}
        className="h-48 w-full object-cover"
      />

      <Flex direction="column" gap={3} className="grow">
        <Text size="sm" className="text-gray-500 uppercase leading-4 tracking-[4%]">
          {event.date}
        </Text>

        <Heading size="h6">{event.title}</Heading>

        <p className="grow">{event.description}</p>
      </Flex>

      <EventTags tags={['Online', 'Workshop']} />
    </Flex>
  );
}
