import { Flex, Heading, Info, Link, Text } from '@/components/ui/atoms';
import { Labels } from '../Labels';
import { FeaturedCardImage } from './FeaturedCardImage';
import type { FeaturedItem } from './FeaturedGrid';

type EventCardProps = {
  item: FeaturedItem;
};

export function FeaturedCard({ item }: EventCardProps): React.ReactElement {
  const link = item.href ? { as: Link, href: item.href } : {};

  return (
    <Flex
      direction="column"
      gap={5}
      className="group w-[70vw] flex-1 border-dark border-b pb-6 sm:w-auto"
      {...link}
    >
      <FeaturedCardImage imgSrc={item.imgSrc} link={item.href} />

      <Flex direction="column" gap={3} className="grow">
        <Info color="lighter">{item.info}</Info>

        <Heading size="h6">{item.title}</Heading>

        <Text className="grow">{item.description}</Text>
      </Flex>

      <Labels tags={item.tags} />
    </Flex>
  );
}
