import { Container, Flex, Heading } from '@/components/ui/atoms';
import { PortalHands } from '@/components/ui/svgs';

export function Hero(): React.ReactElement {
  return (
    <Flex as={Container} className="flex-col-reverse gap-6 py-12 sm:flex-row sm:gap-10">
      <Flex direction="column" className="w-full gap-6 sm:w-3/5 sm:gap-14">
        <Flex direction="column" className="gap-4 sm:gap-8">
          <Heading size="h1">Bitcoin adoption in Madeira</Heading>

          <Heading size="h6">
            Explore new features across our product offerings for funds, investors, and founders.
          </Heading>
        </Flex>

        {/* TODO: Add button */}
      </Flex>

      <PortalHands className="w-full sm:w-2/5" />
    </Flex>
  );
}
