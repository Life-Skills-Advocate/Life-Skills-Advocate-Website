import type { Metadata } from 'next';
import React from 'react';
import { Header } from '@/components/global/Header';
import { Footer } from '@/components/global/Footer';
import { baseMetadata } from '@/lib/metadata';
import '../styles/globals.css';

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
