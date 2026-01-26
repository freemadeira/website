import type { Url } from '@/utils/types';
import { ArrowRight } from 'lucide-react';
import { Flex, Link, Text } from '.';
import { IconButton } from './IconButton';

interface DiscreetButtonProps {
  href?: Url;
  children: string | string[];
  onClick?: () => void;
}

export const DiscreetButton: React.FC<DiscreetButtonProps> = ({
  href,
  onClick,
  children,
}) => {
  const handleClick = (event: React.MouseEvent) => {
    if (onClick) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <div className='group w-fit'>
      {href ? (
        <Link href={href}>
          <Flex gap={4} alignItems='center'>
            <Text className='underline-offset-6 group-hover:underline'>
              {children}
            </Text>

            <IconButton fill='filled' className='p-1'>
              <ArrowRight strokeWidth={1.2} size={22} />
            </IconButton>
          </Flex>
        </Link>
      ) : (
        // Repensar esta lógica de ter um div com role button
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        // biome-ignore lint/a11y/useSemanticElements: <explanation>
        <div role='button' onClick={handleClick} tabIndex={0}>
          <Flex gap={4} alignItems='center'>
            <Text className='underline-offset-6 group-hover:underline'>
              {children}
            </Text>

            <IconButton fill='filled' className='p-1'>
              <ArrowRight strokeWidth={1.2} size={22} />
            </IconButton>
          </Flex>
        </div>
      )}
    </div>
  );
};
