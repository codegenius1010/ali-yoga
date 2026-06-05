import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';
import { Hero } from '@components/sections/Hero';
import { Section } from '@components/layout/Section';
import { Container } from '@components/layout/Container';
import { Breadcrumbs } from '@components/sections/Breadcrumbs';
import { RetreatCard } from '@components/sections/RetreatCard';
import { FAQAccordion } from '@components/sections/FAQAccordion';
import { CTASection } from '@components/sections/CTASection';
import { TestimonialCard } from '@components/sections/TestimonialCard';
import { JsonLd } from '@components/sections/JsonLd';
import { retreats } from '@content/retreats';
import { faqs } from '@content/faqs';
import { testimonials } from '@content/testimonials';

export const metadata: Metadata = {
  title: 'Yoga Retreats | Transformative Wellness Experiences',
  description:
    'Immersive yoga retreats in beautiful natural settings. Combine deep practice, community, and healing in weekend or week-long wellness experiences.',
  keywords: [
    'yoga retreats',
    'wellness retreats',
    'spiritual yoga retreats',
    'yoga retreat waitlist',
    'holistic yoga retreat',
    'yoga getaway',
    'meditation retreat',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aliyoga.com/retreats',
    title: 'Yoga Retreats | Transformative Wellness Experiences',
    description:
      'Immersive yoga retreats combining deep practice, natural beauty, and authentic community.',
    images: [
      {
        url: 'https://aliyoga.com/og-retreats.jpg',
        width: 1200,
        height: 630,
        alt: 'Yoga Retreats',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yoga Retreats | Transformative Wellness Experiences',
    description:
      'Join us for immersive yoga retreats combining deep practice, nature, and authentic community.',
  },
};

// Breadcrumb schema for JSON-LD
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://aliyoga.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Retreats',
      item: 'https://aliyoga.com/retreats',
    },
  ],
};

// Organization schema for JSON-LD
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ali Yoga',
  url: 'https://aliyoga.com',
  description: 'Premium yoga coaching, retreats, and wellness experiences',
  sameAs: [
    'https://instagram.com/aliyoga',
    'https://facebook.com/aliyoga',
  ],
};

const retreatPhilosophy = [
  {
    title: 'Deep Practice',
    description:
      'Multiple daily sessions of yoga, breathwork, and meditation in supportive, immersive settings.',
  },
  {
    title: 'Natural Beauty',
    description:
      'Carefully chosen locations where stunning natural settings support inner transformation.',
  },
  {
    title: 'Authentic Community',
    description:
      'Connect with like-minded practitioners in a warm, non-judgmental, inclusive space.',
  },
  {
    title: 'Holistic Healing',
    description:
      'Nourish your body with healthy meals, rest deeply, and integrate transformation into daily life.',
  },
];

const whatIsIncluded = [
  'Morning and evening yoga practices',
  'Daily pranayama (breathwork) sessions',
  'Guided meditation and mindfulness training',
  'Organic, nourishing meals and beverages',
  'Comfortable accommodations',
  'Retreat materials and journal',
  'Post-retreat integration support',
];

const sampleItinerary = [
  { time: '7:00 AM', activity: 'Sunrise meditation & pranayama' },
  { time: '8:00 AM', activity: 'Morning yoga practice' },
  { time: '9:30 AM', activity: 'Breakfast' },
  { time: '11:00 AM', activity: 'Workshop or guided nature walk' },
  { time: '12:30 PM', activity: 'Lunch' },
  { time: '3:00 PM', activity: 'Afternoon yoga flow' },
  { time: '4:30 PM', activity: 'Free time: rest, journal, explore' },
  { time: '6:00 PM', activity: 'Dinner' },
  { time: '7:30 PM', activity: 'Evening meditation or kirtan' },
  { time: '9:00 PM', activity: 'Rest' },
];

export default function RetreatsPage() {
  const retreatTestimonials = testimonials.filter((t) => t.category === 'Retreats');
  const retreatFAQs = faqs.filter((f) => f.category === 'Retreats');

  return (
    <>
      <Header />
      <main>
        {/* JSON-LD Schemas */}
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={organizationSchema} />

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Retreats' },
          ]}
        />

        {/* 1. Hero Section */}
        <Hero
          headline="Transformative Yoga Retreats"
          subheadline="Immersive wellness experiences in beautiful natural settings. Combine deep practice, authentic community, and lasting transformation."
          primaryCta={{
            label: 'Join the Waitlist',
            href: '/book',
          }}
          secondaryCta={{
            label: 'Learn About Our Philosophy',
            href: '#philosophy',
          }}
        />

        {/* 2. Upcoming Retreats Section */}
        <Section size="lg" background="cream">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              Upcoming Retreats
            </h2>
            <p className="text-lg text-deep-olive max-w-2xl mx-auto">
              Limited spaces available. Join early to secure your spot and begin your transformation.
            </p>
          </div>

          {retreats.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {retreats.map((retreat) => (
                <RetreatCard key={retreat.id} retreat={retreat} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-lg border-2 border-warm-sand text-center">
              <p className="text-lg text-deep-olive mb-4">
                New retreat dates will be announced soon.
              </p>
            </div>
          )}

          <div className="bg-gradient-to-r from-soft-clay/10 to-golden-sun/10 p-8 rounded-lg border border-warm-sand">
            <div className="text-center">
              <h3 className="text-2xl font-serif font-bold text-charcoal-brown mb-2">
                Join the Retreat Waitlist
              </h3>
              <p className="text-deep-olive mb-6">
                Be the first to know about upcoming retreats. Get early access and exclusive
                waitlist pricing.
              </p>
              <Link href="/book" className="btn btn-primary">
                Join Waitlist
              </Link>
            </div>
          </div>
        </Section>

        {/* 3. Retreat Philosophy */}
        <Section id="philosophy" size="lg" background="white">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              Our Retreat Philosophy
            </h2>
            <p className="text-lg text-deep-olive max-w-2xl mx-auto">
              Every retreat is designed to create the conditions for deep transformation—through
              practice, nature, and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {retreatPhilosophy.map((item, index) => (
              <div key={index} className="bg-cream p-8 rounded-lg border border-warm-sand">
                <div className="w-12 h-12 bg-gradient-to-br from-soft-clay to-golden-sun rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-charcoal-brown mb-2">
                  {item.title}
                </h3>
                <p className="text-deep-olive text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 4. What's Included */}
        <Section size="lg" background="cream">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image Placeholder */}
            <div className="h-96 bg-gradient-to-br from-golden-sun to-soft-clay rounded-2xl flex items-center justify-center order-last lg:order-first">
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
                    d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-4m0 0l4 4m-4-4v4"
                  />
                </svg>
                <p className="text-sm font-medium">Retreat Experience</p>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-4xl font-serif font-bold text-charcoal-brown mb-6">
                What's Included
              </h2>
              <p className="text-lg text-deep-olive mb-8 leading-relaxed">
                Every retreat includes everything you need for a transformative experience. Just
                bring yourself and an open heart.
              </p>

              <div className="space-y-3">
                {whatIsIncluded.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-golden-sun text-xl flex-shrink-0 pt-1">✓</span>
                    <p className="text-deep-olive text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* 5. Sample Itinerary */}
        <Section size="lg" background="white">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              Sample Itinerary
            </h2>
            <p className="text-lg text-deep-olive max-w-2xl mx-auto">
              A typical day at retreat balances structured practice with spacious time for rest,
              reflection, and integration.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {sampleItinerary.map((item, index) => (
                <div key={index} className="flex gap-6 pb-4 border-b border-warm-sand last:border-b-0">
                  <div className="w-32 flex-shrink-0">
                    <p className="text-lg font-semibold text-soft-clay">{item.time}</p>
                  </div>
                  <div>
                    <p className="text-lg text-deep-olive">{item.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 6. Gallery */}
        <Section size="lg" background="cream">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              Retreat Gallery
            </h2>
            <p className="text-lg text-deep-olive max-w-2xl mx-auto">
              Beautiful locations, authentic moments, and the energy of community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="h-56 bg-gradient-to-br from-warm-sand to-soft-clay rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="text-center text-white group-hover:scale-110 transition-transform">
                  <svg
                    className="w-16 h-16 mx-auto mb-2 opacity-50"
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
                  <p className="text-sm font-medium">Gallery {item}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 7. Testimonials */}
        {retreatTestimonials.length > 0 && (
          <Section size="lg" background="white">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
                Retreat Stories
              </h2>
              <p className="text-lg text-deep-olive max-w-2xl mx-auto">
                Real transformations from people who attended our retreats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {retreatTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </Section>
        )}

        {/* 8. FAQ Section */}
        {retreatFAQs.length > 0 && (
          <Section size="lg" background="cream">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-deep-olive max-w-2xl mx-auto">
                Got questions about retreats? We've got answers.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={retreatFAQs} />
            </div>
          </Section>
        )}

        {/* 9. Final CTA - Waitlist */}
        <CTASection
          headline="Ready for a Transformative Experience?"
          description="Yoga retreats offer a rare opportunity to step away from daily life and invest deeply in your practice. Limited spaces fill quickly. Join the waitlist today to be first notified of upcoming retreat dates."
          primaryCtaLabel="Join the Retreat Waitlist"
          primaryCtaHref="/book"
          secondaryCtaLabel="Learn About Private Coaching"
          secondaryCtaHref="/private-yoga-coaching"
          background="gradient"
        />
      </main>
      <Footer />
    </>
  );
}