# Content Editing Guide

How to update website content without writing code.

---

## Overview

All website content is stored in TypeScript files in the `/content/` folder. This guide shows how to edit them.

**Files you can edit:**
- `/content/site.ts` - Site configuration
- `/content/services.ts` - Service descriptions
- `/content/testimonials.ts` - Customer testimonials
- `/content/faqs.ts` - FAQ content
- `/content/courses.ts` - Course information
- `/content/retreats.ts` - Retreat details
- `/content/blog.ts` - Blog posts

**After editing**, save the file and the site will automatically refresh in development.

---

## Site Configuration

### File: `/content/site.ts`

This controls site-wide settings.

**Edit these fields:**

```typescript
export const site = {
  name: "Ali Yoga",                    // Site name
  tagline: "Yoga for golfers",        // Tagline
  description: "Premium yoga...",     // Meta description
  
  author: {
    name: "Ali",
    bio: "Yoga teacher from...",
    email: "ali@aliyoga.com",
    phone: "+1 (555) 123-4567",
    location: "Jacksonville, FL",
  },
  
  // Social media links
  social: {
    instagram: "https://instagram.com/aliyoga",
    facebook: "https://facebook.com/aliyoga",
    youtube: "https://youtube.com/aliyoga",
    linkedin: "https://linkedin.com/in/ali",
  },
  
  // External links
  booking: "https://calendly.com/aliyoga",
  courses: "https://courses.aliyoga.com",
};
```

**To edit:**
1. Open `/content/site.ts` in VS Code
2. Find the field to update
3. Change the text
4. Save (Ctrl+S)
5. Refresh browser (F5)

---

## Services

### File: `/content/services.ts`

Services appear on homepage and service pages.

**Current services:**
- Private Yoga Coaching
- Yoga for Golfers
- Online Courses
- Retreats

**Example service:**
```typescript
{
  id: 'private-coaching',
  name: 'Private Yoga Coaching',
  slug: 'private-yoga-coaching',
  tagline: 'Personalized one-on-one sessions',
  description: 'Individual coaching designed around your body, breath and goals...',
  seoTitle: 'Private Yoga Coaching | Ali Yoga',
  seoDescription: 'Personalized yoga coaching for your specific goals.',
  image: '/images/services/private-coaching.jpg',
  
  benefits: [
    'Customized to your body',
    'Personal attention',
    'Flexible scheduling',
    // ... more benefits
  ],
  
  price: 150,           // Session price
  duration: '60 min',   // Session length
  
  cta: {
    label: 'Book a Session',
    href: '/book',
  },
}
```

**To edit service:**
1. Open `/content/services.ts`
2. Find the service (search for ID or name)
3. Edit fields like `description`, `tagline`, `benefits`, `price`
4. Save and refresh

**To add new service:**
```typescript
{
  id: 'new-service',
  name: 'New Service Name',
  slug: 'new-service',
  // ... other fields
}
```

---

## Testimonials

### File: `/content/testimonials.ts`

Customer testimonials appear on:
- Homepage
- Testimonials page
- Service pages (filtered by service)

**Example testimonial:**
```typescript
{
  id: 't1',
  quote: 'Ali completely transformed my golf swing and overall wellness.',
  author: 'John Smith',
  service: 'Golf Yoga',  // Category: 'Golf Yoga', 'Private Coaching', 'Retreats', 'Online Courses'
  title: 'Golfer',        // Their title or role
  image: '/images/testimonials/john.jpg',
  rating: 5,              // 1-5 stars
}
```

**Services available:**
- `'Private Coaching'`
- `'Golf Yoga'`
- `'Retreats'`
- `'Online Courses'`
- `'Breathwork'`

**To edit testimonial:**
1. Open `/content/testimonials.ts`
2. Find the testimonial by ID or author name
3. Edit `quote`, `author`, `service`, etc.
4. Save

**To add testimonial:**
1. Add new object to array
2. Use new ID (e.g., `t7` if last is `t6`)
3. Fill in all fields
4. Save

**Important:**
- Keep quotes authentic and concise
- Use real customer names
- Include service category so it filters correctly
- Add image from `/public/images/testimonials/`

---

## FAQs

### File: `/content/faqs.ts`

FAQs appear on each service page.

**Structure:**
```typescript
// Group FAQs by service
const faqsByService = {
  'golf-yoga': [
    {
      id: 'q1',
      question: 'Is yoga good for golfers?',
      answer: 'Yes, yoga improves mobility, balance, focus...',
      category: 'Golf Yoga',
    },
    // ... more questions
  ],
  
  'private-coaching': [
    {
      id: 'q7',
      question: 'How long are sessions?',
      answer: 'Sessions are typically 60 minutes...',
      category: 'Private Coaching',
    },
  ],
  // ... more categories
}
```

**To edit FAQ:**
1. Open `/content/faqs.ts`
2. Find the service category (e.g., `'golf-yoga'`)
3. Find the question
4. Edit `question` or `answer`
5. Save

**To add FAQ:**
1. Find the service category
2. Add new object to the array
3. Use new ID (e.g., `q15`)
4. Fill in question and answer
5. Save

**Example:**
```typescript
{
  id: 'q15',
  question: 'Can beginners take your yoga?',
  answer: 'Absolutely! Yoga is for all levels. I customize sessions...',
  category: 'Private Coaching',
}
```

---

## Blog Posts

### File: `/content/blog.ts`

Blog posts appear on:
- Blog index page (/blog)
- Individual blog pages (/blog/slug-name)
- Homepage preview

**Example blog post:**
```typescript
{
  id: '1',
  title: '7 Benefits of Yoga for Mobility, Balance & Focus',
  slug: 'yoga-benefits-mobility',
  
  // For blog list/preview
  description: 'Discover how yoga improves golf performance and everyday life.',
  publishedAt: '2024-03-15',
  category: 'Golf Yoga',
  author: 'Ali',
  image: '/images/blog/yoga-benefits.jpg',
  
  // For search engines
  seoTitle: '7 Yoga Benefits for Mobility and Balance | Ali Yoga',
  seoDescription: 'Learn how yoga improves flexibility, balance, and mental focus.',
  
  // Blog post content (markdown-like)
  content: `
    # Main Heading
    First paragraph of blog post content...
    
    ## Section Heading
    More content with regular paragraphs.
    
    ### Subsection
    Even more content.
  `,
  
  // Link to other posts
  relatedPostIds: ['2', '3', '4'],
}
```

**To edit blog post:**
1. Open `/content/blog.ts`
2. Find post by ID or title
3. Edit fields:
   - `title` - Post headline
   - `description` - Short preview (shown in list)
   - `content` - Full post text (see formatting below)
   - `category` - Blog category
4. Save

**To add new blog post:**
1. Find last post ID (e.g., if last is `10`, use `11`)
2. Add new object to array
3. Fill in all fields
4. Create slug from title (lowercase, hyphens):
   ```
   Title: "My New Blog Post"
   Slug: "my-new-blog-post"
   ```
5. Add featured image to `/public/images/blog/`
6. Save

**Content Formatting:**

```typescript
content: `
  # H1 Heading (used once at top)
  
  This is a regular paragraph with text.
  
  ## H2 Heading (section break)
  
  More paragraph text here. You can write multiple paragraphs.
  
  ### H3 Heading (subsection)
  
  - Bullet point 1
  - Bullet point 2
  - Bullet point 3
  
  1. Numbered item 1
  2. Numbered item 2
  3. Numbered item 3
  
  **Bold text** and *italic text* and ***bold italic***.
  
  ### Another section
  
  Final paragraph.
`
```

**Categories available:**
- `'Golf Yoga'`
- `'Breathwork'`
- `'Coaching'`
- `'Retreats'`
- `'Yoga Basics'`
- `'Yoga Styles'`
- `'Meditation'`

---

## Courses

### File: `/content/courses.ts`

Online courses appear on:
- Online Courses page (/online-courses)
- Homepage preview

**Example course:**
```typescript
{
  id: 'golf-yoga-course',
  title: 'Yoga for Golfers Online Course',
  slug: 'yoga-for-golfers-course',
  
  description: 'Complete 30-day yoga program designed for golfers.',
  image: '/images/courses/golf-yoga.jpg',
  
  level: 'beginner',      // 'beginner', 'intermediate', 'advanced'
  duration: '30 days',
  lessons: 15,
  
  price: 97,
  rating: 4.9,
  ratingCount: 342,
  
  highlights: [
    'Video instruction',
    'Mobility routines',
    'Mental focus training',
  ],
  
  cta: {
    label: 'Enroll Now',
    href: 'https://courses.aliyoga.com/golf-yoga',
  },
  
  seoTitle: 'Yoga for Golfers Online Course | 30-Day Program',
  seoDescription: 'Learn yoga designed specifically for golfers.',
}
```

**To edit course:**
1. Open `/content/courses.ts`
2. Find course by ID or title
3. Edit fields like `description`, `price`, `rating`, `highlights`
4. Save

**To add new course:**
1. Add new object to array
2. Use new ID and slug
3. Fill in all fields
4. Add course image to `/public/images/courses/`
5. Save

---

## Retreats

### File: `/content/retreats.ts`

Retreat information appears on:
- Retreats page (/retreats)
- Homepage link

**Example retreat:**
```typescript
{
  id: 'bali-retreat-2024',
  title: 'Bali Yoga Retreat',
  slug: 'bali-yoga-retreat-2024',
  
  description: 'One week of yoga, meditation, and wellness in Bali.',
  image: '/images/retreats/bali.jpg',
  
  location: 'Bali, Indonesia',
  startDate: '2024-10-01',
  endDate: '2024-10-07',
  
  maxParticipants: 20,
  price: 1500,
  
  highlights: [
    'Daily yoga',
    'Meditation sessions',
    'Healthy meals',
    'Beach time',
  ],
  
  included: [
    'Accommodation',
    'Meals',
    'Yoga classes',
    'Meditation guidance',
  ],
  
  seoTitle: 'Bali Yoga Retreat | One Week Wellness Experience',
  seoDescription: 'Join Ali for a transformative yoga retreat in Bali.',
  
  active: true,  // Set to false to hide retreat (doesn't create fake Event schema)
}
```

**To edit retreat:**
1. Open `/content/retreats.ts`
2. Find retreat
3. Edit fields
4. Save

**To add new retreat:**
1. Add new object
2. Set `active: true`
3. Fill in all fields
4. Add retreat image
5. Save

**To hide retreat (without deleting):**
```typescript
active: false  // Retreat won't appear on site
```

---

## Adding Images

### Where to put images:

```
/public/images/
├── blog/              # Blog featured images
├── courses/           # Course thumbnails
├── retreats/          # Retreat photos
├── services/          # Service card images
├── testimonials/      # Testimonial photos
└── about/             # About page images
```

### File naming:

Use format: `[description]-[size].[ext]`

Examples:
- `yoga-benefits-large.jpg`
- `testimonial-john.jpg`
- `course-golf-yoga.jpg`

### Image specs:

| Type | Size | Max | Format |
|------|------|-----|--------|
| Blog | 1200x800px | 150KB | JPEG |
| Course | 600x400px | 80KB | JPEG |
| Retreat | 1200x800px | 150KB | JPEG |
| Service | 600x400px | 80KB | JPEG |
| Testimonial | 300x400px | 40KB | JPEG |

### To use new image:

1. Save image to appropriate folder
2. Update content file with image path:
```typescript
image: '/images/blog/my-new-image.jpg'
```
3. Save content file
4. Refresh browser

---

## Booking Form Integration

### Current State

The booking form at `/book` is fully functional but not connected to email service.

**Form fields:**
1. Full Name (required)
2. Email (required, validated)
3. Phone (required, format: (555) 123-4567)
4. Location/City (required)
5. What are you interested in? (dropdown)
6. Yoga Experience Level (dropdown)
7. Preferred Session Format (dropdown)
8. Main Goals (required)
9. Message (optional)

**Dropdown options:**

```typescript
// Interested in:
- Private Coaching
- Golf Yoga
- Online Courses
- Retreats
- Breathwork
- Not Sure

// Experience level:
- Beginner
- Some Experience
- Intermediate
- Advanced

// Session format:
- In-Person
- Virtual
- Hybrid
- Not Sure
```

### To Connect to Email

See `/docs/CONTENT-EDITING-GUIDE.md` → "Booking Form Integration" section in README.md for detailed instructions.

**Quick steps:**
1. Choose email service (SendGrid recommended)
2. Get API key
3. Add to `.env.local`
4. Create `/app/api/book/route.ts`
5. Add email logic
6. Test form

---

## Common Tasks

### Update your bio
File: `/content/site.ts`
Field: `author.bio`

### Change phone number
File: `/content/site.ts`
Field: `author.phone`

### Add new testimonial
File: `/content/testimonials.ts`
Action: Add new object to array

### Update blog post
File: `/content/blog.ts`
Find: Post by ID or title
Edit: `content` field

### Add new service
File: `/content/services.ts`
Action: Add new object to array

### Hide inactive retreat
File: `/content/retreats.ts`
Field: `active: false`

### Change course price
File: `/content/courses.ts`
Field: `price: 97`

### Update homepage tagline
File: `/content/site.ts`
Field: `tagline: "New tagline"`

---

## Tips & Tricks

### Search in files
Use Ctrl+F (or Cmd+F) to search file:
- Search for testimonial author name
- Search for blog post title
- Find specific field easily

### Format content properly
- Use markdown-style formatting in `content` field
- `#` for main heading (use once)
- `##` for sections
- `###` for subsections
- `-` for bullet points
- `1.` for numbered lists

### Test changes
1. Edit content
2. Save (Ctrl+S)
3. Refresh browser (F5)
4. Changes appear instantly ✅

### Undo mistakes
Press Ctrl+Z (or Cmd+Z) to undo typing
Use git to restore if you mess up:
```bash
git checkout -- content/file.ts
```

### Ask for help
- Read the specific file (it has comments)
- Check existing examples
- All content follows same pattern
- Consistency matters!

---

## File Structure Example

**All content files follow this pattern:**

```typescript
// Import types (already done)
import { BlogPost, Testimonial, ... } from '@/types';

// Define content array
export const items = [
  {
    id: 'item-1',
    name: 'Item Name',
    description: 'Item description',
    // ... more fields
  },
  {
    id: 'item-2',
    name: 'Another Item',
    description: 'Another description',
    // ... more fields
  },
  // ... more items
];

// Optional: Export utility functions
export const getItemById = (id: string) => 
  items.find(item => item.id === id);
```

---

## Troubleshooting

### Changes not showing up?

1. Save file (Ctrl+S)
2. Refresh browser (F5)
3. Check no TypeScript errors (red squiggles)
4. Check field names match exactly
5. Restart dev server: Ctrl+C, then `npm run dev`

### TypeScript error?

Red squiggles in VS Code mean:
- Check field name spelling
- Check data type (string, number, array, etc.)
- Look at other examples in same file
- All fields must match the type definition

### Image not showing?

- Check image path is correct
- Check image file exists in folder
- Check image file name matches exactly
- Try refreshing (Ctrl+Shift+R hard refresh)

---

## CMS Migration Path

**Future upgrade:** Move to headless CMS

When ready to add CMS (Contentful, Sanity, etc.):
1. Create API routes to fetch from CMS
2. Replace `/content/` imports with API calls
3. Add user authentication
4. Enable content creators without code access

No code changes needed until then! 🎉

---

**Last Updated:** June 2024 | **Version:** 1.0.0