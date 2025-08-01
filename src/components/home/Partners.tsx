import type { Url } from '@/utils/types';
import { twJoin, twMerge } from 'tailwind-merge';
import { Flex, Heading, Link, type SvgProps } from '../ui/atoms';

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
  href: Url;
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
    width: 'w-32 sm:w-40',
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
    width: 'w-32 sm:w-40',
  },
  {
    name: 'Bitcoin Brabant',
    href: 'https://bitcoinbrabant.com/',
    logo: BitcoinBrabant,
    width: 'w-36 sm:w-48',
  },
  {
    name: 'Vulcan21',
    href: 'https://vulcan21.com/',
    logo: Vulcan21,
    width: 'w-14 sm:w-20',
  },
];

const PartnerLogos = ({ className }: { className?: string }): React.ReactElement => (
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
        className="flex-shrink-0 text-center"
        aria-label={`Visit ${partner.name}`}
      >
        <partner.logo
          className={twMerge(
            'w-44 fill-dark opacity-50 hover:opacity-100 sm:w-52 dark:fill-white',
            partner.width,
          )}
          title={partner.name}
        />
      </Link>
    ))}
  </Flex>
);

export const Partners = (): React.ReactElement => {
  return (
    <Flex direction="column" gap={12} className="my-20 sm:my-28">
      <Heading size="h6" className="text-center">
        Our partners are industry leaders
      </Heading>

      <Flex className="group overflow-hidden">
        <PartnerLogos />
        {/* Repeated sets prevent gaps during scroll animation on wide displays */}
        <PartnerLogos className="aria-hidden" />
        <PartnerLogos className="aria-hidden" />
        <PartnerLogos className="aria-hidden" />
      </Flex>
    </Flex>
  );
};
