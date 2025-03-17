import { CategoryTag, Container, Flex, Heading } from '../ui/atoms';
import { HandCoin } from '../ui/svgs/HandCoin';

export function About(): React.ReactElement {
  return (
    <Flex as={Container} direction="column" className="my-20 sm:my-28">
      <CategoryTag>About us</CategoryTag>

      <Flex className="flex-col-reverse sm:flex-row sm:gap-48" alignItems="end">
        <Flex direction="column" className="w-full gap-8 sm:w-4/7 sm:gap-30">
          <Heading size="h3">
            We support the local community and position Madeira as a technology leader in Bitcoin
            adoption.
          </Heading>
          Discreet button
        </Flex>

        <HandCoin className="mt-14 mb-10 w-full sm:my-0 sm:w-3/7" />
      </Flex>
    </Flex>
  );
}
