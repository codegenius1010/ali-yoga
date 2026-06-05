import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';
import { Section } from '@components/layout/Section';
import { Container } from '@components/layout/Container';
import { Breadcrumbs } from '@components/sections/Breadcrumbs';
import { ServiceCard } from '@components/ui/Card';
import { CTASection } from '@components/sections/CTASection';
import { services } from '@content/services';

export const metadata: Metadata = {
  title: 'Services | Ali Yoga - Yoga Coaching, Retreats & Online Courses',
  description:
    'Explore all Ali Yoga services: private coaching, yoga for golfers, wellness retreats, online courses, and more. Find the perfect yoga practice for your goals.',
  keywords: [
    'yoga services',
    'private yoga coaching',
    'yoga for golfers',
    'wellness retreats',
    'online yoga courses',
    'breathwork',
    'meditation',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aliyoga.com/services',
    title: 'Services | Ali Yoga',
    description:
      'Private coaching, golf yoga, retreats, online courses, and more.',
    images: [
      {
        url: 'https://aliyoga.com/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Ali Yoga Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Ali Yoga',
    description:
      'Private coaching, golf yoga, retreats, online courses, and more.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services' },
          ]}
        />

        {/* Hero Section */}
        <Section size="lg" background="cream">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-charcoal-brown mb-4">
              Our Services
            </h1>
            <p className="text-xl text-deep-olive max-w-2xl mx-auto">
              Choose the yoga practice that aligns with your goals and lifestyle. From private
              coaching to immersive retreats, we offer tailored solutions for freedom, focus, and
              flow.
            </p>
          </div>
        </Section>

        {/* Services Grid */}
        <Section size="lg" background="white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.id} className="group">
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  link={service.cta?.href}
                />
              </div>
            ))}
          </div>
        </Section>

        {/* Detailed Service Sections */}
        <Section size="lg" background="cream">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-brown mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-deep-olive mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {service.features && service.features.length > 0 && (
                    <div className="mb-8">
                      <p className="text-sm font-semibold text-soft-clay uppercase tracking-wider mb-3">
                        Includes:
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="text-golden-sun text-xl flex-shrink-0">✓</span>
                            <span className="text-deep-olive">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.cta && (
                    <Link href={service.cta.href} className="btn btn-primary">
                      {service.cta.label}
                    </Link>
                  )}
                </div>

                {/* Placeholder for Image */}
                <div
                  className={`h-96 bg-gradient-to-br from-warm-sand to-soft-clay rounded-2xl flex items-center justify-center ${
                    index % 2 === 1 ? 'lg:col-start-1' : ''
                  }`}
                >
                  <div className="text-center text-white">
                    <svg
                      className="w-24 h-24 mx-auto mb-4 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm font-medium">{service.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <CTASection
          headline="Ready to Start Your Yoga Journey?"
          description="Each service is designed to help you move with freedom, breathe with intention, and live with presence. Let's find the perfect practice for you."
          primaryCtaLabel="Book a Consultation"
          primaryCtaHref="/book"
          background="olive"
          centered
        />
      </main>
      <Footer />
    </>
  );
}
