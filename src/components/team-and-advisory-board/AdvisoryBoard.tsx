import type { AdvisoryBoardMember } from '@/data/advisoryBoard';
import { Container, Heading } from '../ui/atoms';
import { PersonCardGrid } from './PersonCardGrid';

export const AdvisoryBoard = ({
  AdvisoryBoardMembers,
}: {
  AdvisoryBoardMembers: AdvisoryBoardMember[];
}): React.ReactElement => {
  return (
    <Container className="my-16">
      <Heading size="h1">Advisory Board</Heading>

      <PersonCardGrid persons={AdvisoryBoardMembers} />
    </Container>
  );
};
