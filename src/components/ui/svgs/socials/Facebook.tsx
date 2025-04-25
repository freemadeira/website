import { Svg, type SvgProps } from '@/components/ui/atoms';

export const Facebook: React.FC<SvgProps> = ({ className, ...props }) => {
  return (
    <Svg viewBox="0 0 10 20" className={className} {...props}>
      <path d="M0.078125 10.6754V7.1816H2.89615V5.42469C2.89615 4.15604 3.30722 3.0772 4.1305 2.18645C4.95378 1.29628 5.95144 0.850906 7.12176 0.850906H9.92092V4.34528H7.12176C6.93938 4.34528 6.77472 4.4459 6.62836 4.64715C6.482 4.8484 6.40882 5.09538 6.40882 5.3881V7.18103H9.92092V10.6748H6.40825V19.1461H2.89558V10.6754H0.078125Z" />
    </Svg>
  );
};
