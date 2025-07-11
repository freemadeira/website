import { Button, Container, Flex, Heading, Link } from './atoms';

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
  return (
    <Container
      size="tight"
      direction="column"
      gap={12}
      className="mt-32 mb-28 md:flex-row"
      alignItems="center"
    >
      <Flex direction="column" gap={6} className="md:w-[53%]">
        <Heading size="h4">{title}</Heading>
        <Heading size="h6">{children}</Heading>

        {buttonText && buttonLink && (
          <Button as={Link} href={buttonLink} className="mt-5">
            {buttonText}
          </Button>
        )}
      </Flex>

      <Illustration className="md:w-[47%]" />
    </Container>
  );
};
