import { externalUrl } from '@/utils/functions';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { IconButton } from '../ui/atoms';
import type { Event } from './UpcomingEvents';

interface EventImageProps {
  imgSrc?: Event['imgSrc'];
  link?: Event['href'];
}

export const EventImage: React.FC<EventImageProps> = ({ imgSrc, link }) => (
  <div className="relative h-48 w-full">
    <Image
      src={imgSrc || '/images/events/placeholder.png'}
      fill
      alt="Event"
      className="-z-10 size-full object-cover"
      sizes="(max-width: 640px) 70vw, 25vw" // TODO: Update this when breakpoints are corrected
    />

    {link && (
      <>
        <div className="size-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />

        <IconButton className="absolute top-4 right-3" colour="white">
          {externalUrl(link) ? <ArrowUpRight /> : <ArrowRight />}
        </IconButton>
      </>
    )}
  </div>
);
