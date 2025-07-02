import { ContributeButtons } from '../ui';
import { Container, Flex, Heading, Text, TextBlock } from '../ui/atoms';

export const Donations: React.FC = () => {
  return (
    <Container size="tight" className="my-28">
      <Flex direction="column" gap={8}>
        <Heading size="h3">Donations</Heading>

        <TextBlock columns={2} gap={8} space={6} className="text-lg">
          <Text>
            We believe that knowledge is the catalyst for change, and by providing the tools of
            monetary education to all, we forge a path to economic empowerment and resilience.
          </Text>

          <Text>
            All donations to the Project go towards education, outreach and spreading knowledge
            about Bitcoin in the local community.
          </Text>

          <Text>
            The future shines bright and orange, just like the sun over Madeira. Embracing Bitcoin
            will ensure that Madeirans will be able to bask in its rays for generations to come.
          </Text>
        </TextBlock>

        <ContributeButtons className="mt-2" />
      </Flex>
    </Container>
  );
};
