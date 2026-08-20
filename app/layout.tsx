import type { Metadata } from 'next';
import './globals.css';
import { JasonCursor } from '@/components/JasonCursor';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Yash Yadav | Senior Visual Designer & Art Director',
  description: 'Yash Yadav is a Senior Visual Designer and Art Director specializing in visual design, art direction, team leadership, branding, and UI/UX.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-lightText selection:text-darkBg bg-darkBg text-lightText relative">
        <div className="fixed inset-0 z-50 pointer-events-none noise-bg opacity-40 mix-blend-overlay"></div>
        <JasonCursor />
        <Header />
        <main className="w-full relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
