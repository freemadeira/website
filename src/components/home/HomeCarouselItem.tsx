import Image, { type StaticImageData } from 'next/image';
import { twJoin } from 'tailwind-merge';
import { CarouselItem } from '../ui';
import { Button, CategoryTag, Container, Flex, Heading, Link } from '../ui/atoms';

type ButtonPair<T extends string> =
  | ({ [K in `${T}ButtonHref`]: string } & { [K in `${T}ButtonText`]: string })
  | ({ [K in `${T}ButtonHref`]?: never } & { [K in `${T}ButtonText`]?: never });

// This type allows for a main button with optional secondary button, or both buttons
type ButtonHierarchy =
  | (ButtonPair<'main'> & { secondaryButtonHref?: never; secondaryButtonText?: never })
  | {
      mainButtonHref: string;
      mainButtonText: string;
      secondaryButtonHref: string;
      secondaryButtonText: string;
    };

type Props = {
  title: string;
  backgroundImage: string | StaticImageData;
  children: string;
} & ButtonHierarchy;

export function HomeCarouselItem({
  title,
  backgroundImage,
  mainButtonHref,
  mainButtonText,
  secondaryButtonHref,
  secondaryButtonText,
  children,
}: Props) {
  return (
    <CarouselItem>
      <div className='relative h-screen w-full select-none pt-14 pb-10 text-white sm:pt-16 sm:pb-14'>
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

        <Flex as={Container} direction="column" gap={8} className="relative z-10 h-full">
          <CategoryTag>{title}</CategoryTag>

          <Flex direction="column" gap={6} className="w-full grow sm:w-3/5" justifyContent="center">
            <Heading size="h4">{children}</Heading>

            {mainButtonHref && (
              <Flex gap={4}>
                <Button as={Link} href={mainButtonHref}>
                  {mainButtonText}
                </Button>
                {secondaryButtonHref && (
                  <Button as={Link} href={secondaryButtonHref} fill="outlined" colour="white">
                    {secondaryButtonText}
                  </Button>
                )}
              </Flex>
            )}
          </Flex>
        </Flex>
      </div>
    </CarouselItem>
  );
}
