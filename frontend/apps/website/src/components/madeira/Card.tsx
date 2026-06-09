import type { Url } from '@/utils/types';
import type { LucideIcon } from 'lucide-react';
import { Flex, Text } from '../ui/atoms';

interface CardProps {
  icon: LucideIcon;
  title: string;
  buttonHref?: Url;
  buttonText?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ icon: Icon, title, children }) => {
  return (
    <Flex
      direction="column"
      gap={8}
      className="w-full bg-bridal-700 px-12 py-10 text-white sm:w-1/2 sm:gap-12 lg:px-22 lg:py-12"
    >
      <Flex direction="column" gap={8} grow>
        <Flex gap={4}>
          <Icon className="size-12 shrink-0" />
          <Text size="4xl" className="leading-none">
            {title}
          </Text>
        </Flex>

        {children}
      </Flex>
    </Flex>
  );
};
