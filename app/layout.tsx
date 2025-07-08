import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AkaChat - Faster, Smarter Team Messaging',
  description:
    "A professional messaging solution designed to streamline team communication and boost your company's productivity.",
  keywords: 'team chat, messaging, productivity, communication',
  authors: [{ name: 'AkaChat Team' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'AkaChat - Faster, Smarter Team Messaging',
    description: 'Streamline team communication and boost productivity with AkaChat',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AkaChat - Team Messaging Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AkaChat - Faster, Smarter Team Messaging',
    description: 'Streamline team communication and boost productivity with AkaChat',
    images: ['/twitter-image.png'],
  },
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
