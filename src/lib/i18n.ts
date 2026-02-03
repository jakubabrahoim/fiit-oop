import type { I18nConfig } from 'fumadocs-core/i18n';

export const i18n: I18nConfig = {
    defaultLanguage: 'sk',
    languages: ['sk', 'en'],
    parser: 'dir', // Content is organized by directory: content/docs/sk/, content/docs/en/
    hideLocale: 'never' // Always show locale in URL for SSG
};

export type Locale = (typeof i18n)['languages'][number];
