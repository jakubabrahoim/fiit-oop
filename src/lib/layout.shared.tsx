import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import type { Locale } from './i18n';

const titles: Record<Locale, string> = {
    sk: 'OOP - FIIT STU',
    en: 'OOP - FIIT STU',
};

export function baseOptions(locale: Locale = 'sk'): BaseLayoutProps {
    return {
        nav: {
            title: titles[locale],
        },
        i18n: true,
    };
}
