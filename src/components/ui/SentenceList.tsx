import { twJoin } from 'tailwind-merge';
import { Flex, Text } from './atoms';

interface Props {
  sentences: string[];
}

export const SentenceList: React.FC<Props> = ({ sentences }) => {
  return (
    <Flex direction="column">
      {sentences.map((sentence, index) => (
        <Text
          key={sentence}
          className={twJoin(
            'border-mountain-mist-200 py-3.5',
            index === 0 && 'pt-0', // remove top padding for the first item
            index < sentences.length - 1 && 'border-b', // add border only if not the last item
            index === sentences.length - 1 && 'pb-0', // remove bottom padding for the last item
          )}
        >
          {sentence}
        </Text>
      ))}
    </Flex>
  );
};
