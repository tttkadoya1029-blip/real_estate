import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'JapanHome - Your Gateway to Japanese Real Estate',
    template: '%s | JapanHome',
  },
  description:
    'Discover your perfect property in Japan. From Tokyo apartments to Kyoto machiya, explore Japanese real estate with expert guidance for international buyers.',
  keywords: [
    'Japan real estate',
    'buy property in Japan',
    'Tokyo apartments',
    'Kyoto machiya',
    'Japan investment property',
    'foreigner buy house Japan',
  ],
  authors: [{ name: 'JapanHome' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://japanhome.com',
    siteName: 'JapanHome',
    title: 'JapanHome - Your Gateway to Japanese Real Estate',
    description:
      'Discover your perfect property in Japan. Expert guidance for international buyers.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JapanHome - Japanese Real Estate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JapanHome - Your Gateway to Japanese Real Estate',
    description:
      'Discover your perfect property in Japan. Expert guidance for international buyers.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
