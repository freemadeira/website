import type { HTMLAttributes } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

export const headingStyles = tv({
  base: 'max-w-full font-main font-normal',
  variants: {
    size: {
      h1: 'text-[104px] leading-[120px] font-medium',
      // h2: 'text-3xl',
      h3: 'text-[56px] leading-[64px]',
      h4: 'text-[40px] leading-[51px]',
      h5: 'text-[32px] leading-normal',
      h6: 'text-2xl leading-[150%]',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    weight: {
      extralight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      bold: 'font-bold',
      semibold: 'font-semibold',
      extrabold: 'font-extrabold',
    },
    truncate: {
      true: 'truncate',
    },
    balance: {
      true: 'text-balance',
    },
  },
  defaultVariants: {
    size: 'h1',
    align: 'left',
  },
});

export type HeadingVariants = VariantProps<typeof headingStyles>;

interface HeadingProps extends HeadingVariants, HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  id?: string;
}
export function Heading({
  className,
  size = 'h1',
  align,
  weight,
  truncate,
  balance,
  children,
  ...props
}: HeadingProps): React.ReactElement {
  const Tag = size;

  return (
    <Tag
      className={headingStyles({ size, align, weight, truncate, balance, className })}
      {...props}
    >
      {truncate ? <span className='truncate'>{children}</span> : children}
    </Tag>
  );
}
