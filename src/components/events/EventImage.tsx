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
      sizes="(max-width: 640px) 70vw, 25vw" // TODO: Update this when breakpoints are corrected
    />
  </div>
);
