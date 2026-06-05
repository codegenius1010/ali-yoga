import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';
import { Section } from '@components/layout/Section';
import { Container } from '@components/layout/Container';
import { Breadcrumbs } from '@components/sections/Breadcrumbs';
import { TestimonialCard } from '@components/sections/TestimonialCard';
import { CTASection } from '@components/sections/CTASection';
import { JsonLd } from '@components/sections/JsonLd';
import { testimonials } from '@content/testimonials';

export const metadata: Metadata = {
  title: 'Testimonials | Ali Yoga - Real Results from Real Students',
  description:
    'Read testimonials from students who transformed their practice with private yoga coaching, golf-focused training, retreats, and online courses.',
  keywords: [
    'yoga testimonials',
    'private yoga reviews',
    'yoga for golfers testimonials',
    'retreat reviews',
    'yoga coaching results',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aliyoga.com/testimonials',
    title: 'Testimonials | Ali Yoga - Real Results from Real Students',
    description:
      'Read testimonials from students who transformed their practice with private yoga coaching, golf-focused training, retreats, and online courses.',
    images: [
      {
        url: 'https://aliyoga.com/og-testimonials.jpg',
        width: 1200,
        height: 630,
        alt: 'Ali Yoga Testimonials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimonials | Ali Yoga - Real Results from Real Students',
    description:
      'Read testimonials from students who transformed their practice with private yoga coaching, golf-focused training, retreats, and online courses.',
  },
};

// Breadcrumb schema
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
      name: 'Testimonials',
      item: 'https://aliyoga.com/testimonials',
    },
  ],
};

// Organization review aggregate schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ali Yoga',
  description: 'Premium yoga coaching, golf yoga, retreats, and online courses',
  url: 'https://aliyoga.com',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: testimonials.length,
  },
};

export default function TestimonialsPage() {
  // Organize testimonials by category
  const privateCoachingTestimonials = testimonials.filter(
    (t) => t.category === 'Private Coaching'
  );
  const golfYogaTestimonials = testimonials.filter((t) => t.category === 'Yoga for Golfers');
  const retreatTestimonials = testimonials.filter((t) => t.category === 'Retreats');
  const onlineCourseTestimonials = testimonials.filter((t) => t.category === 'Online Courses');

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
            { label: 'Testimonials' },
          ]}
        />

        {/* Hero Section */}
        <Section size="lg" background="cream">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-charcoal-brown mb-4">
              Real Results from Real Students
            </h1>
            <p className="text-xl text-deep-olive max-w-2xl mx-auto">
              Discover how private coaching, yoga for golfers, retreats, and online courses have
              transformed the lives of our students.
            </p>
          </div>
        </Section>

        {/* Private Coaching Testimonials */}
        {privateCoachingTestimonials.length > 0 && (
          <>
            <Section size="lg" background="white">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-charcoal-brown mb-2">
                  Private Coaching
                </h2>
                <p className="text-lg text-deep-olive">
                  Personalized sessions that transform your practice
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {privateCoachingTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </Section>

            <Section size="md" background="cream">
              <CTASection
                headline="Ready to Transform Your Practice?"
                description="Start with private yoga coaching tailored to your body and goals."
                primaryCtaLabel="Book a Private Session"
                primaryCtaHref="/book"
                secondaryCtaLabel="Learn More"
                secondaryCtaHref="/private-yoga-coaching"
              />
            </Section>
          </>
        )}

        {/* Yoga for Golfers Testimonials */}
        {golfYogaTestimonials.length > 0 && (
          <>
            <Section size="lg" background="white">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-charcoal-brown mb-2">
                  Yoga for Golfers
                </h2>
                <p className="text-lg text-deep-olive">
                  Improved mobility, balance, and focus on the course
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {golfYogaTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </Section>

            <Section size="md" background="cream">
              <CTASection
                headline="Improve Your Golf Game"
                description="Join golfers who've transformed their swing with yoga-focused coaching."
                primaryCtaLabel="Start Golf Yoga Coaching"
                primaryCtaHref="/book"
                secondaryCtaLabel="View Golf Yoga Page"
                secondaryCtaHref="/yoga-for-golfers"
              />
            </Section>
          </>
        )}

        {/* Retreat Testimonials */}
        {retreatTestimonials.length > 0 && (
          <>
            <Section size="lg" background="white">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-charcoal-brown mb-2">
                  Yoga Retreats
                </h2>
                <p className="text-lg text-deep-olive">
                  Immersive experiences that create lasting transformation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {retreatTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </Section>

            <Section size="md" background="cream">
              <CTASection
                headline="Experience a Transformative Retreat"
                description="Join our next yoga retreat and return home renewed."
                primaryCtaLabel="Join Retreat Waitlist"
                primaryCtaHref="/retreats"
                secondaryCtaLabel="Learn More"
                secondaryCtaHref="/retreats"
              />
            </Section>
          </>
        )}

        {/* Online Courses Testimonials */}
        {onlineCourseTestimonials.length > 0 && (
          <>
            <Section size="lg" background="white">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-charcoal-brown mb-2">
                  Online Courses
                </h2>
                <p className="text-lg text-deep-olive">
                  Learn yoga at your own pace with expert guidance
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {onlineCourseTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </Section>

            <Section size="md" background="cream">
              <CTASection
                headline="Learn Yoga On Your Schedule"
                description="Explore our online courses designed for flexibility and depth."
                primaryCtaLabel="Browse Courses"
                primaryCtaHref="/online-courses"
                secondaryCtaLabel="View Course Details"
                secondaryCtaHref="/online-courses"
              />
            </Section>
          </>
        )}

        {/* Final CTA */}
        <Section size="lg" background="white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              Your Transformation Awaits
            </h2>
            <p className="text-xl text-deep-olive mb-8 leading-relaxed">
              Whether you're seeking private coaching, golf-focused training, a transformative
              retreat, or online learning, we're here to support your yoga journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="btn btn-primary">
                Get Started Today
              </Link>
              <Link href="/" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}