import { Button, Flex } from './atoms';

interface Props {
  className?: string;
}

export const ContributeButtons: React.FC<Props> = ({ className }) => {
  return (
    <Flex gap={4} className={className}>
      <Button
        as="a"
        href="https://geyser.fund/project/freemadeira"
        target="_blank"
        rel="noopener noreferrer"
      >
        Donations
      </Button>

      <Button as="a" href="mailto:info@freemadeira.org" fill="outlined">
        Partnerships
      </Button>
    </Flex>
  );
};
