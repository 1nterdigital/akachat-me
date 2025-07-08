'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { locales, localeNames, type Locale } from '@/lib/i18n';

interface LanguageSwitcherProps {
  readonly currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    // Remove current locale from pathname
    const segments = pathname.split('/');
    if (locales.includes(segments[1] as Locale)) {
      segments.splice(1, 1);
    }

    // Always add the new locale
    const newPathname = `/${newLocale}${segments.join('/') || ''}`;

    router.push(newPathname);
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100'>
        <Globe className='h-4 w-4' />
        <span className='text-sm'>{localeNames[currentLocale]}</span>
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-200 z-50'>
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => switchLocale(locale)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                currentLocale === locale ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}>
              {localeNames[locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
