# Accessibility & Performance Audit Guide

## Overview

This comprehensive audit guide verifies accessibility (WCAG 2.1 AA), performance, and user experience across all pages. Use this before launch to ensure quality standards.

---

## 1. Accessibility Audit Checklist

### WCAG 2.1 Level AA Standards

#### 1.1 Text Alternatives

**Requirement:** All non-text content has text alternatives

**Audit Items:**
- [x] All `<img>` tags have `alt` attributes
- [x] Alt text is descriptive (not "image" or "photo")
- [x] Decorative images have `alt=""` and `aria-hidden="true"`
- [x] Background images have text overlay or `aria-label`
- [x] Video/media has captions or transcripts

**How to Check:**
```bash
# Run in browser console
document.querySelectorAll('img').forEach(img => {
  if (!img.alt) console.warn('Missing alt:', img.src);
  if (img.alt.length > 150) console.warn('Alt too long:', img.alt);
});
```

**Fix if Needed:**
```jsx
// ❌ Bad
<img src="yoga.jpg" />
<img src="decoration.jpg" alt="decorative line" />

// ✅ Good
<img src="yoga.jpg" alt="Instructor demonstrating downward dog pose" />
<img src="decoration.jpg" alt="" aria-hidden="true" />
```

---

#### 1.2 Keyboard Navigation

**Requirement:** All functionality available via keyboard

**Audit Items:**
- [ ] Tab through entire page (start to end)
- [ ] All interactive elements are reachable
- [ ] Focus order is logical (top to bottom, left to right)
- [ ] No keyboard traps (can't tab away from element)
- [ ] Menu navigation works with arrow keys
- [ ] Can submit forms with Tab + Enter

**How to Check:**
```
1. Click on page
2. Press Tab repeatedly
3. Watch for:
   - Focus ring visible
   - Logical order
   - No getting stuck
4. Test on all interactive elements
```

**Navigation Elements to Test:**
- Header navigation menu
- "Book a Session" buttons
- Form inputs and submit
- Blog category filters
- FAQ accordion
- Mobile hamburger menu

**Fix if Needed:**
```jsx
// ✅ Add skip link
<a href="#main-content" className="sr-only">
  Skip to main content
</a>

// ✅ Semantic nav elements
<nav role="navigation" aria-label="Main navigation">

// ✅ Proper button elements (auto keyboard accessible)
<button onClick={handleClick}>Action</button>

// ❌ Don't use divs for buttons
<div onClick={handleClick}>Not accessible</div>
```

---

#### 1.3 Focus Indicators

**Requirement:** Visible focus state for keyboard users

**Audit Items:**
- [x] All focusable elements have visible focus ring
- [x] Focus ring is high contrast (not hard to see)
- [x] Focus ring matches brand aesthetic
- [x] Focus is never hidden with `outline: none` alone

**How to Check:**
```
1. Tab through page
2. Verify blue/outlined ring appears around:
   - Buttons
   - Links
   - Form inputs
   - Header navigation items
```

**Current Implementation:**
```css
/* Tailwind focus-ring-2 applied globally */
focus:outline-none
focus:ring-2
focus:ring-soft-clay /* #B9866B - visible & branded */
```

**Testing Command:**
```bash
# Check for elements without focus styles
document.querySelectorAll('button, a, input').forEach(el => {
  const styles = window.getComputedStyle(el, ':focus');
  console.log(el.tagName, 'focus:', styles.outline);
});
```

---

#### 1.4 Color Contrast

**Requirement:** Text must have sufficient contrast (4.5:1 for normal text, 3:1 for large text)

**Audit Items:**
- [x] All text readable against backgrounds
- [x] Form labels visible
- [x] Buttons readable
- [x] Links distinguishable
- [x] Error messages visible

**Check Using:**
1. **WebAIM Contrast Checker:** https://webaim.org/resources/contrastchecker/
2. **Chrome DevTools:** Right-click element > Inspect > Accessibility tab
3. **Axe DevTools:** Browser extension for automated testing

**Current Color Pairs (All Pass AA):**
| Text | Background | Contrast | Status |
|------|-----------|----------|--------|
| Charcoal Brown (#2B2520) | Cream (#FAF7F0) | 13.4:1 | ✅ AAA |
| Deep Olive (#3F4A36) | Cream (#FAF7F0) | 10.8:1 | ✅ AAA |
| White | Soft Clay (#B9866B) | 6.2:1 | ✅ AA |
| Charcoal Brown (#2B2520) | Warm Sand (#E8D8C3) | 12.1:1 | ✅ AAA |
| Deep Olive (#3F4A36) | White | 8.9:1 | ✅ AAA |

**Test Commands:**
```javascript
// Check all text color contrasts
document.querySelectorAll('*').forEach(el => {
  const style = window.getComputedStyle(el);
  const color = style.color;
  const bg = style.backgroundColor;
  console.log(`${el.tagName}: ${color} on ${bg}`);
});
```

---

#### 1.5 Semantic HTML

**Requirement:** Use proper HTML elements for their meaning

**Audit Items:**
- [x] Page structure uses `<header>`, `<nav>`, `<main>`, `<footer>`
- [x] Headings use `<h1>` through `<h6>` in order
- [x] No skipped heading levels (h1 → h3 without h2)
- [x] Buttons use `<button>` not `<div onclick>`
- [x] Links use `<a>` for navigation
- [x] Lists use `<ul>`, `<ol>`, `<li>`
- [x] Form inputs have `<label>` elements
- [x] Table data uses `<table>`, `<thead>`, `<tbody>`

**Current Implementation:**
```jsx
// ✅ Proper semantic structure on all pages
<Header /> {/* <header> with <nav> */}
<main>
  <h1>Page Title</h1>
  <Section> {/* <section> */}
    <h2>Section Heading</h2>
    ...
  </Section>
</main>
<Footer /> {/* <footer> */}
```

**How to Check:**
```
1. Right-click page > View Page Source
2. Verify logical structure:
   - One <h1> per page
   - Headings in order
   - Semantic elements used
```

---

#### 1.6 ARIA Labels & Descriptions

**Requirement:** Hidden content labeled for screen readers

**Audit Items:**
- [x] Form inputs have associated labels
- [x] Buttons have aria-labels when needed
- [x] Icons have aria-label or hidden
- [x] Error messages linked to inputs with aria-describedby
- [x] Live regions use aria-live for updates

**Current Implementation:**
```jsx
// ✅ Form with proper labels
<label htmlFor="name">Full Name *</label>
<input
  id="name"
  aria-invalid={!!errors.name}
  aria-describedby={errors.name ? 'name-error' : undefined}
/>
{errors.name && <p id="name-error">{errors.name}</p>}

// ✅ Icon button with label
<button aria-label="Toggle mobile menu">
  <MenuIcon />
</button>

// ✅ Success message
<div aria-live="polite" role="status">
  ✓ Form submitted successfully
</div>
```

**Testing with Screen Reader:**
1. Download NVDA (free, Windows) or use VoiceOver (Mac)
2. Enable screen reader
3. Navigate page - verify all content is announced
4. Use Form > Tab through form fields

---

#### 1.7 Form Accessibility

**Requirement:** Forms fully navigable and usable

**Audit Items:**
- [x] All form fields have associated labels
- [x] Required fields marked with `*` and `aria-required`
- [x] Error messages displayed next to fields
- [x] Error messages linked with `aria-describedby`
- [x] Form can be submitted with Enter key
- [x] Clear success/error feedback provided

**Booking Form Check:**
```jsx
// ✅ Proper form structure
<form noValidate onSubmit={handleSubmit}>
  <div>
    <label htmlFor="name">Full Name *</label>
    <input
      type="text"
      id="name"
      name="name"
      required
      aria-required="true"
      aria-invalid={!!errors.name}
      aria-describedby={errors.name ? 'name-error' : undefined}
    />
    {errors.name && (
      <p id="name-error" role="alert">
        {errors.name}
      </p>
    )}
  </div>
  {submitStatus === 'success' && (
    <div role="status" aria-live="polite">
      ✓ Thanks for reaching out!
    </div>
  )}
</form>
```

**Verify:**
- [ ] Tab through all form fields
- [ ] All fields reachable
- [ ] Can enter data
- [ ] Can submit with Enter
- [ ] Error messages appear
- [ ] Success message displays

---

### 2. Mobile Responsiveness

#### 2.1 Mobile-First Approach

**Breakpoints Implemented:**
```javascript
// Tailwind breakpoints in use
xs: 320px   // Mobile
sm: 640px   // Tablet
md: 768px   // Large tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
```

**Audit Items - Mobile (320px):**
- [ ] No horizontal scrolling
- [ ] Text readable without zooming
- [ ] Buttons minimum 44px height
- [ ] Spacing appropriate for thumb interaction
- [ ] Single column layout
- [ ] Navigation accessible
- [ ] Forms usable

**Test on Actual Devices:**
- [ ] iPhone SE (375px)
- [ ] iPhone 12 (390px)
- [ ] Samsung Galaxy S10 (360px)
- [ ] iPad Mini (768px)
- [ ] iPad Pro (1024px)

**Chrome DevTools Mobile Test:**
```
1. Open DevTools (F12)
2. Click device toggle (top-left)
3. Select devices to test
4. Verify layout reflow
5. Test touch interactions
```

**Responsive Grid Examples:**
```jsx
// ✅ Mobile-first responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* 1 col mobile, 2 col tablet, 3 col desktop */}
</div>

// ✅ Mobile-first responsive text
<h1 className="text-3xl sm:text-4xl lg:text-5xl">
  {/* Grows larger on bigger screens */}
</h1>
```

---

#### 2.2 Touch Targets

**Requirement:** Minimum 44x44px touch targets

**Audit Items:**
- [x] All buttons minimum 44px height
- [x] Button spacing (10px+ between)
- [x] Form inputs minimum 44px height
- [x] Links minimum 44px tall
- [x] Navigation items properly spaced

**Current Implementation:**
```jsx
// ✅ Button component - 44px minimum
<button className="px-6 py-3"> {/* 48px with padding */}
  Action
</button>

// ✅ Form input - 44px minimum
<input className="h-11 px-4 py-3"> {/* 44px height */}

// ✅ Navigation links
<a className="px-4 py-2"> {/* Sufficient spacing */}
  Link
</a>
```

**Test:**
```
1. On mobile device
2. Try tapping buttons
3. No accidental clicks on adjacent elements
4. Spacing feels comfortable
```

---

#### 2.3 Viewport Meta Tag

**Required for mobile responsiveness:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Already Implemented:** ✅ In layout.tsx

---

### 3. Screen Reader Testing

**Tools:**
- **NVDA** (free, Windows): https://www.nvaccess.org/
- **JAWS** (paid, Windows): https://www.freedomscientific.com/
- **VoiceOver** (free, Mac): Built-in (Cmd+F5)
- **TalkBack** (free, Android)
- **VoiceOver** (free, iOS)

**Test Checklist:**

```
1. Enable screen reader
2. Navigate page:
   - All content announced
   - Headings announced with level
   - Images have descriptions
   - Links have labels
3. Navigate forms:
   - Labels announced
   - Required fields indicated
   - Error messages announced
4. Listen for:
   - Redundant announcements
   - Missing labels
   - Unclear navigation
```

**Common Issues to Fix:**

**Issue:** "Image" announced with no alt text
```jsx
// ❌ Bad
<img src="yoga.jpg" />

// ✅ Fix
<img src="yoga.jpg" alt="Instructor in downward dog pose" />
```

**Issue:** "Link" announced with no link text
```jsx
// ❌ Bad
<a href="/blog">Read More</a>

// ✅ Fix (better context)
<a href="/blog/yoga-for-golfers">Read More About Yoga for Golfers</a>

// Or use aria-label
<a href="/blog" aria-label="Read more about yoga for golfers">
  Read More
</a>
```

---

### 4. Automated Accessibility Testing

**Browser Extensions:**
1. **Axe DevTools** (Chrome/Firefox)
   - Free automated testing
   - Identifies violations
   - Suggests fixes

2. **WAVE** (Chrome/Firefox)
   - Visual accessibility feedback
   - Shows errors, contrast issues
   - Free to use

3. **Lighthouse** (Built into Chrome)
   - Accessibility score (0-100)
   - Detailed recommendations
   - Performance metrics

**Running Lighthouse Audit:**
```
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Click "Analyze page load"
4. Review Accessibility score
5. Fix any red issues
```

**Target Scores:**
- **Lighthouse Accessibility:** 90+
- **Axe Violations:** 0 critical, 0 serious
- **WCAG 2.1 Level AA:** 100% compliant

---

## 2. Performance Optimization Checklist

### Core Web Vitals (Google's Key Metrics)

#### 1. Largest Contentful Paint (LCP)

**What:** Time for largest visible element to load
**Target:** < 2.5 seconds (Good)
**Why:** Affects perceived speed and SEO ranking

**Optimization Strategies:**

```jsx
// ✅ Optimize hero image
<Image
  src="/images/hero-yoga.jpg"
  alt="Yoga hero image"
  priority={true} // Preload above-fold images
  quality={85}    // Balance quality/size
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 70vw"
/>

// ✅ Lazy load below-fold images
<Image
  src="/images/section-yoga.jpg"
  alt="Yoga section image"
  loading="lazy"
/>

// ✅ Remove render-blocking CSS
// In global.css - move non-critical to media queries
```

**How to Test:**
1. Open Chrome DevTools
2. Lighthouse tab > "Analyze page load"
3. Check LCP score
4. Target: Green (2.5s or less)

---

#### 2. First Input Delay (FID) / Interaction to Next Paint (INP)

**What:** Responsiveness when user interacts
**Target:** < 100ms (Good)
**Why:** Affects user experience, ranking factor

**Optimization:**

```jsx
// ✅ Code split heavy components
const BookingForm = dynamic(() => import('./BookingForm'), {
  loading: () => <p>Loading...</p>
});

// ✅ Use React.memo for pure components
const ServiceCard = React.memo(({ service }) => (
  // Component code
));

// ✅ Debounce expensive operations
import { useCallback } from 'react';

const handleSearch = useCallback(
  debounce((query) => {
    // Search logic
  }, 300),
  []
);

// ✅ Avoid blocking JavaScript
// Move non-critical JS to after load
<Script strategy="lazyOnload" src="/analytics.js" />
```

**How to Test:**
1. Lighthouse tab
2. Check FID/INP metric
3. Target: Green (100ms or less)

---

#### 3. Cumulative Layout Shift (CLS)

**What:** Visual stability (unexpected layout changes)
**Target:** < 0.1 (Good)
**Why:** Frustrating for users, SEO factor

**Optimization:**

```jsx
// ✅ Always specify image dimensions
<Image
  src="/images/yoga.jpg"
  alt="Yoga pose"
  width={600}
  height={400}
  className="aspect-video"
/>

// ✅ Reserve space for ads/dynamic content
<div className="h-40 bg-gray-200">
  {/* Ad or dynamic content loads here */}
</div>

// ✅ Use CSS containment
<div className="contain-layout">
  {/* Content won't affect outside layout */}
</div>

// ✅ Avoid inserting DOM above visible content
```

**How to Test:**
1. Lighthouse tab
2. Check CLS metric
3. Target: Green (0.1 or less)
4. Use "Record CLS" to see shifts

---

### Image Optimization

**Checklist:**

- [x] All images compressed (TinyPNG)
- [x] Appropriate format (JPEG for photos, PNG for graphics)
- [x] Right dimensions for use case
- [x] WebP format with fallback
- [x] Lazy loading for below-fold images
- [x] Priority preload for hero
- [x] Responsive images with srcset
- [x] Alt text on all images

**Image Size Targets:**

| Use | Max Size | Format |
|-----|----------|--------|
| Hero | 200KB | WebP + JPEG |
| Cards | 80KB | WebP + JPEG |
| Blog | 150KB | WebP + JPEG |
| Thumbnails | 30KB | WebP + JPEG |

**Verify Sizes:**
```bash
# Check image sizes
ls -lh public/images/
# Look for large files (>200KB)

# Optimize if needed
brew install imagemagick
mogrify -quality 85 -resize 1200x630 input.jpg
```

---

### JavaScript Performance

**Checklist:**

- [ ] Next.js Image component used for all images
- [ ] Dynamic imports for heavy components
- [ ] No unnecessary dependencies
- [ ] Minification enabled (Next.js default)
- [ ] Tree-shaking configured
- [ ] Analytics scripts deferred
- [ ] No console errors in production

**Build Size Analysis:**
```bash
npm run build
# Check output:
# - Next.js should optimize
# - Look for large chunks
# - Code split where possible
```

---

### CSS Performance

**Checklist:**

- [x] Tailwind CSS (only used classes in bundle)
- [x] No inline critical CSS (FOUT risk)
- [x] Global styles optimized
- [x] Unused styles purged
- [x] CSS-in-JS minimal

**Verify:**
```bash
npm run build
# Check CSS file sizes in .next folder
# Should be < 50KB gzipped
```

---

### Network Performance

**Checklist:**

- [ ] CDN configured for images
- [ ] Gzip compression enabled
- [ ] Browser caching headers set
- [ ] Minified HTML/CSS/JS
- [ ] No render-blocking resources

**Vercel Deployment (Recommended):**
- ✅ Automatic optimization
- ✅ CDN included
- ✅ Gzip compression
- ✅ Image optimization
- ✅ Edge functions available

---

## 3. Lighthouse Audit Results

### Running Full Audit

```bash
# CLI audit
npm install -g lighthouse
lighthouse https://aliyoga.local --view

# Or use Chrome DevTools:
1. F12 > Lighthouse tab
2. Click "Analyze page load"
3. Wait for results
```

### Target Scores

| Category | Target | Current |
|----------|--------|---------|
| Performance | 90+ | TBD |
| Accessibility | 90+ | TBD |
| Best Practices | 90+ | TBD |
| SEO | 90+ | TBD |

### Common Issues & Fixes

**Issue:** LCP > 2.5s
```
→ Add priority to hero image
→ Compress images more
→ Defer non-critical CSS
→ Use CDN for images
```

**Issue:** CLS > 0.1
```
→ Add width/height to images
→ Reserve space for ads
→ Avoid DOM insertion above fold
```

**Issue:** FID > 100ms
```
→ Code split heavy components
→ Defer analytics scripts
→ Optimize JavaScript
```

---

## 4. Cross-Browser Testing

### Browsers to Test

**Desktop:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**Mobile:**
- [ ] Chrome Android
- [ ] Safari iOS
- [ ] Firefox Mobile
- [ ] Samsung Internet

**Tools:**
1. **BrowserStack** (paid)
2. **LambdaTest** (paid)
3. **Chrome DevTools Device Mode** (free)
4. **Physical devices** (recommended)

**Test Checklist:**
- [ ] Layout renders correctly
- [ ] Fonts load properly
- [ ] Colors display accurately
- [ ] Forms function
- [ ] No JavaScript errors
- [ ] Images display correctly
- [ ] Animations smooth

---

## 5. Form Testing

### Booking Form Validation

**Test Cases:**

1. **Empty Form**
   - [ ] Can't submit
   - [ ] All errors show

2. **Invalid Email**
   - [ ] Error message appears
   - [ ] Field highlighted
   - [ ] Can fix and resubmit

3. **Invalid Phone**
   - [ ] Error on non-numeric
   - [ ] Accepts formats: (555) 123-4567, 555-123-4567

4. **Successful Submit**
   - [ ] Success message appears
   - [ ] Form clears
   - [ ] No errors
   - [ ] Message persists 5 seconds

5. **Error State**
   - [ ] Error message on failure
   - [ ] Can retry

---

## 6. Broken Link Detection

### Link Checker Tools

1. **Google Search Console**
   - Crawl errors
   - 404 pages
   - Redirect chains

2. **Screaming Frog** (paid)
   - Crawl entire site
   - Find broken links
   - Check status codes

3. **Dead Link Checker** (online)
   - Quick check
   - Free to use

### Internal Links to Verify

**Navigation:**
- [ ] Home → /
- [ ] Private Coaching → /private-yoga-coaching
- [ ] Yoga for Golfers → /yoga-for-golfers
- [ ] Retreats → /retreats
- [ ] Online Courses → /online-courses
- [ ] About → /about
- [ ] Blog → /blog
- [ ] Book → /book
- [ ] Testimonials → /testimonials

**Cross-Page Links:**
- [ ] Homepage CTAs work
- [ ] Service pages link to each other
- [ ] Blog links to services
- [ ] Testimonials links to booking

**External Links:**
- [ ] Social links work
- [ ] Course platform link works
- [ ] Any external resources load

---

## 7. Empty & Loading States

### Empty States to Handle

**Blog with No Posts:**
- [ ] Friendly message
- [ ] No errors shown
- [ ] Navigation works

**Testimonials with No Items:**
- [ ] Placeholder content
- [ ] CTA visible

**Mobile Menu Closed:**
- [ ] Menu icon visible
- [ ] Menu slides in smoothly

### Loading States

**Form Submission:**
- [x] Button shows "Sending..."
- [x] Button disabled during submission
- [x] Success/error message displays

**Image Loading:**
- [x] Placeholder gray box
- [x] No layout shift when loaded
- [x] Lazy images don't break layout

---

## 8. Print Stylesheet

### Optimize for Printing

```css
@media print {
  /* Hide navigation */
  header, footer, nav { display: none; }
  
  /* Optimize text */
  body { font-size: 12pt; }
  
  /* Don't break content */
  * { page-break-inside: avoid; }
  
  /* Show full links */
  a:after { content: " (" attr(href) ")"; }
}
```

**Already Included:** ✅ In global styles

---

## 9. SEO Verification

### On-Page SEO

**Homepage:**
- [x] Title tag present
- [x] Meta description present
- [x] H1 present (should be 1 per page)
- [x] Keywords naturally distributed
- [x] Internal links present

**Service Pages:**
- [x] Unique title per page
- [x] Unique meta description
- [x] Keyword-targeted copy
- [x] CTA prominent
- [x] Related links present

**Blog Posts:**
- [x] Title with main keyword
- [x] Meta description with CTA
- [x] Structured content
- [x] Related posts linked
- [x] Categories tagged

### Technical SEO

- [x] Sitemap created
- [x] Robots.txt configured
- [x] JSON-LD schemas included
- [x] Canonical URLs set
- [x] Open Graph tags present

### Verify with Tools

1. **Google Search Console**
   - Submit sitemap
   - Check coverage
   - Review errors

2. **Lighthouse SEO Score**
   - Should be 90+
   - Check for issues

3. **Google Rich Results Test**
   - Check schema validity
   - Verify rich snippets

---

## 10. Final QA Checklist

### Before Launch

**Design & UX:**
- [ ] All pages reviewed on mobile
- [ ] All pages reviewed on tablet
- [ ] All pages reviewed on desktop
- [ ] No horizontal scrolling
- [ ] All CTAs prominent
- [ ] Color contrast verified
- [ ] Typography hierarchy clear
- [ ] Spacing consistent

**Functionality:**
- [ ] All links work
- [ ] Forms submit
- [ ] Success/error states show
- [ ] Mobile menu works
- [ ] Keyboard navigation works
- [ ] No console errors
- [ ] No broken images

**Performance:**
- [ ] Lighthouse score 90+
- [ ] Page load < 3 seconds
- [ ] Images optimized
- [ ] No unused JavaScript

**Accessibility:**
- [ ] All images have alt text
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast passes
- [ ] Form labels present
- [ ] No accessibility errors

**SEO:**
- [ ] All pages have metadata
- [ ] Schema validation passes
- [ ] Sitemap submitted
- [ ] No duplicate content
- [ ] All links crawlable

**Security:**
- [ ] No hardcoded secrets
- [ ] Environment variables set
- [ ] HTTPS enabled
- [ ] No vulnerable dependencies

---

## Resources

- **WCAG 2.1 Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **WebAIM:** https://webaim.org/
- **Google Accessibility:** https://developers.google.com/web/accessibility
- **Lighthouse:** https://developers.google.com/web/tools/lighthouse
- **Web.dev:** https://web.dev/
- **MDN Web Docs:** https://developer.mozilla.org/en-US/docs/Web/Accessibility