/**
 * JSON-LD Schema Generator Utilities
 * Centralized functions for generating structured data schemas
 */

export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  logo: string;
  sameAs: string[];
  address?: {
    '@type': string;
    addressCountry: string;
  };
  aggregateRating?: {
    '@type': string;
    ratingValue: string;
    ratingCount: number;
  };
}

export interface PersonSchema {
  '@context': string;
  '@type': string;
  name: string;
  jobTitle: string;
  url?: string;
  sameAs?: string[];
  knowsAbout?: string[];
  image?: string;
}

export interface ServiceSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  provider?: {
    '@type': string;
    name: string;
  };
  areaServed?: string;
}

export interface CourseSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  instructor?: {
    '@type': string;
    name: string;
  };
  numberOfLessons?: number;
  duration?: string;
  aggregateRating?: {
    '@type': string;
    ratingValue: string;
    ratingCount: number;
  };
  offers?: {
    '@type': string;
    price: string;
    priceCurrency: string;
    availability: string;
  };
}

export interface BlogPostingSchema {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: {
    '@type': string;
    name: string;
  };
  publisher?: {
    '@type': string;
    name: string;
  };
  articleBody?: string;
}

export interface FAQPageSchema {
  '@context': string;
  '@type': string;
  mainEntity: Array<{
    '@type': string;
    name: string;
    acceptedAnswer?: {
      '@type': string;
      text: string;
    };
  }>;
}

export interface BreadcrumbListSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item?: string;
  }>;
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(overrides?: Partial<OrganizationSchema>): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ali Yoga',
    description: 'Premium yoga coaching, yoga for golfers, retreats, and online courses',
    url: 'https://aliyoga.com',
    logo: 'https://aliyoga.com/logo.png',
    sameAs: [
      'https://www.instagram.com/aliyoga',
      'https://www.facebook.com/aliyoga',
      'https://www.youtube.com/@aliyoga',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    ...overrides,
  };
}

/**
 * Generate Person schema
 */
export function generatePersonSchema(overrides?: Partial<PersonSchema>): PersonSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ali',
    jobTitle: 'Yoga Teacher and Wellness Coach',
    url: 'https://aliyoga.com',
    sameAs: [
      'https://www.instagram.com/aliyoga',
      'https://www.facebook.com/aliyoga',
    ],
    knowsAbout: [
      'Yoga',
      'Breathwork',
      'Meditation',
      'Golf Performance',
      'Body Awareness',
      'Wellness Coaching',
    ],
    ...overrides,
  };
}

/**
 * Generate Service schema
 */
export function generateServiceSchema(
  name: string,
  description: string,
  overrides?: Partial<ServiceSchema>
): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Ali Yoga',
    },
    areaServed: 'US',
    ...overrides,
  };
}

/**
 * Generate Course schema
 */
export function generateCourseSchema(
  name: string,
  description: string,
  overrides?: Partial<CourseSchema>
): CourseSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    instructor: {
      '@type': 'Person',
      name: 'Ali',
    },
    ...overrides,
  };
}

/**
 * Generate BlogPosting schema
 */
export function generateBlogPostingSchema(
  headline: string,
  description: string,
  overrides?: Partial<BlogPostingSchema>
): BlogPostingSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    author: {
      '@type': 'Person',
      name: 'Ali',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ali Yoga',
    },
    ...overrides,
  };
}

/**
 * Generate FAQPage schema
 */
export function generateFAQPageSchema(
  faqs: Array<{ question: string; answer: string }>,
  overrides?: Partial<FAQPageSchema>
): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
    ...overrides,
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbListSchema(
  items: Array<{ name: string; url?: string }>,
  overrides?: Partial<BreadcrumbListSchema>
): BreadcrumbListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
    ...overrides,
  };
}

/**
 * Generate LocalBusiness schema (for Google My Business integration)
 */
export function generateLocalBusinessSchema(overrides?: Record<string, any>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ali Yoga',
    description: 'Premium yoga coaching, golf yoga, retreats, and online courses',
    url: 'https://aliyoga.com',
    sameAs: [
      'https://www.instagram.com/aliyoga',
      'https://www.facebook.com/aliyoga',
    ],
    ...overrides,
  };
}

/**
 * Generate VideoObject schema (for video content)
 */
export function generateVideoObjectSchema(
  name: string,
  description: string,
  thumbnailUrl: string,
  uploadDate: string,
  overrides?: Record<string, any>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    ...overrides,
  };
}