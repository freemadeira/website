import { isDefined } from './functions';

export const mailerliteHeaders = {
  Authorization: `Bearer ${process.env.MAILERLITE_TOKEN}`,
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

// These IDs are used to add subscribers to groups on MailerLite, based on subscription source and preferred language
export const MAILERLITE_WEBSITE_GROUP_ID = '153157474249082044'; // Group ID for website subscribers
export const MAILERLITE_PORTUGUESE_GROUP_ID = '153161515456792037'; // Group ID for Portuguese language
export const MAILERLITE_ENGLISH_GROUP_ID = '153161521070868114'; // Group ID for English language

export type Language = 'english' | 'portuguese';

const LANGUAGE_GROUPS: { language: Language; groupId: string }[] = [
  { language: 'english', groupId: MAILERLITE_ENGLISH_GROUP_ID },
  { language: 'portuguese', groupId: MAILERLITE_PORTUGUESE_GROUP_ID },
] as const;

// The following are lookup objects used to get a language name from group ID and vice versa
export const GROUP_ID: Record<Language, string> = Object.fromEntries(
  LANGUAGE_GROUPS.map(({ language, groupId }) => [language, groupId]),
) as Record<Language, string>;

export const LANGUAGE: Record<string, Language> = Object.fromEntries(
  LANGUAGE_GROUPS.map(({ language, groupId }) => [groupId, language]),
) as Record<string, Language>;

// These functions are used to convert between arrays of group IDs and language names
export const languagesFromGroupIds = (groupIds: string[]): Language[] =>
  groupIds.map((id) => LANGUAGE[id]).filter(isDefined);

export const groupIdsFromLanguages = (languages: Language[]): string[] =>
  languages.map((lang) => GROUP_ID[lang]).filter(isDefined);
