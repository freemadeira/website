import { createContext, type ReactNode, useContext, useMemo, useState } from 'react';

import { DEFAULT_LOCALE, type FlyerContent, type Locale } from '@/data/apoio/flyer/content';
import { CONTENT_BY_LOCALE } from '@/data/apoio/flyer/locales';

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: FlyerContent;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, content: CONTENT_BY_LOCALE[locale] }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

// Panels call this instead of importing named constants from data/content directly —
// same shape as before, just resolved for whichever locale is currently active.
export function useContent(): FlyerContent {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useContent must be used within a LocaleProvider');
  return ctx.content;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider');
  return ctx;
}
