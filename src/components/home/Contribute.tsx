import { Container, Flex, Heading } from '../ui/atoms';
import { FingerTouch } from '../ui/svgs';

export function Contribute(): React.ReactElement {
  return (
    <Flex
      alignItems="center"
      className="flex-col gap-16 bg-bridal-50 pt-12 sm:flex-row sm:gap-44 sm:px-42 sm:pt-0 dark:bg-mountain-mist-800"
      as={Container}
    >
      <Flex direction="column" className="w-full gap-8 sm:w-3/7 sm:gap-14">
        <Heading size="h4">Find out how you can contribute to our success</Heading>

        <Flex gap={4}>
          <p>Button</p>
          <p>Button</p>
        </Flex>
      </Flex>

      <Flex justifyContent="center" grow className="sm:pt-10">
        <FingerTouch className="mx-8 w-full sm:h-[357px]" />
      </Flex>
    </Flex>
  );
}
