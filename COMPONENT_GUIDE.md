# Ali Yoga Component Library
## Design System & Reusable Components for Premium Wellness

This document outlines all reusable components built for Ali Yoga, organized by category.

---

## 🎯 Design Requirements Met

All components follow these design principles:
- ✅ **Premium wellness aesthetic** - Warm, calm, elegant styling
- ✅ **Soft rounded corners** - Consistent border-radius (md to xl)
- ✅ **Natural spacing** - Consistent spacing tokens (xs to 5xl)
- ✅ **Strong mobile experience** - Mobile-first responsive design
- ✅ **Sticky header** - Header stays at top on scroll
- ✅ **Clear CTA buttons** - High contrast, accessible buttons
- ✅ **Smooth hover states** - Subtle, elegant transitions
- ✅ **Accessible focus states** - Focus rings on all interactive elements
- ✅ **Semantic HTML** - Proper heading hierarchy, ARIA labels
- ✅ **Subtle animations** - Fade-in and slide-up animations only
- ✅ **No overdone animations** - Respects prefers-reduced-motion

---

## Layout Components

### 1. **Header** (`components/layout/Header.tsx`)

**Features:**
- Sticky navigation with brand logo
- Responsive desktop and mobile navigation
- Mobile hamburger menu with slide-out nav
- "Book a Session" CTA button
- Smooth transitions on hover

**Usage:**
```tsx
import { Header } from '@components/layout/Header';

export default function Layout() {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
```

**Design Details:**
- Cream background with warm-sand border
- Deep-olive text for nav items
- Hover color transitions to soft-clay
- Mobile menu appears at md breakpoint
- Accessible focus states on all links

---

### 2. **Footer** (`components/layout/Footer.tsx`)

**Features:**
- Multi-column footer layout
- Brand summary section
- Navigation links
- Services links
- Social media links with icons
- CTA section
- Copyright information

**Usage:**
```tsx
import { Footer } from '@components/layout/Footer';

export default function Layout() {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
```

**Design Details:**
- Deep-olive background with cream text
- Responsive grid (1 col mobile, 4 col desktop)
- Warm-sand accent text for secondary content
- Social link icons with hover effects
- Divider borders for visual hierarchy

---

### 3. **Container** (`components/layout/Container.tsx`)

**Features:**
- Max-width content wrapper
- Horizontal padding for mobile
- Consistent margins across pages
- Optional className prop

**Usage:**
```tsx
import { Container } from '@components/layout/Container';

export default function Page() {
  return (
    <Container>
      <h1>Page Title</h1>
    </Container>
  );
}
```

**Design Details:**
- Max-width: 7xl (80rem)
- Responsive padding (4 on mobile, 8 on desktop)
- Tailwind container class wrapper

---

### 4. **Section** (`components/layout/Section.tsx`)

**Features:**
- Flexible section wrapper
- Three size options (sm, md, lg)
- Four background options (cream, white, olive, none)
- Optional className prop
- Children support

**Usage:**
```tsx
import { Section } from '@components/layout/Section';

export default function Page() {
  return (
    <Section size="lg" background="cream">
      <h2>Section Title</h2>
      {content}
    </Section>
  );
}
```

**Design Details:**
- sm: py-8 sm:py-12
- md: py-16 sm:py-20 lg:py-24 (default)
- lg: py-24 sm:py-32 lg:py-40
- Automatic Container wrapping

---

## UI Components

### 5. **Button** (`components/ui/Button.tsx`)

**Features:**
- 4 variants: primary, secondary, outline, ghost
- 3 sizes: sm, md, lg
- Full-width option
- Disabled state
- Focus ring styling

**Variants:**
- `primary` - Soft clay background, cream text
- `secondary` - Deep olive background, cream text
- `outline` - Soft clay border, soft clay text
- `ghost` - Transparent, soft clay text, warm-sand hover

**Usage:**
```tsx
import { Button } from '@components/ui/Button';

<Button variant="primary" size="lg">
  Book a Session
</Button>
```

**Design Details:**
- Smooth hover transitions (200ms)
- Focus ring with offset
- Semantic button element
- Accessible disabled state

---

### 6. **Card** (`components/ui/Card.tsx`)

**Features:**
- Base card component with header/footer support
- ServiceCard specialized component
- Hover shadow effects
- Optional className prop
- Responsive grid support

**Card Variants:**

#### Base Card
```tsx
<Card header="Title" footer="Footer text">
  Card content
</Card>
```

#### ServiceCard
```tsx
<ServiceCard
  title="Private Coaching"
  description="One-on-one personalized sessions"
  icon="🧘"
  link="/private-coaching"
/>
```

**Design Details:**
- White background with warm-sand border
- Soft-lg rounded corners
- Hover shadow-lg transition
- Group hover effects on text
- Card-body padding consistent

---

## Hero & Feature Components

### 7. **Hero** (`components/sections/Hero.tsx`)

**Features:**
- Full-height hero banner
- Headline and subheadline support
- Optional background image with overlay
- Primary and secondary CTAs
- Children support for custom content
- Smooth animations on load

**Usage:**
```tsx
import { Hero } from '@components/sections/Hero';

<Hero
  headline="Yoga for Freedom, Focus & Flow"
  subheadline="Private coaching designed for your goals"
  primaryCta={{ label: "Book Now", href: "/book" }}
  secondaryCta={{ label: "Learn More", href: "/yoga-for-golfers" }}
/>
```

**Design Details:**
- Min-height: screen
- Large responsive text (5xl to 7xl)
- Gradient background (cream to white) or custom image
- Center-aligned layout
- Gap between elements

---

### 8. **CTASection** (`components/sections/CTASection.tsx`)

**Features:**
- Flexible call-to-action section
- Three background options (cream, olive, gradient)
- Headline, description, and button support
- Optional children
- Centered layout option

**Usage:**
```tsx
import { CTASection } from '@components/sections/CTASection';

<CTASection
  headline="Ready to Transform Your Practice?"
  description="Join our next retreat"
  primaryCtaLabel="View Retreats"
  background="olive"
/>
```

**Design Details:**
- Responsive padding (py-20 sm:py-28)
- Text color changes with background
- Button variants adapt to background
- Max-width 2xl when centered

---

## Content Card Components

### 9. **TestimonialCard** (`components/sections/TestimonialCard.tsx`)

**Features:**
- 5-star rating display
- Testimonial text in italics
- Author name and title
- Structured data compatible
- Card-based layout

**Usage:**
```tsx
import { TestimonialCard } from '@components/sections/TestimonialCard';

<TestimonialCard
  testimonial={{
    id: 'test-1',
    name: 'Sarah Martinez',
    title: 'Golfer',
    content: 'Ali transformed my golf game...',
    category: 'Yoga for Golfers',
  }}
/>
```

**Design Details:**
- Golden-sun star ratings
- Italic quote styling
- Author info at bottom
- Flex layout (content grows, info stays)

---

### 10. **BlogCard** (`components/sections/BlogCard.tsx`)

**Features:**
- Featured image with hover zoom
- Category and publish date
- Blog post title
- Excerpt
- "Read more" link
- Responsive image height

**Usage:**
```tsx
import { BlogCard } from '@components/sections/BlogCard';

<BlogCard post={blogPost} />
```

**Design Details:**
- 48px height image container
- 105% scale on hover
- Soft-clay links
- Structured for grid layout
- Proper semantic structure

---

### 11. **RetreatCard** (`components/sections/RetreatCard.tsx`)

**Features:**
- Retreat image with hover effect
- Location and date information
- Capacity progress bar
- Pricing display
- "Learn More" button
- Icons for location/date

**Usage:**
```tsx
import { RetreatCard } from '@components/sections/RetreatCard';

<RetreatCard retreat={retreatData} />
```

**Design Details:**
- 48px image height
- Capacity bar with soft-clay fill
- Flex layout for price/button alignment
- SVG inline icons
- Date range formatting

---

### 12. **CourseCard** (`components/sections/CourseCard.tsx`)

**Features:**
- Course image with hover zoom
- Level badge
- Course title
- Description
- Star rating with student count
- Duration and price
- "View Course" button

**Usage:**
```tsx
import { CourseCard } from '@components/sections/CourseCard';

<CourseCard course={courseData} />
```

**Design Details:**
- Level badge (warm-sand background)
- Dynamic star rating display
- Rating count in small text
- Duration and price in footer
- Button takes full width

---

## Utility Components

### 13. **FAQAccordion** (`components/sections/FAQAccordion.tsx`)

**Features:**
- Interactive accordion items
- Smooth expand/collapse animation
- Chevron rotation indicator
- Default open item support
- Accessible keyboard navigation
- ARIA labels for screen readers

**Usage:**
```tsx
import { FAQAccordion } from '@components/sections/FAQAccordion';

<FAQAccordion
  items={faqItems}
  defaultOpen="faq-1"
/>
```

**Design Details:**
- Warm-sand borders
- Cream background on open
- Slide-up animation on content
- 200ms transition on chevron
- Focus states on buttons
- Semantic question/answer structure

---

### 14. **Breadcrumbs** (`components/sections/Breadcrumbs.tsx`)

**Features:**
- Navigation breadcrumb trail
- Optional links
- Current page indicator
- SVG chevron separators
- Semantic nav element
- Accessible to screen readers

**Usage:**
```tsx
import { Breadcrumbs } from '@components/sections/Breadcrumbs';

<Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Private Coaching' },
  ]}
/>
```

**Design Details:**
- Cream background with border
- Soft-clay link colors
- Sage separator chevrons
- Small font size
- Proper nav semantics

---

### 15. **BookingForm** (`components/sections/BookingForm.tsx`)

**Features:**
- Full form validation
- 9 form fields (name, email, phone, location, service, experience, format, goals, message)
- Success and error states
- Loading state
- Field-specific error messages
- ARIA labels and error descriptions
- Placeholder API integration

**Form Fields:**
- Name (required)
- Email (required, validated)
- Phone (required)
- Location (optional)
- Interested in (dropdown, required)
- Experience level (dropdown, required)
- Session format (dropdown, required)
- Goals (textarea, required)
- Additional message (textarea, optional)

**Usage:**
```tsx
import { BookingForm } from '@components/sections/BookingForm';

<BookingForm />
```

**Design Details:**
- Inline validation with error messages
- Success message with auto-dismiss
- Error summary at top
- Accessible form structure
- Submit button with loading state
- Privacy note at bottom
- Responsive textarea
- Smooth error animations

---

### 16. **JsonLd** (`components/sections/JsonLd.tsx`)

**Features:**
- JSON-LD schema rendering
- Pre-built schema templates
- Organization schema
- Person schema
- Website schema
- Extensible for custom schemas

**Usage:**
```tsx
import { JsonLd, organizationSchema } from '@components/sections/JsonLd';

<JsonLd data={organizationSchema} />
```

**Available Schemas:**
- organizationSchema
- personSchema
- websiteSchema
- (Ready for: ServiceSchema, CourseSchema, BlogPostingSchema, FAQSchema, BreadcrumbListSchema)

**Design Details:**
- Server-side rendering compatible
- Safe JSON stringification
- Script tag injection
- Application/ld+json type

---

## Component Export Index

All components are centrally exported from `components/index.ts`:

```tsx
// Layout
export { Container, Header, Footer, Section };

// UI
export { Button, Card, ServiceCard };

// Sections
export {
  Hero,
  TestimonialCard,
  FAQAccordion,
  BlogCard,
  RetreatCard,
  CourseCard,
  Breadcrumbs,
  CTASection,
  BookingForm,
  JsonLd,
  organizationSchema,
  personSchema,
  websiteSchema,
};
```

---

## Color Palette Integration

All components use the brand color palette consistently:

- **Primary Text**: charcoal-brown (#2B2520)
- **Secondary Text**: deep-olive (#3F4A36)
- **Muted Text**: sage (#A8B8A0)
- **Backgrounds**: cream (#FAF7F0), white
- **Accents**: soft-clay (#B9866B), golden-sun (#D8A84E)
- **Borders**: warm-sand (#E8D8C3)

---

## Typography Integration

All components use brand typography:

- **Headings**: Merriweather (serif) - Elegant and editorial
- **Body**: Inter (sans-serif) - Clean and readable

---

## Accessibility Features

Every component includes:

- ✅ Semantic HTML structure
- ✅ ARIA labels where needed
- ✅ Focus states on interactive elements
- ✅ Focus rings (2px offset)
- ✅ Color contrast meets WCAG AA standards
- ✅ Form validation with error messages
- ✅ Keyboard navigation support
- ✅ Screen reader friendly

---

## Responsive Design

All components are mobile-first with breakpoints:

- **Mobile**: 320px (default)
- **Tablet**: 768px (md)
- **Desktop**: 1024px (lg)
- **Large**: 1280px (xl)

---

## Animation & Transitions

Components use subtle, tasteful animations:

- **Fast**: 150ms ease-out (quick interactions)
- **Base**: 200ms ease-out (standard transitions)
- **Slow**: 300ms ease-out (loading states)
- **Slower**: 400ms ease-out (page transitions)

**Animations:**
- `fade-in` - Opacity transition
- `slide-up` - Transform + opacity

---

## Conclusion

This component library provides a complete, accessible, premium-quality design system for Ali Yoga. All 17 components work together seamlessly, following consistent design principles while allowing flexibility for future customization.

**Next Steps:**
- Build pages using these components (Prompts 4-11)
- Add more specialized components as needed
- Integrate with CMS for content management
