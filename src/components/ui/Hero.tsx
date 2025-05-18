import { Container, Flex, Heading } from '@/components/ui/atoms';
import { PortalHands } from '@/components/ui/svgs';
import type { Url } from '@/utils/types';

interface HeroProps {
  title: string;
  image: React.FC<React.SVGProps<SVGSVGElement>>;
  buttonText?: string;
  buttonHref?: Url;
  children: React.ReactNode;
}
export const Hero: React.FC<HeroProps> = ({
  title,
  image: Illustration,
  buttonText,
  buttonHref,
  children,
}) => {
  return (
    <Flex as={Container} className="my-16 flex-col-reverse gap-6 sm:flex-row sm:gap-10">
      <Flex direction="column" className="w-full gap-6 sm:w-3/5 sm:gap-14">
        <Flex direction="column" className="gap-4 sm:gap-8">
          <Heading size="h1">{title}</Heading>

          <Heading size="h6">{children}</Heading>
        </Flex>

        {/* TODO: Add button */}
      </Flex>

      <Illustration className="w-full sm:w-2/5" />
    </Flex>
  );
};
