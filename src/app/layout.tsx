import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import SwipeGestureProvider from '@/components/SwipeGestureProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ella Choi | Software Engineer',
  description:
    'Software Engineer specializing in responsive web performance optimization and AI-driven automation solutions',
  openGraph: {
    title: 'Ella Choi | Software Engineer',
    description:
      'Software Engineer specializing in responsive web performance optimization and AI-driven automation solutions',
    url: 'https://ella-yschoi.github.io/',
    siteName: 'Ella Choi | Software Engineer',
    images: [
      {
        url: 'https://ella-yschoi.github.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ella Choi - Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SwipeGestureProvider>
          <Header />
          <div>{children}</div>
        </SwipeGestureProvider>
      </body>
    </html>
  );
}
