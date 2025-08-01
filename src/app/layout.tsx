import type { Metadata } from 'next';
import { Schibsted_Grotesk } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

const schibstedGrotesk = Schibsted_Grotesk({
  variable: '--font-main',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'FREE Madeira',
  description: 'A Bitcoin community in the Atlantic.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // useTheme();

  return (
    <html lang="en" className={`${schibstedGrotesk.variable}`}>
      <body className="flex min-h-dvh flex-col antialiased">
        <Header />

        <main className="grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
