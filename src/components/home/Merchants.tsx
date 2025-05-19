import Image from 'next/image';
import Link from 'next/link';
import { Container, Flex, Heading, Text } from '../ui/atoms';

import merchantMapLight from '@/assets/images/merchant-map-light.png';

export function Merchants(): React.ReactElement {
  return (
    <Container outer>
      <Flex stackOnMobile gap={0}>
        <Flex
          direction="column"
          gap={4}
          className="w-full bg-bridal-700 px-6 py-9 text-white sm:w-1/2 sm:px-28 sm:py-20"
        >
          <Heading size="h5">Free your business</Heading>
          <Text>
            Over 140 businesses already accept bitcoin on Madeira Island. Do you own a business and
            want to start receiving payments in bitcoin? We can assist you every step of the way.
          </Text>

          {/* TODO: Extract to new component */}
          <Link
            href="mailto:info@freemadeira.org"
            className="underline decoration-1 underline-offset-7 hover:text-dark"
          >
            Send us an email
          </Link>

          {/* TODO: Add discreet button to merchants directory when available */}
        </Flex>

        <div className="relative h-64 w-full sm:h-auto sm:w-1/2">
          <Image
            src={merchantMapLight}
            alt="Merchant Map"
            className="object-cover"
            fill
            sizes="(max-width: 640px) 100vw, 50vw" // TODO: Update this when breakpoints are corrected
          />
        </div>
      </Flex>
    </Container>
  );
}
