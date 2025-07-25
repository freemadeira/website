import { Container, Flex, Heading } from '@/components/ui/atoms';
import { EventCard, type EventTag } from './';

export interface Event {
  date: string;
  title: string;
  description: string;
  tags: EventTag[];
  imgSrc?: string;
  href?: string;
}

const events: Event[] = [
  {
    date: 'August 6, 2025, 18:30',
    title: 'FREE Madeira Bitcoin Meetup',
    description:
      'Every first Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
    tags: ['Meetup', 'In-person'],
    imgSrc: '/images/events/meetup.jpg',
    href: 'https://www.meetup.com/madeira-bitcoin-meetup-group/events/ngjpqtyhclbjb/',
  },
  {
    date: 'August 28, 2025, 18:30',
    title: 'FREE Madeira Bitcoin Meetup',
    description:
      'Every first Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
    tags: ['Meetup', 'In-person'],
    imgSrc: '/images/events/meetup.jpg',
    href: 'https://www.meetup.com/madeira-bitcoin-meetup-group/events/308813664/',
  },
  {
    date: 'September–November (schedule TBC), 2025',
    title: 'Diploma Bitcoin',
    description:
      '10-week course with recorded classes and weekly live Q&A sessions. This course is a deeper introduction to Bitcoin and takes the student from zero to understanding what Bitcoin is and how it works, as well as learning to use it.',
    tags: ['Course', 'Online'],
    imgSrc: '/images/events/diploma.png',
  },
  {
    date: 'EXACT DATES TBC, 2028',
    title: 'Bitcoin Atlantis 2028',
    description:
      'After the huge success of the first edition in 2024, Bitcoin Atlantis will return in 2028. We will once again celebrate Bitcoin in a halving year.',
    tags: ['Conference'],
    imgSrc: '/images/events/ba28.jpg',
  },
];

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
