# Content Editing Guide
## How to Update Ali Yoga Content

This guide walks through editing each content file to add, update, or remove content.

---

## Quick Edit Reference

### File Locations
```
content/
├── site.ts          # Global site config
├── services.ts      # 5 service offerings
├── testimonials.ts  # Client testimonials
├── faqs.ts          # FAQs organized by category
├── courses.ts       # Online courses
└── retreats.ts      # Wellness retreats
```

### Most Common Edits

| Need | File | Action |
|------|------|--------|
| Change brand name | site.ts | Update brand.name |
| Add testimonial | testimonials.ts | Add new testimonial object |
| Update service | services.ts | Edit service object |
| Add FAQ | faqs.ts | Add new FAQ object |
| Create retreat | retreats.ts | Add new retreat object |
| Create course | courses.ts | Add new course object |

---

## 1. Editing Site Configuration (`site.ts`)

### What It Contains
- Brand name and tagline
- Contact information
- Social media links
- Booking calendar URL
- Default SEO settings

### How to Edit

**Change Brand Name:**
```typescript
// BEFORE
brand: {
  name: 'Ali Yoga',
  tagline: '...',
},

// AFTER
brand: {
  name: 'Your Yoga Studio',
  tagline: '...',
},
```

**Update Contact Info:**
```typescript
contact: {
  email: 'hello@aliyoga.com',      // ← Update this
  phone: '+1 (555) 123-4567',      // ← Update this
},
```

**Add Social Links:**
```typescript
social: {
  instagram: 'https://instagram.com/aliyoga',      // ← Update URL
  facebook: 'https://facebook.com/aliyoga',        // ← Update URL
},
```

**Update Booking Link:**
```typescript
booking: {
  url: 'https://calendly.com/aliyoga',             // ← Update Calendly URL
  cta: 'Book a Session',
},
```

**Update Default SEO:**
```typescript
seo: {
  title: 'Ali Yoga | Premium Yoga Coaching & Wellness Retreats',
  description: 'Private yoga coaching, yoga for golfers, online courses, and wellness retreats...',
  keywords: ['yoga', 'private coaching', 'golf', 'retreats'],
},
```

---

## 2. Editing Services (`services.ts`)

### What It Contains
- 5 service offerings
- Each service has: title, description, features, pricing, CTA

### How to Add a Service

```typescript
// Add to the services array:
{
  id: 'breathwork-meditation',
  title: 'Breathwork & Meditation',
  slug: 'breathwork-meditation',
  shortDescription: 'Pranayama and meditation practices for clarity and calm.',
  description: 'Learn ancient breathing techniques and meditation practices to quiet your mind, reduce stress, and cultivate inner peace.',
  seoTitle: 'Breathwork & Meditation | Ali Yoga',
  seoDescription: 'Pranayama breathing techniques and guided meditation for stress relief and mental clarity.',
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
}
```

### How to Update a Service

```typescript
// Find the service by ID and update fields:
{
  id: 'private-coaching',
  title: 'Private Yoga Coaching',
  // ↓ Update this
  shortDescription: 'One-on-one personalized sessions tailored to your goals.',
  // ↓ Or this
  features: [
    'Personalized sequences',
    'Breath work guidance',
    'Custom meditation',  // ← Changed
    'Progress tracking',
    'Flexible scheduling',
  ],
}
```

### How to Remove a Service

```typescript
// Delete the entire service object from the array:
// BEFORE:
const services: Service[] = [
  { id: 'private-coaching', ... },
  { id: 'yoga-golfers', ... },
  { id: 'online-courses', ... },  // ← Remove this
]

// AFTER:
const services: Service[] = [
  { id: 'private-coaching', ... },
  { id: 'yoga-golfers', ... },
]
```

---

## 3. Editing Testimonials (`testimonials.ts`)

### What It Contains
- 6 client testimonials
- Each has: name, title, category, quote

### How to Add a Testimonial

```typescript
// Add to the testimonials array:
{
  id: 'testimonial-7',
  name: 'Michelle Thompson',
  title: 'Yoga Enthusiast',
  category: 'Retreats',
  content: 'The retreat experience with Ali was absolutely transformative. The combination of practice, beautiful setting, and authentic teaching created a space for real growth.',
  image: '/images/testimonials/michelle-thompson.jpg', // Optional
}
```

### How to Update a Testimonial

```typescript
// Find testimonial by ID and update fields:
{
  id: 'testimonial-1',
  name: 'Sarah Martinez',
  // ↓ Update name/quote to real client
  title: 'Competitive Golfer',
  content: 'Ali\'s coaching improved my golf score by 4 strokes in just 6 weeks. My rotation and mental focus are completely different now.',
}
```

### How to Remove a Testimonial

```typescript
// Delete the entire testimonial object from the array
```

### Testimonial Categories
Valid categories to use:
- `Private Coaching`
- `Yoga for Golfers`
- `Retreats`
- `Online Courses`
- `Breathwork & Meditation`

**Important:** Category determines where testimonial appears on website!

---

## 4. Editing FAQs (`faqs.ts`)

### What It Contains
- 15 FAQs organized into 5 categories
- Each FAQ has: question, answer, category

### How to Add an FAQ

```typescript
// Add to the faqs array:
{
  id: 'faq-16',
  category: 'Private Coaching',
  question: 'What if I have an injury or physical limitation?',
  answer: 'We can absolutely work with your specific needs. Ali modifies poses and sequences to accommodate any physical limitations or injuries. Always let us know about any concerns during your first session.',
}
```

### How to Update an FAQ

```typescript
// Find FAQ by ID and update:
{
  id: 'faq-1',
  category: 'Private Coaching',
  // ↓ Update question to be clearer
  question: 'How long is each private yoga session?',
  // ↓ Or update answer with new info
  answer: 'Standard sessions are 60 minutes. We also offer 45-minute and 90-minute options for different needs and budgets.',
}
```

### How to Remove an FAQ

```typescript
// Delete the entire FAQ object from the array
```

### FAQ Categories
Valid categories to organize FAQs:
- `Private Coaching` (3+ FAQs)
- `Yoga for Golfers` (3+ FAQs)
- `Retreats` (3+ FAQs)
- `Online Courses` (3+ FAQs)
- `Booking` (3+ FAQs)

**Tip:** Keep 3-5 FAQs per category. If one category gets too long (7+), consider splitting into subcategories or moving to dedicated page.

---

## 5. Editing Retreats (`retreats.ts`)

### What It Contains
- Upcoming wellness retreats
- Each retreat has: name, location, dates, pricing, capacity

### How to Add a Retreat

```typescript
// Add to the retreats array:
{
  id: 'retreat-3',
  name: 'Winter Renewal Retreat',
  slug: 'winter-renewal-retreat',
  description: 'A week of restorative yoga, meditation, and community in a cozy mountain setting.',
  location: 'Rocky Mountains, Colorado',
  startDate: '2024-12-27',  // ISO format: YYYY-MM-DD
  endDate: '2025-01-02',
  price: '$1,399',
  attendees: 5,
  maxAttendees: 16,
  image: '/images/retreats/winter-renewal.jpg',
  highlights: [
    'Daily restorative yoga',
    'Mountain hiking',
    'Cozy fireplace meditation',
    'Nourishing meals',
    'Community connection',
    'Year-end reflection',
  ],
  seoTitle: 'Winter Yoga Retreat | Colorado Mountains',
  seoDescription: 'Rejuvenating winter retreat with restorative yoga, meditation, and mountain scenery.',
}
```

### Date Format
Always use ISO format: `YYYY-MM-DD`

```typescript
startDate: '2024-07-15',  // July 15, 2024 ✅
startDate: '07-15-2024',  // July 15, 2024 ❌
startDate: 'July 15',     // July 15, 2024 ❌
```

### How to Update Retreat Capacity

```typescript
// Update as people register:
{
  id: 'retreat-1',
  name: 'Summer Wellness Retreat',
  attendees: 12,    // ← Update this
  maxAttendees: 20,
}
```

### How to Archive a Past Retreat

```typescript
// Option 1: Delete it
// Option 2: Move to separate archived array
// Option 3: Add `archived: true` field (if implementing)

// BEFORE:
const retreats: Retreat[] = [
  { id: 'retreat-1', startDate: '2024-07-15', ... },
  { id: 'retreat-2', startDate: '2024-09-22', ... },
]

// AFTER (remove past retreat):
const retreats: Retreat[] = [
  { id: 'retreat-2', startDate: '2024-09-22', ... },
]
```

---

## 6. Editing Courses (`courses.ts`)

### What It Contains
- 4 online courses
- Each course has: title, level, duration, pricing, rating

### How to Add a Course

```typescript
// Add to the courses array:
{
  id: 'course-5',
  title: 'Ashtanga Yoga Fundamentals',
  slug: 'ashtanga-yoga-fundamentals',
  description: 'Learn the foundational Ashtanga practice with focus on proper alignment and breath-movement coordination.',
  level: 'intermediate',
  duration: '8 weeks',
  lessonsCount: 32,
  price: '$127',
  rating: 4.6,
  students: 189,
  image: '/images/courses/ashtanga-fundamentals.jpg',
  highlights: [
    'Ashtanga primary series',
    'Ujjayi breathing',
    'Proper alignment',
    'Chanting introduction',
    'Progress tracking',
    'Community forum access',
  ],
  seoTitle: 'Ashtanga Yoga Course | Learn Fundamentals',
  seoDescription: 'Complete Ashtanga yoga course covering primary series, breath work, and alignment.',
}
```

### Course Levels
Must be one of these exact values:
- `'beginner'`
- `'intermediate'`
- `'advanced'`

### How to Update Course Info

```typescript
// Update pricing:
{
  id: 'course-1',
  price: '$97',    // ← Changed from $79
  students: 342,   // ← Update enrollment
  rating: 4.9,     // ← Update rating
}

// Update description:
{
  id: 'course-1',
  description: 'Comprehensive golf-focused yoga with new content on hip opening.',
}
```

### How to Update Course Lessons

```typescript
// When you add new lessons to course:
{
  id: 'course-1',
  lessonsCount: 32,    // ← Was 24, now 32
  duration: '8 weeks', // ← Adjust if needed
}
```

---

## Editing Workflow

### Step-by-Step Example: Add a New Testimonial

1. **Open** `content/testimonials.ts`

2. **Find** the testimonials array at the bottom

3. **Copy** an existing testimonial object:
   ```typescript
   {
     id: 'testimonial-1',
     name: 'Sarah Martinez',
     title: 'Recreational Golfer',
     category: 'Yoga for Golfers',
     content: 'Ali\'s yoga coaching completely transformed my golf game...',
   },
   ```

4. **Paste** and modify:
   ```typescript
   {
     id: 'testimonial-7',           // ← New ID
     name: 'New Client Name',       // ← Real name
     title: 'Their Role/Title',     // ← Their background
     category: 'Private Coaching',  // ← Where they took service
     content: 'Their specific result or experience...',
   },
   ```

5. **Save** the file (`Ctrl+S`)

6. **Test** by viewing the page (testimonials should appear)

---

## Validation Checklist

Before publishing content changes:

### For All Content
- [ ] Spellcheck
- [ ] Correct punctuation
- [ ] No broken links
- [ ] No placeholder text remaining

### For Services
- [ ] SEO title under 60 characters
- [ ] SEO description 150-160 characters
- [ ] 4-6 features listed
- [ ] CTA href matches actual URL

### For Testimonials
- [ ] 2-3 sentences max
- [ ] Uses real client name (not "John D.")
- [ ] Category matches services
- [ ] Specific results mentioned

### For FAQs
- [ ] Question is 1 sentence
- [ ] Answer is 2-4 sentences
- [ ] Category is one of 5 options
- [ ] Includes specific details

### For Retreats
- [ ] Date format: YYYY-MM-DD
- [ ] End date after start date
- [ ] Capacity number realistic
- [ ] Highlights 5-6 items
- [ ] Location is specific

### For Courses
- [ ] Level is beginner/intermediate/advanced
- [ ] Duration includes timeframe (weeks/months)
- [ ] Price is formatted: "$99"
- [ ] Rating 0-5 (decimals ok)
- [ ] 6-8 highlights listed

---

## Common Mistakes to Avoid

### ❌ Wrong Date Format
```typescript
startDate: '07-15-2024'  // ❌ Wrong!
startDate: '2024-07-15'  // ✅ Correct!
```

### ❌ Wrong Level
```typescript
level: 'easy'            // ❌ Wrong!
level: 'beginner'        // ✅ Correct!
```

### ❌ Wrong Category
```typescript
category: 'Coaching'     // ❌ Wrong!
category: 'Private Coaching'  // ✅ Correct!
```

### ❌ Forgot Commas
```typescript
{
  id: 'test-1'           // ❌ Missing comma!
  name: 'John Doe'
}

{
  id: 'test-1',          // ✅ Correct!
  name: 'John Doe'
}
```

### ❌ ID Not Unique
```typescript
const testimonials = [
  { id: 'testimonial-1', ... },
  { id: 'testimonial-1', ... },  // ❌ Duplicate ID!
]

// ✅ Should be:
const testimonials = [
  { id: 'testimonial-1', ... },
  { id: 'testimonial-2', ... },  // ✅ Unique
]
```

---

## Using Dev Tools

### VS Code Tips
- **Find and Replace:** `Ctrl+H` to replace content across file
- **Format Document:** `Shift+Alt+F` to auto-format code
- **Go to Line:** `Ctrl+G` to jump to line number
- **Find in File:** `Ctrl+F` to search

### Testing Changes
```bash
# In terminal:
npm run dev

# Visit http://localhost:3000 to see live changes
# Changes to content files auto-refresh
```

---

## Need Help?

### Common Questions

**Q: Where do I put real testimonials?**
A: Replace placeholder content in `testimonials.ts`, keeping the structure.

**Q: Can I add new service categories?**
A: Yes, but you'll need to update component filters and styling.

**Q: How do I update course prices?**
A: Edit `price` field in `courses.ts`, then update external course platform URL.

**Q: What happens if I delete a service?**
A: The service disappears from all pages using it. Make sure no active links point to it.

**Q: Can I have more than 5 services?**
A: Yes, add new service object to array. May need to adjust homepage layout.

---

## Summary

The content is easy to edit because:
- ✅ Structured as TypeScript objects
- ✅ Each item has clear fields
- ✅ Copy/paste pattern for new items
- ✅ No database required
- ✅ Changes reflect immediately in dev

**Happy editing!**
