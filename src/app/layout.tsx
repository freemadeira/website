import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
    <html lang='en'>
      <head>
        <meta http-equiv='refresh' content='0;url=https://energysummit.freemadeira.org' />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} h-dvh antialiased`}>
        {children}
      </body>
    </html>
  );
}
