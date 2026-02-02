import type { I18nConfig } from 'fumadocs-core/i18n';

export const i18n: I18nConfig = {
    defaultLanguage: 'sk',
    languages: ['sk', 'en'],
    parser: 'dir', // Content is organized by directory: content/docs/sk/, content/docs/en/
    hideLocale: 'always'
};

export type Locale = (typeof i18n)['languages'][number];

export function getLanguageName(locale: Locale): string {
    const names: Record<Locale, string> = {
        sk: 'Slovenčina',
        en: 'English',
    };
    return names[locale];
}

export function getLanguageFlag(locale: Locale): string {
    const flags: Record<Locale, string> = {
        sk: '🇸🇰',
        en: '🇬🇧',
    };
    return flags[locale];
}
