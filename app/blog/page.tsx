import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';
import { Section } from '@components/layout/Section';
import { Container } from '@components/layout/Container';
import { Breadcrumbs } from '@components/sections/Breadcrumbs';
import { BlogCard } from '@components/sections/BlogCard';
import { JsonLd } from '@components/sections/JsonLd';
import { blogPosts } from '@content/blog';

export const metadata: Metadata = {
  title: 'Yoga Blog | Articles on Yoga, Breathwork & Meditation',
  description:
    'Read articles about yoga, breathwork, meditation, yoga for golfers, and wellness. Expert insights from Ali on yoga practice and transformation.',
  keywords: [
    'yoga blog',
    'yoga articles',
    'yoga for golfers',
    'breathwork',
    'meditation',
    'yoga tips',
    'yoga practice',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aliyoga.com/blog',
    title: 'Yoga Blog | Articles on Yoga, Breathwork & Meditation',
    description:
      'Read expert articles about yoga, breathwork, meditation, and wellness from yoga teacher Ali.',
    images: [
      {
        url: 'https://aliyoga.com/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Yoga Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yoga Blog | Articles on Yoga, Breathwork & Meditation',
    description:
      'Read expert articles about yoga, breathwork, meditation, and wellness from yoga teacher Ali.',
  },
  canonical: 'https://aliyoga.com/blog',
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
      name: 'Blog',
      item: 'https://aliyoga.com/blog',
    },
  ],
};

// BlogPosting collection schema
const blogCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Yoga Blog',
  description:
    'Articles about yoga, breathwork, meditation, and wellness from yoga teacher Ali.',
  url: 'https://aliyoga.com/blog',
};

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // Group posts by category
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <>
      <Header />
      <main>
        {/* JSON-LD Schemas */}
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={blogCollectionSchema} />

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog' },
          ]}
        />

        {/* Hero Section */}
        <Section size="md" background="cream">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-charcoal-brown mb-4">
              Yoga Blog
            </h1>
            <p className="text-xl text-deep-olive max-w-2xl mx-auto">
              Articles about yoga, breathwork, meditation, and wellness. Learn from expert insights
              and transform your practice.
            </p>
          </div>
        </Section>

        {/* Category Filter (Informational) */}
        <Section size="md" background="white">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-soft-clay uppercase tracking-wider mb-6">
              Explore By Category
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-cream border border-warm-sand rounded-full text-deep-olive text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* Featured Post */}
        {sortedPosts.length > 0 && (
          <Section size="lg" background="white">
            <div className="text-center mb-12">
              <span className="inline-block bg-soft-clay text-white px-4 py-2 rounded-full text-sm font-semibold uppercase mb-4">
                Latest
              </span>
              <h2 className="text-3xl font-serif font-bold text-charcoal-brown mb-2">
                {sortedPosts[0].title}
              </h2>
              <p className="text-deep-olive mb-6">{sortedPosts[0].description}</p>
              <Link href={`/blog/${sortedPosts[0].slug}`} className="btn btn-primary">
                Read Article
              </Link>
            </div>
          </Section>
        )}

        {/* Blog Posts Grid */}
        <Section size="lg" background="cream">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-brown mb-4">
              All Articles
            </h2>
            <p className="text-lg text-deep-olive max-w-2xl mx-auto">
              Explore our complete library of yoga and wellness articles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.slice(1).map((post) => (
              <BlogCard
                key={post.id}
                post={{
                  id: post.id,
                  title: post.title,
                  slug: post.slug,
                  excerpt: post.description,
                  publishedAt: post.publishedAt,
                  category: post.category,
                  author: post.author,
                  image: post.image,
                }}
              />
            ))}
          </div>
        </Section>

        {/* Newsletter CTA */}
        <Section size="lg" background="white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-brown mb-4">
              Get Yoga Insights Delivered
            </h2>
            <p className="text-lg text-deep-olive mb-8">
              Subscribe to receive new articles about yoga, breathwork, and wellness directly to
              your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-warm-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-clay"
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
            <p className="text-sm text-sage mt-3">We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}