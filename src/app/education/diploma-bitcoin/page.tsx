import {
  Category,
  type EducationContent,
  FeaturedEducation,
  TableOfContents,
} from '@/components/education';
import { Part } from '@/components/education/content/Part';
import { generateTableOfContents } from '@/components/education/table-of-contents/generateTableOfContents';
import { Breadcrumb, Labels } from '@/components/ui';
import { Background, Container, Flex, Heading, Text } from '@/components/ui/atoms';
import { buildKey } from '@/utils/functions';

const course: EducationContent = {
  title: 'Diploma Bitcoin',
  description: [
    'A comprehensive course designed to provide a deep understanding of Bitcoin, its technology, and its economic implications.',
    'Over the course of ten weeks, we will dive into the Bitcoin world.',
  ],
  format: 'course',
  level: 'beginner',
  tags: ['Bitcoin', 'Economics'],
  content: {
    duration: '4 weeks',
    parts: [
      {
        // title: 'Introduction to Bitcoin',
        chapters: [
          {
            title: 'What is Bitcoin?',
            description: 'An overview of Bitcoin and its significance.',
            duration: '1 week',
            subjects: [{ title: 'History of Money' }, { title: 'Bitcoin Basics' }],
          },
          {
            title: 'How Bitcoin Works',
            description: 'Understanding the technology behind Bitcoin.',
            duration: '1 week',
            subjects: [{ title: 'Blockchain Technology' }, { title: 'Mining and Transactions' }],
          },
        ],
      },
      {
        title: 'Bitcoin Economics',
        chapters: [
          {
            title: 'Bitcoin as Money',
            description: 'Exploring Bitcoin’s role as a form of money.',
            duration: '1 week',
            subjects: [{ title: 'Store of Value' }, { title: 'Medium of Exchange' }],
          },
          {
            title: 'The Future of Bitcoin',
            description: 'Discussing the potential future developments in Bitcoin.',
            duration: '1 week',
            subjects: [
              { title: 'Scalability Solutions' },
              { title: 'Regulatory Challenges and a very long line to see how it behaves' },
            ],
          },
        ],
      },
    ],
  },
};

export default function Page() {
  return (
    <>
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

            <TableOfContents items={generateTableOfContents(course)} mobile />

            <Container size="extraTight" gap={4} className="text-lg">
              {/* TODO: Prepare for when description is a string and when it's an array */}
              {course.description.map((paragraph) => (
                <Text key={paragraph}>{paragraph}</Text>
              ))}
            </Container>

            <Flex direction="column">
              {/* Iterate over all course parts to display them with the Part component */}
              {course.content.parts.map((part, index) => {
                const number = index + 1;

                return <Part key={buildKey(number, part.title)} number={number} content={part} />;
              })}
            </Flex>
          </Flex>

          <TableOfContents items={generateTableOfContents(course)} desktop />
        </Flex>
      </Container>

      <FeaturedEducation />
    </>
  );
}
