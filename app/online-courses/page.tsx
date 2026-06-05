import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';
import { Hero } from '@components/sections/Hero';
import { Section } from '@components/layout/Section';
import { Container } from '@components/layout/Container';
import { Breadcrumbs } from '@components/sections/Breadcrumbs';
import { CourseCard } from '@components/sections/CourseCard';
import { FAQAccordion } from '@components/sections/FAQAccordion';
import { CTASection } from '@components/sections/CTASection';
import { JsonLd } from '@components/sections/JsonLd';
import { courses } from '@content/courses';
import { faqs } from '@content/faqs';

export const metadata: Metadata = {
  title: 'Online Yoga Courses | Learn at Your Own Pace',
  description:
    'Explore our online yoga courses: yoga for golfers, breathwork, meditation, mobility, and more. Learn from Ali at your own pace with lifetime access.',
  keywords: [
    'online yoga courses',
    'yoga for golfers online',
    'online breathwork course',
    'yoga mobility course',
    'yoga online learning',
    'learn yoga online',
    'yoga course with certification',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aliyoga.com/online-courses',
    title: 'Online Yoga Courses | Learn at Your Own Pace',
    description:
      'Yoga for golfers, breathwork, meditation, mobility, and more. Learn from Ali with lifetime access to video lessons.',
    images: [
      {
        url: 'https://aliyoga.com/og-courses.jpg',
        width: 1200,
        height: 630,
        alt: 'Online Yoga Courses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Yoga Courses | Learn at Your Own Pace',
    description:
      'Online yoga courses taught by Ali. Yoga for golfers, breathwork, mobility, and more. Learn at your own pace.',
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
      name: 'Online Courses',
      item: 'https://aliyoga.com/online-courses',
    },
  ],
};

const howItWorks = [
  {
    step: 1,
    title: 'Enroll in a Course',
    description: 'Choose the course that resonates with you and gain instant access to all lessons.',
  },
  {
    step: 2,
    title: 'Learn at Your Pace',
    description:
      'Watch high-quality video lessons whenever you want. Rewatch anytime to deepen your understanding.',
  },
  {
    step: 3,
    title: 'Practice & Integrate',
    description:
      'Complete the guided practices in your home. Build consistency and watch transformation unfold.',
  },
  {
    step: 4,
    title: 'Lifetime Access',
    description:
      'Keep forever. Your course access never expires, so you can revisit lessons whenever you need them.',
  },
];

const whoCoursesFor = [
  'Beginners wanting to start a yoga practice from home',
  'Busy professionals without time for weekly classes',
  'Golfers wanting to improve mobility and mental focus',
  'Intermediate practitioners looking to deepen their practice',
  'Anyone interested in breathwork and meditation',
  'People in remote areas without local yoga studios',
  'Athletes wanting yoga for performance enhancement',
  'Those combining courses with private coaching for personalized guidance',
];

export default function OnlineCoursesPage() {
  const golfCourse = courses.find((c) => c.slug === 'yoga-for-golfers-mobility-focus');
  const otherCourses = courses.filter((c) => c.slug !== 'yoga-for-golfers-mobility-focus');
  const coursesFAQs = faqs.filter((f) => f.category === 'Online Courses');

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
        name: 'Online Courses',
        item: 'https://aliyoga.com/online-courses',
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        {/* JSON-LD Schemas */}
        <JsonLd data={breadcrumbSchema} />

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Online Courses' },
          ]}
        />

        {/* 1. Hero Section */}
        <Hero
          headline="Learn Yoga at Your Own Pace"
          subheadline="High-quality online courses from Ali covering yoga for golfers, breathwork, meditation, mobility, and more. Lifetime access, learn anytime, anywhere."
          backgroundImage="/online-courses-hero.jpg"
          primaryCta={{
            label: 'Explore Our Courses',
            href: '#courses',
          }}
          secondaryCta={{
            label: 'Combine with Private Coaching',
            href: '/private-yoga-coaching',
          }}
        />

        {/* 2. Featured Golf Yoga Course */}
        {golfCourse && (
          <Section size="lg" background="cream">
            <div className="text-center mb-16">
              <span className="inline-block bg-soft-clay text-white px-4 py-2 rounded-full text-sm font-semibold uppercase mb-4">
                Featured Course
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
                {golfCourse.title}
              </h2>
              <p className="text-lg text-deep-olive max-w-2xl mx-auto">
                Our most popular course, designed specifically for golfers wanting to improve
                mobility, balance, rotation, and mental focus.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Image Placeholder */}
              <div className="h-96 bg-gradient-to-br from-golden-sun to-soft-clay rounded-2xl flex items-center justify-center">
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
                  <p className="text-sm font-medium">Featured Course</p>
                </div>
              </div>

              {/* Right: Course Details */}
              <div>
                <div className="space-y-6 mb-8">
                  <div>
                    <p className="text-sm font-semibold text-soft-clay uppercase tracking-wider mb-2">
                      Duration
                    </p>
                    <p className="text-2xl font-bold text-charcoal-brown">{golfCourse.duration}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-soft-clay uppercase tracking-wider mb-2">
                      What You'll Learn
                    </p>
                    <ul className="space-y-2">
                      {(golfCourse.highlights ?? []).slice(0, 5).map((highlight, index) => (
                        <li key={index} className="flex gap-2 text-deep-olive">
                          <span className="text-golden-sun flex-shrink-0">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-warm-sand">
                    <div>
                      <p className="text-sm font-semibold text-soft-clay uppercase tracking-wider">
                        Rating
                      </p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-golden-sun">
                            ⭐
                          </span>
                        ))}
                        <span className="text-sm text-deep-olive ml-2">
                          {golfCourse.rating} ({golfCourse.students.toLocaleString()} students)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://courses.aliyoga.com/golf-yoga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full text-center mb-4"
                >
                  Enroll Now - ${golfCourse.price}
                </a>
                <p className="text-sm text-deep-olive text-center">
                  30-day money-back guarantee. Lifetime access.
                </p>
              </div>
            </div>
          </Section>
        )}

        {/* 3. Course Cards */}
        <Section id="courses" size="lg" background="white">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              All Courses
            </h2>
            <p className="text-lg text-deep-olive max-w-2xl mx-auto">
              Explore our complete library of online yoga courses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </Section>

        {/* 4. How Online Courses Work */}
        <Section size="lg" background="cream">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              How Online Courses Work
            </h2>
            <p className="text-lg text-deep-olive max-w-2xl mx-auto">
              A simple, flexible learning experience designed for your busy life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-soft-clay to-golden-sun rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-charcoal-brown mb-2">
                  {item.title}
                </h3>
                <p className="text-deep-olive">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 5. Who Courses Are For */}
        <Section size="lg" background="white">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              Who These Courses Are For
            </h2>
            <p className="text-lg text-deep-olive max-w-2xl mx-auto">
              Whether you're a beginner or experienced practitioner, we have courses for your level
              and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {whoCoursesFor.map((audience, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-lg border-2 border-warm-sand hover:border-soft-clay transition-colors"
              >
                <div className="flex gap-3">
                  <span className="text-soft-clay text-2xl flex-shrink-0">•</span>
                  <p className="text-deep-olive text-lg">{audience}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 6. Course Benefits */}
        <Section size="lg" background="cream">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              Why Choose Our Online Courses
            </h2>
            <p className="text-lg text-deep-olive max-w-2xl mx-auto">
              High-quality content, expert instruction, and flexibility that fits your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Learn from Ali',
                description:
                  'Taught by a certified yoga instructor with years of experience and deep expertise.',
              },
              {
                title: 'Lifetime Access',
                description:
                  'Enroll once, keep forever. Access your courses anytime, anywhere, on any device.',
              },
              {
                title: 'Lifetime Access',
                description: 'Rewatch lessons as often as you need. Your learning never stops.',
              },
              {
                title: 'Flexible Learning',
                description:
                  'No fixed schedule. Practice when it suits you—early morning, lunch break, or evening.',
              },
              {
                title: 'Money-Back Guarantee',
                description:
                  'Try any course risk-free for 30 days. If it\'s not right, we\'ll refund you.',
              },
              {
                title: 'Community',
                description:
                  'Join a community of practitioners. Access optional group calls and discussion forums.',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-warm-sand hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-serif font-bold text-charcoal-brown mb-2">
                  {benefit.title}
                </h3>
                <p className="text-deep-olive">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 7. FAQ Section */}
        {coursesFAQs.length > 0 && (
          <Section size="lg" background="white">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-deep-olive max-w-2xl mx-auto">
                Got questions about our online courses? We've got answers.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={coursesFAQs} />
            </div>
          </Section>
        )}

        {/* 8. Final CTA - Course Platform */}
        <CTASection
          headline="Ready to Transform Your Practice?"
          description="Choose from our library of online yoga courses. Enroll today and gain instant lifetime access to all lessons. Learn at your own pace, from home, on your schedule."
          primaryCtaLabel="Explore All Courses"
          primaryCtaHref="https://courses.aliyoga.com"
          secondaryCtaLabel="Schedule Private Coaching"
          secondaryCtaHref="/private-yoga-coaching"
          background="gradient"
        />
      </main>
      <Footer />
    </>
  );
}