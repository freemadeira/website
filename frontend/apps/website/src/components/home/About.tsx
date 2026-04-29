import { Button, CategoryTag, Container, DiscreetButton, Flex, Heading } from '../ui/atoms';
import { HandCoin } from '../ui/svgs/HandCoin';

export function About(): React.ReactElement {
  return (
    <Flex as={Container} direction="column" className="my-20 sm:my-28">
      <CategoryTag>About us</CategoryTag>

      <Flex className="flex-col-reverse sm:flex-row sm:gap-48" alignItems="end">
        <Flex direction="column" gap={12} className="h-full w-full sm:w-4/7" justifyContent="end">
          <div className="grow">
            <Heading size="h3" className="grow">
              Knowledge is the catalyst for change. By providing monetary education to all, we forge
              a path to economic empowerment.
            </Heading>
          </div>

          <DiscreetButton href="/about">Our mission</DiscreetButton>
        </Flex>

        <HandCoin className="mt-14 mb-10 w-full sm:my-0 sm:w-3/7" />
      </Flex>
    </Flex>
  );
}
