import Link from 'next/link';
import { Flex, Heading } from '../ui/atoms';

import Monstera from '@/assets/images/partners/monstera.svg';
import Image from 'next/image';

const partners = [
  {
    name: 'Bitcoin Beach',
    href: 'https://bitcoinbeach.com/',
    logo: Monstera,
  },
  {
    name: 'Madeira Island',
    href: 'https://www.visitmadeira.com/en-gb/',
    logo: Monstera,
  },
  {
    name: 'Madeira Startup',
    href: 'https://madeirastartup.com/',
  },
];

export function Partners(): React.ReactElement {
  return (
    <Flex direction="column" gap={12} className="my-20 sm:my-28">
      <Heading size="h6" className="text-center">
        Our partners are industry leaders
      </Heading>

      <Flex gap={12}>
        {partners.map(
          (partner) =>
            partner.logo && (
              <Link
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 items-center justify-center text-center"
              >
                <Image src={partner.logo} alt={partner.name} />
              </Link>
            ),
        )}
      </Flex>
    </Flex>
  );
}
