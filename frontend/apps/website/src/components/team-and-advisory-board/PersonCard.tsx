'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { AdvisoryBoardMember } from '@/data/advisoryBoard';
import type { TeamMember } from '@/data/team';
import {
  DiscreetButton,
  Flex,
  Grid,
  Heading,
  SocialButton,
  Tag,
  Text,
} from '@/components/ui/atoms';
import { possessive } from '@/utils/functions';
import { FemaleAvatar, MaleAvatar } from '../ui/svgs';
import { Modal } from './Modal';

type PersonProps = {
  person: TeamMember | AdvisoryBoardMember;
};

type Social = keyof TeamMember['socials'];

export function PersonCard({ person }: PersonProps): React.ReactElement {
  const socialKeys = Object.keys(person.socials ?? {}) as Social[];
  const [open, setOpen] = useState(false);

  return (
    <>
      <Flex direction="column" gap={5} className="w-full flex-1 sm:w-auto">
        <Flex direction="column" gap={3} className="grow">
          <div className="relative aspect-square w-full">
            {person.picture ? (
              <Image
                src={person.picture}
                fill
                alt="Event"
                className="-z-10 size-full object-cover"
              />
            ) : person.sex === 'male' ? (
              <MaleAvatar />
            ) : (
              <FemaleAvatar />
            )}

            <Flex direction="row" justifyContent="end" className="absolute top-4 right-4 left-4">
              {person.socials && (
                <Grid cols={1} gap={2}>
                  {socialKeys.map((social) => {
                    const username = person.socials?.[social];
                    if (!username) return null;
                    return (
                      <SocialButton
                        style="filled"
                        key={social}
                        social={social}
                        username={username}
                      />
                    );
                  })}
                </Grid>
              )}
            </Flex>
          </div>

          <div className="space-y-3.5">
            {
              <Heading size="h4">
                {person.firstName} {person.lastName}
              </Heading>
            }

            {'role' in person && person.role && <Text size="lg">{person.role}</Text>}

            {'category' in person && person.category && <Tag name={person.category} />}

            {person.bio && (
              <DiscreetButton className="pt-2.5" onClick={() => setOpen(true)}>
                Read {possessive(person.firstName)} full bio
              </DiscreetButton>
            )}
          </div>
        </Flex>
      </Flex>
      <Modal person={person} open={open} setOpen={setOpen} />
    </>
  );
}
