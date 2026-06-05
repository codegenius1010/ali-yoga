# Ali Yoga Content Model
## Structured Content Files for Premium Wellness Website

This document outlines the complete content model for Ali Yoga, including all content files, data structures, and editing guidelines.

---

## ✅ Prompt 3 Status: Complete

All required content files have been created with full data structures, realistic placeholder content, and SEO fields. The content model is ready for real data integration.

---

## Content Files Overview

### 1. **Site Configuration** (`/content/site.ts`)

**Purpose:** Global site-wide configuration including brand, contact, and SEO defaults.

**Data Structure:**
```typescript
siteConfig = {
  brand: {
    name: string;
    tagline: string;
    description: string;
  },
  contact: {
    email: string;
    phone: string;
  },
  social: {
    instagram: string;
    facebook: string;
  },
  booking: {
    url: string;
    cta: string;
  },
  seo: {
    title: string;
    description: string;
    keywords: string[];
  }
}
```

**Current Values:**
- Name: "Ali Yoga"
- Tagline: "Yoga for Freedom, Focus & Flow"
- Email: hello@aliyoga.com
- Phone: +1 (555) 123-4567
- Social: Instagram & Facebook URLs (placeholders)

**Editing Tips:**
- Keep tagline under 60 characters
- Update social URLs when accounts are created
- Update email to actual contact address
- Phone number used in footer and contact pages

---

### 2. **Services** (`/content/services.ts`)

**Purpose:** Define all service offerings with descriptions, features, and CTAs.

**Data Structure:**
```typescript
interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
  features: string[];
  cta?: {
    label: string;
    href: string;
  };
}
```

**Services Defined:**
1. **Private Yoga Coaching** - Personalized one-on-one sessions
2. **Yoga for Golfers** - Golf-specific mobility and focus
3. **Online Courses** - Self-paced yoga programs
4. **Yoga Retreats** - Immersive wellness experiences
5. **Breathwork & Meditation** - Pranayama and mindfulness

**Fields for Each Service:**
- `id` - Unique identifier (use kebab-case)
- `title` - Display name (e.g., "Private Yoga Coaching")
- `slug` - URL-friendly name (e.g., "private-coaching")
- `description` - Long description (2-3 sentences)
- `shortDescription` - Tagline (1 sentence)
- `seoTitle` - SEO meta title (50-60 chars)
- `seoDescription` - SEO meta description (150-160 chars)
- `features` - Array of feature bullets
- `cta` - Call-to-action object with label and href

**Editing Tips:**
- Keep SEO title under 60 characters
- Keep SEO description 150-160 characters
- Features should be 4-6 bullet points
- Include keywords in both SEO fields
- Slug must match URL structure

**Usage Example:**
```typescript
import { services } from '@content/services';

// Use on homepage to display service cards
services.forEach(service => {
  <ServiceCard
    title={service.title}
    description={service.shortDescription}
  />
});
```

---

### 3. **Testimonials** (`/content/testimonials.ts`)

**Purpose:** Showcase client experiences organized by service category.

**Data Structure:**
```typescript
interface Testimonial {
  id: string;
  name: string;
  title?: string;
  category: string;
  content: string;
  image?: string;
}
```

**Current Testimonials:** 6 placeholder testimonials

**Testimonial Categories:**
- Private Coaching (2)
- Yoga for Golfers (3)
- Retreats (1)
- Online Courses (1)

**Fields:**
- `id` - Unique identifier
- `name` - Client name
- `title` - Client title/role (optional)
- `category` - Service category for filtering
- `content` - Testimonial text (2-3 sentences)
- `image` - Profile photo URL (optional)

**Editing Tips:**
- Keep testimonials 2-3 sentences max
- Include specific results or outcomes
- Use real client names (not "John D.")
- Distribute across categories evenly
- Add image URLs when available
- Include title/role for credibility

**Replacement Guide:**
```typescript
// To replace a testimonial, keep structure:
{
  id: 'testimonial-1',
  name: 'Real Client Name',
  title: 'Golfer / Occupation',
  category: 'Yoga for Golfers', // or other category
  content: 'Specific, measurable result they experienced...',
  image: '/images/client-name.jpg', // Optional
}
```

**Usage Example:**
```typescript
import { testimonials } from '@content/testimonials';

// Filter by category
const coachingTestimonials = testimonials.filter(
  t => t.category === 'Private Coaching'
);

// Display on pages
coachingTestimonials.map(t => (
  <TestimonialCard testimonial={t} />
));
```

---

### 4. **FAQs** (`/content/faqs.ts`)

**Purpose:** Answer common questions organized by topic/service.

**Data Structure:**
```typescript
interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}
```

**Current FAQs:** 15 questions organized into 5 categories

**FAQ Categories:**
- Private Coaching (3 FAQs)
- Yoga for Golfers (3 FAQs)
- Retreats (3 FAQs)
- Online Courses (3 FAQs)
- Booking (3 FAQs)

**Fields:**
- `id` - Unique identifier (e.g., "faq-1")
- `category` - Topic category for grouping
- `question` - Customer question (1 sentence)
- `answer` - Detailed answer (2-4 sentences)

**Editing Tips:**
- Questions should be customer perspective
- Keep answers scannable (2-4 sentences)
- Add specific details (e.g., session duration)
- Link to related pages in answers
- Organize by service/topic
- 3-5 FAQs per category minimum

**SEO Importance:**
FAQs improve search rankings through:
- FAQ schema markup (generates rich results)
- Long-tail keyword targeting
- Answering user questions directly
- Increasing time-on-page

**Usage Example:**
```typescript
import { faqs } from '@content/faqs';

// Get FAQs for specific service page
const privateFAQs = faqs.filter(
  f => f.category === 'Private Coaching'
);

// Render accordion
<FAQAccordion items={privateFAQs} />
```

---

### 5. **Retreats** (`/content/retreats.ts`)

**Purpose:** Showcase wellness retreat offerings with dates, pricing, and details.

**Data Structure:**
```typescript
interface Retreat {
  id: string;
  name: string;
  slug: string;
  description: string;
  location: string;
  startDate: string; // ISO format: "2024-07-15"
  endDate: string;
  price: string; // e.g., "$1,499"
  attendees: number;
  maxAttendees: number;
  image?: string;
  highlights?: string[];
  seoTitle?: string;
  seoDescription?: string;
}
```

**Current Retreats:** 2 placeholder retreats

**Retreat 1:**
- Name: Summer Wellness Retreat
- Location: Blue Ridge Mountains, NC
- Dates: July 15-21, 2024
- Price: $1,499
- Capacity: 12/20 attendees

**Retreat 2:**
- Name: Fall Renewal Retreat
- Location: Asheville, NC
- Dates: September 22-28, 2024
- Price: $1,299
- Capacity: 8/18 attendees

**Fields:**
- `id` - Unique identifier
- `name` - Retreat name
- `slug` - URL-friendly name
- `description` - 1-2 sentence overview
- `location` - Geographic location
- `startDate` - Retreat start (ISO: YYYY-MM-DD)
- `endDate` - Retreat end
- `price` - Total cost per person
- `attendees` - Current registrations
- `maxAttendees` - Capacity limit
- `image` - Featured image URL
- `highlights` - Array of 5-6 highlights
- `seoTitle` - SEO meta title
- `seoDescription` - SEO meta description

**Editing Tips:**
- Use ISO date format (YYYY-MM-DD)
- Price format: "$X,XXX"
- Keep current attendees realistic
- Highlights should be 1-2 words each
- Add image URLs when available
- Update dates as retreats approach/fill
- SEO fields follow same rules as Services

**Event Schema:**
- Only generates Event schema for active/future retreats
- Does NOT create fake Event schema for past dates

**Usage Example:**
```typescript
import { retreats } from '@content/retreats';

// Calculate capacity percentage
retreats.map(r => ({
  ...r,
  capacityPercent: (r.attendees / r.maxAttendees) * 100
}));

// Display retreat cards
retreats.map(r => (
  <RetreatCard retreat={r} />
));
```

---

### 6. **Courses** (`/content/courses.ts`)

**Purpose:** Showcase online course offerings with pricing, level, and ratings.

**Data Structure:**
```typescript
interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string; // e.g., "6 weeks"
  lessonsCount: number;
  price: string; // e.g., "$97"
  rating: number; // 0-5
  students: number;
  image?: string;
  highlights?: string[];
  seoTitle?: string;
  seoDescription?: string;
}
```

**Current Courses:** 4 courses across difficulty levels

**Courses:**
1. **Yoga for Golfers: Mobility & Focus** (Beginner, 6 weeks, $97)
2. **Complete Yoga for Beginners** (Beginner, 4 weeks, $79)
3. **Breathwork & Meditation Mastery** (Intermediate, 5 weeks, $87)
4. **Vinyasa Flow: Strength & Grace** (Intermediate, 6 weeks, $97)

**Fields:**
- `id` - Unique identifier
- `title` - Course name
- `slug` - URL-friendly name
- `description` - Course overview (2-3 sentences)
- `level` - Difficulty level (beginner/intermediate/advanced)
- `duration` - Course length (e.g., "6 weeks")
- `lessonsCount` - Number of lessons
- `price` - Course cost
- `rating` - Star rating (0-5)
- `students` - Number of enrollments
- `image` - Featured image/thumbnail
- `highlights` - Array of course benefits
- `seoTitle` - SEO meta title
- `seoDescription` - SEO meta description

**Editing Tips:**
- Level must be one of three: beginner | intermediate | advanced
- Duration format: "X weeks" or "X months"
- Price format: "$XX" or "$XXX"
- Rating: decimal 0-5 (e.g., 4.8)
- Students: realistic enrollment numbers
- Highlights: 6-8 key benefits
- Include course URL/platform in CTA

**Course Schema:**
- Ready for Course schema JSON-LD markup
- Includes rating, price, duration data

**Usage Example:**
```typescript
import { courses } from '@content/courses';

// Filter by level
const beginnerCourses = courses.filter(c => c.level === 'beginner');

// Sort by rating
courses.sort((a, b) => b.rating - a.rating);

// Display course cards
courses.map(c => (
  <CourseCard course={c} />
));
```

---

## Content Fields Reference

### Required Fields (All Content Types)

| Field | Type | Purpose | Examples |
|-------|------|---------|----------|
| `id` | string | Unique identifier | "service-1", "faq-5", "retreat-1" |
| `title` / `name` | string | Display title | "Private Yoga Coaching" |
| `slug` | string | URL-friendly | "private-coaching", "summer-retreat" |
| `description` | string | Long description | 2-3 sentences |

### SEO Fields (Services, Courses, Retreats)

| Field | Type | Length | Purpose |
|-------|------|--------|---------|
| `seoTitle` | string | 50-60 chars | Meta title tag |
| `seoDescription` | string | 150-160 chars | Meta description |

### Image Handling

**Placeholder Images:**
- All content supports optional `image` field
- Use placeholder until real images available
- Format: `/images/[category]/[item-slug].jpg`
- Optimize images before deployment

**Example:**
```typescript
// Before (placeholder)
image: undefined

// After (real image)
image: '/images/retreats/summer-wellness-2024.jpg'
```

---

## Data Validation

### ID Naming Convention
- Use kebab-case
- Include category prefix: "service-1", "retreat-2", "course-3"
- Increment for new items

### Slug Format
- Lowercase letters and hyphens only
- No spaces, numbers, special chars
- Match URL structure
- Example: "yoga-for-golfers" → URL: `/yoga-for-golfers`

### Date Format (Retreats only)
- ISO 8601 format: YYYY-MM-DD
- Example: "2024-07-15"
- Ensures consistent parsing

### Price Format
- Always include currency symbol
- Format: "$1,299" or "$97"
- No decimals for most courses
- Use for filtering/sorting

---

## Using Content in Components

### Import Pattern
```typescript
import { services } from '@content/services';
import { testimonials } from '@content/testimonials';
import { faqs } from '@content/faqs';
import { courses } from '@content/courses';
import { retreats } from '@content/retreats';
import { siteConfig } from '@content/site';
```

### Component Usage
```tsx
// Services
services.map(s => (
  <ServiceCard
    title={s.title}
    description={s.shortDescription}
    link={s.cta?.href}
  />
))

// Testimonials
testimonials
  .filter(t => t.category === 'Private Coaching')
  .map(t => <TestimonialCard testimonial={t} />)

// FAQs
faqs
  .filter(f => f.category === 'Yoga for Golfers')
  .map(f => <FAQAccordion items={...} />)

// Courses
courses
  .filter(c => c.level === 'beginner')
  .map(c => <CourseCard course={c} />)

// Retreats
retreats
  .filter(r => new Date(r.endDate) > new Date())
  .map(r => <RetreatCard retreat={r} />)
```

---

## SEO Schema Integration

### Automatic Schema Generation

Content fields map to JSON-LD schemas:

**Service → Service Schema**
```json
{
  "@type": "Service",
  "name": "Private Yoga Coaching",
  "description": "...",
  "areaServed": "US"
}
```

**Course → Course Schema**
```json
{
  "@type": "Course",
  "name": "Yoga for Golfers",
  "description": "...",
  "duration": "P6W",
  "price": "97"
}
```

**Retreat → Event Schema**
```json
{
  "@type": "Event",
  "name": "Summer Wellness Retreat",
  "startDate": "2024-07-15",
  "endDate": "2024-07-21",
  "location": "Blue Ridge Mountains"
}
```

**Testimonial → Review Schema**
```json
{
  "@type": "Review",
  "author": "Sarah Martinez",
  "reviewRating": 5,
  "reviewBody": "..."
}
```

---

## Content Editing Best Practices

### Before Publishing
- [ ] Spellcheck all content
- [ ] Verify SEO fields are unique
- [ ] Check all links are correct
- [ ] Confirm image paths exist
- [ ] Review category assignments
- [ ] Validate date formats
- [ ] Test component rendering

### Tone & Voice Guidelines
- **Premium wellness aesthetic** - Elegant, calm, professional
- **Approachable** - Not overly technical
- **Evidence-based** - Make claims grounded in experience
- **Inclusive** - All levels welcome
- **Warm** - Personal, genuine, human

### Content Principles
- Focus on transformation, not features
- Use active voice
- Include specific examples
- Show, don't tell
- Be authentic

---

## Future Enhancements

### CMS Integration
Content can be easily moved to a CMS like:
- Contentful
- Sanity
- Strapi
- Notion
- AirtableJust move data to CMS API, update imports in components.

### Content Versioning
Consider adding:
- `version` field for tracking changes
- `createdAt` and `updatedAt` timestamps
- `status` field (draft/published)

### Localization
Structure supports multiple languages:
- Duplicate files: `courses.en.ts`, `courses.es.ts`
- Language selector in site config
- Translate all text fields

---

## Summary

The Ali Yoga content model is:
- ✅ **Complete** - All required files created
- ✅ **Structured** - Clear, consistent data formats
- ✅ **SEO-Ready** - Includes meta fields and schema support
- ✅ **Scalable** - Easy to add new items
- ✅ **Maintainable** - Centralized, easy to edit
- ✅ **Professional** - Polished, realistic placeholder content

**Next Step:** Proceed to Prompt 4 to build the homepage using this content!
