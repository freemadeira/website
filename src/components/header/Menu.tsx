'use client';

import { Dialog, DialogPanel } from '@headlessui/react';
import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';
import { Button, Flex } from '../ui/atoms';
import { LogoHorizontal } from '../ui/svgs/LogoHorizontal';

interface MenuItem {
  name: string;
  href: string;
}

const menuItems: MenuItem[] = [
  // {
  //   name: 'About',
  //   href: '/about',
  // },
  // {
  //   name: 'Madeira',
  //   href: '#',
  // },
  // {
  //   name: 'Resources',
  //   href: '#',
  // },
];

const buttonItems = [
  // {
  //   name: 'Learn',
  //   href: 'https://shop.freemadeira.org',
  // },
  {
    name: 'Shop',
    href: 'https://shop.freemadeira.org',
  },
];

const menuItemClasses = 'text-dark hover:text-primary-900 active:text-primary-950';
const mobileMenuItemClasses = twJoin(menuItemClasses, 'block py-2 text-4xl/9');
const menuIconClasses =
  '-m-2.5 cursor-pointer text-dark hover:text-primary-900 active:text-primary-950';

export function Menu(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Flex className="lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className={twJoin(menuIconClasses, 'p-2.5')}
        >
          <span className="sr-only">Open main menu</span>
          <MenuIcon size={40} aria-hidden />
        </button>
      </Flex>

      <Flex gap={8} className="hidden lg:flex" alignItems="center">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href} className={menuItemClasses}>
            {item.name}
          </Link>
        ))}

        <Flex gap={4}>
          <Button
            as={Link}
            href="https://shop.freemadeira.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled
          >
            Learn
          </Button>

          <Button
            as={Link}
            href="https://shop.freemadeira.org"
            target="_blank"
            rel="noopener noreferrer"
            fill="outlined"
          >
            Shop
          </Button>
        </Flex>
      </Flex>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <Flex
          as={DialogPanel}
          direction="column"
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-dark/10"
        >
          <Flex className="items-center justify-between sm:justify-end">
            <Link href="/" className="-ms-2 sm:hidden">
              <span className="sr-only">FREE Madeira</span>
              <LogoHorizontal className="h-18" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 cursor-pointer text-dark hover:text-primary-900 active:text-primary-950"
            >
              <span className="sr-only">Close menu</span>
              <XIcon aria-hidden="true" size={40} />
            </button>
          </Flex>

          <Flex
            direction="column"
            justifyContent="between"
            className="-my-6 mt-6 flow-root h-full grow divide-y divide-dark/10"
          >
            <Flex direction="column" className="grow space-y-2 py-6">
              {menuItems.map((item) => (
                <Link key={item.name} href={item.href} className={mobileMenuItemClasses}>
                  {item.name}
                </Link>
              ))}
            </Flex>

            <Flex direction="column" className="sticky bottom-0 space-y-2 bg-white py-6">
              {buttonItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={twMerge(
                    mobileMenuItemClasses,
                    'text-primary-900 hover:text-primary-800',
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Dialog>
    </>
  );
}
