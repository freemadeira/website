import type React from 'react';
import { isValidElement } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { scrollIntoView } from '@/utils/scrollIntoView';
import { Text } from './Text';

export const scrollButtonVariants = tv({
  base: 'group text-start decoration-1 underline-offset-7 hover:cursor-pointer',
  variants: {
    underline: {
      true: 'underline',
    },
    noDecoration: {
      true: 'hover:no-underline',
      false: 'hover:underline',
    },
  },
  defaultVariants: {
    underline: false,
    noDecoration: false,
  },
});

interface ScrollButtonProps extends VariantProps<typeof scrollButtonVariants> {
  target: string; // The ID of the target element to scroll to
  children: React.ReactNode;
  className?: string;
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  offset?: number; // Optional offset from top in pixels
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ScrollButton = ({
  target,
  children,
  underline,
  noDecoration,
  className,
  behavior = 'smooth',
  block = 'start',
  offset = 0,
  onClick,
  ...props
}: ScrollButtonProps) => {
  const childrenIsText =
    typeof children === 'string' || (isValidElement(children) && children.type === Text);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Call custom onClick if provided
    if (onClick) {
      onClick(event);
    }

    scrollIntoView(target);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={scrollButtonVariants({
        noDecoration: !childrenIsText,
        className,
      })}
      {...props}
    >
      {children}
    </button>
  );
};
