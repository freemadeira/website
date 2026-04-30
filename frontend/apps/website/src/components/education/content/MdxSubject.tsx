import type { ReactNode } from 'react';

import { Text } from '@/components/ui/atoms';
import { buildKey } from '@/utils/functions';

type MdxSubjectProps = {
  title: string;
  children?: ReactNode;
};

export function MdxSubject({ title, children }: MdxSubjectProps) {
  return (
    <div id={buildKey('subject', title)} className="my-4">
      <Text weight="semibold">{title}</Text>
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
}
