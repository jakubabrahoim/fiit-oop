import { source, type Locale } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { I18nProvider } from 'fumadocs-ui/contexts/i18n';
import { notFound } from 'next/navigation';
import { i18n } from '@/lib/i18n';

interface DocsLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function Layout({ children, params }: DocsLayoutProps) {
    const { locale } = await params;

    // Validate locale
    if (!i18n.languages.includes(locale as Locale)) {
        notFound();
    }

    const typedLocale = locale as Locale;

    return (
        <I18nProvider
            locale={typedLocale}
            locales={[
                {
                    name: 'Slovensky',
                    locale: 'sk',
                },
                {
                    name: 'English',
                    locale: 'en',
                },
            ]}
        >
            <DocsLayout
                tree={source.getPageTree(typedLocale)}
                {...baseOptions(typedLocale)}
            >
                {children}
            </DocsLayout>
        </I18nProvider>
    );
}
