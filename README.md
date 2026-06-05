# Ali Yoga Website

A modern, SEO-driven brand website for Ali Yoga built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌿 About Ali Yoga

Ali Yoga offers premium holistic yoga coaching with specialization in:
- **Private Yoga Coaching** - Personalized one-on-one sessions
- **Yoga for Golfers** - Mobility, balance, and focus training for golfers
- **Online Courses** - Self-paced yoga learning
- **Yoga Retreats** - Immersive wellness experiences
- **Breathwork & Meditation** - Specialized breathing and mindfulness practices

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ ([download](https://nodejs.org/))
- npm or yarn package manager
- Git for version control

### Local Development Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd ali-yoga
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Copy example file
cp .env.example .env.local

# Edit with your values (see Environment Variables section below)
nano .env.local
```

4. **Run development server**
```bash
npm run dev
```

5. **Open in browser**
Visit [http://localhost:3000](http://localhost:3000)

### Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |
| `npm run type-check` | Run TypeScript type checking |

---

## 📁 Folder Structure

```
ali-yoga/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                 # Homepage (/)
│   ├── layout.tsx               # Root layout with metadata
│   ├── about/
│   │   └── page.tsx             # About page (/about)
│   ├── yoga-for-golfers/
│   │   └── page.tsx             # Yoga for Golfers landing (/yoga-for-golfers)
│   ├── private-yoga-coaching/
│   │   └── page.tsx             # Private coaching page (/private-yoga-coaching)
│   ├── online-courses/
│   │   └── page.tsx             # Online courses page (/online-courses)
│   ├── retreats/
│   │   └── page.tsx             # Retreats page (/retreats)
│   ├── blog/
│   │   ├── page.tsx             # Blog index (/blog)
│   │   └── [slug]/
│   │       └── page.tsx         # Blog post detail (/blog/[slug])
│   ├── testimonials/
│   │   └── page.tsx             # Testimonials page (/testimonials)
│   ├── book/
│   │   ├── page.tsx             # Booking page (/book)
│   │   └── BookingForm.tsx      # Booking form component
│   ├── sitemap.ts               # XML sitemap generator
│   └── robots.ts                # Robots.txt configuration
│
├── components/                   # Reusable React components
│   ├── index.ts                 # Barrel export for clean imports
│   ├── layout/
│   │   ├── Header.tsx           # Site header with navigation
│   │   ├── Footer.tsx           # Site footer
│   │   ├── Container.tsx        # Content container wrapper
│   │   └── Section.tsx          # Section wrapper component
│   ├── ui/
│   │   ├── Button.tsx           # CTA button component
│   │   └── Card.tsx             # Reusable card component
│   └── sections/
│       ├── Hero.tsx             # Hero section
│       ├── ServiceCard.tsx      # Service card for grids
│       ├── TestimonialCard.tsx  # Testimonial card
│       ├── BlogCard.tsx         # Blog post card
│       ├── CourseCard.tsx       # Course card
│       ├── RetreatCard.tsx      # Retreat card
│       ├── FAQAccordion.tsx     # FAQ accordion
│       ├── CTASection.tsx       # Call-to-action section
│       ├── Breadcrumbs.tsx      # Breadcrumb navigation
│       └── JsonLd.tsx           # JSON-LD schema component
│
├── content/                      # Structured content data
│   ├── site.ts                  # Site metadata and config
│   ├── services.ts              # Service descriptions
│   ├── testimonials.ts          # Testimonial data
│   ├── faqs.ts                  # FAQ content
│   ├── courses.ts               # Course data
│   ├── retreats.ts              # Retreat information
│   └── blog.ts                  # Blog posts
│
├── lib/                          # Utility functions and helpers
│   ├── schemas.ts               # JSON-LD schema generators
│   ├── utils.ts                 # Helper functions
│   └── constants.ts             # Site constants
│
├── styles/                       # Global styles and tokens
│   ├── globals.css              # Global CSS with Tailwind directives
│   ├── tokens.ts                # Design tokens (colors, spacing, etc.)
│   └── print.css                # Print styles
│
├── types/                        # TypeScript type definitions
│   └── index.ts                 # All type interfaces
│
├── public/                       # Static assets
│   ├── images/
│   │   ├── hero/               # Hero section images
│   │   ├── services/           # Service page images
│   │   ├── about/              # About page images
│   │   ├── testimonials/       # Testimonial photos
│   │   ├── blog/               # Blog post featured images
│   │   ├── courses/            # Course images
│   │   ├── retreats/           # Retreat images
│   │   └── gallery/            # General gallery images
│   └── logo.svg                # Logo placeholder
│
├── docs/                         # Documentation
│   ├── README.md                # This file
│   ├── DEPLOYMENT-GUIDE.md      # Deployment instructions
│   ├── CONTENT-EDITING-GUIDE.md # How to edit content
│   ├── ENVIRONMENT-SETUP.md     # Environment variable guide
│   ├── SEO-IMPLEMENTATION.md    # SEO documentation
│   ├── IMAGE-GUIDE.md           # Image optimization guide
│   ├── ACCESSIBILITY-PERFORMANCE-AUDIT.md    # Audit guide
│   ├── VISUAL-POLISH-CHECKLIST.md            # Design checklist
│   └── QA-AND-LAUNCH-CHECKLIST.md            # QA procedures
│
├── .env.example                 # Environment variable template
├── .env.local                   # Local environment variables (git-ignored)
├── .gitignore                   # Git ignore rules
├── next.config.ts               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Project dependencies
└── package-lock.json            # Dependency lock file
```

---

## ⚙️ Environment Variables

Environment variables control sensitive configuration. Create `.env.local` based on `.env.example`:

```bash
# Copy template
cp .env.example .env.local
```

**Variables to configure:**

| Variable | Purpose | Example |
|----------|---------|---------|
| `NEXT_PUBLIC_SITE_URL` | Your production domain | `https://aliyoga.com` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ID | `G-XXXXXXXXXX` |
| `SENDGRID_API_KEY` | Email service API key | (for booking form) |
| `SENDGRID_FROM_EMAIL` | Booking form sender | `noreply@aliyoga.com` |
| `FORM_NOTIFICATION_EMAIL` | Where to send form submissions | `ali@aliyoga.com` |
| `STRIPE_PUBLIC_KEY` | Stripe API key (if using payments) | `pk_test_...` |
| `STRIPE_SECRET_KEY` | Stripe secret key (if using payments) | `sk_test_...` |

**Security Notes:**
- ✅ `.env.local` is git-ignored (never commit sensitive data)
- ✅ Use `.env.example` as template (safe to commit)
- ✅ Production variables set in deployment platform (Vercel)
- ✅ Never commit actual API keys or secrets

---

## 📝 Content Editing

### Quick Edits

**Most content lives in `/content/` TypeScript files:**

1. **Homepage services** → `/content/services.ts`
2. **Testimonials** → `/content/testimonials.ts`
3. **FAQs** → `/content/faqs.ts`
4. **Blog posts** → `/content/blog.ts`
5. **Courses** → `/content/courses.ts`
6. **Retreats** → `/content/retreats.ts`

**To edit a testimonial:**
```typescript
// /content/testimonials.ts
export const testimonials = [
  {
    id: '1',
    quote: 'Updated testimonial text here',
    author: 'Jane Doe',
    service: 'Private Coaching', // or 'Golf Yoga', 'Retreats', 'Online Courses'
    image: '/images/testimonials/jane.jpg',
  },
  // ... more testimonials
];
```

**To add a blog post:**
```typescript
// /content/blog.ts
{
  id: '11',
  title: 'My New Blog Post',
  slug: 'my-new-blog-post',
  description: 'Brief description for preview',
  publishedAt: '2024-06-04',
  category: 'Golf Yoga',
  author: 'Ali',
  image: '/images/blog/featured.jpg',
  seoTitle: 'SEO optimized title',
  seoDescription: 'Meta description for search',
  content: `
    # Section heading
    Paragraph content here...
    
    ## Subsection
    More content...
  `,
  relatedPostIds: ['1', '2', '3'], // Link to other posts
}
```

See **`/docs/CONTENT-EDITING-GUIDE.md`** for detailed instructions.

---

## 🖼️ Image Management

### Where to Place Images

```
public/images/
├── hero/              # Full-width hero images (1200x630px)
├── services/          # Service card images (600x400px)
├── about/             # About page images
├── testimonials/      # Testimonial headshots (300x400px)
├── blog/              # Blog featured images (1200x800px)
├── courses/           # Course thumbnail images (600x400px)
├── retreats/          # Retreat photos
└── gallery/           # General photo gallery
```

### File Naming Convention

Use format: `[category]-[descriptor]-[size].[extension]`

Examples:
- `hero-yoga-meditation-large.jpg`
- `service-golf-yoga-card.jpg`
- `testimonial-jane-doe.jpg`
- `blog-breathwork-focus.jpg`

### Image Specifications

| Use Case | Dimensions | Max Size | Format |
|----------|-----------|----------|--------|
| Hero | 1200x630px | 150KB | JPEG/WebP |
| Service Cards | 600x400px | 80KB | JPEG/WebP |
| Blog Featured | 1200x800px | 150KB | JPEG/WebP |
| Testimonials | 300x400px | 40KB | JPEG/PNG |
| Course Thumbnails | 600x400px | 80KB | JPEG/WebP |
| Retreat Photos | 1200x800px | 150KB | JPEG/WebP |

### Replacing Images

1. **Upload new image** to appropriate `/public/images/` folder
2. **Update reference** in content file:
```typescript
// Before
image: '/images/testimonials/old-photo.jpg'

// After
image: '/images/testimonials/new-photo.jpg'
```

3. **Update alt text** (important for accessibility):
```typescript
// In component
<Image 
  src="/images/testimonials/jane.jpg"
  alt="Jane Doe smiling at yoga class"
/>
```

See **`/docs/IMAGE-GUIDE.md`** for detailed image optimization.

---

## 🔗 Forms & Integrations

### Booking Form

The booking form at `/book` is integration-ready with placeholder handlers.

**Current State:**
- ✅ Form validation (email, phone, required fields)
- ✅ Success/error states
- ✅ Form UI complete
- ❌ Backend integration not connected

**To Connect to Email:**

1. **Choose email service** (recommended: SendGrid, Mailgun, or AWS SES)

2. **Add API key** to `.env.local`:
```
SENDGRID_API_KEY=your_key_here
SENDGRID_FROM_EMAIL=noreply@aliyoga.com
FORM_NOTIFICATION_EMAIL=ali@aliyoga.com
```

3. **Create API route** at `/app/api/book/route.ts`:
```typescript
export async function POST(request: Request) {
  const formData = await request.json();
  
  // Send email via SendGrid, Mailgun, etc.
  // Return { success: true } or { error: 'message' }
}
```

4. **Update BookingForm.tsx** to call your API:
```typescript
const response = await fetch('/api/book', {
  method: 'POST',
  body: JSON.stringify(formData),
});
```

See **`/docs/CONTENT-EDITING-GUIDE.md`** → "Booking Form Integration" section.

---

## 🚀 Deployment

### Recommended: Vercel (Zero-Config)

**Vercel is recommended because:**
- ✅ Next.js optimized platform
- ✅ Automatic SSL/TLS
- ✅ Global CDN included
- ✅ Automatic image optimization
- ✅ Environment variables UI
- ✅ Preview deployments
- ✅ Free tier available

**To Deploy on Vercel:**

1. **Push code to GitHub/GitLab**
```bash
git push origin main
```

2. **Sign up at Vercel** → https://vercel.com
3. **Import project** from Git repository
4. **Set environment variables** in Vercel dashboard:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_GA_ID`
   - `SENDGRID_API_KEY`
   - etc.
5. **Click Deploy** - done! 🎉

**Domain Configuration:**
- Go to Vercel project settings
- Add custom domain (e.g., `aliyoga.com`)
- Follow DNS setup instructions
- SSL certificate auto-issued

### Alternative: Traditional Hosting

**For other platforms (AWS, DigitalOcean, etc):**

1. **Build production bundle:**
```bash
npm run build
```

2. **Start production server:**
```bash
npm run start
```

3. **Use process manager** (PM2, systemd, etc.) to keep running
4. **Set environment variables** on server
5. **Configure reverse proxy** (Nginx, Apache)
6. **Set up SSL** (Let's Encrypt)

See **`/docs/DEPLOYMENT-GUIDE.md`** for detailed platform-specific instructions.

---

## 📊 Analytics & SEO

### Google Analytics Setup

1. **Create GA4 property** → https://analytics.google.com
2. **Get Measurement ID** (format: `G-XXXXXXXXXX`)
3. **Add to `.env.local`:**
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
4. **Analytics tracking enabled** automatically on all pages

### Google Search Console

1. **Create GSC property** → https://search.google.com/search-console
2. **Verify domain ownership** (DNS or HTML file method)
3. **Submit sitemap:**
   - Sitemap URL: `https://aliyoga.com/sitemap.xml`
   - Check coverage status
4. **Monitor:**
   - Search performance
   - Indexing status
   - Mobile usability
   - Core Web Vitals

### SEO Files

**Already implemented:**

| File | Purpose |
|------|---------|
| `/sitemap.ts` | XML sitemap (20 URLs) |
| `/robots.ts` | Crawler rules & sitemap |
| `/next.config.ts` | 301 redirects for old URLs |
| `/lib/schemas.ts` | JSON-LD schema generators |
| Page metadata | Title, description, OG tags on all pages |

**SEO Checklist:**
- [x] Homepage optimized
- [x] Service pages SEO complete
- [x] Blog posts indexed
- [x] Schema markup on all pages
- [x] Mobile-friendly design
- [x] Core Web Vitals optimized
- [x] Internal linking strategy

See **`/docs/SEO-IMPLEMENTATION.md`** for complete SEO guide.

---

## 🎨 Design System

### Colors (Tailwind CSS)

```javascript
const colors = {
  cream: '#FAF7F0',         // Backgrounds
  warmSand: '#E8D8C3',      // Secondary
  deepOlive: '#3F4A36',     // Body text
  softClay: '#B9866B',      // Primary CTA
  charcoalBrown: '#2B2520', // Headings
  sage: '#A8B8A0',          // Subtle accents
  goldenSun: '#D8A84E',     // Highlights
};
```

### Typography

```javascript
// Headings - Elegant serif
font-family: 'Merriweather', Georgia, serif;
font-weight: 700;

// Body - Clean sans-serif
font-family: 'Inter', system-ui, sans-serif;
font-weight: 400;
```

### Spacing Grid

Base unit: **4px** (Tailwind spacing scale)

```javascript
p-4    = 16px padding
m-6    = 24px margin
gap-6  = 24px gap
```

**Access tokens:** `/styles/tokens.ts`

---

## 🔐 Security

### Before Launching

- [x] No hardcoded secrets in code
- [x] Environment variables configured
- [x] Dependencies updated: `npm audit`
- [x] HTTPS enabled
- [x] Content Security Policy headers
- [x] CORS properly configured

### Ongoing

- [ ] Monitor `npm audit` for vulnerabilities
- [ ] Keep dependencies updated: `npm update`
- [ ] Review error logs monthly
- [ ] Backup database regularly
- [ ] Monitor for suspicious requests

---

## 📚 Additional Documentation

For detailed information, see:

- **🚀 Deployment** → `/docs/DEPLOYMENT-GUIDE.md`
- **✏️ Content Editing** → `/docs/CONTENT-EDITING-GUIDE.md`
- **⚙️ Environment Setup** → `/docs/ENVIRONMENT-SETUP.md`
- **🔍 SEO Implementation** → `/docs/SEO-IMPLEMENTATION.md`
- **🖼️ Image Optimization** → `/docs/IMAGE-GUIDE.md`
- **♿ Accessibility & Performance** → `/docs/ACCESSIBILITY-PERFORMANCE-AUDIT.md`
- **🎨 Visual Polish** → `/docs/VISUAL-POLISH-CHECKLIST.md`
- **✅ QA & Launch** → `/docs/QA-AND-LAUNCH-CHECKLIST.md`

---

## 🎯 Future Enhancements

### Phase 2: CMS Integration

Currently, content is in TypeScript files. For non-developer friendly editing:

**Option 1: Headless CMS** (Recommended)
- Contentful
- Sanity.io
- Strapi

**Option 2: Flat File CMS**
- Frontmatter.io
- TinaCMS

**Option 3: WordPress Headless**
- WordPress + GraphQL

**Migration Path:**
1. Create API routes to fetch from CMS
2. Replace `/content/` file imports with API calls
3. Add auth for content creators
4. Revalidate cache on content updates

### Phase 2: Additional Features

- [ ] YouTube OAuth for video uploads
- [ ] Video rendering with mind maps
- [ ] Batch booking/scheduling
- [ ] Analytics dashboard
- [ ] Member login portal
- [ ] Email newsletter
- [ ] Community forum
- [ ] Live class scheduling

---

## 🤝 Contributing

### Development Workflow

1. **Create feature branch:**
```bash
git checkout -b feature/my-feature
```

2. **Make changes** and test locally
```bash
npm run dev
# Test at http://localhost:3000
```

3. **Type check and lint:**
```bash
npm run type-check
npm run lint
```

4. **Commit with clear message:**
```bash
git commit -m "feat: add new feature description"
```

5. **Push and create PR:**
```bash
git push origin feature/my-feature
```

### Code Standards

- TypeScript strict mode required
- Semantic HTML mandatory
- Accessible components (WCAG 2.1 AA)
- Mobile-first responsive design
- Tailwind CSS for styling
- No magic numbers in code

---

## 📞 Support & Maintenance

### Monthly Maintenance

- [ ] Review analytics in Google Analytics
- [ ] Check Google Search Console for errors
- [ ] Update blog with new posts
- [ ] Monitor form submissions
- [ ] Check for broken links

### Quarterly Maintenance

- [ ] Update dependencies: `npm update`
- [ ] Review security: `npm audit`
- [ ] Check Core Web Vitals
- [ ] Optimize underperforming pages
- [ ] Review and respond to feedback

### Annual Maintenance

- [ ] Full accessibility audit
- [ ] Update testimonials
- [ ] Refresh blog content
- [ ] Review and update services
- [ ] Plan new features

---

## ✅ Quick Reference

**Start Dev:** `npm run dev`
**Build:** `npm run build`
**Deploy:** Push to GitHub (if using Vercel)
**Edit Content:** Update files in `/content/`
**Update Images:** Add to `/public/images/` and update references
**Deploy Manually:** `npm run build && npm run start`

---

**Last Updated:** June 2024 | **Version:** 1.0.0 | **Status:** Production Ready ✅
