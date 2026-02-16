import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';
import { Container } from '.';
import { Flex } from './Flex';

const colourSectionVariants = tv({
  base: 'pt-18 pb-20 lg:gap-12',
  variants: {
    containerSize: {
      md: 'lg:px-42',
    },
    colour: {
      bridal: 'bg-bridal-50 dark:bg-mountain-mist-950',
    },
  },
  defaultVariants: {
    containerSize: 'md',
    colour: 'bridal',
  },
});

interface ColourSectionProps
  extends VariantProps<typeof colourSectionVariants>,
    React.ComponentProps<typeof Flex> {
  children: React.ReactNode;
  className?: string;
}

export const ColourSection: React.FC<ColourSectionProps> = ({
  className,
  children,
  colour,
  ...props
}) => {
  return (
    <Flex as={Container} className={colourSectionVariants({ className, colour })} {...props}>
      {children}
    </Flex>
  );
};
