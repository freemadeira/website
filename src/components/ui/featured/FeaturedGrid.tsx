import type { Category } from '@/components/education';
import { Container, Flex, Heading } from '../atoms';
import type { LabelTag } from '../Labels';
import { FeaturedCard } from './FeaturedCard';

export interface FeaturedItem {
  info: string | ReturnType<typeof Category>;
  title: string;
  description: string;
  tags: LabelTag[];
  imgSrc?: string;
  href?: string;
}

type Props = {
  title?: string;
  items: FeaturedItem[];
};

export function FeaturedGrid({ title, items }: Props): React.ReactElement {
  return (
    <Container wrapperClasses="mb-16 px-0" className="gap-7">
      {title && (
        <Heading size="h5" className="mx-4 sm:mx-0">
          {title}
        </Heading>
      )}

      <div className="no-scrollbar overflow-x-auto">
        <Flex gap={8} className="w-fit overflow-x-auto px-4 sm:px-0">
          {items.map((item) => (
            <FeaturedCard key={item.info + item.title} item={item} />
          ))}
        </Flex>
      </div>
    </Container>
  );
}
