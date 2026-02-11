import type { Url } from '@/utils/types';

interface BaseMenuItem {
  name: string;
}

export interface LinkMenuItem extends BaseMenuItem {
  href: Url;
  children?: never;
}

export interface ParentMenuItem extends BaseMenuItem {
  href?: never;
  children: HeaderMenuItem[];
}

export type HeaderMenuItem = LinkMenuItem | ParentMenuItem;

export const menuItems: HeaderMenuItem[] = [
  {
    name: 'About',
    children: [
      {
        name: 'FREE Madeira',
        href: '/about',
      },
      {
        name: 'Team & Advisory Board',
        href: '/team-and-advisory-board',
      },
      {
        name: 'Business',
        href: '#',
      },
      {
        name: 'Partnerships',
        href: '/partnerships',
      },
      {
        name: 'Agenda',
        href: '#',
      },
    ],
  },
  {
    name: 'Resources',
    children: [
      {
        name: 'Media',
        href: '#',
      },
      {
        name: 'FM Blog',
        href: '#',
      },
      {
        name: 'Education',
        href: '#',
      },
    ],
  },
  {
    name: 'Bitcoin Atlantis',
    href: 'https://bitcoinatlantis.com/',
  },
];

export const buttonItems = [
  {
    name: 'Learn',
    href: 'https://github.com/freemadeira/education-materials',
  },
  {
    name: 'Shop',
    href: 'https://shop.freemadeira.org',
    primary: true,
  },
];
