import { CONFIG } from './constants';

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

export const capitalize = <T extends string>(s: T): Capitalize<T> => {
  if (s.length === 0) return s as Capitalize<T>;
  return (s.charAt(0).toUpperCase() + s.slice(1)) as Capitalize<T>;
};

export const possessive = (name: string) =>
  name.endsWith('s') || name.endsWith('S') ? `${name}'` : `${name}'s`;
