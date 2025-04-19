import { CategoryTag, Container, Flex, Heading } from '../ui/atoms';
import { HandCoin } from '../ui/svgs';

export function About(): React.ReactElement {
  return (
    <Container outer>
      <Flex direction="column" className="my-20 sm:my-28">
        <CategoryTag>About us</CategoryTag>

        <Flex className="flex-col-reverse md:flex-row lg:gap-8 xl:gap-48" alignItems="end">
          <Flex direction="column" className="w-full gap-8 md:w-4/7 md:gap-30">
            <Heading size="h3">
              We support the local community and position Madeira as a technology leader in Bitcoin
              adoption.
            </Heading>
            Discreet button
          </Flex>

          <HandCoin className="mt-14 mb-10 w-full sm:my-0 md:w-3/7" />
        </Flex>
      </Flex>
    </Container>
  );
}
