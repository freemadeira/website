import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from '@headlessui/react';
import type { TeamMember } from '@/data/team';
import { Flex, Heading, SocialButton, Text } from '../ui/atoms';
import Image from 'next/image';
import { MaleAvatar } from '../ui/svgs/MaleAvatar';
import { FemaleAvatar } from '../ui/svgs/FemaleAvatar';
import { Cross } from '../ui/svgs/Cross';

interface ModalProps {
  person: TeamMember;
  open: boolean;
  setOpen: (open: boolean) => void;
}

type Social = keyof TeamMember['socials'];
const socialKeys: Social[] = ['x', 'nostr', 'instagram'];

export function Modal({
  person,
  open,
  setOpen,
}: ModalProps): React.ReactElement {
  return (
    <Dialog open={open} onClose={setOpen} className='relative z-10'>
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-mountain-mist-600/80 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in'
      />

      <div className='fixed inset-0 z-10 w-screen'>
        <div className='flex min-h-full items-end justify-center text-center sm:items-center'>
          <DialogPanel
            transition
            className='no-scrollbar relative max-h-[80vh] transform overflow-auto bg-bridal-50 px-4 pb-16 text-left transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in sm:m-8 sm:max-w-5xl sm:p-8 data-closed:sm:translate-y-0 data-closed:sm:scale-95'
          >
            <div className='sticky top-0 bg-bridal-50 pt-4 pb-2 text-right sm:absolute sm:top-4 sm:right-4 sm:bg-transparent sm:pt-1 sm:pb-1'>
              <button type='button' onClick={() => setOpen(false)}>
                <span className='sr-only'>Close</span>
                <Cross className='h-8 w-8' />
              </button>
            </div>

            <Flex
              direction='column'
              gap={8}
              alignItems='center'
              className='sm:flex-row'
            >
              <div className='aspect-square w-full'>
                {person.picture ? (
                  <Image
                    src={person.picture}
                    fill
                    alt='Event'
                    className='-z-10 size-full object-cover'
                  />
                ) : person.sex === 'male' ? (
                  <MaleAvatar />
                ) : (
                  <FemaleAvatar />
                )}
              </div>
              <div className='space-y-6 sm:max-w-2/3'>
                <Heading size='h6'>
                  {person.firstName} {person.lastName}
                </Heading>
                <Text className='no-scrollbar max-h-36 overflow-auto'>
                  {person.bio}
                </Text>
                <Flex gap={2}>
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
                </Flex>
              </div>
            </Flex>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
