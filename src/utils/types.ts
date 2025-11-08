import type { UrlObject as NodeUrlObject } from 'node:url';

type UrlObject = NodeUrlObject & {
  href: string;
};
export type Url = string | UrlObject;
export type hrefTarget = '_blank' | '_self';
