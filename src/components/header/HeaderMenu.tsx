'use client';

import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';
import type { HeaderMenuItem, LinkMenuItem, ParentMenuItem } from '@/data/header';
import { buttonItems, menuItems } from '@/data/header';
import { Button, Flex } from '../ui/atoms';
import { ChevronDown } from '../ui/svgs/ChevronDown';
import { LogoHorizontal } from '../ui/svgs/LogoHorizontal';

function isMenuItem(item: HeaderMenuItem): item is ParentMenuItem {
  return Array.isArray(item.children);
}

function isChildOfMenuItem(item: HeaderMenuItem): item is LinkMenuItem {
  return 'href' in item && typeof item.href === 'string';
}

const menuItemClasses =
  'border-b border-b-transparent pb-2 text-dark hover:border-b-dark active:border-b-dark cursor-pointer ring-0 focus-visible:outline-none data-[headlessui-state*="open"]:border-b-dark';

const mobileMenuItemClasses = twJoin(
  'border-b border-b-transparent pb-2 text-dark hover:border-b-dark active:border-b-dark',
  'block py-2 text-4xl/9',
);

const menuIconClasses =
  '-m-2.5 cursor-pointer text-dark hover:text-primary-900 active:text-primary-950';

export function HeaderMenu(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <>
      {/* Desktop Menu */}
      <Flex gap={8} className="hidden lg:flex" alignItems="center">
        {menuItems.map((item) => {
          if (isMenuItem(item)) {
            return (
              <Menu as="div" key={`menu-${item.name}`} className="relative inline-block">
                <MenuButton className={menuItemClasses}>
                  <Flex gap={2} alignItems="center">
                    {item.name}
                    <ChevronDown className="h-1 w-2" />
                  </Flex>
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute z-10 mt-5 flex w-60 origin-top-left flex-col divide-y divide-mountain-mist-500 bg-dark px-6.5 py-2 ring-0 transition focus-visible:outline-none data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-leave:duration-75 data-enter:ease-out data-leave:ease-in"
                >
                  {item.children.map((child) => {
                    if (isChildOfMenuItem(child)) {
                      return (
                        <MenuItem
                          as={Link}
                          key={child.name}
                          className={({ active }) =>
                            twMerge(
                              'py-4.5 text-mountain-mist-500 hover:text-white active:text-white',
                              active && 'text-white',
                              pathname === child.href && 'text-white',
                            )
                          }
                          href={child.href}
                        >
                          {child.name}
                        </MenuItem>
                      );
                    }
                    return null;
                  })}
                </MenuItems>
              </Menu>
            );
          }

          return (
            <Link target="_blank" key={item.name} href={item.href} className={menuItemClasses}>
              {item.name}
            </Link>
          );
        })}

        <Flex gap={4}>
          {buttonItems.map((item) => (
            <Button
              key={item.name}
              as={Link}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled
              fill={item.primary ? 'filled' : 'outlined'}
            >
              {item.name}
            </Button>
          ))}
        </Flex>
      </Flex>

      {/* Mobile Menu */}
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
