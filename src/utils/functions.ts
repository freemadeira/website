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

export function secureHex(bytes = 16) {
  // Generates a cryptographically secure random hex string (default 16 bytes = 32 hex chars)
  const array = new Uint8Array(bytes);
  crypto.getRandomValues(array);
  return Array.from(array, (b) => b.toString(16).padStart(2, '0')).join('');
}

