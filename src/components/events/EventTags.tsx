import { Flex, Tag } from '@/components/ui/atoms';

type EventTagsProps = {
  tags: string[];
};

export function EventTags({ tags }: EventTagsProps): React.ReactElement {
  return (
    <Flex gap={2.5}>
      {tags.map((tag: string) => (
        <Tag key={tag} name={tag} />
      ))}
    </Flex>
  );
}
