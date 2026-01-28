import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from '@headlessui/react';
import type { TeamMember } from '@/data/team';
import { Flex, Heading, SocialButton, Text, CloseButton } from '../ui/atoms';
import Image from 'next/image';
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
    <Dialog open={open} onClose={setOpen} className='relative'>
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-mountain-mist-600 mix-blend-multiply transition-opacity data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in'
      />

      <div className='fixed inset-0 z-10 w-screen'>
        <div className='flex min-h-full items-end justify-center text-center sm:items-center'>
          <DialogPanel
            transition
            className='no-scrollbar relative max-h-[80vh] transform overflow-auto bg-bridal-50 px-4 pb-16 text-left transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in sm:m-8 sm:max-w-5xl sm:px-8 sm:pb-8 data-closed:sm:translate-y-0 data-closed:sm:scale-95'
          >
            <div className='sticky top-0 z-10 bg-bridal-50 pt-4 pb-3 text-right sm:absolute sm:hidden'>
              <CloseButton onClick={() => setOpen(false)} />
            </div>

            <Flex
              direction='column'
              gap={8}
              alignItems='start'
              className='sm:flex-row'
            >
              {person.picture && (
                <div className='relative aspect-square w-full sm:sticky sm:top-8 sm:mt-8 sm:w-1/3'>
                  <Image
                    src={person.picture}
                    fill
                    alt='Event'
                    className='size-full object-cover'
                  />
                </div>
              )}
              <div
                className={`${person.picture ? 'sm:max-w-2/3' : ''}`}
              >
                <Flex
                  className='top-0 pb-8 sm:sticky sm:bg-bridal-50 sm:py-10'
                  justifyContent='between'
                  alignItems='center'
                >
                  <Heading size='h4' className=''>
                    {person.firstName} {person.lastName}
                  </Heading>
                  <div className='hidden sm:block'>
                    <CloseButton onClick={() => setOpen(false)} />
                  </div>
                </Flex>
                <Text size='lg' className='pb-8 sm:pb-10'>{person.bio}</Text>
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
