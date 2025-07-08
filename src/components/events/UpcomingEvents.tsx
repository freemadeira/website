import { FeaturedGrid, type FeaturedItem } from '../ui/featured/FeaturedGrid';

const events: FeaturedItem[] = [
  {
    info: 'August 6, 2025, 18:30',
    title: 'FREE Madeira Bitcoin Meetup',
    description:
      'Every first Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
    tags: ['Meetup', 'In-person'],
    imgSrc: '/images/events/meetup.jpg',
    href: 'https://www.meetup.com/madeira-bitcoin-meetup-group/events/ngjpqtyhclbjb/',
  },
  {
    info: 'September 3, 2025, 18:30',
    title: 'FREE Madeira Bitcoin Meetup',
    description:
      'Every first Wednesday of the month, FREE Madeira organises a Bitcoin meetup, bringing the community together. Know more and sign up.',
    tags: ['Meetup', 'In-person'],
    imgSrc: '/images/events/meetup.jpg',
    href: 'https://www.meetup.com/madeira-bitcoin-meetup-group/events/308813664/',
  },
  {
    info: 'September–November (schedule TBC), 2025',
    title: 'Diploma Bitcoin',
    description:
      '10-week course with recorded classes and weekly live Q&A sessions. This course is a deeper introduction to Bitcoin and takes the student from zero to understanding what Bitcoin is and how it works, as well as learning to use it.',
    tags: ['Course', 'Online'],
    imgSrc: '/images/events/diploma.png',
  },
  {
    info: 'EXACT DATES TBC, 2028',
    title: 'Bitcoin Atlantis 2028',
    description:
      'After the huge success of the first edition in 2024, Bitcoin Atlantis will return in 2028. We will once again celebrate Bitcoin in a halving year.',
    tags: ['Conference'],
    imgSrc: '/images/events/ba28.jpg',
  },
];

export function UpcomingEvents(): React.ReactElement {
  return <FeaturedGrid title="Upcoming Events" items={events} />;
}
