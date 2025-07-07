import { ChevronLeft } from 'lucide-react';
import { CategoryTag, Link } from './atoms';

interface Props {
  href: string;
  name: string;
}

export const Breadcrumb = ({ href, name }: Props): React.ReactElement => {
  return (
    <Link href={href} className="group">
      <CategoryTag className="w-full text-mountain-mist-500 group-hover:underline">
        <ChevronLeft />
        {name}
      </CategoryTag>
    </Link>
  );
};
