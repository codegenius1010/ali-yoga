import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';
import { Section } from '@components/layout/Section';
import { Container } from '@components/layout/Container';
import { Breadcrumbs } from '@components/sections/Breadcrumbs';
import { BookingForm } from './BookingForm';

export const metadata: Metadata = {
  title: 'Book a Session | Ali Yoga - Schedule Your Consultation',
  description:
    'Book a private yoga coaching session, yoga for golfers training, retreat inquiry, or online course consultation. Fill out our quick form to get started.',
  keywords: [
    'book yoga session',
    'yoga consultation',
    'private yoga booking',
    'yoga inquiry',
    'schedule yoga',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aliyoga.com/book',
    title: 'Book a Session | Ali Yoga - Schedule Your Consultation',
    description:
      'Book a private yoga coaching session, yoga for golfers training, retreat inquiry, or online course consultation.',
    images: [
      {
        url: 'https://aliyoga.com/og-book.jpg',
        width: 1200,
        height: 630,
        alt: 'Book Ali Yoga Session',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Session | Ali Yoga - Schedule Your Consultation',
    description:
      'Book a private yoga coaching session, yoga for golfers training, retreat inquiry, or online course consultation.',
  },
};

export default function BookPage() {

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Book a Session' },
          ]}
        />

        {/* Hero Section */}
        <Section size="lg" background="cream">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-charcoal-brown mb-4">
              Book Your Session
            </h1>
            <p className="text-xl text-deep-olive max-w-2xl mx-auto">
              Fill out this form to inquire about private coaching, group retreats, online courses,
              or any of our services. We'll be in touch within 24 hours.
            </p>
          </div>
        </Section>

        {/* Booking Form */}
        <Section size="lg" background="white">
          <div className="max-w-2xl mx-auto">
            <BookingForm />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}