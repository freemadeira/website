'use client';

import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';
import type { HeaderMenuItem, LinkMenuItem, ParentMenuItem } from '@/data/header';
import { buttonItems, menuItems } from '@/data/header';
import { Button, Flex, Heading, IconButton, Text } from '../ui/atoms';
import { ChevronDown, ChevronRight } from '../ui/svgs';
import { LogoHorizontal } from '../ui/svgs/LogoHorizontal';

function isMenuItem(item: HeaderMenuItem): item is ParentMenuItem {
  return Array.isArray(item.children);
}

function isChildOfMenuItem(item: HeaderMenuItem): item is LinkMenuItem {
  return 'href' in item && typeof item.href === 'string';
}

const menuItemClasses = twJoin(
  'border-b border-b-transparent pb-2 text-dark hover:border-b-dark active:border-b-dark',
  'cursor-pointer ring-0 focus-visible:outline-none data-[headlessui-state*="open"]:border-b-dark',
);

export function HeaderMenu(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeParent, setActiveParent] = useState<ParentMenuItem | null>(null);

  const pathname = usePathname();

  type MobileMenuHeaderProps = {
    isChildrenMenu?: boolean;
    onClose: () => void;
  };

  const MobileMenuHeader: React.FC<MobileMenuHeaderProps> = ({
    isChildrenMenu = false,
    onClose,
  }) => (
    <Flex
      className={twMerge(
        'items-center justify-between bg-white px-4 py-4 sm:justify-end sm:px-0 sm:py-0',
        isChildrenMenu ? 'sm:bg-dark' : 'sm:bg-primary-400',
      )}
    >
      <Link href="/" className="-ms-2 sm:hidden">
        <span className="sr-only">FREE Madeira</span>
        <LogoHorizontal className="h-18" />
      </Link>

      <IconButton
        className="flex aspect-square items-center justify-center"
        onClick={onClose}
        fill="ghost"
        colour="transparent"
      >
        <span className="sr-only">Close menu</span>
        <XIcon
          aria-hidden="true"
          size={40}
          className={twMerge(isChildrenMenu ? 'text-white hover:text-dark' : 'text-dark')}
        />
      </IconButton>
    </Flex>
  );

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
                  className={twJoin(
                    'absolute z-10 mt-5 flex w-60 origin-top-left flex-col divide-y divide-mountain-mist-500',
                    'bg-dark px-6.5 py-2 ring-0 transition focus-visible:outline-none data-closed:scale-95 ',
                    'data-closed:transform data-closed:opacity-0 data-enter:duration-100',
                    'data-leave:duration-75 data-enter:ease-out data-leave:ease-in',
                  )}
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
      {/* Mobile Menu Button */}
      <Flex className="lg:hidden">
        <IconButton
          className="flex aspect-square items-center justify-center"
          onClick={() => setMobileMenuOpen(true)}
          fill="ghost"
          colour="transparent"
        >
          <span className="sr-only">Open main menu</span>
          <MenuIcon size={40} aria-hidden />
        </IconButton>
      </Flex>

      {/* Main Mobile Menu */}
      <Dialog
        open={mobileMenuOpen && !activeParent}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <Flex
          as={DialogPanel}
          direction="column"
          justifyContent="between"
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary-400 sm:max-w-md sm:px-4 sm:py-8"
        >
          {/* Header */}
          <MobileMenuHeader onClose={() => setMobileMenuOpen(false)} />

          {/* Menu Items */}
          <Flex
            direction="column"
            justifyContent="between"
            className="h-full px-4 py-8 sm:pt-2 sm:pb-0"
          >
            <Flex direction="column" className="divide-y divide-dark">
              {menuItems.map((item) => {
                if (isMenuItem(item)) {
                  // Parent with children → open new dialog
                  return (
                    <Flex
                      key={item.name}
                      justifyContent="between"
                      alignItems="center"
                      className="cursor-pointer py-6"
                      onClick={() => setActiveParent(item)}
                    >
                      <Heading size="h4">{item.name}</Heading>
                      <ChevronRight className="h-4 w-8" />
                    </Flex>
                  );
                }

                // Single link item
                if (isChildOfMenuItem(item)) {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Heading
                        size="h4"
                        className={twMerge('py-6', pathname === item.href && 'text-white')}
                      >
                        {item.name}
                      </Heading>
                    </Link>
                  );
                }

                return null;
              })}
            </Flex>

            {/* Buttons */}
            {/* TODO: Fix the buttons styling */}
            <Flex direction="column" className="space-y-2">
              {buttonItems.map((item) => (
                <Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled
                  fill="filled"
                  buttonColor={item.primary ? 'dark' : 'white'}
                  colour={item.primary ? 'white' : 'dark'}
                  className="w-full"
                >
                  {item.name}
                </Button>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Dialog>

      {/* Nested Dialog for Children */}
      {activeParent && (
        <Dialog
          open={mobileMenuOpen && !!activeParent}
          onClose={() => {
            setActiveParent(null);
            setMobileMenuOpen(false);
          }}
          className="lg:hidden"
        >
          <Flex
            as={DialogPanel}
            direction="column"
            justifyContent="start"
            className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-dark sm:max-w-md sm:px-4 sm:py-8"
          >
            {/* Header */}
            <MobileMenuHeader isChildrenMenu onClose={() => setMobileMenuOpen(false)} />

            {/* Active Parent Menu Item */}
            <Flex
              as="button"
              onClick={() => setActiveParent(null)}
              direction="column"
              gap={8}
              className="group cursor-pointer px-4 py-8 sm:pt-4 sm:pb-0"
            >
              <span className="sr-only">Go back</span>
              <ChevronRight color="white" className="-ml-2 h-4 w-8 rotate-180" />
              <Text
                size="lg"
                color="supernova"
                className="w-fit border-transparent border-b pb-2 group-hover:border-primary-400 group-active:border-primary-400"
              >
                {activeParent.name}
              </Text>
            </Flex>

            {/* Children */}
            <Flex
              direction="column"
              className="divide-y divide-mountain-mist-300 px-4 py-8 text-mountain-mist-300 sm:pt-2 sm:pb-0"
            >
              {activeParent.children.map((child) => {
                if (isChildOfMenuItem(child)) {
                  return (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={twMerge(
                        'block py-6 hover:text-white',
                        pathname === child.href && 'text-white',
                      )}
                    >
                      <Heading size="h5">{child.name}</Heading>
                    </Link>
                  );
                }
                return null;
              })}
            </Flex>
          </Flex>
        </Dialog>
      )}
    </>
  );
}
