import { Cards, Donations, EducationGoals, WhoWeAre } from '@/components/about';
import { UpcomingEvents } from '@/components/events';
import { Hero, SplitHighlight } from '@/components/ui';
import { ColourSection } from '@/components/ui/atoms/ColourSection';
import { NamasteB, Planet } from '@/components/ui/svgs';

export default function About() {
  return (
    <>
      <Hero title="A quest for freedom" buttonText="Join us" buttonHref="#" image={Planet}>
        FREE Madeira, founded in 2022, is a non-profit organisation dedicated to empowering
        individuals and businesses to take control of their financial future through education and
        Bitcoin adoption in Portugal, particularly in Madeira.
      </Hero>

      <WhoWeAre />
      <Donations />
      <EducationGoals />
      <Cards />

      <SplitHighlight
        title="Bitcoin Business Hub"
        image={NamasteB}
        // buttonLink="#" TODO: Add link
        buttonText="Know more"
      >
        A Bitcoin what? Yes, a Bitcoin Business Hub. We will have a pub, an all-Bitcoin shop, a
        coworking space, and more. A dream in the making!
      </SplitHighlight>

      <UpcomingEvents />
    </>
  );
}
