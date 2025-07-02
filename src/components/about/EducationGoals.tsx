import educationGoals from '@/assets/images/education-goals.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { SentenceList } from '../ui';
import { Background, Button, ColourSection, Container, Flex, Heading } from '../ui/atoms';

const sentences = [
  'Increasing financial literacy and knowledge of new decentralised network protocols',
  'Promoting educational workshops and courses for all levels of knowledge',
  'Creating Bitcoin-related content about the Portuguese reality',
  'Becoming the Portuguese reference in the Bitcoin world',
];

export const EducationGoals = (): React.ReactElement => {
  return (
    <Background color="bridal">
      <Container className="gap-12 py-16 lg:gap-20" size="tight" stackOnMobile>
        <div className="relative h-[95vw] w-full md:h-[550px] md:w-1/2">
          <Image
            src={educationGoals}
            alt="Education Goals"
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
            fill
          />
        </div>

        <Flex
          direction="column"
          gap={10}
          className="w-full sm:w-2/5 lg:gap-12"
          justifyContent="center"
        >
          <Heading size="h4">Education goals</Heading>

          <SentenceList sentences={sentences} />

          {/* TODO: Add link to education page */}
          {/* <Button as={Link} href="#"> */}
          {/*   Education */}
          {/* </Button> */}
        </Flex>
      </Container>
    </Background>
  );
};
