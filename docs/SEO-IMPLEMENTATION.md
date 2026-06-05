# Technical SEO Implementation Guide

## Overview

This document outlines the technical SEO implementation for the Ali Yoga website, including metadata strategy, image optimization, schema markup, and redirects.

---

## 1. Metadata Strategy

### Page Metadata Structure

Every page includes the following metadata:

**Title Tag (60 characters max)**
- Format: `[Primary Keyword] | [Brand Name] - [Unique Value Proposition]`
- Example: "Private Yoga Coaching | Ali Yoga - Personalized Sessions"
- All titles are unique and keyword-targeted
- Brand name included for brand awareness

**Meta Description (158 characters)**
- Format: Natural language description of page content
- Includes primary keywords naturally
- Includes CTA or main benefit
- All descriptions are unique per page

**Keywords Array**
- 5-7 primary and secondary keywords per page
- Includes long-tail variations
- Naturally integrated into page content

**Canonical URL**
- All pages have explicit canonical URLs
- Points to HTTPS version of pages
- Prevents duplicate content issues
- Format: `https://aliyoga.com/[route]`

### Open Graph Metadata

All pages include Open Graph tags for social sharing:

```typescript
openGraph: {
  type: 'website' | 'article',
  locale: 'en_US',
  url: 'https://aliyoga.com/[page]',
  title: '[SEO Title]',
  description: '[Meta Description]',
  images: [{
    url: '[Image URL]',
    width: 1200,
    height: 630,
    alt: '[Image Description]'
  }]
}
```

**Why This Matters:**
- Controls how content appears on Facebook, LinkedIn, Pinterest
- Improves click-through rates from social media
- Ensures consistent branding on social shares

### Twitter Card Metadata

```typescript
twitter: {
  card: 'summary_large_image',
  title: '[SEO Title]',
  description: '[Meta Description]',
  images: ['[Image URL]']
}
```

**Why This Matters:**
- Improves appearance on Twitter/X
- Drives traffic from social sharing
- Increases engagement on social platforms

---

## 2. Sitemap & Robots

### Sitemap (`/app/sitemap.ts`)

**Purpose:** Helps Google discover and index all pages

**Structure:**
- Dynamic generation from content files
- Includes all static pages (10 routes)
- Includes all blog posts (10 entries)
- Updates publication dates for blog posts
- Sets appropriate priority levels:
  - Homepage: 1.0
  - Service pages: 0.85-0.95
  - Blog index: 0.8
  - Individual blog posts: 0.7
  - Supporting pages: 0.75-0.8

**Change Frequency:**
- Homepage: weekly
- Service pages: weekly
- Blog: weekly
- Retreats/About: monthly
- Testimonials/Book: monthly

**Accessible at:** `https://aliyoga.com/sitemap.xml`

### Robots.txt (`/app/robots.ts`)

**Purpose:** Controls crawler access and declares sitemap

**Rules:**
- Allow all legitimate crawlers (Googlebot, Bingbot)
- Disallow AI training bots (GPTBot, CCBot)
- Block internal paths (/api, /admin, /_next)
- Point to sitemap location

**Accessible at:** `https://aliyoga.com/robots.txt`

---

## 3. Redirects (`next.config.ts`)

### 301 Permanent Redirects

**Implemented Redirects:**

| Old URL | New URL | Reason |
|---------|---------|--------|
| `/about-me` | `/about` | URL consolidation |
| `/classes` | `/yoga-for-golfers` | Content restructure |
| `/member-site-homepage-1` | `/online-courses` | Platform migration |

**Why 301 Redirects:**
- Pass 90-100% of link equity to new URL
- Preserve search rankings
- Maintain user experience
- Prevent 404 errors

**How They Work:**
- Permanent (301) means search engines update their index
- Link equity flows to new page
- Analytics follow the redirect

---

## 4. JSON-LD Schema Markup

### Schemas Implemented

#### Organization Schema
**Includes:**
- Company name, description, URL
- Logo and social links
- Address information
- Aggregate rating (if applicable)

**Impact:**
- Appears in Google's knowledge panel
- Shows in local business results
- Improves brand visibility

#### Person Schema
**Includes:**
- Founder name and title
- Website and social profiles
- Areas of expertise
- Related knowledge areas

**Impact:**
- Builds founder authority
- Appears in search results
- Supports E-E-A-T signals (Google's ranking factor)

#### Service Schema
**Service Pages:**
- Private Yoga Coaching
- Yoga for Golfers
- Online Courses
- Retreats
- Breathwork & Meditation

**Includes:**
- Service name and description
- Provider information
- Service area

**Impact:**
- Improves visibility in service search results
- Rich snippets in Google

#### Course Schema
**For:**
- Each online course
- Training programs

**Includes:**
- Course name and description
- Instructor information
- Duration (ISO 8601 format)
- Rating and review count
- Pricing information
- Number of lessons

**Impact:**
- Google lists courses in course results
- Shows pricing and ratings
- Improves discoverability

#### BlogPosting Schema
**For:**
- All blog posts

**Includes:**
- Article headline and description
- Featured image
- Publication and modification dates
- Author information
- Article body

**Impact:**
- Google displays in rich results
- Shows preview text
- Supports news indexing

#### FAQPage Schema
**For:**
- Yoga for Golfers page
- Private Coaching page
- Retreats page
- Online Courses page

**Includes:**
- FAQ questions and answers

**Impact:**
- Google shows FAQ accordion in search results
- Improves click-through rate
- Shows answers directly in search

#### BreadcrumbList Schema
**For:**
- All pages except homepage

**Includes:**
- Page hierarchy
- Navigation path

**Impact:**
- Shows breadcrumb navigation in search results
- Improves site structure clarity
- Enables easy navigation from results

### Schema Implementation Method

**Via JsonLd Component:**
```typescript
import { JsonLd } from '@components/sections/JsonLd';

<JsonLd data={schemaObject} />
```

**Via Schema Utilities (`lib/schemas.ts`):**
```typescript
import { generateOrganizationSchema } from '@lib/schemas';

const schema = generateOrganizationSchema({
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: 156
  }
});
```

---

## 5. Image Alt Text Strategy

### Image Naming & Alt Text

**Purpose:** 
- Accessibility for screen reader users
- SEO signal for image search
- Context for search engines

### Alt Text Guidelines

**For Hero Images:**
```
Format: [Page Topic] - [Key Benefit/Visual Description]
Example: "Yoga instructor in meditation pose outdoors at sunrise"
```

**For Service Card Images:**
```
Format: [Service Name] - [Key Benefit]
Example: "Private yoga session showing personalized one-on-one coaching"
```

**For Blog Images:**
```
Format: [Article Topic] - [Visual/Concept]
Example: "Golfer performing yoga pose for improved swing mobility"
```

**For Testimonial Images:**
```
Format: [Name] - [Service/Result]
Example: "Sarah, private yoga coaching student, demonstrates improved flexibility"
```

**For Retreat Images:**
```
Format: [Retreat Name] - [Activity/Location]
Example: "Yoga retreat participants in downward dog pose on resort terrace"
```

### Implementation

**In Image Tags:**
```jsx
<img
  src="/images/yoga-hero.jpg"
  alt="Yoga instructor in meditation pose during private coaching session"
  loading="lazy"
  width={1200}
  height={630}
/>
```

**Best Practices:**
- Descriptive but concise (120 characters max)
- No "image of" or "picture of" prefix
- Include relevant keywords naturally
- Describe the image, not the page
- No alt text for purely decorative images
- Use `alt=""` for decorative images

### Image File Naming

**Format:** `[topic]-[descriptor]-[size].jpg`

**Examples:**
- `yoga-hero-1200x630.jpg`
- `golf-yoga-pose-800x600.jpg`
- `retreat-outdoor-session-1200x800.jpg`
- `testimonial-sarah-200x200.jpg`

**Naming Benefits:**
- Improves SEO signals
- Better file organization
- Easier content management

---

## 6. Performance Optimization for SEO

### Image Optimization

**Formats:**
- JPEG for photos (best compression)
- PNG for graphics with transparency
- WebP for modern browsers (fallback to JPEG)
- SVG for logos and icons

**Sizes:**
- Hero: 1200x630px (2400x1260 for 2x DPI)
- Cards: 600x400px
- Thumbnails: 300x200px
- Full width: 1200x800px

**Optimization:**
- Compress all images (TinyPNG, ImageOptim)
- Use `next/image` for automatic optimization
- Set `loading="lazy"` for below-fold images
- Specify dimensions to prevent layout shift

### Core Web Vitals

**Largest Contentful Paint (LCP):**
- Target: <2.5 seconds
- Optimize hero images
- Defer non-critical CSS

**First Input Delay (FID):**
- Target: <100ms
- Minimize JavaScript
- Remove render-blocking resources

**Cumulative Layout Shift (CLS):**
- Target: <0.1
- Specify image dimensions
- Use fixed container heights

---

## 7. Mobile SEO

### Mobile-First Approach

**Implemented:**
- Responsive grid layouts (1 col mobile → 3 cols desktop)
- Touch-friendly buttons (48px minimum)
- Readable font sizes (16px minimum on mobile)
- Proper viewport meta tag
- Fast mobile performance

### Mobile Recommendations

**Viewport Meta Tag:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Mobile Testing:**
- Use Google Mobile-Friendly Test
- Test on actual devices
- Check page speed with Lighthouse

---

## 8. Technical Implementation Checklist

### Phase 1: Foundation ✅
- [x] Metadata on all pages
- [x] Canonical URLs
- [x] Open Graph tags
- [x] Twitter cards
- [x] Sitemap generation
- [x] Robots.txt configuration
- [x] JSON-LD schemas
- [x] Redirects

### Phase 2: Content ✅
- [x] Image alt text on all images
- [x] Semantic HTML (h1-h6 hierarchy)
- [x] Internal linking strategy
- [x] Structured data validation

### Phase 3: Optimization
- [ ] Core Web Vitals optimization
- [ ] Mobile performance testing
- [ ] Image size optimization
- [ ] CSS/JS minification

### Phase 4: Monitoring
- [ ] Google Search Console setup
- [ ] Google Analytics setup
- [ ] Ranking tracking
- [ ] Broken link monitoring

---

## 9. Google Search Console Setup

### Required Actions

1. **Add Property:**
   - https://search.google.com/search-console
   - Add domain: `aliyoga.com`

2. **Verify Ownership:**
   - Add DNS TXT record
   - Or upload verification file

3. **Submit Sitemap:**
   - Go to Sitemaps section
   - Submit `https://aliyoga.com/sitemap.xml`

4. **Monitor Performance:**
   - Check impressions and clicks
   - Monitor average position
   - Watch for indexing errors

### Key Metrics to Track

- **Impressions:** Times your page appears in search
- **Clicks:** Times users click through
- **Average Position:** Ranking position
- **Coverage:** Indexing status of pages

---

## 10. Schema Validation

### Tools for Testing

1. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - Validates schema markup
   - Shows how results will appear

2. **Schema.org Validator**
   - https://validator.schema.org
   - Checks JSON-LD syntax

3. **Structured Data Linter**
   - Tests all implemented schemas

### Common Issues & Fixes

**Issue:** "Missing recommended property"
- **Fix:** Add optional properties to schema

**Issue:** "Invalid format"
- **Fix:** Check date format (ISO 8601: YYYY-MM-DD)

**Issue:** "Type mismatch"
- **Fix:** Ensure values match schema type

---

## 11. Future Enhancements

### Phase 2 Optimizations
- [ ] Add Event schema for retreat dates (when active)
- [ ] Video schema for any instructional videos
- [ ] SoftwareApplication schema for yoga app
- [ ] Review schema once reviews are collected
- [ ] Map embed for local business
- [ ] FAQ structured data expansion

### Advanced SEO
- [ ] Internal linking analysis tool
- [ ] Keyword clustering for content
- [ ] Content gap analysis
- [ ] Competitor analysis
- [ ] Backlink strategy

---

## 12. Maintenance Schedule

### Weekly
- Monitor Search Console for errors
- Check broken links
- Review page speed

### Monthly
- Analyze ranking positions
- Review traffic patterns
- Update blog content

### Quarterly
- Full site crawl audit
- Schema validation check
- Competitor analysis
- Content optimization review

### Annually
- Comprehensive SEO audit
- Update content for freshness
- Review and refresh link building

---

## Resources

- **Google Search Central:** https://developers.google.com/search
- **Schema.org Documentation:** https://schema.org
- **Next.js SEO Guide:** https://nextjs.org/learn/seo/introduction-to-seo
- **Structured Data Guide:** https://developers.google.com/search/docs/appearance/structured-data
- **Rich Results Test:** https://search.google.com/test/rich-results
- **Google Lighthouse:** https://developers.google.com/web/tools/lighthouse