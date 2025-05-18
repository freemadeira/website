import Link from 'next/link';
import { Button, Container, Flex, Heading } from './atoms';
import type { Planet } from './svgs';
import { isExternalUrl } from '@/utils/functions';

type Props = {
  title: string;
  image: React.FC<React.SVGProps<SVGSVGElement>>;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
  reverse?: boolean;
  children: string;
};

export const SplitHighlight: React.FC<Props> = ({
  title,
  image: Illustration,
  imageAlt = '', // TODO: Add alt text to the image or remove this prop
  buttonText,
  buttonLink,
  reverse = false, // TODO: Add logic to reverse the order of the image and text
  children,
}) => {
  const externalUrl = isExternalUrl(buttonLink);

  return (
    <Container tight direction="row" gap={12} className="mt-32 mb-28" alignItems="center">
      <Flex direction="column" gap={6} className="w-[53%]">
        <Heading size="h4">{title}</Heading>
        <Heading size="h6">{children}</Heading>

        {buttonText && buttonLink && (
          <Button
            as={Link}
            href={buttonLink}
            target={externalUrl ? '_blank' : undefined}
            rel={externalUrl ? 'noopener noreferrer' : undefined}
            className="mt-5"
          >
            {buttonText}
          </Button>
        )}
      </Flex>

      <Illustration className="w-[47%]" />
    </Container>
  );
};
