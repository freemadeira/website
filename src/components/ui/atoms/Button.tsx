import { twJoin } from 'tailwind-merge';
import { type VariantProps, tv } from 'tailwind-variants';

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
      ghost: 'p-0',
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
      none: '',
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
  buttonColor,
  className,
  items,
  noAnimation,
  textColor,
  underlined,
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
        items,
        className,
      })}
      {...props}
    >
      {children}
    </Component>
  );
}
