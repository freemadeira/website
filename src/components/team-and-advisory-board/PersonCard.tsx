import Image from 'next/image';
import type { TeamMember } from '@/data/team';
import { DiscreetButton, Flex, Grid, Heading, SocialButton, Tag } from '@/components/ui/atoms';
import { possessive } from '@/utils/functions';
import { FemaleAvatar } from '../ui/svgs/FemaleAvatar';

type PersonProps = {
  person: TeamMember;
};

type Social = keyof TeamMember['socials'];
const socialKeys: Social[] = ['x', 'nostr', 'instagram'];

export function PersonCard({ person }: PersonProps): React.ReactElement {
  return (
    <Flex direction='column' gap={5} className='w-[70vw] flex-1 sm:w-auto'>
      <Flex direction='column' gap={3} className='grow'>
        <div className='relative aspect-square w-full'>
          {person.picture ? (
            <Image
              src={person.picture}
              fill
              alt='Event'
              className='-z-10 size-full object-cover'
            />
          ) : (
            <FemaleAvatar />
          )}

          <Flex
            direction='row'
            justifyContent='end'
            className='absolute top-4 right-4 left-4'
          >
            <Grid cols={1} gap={2}>
              {socialKeys.map((social) => {
                const username = person.socials?.[social];
                if (!username) return null;
                return (
                  <SocialButton
                    key={social}
                    social={social}
                    username={username}
                  />
                );
              })}
            </Grid>
          </Flex>
        </div>

        <div className='group space-y-2'>
          {
            <Heading size='h6'>
              {person.firstName} {person.lastName}
            </Heading>
          }

          <Flex gap={2.5} className='mb-4'>
            {person.categories.map((category: string) => (
              <Tag key={category} name={category} />
            ))}
          </Flex>

          {person.bio && (
            <DiscreetButton href={'#'}>
              Read {possessive(person.firstName)} full bio
            </DiscreetButton>
          )}
        </div>
      </Flex>
    </Flex>
  );
}
