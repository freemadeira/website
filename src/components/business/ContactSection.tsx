import Image from 'next/image';
import businessContactSectionImage from '@/assets/images/business-contact-section-image.png';
import { Button, Container, Flex, Heading, Text } from '../ui/atoms';

export function ContactSection(): React.ReactElement {
  return (
    <Container className="my-22 sm:mx-22 sm:my-28" size="tight">
      <Flex stackOnMobile gap={12}>
        <Flex direction="column" gap={10} className="w-full sm:w-1/2 sm:justify-center">
          <Heading size="h5">Level up your business</Heading>
          <Text>
            Whether you’re looking to explore how AngelList works with other service providers or
            become a preferred partner for the platform, please fill out the info below.
          </Text>
          <Button as="a" href="mailto:info@freemadeira.org">
            Contact us
          </Button>
        </Flex>

        <div className="relative w-fit">
          <Image
            src={businessContactSectionImage}
            alt="Partnership"
            className="object-cover"
            sizes="(max-width: 605px) 100vw, 50vw" // TODO: Update this when breakpoints are corrected
          />
        </div>
      </Flex>
    </Container>
  );
}
