'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Smartphone } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/download-links';

const DEFAULT_URL = '/en/';

function getDownloadUrl(): string {
  if (typeof window === 'undefined') return DEFAULT_URL;

  const userAgent = navigator.userAgent;

  if (/iPhone|iPad|iPod/.test(userAgent)) {
    return APP_STORE_URL;
  } else if (/Android/.test(userAgent)) {
    return PLAY_STORE_URL;
  }
  return DEFAULT_URL;
}

function getPlatform(): 'ios' | 'android' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop';

  const userAgent = navigator.userAgent;

  if (/iPhone|iPad|iPod/.test(userAgent)) {
    return 'ios';
  } else if (/Android/.test(userAgent)) {
    return 'android';
  }
  return 'desktop';
}

export default function DeepLinkRedirect() {
  const [downloadUrl, setDownloadUrl] = useState(DEFAULT_URL);
  const [platform, setPlatform] = useState<'ios' | 'android' | 'desktop'>('desktop');

  useEffect(() => {
    const url = getDownloadUrl();
    const detectedPlatform = getPlatform();
    setDownloadUrl(url);
    setPlatform(detectedPlatform);

    console.log(`[Deep Link] Path: ${window.location.pathname}, Redirecting to: ${url}`);

    const timer = setTimeout(() => {
      window.location.href = url;
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col'>
      {/* Header */}
      <header className='border-b border-gray-200 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-center items-center py-6'>
            <BrandLogo />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='flex-1 flex items-center justify-center px-4 py-12'>
        <div className='text-center max-w-md'>
          {/* Floating icon */}
          <div className='relative inline-block mb-8'>
            <div className='animate-float'>
              <div className='bg-white p-6 rounded-2xl shadow-2xl'>
                <Smartphone className='h-16 w-16 text-blue-600 mx-auto' />
              </div>
            </div>
            {/* Decorative elements */}
            <div className='absolute -top-2 -right-2 bg-white p-2 rounded-full shadow-lg animate-bounce-slow'>
              <div className='w-3 h-3 bg-blue-600 rounded-full' />
            </div>
            <div className='absolute -bottom-2 -left-2 bg-white p-2 rounded-full shadow-lg animate-pulse'>
              <div className='w-3 h-3 bg-green-500 rounded-full' />
            </div>
          </div>

          <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Opening <span className='text-blue-600'>Trait</span>...
          </h1>

          <p className='text-lg text-gray-600 mb-8'>
            {platform === 'desktop'
              ? "You'll be redirected to our homepage shortly."
              : "If the app doesn't open automatically, you'll be redirected to download it."}
          </p>

          {/* Loading indicator */}
          <div className='flex justify-center mb-8'>
            <div className='flex space-x-2'>
              <div
                className='w-3 h-3 bg-blue-600 rounded-full animate-bounce'
                style={{ animationDelay: '0ms' }}
              />
              <div
                className='w-3 h-3 bg-blue-600 rounded-full animate-bounce'
                style={{ animationDelay: '150ms' }}
              />
              <div
                className='w-3 h-3 bg-blue-600 rounded-full animate-bounce'
                style={{ animationDelay: '300ms' }}
              />
            </div>
          </div>

          {/* Download buttons */}
          {platform !== 'desktop' && (
            <div className='mb-6'>
              <a href={downloadUrl} className='inline-block transition-transform hover:scale-105'>
                <Image
                  src={platform === 'ios' ? '/app-store.png' : '/play-store.png'}
                  alt={platform === 'ios' ? 'Download on App Store' : 'Get it on Google Play'}
                  width={150}
                  height={44}
                  className='h-12 w-auto'
                />
              </a>
            </div>
          )}

          {/* Manual link */}
          <p className='text-sm text-gray-500'>
            <a
              href={downloadUrl}
              className='text-blue-600 hover:text-blue-700 underline transition-colors'>
              Click here if you&apos;re not redirected
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-neutral-800 py-6'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <p className='text-neutral-400 text-sm'>
            © {new Date().getFullYear()} Trait. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
