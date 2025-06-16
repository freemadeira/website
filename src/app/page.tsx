import { UpcomingEvents } from '@/components/events';
import { About, Contribute, Education, HomeCarousel, Merchants, Partners } from '@/components/home';
import { Hero } from '@/components/ui';
import { PortalHands } from '@/components/ui/svgs';

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
      <HomeCarousel />
      <About />
      <Merchants />
      <Partners />
      <Contribute />
    </>
  );
}
