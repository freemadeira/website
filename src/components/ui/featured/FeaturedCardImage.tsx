import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { externalUrl } from '@/utils/functions';
import { IconButton } from '../atoms';
import type { FeaturedItem } from './FeaturedGrid';

interface Props {
  imgSrc?: FeaturedItem['imgSrc'];
  link?: FeaturedItem['href'];
}

export const FeaturedCardImage = ({ imgSrc, link }: Props): React.ReactElement => (
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
