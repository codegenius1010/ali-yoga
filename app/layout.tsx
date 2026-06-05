import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ali Yoga | Premium Yoga Coaching & Wellness Retreats',
  description:
    'Private yoga coaching, yoga for golfers, online courses, and wellness retreats designed for freedom, focus, and flow.',
  keywords: [
    'yoga',
    'private yoga coaching',
    'yoga for golfers',
    'wellness retreats',
    'breathwork',
    'meditation',
  ],
  authors: [{ name: 'Ali Yoga' }],
  creator: 'Ali Yoga',
  icons: {
    icon: '/images/logos/ali-yoga-logo-concept-04-true-transparent.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aliyoga.com',
    siteName: 'Ali Yoga',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
