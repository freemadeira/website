import Image from 'next/image';
import Link from 'next/link';
import { twJoin, twMerge } from 'tailwind-merge';
import { Flex, Heading, Svg, type SvgProps } from '../ui/atoms';

import {
  BitcoinBrabant,
  Cryptosteel,
  Energy21,
  OpenSats,
  Paystand,
  Vulcan21,
  Zaprite,
} from '@/components/ui/svgs/partners';

interface Partner {
  name: string;
  href: string;
  logo: React.FC<SvgProps>;
  width?: string;
}

const partners: Partner[] = [
  {
    name: 'Paystand',
    href: 'https://www.paystand.org/',
    logo: Paystand,
    width: 'w-56 sm:w-64',
  },
  {
    name: 'OpenSats',
    href: 'https://opensats.org/',
    logo: OpenSats,
  },
  {
    name: 'Zaprite',
    href: 'https://zaprite.com/',
    logo: Zaprite,
  },
  {
    name: 'Crtpyosteel',
    href: 'https://cryptosteel.com/',
    logo: Cryptosteel,
  },
  {
    name: '21 Energy',
    href: 'https://21energy.com/',
    logo: Energy21,
  },
  {
    name: 'Bitcoin Brabant',
    href: 'https://bitcoinbrabant.com/',
    logo: BitcoinBrabant,
  },
  {
    name: 'Vulcan21',
    href: 'https://vulcan21.com/',
    logo: Vulcan21,
    width: 'w-16 sm:w-20',
  },
];

const PartnerLogos: React.FC<{ className?: string }> = ({ className }) => (
  <Flex
    gap={10}
    className={twJoin(
      'group-hover:paused w-fit animate-loop-scroll items-center pe-10 sm:gap-20 sm:pe-20',
      className,
    )}
  >
    {partners.map((partner) => (
      <Link
        key={partner.name}
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center"
      >
        <partner.logo
          className={twMerge('w-44 fill-dark opacity-50 hover:opacity-100 sm:w-52', partner.width)}
        />
      </Link>
    ))}
  </Flex>
);

export function Partners(): React.ReactElement {
  return (
    <Flex direction="column" gap={12} className="my-20 sm:my-28">
      <Heading size="h6" className="text-center">
        Our partners are industry leaders
      </Heading>

      <Flex className="group overflow-hidden">
        <PartnerLogos />
        <PartnerLogos className="aria-hidden" />
      </Flex>
    </Flex>
  );
}
