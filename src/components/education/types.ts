export type EducationContent = {
  title: string;
  description: TextBlock;
  format: 'course' | 'workshop' | 'article';
  level: 'beginner' | 'intermediate' | 'advanced';
  tags?: EducationTag[];
  content: {
    duration?: string;
    parts: Part[];
  };
};

type EducationTag = 'Bitcoin' | 'Economics';

type TextBlock = Paragraph | Array<Paragraph>;
type Paragraph = string;
type ListItem = string;
type List = UnorderedList | OrderedList;
type UnorderedList = ListItem[];
type Object = List | Image;

type Image = {
  type: 'image';
  src: string;
};

type OrderedList = {
  type?: 'ordered';
  items: ListItem[];
};

// Content types
export type Part = {
  title?: string;
  description?: TextBlock;
  duration?: string;
  chapters: Chapter[];
} & Resources;

export type Chapter = {
  title: string;
  description?: TextBlock;
  duration?: string;
  subjects?: Subject[];
} & Resources;

type Subject = {
  title: string;
  description?: TextBlock;
  resources?: Resource[];
} & Resources;

// Resource types
type Resource = VideoResource | PdfResource | LinkResource;

type Resources = {
  resources?: Resource[];
};

type VideoResource = ResourceBase & {
  type: 'video';
  source: string;
  url: string;
};

type PdfResource = ResourceBase & {
  type: 'pdf';
  title: string;
  url: string;
};

type LinkResource = ResourceBase & {
  type: 'article' | 'website';
  url: string;
};

type ResourceBase = {
  title?: string;
  description?: string;
  source?: string;
  url?: string;
};

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
