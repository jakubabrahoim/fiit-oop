import { source, type Locale } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { i18n } from '@/lib/i18n';
import { LanguageSwitcher } from '@/components/language-switcher';
import { I18nProvider } from 'fumadocs-ui/contexts/i18n';

export default async function Layout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const locale = lang as Locale;

    return (
        <I18nProvider
            locale={locale}
            locales={i18n.languages.map((l) => ({
                locale: l,
                name: l === 'sk' ? 'Slovenčina' : 'English',
            }))}
        >
            <DocsLayout
                tree={source.getPageTree(locale)}
                {...baseOptions(locale)}
                sidebar={{
                    footer: <LanguageSwitcher locale={locale} />,
                }}
            >
                {children}
            </DocsLayout>
        </I18nProvider>
    );
}
