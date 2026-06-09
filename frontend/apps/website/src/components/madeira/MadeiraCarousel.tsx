import { pictures } from '@/assets/images/madeira-carousel';
import { Carousel, CarouselContent, CarouselControls } from '../ui';
import { MadeiraCarouselItem } from './MadeiraCarouselItem';

export const MadeiraCarousel: React.FC = () => {
  return (
    <Carousel title="Madeira">
      <CarouselContent>
        <MadeiraCarouselItem
          title="The island"
          subtitle="Why Madeira?"
          backgroundImage={pictures.MadeiraMountainSea}
          buttonHref="https://btcmap.org/community/free-madeira/merchants"
          buttonText="Bitcoin businesses on the island"
        >
          An autonomous island in the Atlantic – 1,000 km from the European continent, with a
          spring-like climate, GMT time zone and part of one of the most Bitcoin-friendly
          jurisdictions in the European Union.
        </MadeiraCarouselItem>
        <MadeiraCarouselItem
          title="Energy"
          subtitle="Renewables as a foundation, Bitcoin as a tool"
          backgroundImage={pictures.MadeiraRenewableEnergy}
          buttonHref="https://freeenergysummit.com"
          buttonText="Learn more"
        >
          Madeira produces energy from its own renewable sources. FREE Madeira actively explores the
          connection between Bitcoin mining and surplus renewable energy.
        </MadeiraCarouselItem>
        <MadeiraCarouselItem
          title="Climate"
          subtitle="Spring all year round"
          backgroundImage={pictures.MadeiraFunchal}
          buttonHref="https://www.satlantis.io/p/npub1etgqcj9gc6yaxttuwu9eqgs3ynt2dzaudvwnrssrn2zdt2useaasfj8n6e"
          buttonText="Next events"
        >
          Funchal has one of the most stable temperatures in Europe — from 19°C to 27°C throughout
          the year. Any month is ideal for working remotely or attending a Bitcoin meetup.
        </MadeiraCarouselItem>
        <MadeiraCarouselItem
          title="Bitcoin adoption"
          subtitle="About 80% of merchants are holding onto their Sats – using Bitcoin as a store of value."
          backgroundImage={pictures.MadeiraMerchants}
          buttonHref="mailto:info@freemadeira.org?subject=I%20want%20my%20business%20to%20accept%20bitcoin" // TODO: link to business page
          buttonText="I want my business to accept Bitcoin"
        >
          Adoption in Madeira is not superficial. Merchants genuinely believe in what they are
          doing. Your business could be next.
        </MadeiraCarouselItem>
      </CarouselContent>

      <CarouselControls />
    </Carousel>
  );
};
