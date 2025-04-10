import Link from 'next/link';
import { Container, Flex } from '../ui/atoms';
import { LogoHorizontal } from '../ui/svgs';
import { Menu } from './Menu';

export function Header(): React.ReactElement {
  return (
    <header>
      <Container>
        <Flex as="nav" aria-label="Main" gap={12} className="py-6" justifyContent="between">
          <Link href="/">
            <LogoHorizontal className="h-18" />
          </Link>

          <Menu />
        </Flex>
      </Container>
    </header>
  );
}
