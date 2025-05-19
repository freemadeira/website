import { CONFIG } from './constants';
import type { Url } from './types';

export function externalUrl(url: string, base = CONFIG.BASE_URL): boolean {
  if (!url) return false;

  const parsedUrl = new URL(url, base);

  if (parsedUrl.protocol !== 'https:' && parsedUrl.protocol !== 'http:') return false;

  try {
    return parsedUrl.origin !== new URL(base).origin;
  } catch {
    return false;
  }
}
