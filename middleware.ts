import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Redirect root to /docs
    if (request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/docs', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/'],
};
