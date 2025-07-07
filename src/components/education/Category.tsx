import { Dot } from 'lucide-react';
import { Flex, Info } from '../ui/atoms';

type Props = {
  format: 'course' | 'workshop' | 'article';
  level: 'beginner' | 'intermediate' | 'advanced';
};

const levelColor: Record<Props['level'], string> = {
  beginner: 'text-watercourse-400',
  intermediate: 'text-primary-400',
  advanced: 'text-tangerine-400',
} as const;

export const Category = ({ format, level }: Props): React.ReactElement => {
  return (
    <Flex as={Info} className="uppercase" alignItems="center">
      {format} <Dot strokeWidth={5} className={levelColor[level]} /> {level}
    </Flex>
  );
};
