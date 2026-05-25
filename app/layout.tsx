import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trait - Faster, Smarter Team Messaging',
  description:
    "A professional messaging solution designed to streamline team communication and boost your company's productivity.",
  keywords: 'Trait, team chat, messaging, productivity, communication',
  authors: [{ name: 'Trait Team' }],
  icons: {
    icon: [
      { url: '/Logo/ic-favicon.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/Logo/ic-favicon.png',
    apple: [{ url: '/Logo/ic-small.png', sizes: '144x144', type: 'image/png' }],
  },
  openGraph: {
    title: 'Trait - Faster, Smarter Team Messaging',
    description: 'Streamline team communication and boost productivity with Trait',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Trait - Team Messaging Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trait - Faster, Smarter Team Messaging',
    description: 'Streamline team communication and boost productivity with Trait',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
