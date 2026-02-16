import Image from 'next/image';
import partnershipCTAImage from '@/assets/images/partnership-cta-image.png';
import { Container, CtaLink, DiscreetButton, Flex, Heading, Text } from '../ui/atoms';

export function PartnershipCta(): React.ReactElement {
  return (
    <Container className="mt-22 sm:mt-28">
      <Flex stackOnMobileReverse gap={0}>
        <div className="relative h-64 w-full sm:h-auto sm:w-1/2">
          <Image
            src={partnershipCTAImage}
            alt="Partnership"
            className="object-cover"
            fill
            sizes="(max-width: 640px) 100vw, 50vw" // TODO: Update this when breakpoints are corrected
          />
        </div>

        <Flex
          direction="column"
          gap={4}
          className="w-full bg-bridal-700 px-6 py-9 text-white sm:w-1/2 sm:px-28 sm:py-20"
        >
          <Heading size="h5">Be part of the change!</Heading>

          <Text>
            We seek investors who want to shape Madeira's future and drive global Bitcoin adoption.
            Join us to align your investments with your values and help shape the future of money.
            If you want to be part of the change, contact us. We look forward to hearing from you.
          </Text>

          <Flex
            direction="column"
            gap={4}
            alignItems="start"
            className="sm:flex-row sm:items-center sm:gap-6"
          >
            <CtaLink href="mailto:info@freemadeira.org" underline>
              Send us an email
            </CtaLink>

            <DiscreetButton href="https://pay.zaprite.com/pl_2ma4dHm939">
              Make a donation
            </DiscreetButton>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}
