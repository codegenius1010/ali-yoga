export interface Testimonial {
  id: string;
  name: string;
  title?: string;
  category: string;
  content: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Arjun Patel',
    category: 'Private Coaching',
    content:
      'Alexandria is a beautiful soul in which her spirit exudes an energy that is warm, inviting and comes straight from the heart. She is passionate, well informed and genuinely cares for her students. During her practices, therefore, I have consistently felt the lightness in my body and at ease wanting to bring weightlessness into her life. She is truly a blessing that helps around me each time we practice yoga together!',
    image: '/images/testimonial-headshot-1.jpg',
  },
  {
    id: 'testimonial-2',
    name: 'Gokarnatji Parekh',
    category: 'Private Coaching',
    content:
      'I am originally from India and have been around yoga practice all my life. I haven\'t had great yoga teachers but Alexandria Amaya has surprised with her all around knowledge. She customizes every aspect of yoga. The sessions have been very effective and highly customized for my personal limitations and has encouraged me to keep up with the practice. She is a true blessing.',
    image: '/images/testimonial-headshot-2.jpg',
  },
  {
    id: 'testimonial-3',
    name: 'Madeline',
    category: 'Private Coaching',
    content:
      'Alexandria lovingly & creatively designs classes to meet my specific needs & offers skilled hands-on assists. She is a wonderful teacher.',
    image: '/images/testimonial-headshot-3.jpg',
  },
  {
    id: 'testimonial-4',
    name: 'Margarita',
    category: 'Private Coaching',
    content:
      'Alexandria is a very knowledgeable and caring yoga teacher. Her intuition for the needs of her students is amazing. She somehow knows what I need before I do. I walk into her classes thinking I\'m a mangled pretzel and walk out renewed and ready to face whatever she brings next. Alexandria is highly skilled and her class is worth seeking out.',
    image: '/images/testimonial-headshot-4.jpg',
  },
  {
    id: 'testimonial-5',
    name: 'Corey',
    category: 'Private Coaching',
    content:
      'I would probably not still be practicing yoga if it weren\'t for Ali. She is kind, loving, patient, highly educated and trained, truly loving and caring. I really cannot say enough good about her. From the first time I asked her for a video, she has been amazing. Her classes are filling up fast. Reserve in advance.',
    image: '/images/testimonial-headshot-5.jpg',
  },
];
