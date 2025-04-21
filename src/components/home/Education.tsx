import { Container, Flex, Heading, Text } from '@/components/ui/atoms';
import { CategoryTag } from '@/components/ui/atoms/CategoryTag';
import { Coin } from '@/components/ui/svgs';

export function Education(): React.ReactElement {
  return (
    <Container outer>
      <Flex
        justifyContent="around"
        className="relative z-0 my-24 flex-col gap-6 overflow-hidden bg-bridal-50 p-6 pt-28 sm:my-22 sm:flex-row sm:gap-8 sm:p-28 sm:pt-28 dark:bg-mountain-mist-950"
      >
        <Coin className="-z-10 sm:-translate-y-1/2 absolute top-0 left-0 p-8 sm:top-1/2 sm:right-0 sm:h-[140%] sm:translate-x-44" />

        <Flex direction="column" className="w-full gap-4 sm:w-3/5 sm:gap-8">
          <CategoryTag>Education</CategoryTag>

          <Heading size="h3">Expand your knowledge on Bitcoin</Heading>
        </Flex>

        <Flex direction="column" gap={8} justifyContent="end" className="mb-2 w-full sm:w-2/5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>

          {/* TODO: Add button */}
        </Flex>
      </Flex>
    </Container>
  );
}
