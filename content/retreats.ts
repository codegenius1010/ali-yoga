export interface Retreat {
  id: string;
  name: string;
  slug: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  price: string;
  attendees: number;
  maxAttendees: number;
  image?: string;
  highlights?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const retreats: Retreat[] = [
  {
    id: 'retreat-1',
    name: 'Summer Wellness Retreat',
    slug: 'summer-wellness-retreat',
    description:
      'A transformative week of yoga, meditation, and connection in a serene mountain setting.',
    location: 'Blue Ridge Mountains, North Carolina',
    startDate: '2024-07-15',
    endDate: '2024-07-21',
    price: '$1,499',
    attendees: 12,
    maxAttendees: 20,
    image: '/images/retreat-group-yoga.jpg',
    highlights: [
      'Daily sunrise yoga practice',
      'Guided mountain hiking',
      'Meditation and breathwork',
      'Nourishing farm-to-table meals',
      'Evening reflection sessions',
      'Community bonding activities',
    ],
    seoTitle: 'Summer Wellness Yoga Retreat | Mountains',
    seoDescription:
      'Week-long transformative yoga retreat in the Blue Ridge Mountains with daily practices, meditation, and community.',
  },
  {
    id: 'retreat-2',
    name: 'Fall Renewal Retreat',
    slug: 'fall-renewal-retreat',
    description:
      'Embrace the season of change with a rejuvenating retreat focused on balance and renewal.',
    location: 'Asheville, North Carolina',
    startDate: '2024-09-22',
    endDate: '2024-09-28',
    price: '$1,299',
    attendees: 8,
    maxAttendees: 18,
    image: '/images/retreat-spiritual-temple.jpg',
    highlights: [
      'Daily vinyasa and yin yoga',
      'Autumn forest walks',
      'Sound healing sessions',
      'Organic meals',
      'Journaling workshops',
      'Private consultations',
    ],
    seoTitle: 'Fall Yoga Renewal Retreat | Asheville',
    seoDescription:
      'Rejuvenating fall yoga retreat in Asheville focused on balance, renewal, and seasonal awareness.',
  },
];
