import { Dot } from 'lucide-react';
import { Flex } from '../ui/atoms';
import type { EducationContent } from './types';

export type CategoryInfoProps = {
  format: EducationContent['format'];
  level: EducationContent['level'];
};

const levelColor: Record<CategoryInfoProps['level'], string> = {
  beginner: 'text-watercourse-400',
  intermediate: 'text-primary-400',
  advanced: 'text-tangerine-400',
} as const;

export const CategoryInfo = ({ format, level }: CategoryInfoProps): React.ReactElement => {
  return (
    <Flex as="span" alignItems="center">
      {format} <Dot strokeWidth={5} className={levelColor[level]} /> {level}
    </Flex>
  );
};
