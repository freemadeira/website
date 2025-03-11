import type { Metadata } from 'next';
import { Schibsted_Grotesk, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/footer';

const schibstedGrotesk = Schibsted_Grotesk({
  variable: '--font-main',
});

export const metadata: Metadata = {
  title: 'FREE Madeira',
  description: 'New website coming soon!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${schibstedGrotesk.variable}`}>
      <body className="flex min-h-dvh flex-col antialiased">
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
