import type { Url } from '@/utils/types';
import { ArrowRight } from 'lucide-react';
import { Flex, Link, Text } from '.';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
interface DiscreetButtonProps {
  href?: Url;
  children: string | string[];
  onClick?: () => void;
  className?: string;
}

const iconVariants = tv({
  base: 'rounded-full bg-primary-400 p-1 text-black',
});

export const DiscreetButton: React.FC<DiscreetButtonProps> = ({
  href,
  onClick,
  children,
  className,
}) => {
  const handleClick = (event: React.MouseEvent) => {
    if (onClick) {
      event.preventDefault();
      onClick();
    }
  };

  const InnerContent = () => (
    <Flex gap={4} alignItems='center'>
      <Text className='underline-offset-6 group-hover:underline'>
        {children}
      </Text>

      <div className={iconVariants()}>
        <ArrowRight strokeWidth={1.2} size={22} />
      </div>
    </Flex>
  );

  return (
    <div className={twMerge('group w-fit', className)}>
      {href ? (
        <Link href={href}>{InnerContent()}</Link>
      ) : (
        <button
          type='button'
          onClick={handleClick}
          tabIndex={0}
          className='cursor-pointer'
        >
          {InnerContent()}
        </button>
      )}
    </div>
  );
};
