import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
    subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
    title: {
        default: 'OOP - FIIT STU',
        template: '%s | OOP - FIIT STU',
    },
    description: 'Objektovo orientované programovanie - FIIT STU',
};

export default function Layout({ children }: LayoutProps<'/'>) {
    return (
        <html lang='sk' className={inter.className} suppressHydrationWarning>
            <body className='flex flex-col min-h-screen'>
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    );
}
