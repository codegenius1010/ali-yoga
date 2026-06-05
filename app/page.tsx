import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';
import { Hero } from '@components/sections/Hero';
import { Section } from '@components/layout/Section';
import { Container } from '@components/layout/Container';
import { ServiceCard } from '@components/ui/Card';
import { TestimonialCard } from '@components/sections/TestimonialCard';
import { CTASection } from '@components/sections/CTASection';
import { BlogCard } from '@components/sections/BlogCard';
import { JsonLd, organizationSchema, personSchema, websiteSchema } from '@components/sections/JsonLd';
import { services } from '@content/services';
import { testimonials } from '@content/testimonials';
import { courses } from '@content/courses';
import { siteConfig } from '@content/site';

export const metadata: Metadata = {
  title: 'Ali Yoga | Premium Yoga Coaching, Golf Yoga & Retreats',
  description:
    'Private yoga coaching, golf-focused mobility, retreats, and online practices designed to help you move better, breathe deeper, and live with more presence.',
  keywords: [
    'yoga',
    'private yoga coaching',
    'yoga for golfers',
    'golf mobility',
    'wellness retreats',
    'breathwork',
    'meditation',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aliyoga.com',
    siteName: 'Ali Yoga',
    title: 'Ali Yoga | Premium Yoga Coaching & Wellness Retreats',
    description:
      'Private yoga coaching, golf-focused mobility, retreats, and online practices for freedom, focus, and flow.',
    images: [
      {
        url: 'https://aliyoga.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ali Yoga',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Yoga | Premium Yoga Coaching & Wellness Retreats',
    description:
      'Private yoga coaching, golf-focused mobility, retreats, and online practices designed for you.',
    images: ['https://aliyoga.com/og-image.jpg'],
  },
};

// Mock blog posts for preview
const blogPreview = [
  {
    id: 'blog-1',
    title: 'Yoga for Golfers: 7 Benefits for Mobility, Balance & Focus',
    slug: 'yoga-golfers-7-benefits',
    excerpt:
      'Discover how yoga-specific training improves your golf game through enhanced mobility, balance, rotation, and mental focus.',
    publishedAt: '2024-06-01',
    category: 'Golf Yoga',
    author: 'Ali',
    image: 'https://images.unsplash.com/photo-1599301881288-e883c57daf1e?w=600&h=400&fit=crop',
  },
  {
    id: 'blog-2',
    title: 'How Breathwork Improves Focus on the Golf Course',
    slug: 'breathwork-golf-focus',
    excerpt:
      'Learn pranayama techniques that calm your nervous system and sharpen your mental focus before every shot.',
    publishedAt: '2024-05-28',
    category: 'Breathwork',
    author: 'Ali',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
  },
  {
    id: 'blog-3',
    title: 'Private Yoga Coaching vs Group Classes: Which Is Right for You?',
    slug: 'private-vs-group-yoga',
    excerpt:
      'Compare private yoga coaching and group classes to find the approach that best supports your goals and lifestyle.',
    publishedAt: '2024-05-20',
    category: 'Coaching',
    author: 'Ali',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
  },
];

export default function Home() {
  const coachingTestimonials = testimonials.slice(0, 3);
  const golfersCourse = courses.find((c) => c.slug === 'yoga-for-golfers-mobility-focus');

  return (
    <>
      <Header />
      <main>
        {/* JSON-LD Schema Markup */}
        <JsonLd data={organizationSchema} />
        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />

        {/* 1. Hero Section */}
        <Hero
          headline="Yoga for Freedom, Focus & Flow"
          subheadline="Private yoga coaching, golf-focused mobility, retreats, and online practices designed to help you move better, breathe deeper, and live with more presence."
          backgroundImage="/images/home-hero-yoga-golf.png"
          primaryCta={{
            label: 'Book a Private Session',
            href: '/book',
          }}
          secondaryCta={{
            label: 'Explore Yoga for Golfers',
            href: '/yoga-for-golfers',
          }}
        />

        {/* 2. Trust Bar Section */}
        <Section background="white" size="sm">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <p className="text-sm font-semibold text-soft-clay uppercase tracking-wider mb-1">
                Expertise
              </p>
              <p className="text-sm text-deep-olive">Yoga Teacher Trained in India</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-soft-clay uppercase tracking-wider mb-1">
                Background
              </p>
              <p className="text-sm text-deep-olive">Golf Scholarship Athlete</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-soft-clay uppercase tracking-wider mb-1">
                Services
              </p>
              <p className="text-sm text-deep-olive">Private Coaching</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-soft-clay uppercase tracking-wider mb-1">
                Offerings
              </p>
              <p className="text-sm text-deep-olive">Wellness Retreats</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-soft-clay uppercase tracking-wider mb-1">
                Practices
              </p>
              <p className="text-sm text-deep-olive">Breathwork & Meditation</p>
            </div>
          </div>
        </Section>

        {/* 3. Services Section */}
        <Section size="lg" background="cream">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              Our Services
            </h2>
            <p className="text-lg text-deep-olive max-w-2xl mx-auto">
              From private coaching to immersive retreats, discover the yoga practice that works for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                link={service.cta?.href}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="text-soft-clay font-semibold hover:text-soft-clay/80 transition-colors">
              View all services →
            </Link>
          </div>
        </Section>

        {/* 4. Yoga for Golfers Feature */}
        <Section size="lg" background="white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image Placeholder */}
            <div className="h-96 bg-gradient-to-br from-warm-sand to-golden-sun rounded-2xl flex items-center justify-center">
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
                <p className="text-sm font-medium">Yoga for Golfers</p>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-4xl font-serif font-bold text-charcoal-brown mb-4">
                Yoga for Golfers
              </h2>
              <p className="text-lg text-deep-olive mb-6 leading-relaxed">
                Our flagship offering combines mobility, balance, rotation, and breath work to transform your golf game while building body awareness and mental focus.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex gap-3">
                  <span className="text-golden-sun text-xl flex-shrink-0">✓</span>
                  <p className="text-deep-olive">Enhanced mobility and flexibility</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-golden-sun text-xl flex-shrink-0">✓</span>
                  <p className="text-deep-olive">Improved rotation and balance</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-golden-sun text-xl flex-shrink-0">✓</span>
                  <p className="text-deep-olive">Mental focus and breathing control</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-golden-sun text-xl flex-shrink-0">✓</span>
                  <p className="text-deep-olive">Body awareness and injury prevention</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/yoga-for-golfers"
                  className="btn btn-primary text-center"
                >
                  Learn More
                </Link>
                {golfersCourse && (
                  <Link
                    href="/online-courses"
                    className="btn btn-outline text-center"
                  >
                    View Course
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Section>

        {/* 5. About Ali Preview */}
        <Section size="lg" background="cream">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="order-last lg:order-first">
              <h2 className="text-4xl font-serif font-bold text-charcoal-brown mb-4">
                About Ali
              </h2>
              <p className="text-lg text-deep-olive mb-4 leading-relaxed">
                Ali is a yoga instructor with a unique blend of athletic excellence and spiritual practice. Originally from Colombia, she discovered yoga at age 15, finding in it a transformative discipline that helped her thrive in a competitive environment.
              </p>
              <p className="text-lg text-deep-olive mb-4 leading-relaxed">
                Her love for yoga took her to Rishikesh, India, where she studied Hatha, Vinyasa, and Ashtanga yoga. Combined with her golf scholarship background, she brings a distinctive perspective to yoga coaching that honors both physical strength and spiritual depth.
              </p>
              <p className="text-lg text-deep-olive mb-6 leading-relaxed">
                Ali teaches asana, pranayama, and meditation, believing yoga is much more than physical postures. Her mission is to help students build body awareness, quiet their minds, and experience freedom.
              </p>
              <Link href="/about" className="btn btn-primary">
                Read Ali's Story
              </Link>
            </div>

            {/* Right: Image Placeholder */}
            <div className="h-96 bg-gradient-to-br from-soft-clay to-warm-sand rounded-2xl flex items-center justify-center order-first lg:order-last">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <p className="text-sm font-medium">Ali Yoga</p>
              </div>
            </div>
          </div>
        </Section>

        {/* 6. Testimonials Preview */}
        <Section size="lg" background="white">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-deep-olive max-w-2xl mx-auto">
              Real transformations from people just like you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {coachingTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/testimonials" className="btn btn-outline">
              Read More Testimonials
            </Link>
          </div>
        </Section>

        {/* 7. Retreat CTA Section */}
        <CTASection
          headline="Immersive Wellness Experiences"
          description="Join us for a transformative retreat that combines deep practice, beautiful settings, and authentic community. Retreats fill quickly—join our waitlist to be notified of upcoming dates."
          primaryCtaLabel="View Retreats"
          primaryCtaHref="/retreats"
          secondaryCtaLabel="Join Waitlist"
          secondaryCtaHref="/book"
          background="olive"
        />

        {/* 8. Blog Preview */}
        <Section size="lg" background="cream">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              Latest From the Blog
            </h2>
            <p className="text-lg text-deep-olive max-w-2xl mx-auto">
              Insights on yoga, breathwork, and holistic wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {blogPreview.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog" className="btn btn-primary">
              Read the Blog
            </Link>
          </div>
        </Section>

        {/* 9. Final CTA Section */}
        <CTASection
          headline="Ready to Transform Your Practice?"
          description="Whether you're looking for private coaching, golf-specific yoga, or an immersive retreat, we're here to support your journey toward freedom, focus, and flow."
          primaryCtaLabel="Book a Free Consultation"
          primaryCtaHref="/book"
          background="gradient"
        />
      </main>
      <Footer />
    </>
  );
}
