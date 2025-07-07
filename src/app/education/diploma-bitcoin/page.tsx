import { Category, TableOfContents } from '@/components/education';
import { Breadcrumb, Labels, } from '@/components/ui';
import { Background, Container, Flex, Heading } from '@/components/ui/atoms';

export default function Page() {
  return (
    <Container>
      <Breadcrumb href="/education" name="Education" />

      <Heading size="h3" className="mt-8 mb-6">
        Diploma Bitcoin
      </Heading>

      <Flex gap={9}>
        <Flex direction="column" gap={10} grow>
          <Flex justifyContent="between" alignItems="center">
            <Labels tags={['Bitcoin', 'Economics']} />

            <Category format="course" level="beginner" />
          </Flex>

          <Background className="h-96">Image</Background>

          <Container size="extraTight">
            Sure, you know you go to work to earn money, and you need money to buy food and pay for
            housing, amongst other essentials. But have you ever stopped to think about what it is,
            where it comes from and how it really works?
          </Container>
        </Flex>

        <TableOfContents />
      </Flex>
    </Container>
  );
}
