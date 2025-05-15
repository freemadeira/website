import type { Url } from '@/utils/types';
import { ArrowDownToLine } from 'lucide-react';
import Link from 'next/link';
import { Flex, Heading, IconButton, Svg, type SvgProps } from '../ui/atoms';

interface Props {
  title: string;
  href: Url;
  illustration: React.FC<SvgProps>;
}

export const DownloadCard: React.FC<Props> = ({ title, href, illustration: Illustration }) => {
  return (
    <Link
      href={href}
      className="group relative size-full h-56 flex-1 overflow-clip bg-white p-7 dark:bg-dark"
    >
      <Flex direction="column" justifyContent="between" className="h-full w-2/5">
        <Heading size="h6" className="z-10">
          {title}
        </Heading>

        <IconButton fill="filled" className="z-10" groupHover>
          <ArrowDownToLine strokeWidth={1} size={34} absoluteStrokeWidth />
        </IconButton>
      </Flex>

      <Illustration />
    </Link>
  );
};
