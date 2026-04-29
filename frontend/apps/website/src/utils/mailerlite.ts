export const mailerliteHeaders = {
  Authorization: `Bearer ${process.env.MAILERLITE_TOKEN}`,
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

// These IDs are used to add subscribers to groups on MailerLite, based on subscription source and preferred language
export const MAILERLITE_WEBSITE_GROUP_ID = '153157474249082044'; // Group ID for website subscribers
export const MAILERLITE_PORTUGUESE_GROUP_ID = '153161515456792037'; // Group ID for Portuguese language
export const MAILERLITE_ENGLISH_GROUP_ID = '153161521070868114'; // Group ID for English language

// If there ever is a new language, add it here.
const LANGUAGE_GROUPS = [
  { language: 'english', groupId: MAILERLITE_ENGLISH_GROUP_ID },
  { language: 'portuguese', groupId: MAILERLITE_PORTUGUESE_GROUP_ID },
] as const;

export type Language = (typeof LANGUAGE_GROUPS)[number]['language'];
export type LanguageGroupId = (typeof LANGUAGE_GROUPS)[number]['groupId'];
export type groupId = LanguageGroupId | string;

// These functions convert an array of language group IDs to an array of languages and vice versa
export const languagesFromGroupIds = (groupIds: groupId[]): Language[] =>
  groupIds
    .map((id) => LANGUAGE_GROUPS.find((group) => group.groupId === id)?.language)
    .filter((x): x is Language => Boolean(x));

export const groupIdsFromLanguages = (languages: Language[]): LanguageGroupId[] =>
  languages
    .map((lang) => LANGUAGE_GROUPS.find((group) => group.language === lang)?.groupId)
    .filter((x): x is LanguageGroupId => Boolean(x));

export const excludeLanguageGroups = (groupIds: groupId[]): string[] => {
  const languageGroupIds = LANGUAGE_GROUPS.map((group) => group.groupId) as string[];

  return groupIds.filter((id): id is string => !languageGroupIds.includes(id));
};
