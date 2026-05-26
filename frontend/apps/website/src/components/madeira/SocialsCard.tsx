import type { Url } from '@/utils/types';
import { DiscreetButton, Flex, Heading, Link, Text, type SvgProps } from '../ui/atoms';

interface Props {
  title: string;
  description: string;
  buttonText: string;
  href: Url;
  image: React.ComponentType<SvgProps>;
}

export const SocialsCard: React.FC<Props> = ({
  title,
  description,
  buttonText,
  href,
  image: Illustration,
}) => {
  return (
    <Link
      href={href}
      className="group relative w-full flex-1 overflow-clip bg-bridal-50 p-7 dark:bg-dark"
    >
      <Flex direction="column" justifyContent="between" className="h-full w-2/3 space-y-6">
        <Heading size="h6" className="z-10">
          {title}
        </Heading>

        <Text size="lg">{description}</Text>

        <DiscreetButton href={href}>{buttonText}</DiscreetButton>
      </Flex>

      <Illustration />
    </Link>
  );
};
