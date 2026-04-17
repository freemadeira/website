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
    date: 'April 18-June 20, 2026',
    title: 'Diploma Bitcoin',
    description:
      'Adaptação para Português do programa de 10 semanas internacionalmente reconhecido desenvolvido pela My First Bitcoin. Este curso dar-te-á noções sólidas sobre o Bitcoin.',
    imgSrc: '/images/events/diploma.png',
    tags: ['Education', 'Course', 'Online'],
    href: '/education/info-diploma-bitcoin',
  },
  {
    date: 'April 29, 2026, 18:30',
    title: 'FREE Madeira Bitcoin Meetup',
    description:
      'Presentation by GroVerdi — a business merging green energy, Bitcoin, and Permaculture. An organic farm that uses BTC mining heat to grow plants in a nursery.',
    tags: ['Meetup', 'In-person'],
    imgSrc: '/images/events/meetup.jpg',
    href: 'https://www.satlantis.io/events/1693/FREE-Madeira-Bitcoin-Meetup',
  },
  {
    date: 'May 14, 2026',
    title: 'FREE Energy Summit',
    description:
      'A focused, in-person event dedicated to real-world projects at the intersection of Bitcoin mining and energy systems. Technical, economic and operational insight on concrete, live initiatives.',
    tags: ['Conference', 'In-person'],
    imgSrc: '/images/events/energy-summit.jpg',
    href: 'https://energysummit.freemadeira.org/',
  },
  {
    date: 'May 27, 2026, 18:30',
    title: 'FREE Madeira Bitcoin Meetup',
    description:
      'Every last Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
    tags: ['Meetup', 'In-person'],
    imgSrc: '/images/events/meetup.jpg',
    href: 'https://www.satlantis.io/events/1694/FREE-Madeira-Bitcoin-Meetup',
  },
  // {
  //   date: 'June 24, 2026, 18:30',
  //   title: 'FREE Madeira Bitcoin Meetup',
  //   description:
  //     'Every last Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
  //   tags: ['Meetup', 'In-person'],
  //   imgSrc: '/images/events/meetup.jpg',
  //   href: 'https://www.satlantis.io/events/1695/FREE-Madeira-Bitcoin-Meetup',
  // },
  // {
  //   date: 'July 29, 2026, 18:30',
  //   title: 'FREE Madeira Bitcoin Meetup',
  //   description:
  //     'Every last Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
  //   tags: ['Meetup', 'In-person'],
  //   imgSrc: '/images/events/meetup.jpg',
  //   href: 'https://www.satlantis.io/events/1696/FREE-Madeira-Bitcoin-Meetup',
  // },
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
