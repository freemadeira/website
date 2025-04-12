interface SvgProps extends React.SVGProps<SVGSVGElement> {
  viewBox?: string;
  className?: string;
  fill?: string;
}

export const Svg: React.FC<SvgProps> = ({ viewBox, fill, className, children, ...props }) => {
  return (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill={fill}
      {...props}
    >
      {children}
    </svg>
  );
};
