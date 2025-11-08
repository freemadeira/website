import { type VariantProps, tv } from 'tailwind-variants';

// TODO: Rethink variants
const textVariants = tv({
  base: 'font-main',
  variants: {
    as: {
      span: 'inline',
      div: 'block',
      label: 'inline',
      p: 'inline-block',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    color: {
      gray: 'text-mountain-mist-500',
      muted: 'text-muted',
    },
    muted: {
      true: 'text-muted',
    },
    weight: {
      bold: 'font-bold',
      semibold: 'font-semibold',
      medium: 'font-medium',
      light: 'font-light',
      thin: 'font-thin',
      normal: 'font-normal',
    },
    size: {
      inherit: 'text-[length:inherit]',
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
    truncate: {
      true: 'truncate',
    },
    pretty: {
      true: 'text-pretty',
    },
    allCaps: {
      true: 'uppercase',
    },
    font: {
      monospace: 'font-mono',
    },
  },
  defaultVariants: {
    as: 'p',
    align: 'left',
    size: 'inherit',
  },
});

export interface TextProps extends VariantProps<typeof textVariants> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Text({
  as = 'p',
  align,
  size,
  weight,
  muted,
  color,
  pretty,
  allCaps,
  font,
  truncate,
  children,
  className,
  ...props
}: TextProps): React.ReactElement {
  const Tag = as;

  return (
    <Tag
      className={textVariants({
        align,
        size,
        weight,
        muted,
        color,
        pretty,
        allCaps,
        truncate,
        font,
        className,
      })}
      {...props}
    >
      {children}
    </Tag>
  );
}
