import type { UrlObject as NodeUrlObject } from 'node:url';

type UrlObject = NodeUrlObject & {
  href: string;
};
export type Url = string | UrlObject;
export type hrefTarget = '_blank' | '_self';

// Table of Contents types
export type ContentsTable = {
  parts: PartTOC[];
};

export type PartTOC = {
  id: string;
  title?: string;
  chapters?: ChapterTOC[];
};

export type ChapterTOC = {
  id: string;
  title: string;
  subjects?: SubjectTOC[];
};

export type SubjectTOC = {
  id: string;
  title: string;
};
