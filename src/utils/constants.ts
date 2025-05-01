import type { Social } from '@/components/ui/atoms/SocialButton';

// These IDs are used to add subscribers to groups on MailerLite, based on subscription source and preferred language
export const MAILERLITE_WEBSITE_GROUP_ID = '153157474249082044'; // Group ID for website subscribers
export const MAILERLITE_PORTUGUESE_GROUP_ID = '153161515456792037'; // Group ID for Portuguese language
export const MAILERLITE_ENGLISH_GROUP_ID = '153161521070868114'; // Group ID for English language

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
