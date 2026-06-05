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
import { courses } from '@content/courses';

export const metadata: Metadata = {
  title: 'Yoga for Golfers | Improve Mobility, Balance & Mental Focus',
  description:
    'Golf-specific yoga coaching to improve mobility, flexibility, rotation, balance, and mental focus. For recreational and competitive golfers of all ages.',
  keywords: [
    'yoga for golfers',
    'golf yoga',
    'golf mobility',
    'yoga for golf flexibility',
    'golf balance exercises',
    'yoga for golf swing',
    'breathwork golf focus',
    'golf stretching exercises',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aliyoga.com/yoga-for-golfers',
    title: 'Yoga for Golfers | Improve Mobility, Balance & Mental Focus',
    description:
      'Golf-specific yoga to improve mobility, flexibility, rotation, and mental presence on the course.',
    images: [
      {
        url: 'https://aliyoga.com/og-golf-yoga.jpg',
        width: 1200,
        height: 630,
        alt: 'Yoga for Golfers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yoga for Golfers | Improve Mobility, Balance & Mental Focus',
    description:
      'Golf-specific yoga coaching to improve your mobility, flexibility, rotation, balance, and mental focus.',
  },
};

// Service schema for JSON-LD
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Yoga for Golfers',
  description:
    'A golf-focused yoga method designed to improve body awareness, flexibility, rotation, breathing, and mental presence on and off the course.',
  provider: {
    '@type': 'Organization',
    name: 'Ali Yoga',
    url: 'https://aliyoga.com',
  },
  areaServed: 'US',
  hasOfferingType: 'CoachingService',
};

// FAQ schema for JSON-LD
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need to be flexible to start yoga for golfers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not at all! Flexibility improves through practice. We focus on mobility, rotation, and balance—all things that help your golf game, regardless of current flexibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly will I see results in my golf game?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many golfers notice improvements within 3-4 weeks of consistent practice. Better rotation, balance, and mental focus directly impact your swing and score.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this only for competitive golfers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No! Yoga for golfers is for anyone who plays golf—recreational, competitive, casual players, or those returning to golf after injury.',
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
      name: 'Yoga for Golfers',
      item: 'https://aliyoga.com/yoga-for-golfers',
    },
  ],
};

const problems = [
  { title: 'Tight Hips', description: 'Limited range of motion restricts rotation and swing power' },
  { title: 'Limited Rotation', description: 'Reduced torso rotation affects consistency and distance' },
  {
    title: 'Low Back Tension',
    description: 'Tightness and discomfort from repetitive golf movements',
  },
  { title: 'Poor Balance', description: 'Unsteady stance affects accuracy and swing mechanics' },
  { title: 'Inconsistent Focus', description: 'Mental distractions impact performance under pressure' },
  {
    title: 'Lack of Body Awareness',
    description: 'Difficulty feeling proper positioning during swing',
  },
];

const methodPillars = [
  { title: 'Mobility', description: 'Dynamic movement to increase range of motion and fluidity' },
  { title: 'Balance', description: 'Stability training to ground your stance and improve control' },
  { title: 'Rotation', description: 'Hip and torso opening for powerful, consistent swings' },
  {
    title: 'Breath',
    description: 'Pranayama techniques to calm nerves and sharpen focus on every shot',
  },
  { title: 'Focus', description: 'Mental presence training to stay in the zone throughout your round' },
  {
    title: 'Recovery',
    description: 'Restorative practices to reduce soreness and prevent injury',
  },
];

const sessionIncludes = [
  'Dynamic mobility flows targeting golf-relevant movements',
  'Yoga postures modified for golfer bodies and needs',
  'Pranayama breathwork for focus and calm',
  'Body awareness training for better swing mechanics',
  'Balance exercises to strengthen your foundation',
  'Guided meditation for mental clarity and presence',
  'Recovery guidance and injury prevention strategies',
];

const whoItIsFor = [
  'Recreational golfers wanting to improve their game',
  'Competitive golfers seeking a performance edge',
  'Older golfers looking to maintain mobility and reduce pain',
  'Golfers with stiffness or limited range of motion',
  'Anyone wanting better mental focus on the course',
];

export default function YogaForGolfersPage() {
  const golfYogaCourse = courses.find((c) => c.slug === 'yoga-for-golfers-mobility-focus');
  const golfTestimonials = testimonials.filter((t) => t.category === 'Yoga for Golfers');
  const golfFAQs = faqs.filter((f) => f.category === 'Yoga for Golfers');

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
            { label: 'Yoga for Golfers' },
          ]}
        />

        {/* 1. Hero Section */}
        <Hero
          headline="Yoga for Golfers Who Want More Mobility, Balance & Focus"
          subheadline="A golf-focused yoga method designed to improve body awareness, flexibility, rotation, breathing, and mental presence on and off the course."
          backgroundImage="/images/home-hero-yoga-golf.png"
          primaryCta={{
            label: 'Start Golf Yoga Coaching',
            href: '/book',
          }}
          secondaryCta={{
            label: 'View Online Course',
            href: '/online-courses',
          }}
        />

        {/* 2. Problem Section */}
        <Section size="lg" background="cream">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              Common Golfer Challenges
            </h2>
            <p className="text-lg text-deep-olive max-w-2xl mx-auto">
              Many golfers experience these issues that limit their performance. Our yoga method
              addresses each one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-warm-sand hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-serif font-bold text-charcoal-brown mb-2">
                  {problem.title}
                </h3>
                <p className="text-deep-olive">{problem.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 3. Method Section */}
        <Section size="lg" background="white">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              Our Method: Six Core Pillars
            </h2>
            <p className="text-lg text-deep-olive max-w-2xl mx-auto">
              A comprehensive approach to transform your body, breath, and mind on the course.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodPillars.map((pillar, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-soft-clay to-golden-sun rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-charcoal-brown mb-2">
                  {pillar.title}
                </h3>
                <p className="text-deep-olive">{pillar.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 4. What Sessions Include */}
        <Section size="lg" background="cream">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <h2 className="text-4xl font-serif font-bold text-charcoal-brown mb-6">
                What Each Session Includes
              </h2>
              <div className="space-y-4">
                {sessionIncludes.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-golden-sun text-xl flex-shrink-0 pt-1">✓</span>
                    <p className="text-deep-olive text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image Placeholder */}
            <div className="h-96 bg-gradient-to-br from-soft-clay to-warm-sand rounded-2xl flex items-center justify-center">
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <p className="text-sm font-medium">Golf Yoga Sessions</p>
              </div>
            </div>
          </div>
        </Section>

        {/* 5. Who It Is For */}
        <Section size="lg" background="white">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              Who This Is For
            </h2>
            <p className="text-lg text-deep-olive max-w-2xl mx-auto">
              Whether you're a recreational weekend golfer or a competitive athlete, yoga for
              golfers can improve your game.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {whoItIsFor.map((audience, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-lg border-2 border-warm-sand hover:border-soft-clay transition-colors"
              >
                <div className="flex gap-3">
                  <span className="text-soft-clay text-2xl flex-shrink-0">•</span>
                  <p className="text-deep-olive text-lg font-medium">{audience}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 6. Online Course CTA */}
        {golfYogaCourse && (
          <Section size="lg" background="cream">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Image Placeholder */}
              <div className="h-80 bg-gradient-to-br from-golden-sun to-soft-clay rounded-2xl flex items-center justify-center order-last lg:order-first">
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
                  <p className="text-sm font-medium">Online Course</p>
                </div>
              </div>

              {/* Right: Content */}
              <div>
                <h2 className="text-4xl font-serif font-bold text-charcoal-brown mb-4">
                  Learn at Your Own Pace
                </h2>
                <p className="text-lg text-deep-olive mb-4 leading-relaxed">
                  Our online course brings yoga for golfers into your home. Access 24 video
                  lessons covering mobility flows, golf-specific postures, breathwork, and mental
                  focus training.
                </p>
                <p className="text-lg text-deep-olive mb-6 leading-relaxed">
                  Perfect for golfers who want to practice on their schedule while building a
                  strong foundation for your game.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/online-courses" className="btn btn-primary text-center">
                    View Course Details
                  </a>
                  <a href="/book" className="btn btn-outline text-center">
                    Try Private Session First
                  </a>
                </div>
              </div>
            </div>
          </Section>
        )}

        {/* 7. Private Coaching CTA */}
        <Section size="lg" background="white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <h2 className="text-4xl font-serif font-bold text-charcoal-brown mb-4">
                One-on-One Coaching
              </h2>
              <p className="text-lg text-deep-olive mb-4 leading-relaxed">
                Get personalized yoga coaching designed specifically for your golf game. Ali works
                with you to address your unique needs—whether that's hip tightness, improving
                rotation, or sharpening mental focus.
              </p>
              <p className="text-lg text-deep-olive mb-4 leading-relaxed">
                Private sessions offer real-time feedback on your alignment, breathing, and
                body awareness, accelerating your progress on and off the course.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex gap-3">
                  <span className="text-golden-sun text-xl flex-shrink-0">✓</span>
                  <p className="text-deep-olive">Personalized to your golf-specific needs</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-golden-sun text-xl flex-shrink-0">✓</span>
                  <p className="text-deep-olive">Real-time alignment and breathing feedback</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-golden-sun text-xl flex-shrink-0">✓</span>
                  <p className="text-deep-olive">Flexible scheduling (in-person or online)</p>
                </div>
              </div>

              <a href="/private-yoga-coaching" className="btn btn-primary">
                Learn About Private Coaching
              </a>
            </div>

            {/* Right: Image Placeholder */}
            <div className="h-80 bg-gradient-to-br from-warm-sand to-golden-sun rounded-2xl flex items-center justify-center">
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
                    d="M17 20h5v-2a3 3 0 00-5.856-1.488M15 6a3 3 0 11-6 0 3 3 0 016 0zM15 16a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
                <p className="text-sm font-medium">Private Coaching</p>
              </div>
            </div>
          </div>
        </Section>

        {/* 8. Testimonials */}
        {golfTestimonials.length > 0 && (
          <Section size="lg" background="cream">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
                Real Results From Golfers
              </h2>
              <p className="text-lg text-deep-olive max-w-2xl mx-auto">
                See how yoga for golfers has transformed the games of clients like you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {golfTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </Section>
        )}

        {/* 9. FAQ Section */}
        {golfFAQs.length > 0 && (
          <Section size="lg" background="white">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-deep-olive max-w-2xl mx-auto">
                Find answers to common questions about yoga for golfers.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={golfFAQs} />
            </div>
          </Section>
        )}

        {/* 10. Final CTA Section */}
        <CTASection
          headline="Ready to Transform Your Golf Game?"
          description="Whether you want to improve mobility, add distance, sharpen mental focus, or just feel better on the course, yoga for golfers can help. Start with a private session or explore our online course."
          primaryCtaLabel="Book Your First Session"
          primaryCtaHref="/book"
          secondaryCtaLabel="Explore Online Course"
          secondaryCtaHref="/online-courses"
          background="gradient"
        />
      </main>
      <Footer />
    </>
  );
}