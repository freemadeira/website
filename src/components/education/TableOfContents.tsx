import { Flex, Info } from '../ui/atoms';

export const TableOfContents = (): React.ReactElement => {
  return (
    <Flex direction="column" className="w-[330px]">
      <Info className="flex h-[26px] items-center">Table of Contents</Info>
    </Flex>
  );
};
