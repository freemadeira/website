import { twJoin } from 'tailwind-merge';
import { type VariantProps, tv } from 'tailwind-variants';

export const buttonVariants = tv({
  base: twJoin(
    'w-fit inline-flex cursor-pointer outline-none justify-center focus-visible:outline-primary-700',
    'rounded-full py-3 px-5.5 transition duration-75',
    'hover:no-underline disabled:opacity-30 disabled:cursor-not-allowed',
  ),
  variants: {
    noAnimation: {
      false:
        'active:transform active:scale-95 disabled:active:scale-100 group-active:transform group-active:scale-95',
    },
    fill: {
      filled: 'bg-primary-400',
      outlined: 'border',
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
    colour: {
      dark: twJoin(
        'border-dark text-dark hover:bg-dark hover:text-white hover:fill-white',
        'group-hover:bg-dark group-hover:text-white group-hover:fill-white',
        'dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-dark',
        'disabled:hover:bg-transparent disabled:hover:text-dark disabled:hover:fill-dark',
        'dark:disabled:hover:bg-transparent dark:disabled:hover:text-white dark:disabled:hover:fill-white',
      ),
      white: twJoin(
        'border-white text-white hover:bg-white hover:text-dark group-hover:bg-white group-hover:text-dark',
        'disabled:hover:bg-transparent disabled:hover:text-white disabled:hover:fill-white',
      ),
      transparent: twJoin(
        'border-transparent text-dark hover:bg-mountain-mist-50 hover:text-dark',
      )
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
