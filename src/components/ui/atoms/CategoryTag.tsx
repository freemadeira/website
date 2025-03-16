import { Text } from './Text';

type Props = {
  children: React.ReactNode;
};

export function CategoryTag({ children }: Props): React.ReactElement {
  return (
    <Text size="lg" className="leading-[150%] tracking-[1%]">
      {children}
    </Text>
  );
}
