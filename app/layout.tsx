import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AkaChat - Faster, Smarter Team Collaboration',
  description:
    "A professional chat solution designed to streamline team communication, integrate with your favorite tools, and boost your company's productivity.",
  keywords: 'team chat, collaboration, productivity, messaging',
  authors: [{ name: 'AkaChat Team' }],
  openGraph: {
    title: 'AkaChat - Faster, Smarter Team Collaboration',
    description: 'Streamline team communication and boost productivity with AkaChat',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AkaChat - Faster, Smarter Team Collaboration',
    description: 'Streamline team communication and boost productivity with AkaChat',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
