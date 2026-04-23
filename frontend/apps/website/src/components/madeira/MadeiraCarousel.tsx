import { pictures } from '@/assets/images/madeira-carousel';
import { Carousel, CarouselContent, CarouselControls } from '../ui';
import { MadeiraCarouselItem } from './MadeiraCarouselItem';

export const MadeiraCarousel: React.FC = () => {
  return (
    <Carousel title="Madeira">
      <CarouselContent>
        <MadeiraCarouselItem title="Discover Madeira" backgroundImage={pictures.MadeiraMountainSea}>
          Natural settings, crystal-clear waters, centuries-old traditions,genuine flavours and a
          warm welcome. Come and experience a unique archipelago where the calendar does not dictate
          the season.
        </MadeiraCarouselItem>
        <MadeiraCarouselItem
          title="Hidden Villages in the Mountains"
          backgroundImage={pictures.MadeiraMountainVillage}
        >
          Nestled between lush valleys and misty peaks, Madeira’s hillside villages blend tradition,
          nature, and quiet charm. Discover a slower rhythm of life shaped by the island’s dramatic
          terrain.
        </MadeiraCarouselItem>
        <MadeiraCarouselItem title="Scenic Coastal Drives" backgroundImage={pictures.MadeiraRoad}>
          Winding roads hug the cliffs, revealing breathtaking views of the Atlantic at every turn.
          In Madeira, the journey is just as unforgettable as the destination.
        </MadeiraCarouselItem>
        <MadeiraCarouselItem title="Above the Clouds" backgroundImage={pictures.MadeiraViewpoint}>
          Step into a world above the clouds, where rugged peaks and endless horizons create moments
          of pure awe. Madeira’s viewpoints offer perspectives you won’t forget.
        </MadeiraCarouselItem>
      </CarouselContent>

      <CarouselControls />
    </Carousel>
  );
};
