import { ArrowDownToLine } from 'lucide-react';
import Link from 'next/link';
import { twJoin } from 'tailwind-merge';
import { SentenceList } from '../ui';
import { Button, CategoryTag, Container, Flex, Heading, IconButton, Text } from '../ui/atoms';
import { Newspaper, OrangeFile } from '../ui/svgs';
import { DownloadCard } from './DownloadCard';

const sentences = [
  'We promote local Bitcoin Education',
  'We support Bitcoin adoption in Portugal, particularly in the Madeira Archipelago',
  'We assist the local community, both individuals and companies, during this monetary transition',
  'We position the Madeira Archipelago as a technology leader, attracting local and international investment',
  'We support energy sustainability by contributing to local mining projects based on sustainable energy',
];

export function WhoWeAre(): React.ReactElement {
  return (
    <Flex
      as={Container}
      direction="column"
      gap={12}
      className="my-24 bg-bridal-50 pt-18 pb-20 sm:px-42 lg:gap-12 dark:bg-mountain-mist-950"
    >
      <CategoryTag>Who are we</CategoryTag>

      <Flex gap={8} direction="column" className="mb-4 lg:mb-7 lg:flex-row">
        <Flex direction="column" gap={8} justifyContent="between" className="flex-3/5">
          <Heading size="h4" className="dark:text-white">
            FREE stands for Fórum Regional para a Educação Económica — Regional Forum for Economic
            Education
          </Heading>

          {/* TODO: Add button */}
          {/* <Button as={Link} href="#"> */}
          {/*   Our Mission */}
          {/* </Button> */}
        </Flex>

        <Flex direction="column" gap={8} className="flex-2/5 lg:gap-18">
          <SentenceList sentences={sentences} />
        </Flex>
      </Flex>

      <Flex direction="column" gap={5} className="w-full lg:flex-row lg:gap-8">
        {/* TODO: Add card with FREE Whitepaper */}
        {/* <DownloadCard */}
        {/*   title="FREE Madeira Whitepaper" */}
        {/*   href="#" */}
        {/*   image={() => <Newspaper className="absolute right-5 bottom-0 h-11/12" />} */}
        {/* /> */}

        <DownloadCard
          title="Media kit for all things FREE"
          href="https://freemadeira.s3.eu-west-3.amazonaws.com/FREE_Madeira-Media_Kit.zip"
          image={() => <OrangeFile className="absolute right-12 bottom-0 h-full" />}
        />
      </Flex>
    </Flex>
  );
}
