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
    date: 'May 22, 2025, 13:00',
    title: 'Bitcoin Pizza Day',
    description:
      "Join us for lunch at Xarambinha restaurant in Funchal and pay your pizza with bitcoin. In partnership with CoinCorner, we'll be giving away the Bolt Card as an exclusive souvenir to those who come celebrate with us.",
    tags: ['Pizza Day', 'In-person'],
    imgSrc: '/images/events/xarambinha.jpg',
    link: 'https://x.com/FREEMadeiraOrg/status/1920050507743113251',
  },
  {
    date: 'June 4, 2025, 18:30–20:30',
    title: 'Monthly FREE Madeira Bitcoin Meetup',
    description:
      'Every first Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up',
    tags: ['Meetup', 'In-person'],
    imgSrc: '/images/events/meetup.jpg',
    link: 'https://www.meetup.com/madeira-bitcoin-meetup-group/events/306809019/',
  },
  {
    date: 'September–October (schedule TBC), 2025',
    title: 'Diploma Bitcoin',
    description:
      '10-week course with 10 recorded classes and 10 weekly live Q&A sessions where students will be able to review the class content, engage in discussions and get questions ansered. This course is a deeper introduction to Bitcoin and takes the student from zero to understanding what Bitcoin is and how it works, as well as learning to use it.',
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
    <Container className="mx-0 gap-7" outer>
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
