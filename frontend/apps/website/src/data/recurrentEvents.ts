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
    date: 'Every four years',
    title: 'Bitcoin Atlantis',
    description:
      'Every last Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
    tags: ['Conference', 'In-person'],
    imgSrc: '/images/events/bitcoin-atlantis.png',
    href: 'https://bitcoinatlantis.com/',
  },
  {
    date: 'Annual',
    title: 'FREE Energy Summit',
    description:
      'A focused, in-person event dedicated to real-world projects at the intersection of Bitcoin mining and energy systems. Technical, economic and operational insight on concrete, live initiatives.',
    tags: ['Conference', 'In-person'],
    imgSrc: '/images/events/energy-summit.jpg',
    href: 'https://energysummit.freemadeira.org/',
  },
  {
    date: 'Last Wednesday of every month',
    title: 'FREE Madeira Bitcoin Meetup',
    description:
      "Join us for an evening of Bitcoin discussion, networking, and learning with fellow enthusiasts, builders, and newcomers alike. Whether you're deep into the ecosystem or just getting started, everyone is welcome at our monthly meetup",
    imgSrc: '/images/events/meetup.jpg',
    tags: ['Meetup', 'In-person'],
    href: 'https://www.satlantis.io/events/1693/FREE-Madeira-Bitcoin-Meetup',
  },
  {
    date: 'Annual',
    title: 'Diploma Bitcoin',
    description:
      'A Portuguese adaptation of the internationally recognized 10-week program developed by My First Bitcoin. This course will give the participants a solid understanding of Bitcoin.',
    tags: ['Education', 'Course', 'Online'],
    imgSrc: '/images/events/diploma.png',
    href: '/education/info-diploma-bitcoin',
  },
];
