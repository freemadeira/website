import type { EventTag } from '@/components/events';

export interface Event {
  date: string;
  title: string;
  description: string;
  tags: EventTag[];
  imgSrc?: string;
  href?: string;
}

export const events: Event[] = [
  {
    date: 'May 27, 2026, 18:30',
    title: 'FREE Madeira Bitcoin Meetup',
    description:
      'Every last Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
    tags: ['Meetup', 'In-person'],
    imgSrc: '/images/events/meetup.jpg',
    href: 'https://www.satlantis.io/events/1694/FREE-Madeira-Bitcoin-Meetup',
  },
  {
    date: 'April 18-June 20, 2026',
    title: 'Diploma Bitcoin',
    description:
      'Adaptação para Português do programa de 10 semanas internacionalmente reconhecido desenvolvido pela My First Bitcoin. Este curso dar-te-á noções sólidas sobre o Bitcoin.',
    imgSrc: '/images/events/diploma.png',
    tags: ['Education', 'Course', 'Online'],
  },
  {
    date: 'June 24, 2026, 18:30',
    title: 'FREE Madeira Bitcoin Meetup',
    description:
      'Every last Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
    tags: ['Meetup', 'In-person'],
    imgSrc: '/images/events/meetup.jpg',
    href: 'https://www.satlantis.io/events/1695/FREE-Madeira-Bitcoin-Meetup',
  },
  // {
  //   date: 'July 1, 2026, 18:30',
  //   title: 'Correr um Nó de Bitcoin',
  //   description:
  //     'Correr um nó de Bitcoin é uma das formas mais eficazes de contribuir para a rede. Neste workshop, vamos mostrar-te como configurar e correr o teu próprio nó de Bitcoin.',
  //   tags: ['Education', 'Workshop', 'Online'],
  //   imgSrc: '/images/events/workshop-intro.jpg',
  //   // href:,
  // },
  {
    date: 'July 29, 2026, 18:30',
    title: 'FREE Madeira Bitcoin Meetup',
    description:
      'Every last Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
    tags: ['Meetup', 'In-person'],
    imgSrc: '/images/events/meetup.jpg',
    href: 'https://www.satlantis.io/events/1696/FREE-Madeira-Bitcoin-Meetup',
  },
  // {
  //   date: 'August 26, 2026, 18:30',
  //   title: 'FREE Madeira Bitcoin Meetup',
  //   description:
  //     'Every last Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
  //   tags: ['Meetup', 'In-person'],
  //   imgSrc: '/images/events/meetup.jpg',
  //   href: 'https://www.satlantis.io/events/1697/FREE-Madeira-Bitcoin-Meetup',
  // },
  // {
  //   date: 'September 30, 2026, 18:30',
  //   title: 'FREE Madeira Bitcoin Meetup',
  //   description:
  //     'Every last Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
  //   tags: ['Meetup', 'In-person'],
  //   imgSrc: '/images/events/meetup.jpg',
  //   href: 'https://www.satlantis.io/events/1698/FREE-Madeira-Bitcoin-Meetup',
  // },
  // {
  //   date: 'October 28, 2026, 18:30',
  //   title: 'FREE Madeira Bitcoin Meetup',
  //   description:
  //     'Every last Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
  //   tags: ['Meetup', 'In-person'],
  //   imgSrc: '/images/events/meetup.jpg',
  //   href: 'https://www.satlantis.io/events/1699/FREE-Madeira-Bitcoin-Meetup',
  // },
  // {
  //   date: 'November 25, 2026, 18:30',
  //   title: 'FREE Madeira Bitcoin Meetup',
  //   description:
  //     'Every last Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
  //   tags: ['Meetup', 'In-person'],
  //   imgSrc: '/images/events/meetup.jpg',
  //   href: 'https://www.satlantis.io/events/1700/FREE-Madeira-Bitcoin-Meetup',
  // },
  // {
  //   date: 'December 30, 2026, 18:30',
  //   title: 'FREE Madeira Bitcoin Meetup',
  //   description:
  //     'Every last Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
  //   tags: ['Meetup', 'In-person'],
  //   imgSrc: '/images/events/meetup.jpg',
  //   href: 'https://www.satlantis.io/events/1701/FREE-Madeira-Bitcoin-Meetup',
  // },
  // {
  //   date: 'EXACT DATES TBC, 2028',
  //   title: 'Bitcoin Atlantis 2028',
  //   description:
  //     'After the huge success of the first edition in 2024, Bitcoin Atlantis will return in 2028. We will once again celebrate Bitcoin in a halving year.',
  //   tags: ['Conference'],
  //   imgSrc: '/images/events/ba28.jpg',
  // },
];
