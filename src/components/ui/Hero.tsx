import { tv } from 'tailwind-variants';
import { Container, Flex, Heading } from '@/components/ui/atoms';
import type { Url } from '@/utils/types';

const heroVariants = tv({
  slots: {
    text: 'w-full gap-6 sm:gap-14',
    image: 'w-full',
  },
  variants: {
    layout: {
      default: {
        text: 'sm:w-3/5',
        image: 'sm:w-2/5',
      },
      tight: {
        text: 'sm:w-1/2',
        image: 'sm:w-1/2',
      },
    },
  },
  defaultVariants: {
    layout: 'default',
  },
});
interface HeroProps {
  title: string;
  image: React.FC<React.SVGProps<SVGSVGElement>>;
  buttonText?: string;
  buttonHref?: Url;
  children: React.ReactNode;
  layout?: 'default' | 'tight';
}

export const Hero: React.FC<HeroProps> = ({
  title,
  image: Illustration,
  buttonText,
  buttonHref,
  children,
  layout,
}) => {
  const { text, image } = heroVariants({ layout });

  return (
    <Flex
      as={Container}
      justifyContent="between"
      className="my-16 flex-col-reverse gap-6 sm:flex-row sm:gap-10"
    >
      <Flex direction="column" className={text()}>
        <Flex direction="column" className="gap-4 sm:gap-8">
          <Heading size="h1">{title}</Heading>

          <Heading size="h6">{children}</Heading>
        </Flex>

        {/* TODO: Add button */}
      </Flex>

      <Illustration className={image()} />
    </Flex>
  );
};
