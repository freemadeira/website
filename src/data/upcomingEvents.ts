import type { LabelTag } from '@/components/ui';

export interface Event {
  info: string;
  title: string;
  description: string;
  tags: LabelTag[];
  imgSrc?: string;
  href?: string;
}

export const events: Event[] = [
  {
    info: 'March 24, 2026, 18:30',
    title: 'Backup & Segurança',
    description:
      'Workshop entirely in Portuguese. Como manter o teu Bitcoin seguro? Este workshop é recomendado para quem queira aprender a guardar o seu bitcoin de forma segura.',
    imgSrc: '/images/events/workshop-intro.jpg',
    tags: ['Workshop', 'In-person'],
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSepCNFLfpcBuUop5SkgwAqj1RAHlr2baCdsL6VFnFUIv9wSgA/viewform',
  },
  {
    info: 'March 25, 2026, 18:30',
    title: 'FREE Madeira Bitcoin Meetup',
    description:
      'Guest speaker Cobrador presents TollGate, built during the Sovereign Engineering Cohort in Madeira.',
    tags: ['Meetup', 'In-person'],
    imgSrc: '/images/events/meetup.jpg',
    href: 'https://www.satlantis.io/events/1692/FREE-Madeira-Bitcoin-Meetup',
  },
  {
    info: 'March 26, 2026, 18:30',
    title: 'Carteiras Físicas & Soluções de Backup',
    description:
      'Workshop entirely in Portuguese. Como usar carteiras físicas e outras soluções de backup para manter o teu bitcoin seguro? Este workshop é recomendado para quem queira aprender a guardar o seu bitcoin de forma segura.',
    imgSrc: '/images/events/workshop-intro.jpg',
    tags: ['Workshop', 'In-person'],
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSepCNFLfpcBuUop5SkgwAqj1RAHlr2baCdsL6VFnFUIv9wSgA/viewform',
  },
  {
    info: 'April 29, 2026, 18:30',
    title: 'FREE Madeira Bitcoin Meetup',
    description:
      'Every last Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
    tags: ['Meetup', 'In-person'],
    imgSrc: '/images/events/meetup.jpg',
    href: 'https://www.satlantis.io/events/1693/FREE-Madeira-Bitcoin-Meetup',
  },
  // {
  //   info: 'EXACT DATES TBC, 2028',
  //   title: 'Bitcoin Atlantis 2028',
  //   description:
  //     'After the huge success of the first edition in 2024, Bitcoin Atlantis will return in 2028. We will once again celebrate Bitcoin in a halving year.',
  //   tags: ['Conference'],
  //   imgSrc: '/images/events/ba28.jpg',
  // },
];
