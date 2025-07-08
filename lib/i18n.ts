export const locales = ['en', 'zh', 'id'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames = {
  en: 'English',
  zh: '中文',
  id: 'Bahasa Indonesia',
} as const;

export async function getMessages(locale: Locale) {
  return (await import(`../messages/${locale}.json`)).default;
}
