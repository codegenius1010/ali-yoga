interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ali Yoga',
  url: 'https://aliyoga.com',
  description: 'Premium yoga coaching and wellness retreats',
  sameAs: [
    'https://instagram.com/aliyoga',
    'https://facebook.com/aliyoga',
  ],
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ali',
  jobTitle: 'Yoga Instructor',
  url: 'https://aliyoga.com',
  description: 'Premium yoga coach specializing in private coaching and yoga for golfers',
  image: 'https://aliyoga.com/images/ali.jpg',
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ali Yoga',
  url: 'https://aliyoga.com',
};
