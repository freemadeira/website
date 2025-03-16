import Link from 'next/link';
import { Container, Flex, Heading, Text } from '../ui/atoms';

export function Merchants(): React.ReactElement {
  return (
    <Flex as={Container} stackOnMobile>
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
        <Link href="mailto:info@freemadeira.org">Send us an email</Link>
      </Flex>

      <div className="w-full sm:w-1/2">Map</div>
    </Flex>
  );
}
