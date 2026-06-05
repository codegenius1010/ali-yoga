export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  lessonsCount: number;
  price: string;
  rating: number;
  students: number;
  image?: string;
  highlights?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const courses: Course[] = [
  {
    id: 'course-1',
    title: 'Yoga for Golfers: Mobility & Focus',
    slug: 'yoga-for-golfers-mobility-focus',
    description:
      'A comprehensive course designed specifically for golfers of all levels. Learn mobility sequences, rotation techniques, and mental focus practices to improve your golf game.',
    level: 'beginner',
    duration: '6 weeks',
    lessonsCount: 24,
    price: '$97',
    rating: 4.9,
    students: 342,
    highlights: [
      'Golf-specific mobility sequences',
      'Hip and shoulder opening techniques',
      'Balance and rotation training',
      'Breathwork for mental focus',
      'Pre-game warm-up routines',
      'Recovery and injury prevention',
      'Downloadable practice guides',
      'Lifetime access',
    ],
    seoTitle: 'Yoga for Golfers Course | Improve Your Game',
    seoDescription:
      'Online yoga course for golfers. Learn mobility, rotation, and mental focus techniques to improve your golf performance.',
  },
  {
    id: 'course-2',
    title: 'Complete Yoga for Beginners',
    slug: 'complete-yoga-for-beginners',
    description:
      'Start your yoga journey with this foundational course covering basics of poses, breathwork, and meditation.',
    level: 'beginner',
    duration: '4 weeks',
    lessonsCount: 16,
    price: '$79',
    rating: 4.8,
    students: 612,
    highlights: [
      'Foundational yoga poses',
      'Correct alignment principles',
      'Basic breathing techniques',
      'Guided meditations',
      'Building a daily practice',
      'Modification options for all bodies',
      'Bonus flexibility sequences',
      'Lifetime access',
    ],
    seoTitle: 'Yoga for Beginners Course | Learn Yoga Online',
    seoDescription:
      'Complete beginner yoga course with foundational poses, breathwork, and meditation. Perfect for starting your yoga practice.',
  },
  {
    id: 'course-3',
    title: 'Breathwork & Meditation Mastery',
    slug: 'breathwork-meditation-mastery',
    description:
      'Explore pranayama techniques and meditation practices to reduce stress, improve focus, and cultivate inner peace.',
    level: 'intermediate',
    duration: '5 weeks',
    lessonsCount: 20,
    price: '$87',
    rating: 4.7,
    students: 456,
    highlights: [
      'Pranayama breathing techniques',
      'Guided meditation practices',
      'Stress relief breathing',
      'Sleep improvement techniques',
      'Focus enhancement exercises',
      'Chakra awareness meditation',
      'Daily practice routines',
      'Lifetime access',
    ],
    seoTitle: 'Breathwork & Meditation Course | Online Training',
    seoDescription:
      'Master pranayama and meditation techniques for stress relief, better focus, and inner peace.',
  },
  {
    id: 'course-4',
    title: 'Vinyasa Flow: Strength & Grace',
    slug: 'vinyasa-flow-strength-grace',
    description:
      'Build strength and flowing movement with this intermediate vinyasa course. Perfect for those with some yoga experience.',
    level: 'intermediate',
    duration: '6 weeks',
    lessonsCount: 24,
    price: '$97',
    rating: 4.9,
    students: 287,
    highlights: [
      'Flowing vinyasa sequences',
      'Building strength safely',
      'Proper alignment',
      'Breath-movement coordination',
      'Progressive sequences',
      'Arm balance introduction',
      'Cool down practices',
      'Lifetime access',
    ],
    seoTitle: 'Vinyasa Flow Yoga Course | Strength & Movement',
    seoDescription:
      'Intermediate vinyasa flow course to build strength, flexibility, and graceful movement. Lifetime access.',
  },
];
