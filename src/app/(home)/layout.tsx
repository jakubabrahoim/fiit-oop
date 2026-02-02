import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { I18nProvider } from 'fumadocs-ui/contexts/i18n';
import { i18n } from '@/lib/i18n';

export default function Layout({ children }: LayoutProps<'/'>) {
    return (
        <I18nProvider
            locale={i18n.defaultLanguage}
            locales={i18n.languages.map((l) => ({
                locale: l,
                name: l === 'sk' ? 'Slovenčina' : 'English',
            }))}
        >
            <HomeLayout {...baseOptions()}>{children}</HomeLayout>
        </I18nProvider>
    );
}
