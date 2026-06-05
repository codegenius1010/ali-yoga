# Visual Polish & Design Consistency Checklist

## Overview

This comprehensive checklist ensures visual consistency, brand adherence, and polished UX across all pages before launch.

---

## 1. Design System Consistency

### 1.1 Color Palette Verification

**Brand Colors in Use:**
```javascript
const colors = {
  cream: '#FAF7F0',         // Backgrounds
  warmSand: '#E8D8C3',      // Secondary backgrounds
  deepOlive: '#3F4A36',     // Body text
  softClay: '#B9866B',      // Accents/CTAs
  charcoalBrown: '#2B2520', // Headings
  sage: '#A8B8A0',          // Subtle accents
  goldenSun: '#D8A84E',     // Highlights
};
```

**Audit Checklist:**
- [x] Headings use `charcoal-brown`
- [x] Body text uses `deep-olive`
- [x] Primary CTA buttons use `soft-clay`
- [x] Section backgrounds alternate cream/white
- [x] Accent elements use `soft-clay` or `golden-sun`
- [x] No unauthorized colors introduced
- [x] Color used consistently across pages

**Verification Steps:**
1. Export to Figma/Adobe XD
2. Compare RGB values to brand palette
3. Screenshot pages and verify colors match
4. Check on different monitors (IPS, TN)
5. Test on mobile devices

---

### 1.2 Typography System

**Font Stack:**
```css
/* Headings - Elegant serif */
font-family: 'Merriweather', Georgia, serif;
font-weight: 700; /* Bold for prominence */

/* Body - Clean sans-serif */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
font-weight: 400; /* Regular */
```

**Type Hierarchy:**

| Level | Element | Size Mobile | Size Desktop | Weight | Usage |
|-------|---------|-------------|--------------|--------|-------|
| H1 | `<h1>` | 32px | 48-60px | 700 | Page titles |
| H2 | `<h2>` | 24px | 36-42px | 700 | Section titles |
| H3 | `<h3>` | 20px | 28-32px | 700 | Subsection titles |
| H4 | `<h4>` | 18px | 24px | 600 | Small titles |
| H5 | `<h5>` | 16px | 20px | 600 | Card titles |
| Body | `<p>` | 16px | 16-18px | 400 | Content |
| Small | `<small>` | 14px | 14px | 400 | Captions |
| CTA | Button | 16px | 16px | 600 | Calls to action |

**Audit Checklist:**
- [x] All headings use Merriweather
- [x] All body text uses Inter
- [x] Heading hierarchy correct (no skipped levels)
- [x] Single `<h1>` per page
- [x] Font sizes responsive
- [x] Font weights appropriate
- [x] Line height adequate (1.5-1.7 for body)
- [x] Letter spacing appropriate

**How to Check:**
```
1. Inspect element
2. Check Computed styles
3. Verify font-family and size
4. Compare to design system
```

---

### 1.3 Spacing System

**Base Unit:** 4px (Tailwind spacing scale)

**Common Spacing Values:**
```
4px (1 unit) - tight spacing
8px (2 units) - minimal spacing
12px (3 units) - small
16px (4 units) - standard
20px (5 units) - medium
24px (6 units) - comfortable
28px (7 units) - large
32px (8 units) - extra large
```

**Usage:**
- `p-4` = 16px padding
- `m-6` = 24px margin
- `gap-4` = 16px gap in grid
- `mb-12` = 48px bottom margin

**Audit Checklist:**
- [x] Spacing uses Tailwind scale (no odd values)
- [x] Margins between sections: 24-48px (md-2xl)
- [x] Padding inside containers: 16-24px (p-4 to p-6)
- [x] Gap in grids: 16-24px (gap-4 to gap-6)
- [x] Consistent spacing on mobile and desktop
- [x] No manual pixel values in CSS
- [x] Breathing room around text
- [x] Components properly spaced

**Common Spacing Mistakes:**
```jsx
// ❌ Wrong - manual pixel
<div style={{ paddingTop: '18px' }}>

// ✅ Correct - Tailwind scale
<div className="pt-4"> {/* 16px */}

// ❌ Inconsistent spacing
<div className="mb-3"> {/* Should be mb-4 or mb-6 */}

// ✅ Consistent
<div className="mb-6">
```

---

### 1.4 Border Radius

**Tailwind Radius Scale:**
```
rounded-none = 0px
rounded-sm = 2px (inputs only)
rounded (rounded-md) = 6px (default)
rounded-lg = 8px (cards, containers)
rounded-xl = 12px (larger elements)
rounded-2xl = 16px (hero containers)
rounded-full = 9999px (circles, avatars)
```

**Usage Guide:**
- Cards: `rounded-lg` (8px)
- Buttons: `rounded-lg` (8px)
- Form inputs: `rounded-lg` (8px)
- Large containers: `rounded-2xl` (16px)
- Avatars: `rounded-full` (circle)

**Audit Checklist:**
- [x] All cards have `rounded-lg`
- [x] All buttons have `rounded-lg`
- [x] All inputs have `rounded-lg`
- [x] Consistent rounding across site
- [x] No sharp corners on interactive elements
- [x] Avatars are circles (`rounded-full`)

---

### 1.5 Shadow System

**Tailwind Shadow Scale:**
```
shadow-none = no shadow
shadow-sm = subtle (hover states)
shadow = medium (default cards)
shadow-md = noticeable
shadow-lg = prominent
shadow-xl = deep
shadow-2xl = very deep
```

**Usage:**
- Card default: `shadow` (medium)
- Card hover: `shadow-lg` (larger shadow)
- Sticky header: `shadow` (subtle)
- Large modals: `shadow-2xl`

**Audit Checklist:**
- [x] Cards have `shadow` by default
- [x] Cards get `shadow-lg` on hover
- [x] Consistent shadow depth
- [x] Shadows not overdone
- [x] Shadows match brand aesthetic (subtle)

**Example:**
```jsx
// ✅ Card with shadow
<div className="shadow hover:shadow-lg transition-shadow">
  Card content
</div>
```

---

## 2. Component Consistency

### 2.1 Button Styles

**Button Variants:**

**Primary Button** (`btn-primary`)
```
Background: Soft Clay (#B9866B)
Text: White
Hover: Darker clay
State: Disabled (60% opacity)
```

**Secondary Button** (`btn-secondary`)
```
Background: Warm Sand (#E8D8C3)
Text: Charcoal Brown
Hover: Darker sand
State: Disabled (60% opacity)
```

**Audit Checklist:**
- [ ] All CTAs use `btn-primary`
- [ ] Secondary actions use `btn-secondary`
- [ ] Buttons have consistent sizing
- [ ] Hover states clear and visible
- [ ] Disabled state obvious
- [ ] Buttons have smooth transitions
- [ ] Mobile: buttons full-width when needed
- [ ] Desktop: buttons don't stretch excessively

**Button Sizing:**
- Small: `px-4 py-2` (compact forms)
- Regular: `px-6 py-3` (standard CTAs)
- Large: `px-8 py-4` (hero CTAs)

---

### 2.2 Card Components

**Card Structure:**
```jsx
<div className="bg-white rounded-lg shadow p-6">
  <img src="..." alt="..." />
  <h3 className="text-xl font-bold text-charcoal-brown">Title</h3>
  <p className="text-deep-olive">Description</p>
  <button className="btn btn-primary">CTA</button>
</div>
```

**Card Variants:**
- Service Card: Image + title + description + CTA
- Blog Card: Image + title + excerpt + date/category + CTA
- Testimonial Card: Quote + name + title + photo
- Course Card: Image + title + price + rating + CTA

**Audit Checklist:**
- [ ] All cards same height (or equal columns)
- [ ] Cards have consistent padding
- [ ] Images same aspect ratio
- [ ] Titles same size and weight
- [ ] Descriptions readable
- [ ] CTAs positioned consistently
- [ ] Hover effects smooth

---

### 2.3 Form Elements

**Form Field Structure:**
```jsx
<div>
  <label htmlFor="field">Label *</label>
  <input
    id="field"
    type="text"
    placeholder="Placeholder text"
    className="border-warm-sand rounded-lg p-3 w-full"
  />
  {error && <p className="text-red-600 text-sm">{error}</p>}
</div>
```

**Input Styling:**
- Border: `border border-warm-sand`
- Padding: `p-3` (adequate for touch)
- Rounded: `rounded-lg`
- Focus: `focus:outline-none focus:ring-2 focus:ring-soft-clay`
- Error state: Red border + background

**Audit Checklist:**
- [ ] All labels visible
- [ ] All inputs properly styled
- [ ] Focus ring visible and branded
- [ ] Placeholder text subtle
- [ ] Error messages red and clear
- [ ] Success messages green
- [ ] Consistent field heights
- [ ] Proper spacing between fields

---

### 2.4 Navigation

**Desktop Navigation:**
```
Home | Private Coaching | Yoga for Golfers | Retreats | 
Online Courses | About | Blog | [Book Session CTA]
```

**Mobile Navigation:**
- Hamburger menu icon
- Slides in from left
- Full-width links
- Close button visible
- Keyboard accessible

**Audit Checklist:**
- [ ] Desktop nav horizontal
- [ ] Mobile nav hidden on small screens
- [ ] Mobile nav accessible
- [ ] Links proper color
- [ ] Hover states visible
- [ ] Active page indicator
- [ ] CTA button prominent

---

## 3. Page-Specific Polish

### 3.1 Homepage

**Sections Present:**
- [x] Hero (image + headline + 2 CTAs)
- [x] Trust bar (5 credentials)
- [x] Services (4 cards)
- [x] Golf yoga feature (6 benefits)
- [x] About preview
- [x] Testimonials (3-4 cards)
- [x] Retreat CTA
- [x] Blog preview (3 posts)
- [x] Final CTA

**Visual Hierarchy:**
- [ ] Hero is prominent
- [ ] Services clearly organized
- [ ] Golf yoga stands out
- [ ] About section warm tone
- [ ] Testimonials believable
- [ ] CTAs clear

**Checklist:**
- [ ] Hero image optimized
- [ ] Trust bar readable
- [ ] Service cards equal height
- [ ] Golf section visually distinct
- [ ] Testimonials properly spaced
- [ ] Blog cards consistent
- [ ] No content crowding
- [ ] White space adequate

---

### 3.2 Service Pages

**Consistent Elements:**
- [ ] Hero section identical style
- [ ] Numbered or pillar sections visually consistent
- [ ] Pricing cards (if applicable) aligned
- [ ] FAQ accordion styled consistently
- [ ] Final CTA matches hero CTA
- [ ] Related links prominent

**Visual Polish:**
- [ ] Section backgrounds alternate
- [ ] Headings hierarchy consistent
- [ ] Lists bullet points styled
- [ ] Numbers/pillars styled identically
- [ ] Spacing between sections uniform
- [ ] Card grids responsive

---

### 3.3 Blog Pages

**Blog Index:**
- [ ] Title prominent
- [ ] Featured post highlighted
- [ ] Card grid responsive
- [ ] Cards equal height
- [ ] Read more links styled
- [ ] Categories visible

**Individual Post:**
- [ ] Featured image optimized
- [ ] Heading hierarchy correct
- [ ] Text readable (good line length)
- [ ] Images within content styled
- [ ] Related posts visible
- [ ] Back to blog link accessible

**Typography:**
- [ ] h1 for post title
- [ ] h2 for sections
- [ ] h3 for subsections
- [ ] Proper line height
- [ ] Adequate margins

---

### 3.4 Forms

**Booking Form Polish:**
- [ ] Form sections visually separated
- [ ] Labels clear and associated
- [ ] Inputs proper size
- [ ] Dropdowns styled consistently
- [ ] Required indicators clear
- [ ] Error messages helpful
- [ ] Success message prominent
- [ ] Button full-width or appropriate size

**Form States:**
- [ ] Idle state (empty)
- [ ] Filled state
- [ ] Error state (red, message)
- [ ] Submitting state (button text change)
- [ ] Success state (green, message)
- [ ] Error state (error message)

---

## 4. Responsive Design Verification

### 4.1 Mobile (320px)

**Checklist:**
- [ ] Single column layouts
- [ ] Touch targets minimum 44px
- [ ] No horizontal scrolling
- [ ] Text readable without zoom
- [ ] Images responsive
- [ ] Navigation accessible
- [ ] Forms usable
- [ ] Buttons full-width or appropriately sized

**Common Mobile Issues:**
```jsx
// ❌ Too narrow on mobile
<div className="w-96">

// ✅ Responsive width
<div className="w-full max-w-96">

// ❌ Small touch targets
<button className="p-1">

// ✅ Mobile-friendly
<button className="p-3 sm:p-2">

// ❌ Text too small
<p className="text-sm">

// ✅ Readable
<p className="text-base">
```

### 4.2 Tablet (768px)

**Checklist:**
- [ ] 2-column layouts where appropriate
- [ ] Cards properly spaced
- [ ] Navigation still accessible
- [ ] Forms organized
- [ ] Adequate spacing

### 4.3 Desktop (1024px+)

**Checklist:**
- [ ] 3-4 column grids
- [ ] Full horizontal navigation
- [ ] Optimal content width
- [ ] Adequate white space
- [ ] Large images display well

### 4.4 Responsive Grid Verification

**All Grids Should Use Pattern:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* 1 col mobile, 2 col tablet, 3 col desktop */}
</div>
```

**Verify Each Page:**
- [ ] Homepage service cards
- [ ] Blog posts grid
- [ ] Course cards
- [ ] Testimonial cards
- [ ] FAQ accordion
- [ ] Gallery images

---

## 5. Animation & Interaction Polish

### 5.1 Hover States

**Buttons:**
- [x] Background color change
- [x] Shadow increase
- [x] Subtle scale (1.02x max)
- [x] Smooth transition (150-200ms)

**Links:**
- [x] Color change or underline
- [x] No sudden jump
- [x] Smooth transition

**Cards:**
- [x] Shadow increase on hover
- [x] Slight scale or lift effect
- [x] Smooth transition

**Audit Checklist:**
- [ ] All interactive elements have hover state
- [ ] Hover effects are subtle
- [ ] Transitions are smooth (not instant)
- [ ] No excessive animations

**CSS Transitions:**
```css
/* Standard transition */
transition: all 0.2s ease;

/* Or specific properties */
transition: background-color 0.2s, box-shadow 0.2s;
```

---

### 5.2 Loading States

**Form Submission:**
- [x] Button shows "Sending..."
- [x] Button disabled
- [x] Spinner or loading indicator (optional)

**Page Transitions:**
- [ ] Smooth fade-in of content
- [ ] No jarring layout shifts
- [ ] Loading skeleton (optional)

---

### 5.3 Transitions to Avoid

❌ **Too Flashy:**
- Bounce animations
- Flip animations
- Scale animations > 1.05x
- Duration > 400ms

✅ **Subtle & Professional:**
- Fade in/out (opacity)
- Smooth color transitions
- Slight shadow changes
- Duration 200-300ms

---

## 6. Image Quality & Consistency

### 6.1 Image Specifications

**Hero Images:**
- [ ] 1200x630px (16:9 aspect ratio)
- [ ] Compressed to 100-150KB
- [ ] Optimized for web
- [ ] Alt text descriptive

**Card Images:**
- [ ] 600x400px (3:2 aspect ratio)
- [ ] Consistent sizing
- [ ] 60-80KB file size
- [ ] Alt text present

**Testimonial Images:**
- [ ] 300x400px (3:4 aspect ratio)
- [ ] Consistent style
- [ ] 30-40KB file size
- [ ] Headshots recommended

**Blog Images:**
- [ ] 1200x800px (3:2 aspect ratio)
- [ ] In-content images responsive
- [ ] 100-150KB file size
- [ ] Alt text descriptive

### 6.2 Image Consistency

**Audit Checklist:**
- [ ] All hero images same aspect ratio
- [ ] All card images same size
- [ ] Photo styles consistent
- [ ] Lighting consistent
- [ ] Color grading consistent
- [ ] No placeholder images mixed with real photos
- [ ] Image borders/overlays consistent

---

## 7. Typography & Readability

### 7.1 Line Length

**Optimal:** 50-75 characters per line

**Audit:**
```
At desktop width:
- Body text ~65 characters ✅
- Use max-w-2xl container ✅
- Line height 1.5-1.6 ✅
```

**Implementation:**
```jsx
<article className="max-w-2xl mx-auto">
  <p className="leading-relaxed">
    {/* Line length ~65 chars at 16px */}
  </p>
</article>
```

### 7.2 Line Height

**Recommended Values:**
- Headings: 1.2-1.3
- Body: 1.5-1.7
- Large text: 1.4-1.5

**Current Implementation:**
```css
/* Body text */
line-height: 1.6; ✅

/* Headings */
line-height: 1.3; ✅
```

### 7.3 Letter Spacing

**Guidelines:**
- Body text: Default (0)
- Headings: -0.02em (tight)
- Uppercase: 0.05em-0.1em (loose)

---

## 8. CTA Button Clarity

### Primary CTAs

**Should Be:**
- Soft Clay background color
- White text
- Prominent positioning
- Clear copy (action verb)

**Good CTA Copy:**
- "Book a Private Session"
- "Start Golf Yoga Coaching"
- "Explore Yoga for Golfers"
- "Join Retreat Waitlist"

**Poor CTA Copy:**
- "Click Here"
- "Submit"
- "Go"
- "Learn More" (too vague)

**Audit:**
- [ ] Primary CTA on every page
- [ ] CTA copy action-oriented
- [ ] Contrast sufficient
- [ ] Sized appropriately
- [ ] Mobile: full-width or 100% clickable

---

## 9. Error & Success Messages

### Visual Hierarchy

**Error Messages:**
- Background: Light red (#fee)
- Border: Red (#f00 or #dc2626)
- Text: Dark red (#991b1b)
- Icon: ❌ or ⚠️

**Success Messages:**
- Background: Light green (#dcfce7)
- Border: Green (#22c55e)
- Text: Dark green (#166534)
- Icon: ✓ or ✅

**Audit:**
- [ ] Error message red
- [ ] Success message green
- [ ] Clear and readable
- [ ] Action items included
- [ ] Auto-dismiss after 5 seconds (optional)

---

## 10. Final Visual Checklist

### Before Launch

**Color & Branding:**
- [ ] All brand colors used correctly
- [ ] No unauthorized colors
- [ ] Consistent throughout
- [ ] Accessible contrast

**Typography:**
- [ ] Serif font for headings
- [ ] Sans-serif for body
- [ ] Hierarchy clear
- [ ] Readable font sizes
- [ ] Proper line heights

**Spacing & Layout:**
- [ ] Consistent margin/padding
- [ ] Adequate white space
- [ ] Proper alignment
- [ ] Responsive on all devices
- [ ] No crowding

**Components:**
- [ ] Buttons consistent
- [ ] Cards consistent
- [ ] Forms polished
- [ ] Navigation clean
- [ ] Modals (if any) styled

**Images:**
- [ ] High quality
- [ ] Consistent style
- [ ] Optimized size
- [ ] Alt text present
- [ ] No broken images

**Interactions:**
- [ ] Hover effects present
- [ ] Focus states visible
- [ ] Transitions smooth
- [ ] No janky animations
- [ ] Loading states clear

**Cross-Device:**
- [ ] Mobile (320px) perfect
- [ ] Tablet (768px) perfect
- [ ] Desktop (1024px) perfect
- [ ] No horizontal scroll
- [ ] Touch targets adequate

**Performance:**
- [ ] Fast page load
- [ ] Images optimized
- [ ] No layout shifts
- [ ] Responsive feels smooth
- [ ] No lag on interactions

---

## Design System Documentation

### Component Guide

**Reference:** `/docs/COMPONENT-GUIDE.md`

Contains:
- Visual examples of all components
- Usage guidelines
- Code snippets
- Do's and don'ts

### Token System

**Reference:** `/styles/tokens.ts`

Defines:
- Color palette
- Typography scale
- Spacing scale
- Shadows
- Border radius
- Z-index levels

### Tailwind Configuration

**Reference:** `/tailwind.config.js`

Contains:
- Custom colors
- Font families
- Spacing scale
- Dark mode (if enabled)
- Plugins

---

## Tools & Resources

- **Figma:** https://figma.com (design collaboration)
- **Adobe XD:** https://www.adobe.com/products/xd/
- **Storybook:** https://storybook.js.org (component library)
- **Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Responsively App:** https://responsively.app/ (device testing)
- **ColorHunt:** https://colorhunt.co/ (color inspiration)
- **Font Pairing:** https://www.typewolf.com/ (typography inspiration)