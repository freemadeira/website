import NextLink from 'next/link';
import { isValidElement } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { externalUrl } from '@/utils/functions';
import type { hrefTarget, Url } from '@/utils/types';
import { Text } from '.';

const linkVariants = tv({
  base: 'w-fit decoration-1 underline-offset-7',
  variants: {
    underline: {
      true: 'underline hover:text-dark dark:hover:text-primary-400',
    },
    noDecoration: {
      true: 'hover:no-underline',
      false: 'hover:underline',
    },
    size: {
      sm: 'text-sm',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    underline: false,
    noDecoration: false,
  },
});

interface LinkProps
  extends VariantProps<typeof linkVariants>,
    React.ComponentProps<typeof NextLink> {
  href: Url;
  target?: hrefTarget;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  target,
  children,
  underline,
  noDecoration,
  size,
  className,
  ...props
}) => {
  const isExternalUrl = externalUrl(typeof href === 'string' ? href : href.href); // If href is a UrlObject, use its href property
  const childrenIsText =
    typeof children === 'string' || (isValidElement(children) && children.type === Text); // isValidElement check to ensure children is a React element and avoid runtime errors

  return (
    <NextLink
      href={href}
      target={target || (isExternalUrl ? '_blank' : undefined)}
      rel={target === '_blank' || isExternalUrl ? 'noopener noreferrer' : undefined}
      className={linkVariants({
        underline,
        noDecoration: !childrenIsText, // Only possibly decorate if children is a string
        size,
        className,
      })}
      {...props}
    >
      {children}
    </NextLink>
  );
};
