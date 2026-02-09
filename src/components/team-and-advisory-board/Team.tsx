import type { TeamMember } from '@/data/team';
import { Container, Heading } from '../ui/atoms';
import { PersonCardGrid } from './PersonCardGrid';

export const Team = ({ teamMembers }: { teamMembers: TeamMember[] }): React.ReactElement => {
  return (
    <Container className="mt-16">
      <Heading size="h1">Team</Heading>

      <PersonCardGrid persons={teamMembers} />
    </Container>
  );
};
