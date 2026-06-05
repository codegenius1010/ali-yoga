export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
  icon?: string;
  features?: string[];
  cta?: {
    label: string;
    href: string;
  };
}

export const services: Service[] = [
  {
    id: 'private-coaching',
    title: 'Private Yoga Coaching',
    slug: 'private-coaching',
    shortDescription:
      'One-on-one yoga sessions tailored to your body, breath, and goals.',
    description:
      'Experience personalized yoga coaching designed around your unique body, breath patterns, and wellness goals. Each session blends asana, pranayama, meditation, and body awareness to help you move with freedom and presence.',
    seoTitle: 'Private Yoga Coaching | Ali Yoga',
    seoDescription:
      'Personalized one-on-one yoga coaching designed for your body and goals. Private sessions in-person or online.',
    features: [
      'Personalized sequences',
      'Breath work guidance',
      'Meditation',
      'Body awareness training',
      'Progress tracking',
      'Flexible scheduling',
    ],
    cta: {
      label: 'Book a Session',
      href: '/book',
    },
  },
  {
    id: 'yoga-golfers',
    title: 'Yoga for Golfers',
    slug: 'yoga-for-golfers',
    shortDescription:
      'Golf-specific yoga to improve mobility, balance, rotation, and mental focus.',
    description:
      'A golf-focused yoga method designed to improve body awareness, flexibility, rotation, breathing, and mental presence on and off the course.',
    seoTitle: 'Yoga for Golfers | Improve Your Golf Game',
    seoDescription:
      'Golf-specific yoga coaching to improve mobility, balance, and focus. For recreational and competitive golfers.',
    features: [
      'Mobility training',
      'Hip and shoulder opening',
      'Balance exercises',
      'Breath work for focus',
      'Recovery guidance',
      'Mental presence coaching',
    ],
    cta: {
      label: 'Start Golf Yoga',
      href: '/yoga-for-golfers',
    },
  },
  {
    id: 'online-courses',
    title: 'Online Yoga Courses',
    slug: 'online-courses',
    shortDescription:
      'Self-paced yoga courses you can do from anywhere, anytime.',
    description:
      'Access structured yoga courses designed for flexibility, breathwork, meditation, and golf-specific mobility from the comfort of your home.',
    seoTitle: 'Online Yoga Courses | Ali Yoga',
    seoDescription:
      'Self-paced online yoga courses including yoga for golfers, mobility, and breathwork.',
    features: [
      'Self-paced learning',
      'Video lessons',
      'Downloadable guides',
      'Lifetime access',
      'Community support',
      'Progress tracking',
    ],
    cta: {
      label: 'Explore Courses',
      href: '/online-courses',
    },
  },
  {
    id: 'retreats',
    title: 'Yoga Retreats',
    slug: 'retreats',
    shortDescription:
      'Immersive wellness experiences combining yoga, meditation, and connection.',
    description:
      'Join immersive yoga retreats designed for deep practice, connection, and transformation in beautiful settings.',
    seoTitle: 'Yoga Retreats | Ali Yoga',
    seoDescription:
      'Join immersive yoga wellness retreats for holistic transformation and deep practice.',
    features: [
      'Daily yoga practice',
      'Guided meditation',
      'Breathwork sessions',
      'Nourishing meals',
      'Community connection',
      'Beautiful locations',
    ],
    cta: {
      label: 'Join a Retreat',
      href: '/retreats',
    },
  },
  {
    id: 'breathwork-meditation',
    title: 'Breathwork & Meditation',
    slug: 'breathwork-meditation',
    shortDescription:
      'Pranayama and meditation practices for clarity, calm, and presence.',
    description:
      'Learn ancient breathing techniques and meditation practices to quiet your mind, reduce stress, and cultivate inner peace.',
    seoTitle: 'Breathwork & Meditation | Ali Yoga',
    seoDescription:
      'Pranayama breathing techniques and guided meditation for stress relief and mental clarity.',
    features: [
      'Pranayama techniques',
      'Guided meditation',
      'Stress relief',
      'Mental clarity',
      'Sleep improvement',
      'Focus enhancement',
    ],
    cta: {
      label: 'Learn More',
      href: '/private-coaching',
    },
  },
];
