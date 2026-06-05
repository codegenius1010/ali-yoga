import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';
import { Section } from '@components/layout/Section';
import { Container } from '@components/layout/Container';
import { Breadcrumbs } from '@components/sections/Breadcrumbs';
import { BlogCard } from '@components/sections/BlogCard';
import { JsonLd } from '@components/sections/JsonLd';
import { blogPosts } from '@content/blog';

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata dynamically for each post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: [post.title, post.category, 'yoga', 'blog'],
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `https://aliyoga.com/blog/${post.slug}`,
      title: post.seoTitle,
      description: post.seoDescription,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.image],
    },
    article: {
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts
  const relatedPosts = blogPosts.filter((p) => post.relatedPostIds.includes(p.id)).slice(0, 3);

  // BlogPosting schema for JSON-LD
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seoDescription,
    image: post.image,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    articleBody: post.content,
    keywords: post.category,
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
        name: 'Blog',
        item: 'https://aliyoga.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://aliyoga.com/blog/${post.slug}`,
      },
    ],
  };

  // Format date
  const publishDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Header />
      <main>
        {/* JSON-LD Schemas */}
        <JsonLd data={blogPostingSchema} />
        <JsonLd data={breadcrumbSchema} />

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title },
          ]}
        />

        {/* Featured Image */}
        <Section size="lg" background="white">
          <div className="h-96 bg-gradient-to-br from-warm-sand to-soft-clay rounded-2xl flex items-center justify-center overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"%3E%3Crect fill="%23E8D8C3" width="1200" height="630"/%3E%3C/svg%3E';
              }}
            />
          </div>
        </Section>

        {/* Blog Post Header */}
        <Section size="lg" background="cream">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="inline-block bg-soft-clay text-white px-3 py-1 rounded-full text-sm font-semibold uppercase">
                {post.category}
              </span>
              <span className="inline-block text-deep-olive text-sm">{publishDate}</span>
              <span className="inline-block text-deep-olive text-sm">By {post.author}</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-charcoal-brown mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-deep-olive leading-relaxed">{post.description}</p>
          </div>
        </Section>

        {/* Blog Post Content */}
        <Section size="lg" background="white">
          <div className="max-w-3xl mx-auto prose prose-lg text-deep-olive">
            {/* Simple markdown-like rendering */}
            <div
              className="text-lg leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/^# (.*?)$/gm, '<h1 class="text-4xl font-serif font-bold text-charcoal-brown mt-8 mb-4">$1</h1>')
                  .replace(/^## (.*?)$/gm, '<h2 class="text-2xl font-serif font-bold text-charcoal-brown mt-6 mb-3">$2</h2>')
                  .replace(/^### (.*?)$/gm, '<h3 class="text-xl font-serif font-bold text-charcoal-brown mt-4 mb-2">$3</h3>')
                  .replace(/\n\n/g, '</p><p class="mb-4">')
                  .replace(/^(- .*?)$/gm, '<li>$1</li>')
                  .replace(/(<li>.*<\/li>)/s, '<ul class="list-disc list-inside mb-4">$1</ul>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  .replace(/^(?!<[hu]|<[lp]|<u)(.+)$/gm, '<p class="mb-4">$1</p>'),
              }}
            />
          </div>
        </Section>

        {/* Author Bio */}
        <Section size="lg" background="cream">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg border border-warm-sand">
            <div className="flex gap-6 items-start">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-soft-clay to-golden-sun flex-shrink-0 flex items-center justify-center text-white">
                <svg
                  className="w-12 h-12"
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
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal-brown mb-2">
                  About {post.author}
                </h3>
                <p className="text-deep-olive mb-4">
                  {post.author} is a certified yoga teacher trained in Rishikesh, India, with a
                  background in competitive athletics. She specializes in yoga for golfers, private
                  coaching, and transformative retreats.
                </p>
                <Link href="/about" className="text-soft-clay font-semibold hover:text-soft-clay/80 transition-colors">
                  Learn more about {post.author} →
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <Section size="lg" background="white">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-charcoal-brown mb-4">
                Related Articles
              </h2>
              <p className="text-lg text-deep-olive max-w-2xl mx-auto">
                Explore more articles on similar topics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard
                  key={relatedPost.id}
                  post={{
                    id: relatedPost.id,
                    title: relatedPost.title,
                    slug: relatedPost.slug,
                    excerpt: relatedPost.description,
                    publishedAt: relatedPost.publishedAt,
                    category: relatedPost.category,
                    author: relatedPost.author,
                    image: relatedPost.image,
                  }}
                />
              ))}
            </div>
          </Section>
        )}

        {/* Back to Blog CTA */}
        <Section size="md" background="cream">
          <div className="text-center">
            <Link href="/blog" className="btn btn-primary">
              ← Back to All Articles
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}