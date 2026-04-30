import { Flex, Info } from '../ui/atoms';
import { CategoryInfo, type CategoryInfoProps } from './CategoryInfo';

export const Category = ({ format, level }: CategoryInfoProps): React.ReactElement => {
  return (
    <Flex as={Info} className="uppercase" alignItems="center">
      <CategoryInfo format={format} level={level} />
    </Flex>
  );
};
