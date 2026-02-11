import { Partners } from '@/components/partnerships/Partners';
import { PartnershipCTA } from '@/components/partnerships/PartnershipCTA';
import { Hero } from '@/components/ui';
import { HighFive } from '@/components/ui/svgs';

export default function About() {
  return (
    <>
      <Hero
        title="Partnerships"
        image={(props) => <HighFive {...props} className="mx-auto w-75 sm:w-90" />}
        layout="tight"
      >
        Places that embrace Bitcoin, and the companies that support them, will be the new
        globalleaders. Madeira is well-positioned and has governmental support for technology
        companies and Bitcoin adoption.
      </Hero>

      <PartnershipCTA />
      <Partners />
    </>
  );
}
