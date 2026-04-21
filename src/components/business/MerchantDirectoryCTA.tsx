import Image from 'next/image';
import merchantDirectoryCtaImage from '@/assets/images/merchant-directory-cta-image.png';
import { Container, DiscreetButton, Flex, Heading, Text } from '../ui/atoms';

export function MerchantDirectoryCTA(): React.ReactElement {
  return (
    <Container className="mt-22 sm:mx-22 sm:mt-28" size="tight">
      <Flex stackOnMobile gap={12}>
        <div className="relative w-fit">
          <Image
            src={merchantDirectoryCtaImage}
            alt="Partnership"
            className="object-cover"
            sizes="(max-width: 605px) 100vw, 50vw" // TODO: Update this when breakpoints are corrected
          />
        </div>

        <Flex direction="column" gap={4} className="w-full sm:w-1/2 sm:justify-center">
          <Heading size="h5" className="text-bridal-700">
            In the past 6 months, we’ve onboarded over 100 businesses to BTC map, placing us among
            the top 5 communities globally
          </Heading>

          <Text>
            Madeira's growing Bitcoin economy is attracting Bitcoiners worldwide, inspiring others
            to replicate it in their own communities. Merchant feedback has been positive, with more
            businesses reaching out to adopt Bitcoin as payment. After onboarding, our team remains
            available to support merchants with any questions on the payment system or Bitcoin.
          </Text>

          <DiscreetButton href="#btc-map">Check our business directory</DiscreetButton>
        </Flex>
      </Flex>
    </Container>
  );
}
