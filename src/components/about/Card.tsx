import type { LucideIcon } from 'lucide-react';
import { Flex, Heading, Text } from '../ui/atoms';
import { DiscreetButton } from '../ui/atoms/DiscreetButton';

interface CardProps {
  icon: LucideIcon;
  title: string;
  buttonText: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ icon: Icon, title, buttonText, children }) => {
  return (
    <Flex
      direction="column"
      gap={8}
      className="w-full bg-bridal-700 px-20 py-12 text-white sm:w-1/2 sm:gap-12 lg:px-30"
    >
      <Flex direction="column" gap={8} grow className="sm:gap-10">
        <Flex gap={4} alignItems="center">
          <Icon className="size-12" />
          <Heading size="h3">{title}</Heading>
        </Flex>

        {children}
      </Flex>

      <DiscreetButton size="lg" href="#">
        Learn more about our initiatives
      </DiscreetButton>
    </Flex>
  );
};
