import { ArrowRight } from 'lucide-react';
import { twJoin } from 'tailwind-merge';
import { type VariantProps, tv } from 'tailwind-variants';
import { Flex } from './';

export const buttonVariants = tv({
  base: twJoin(
    'w-fit inline-flex cursor-pointer outline-none justify-center focus-visible:outline-primary-700',
    'rounded-full py-3 px-5.5 transition duration-75 hover:bg-dark hover:text-white',
    'hover:no-underline disabled:opacity-30 disabled:cursor-not-allowed',
  ),
  variants: {
    noAnimation: {
      true: '',
      false: 'active:transform active:scale-95 disabled:active:scale-100',
    },
    fill: {
      filled: 'bg-primary-400 text-dark',
      outlined: twJoin(
        'border border-dark text-dark fill-dark hover:bg-dark hover:text-white hover:fill-white',
      ),
      // TODO: Review this variant
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
    groupHover: {
      true: 'group-hover:bg-dark group-hover:text-white group-active:transform group-active:scale-95',
    },
    colour: {
      white: 'border-white text-white',
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
}

export function Button<T extends React.ElementType = 'button'>({
  children,
  as,
  buttonColor,
  className,
  items,
  noAnimation,
  textColor,
  underlined,
  groupHover,
  ...props
}: ButtonProps<T> & Omit<React.ComponentProps<T>, keyof ButtonProps<T>>): React.ReactElement {
  const Component = as || 'button';

  return (
    <Component
      className={buttonVariants({
        ...props,
        buttonColor,
        noAnimation,
        textColor,
        underlined,
        groupHover,
        items,
        className,
      })}
      {...props}
    >
      {children}
    </Component>
  );
}
