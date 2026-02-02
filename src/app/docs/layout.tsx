import { source, type Locale } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { i18n } from '@/lib/i18n';
import { I18nProvider } from 'fumadocs-ui/contexts/i18n';
import { cookies } from 'next/headers';
import { LanguageSwitcher } from '@/components/language-switcher';

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const localeCookie = cookieStore.get('FD_LOCALE')?.value;
    const locale = (
        localeCookie && i18n.languages.includes(localeCookie as Locale)
            ? localeCookie
            : i18n.defaultLanguage
    ) as Locale;

    return (
        <I18nProvider locale={locale}>
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
