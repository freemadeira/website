export function secureHex(bytes = 16) {
  // Generates a cryptographically secure random hex string (default 16 bytes = 32 hex chars)
  const array = new Uint8Array(bytes);
  crypto.getRandomValues(array);
  return Array.from(array, (b) => b.toString(16).padStart(2, '0')).join('');
}
