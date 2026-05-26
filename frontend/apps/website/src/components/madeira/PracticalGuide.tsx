import { Container, Flex, Heading, Text } from '../ui/atoms';
import { MapPinned, Zap } from 'lucide-react';
import { Card } from './Card';

export const PracticalGuide = (): React.ReactElement => {
  return (
    <Container size="tight" className="mt-28 mb-20">
      <Flex direction="column" gap={8}>
        <Heading size="h3">How to prepare your visit</Heading>
        <Text>Everything you need to visit Madeira and use Bitcoin in your day-to-day.</Text>
      </Flex>

      <Flex direction="column" gap={7} className="my-16 sm:my-20 sm:flex-row sm:gap-9">
        <Card icon={Zap} title="Travel wallet">
          <ul className="list-inside list-disc space-y-2 text-lg">
            <li>
              Use a Lightning wallet for day-to-day payments (Phoenix, Wallet of Satoshi, Breez,
              Bitkit)
            </li>
            <li>Load your wallet before arriving — most businesses accept Lightning</li>
            <li>Install BTC Map to find nearby businesses in real time</li>
          </ul>
        </Card>

        <Card
          icon={MapPinned}
          title="Getting there and getting around"
          buttonHref="https://www.satlantis.io/c/74/FREE-Madeira-Bitcoin-Meetups"
          buttonText="Attend our next meetup"
        >
          <ul className="list-inside list-disc space-y-2 text-lg">
            <li>Direct flights from several European cities — see list below</li>
            <li>Car hire is recommended for exploring the island</li>
            <li>Uber is available in Funchal</li>
          </ul>
        </Card>
      </Flex>
    </Container>
  );
};
