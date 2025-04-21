import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, CategoryTag, Container, Flex, Heading, IconButton } from '../ui/atoms';

export const Carousel: React.FC = () => {
  return (
    <div className='h-screen w-full bg-[url(/img/madeira.jpg)] pt-14 pb-10 text-white sm:pt-16 sm:pb-14'>
      {/* <Image src={madeiraJpg} alt="Madeira" className="object-cover" fill priority /> */}
      <Flex as={Container} direction="column" gap={8} className="h-full">
        <CategoryTag>Investments</CategoryTag>

        <Flex direction="column" gap={6} className='w-full grow sm:w-3/5' justifyContent="center">
          <Heading size="h4">
            With more than 100 businesses accepting Bitcoin and regular meetups, Madeira island has
            become a Bitcoin world reference.
          </Heading>

          <Button as={Link} href="https://btcmap.org/map#10/32.80748/-16.82419" target="_blank">
            Explore the map
          </Button>
        </Flex>

        <Flex gap={3} justifyContent="start" className='opacity-0 sm:justify-center sm:gap-4'>
          <IconButton fill="outlined" colour="white" className="border-[1.5px] opacity-50">
            <ArrowLeft className="size-7 sm:size-8" strokeWidth={1.5} />
          </IconButton>

          <IconButton fill="outlined" colour="white" className="border-[1.5px]">
            <ArrowRight className="size-7 sm:size-8" strokeWidth={1.5} />
          </IconButton>
        </Flex>
      </Flex>
    </div>
  );
};
