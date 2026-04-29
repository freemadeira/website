import { ContributeButtons } from '../ui';
import { Background, Container, Flex, Heading } from '../ui/atoms';
import { FingerTouch } from '../ui/svgs';

export function Contribute(): React.ReactElement {
  return (
    <Background color="bridal">
      <Flex
        alignItems="center"
        className="gap-16 pt-12 md:max-w-2xl md:flex-row md:pt-0 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl"
        as={Container}
        direction="column"
        justifyContent="between"
      >
        <Flex direction="column" className="w-full gap-8 md:w-3/7 md:gap-14" alignItems="start">
          <Heading size="h4">Do you want to be part of the change?</Heading>

          <ContributeButtons />
        </Flex>

        <Flex justifyContent="center" grow className="md:pt-10">
          <FingerTouch className="mx-8 w-full md:h-[357px]" />
        </Flex>
      </Flex>
    </Background>
  );
}
