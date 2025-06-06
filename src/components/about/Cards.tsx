import { Zap, MessagesSquare } from 'lucide-react';
import { Container, Flex, Text } from '../ui/atoms';
import { Card } from './Card';

export const Cards = () => {
  return (
    <Flex as={Container} direction="column" gap={7} className="my-20 sm:my-28 sm:flex-row sm:gap-9">
      <Card
        icon={Zap}
        title="Energy"
        buttonHref="https://energysummit.freemadeira.org"
        buttonText="FREE Energy Summit"
      >
        <Text size="lg">
          We support Bitcoin projects for energy sustainability in Portugal, focusing on education
          and mentorship to foster local initiatives and expand renewable energy use.
        </Text>
      </Card>

      <Card
        icon={MessagesSquare}
        title="Meetups"
        buttonHref="https://www.meetup.com/madeira-bitcoin-meetup-group/events/"
        buttonText="Attend our next meetup"
      >
        <Text size="lg">
          Every first Wednesday of the month FREE holds a Bitcoin Meetup, bringing the community
          together to share knowledge, network and enjoy presentations by select guest speakers.
        </Text>
      </Card>
    </Flex>
  );
};
