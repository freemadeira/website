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
    date: 'February 25, 2026, 18:30',
    title: 'FREE Madeira Bitcoin Meetup',
    description:
      'Every last Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
    tags: ['Meetup', 'In-person'],
    imgSrc: '/images/events/meetup.jpg',
    href: 'https://www.satlantis.io/events/1691/FREE-Madeira-Bitcoin-Meetup',
  },
  {
    date: 'March 24, 2026, 18:30',
    title: 'Backup & Segurança',
    description:
      'Workshop entirely in Portuguese. Como manter o teu Bitcon seguro? Este workshop é recomendado para quem queira aprender a guardar o seu bitcoin de forma segura.',
    imgSrc: '/images/events/workshop-intro.jpg',
    tags: ['Workshop', 'In-person'],
  },
  {
    date: 'March 25, 2026, 18:30',
    title: 'FREE Madeira Bitcoin Meetup',
    description:
      'Every last Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
    tags: ['Meetup', 'In-person'],
    imgSrc: '/images/events/meetup.jpg',
    href: 'https://www.satlantis.io/events/1692/FREE-Madeira-Bitcoin-Meetup',
  },
  {
    date: 'March 26, 2026, 18:30',
    title: 'Carteiras Físicas & Soluções de Backup',
    description:
      'Workshop entirely in Portuguese. Como usar carteiras físicas e outras soluções de backup para manter o teu bitcoin seguro? Este workshop é recomendado para quem queira aprender a guardar o seu bitcoin de forma segura.',
    imgSrc: '/images/events/workshop-intro.jpg',
    tags: ['Workshop', 'In-person'],
  },
  // {
  //   date: 'EXACT DATES TBC, 2028',
  //   title: 'Bitcoin Atlantis 2028',
  //   description:
  //     'After the huge success of the first edition in 2024, Bitcoin Atlantis will return in 2028. We will once again celebrate Bitcoin in a halving year.',
  //   tags: ['Conference'],
  //   imgSrc: '/images/events/ba28.jpg',
  // },
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
