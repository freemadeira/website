import type { SocialIconProps } from '.';
import { Svg } from '../../atoms/';

export const X: React.FC<SocialIconProps> = ({ className, ...props }) => {
  return (
    <Svg viewBox="0 0 1000.78 936.69" className={className} {...props}>
      <path d="M2.44,0l386.39,516.64L0,936.69h87.51l340.42-367.76,275.05,367.76h297.8l-408.13-545.7L954.57,0h-87.51l-313.51,338.7L300.24,0H2.44ZM131.13,64.46h136.81l604.13,807.76h-136.81L131.13,64.46Z" />
    </Svg>
  );
};
