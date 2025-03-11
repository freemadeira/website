import { Container, Flex } from '@/components/ui/atoms';
import { Newsletter } from './Newsletter';
import { Links } from './Links';
import { Socials } from './Socials';

export function Footer(): React.ReactElement {
  return (
    <Flex as="footer" direction="column" gap={12} className="w-full bg-supernova-400 px-12 py-16">
      {/* TODO: Apply Container component */}
      {/* <Container size='lg'> */}
      {/* TODO: Fix when we can use responsive variants */}
      <Flex gap={12} alignItems="start" stackOnMobile>
        <Newsletter />

        <Links />

        <Socials />
      </Flex>
      <Flex direction="column" gap={8}>
        <div className="border-dark border-y-[1.5px] py-8">FREE MADEIRA</div>

        {/* TODO: Fix when we can use responsive variants */}
        <Flex justifyContent="between" gap={6} stackOnMobile>
          <Flex gap={6}>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </Flex>

          <p>© 2025 FREE Madeira. All rights reserved</p>
        </Flex>
      </Flex>
      {/* </Container> */}
    </Flex>
  );
}
