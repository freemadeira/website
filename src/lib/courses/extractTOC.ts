import { remark } from 'remark';
import remarkMdx from 'remark-mdx';

import type { ContentsTable } from '@/components/education/types';
import { buildKey } from '@/utils/functions';

type MdxJsxAttr = {
  name: string;
  value: string | null | { type: string; value: string };
};

type MdxJsxNode = {
  type: string;
  name: string;
  attributes: MdxJsxAttr[];
  children: MdxJsxNode[];
};

function getAttr(attrs: MdxJsxAttr[], name: string): string | undefined {
  const attr = attrs.find((a) => a.name === name);
  if (!attr || attr.value === null) return undefined;
  if (typeof attr.value === 'string') return attr.value;
  return undefined;
}

export function extractTOCFromMdx(content: string): ContentsTable {
  const tree = remark().use(remarkMdx).parse(content) as any;

  const parts: ContentsTable['parts'] = [];

  for (const node of tree.children as MdxJsxNode[]) {
    if (node.type !== 'mdxJsxFlowElement' || node.name !== 'Part') continue;

    const partTitle = getAttr(node.attributes, 'title');
    const partId = buildKey('part', partTitle);

    const chapters = [];

    for (const child of node.children) {
      if (child.type !== 'mdxJsxFlowElement' || child.name !== 'Chapter') continue;

      const chapterTitle = getAttr(child.attributes, 'title') ?? '';
      const chapterId = buildKey('chapter', chapterTitle);

      const subjects = [];

      for (const grandchild of child.children) {
        if (grandchild.type !== 'mdxJsxFlowElement' || grandchild.name !== 'Subject') continue;

        const subjectTitle = getAttr(grandchild.attributes, 'title') ?? '';
        subjects.push({
          id: buildKey('subject', subjectTitle),
          title: subjectTitle,
        });
      }

      chapters.push({
        id: chapterId,
        title: chapterTitle,
        subjects,
      });
    }

    parts.push({
      id: partId,
      title: partTitle,
      chapters,
    });
  }

  return { parts };
}
