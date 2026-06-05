import { Carousel, CarouselContent, CarouselControls } from '../ui';
import { HomeCarouselItem } from './HomeCarouselItem';
import bitcoinAtlantisImage from '@/assets/images/carousel/bitcoin-atlantis.jpg';
// import energySummitImage from '@/assets/images/carousel/energy-summit.jpg';
import madeiraImage from '@/assets/images/carousel/madeira.jpg';
import oIndividuoSoberanoImage from '@/assets/images/carousel/o-individuo-soberano.jpg';
import shopImage from '@/assets/images/carousel/shop.jpg';

export const HomeCarousel: React.FC = () => {
  return (
    <Carousel title="Projects">
      <CarouselContent>
        <HomeCarouselItem
          title="Adoption"
          backgroundImage={madeiraImage}
          mainButtonHref="https://btcmap.org/map#10/32.80748/-16.82419"
          mainButtonText="Explore the map"
        >
          With more than 160 businesses accepting Bitcoin and regular meetups, Madeira Island has
          become a world reference for Bitcoin.
        </HomeCarouselItem>

        <HomeCarouselItem
          title="Monstera Books"
          backgroundImage={oIndividuoSoberanoImage}
          mainButtonHref="https://shop.freemadeira.org/products/o-individuo-soberano"
          mainButtonText="Comprar"
        >
          O Indivíduo Soberano é um livro visionário que antecipa muitos dos acontecimentos que
          moldam o mundo moderno. Agora disponível em português.
        </HomeCarouselItem>

        <HomeCarouselItem
          title="Shop"
          backgroundImage={shopImage}
          mainButtonHref="https://shop.freemadeira.org"
          mainButtonText="Visit the shop"
        >
          Buy hardware wallets, backup solutions, books, and other Bitcoin-related products in our
          online shop.
        </HomeCarouselItem>

        <HomeCarouselItem
          title="Bitcoin Atlantis"
          backgroundImage={bitcoinAtlantisImage}
          mainButtonHref="https://bitcoinatlantis.com/recap"
          mainButtonText="Watch the talks"
          secondaryButtonHref="https://bitcoinatlantis.com"
          secondaryButtonText="Visit the website"
        >
          Bitcoin Atlantis 2024 brought together the leading voices in Bitcoin for a three-day
          conference in Madeira, in the middle of the Atlantic.
        </HomeCarouselItem>
      </CarouselContent>

      <CarouselControls />
    </Carousel>
  );
};
