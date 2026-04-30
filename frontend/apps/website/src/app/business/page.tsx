import {
  BtcMap,
  ContactSection,
  MerchantDirectoryCTA,
  MerchantInsightsBanner,
  MerchantStats,
} from '@/components/business';
import { Contribute } from '@/components/home/Contribute';
import { Hero } from '@/components/ui';
import { Location, Store } from '@/components/ui/svgs';

export default function Business() {
  return (
    <>
      <Hero title="Business" image={Location} imageClassName="mx-auto w-75 sm:w-90" layout="tight">
        Madeira’s community leads in local Bitcoin adoption with businesses embracing the global
        currency
      </Hero>
      <MerchantDirectoryCTA />
      <MerchantInsightsBanner
        title="About 80% of merchants are holding onto their Sats, using Bitcoin as a store of value, and all merchants maintain full control over their Bitcoin."
        image={() => (
          <Store className="sm:absolute sm:right-4 sm:bottom-0 sm:h-[162px] lg:right-12 lg:h-full" />
        )}
      />
      <MerchantStats />
      <BtcMap />
      <ContactSection />
      <Contribute />
    </>
  );
}
