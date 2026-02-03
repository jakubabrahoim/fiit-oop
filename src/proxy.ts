import { NextResponse, type NextRequest } from 'next/server';
import { i18n } from '@/lib/i18n';

export function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const defaultPaths = ['/', ...i18n.languages.map(lang => `/${lang}`)];

    // Redirect root to default locale docs
    if (defaultPaths.includes(pathname)) {
        return NextResponse.redirect(new URL(`/${i18n.defaultLanguage}/docs`, request.url));
    }

    // Redirect /docs to default locale docs
    if (pathname === '/docs' || pathname.startsWith('/docs/')) {
        const newPath = pathname.replace('/docs', `/${i18n.defaultLanguage}/docs`);
        return NextResponse.redirect(new URL(newPath, request.url));
    }

    return NextResponse.next();
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    // You may need to adjust it to ignore static assets in `/public` folder
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
