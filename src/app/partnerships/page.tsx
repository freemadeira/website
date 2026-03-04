import { Partners, PartnershipCta } from '@/components/partnerships';
import { Hero } from '@/components/ui';
import { HighFive } from '@/components/ui/svgs';

export default function Partnerships() {
  return (
    <>
      <Hero
        title="Partnerships"
        image={HighFive}
        imageClassName="mx-auto w-75 sm:w-90"
        layout="tight"
      >
        Places that embrace Bitcoin, and the companies that support them, will be the new
        globalleaders. Madeira is well-positioned and has the perfect environment for technology
        companies and Bitcoin adoption.
      </Hero>

      <PartnershipCta />
      <Partners />
    </>
  );
}
