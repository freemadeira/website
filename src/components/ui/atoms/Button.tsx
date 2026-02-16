import { twJoin } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
  base: twJoin(
    'inline-flex w-fit cursor-pointer justify-center outline-none focus-visible:outline-primary-700',
    'rounded-full px-5.5 py-3 transition duration-75',
    'hover:no-underline disabled:cursor-not-allowed disabled:opacity-30',
  ),
  variants: {
    noAnimation: {
      false:
        'active:scale-95 active:transform disabled:active:scale-100 group-active:scale-95 group-active:transform',
    },
    fill: {
      filled: 'bg-primary-400',
      outlined: 'border',
      // TODO: Review this variant
      ghost: twJoin(
        'text-primary-700',
        'hover:bg-gray-100 hover:text-foreground',
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
      dark: 'bg-dark',
      white: 'bg-white',
    },
    // This colour refers to text colour or details colour
    colour: {
      dark: twJoin(
        'border-dark text-dark hover:bg-dark hover:fill-white hover:text-white',
        'group-hover:bg-dark group-hover:fill-white group-hover:text-white',
        'dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-dark',
        'disabled:hover:bg-transparent disabled:hover:fill-dark disabled:hover:text-dark',
        'dark:disabled:hover:bg-transparent dark:disabled:hover:fill-white dark:disabled:hover:text-white',
      ),
      white: twJoin(
        'border-white text-white hover:bg-white hover:text-dark group-hover:bg-white group-hover:text-dark',
        'disabled:hover:bg-transparent disabled:hover:fill-white disabled:hover:text-white',
      ),
      transparent: 'text-dark hover:bg-mountain-mist-50',
    },
  },
  defaultVariants: {
    fill: 'filled',
    noAnimation: false,
    align: 'center',
    colour: 'dark',
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
  className,
  noAnimation,
  buttonColor,
  underlined,
  fill,
  size,
  align,
  colour,
  ...props
}: ButtonProps<T> & Omit<React.ComponentProps<T>, keyof ButtonProps<T>>): React.ReactElement {
  const Component = as || 'button';

  return (
    <Component
      className={buttonVariants({
        ...props,
        noAnimation,
        underlined,
        fill,
        buttonColor,
        size,
        align,
        colour,
        className,
      })}
      {...props}
    >
      {children}
    </Component>
  );
}
