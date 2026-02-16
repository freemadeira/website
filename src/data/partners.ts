import type { SvgProps } from '@/components/ui/atoms';
import {
  BitcoinBrabant,
  Cryptosteel,
  Energy21,
  OpenSats,
  Paystand,
  Vulcan21,
  Zaprite,
} from '@/components/ui/svgs/partners';
import type { Url } from '@/utils/types';

interface Partner {
  name: string;
  href: Url;
  logo: React.FC<SvgProps>;
  width?: string;
}

export const partners: Partner[] = [
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
