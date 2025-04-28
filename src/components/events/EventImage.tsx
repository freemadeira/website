import Image from 'next/image';
import type { Event } from './UpcomingEvents';

interface EventImageProps {
  imgSrc?: Event['imgSrc'];
}

export const EventImage: React.FC<EventImageProps> = ({ imgSrc }) => (
  <div className="relative h-48 w-full">
    <Image
      src={imgSrc || '/images/events/placeholder.png'}
      fill
      alt="Event"
      className="h-48 w-full object-cover"
    />
  </div>
);
