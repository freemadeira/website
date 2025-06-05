import { Container, Flex, Heading } from '@/components/ui/atoms';
import { EventCard, type EventTag } from './';

export interface Event {
  date: string;
  title: string;
  description: string;
  tags: EventTag[];
  imgSrc?: string;
  link?: string;
}

const events: Event[] = [
  {
    date: 'June 21, 2025, 10:00',
    title: 'Introdução ao Bitcoin',
    description:
      'This introductory workshop explores how money evolved into fiat currencies, what the problems are with it and how Bitcoin can be the solution. By the end of it, you will also be able to use bitcoin for everyday savings and payments. This workshop is carried out in Portuguese.',
    tags: ['Workshop', 'Online', 'Education'],
    imgSrc: '/images/events/workshop-intro.jpg',
    link: 'https://forms.gle/umsn2vX1WSVk9d6RA',
  },
  {
    date: 'June 28, 2025, 10:00',
    title: 'Bitcoin para Comerciantes',
    description:
      'For merchants who want to learn about the potential of Bitcoin for their business and the customers they attract by accepting Bitcoin. This workshop will teach how to integrate bitcoin payments in your business and how to safely manage your funds. This workshop is carried out in Portuguese.',
    tags: ['Workshop', 'Online', 'Education'],
    imgSrc: '/images/events/workshop-merchants.jpg',
    link: 'https://forms.gle/RrmXK8sovXJppesk8',
  },
  {
    date: 'September–October (schedule TBC), 2025',
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
    <Container className="mx-0 mb-16 gap-7" outer>
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
