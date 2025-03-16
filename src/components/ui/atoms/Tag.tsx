import { Text } from './';

type TagProps = {
  name: string;
};

export function Tag({ name }: TagProps): React.ReactElement {
  return (
    <Text
      as="span"
      size="sm"
      align="center"
      weight="medium"
      className="bg-supernova-400 px-2.5 py-2 leading-2.5"
    >
      {name}
    </Text>
  );
}
