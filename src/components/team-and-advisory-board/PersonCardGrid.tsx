import type { TeamMember } from '@/data/team';
import { Grid } from '../ui/atoms';
import { PersonCard } from './PersonCard';

export const PersonCardGrid = ({ persons }: { persons: TeamMember[] }) => {
  return (
    <Grid cols={4} gap={7} className='my-12'>
      {persons.map((person) => (
        <PersonCard key={person.firstName + person.lastName} person={person} />
      ))}
    </Grid>
  );
};
