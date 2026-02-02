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
import { LLMCopyButton, ViewOptions } from '@/components/ai/page-actions';
import { i18n } from '@/lib/i18n';

interface PageProps {
    params: Promise<{ lang: string; slug?: string[] }>;
}

export default async function Page(props: PageProps) {
    const params = await props.params;
    const locale = params.lang as Locale;

    // Validate locale
    if (!i18n.languages.includes(locale)) {
        notFound();
    }

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
            <div className='flex flex-row gap-2 items-center border-b pb-6'>
                <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
                <ViewOptions
                    markdownUrl={`${page.url}.mdx`}
                    githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${page.path}`}
                />
            </div>
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
    // Return params for non-default locales
    return source
        .generateParams()
        .filter((p) => p.lang !== i18n.defaultLanguage)
        .map((p) => ({
            lang: p.lang,
            slug: p.slug,
        }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
    const params = await props.params;
    const locale = params.lang as Locale;

    if (!i18n.languages.includes(locale)) {
        notFound();
    }

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
