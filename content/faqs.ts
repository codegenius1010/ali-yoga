export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  // Private Coaching FAQs
  {
    id: 'faq-1',
    category: 'Private Coaching',
    question: 'How long are private coaching sessions?',
    answer:
      'Private sessions are typically 60 minutes, though 30-minute and 90-minute options are available. We can customize the length based on your needs and schedule.',
  },
  {
    id: 'faq-2',
    category: 'Private Coaching',
    question: 'Do you offer in-person or online sessions?',
    answer:
      'We offer both! In-person sessions are available for local clients, and online sessions via video call work wonderfully for anyone, anywhere.',
  },
  {
    id: 'faq-3',
    category: 'Private Coaching',
    question: 'What if I\'m a complete beginner?',
    answer:
      'Perfect! Private coaching is ideal for beginners. We start exactly where you are, work at your pace, and build a foundation that works for your unique body.',
  },

  // Yoga for Golfers FAQs
  {
    id: 'faq-4',
    category: 'Yoga for Golfers',
    question: 'Do I need to be flexible to start yoga for golfers?',
    answer:
      'Not at all! Flexibility improves through practice. We focus on mobility, rotation, and balance—all things that help your golf game, regardless of current flexibility.',
  },
  {
    id: 'faq-5',
    category: 'Yoga for Golfers',
    question: 'How quickly will I see results in my golf game?',
    answer:
      'Many golfers notice improvements within 3-4 weeks of consistent practice. Better rotation, balance, and mental focus directly impact your swing and score.',
  },
  {
    id: 'faq-6',
    category: 'Yoga for Golfers',
    question: 'Is this only for competitive golfers?',
    answer:
      'No! Yoga for golfers is for anyone who plays golf—recreational, competitive, casual players, or those returning to golf after injury.',
  },

  // Retreats FAQs
  {
    id: 'faq-7',
    category: 'Retreats',
    question: 'What is included in a retreat?',
    answer:
      'Retreats include daily yoga practices, guided meditation, breathwork sessions, meals, accommodation, and group activities. Everything is designed to support your practice and relaxation.',
  },
  {
    id: 'faq-8',
    category: 'Retreats',
    question: 'What if I\'m not sure if a retreat is right for me?',
    answer:
      'Many first-time retreat participants have the same question! Retreats are for all levels. We welcome complete beginners and experienced practitioners equally.',
  },
  {
    id: 'faq-9',
    category: 'Retreats',
    question: 'Can I join the retreat waitlist?',
    answer:
      'Absolutely! We have an active retreat waitlist. You\'ll be notified of upcoming retreats first and receive special pricing for early registrations.',
  },

  // Online Courses FAQs
  {
    id: 'faq-10',
    category: 'Online Courses',
    question: 'How long do I have access to the courses?',
    answer:
      'You have lifetime access! Once enrolled, you can practice the courses anytime, anywhere, at your own pace.',
  },
  {
    id: 'faq-11',
    category: 'Online Courses',
    question: 'Can I download the videos?',
    answer:
      'Yes! All course videos and materials are downloadable, so you can practice offline.',
  },
  {
    id: 'faq-12',
    category: 'Online Courses',
    question: 'Are there community features?',
    answer:
      'Yes! Our online courses include a private community where you can connect with other students, ask questions, and share your practice journey.',
  },

  // Booking FAQs
  {
    id: 'faq-13',
    category: 'Booking',
    question: 'How do I book a session?',
    answer:
      'You can book through our website scheduler. Choose your preferred date, time, and session type. Payment is processed securely online.',
  },
  {
    id: 'faq-14',
    category: 'Booking',
    question: 'What is your cancellation policy?',
    answer:
      'We ask for 24 hours notice for cancellations. If you need to reschedule, we\'ll find a time that works for you.',
  },
  {
    id: 'faq-15',
    category: 'Booking',
    question: 'Do you offer package deals?',
    answer:
      'Yes! We offer discounted packages for multiple sessions. The more sessions you book, the better your rate. Contact us for pricing details.',
  },
];
