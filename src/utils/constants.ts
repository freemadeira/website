import type { Social } from '@/components/ui/atoms/SocialButton';

export const freeMadeiraSocials: Record<Social, string> = {
  facebook: 'freemadeira',
  github: 'freemadeira',
  instagram: 'freemadeiraorg',
  linkedin: 'company/freemadeira',
  nostr: 'npub1etgqcj9gc6yaxttuwu9eqgs3ynt2dzaudvwnrssrn2zdt2useaasfj8n6e',
  telegram: 'freemadeira',
  x: 'FREEMadeiraOrg',
  youtube: 'freemadeira',
} as const;
export type SocialKeys = keyof typeof freeMadeiraSocials;
