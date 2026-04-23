import Image, { type StaticImageData } from 'next/image';
import { twJoin } from 'tailwind-merge';
import { CarouselItem } from '../ui';
import { Container, Flex, Heading } from '../ui/atoms';

type Props = {
  title: string;
  backgroundImage: string | StaticImageData;
  children: string;
};

export function MadeiraCarouselItem({ title, backgroundImage, children }: Props) {
  return (
    <CarouselItem>
      <div className="relative h-screen w-full select-none pt-14 pb-10 text-white sm:mt-10 sm:pt-16 sm:pb-14">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="-z-10 object-cover"
          sizes="100vw"
        />

        {/* Dark overlay */}
        <div
          className={twJoin(
            '-z-10 absolute inset-0 bg-black/60 md:bg-transparent',
            'md:bg-gradient-to-r md:from-black/60 md:via-black/50 md:to-black/20',
            'dark:bg-black/70 dark:bg-none',
          )}
        />

        <Container
          direction="column"
          gap={8}
          className="relative z-10 h-full"
          wrapperClasses="h-full"
        >
          <Flex
            direction="column"
            gap={6}
            className="w-full grow md:w-4/5 lg:w-3/5"
            justifyContent="center"
          >
            <Heading size="h4">{children}</Heading>
          </Flex>
        </Container>
      </div>
    </CarouselItem>
  );
}
