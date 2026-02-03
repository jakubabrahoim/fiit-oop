import { notFound } from 'next/navigation';
import { i18n, type Locale } from '@/lib/i18n';

interface LocaleLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
    children,
    params,
}: LocaleLayoutProps) {
    const { locale } = await params;

    // Validate locale
    if (!i18n.languages.includes(locale as Locale)) {
        notFound();
    }

    return children;
}

export function generateStaticParams() {
    return i18n.languages.map((locale) => ({ locale }));
}
