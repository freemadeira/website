import { tv, type VariantProps } from 'tailwind-variants';
import { Text, type TextProps } from './Text';

const infoStyles = tv({
  base: 'leading-4 tracking-[4%]',
  variants: {
    color: {
      gray: 'text-mountain-mist-500',
      lighter: 'text-mountain-mist-400',
    },
  },
  defaultVariants: {
    color: 'gray',
  },
});

export type InfoVariants = VariantProps<typeof infoStyles>;
interface InfoProps extends VariantProps<typeof infoStyles>, Omit<TextProps, 'color'> {
  className?: string;
  children: React.ReactNode;
}

export const Info = ({ color, className, children, ...props }: InfoProps): React.ReactElement => {
  const size = { size: props.size || 'sm' };

  return (
    <Text className={infoStyles({ color, className })} {...size} {...props} allCaps>
      {children}
    </Text>
  );
};
