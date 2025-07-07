import { Flex, Tag } from '@/components/ui/atoms';
import { capitalize } from '@/utils/functions';

export type LabelTag = string;

type TagsProps = {
  tags: LabelTag[];
};

export function Labels({ tags }: TagsProps): React.ReactElement {
  return (
    <Flex gap={2.5}>
      {tags.map((tag: string) => (
        <Tag key={tag} name={capitalize(tag)} />
      ))}
    </Flex>
  );
}
