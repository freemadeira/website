import { buildKey } from '@/utils/functions';
import type { ContentsTable, EducationContent } from '../types';

// Function to generate table of contents
export function generateTableOfContents(educationContent: EducationContent): ContentsTable {
  return {
    parts: educationContent.content.parts.map((part, partIndex) => ({
      id: buildKey('part', partIndex + 1, part.title),
      title: part.title,
      chapters: part.chapters?.map((chapter, chapterIndex) => ({
        id: buildKey('chapter', chapterIndex + 1, chapter.title),
        title: chapter.title,
        subjects:
          chapter.subjects?.map((subject, subjectIndex) => ({
            id: buildKey('subject', subjectIndex, subject.title),
            title: subject.title,
          })) || [],
      })),
    })),
  };
}
