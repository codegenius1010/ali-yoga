import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';
import { Hero } from '@components/sections/Hero';
import { Section } from '@components/layout/Section';
import { Container } from '@components/layout/Container';
import { Breadcrumbs } from '@components/sections/Breadcrumbs';
import { FAQAccordion } from '@components/sections/FAQAccordion';
import { CTASection } from '@components/sections/CTASection';
import { TestimonialCard } from '@components/sections/TestimonialCard';
import { JsonLd } from '@components/sections/JsonLd';
import { faqs } from '@content/faqs';
import { testimonials } from '@content/testimonials';

export const metadata: Metadata = {
  title: 'Private Yoga Coaching | Personalized Yoga for Your Goals',
  description:
    'One-on-one private yoga coaching designed around your body, breath, and goals. Transform your practice with Ali\'s holistic yoga method.',
  keywords: [
    'private yoga coaching',
    'private yoga instructor',
    'one on one yoga sessions',
    'personal yoga coach',
    'private yoga for flexibility',
    'private yoga for stress relief',
    'personalized yoga coaching',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aliyoga.com/private-yoga-coaching',
    title: 'Private Yoga Coaching | Personalized Yoga for Your Goals',
    description:
      'One-on-one private yoga coaching designed around your body, breath, and goals. Transform your practice with Ali.',
    images: [
      {
        url: 'https://aliyoga.com/og-private-coaching.jpg',
        width: 1200,
        height: 630,
        alt: 'Private Yoga Coaching',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Yoga Coaching | Personalized Yoga for Your Goals',
    description:
      'One-on-one yoga coaching designed around your body, breath, and goals. Personalized, premium, transformational.',
  },
  canonical: 'https://aliyoga.com/private-yoga-coaching',
};

// Service schema for JSON-LD
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Private Yoga Coaching',
  description:
    'One-on-one private yoga coaching designed around your body, breath, and goals. Blends asana, breathwork, meditation, body awareness, and gentle discipline.',
  provider: {
    '@type': 'Organization',
    name: 'Ali Yoga',
    url: 'https://aliyoga.com',
  },
  areaServed: ['US', 'Remote'],
  hasOfferingType: 'CoachingService',
};

// FAQ schema for JSON-LD
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is included in a private yoga session?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each session includes a personalized yoga flow, breathing work, body awareness guidance, meditation, and a customized practice plan for home.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long are private sessions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sessions are typically 60-75 minutes, allowing time for personalization, deep practice, and integration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do private yoga sessions online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We offer both in-person and online private coaching. Online sessions are just as effective and offer flexibility for your schedule.',
      },
    },
  ],
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
      name: 'Private Yoga Coaching',
      item: 'https://aliyoga.com/private-yoga-coaching',
    },
  ],
};

const whoItIsFor = [
  'People wanting personalized yoga guidance',
  'Athletes seeking to improve performance and prevent injury',
  'Golfers wanting golf-specific mobility and focus training',
  'Anyone dealing with chronic tension or pain',
  'People looking to deepen their meditation practice',
  'Busy professionals wanting efficient, targeted practice',
  'Beginners wanting hands-on instruction and safety',
  'Advanced practitioners looking to refine their technique',
];

const sessionIncludes = [
  'Personalized yoga flow tailored to your needs and goals',
  'Real-time feedback on alignment and breathing',
  'Pranayama (breathwork) techniques for calm and focus',
  'Body awareness training and movement education',
  'Guided meditation or restorative practice',
  'Customized home practice plan for between sessions',
  'Ongoing adjustments based on your progress',
];

const benefits = [
  {
    title: 'Personalized Attention',
    description:
      'Every session is designed specifically for your body, goals, and experience level—not a one-size-fits-all class.',
  },
  {
    title: 'Accelerated Progress',
    description:
      'Real-time feedback on your alignment and breathing helps you progress faster than group classes.',
  },
  {
    title: 'Injury Prevention & Recovery',
    description:
      'Work around injuries, prevent future ones, or rehabilitate with Ali guiding you safely.',
  },
  {
    title: 'Transformational Impact',
    description:
      'The combination of asana, breathwork, meditation, and body awareness creates deep, lasting transformation.',
  },
  {
    title: 'Flexible Scheduling',
    description:
      'Choose your time, format (in-person or online), and pace. Practice fits your life, not the other way around.',
  },
  {
    title: 'Ongoing Support',
    description:
      'Build a relationship with your coach. Get guidance, motivation, and accountability for your practice.',
  },
];

const sessionOptions = [
  {
    title: 'Single Session',
    description: 'Try private coaching with a one-time session (60-75 minutes)',
    price: '$150',
    cta: 'Book Now',
  },
  {
    title: 'Package of 4',
    description: 'Build momentum with 4 sessions over 2 months',
    price: '$520',
    savings: 'Save $80',
    cta: 'Book Package',
  },
  {
    title: 'Package of 8',
    description: 'Deeper transformation with 8 sessions over 4 months (most popular)',
    price: '$960',
    savings: 'Save $240',
    cta: 'Book Package',
    featured: true,
  },
  {
    title: 'Ongoing Monthly',
    description: 'Continuous support with 4 sessions per month',
    price: '$480/mo',
    cta: 'Start Monthly',
  },
];

const hollisticMethod = [
  {
    title: 'Asana (Physical Practice)',
    description:
      'Yoga postures customized to your body, goals, and needs. Not about perfection—about finding your authentic practice.',
  },
  {
    title: 'Pranayama (Breathing)',
    description:
      'Ancient breathing techniques that calm your nervous system, sharpen focus, and unlock physical potential.',
  },
  {
    title: 'Meditation (Mind)',
    description:
      'Simple, practical meditation to quiet mental noise, build presence, and experience inner freedom.',
  },
  {
    title: 'Body Awareness',
    description:
      'Learning to feel your body deeply—understanding tension patterns, improving alignment, and preventing injury.',
  },
  {
    title: 'Gentle Discipline',
    description:
      'Consistency and commitment create transformation. We build sustainable habits, not quick fixes.',
  },
];

export default function PrivateCoachingPage() {
  const coachingTestimonials = testimonials.filter((t) => t.category === 'Private Coaching');
  const coachingFAQs = faqs.filter((f) => f.category === 'Private Coaching');

  return (
    <>
      <Header />
      <main>
        {/* JSON-LD Schemas */}
        <JsonLd data={serviceSchema} />
        <JsonLd data={faqSchema} />
        <JsonLd data={breadcrumbSchema} />

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Private Yoga Coaching' },
          ]}
        />

        {/* 1. Hero Section */}
        <Hero
          headline="Private Yoga Coaching Designed Around Your Body, Breath & Goals"
          subheadline="One-on-one sessions blending asana, breathwork, meditation, and body awareness. Personalized, premium, and transformational."
          backgroundImage="/images/classes-hero.jpg"
          primaryCta={{
            label: 'Book Your First Session',
            href: '/book',
          }}
          secondaryCta={{
            label: 'Explore Our Approach',
            href: '#method',
          }}
        />

        {/* 2. Who It Is For */}
        <Section size="lg" background="cream">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              Who Private Coaching Is For
            </h2>
            <p className="text-lg text-deep-olive max-w-2xl mx-auto">
              Private yoga coaching works for anyone seeking personalized guidance, transformation,
              and a deeper yoga practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whoItIsFor.map((audience, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-warm-sand hover:shadow-md transition-shadow"
              >
                <div className="flex gap-3">
                  <span className="text-soft-clay text-2xl flex-shrink-0">•</span>
                  <p className="text-deep-olive text-lg">{audience}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 3. What Each Session Includes */}
        <Section size="lg" background="white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image Placeholder */}
            <div className="h-96 bg-gradient-to-br from-soft-clay to-golden-sun rounded-2xl flex items-center justify-center order-last lg:order-first">
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
                    d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z"
                  />
                </svg>
                <p className="text-sm font-medium">Private Session</p>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-4xl font-serif font-bold text-charcoal-brown mb-6">
                Every Session Is Customized
              </h2>
              <p className="text-lg text-deep-olive mb-8 leading-relaxed">
                No two bodies are the same. Each private session is carefully designed to meet you
                where you are and guide you toward your unique goals.
              </p>

              <div className="space-y-3">
                {sessionIncludes.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-golden-sun text-xl flex-shrink-0 pt-1">✓</span>
                    <p className="text-deep-olive text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* 4. Benefits Section */}
        <Section size="lg" background="cream">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              The Benefits of Private Coaching
            </h2>
            <p className="text-lg text-deep-olive max-w-2xl mx-auto">
              Experience yoga the way it was meant to be taught: personalized, supportive, and
              transformational.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-warm-sand hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-serif font-bold text-charcoal-brown mb-3">
                  {benefit.title}
                </h3>
                <p className="text-deep-olive leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 5. Ali's Holistic Method */}
        <Section id="method" size="lg" background="white">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              Ali's Holistic Method
            </h2>
            <p className="text-lg text-deep-olive max-w-2xl mx-auto">
              A comprehensive approach that honors the whole person—body, breath, and mind.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hollisticMethod.map((element, index) => (
              <div key={index} className="bg-cream p-8 rounded-lg border border-warm-sand">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-soft-clay to-golden-sun rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-charcoal-brown mb-2">
                      {element.title}
                    </h3>
                    <p className="text-deep-olive leading-relaxed">{element.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 6. Session Options & Pricing */}
        <Section size="lg" background="cream">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              Session Options
            </h2>
            <p className="text-lg text-deep-olive max-w-2xl mx-auto">
              Choose the option that fits your goals and schedule. Start with one session or
              commit to a package for deeper transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sessionOptions.map((option, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 border-2 transition-all ${
                  option.featured
                    ? 'bg-white border-soft-clay shadow-lg scale-105'
                    : 'bg-white border-warm-sand hover:border-soft-clay'
                }`}
              >
                {option.featured && (
                  <div className="bg-soft-clay text-white text-center py-2 rounded -mx-8 -mt-8 mb-6 text-sm font-bold uppercase tracking-wide">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-serif font-bold text-charcoal-brown mb-2">
                  {option.title}
                </h3>
                <p className="text-deep-olive text-sm mb-4">{option.description}</p>

                <div className="bg-cream p-4 rounded mb-4">
                  <p className="text-2xl font-bold text-soft-clay">{option.price}</p>
                  {option.savings && (
                    <p className="text-sm text-golden-sun font-semibold">{option.savings}</p>
                  )}
                </div>

                <a href="/book" className="btn btn-primary w-full text-center">
                  {option.cta}
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* 7. Testimonials */}
        {coachingTestimonials.length > 0 && (
          <Section size="lg" background="white">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-deep-olive max-w-2xl mx-auto">
                Real transformations from people who invested in their practice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coachingTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </Section>
        )}

        {/* 8. FAQ Section */}
        {coachingFAQs.length > 0 && (
          <Section size="lg" background="cream">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-deep-olive max-w-2xl mx-auto">
                Got questions? We've got answers about private yoga coaching.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={coachingFAQs} />
            </div>
          </Section>
        )}

        {/* 9. Final CTA Section */}
        <CTASection
          headline="Ready to Transform Your Practice?"
          description="Start your private yoga coaching journey today. Whether you're seeking relief, performance improvement, or spiritual deepening, Ali will meet you where you are and guide you toward your goals."
          primaryCtaLabel="Book Your First Session"
          primaryCtaHref="/book"
          secondaryCtaLabel="Explore Yoga for Golfers"
          secondaryCtaHref="/yoga-for-golfers"
          background="gradient"
        />
      </main>
      <Footer />
    </>
  );
}