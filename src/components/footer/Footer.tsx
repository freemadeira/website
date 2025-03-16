import { Container, Flex } from '@/components/ui/atoms';
import { FreeMadeira } from './FreeMadeira';
import { Links } from './Links';
import { Newsletter } from './Newsletter';
import { Socials } from './Socials';

export function Footer(): React.ReactElement {
  return (
    <footer className='border-dark bg-supernova-400 fill-dark text-dark dark:border-supernova-400 dark:bg-dark dark:fill-supernova-400 dark:text-supernova-400'>
      <Flex as={Container} direction="column" gap={12} className="py-16">
        <Flex gap={12} alignItems="start" stackOnMobile>
          <Newsletter />

          <Links />

          <Socials />
        </Flex>
        <Flex direction="column" gap={8}>
          <FreeMadeira />

          <Flex justifyContent="between" gap={6} stackOnMobile className="text-sm">
            <Flex gap={6}>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </Flex>

            <p>© 2025 FREE Madeira. All rights reserved</p>
          </Flex>
        </Flex>
      </Flex>
    </footer>
  );
}
