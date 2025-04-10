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
            In the last year, we have onboarded more than 100 merchants who now accept Bitcoin at
            their businesses, bringing new customers and fostering a local circular economy in the
            island. Be part of this movement and allow your business to grow with bitcoin.
          </Text>

          <Link
            href="mailto:info@freemadeira.org"
            className="underline decoration-1 underline-offset-7 hover:decoration-primary-500"
          >
            Send us an email
          </Link>
        </Flex>

        <div className="relative w-full sm:w-1/2">
          <Image src={merchantMapLight} alt="Merchant Map" className="object-cover" fill />
        </div>
      </Flex>
    </Container>
  );
}
