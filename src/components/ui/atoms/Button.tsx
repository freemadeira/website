import { twJoin } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

import { Flex } from './';
import { ArrowRight } from 'lucide-react';

export const buttonVariants = tv({
  base: twJoin(
    'inline-flex cursor-pointer outline-none justify-center focus-visible:outline-primary-700',
    'rounded-full py-3 px-5.5 transition duration-75',
    'disabled:opacity-30 disabled:cursor-not-allowed',
  ),
  variants: {
    noAnimation: {
      true: '',
      false: 'active:transform active:scale-95',
    },
    fill: {
      filled: 'bg-primary-400 text-dark hover:bg-primary-500/90 active:bg-primary-500/80',
      outlined: twJoin(
        'border border-dark text-dark',
        'hover:border-primary-500/90 hover:bg-primary-500/90 hover:text-dark/90',
        'active:border-primary-500/80 active:bg-primary-500/80',
      ),
      ghost: twJoin(
        'text-primary-700',
        'hover:text-foreground hover:bg-gray-100',
        'aria-checked:bg-primary-700 aria-checked:text-white',
        'aria-expanded:bg-gray-100 aria-expanded:text-gray-400',
      ),
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    align: {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end',
    },
    underlined: {
      true: 'underline underline-offset-2',
    },
    buttonColor: {
      gray: '',
      black: '',
    },
  },
  defaultVariants: {
    fill: 'filled',
    noAnimation: false,
    align: 'center',
  },
});

export interface ButtonProps<T extends React.ElementType>
  extends VariantProps<typeof buttonVariants> {
  as?: T;
  children?: React.ReactNode;
  inputRef?: React.Ref<HTMLButtonElement>;
  discrete?: React.ReactNode;
}

export function Button<T extends React.ElementType = 'button'>({
  children,
  as,
  buttonColor,
  className,
  items,
  noAnimation,
  discrete,
  textColor,
  underlined,
  ...props
}: ButtonProps<T> & Omit<React.ComponentProps<T>, keyof ButtonProps<T>>): React.ReactElement {
  const Component = as || 'button';

  const content = discrete ? (
    <Flex direction="row" gap={1.5}>
      {children}
      <ArrowRight />
    </Flex>
  ) : (
    children
  );

  return (
    <Component
      className={buttonVariants({
        ...props,
        buttonColor,
        noAnimation,
        textColor,
        underlined,
        items,
        className,
      })}
      {...props}
    >
      {content}
    </Component>
  );
}
