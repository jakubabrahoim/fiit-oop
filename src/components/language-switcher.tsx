'use client';

import { type Locale, getLanguageName, getLanguageFlag } from '@/lib/i18n';
import { cn } from '@/lib/cn';

interface LanguageSwitcherProps {
    locale: Locale;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
    const otherLocale = locale === 'sk' ? 'en' : 'sk';

    const switchLocale = () => {
        document.cookie = `FD_LOCALE=${otherLocale}; path=/; max-age=31536000`;
        // Reload the page
        window.location.reload();
    };

    return (
        <div className='flex items-center justify-between w-full px-2 py-1 border-t pt-3 mt-2'>
            <button
                onClick={switchLocale}
                className={cn(
                    'flex items-center gap-2 hover:cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors',
                    'rounded-md px-2 py-1.5 hover:bg-accent',
                )}
            >
                <span>{getLanguageFlag(otherLocale)}</span>
                <span>{getLanguageName(otherLocale)}</span>
            </button>
        </div>
    );
}
