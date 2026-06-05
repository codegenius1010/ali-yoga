import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';
import { Section } from '@components/layout/Section';
import { Container } from '@components/layout/Container';
import { Breadcrumbs } from '@components/sections/Breadcrumbs';
import { CTASection } from '@components/sections/CTASection';
import { JsonLd } from '@components/sections/JsonLd';

export const metadata: Metadata = {
  title: "About Ali | Yoga Teacher & Wellness Coach",
  description:
    "Meet Ali, a yoga teacher trained in Rishikesh, India with a background in competitive athletics. Learn about her journey from Colombia to becoming a trusted yoga coach.",
  keywords: [
    'yoga teacher',
    'ali yoga',
    'yoga instructor',
    'yoga coach',
    'about ali',
    'yoga for golfers instructor',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aliyoga.com/about',
    title: 'About Ali | Yoga Teacher & Wellness Coach',
    description:
      'Meet Ali, a yoga teacher trained in Rishikesh with a unique blend of athletic excellence and spiritual practice.',
    images: [
      {
        url: 'https://aliyoga.com/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Ali',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Ali | Yoga Teacher & Wellness Coach',
    description:
      'Meet Ali, a yoga teacher trained in Rishikesh with a unique blend of athletic excellence and spiritual practice.',
  },
  canonical: 'https://aliyoga.com/about',
};

// Person schema for JSON-LD
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ali',
  jobTitle: 'Yoga Teacher and Wellness Coach',
  description:
    'Certified yoga teacher trained in Rishikesh, India. Specializes in yoga for golfers, private coaching, and wellness retreats.',
  url: 'https://aliyoga.com',
  sameAs: [
    'https://instagram.com/aliyoga',
    'https://facebook.com/aliyoga',
  ],
  knowsAbout: [
    'Yoga',
    'Asana',
    'Pranayama',
    'Meditation',
    'Breathwork',
    'Yoga for Athletes',
    'Wellness Coaching',
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
      name: 'About Ali',
      item: 'https://aliyoga.com/about',
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* JSON-LD Schemas */}
        <JsonLd data={personSchema} />
        <JsonLd data={breadcrumbSchema} />

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'About Ali' },
          ]}
        />

        {/* 1. Founder Hero */}
        <Section size="lg" background="white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="h-96 lg:h-full min-h-[500px] rounded-2xl flex items-center justify-center order-last lg:order-first overflow-hidden">
              <Image
                src="/images/AliHeadshot.webp"
                alt="Ali - Yoga Teacher and Wellness Coach"
                width={500}
                height={600}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>

            {/* Right: Content */}
            <div>
              <h1 className="text-5xl sm:text-6xl font-serif font-bold text-charcoal-brown mb-4">
                About Ali
              </h1>
              <p className="text-xl text-deep-olive mb-8 leading-relaxed">
                I'm a yoga teacher and wellness coach with a unique blend of athletic excellence
                and spiritual practice. My mission is to help you build body awareness, quiet your
                mind, and experience freedom—both on and off the mat.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-soft-clay text-2xl flex-shrink-0">✓</span>
                  <p className="text-deep-olive text-lg">Trained in Rishikesh, India</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-soft-clay text-2xl flex-shrink-0">✓</span>
                  <p className="text-deep-olive text-lg">Background in competitive athletics</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-soft-clay text-2xl flex-shrink-0">✓</span>
                  <p className="text-deep-olive text-lg">Specialist in yoga for golfers</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 2. Origin Story */}
        <Section size="lg" background="cream">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <span className="inline-block text-soft-clay text-sm font-semibold uppercase tracking-wider mb-4">
                My Journey Begins
              </span>
              <h2 className="text-4xl font-serif font-bold text-charcoal-brown mb-6">
                From Colombia to Yoga
              </h2>
              <p className="text-lg text-deep-olive mb-4 leading-relaxed">
                I'm originally from Colombia. Growing up, I was athletic and competitive—but I was
                always looking for something deeper, something that would help me thrive not just
                physically, but emotionally and spiritually.
              </p>
              <p className="text-lg text-deep-olive mb-4 leading-relaxed">
                At age 15, I discovered yoga. It became a transformative discipline that changed
                everything. Through yoga, I found a way to channel my competitive energy into
                something meaningful. I learned to quiet my mind, listen to my body, and connect
                with something larger than myself.
              </p>
              <p className="text-lg text-deep-olive leading-relaxed">
                Yoga became more than exercise—it became a philosophy for living. It taught me that
                true strength comes from balance, that focus comes from breath, and that freedom
                comes from understanding ourselves deeply.
              </p>
            </div>

            {/* Right: Image */}
            <div className="h-80 rounded-2xl flex items-center justify-center order-last lg:order-first overflow-hidden">
              <Image
                src="/images/AliPose1.webp"
                alt="Ali in yoga meditation pose"
                width={500}
                height={320}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </Section>

        {/* 3. Golf and Yoga Connection */}
        <Section size="lg" background="white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="h-80 rounded-2xl flex items-center justify-center overflow-hidden">
              <Image
                src="/images/AliPose2.webp"
                alt="Ali in yoga practice pose"
                width={500}
                height={320}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>

            {/* Right: Content */}
            <div>
              <span className="inline-block text-soft-clay text-sm font-semibold uppercase tracking-wider mb-4">
                Athlete's Journey
              </span>
              <h2 className="text-4xl font-serif font-bold text-charcoal-brown mb-6">
                Golf Scholarship & Athletic Excellence
              </h2>
              <p className="text-lg text-deep-olive mb-4 leading-relaxed">
                My yoga practice served me well in competitive environments. It gave me the mental
                clarity and physical resilience I needed to excel athletically. My dedication and
                discipline earned me a golf scholarship to Jacksonville State University.
              </p>
              <p className="text-lg text-deep-olive mb-4 leading-relaxed">
                Golf taught me something yoga had shown me: that the real game is mental. Your
                breath, your focus, your body awareness—these determine your performance far more
                than raw technique.
              </p>
              <p className="text-lg text-deep-olive leading-relaxed">
                This is why I'm so passionate about yoga for golfers. I understand both worlds. I
                know the athlete's mindset and the yogi's heart. I can help you bring yoga into
                your golf game in a way that actually works for competitive athletes.
              </p>
            </div>
          </div>
        </Section>

        {/* 4. India Training */}
        <Section size="lg" background="cream">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="order-last lg:order-first">
              <span className="inline-block text-soft-clay text-sm font-semibold uppercase tracking-wider mb-4">
                Spiritual Deepening
              </span>
              <h2 className="text-4xl font-serif font-bold text-charcoal-brown mb-6">
                Rishikesh, India: Where Yoga Deepened
              </h2>
              <p className="text-lg text-deep-olive mb-4 leading-relaxed">
                My love for yoga eventually led me to Rishikesh, India—the birthplace of yoga.
                This was a pivotal moment in my life. I went to the source, to study with teachers
                who had dedicated their lives to this ancient practice.
              </p>
              <p className="text-lg text-deep-olive mb-4 leading-relaxed">
                I studied Hatha, Vinyasa, and Ashtanga yoga—learning not just the physical
                postures, but the philosophy, the breath work, the meditation practices that make
                yoga truly transformative. I learned from masters who embodied what yoga really
                means: liberation, clarity, and inner peace.
              </p>
              <p className="text-lg text-deep-olive leading-relaxed">
                Rishikesh taught me that yoga is not a workout—it's a way of being. Every practice,
                every breath, every moment of awareness is an opportunity to know yourself more
                deeply.
              </p>
            </div>

            {/* Right: Image Placeholder */}
            <div className="h-80 bg-gradient-to-br from-sage to-warm-sand rounded-2xl flex items-center justify-center order-first lg:order-last overflow-hidden">
              <Image
                src="/india-rishikesh.jpg"
                alt="Rishikesh, India - yoga training location"
                width={600}
                height={320}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </Section>

        {/* 5. Teaching Philosophy */}
        <Section size="lg" background="white">
          <div className="text-center mb-16">
            <span className="inline-block text-soft-clay text-sm font-semibold uppercase tracking-wider mb-4">
              My Approach
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              My Teaching Philosophy
            </h2>
            <p className="text-xl text-deep-olive max-w-3xl mx-auto leading-relaxed">
              I teach asana, pranayama, and meditation—but more importantly, I teach presence.
              Yoga is not about touching your toes or performing perfect postures. It's about
              understanding yourself: your patterns, your breath, your capacity for awareness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {[
              {
                title: 'Asana (Physical Practice)',
                description:
                  'Yoga postures are tools for building strength, flexibility, and body awareness. We meet you where you are—no judgment, no comparison.',
              },
              {
                title: 'Pranayama (Breathing)',
                description:
                  'Your breath is your anchor. Through breathing practices, we calm the nervous system, sharpen focus, and access deeper states of awareness.',
              },
              {
                title: 'Meditation (Mind)',
                description:
                  'Meditation is not about emptying your mind. It\'s about noticing your thoughts, finding stillness, and experiencing clarity.',
              },
              {
                title: 'Body Awareness',
                description:
                  'Learning to feel your body deeply is transformative. This awareness prevents injury, improves performance, and deepens presence.',
              },
              {
                title: 'Gentleness & Discipline',
                description:
                  'Yoga is a balance of effort and surrender. Consistent, gentle practice creates lasting transformation without force or strain.',
              },
              {
                title: 'Freedom',
                description:
                  'The ultimate goal of my teaching: helping you experience freedom. Freedom from tension, from self-judgment, from limitation.',
              },
            ].map((pillar, index) => (
              <div key={index} className="bg-cream p-8 rounded-lg border border-warm-sand">
                <h3 className="text-lg font-serif font-bold text-charcoal-brown mb-2">
                  {pillar.title}
                </h3>
                <p className="text-deep-olive leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-soft-clay/10 to-golden-sun/10 p-12 rounded-lg border border-warm-sand">
            <p className="text-center text-lg text-charcoal-brown italic leading-relaxed">
              "My teaching helps students build body awareness, quiet the mind, and experience
              more freedom. This is yoga—not as exercise, but as a path to liberation."
            </p>
          </div>
        </Section>

        {/* 6. Personal Gallery */}
        <Section size="lg" background="cream">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              Gallery
            </h2>
            <p className="text-lg text-deep-olive max-w-2xl mx-auto">
              Moments from my journey—teaching, retreats, practice, and the beauty of yoga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="h-64 bg-gradient-to-br from-warm-sand to-soft-clay rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="text-center text-white group-hover:scale-110 transition-transform">
                  <svg
                    className="w-16 h-16 mx-auto mb-2 opacity-40"
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
                  <p className="text-sm font-medium">Photo {item}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 7. Final CTA */}
        <CTASection
          headline="Let's Begin Your Transformation"
          description="Whether you're looking for private yoga coaching, golf-specific training, immersive retreats, or online learning, I'm here to guide you. Every student is unique, and your practice should reflect that."
          primaryCtaLabel="Book Your First Session"
          primaryCtaHref="/book"
          secondaryCtaLabel="Explore Private Coaching"
          secondaryCtaHref="/private-yoga-coaching"
          background="gradient"
        />
      </main>
      <Footer />
    </>
  );
}