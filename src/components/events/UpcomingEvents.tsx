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
    date: 'January 28, 2026, 18:30–20:00',
    title: 'Introdução ao Bitcoin',
    description:
      'Workshop entirely in Portuguese. Este workshop apresenta Bitcoin como dinheiro. Exploramos a importância do dinheiro, a sua origem e evolução, e como Bitcoin representa o futuro do mesmo.',
    imgSrc: '/images/events/workshop-intro.jpg',
    tags: ['Workshop', 'Online'],
  },
  {
    date: 'January 28, 2026, 18:30',
    title: 'FREE Madeira Bitcoin Meetup',
    description:
      'Every last Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
    tags: ['Meetup', 'In-person'],
    imgSrc: '/images/events/meetup.jpg',
    href: 'https://www.meetup.com/madeira-bitcoin-meetup-group/events/312457728/',
  },
  {
    date: 'February 4, 2026, 18:30–20:00',
    title: 'Introdução ao lado técnico do Bitcoin',
    description:
      'Workshop entirely in Portuguese. Este workshop é recomendado para quem queira entender os mecanismos que garantem segurança, escassez e funcionamento descentralizado do Bitcoin.',
    imgSrc: '/images/events/workshop-intro.jpg',
    tags: ['Workshop', 'Online'],
  },
  {
    date: 'February 25, 2026, 18:30',
    title: 'FREE Madeira Bitcoin Meetup',
    description:
      'Every last Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
    tags: ['Meetup', 'In-person'],
    imgSrc: '/images/events/meetup.jpg',
    href: 'https://www.meetup.com/madeira-bitcoin-meetup-group/events/312459853/',
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
