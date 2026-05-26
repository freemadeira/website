import { Contribute } from '@/components/home';
import {
  MadeiraCarousel,
  PracticalGuide,
  FlightConnections,
  RecurentEvents,
} from '@/components/madeira';
import { Community } from '@/components/madeira/Community';
import { Hero } from '@/components/ui';
import { Madeira } from '@/components/ui/svgs';
import { getMadeiraGMTLabel } from '@/utils/getMadeiraGmtLabel';

export default function About() {
  const label = `32°N · 17°W · ${getMadeiraGMTLabel()}`;

  return (
    <>
      <Hero
        title="Madeira"
        pillInfo={label}
        subtitle="The island that embraced Bitcoin"
        buttonText="Explore Madeira"
        buttonHref="https://visitmadeira.com/en"
        image={Madeira}
      >
        Madeira is more than a tourist destination – spring-like climate, an active community and
        over 150 businesses accepting sats!
      </Hero>
      <MadeiraCarousel />
      <PracticalGuide />
      <FlightConnections />
      <RecurentEvents />
      <Community />
      <Contribute />
    </>
  );
}
