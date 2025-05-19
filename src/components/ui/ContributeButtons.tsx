import { Button, Flex, Link } from './atoms';

interface Props {
  className?: string;
}

export const ContributeButtons: React.FC<Props> = ({ className }) => {
  return (
    <Flex gap={4} className={className}>
      <Button as={Link} href="https://geyser.fund/project/freemadeira">
        Donations
      </Button>

      <Button as={Link} href="mailto:info@freemadeira.org" fill="outlined">
        Partnerships
      </Button>
    </Flex>
  );
};
