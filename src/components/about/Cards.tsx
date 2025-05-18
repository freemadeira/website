import { Lightbulb, MessagesSquare } from 'lucide-react';
import { Container, Flex, Text } from '../ui/atoms';
import { Card } from './Card';

export const Cards = () => {
  return (
    <Flex as={Container} direction="column" gap={7} className='my-20 sm:my-28 sm:flex-row sm:gap-9'>
      <Card icon={Lightbulb} title="Energy" buttonText="">
        <Text size="lg">
          We support Bitcoin projects for energy sustainability in Madeira, focusing on education
          and mentorship to foster local initiatives and expand renewable energy use.
        </Text>
      </Card>

      <Card icon={MessagesSquare} title="Meetups" buttonText="">
        <Text size="lg">
          We hold a monthly Bitcoin Meetup, with over 650 members and 21 events since 2022. Our
          largest gathering drew 650 attendees at the Bitcoin Atlantis Conference.
        </Text>
      </Card>
    </Flex>
  );
};
