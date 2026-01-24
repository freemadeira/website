import type { TeamMember } from '@/data/team';
import { Grid } from '../ui/atoms';
import { PersonCard } from './PersonCard';

export const PersonCardGrid = ({ persons }: { persons: TeamMember[] }) => {
  return (
    <Grid cols={1} gap={7} className='my-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {persons.map((person) => (
        <PersonCard key={person.firstName + person.lastName} person={person} />
      ))}
    </Grid>
  );
};
