import type { LucideIcon } from 'lucide-react';
import { Flex, Heading, Text } from '../ui/atoms';
import { DiscreetButton } from '../ui/atoms/DiscreetButton';
import type { Url } from '@/utils/types';

interface CardProps {
  icon: LucideIcon;
  title: string;
  buttonHref?: Url;
  buttonText?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  icon: Icon,
  title,
  buttonHref,
  buttonText,
  children,
}) => {
  return (
    <Flex
      direction="column"
      gap={8}
      className="w-full bg-bridal-700 px-20 py-12 text-white sm:w-1/2 sm:gap-12 lg:px-30"
    >
      <Flex direction="column" gap={8} grow className="md:gap-6">
        <Flex gap={4} alignItems="center">
          <Icon className="size-12" />
          <Heading size="h3">{title}</Heading>
        </Flex>

        {children}
      </Flex>

      {buttonHref && buttonText && <DiscreetButton href={buttonHref}>{buttonText}</DiscreetButton>}
    </Flex>
  );
};
