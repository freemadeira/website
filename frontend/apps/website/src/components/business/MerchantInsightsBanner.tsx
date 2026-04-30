import { Flex, Heading, type SvgProps } from '../ui/atoms';

interface Props {
  title: string;
  image: React.ComponentType<SvgProps>;
}

export const MerchantInsightsBanner: React.FC<Props> = ({ title, image: Illustration }) => {
  return (
    <div className="group relative mx-4 mt-22 flex-1 bg-bridal-700 px-4 pt-8 sm:mt-28 sm:p-7">
      <Flex stackOnMobile direction="column">
        <Heading size="h4" className="z-10 w-full pb-8 text-white sm:w-3/4 sm:p-22">
          {title}
        </Heading>
        <Illustration />
      </Flex>
    </div>
  );
};
