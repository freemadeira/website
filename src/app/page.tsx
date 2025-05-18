import { UpcomingEvents } from '@/components/events';
import { About, Carousel, Contribute, Education, Merchants, Partners } from '@/components/home';
import { Hero } from '@/components/ui';
import { Container } from '@/components/ui/atoms';
import { PortalHands } from '@/components/ui/svgs';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero
        title="A Bitcoin community in the Atlantic"
        buttonText="Join us"
        buttonHref="#"
        image={PortalHands}
      >
        FREE Madeira is a non-profit organisation focused on education, community building, and
        supporting Bitcoin adoption during the transition to a new monetary paradigm.
      </Hero>

      <UpcomingEvents />
      <Education />
      <Carousel />
      <About />
      <Merchants />
      <Partners />
      <Contribute />
    </>
  );
}
