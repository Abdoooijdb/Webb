import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nike | High-Converting E-Commerce Platform',
  description: 'Experience premium athletic footwear and apparel with AI-powered personalization.',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;600;700&family=Barlow+Condensed:wght@700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-nike-black text-nike-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
