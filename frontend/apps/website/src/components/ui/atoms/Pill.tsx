import { Text } from './';

type PillProps = {
  info: string;
};

export function Pill({ info }: PillProps): React.ReactElement {
  return (
    <Text
      as="span"
      color="green"
      size="sm"
      className="flex w-fit items-center gap-2 rounded-full border border-mountain-mist-200 px-2.5 py-2 text-mountain-mist-500 leading-2.5"
    >
      <div className="h-3 w-3 rounded-full bg-orange-500" />
      {info}
    </Text>
  );
}
