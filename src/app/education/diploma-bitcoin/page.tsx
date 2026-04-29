import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { ReactNode } from 'react';

import { Category, FeaturedEducation, TableOfContents } from '@/components/education';
import { MdxChapter } from '@/components/education/content/MdxChapter';
import { MdxPart } from '@/components/education/content/MdxPart';
import { MdxSubject } from '@/components/education/content/MdxSubject';
import { Breadcrumb, Labels } from '@/components/ui';
import { Background, Container, Flex, Heading, Text } from '@/components/ui/atoms';
import { extractTOCFromMdx } from '@/lib/courses/extractTOC';

const mdxComponents = {
  Part: MdxPart,
  Chapter: MdxChapter,
  Subject: MdxSubject,
  p: ({ children }: { children: ReactNode }) => <Text>{children}</Text>,
};

export default function Page() {
  const filePath = path.join(process.cwd(), 'src/content/courses/diploma-bitcoin.mdx');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  const toc = extractTOCFromMdx(content);

  return (
    <>
      <Container>
        <Breadcrumb href="/education" name="Education" />

        <Heading size="h3" className="mt-8 mb-6">
          {data.title}
        </Heading>

        <Flex gap={9}>
          <Flex direction="column" gap={10} grow>
            <Flex justifyContent="between" alignItems="center">
              <Labels tags={data.tags} />

              <Category format={data.format} level={data.level} />
            </Flex>

            <Background className="h-96">Image</Background>

            <TableOfContents items={toc} mobile />

            <Flex direction="column" gap={4} className="text-lg">
              <MDXRemote source={content} components={mdxComponents} />
            </Flex>
          </Flex>

          <TableOfContents items={toc} desktop />
        </Flex>
      </Container>

      <FeaturedEducation />
    </>
  );
}
