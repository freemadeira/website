import { twMerge } from 'tailwind-merge';
import { Text } from './Text';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function CategoryTag({ className, children }: Props): React.ReactElement {
  return (
    <Text size="lg" className={twMerge('flex items-center leading-[150%]', className)}>
      {children}
    </Text>
  );
}
