import { getPageImage, source, type Locale } from '@/lib/source';
import {
    DocsBody,
    DocsDescription,
    DocsPage,
    DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { i18n } from '@/lib/i18n';
import { cookies } from 'next/headers';

interface PageProps {
    params: Promise<{ slug?: string[] }>;
}

async function getLocale(): Promise<Locale> {
    const cookieStore = await cookies();
    const localeCookie = cookieStore.get('FD_LOCALE')?.value;
    return (
        localeCookie && i18n.languages.includes(localeCookie as Locale)
            ? localeCookie
            : i18n.defaultLanguage
    ) as Locale;
}

export default async function Page(props: PageProps) {
    const params = await props.params;
    const locale = await getLocale();
    const page = source.getPage(params.slug, locale);

    if (!page) notFound();

    const MDX = page.data.body;
    const gitConfig = {
        user: 'jakubabrahoim',
        repo: 'fiit-oop',
        branch: 'main',
    };

    return (
        <DocsPage toc={page.data.toc} full={page.data.full}>
            <DocsTitle>{page.data.title}</DocsTitle>

            <DocsDescription className='mb-0'>
                {page.data.description}
            </DocsDescription>

            <div className='border-b ' />

            <DocsBody>
                <MDX
                    components={getMDXComponents({
                        a: createRelativeLink(source, page),
                    })}
                />
            </DocsBody>
        </DocsPage>
    );
}

export async function generateStaticParams() {
    // Filter to only return params for the default locale (sk)
    // English pages will be accessed via /en/docs/... route
    return source
        .generateParams()
        .filter((p) => p.lang === i18n.defaultLanguage);
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
    const params = await props.params;
    const locale = await getLocale();
    const page = source.getPage(params.slug, locale);

    if (!page) notFound();

    return {
        title: page.data.title,
        description: page.data.description,
        openGraph: {
            images: getPageImage(page).url,
        },
    };
}
