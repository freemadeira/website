import { ContributeButtons } from '../ui';
import { Background, Container, Flex, Heading } from '../ui/atoms';
import { FingerTouch } from '../ui/svgs';

export function Contribute(): React.ReactElement {
  return (
    <Background color="bridal">
      <Flex
        alignItems="center"
        className="gap-16 pt-12 sm:flex-row sm:gap-44 sm:px-42 sm:pt-0"
        as={Container}
        direction="column"
      >
        <Flex direction="column" className="w-full gap-8 sm:w-3/7 sm:gap-14">
          <Heading size="h4">Do you want to be part of the change?</Heading>

          <ContributeButtons />
        </Flex>

        <Flex justifyContent="center" grow className="sm:pt-10">
          <FingerTouch className="mx-8 w-full sm:h-[357px]" />
        </Flex>
      </Flex>
    </Background>
  );
}
