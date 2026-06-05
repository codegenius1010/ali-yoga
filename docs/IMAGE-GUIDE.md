# Image Optimization & Alt Text Guide

## Overview

This guide provides comprehensive instructions for image handling, optimization, and alt text implementation across the Ali Yoga website.

---

## 1. Image Alt Text Strategy

### Purpose of Alt Text

1. **Accessibility:** Screen readers read alt text to visually impaired users
2. **SEO:** Search engines use alt text for image search and context
3. **UX:** Displays when image fails to load
4. **Context:** Helps search engines understand page content

### Alt Text Best Practices

#### Format Guidelines

**Length:**
- Descriptive but concise
- 100-125 characters ideal
- Maximum 150 characters
- Avoid exceeding limit

**Content:**
- Describe what the image shows
- Include relevant keywords naturally
- Avoid keyword stuffing
- Don't start with "image of" or "photo of"
- Don't repeat the page title

#### By Image Type

### Hero Images

**Format:** `[Topic] - [Key Benefit/Visual]`

**Examples:**
```
✅ "Yoga instructor in downward dog pose during private coaching session"
✅ "Woman performing yoga stretch in modern bright studio"
❌ "Image of yoga"
❌ "Photo of woman doing yoga pose"
```

**Implementation:**
```jsx
<img
  src="/images/hero-yoga.jpg"
  alt="Yoga instructor in downward dog pose during private coaching session"
  width={1200}
  height={630}
/>
```

### Service Card Images

**Format:** `[Service] - [Benefit] showing [Detail]`

**Examples:**
```
✅ "Private yoga coaching session showing one-on-one instructor guidance"
✅ "Golfer performing yoga pose to improve swing mobility and flexibility"
✅ "Online yoga course instructor demonstrating breathwork technique"
❌ "Yoga image"
❌ "Service card photo"
```

**Implementation:**
```jsx
<img
  src="/images/service-private-coaching.jpg"
  alt="Private yoga coaching session showing one-on-one instructor guidance"
  width={600}
  height={400}
/>
```

### Testimonial Images

**Format:** `[Name] - [Service/Result]`

**Examples:**
```
✅ "Sarah Martinez after private yoga coaching - showing improved flexibility"
✅ "John practicing golf yoga poses at home from online course"
✅ "Retreat participants in meditation pose during summer wellness retreat"
❌ "Testimonial photo"
❌ "Customer picture"
```

**Implementation:**
```jsx
<img
  src="/images/testimonial-sarah.jpg"
  alt="Sarah Martinez after private yoga coaching showing improved flexibility"
  width={300}
  height={400}
/>
```

### Blog Feature Images

**Format:** `[Article Topic] - [Visual/Concept]`

**Examples:**
```
✅ "Golfer practicing downward dog yoga pose for improved swing mechanics"
✅ "Meditation pose outdoors at sunrise showing peaceful yoga practice"
✅ "Yoga instructor demonstrating proper breathing technique"
❌ "Blog image"
❌ "Article photo"
```

**Implementation:**
```jsx
<img
  src="/images/blog/yoga-golfers-benefits.jpg"
  alt="Golfer practicing downward dog yoga pose for improved swing mechanics"
  width={1200}
  height={800}
/>
```

### Retreat Images

**Format:** `[Retreat Type] - [Activity]`

**Examples:**
```
✅ "Yoga retreat participants performing sun salutation on resort terrace"
✅ "Sunrise meditation session at wellness retreat overlooking mountains"
✅ "Group yoga flow during summer retreat at beachside location"
❌ "Retreat photo"
❌ "Vacation image"
```

**Implementation:**
```jsx
<img
  src="/images/retreats/summer-wellness.jpg"
  alt="Yoga retreat participants performing sun salutation on resort terrace"
  width={800}
  height={600}
/>
```

### Course Images

**Format:** `[Course Name] - [Key Concept/Pose]`

**Examples:**
```
✅ "Golf Yoga course - instructor demonstrating hip opener pose for golfers"
✅ "Breathwork and Meditation course showing pranayama technique"
✅ "Complete Yoga course featuring vinyasa flow sequence"
❌ "Course image"
❌ "Training photo"
```

### Decorative Images

**Rule:** Do NOT include alt text for purely decorative images

**Implementation:**
```jsx
<img
  src="/images/decoration.jpg"
  alt=""
  aria-hidden="true"
/>
```

### Images with Text

**Include:** The text content AND description

**Example:**
```
❌ "Graphic"
✅ "Graphic with text 'Improve Your Mobility' showing yoga benefits"
```

---

## 2. Image File Naming

### Naming Convention

**Format:** `[category]-[descriptor]-[size].[extension]`

**Example Breakdown:**
```
yoga-private-coaching-600x400.jpg
├─ yoga: category
├─ private-coaching: descriptor
├─ 600x400: dimensions
└─ jpg: format
```

### Categories

- `yoga`: General yoga content
- `golf`: Golf yoga specific
- `retreat`: Retreat content
- `course`: Course/training content
- `testimonial`: Student/client photos
- `hero`: Hero/banner images
- `icon`: Icons and UI elements
- `blog`: Blog post images
- `ui`: User interface components

### Descriptors

- `flow`: Yoga flow/movement
- `pose`: Specific yoga poses
- `instructor`: Instructor images
- `student`: Student/participant images
- `outdoor`: Outdoor sessions
- `indoor`: Indoor studio sessions
- `group`: Group classes
- `one-on-one`: Private sessions

### Examples

```
✅ yoga-hero-1200x630.jpg
✅ golf-yoga-pose-800x600.jpg
✅ retreat-outdoor-meditation-1200x800.jpg
✅ testimonial-sarah-300x400.jpg
✅ course-breathwork-instructor-600x400.jpg
✅ blog-flexibility-golfers-1200x800.jpg
❌ photo1.jpg
❌ image_001.png
❌ yoga.jpg
```

---

## 3. Image Specifications

### Recommended Sizes

| Use Case | Width | Height | Format | Quality |
|----------|-------|--------|--------|---------|
| Hero (Mobile) | 600 | 400 | JPEG | 75-80% |
| Hero (Desktop) | 1200 | 630 | JPEG | 80-85% |
| Service Cards | 600 | 400 | JPEG | 75-80% |
| Blog Feature | 1200 | 800 | JPEG | 80-85% |
| Testimonials | 300 | 400 | JPEG | 70-75% |
| Retreat Cards | 800 | 600 | JPEG | 75-80% |
| Course Cards | 600 | 400 | JPEG | 75-80% |
| Thumbnails | 300 | 200 | JPEG | 70-75% |
| Instagram (1:1) | 1080 | 1080 | JPEG | 75-80% |
| Pinterest (2:3) | 600 | 900 | JPEG | 75-80% |

### Image Formats

**JPEG (.jpg)**
- Best for: Photos, complex images
- Compression: Lossy (reduces quality)
- Use when: Natural images with many colors
- Recommendation: **Default for photos**

**PNG (.png)**
- Best for: Graphics, screenshots, transparency
- Compression: Lossless (no quality loss)
- Use when: Needs transparency or sharp text
- Recommendation: **For graphics and logos**

**WebP (.webp)**
- Best for: Modern browsers, smaller file sizes
- Compression: Excellent (30% smaller than JPEG)
- Use when: Supporting modern browsers
- Recommendation: **Primary format with JPEG fallback**

**SVG (.svg)**
- Best for: Logos, icons, illustrations
- Compression: Vector (scalable)
- Use when: Simple graphics
- Recommendation: **For icons and logos**

---

## 4. Image Optimization

### Before Upload

**1. Resize to Target Dimensions**
```bash
# Using ImageMagick
convert input.jpg -resize 1200x630 output.jpg

# Using FFmpeg
ffmpeg -i input.jpg -vf scale=1200:630 output.jpg
```

**2. Compress & Optimize**

**Online Tools:**
- TinyPNG: https://tinypng.com (PNG/JPEG)
- TinyJPG: https://tinyjpg.com (JPEG)
- Squoosh: https://squoosh.app (All formats)
- ImageOptim: https://imageoptim.com (Mac)

**Target Sizes:**
- Hero: 50-150 KB
- Service Cards: 30-80 KB
- Thumbnails: 10-30 KB
- Blog: 100-200 KB

**3. Create Multiple Sizes**

```
hero-yoga-1200x630.jpg (100 KB)
hero-yoga-600x315.jpg (40 KB - mobile)
hero-yoga-2400x1260.jpg (250 KB - retina)
hero-yoga.webp (60 KB - modern)
```

**4. Use Next.js Image Component**

```jsx
import Image from 'next/image';

<Image
  src="/images/yoga-hero.jpg"
  alt="Yoga instructor in downward dog pose"
  width={1200}
  height={630}
  quality={85}
  priority={true} // For hero images
  loading="lazy" // For below-fold images
/>
```

### Benefits of Next.js Image Optimization

✅ Automatic format conversion (WebP with fallback)
✅ Responsive image sizing
✅ Lazy loading by default
✅ Optimized for different devices
✅ Faster page load times
✅ Improved Core Web Vitals

---

## 5. Implementing Alt Text in Code

### In JSX Components

**Simple Image:**
```jsx
<img
  src="/images/yoga-pose.jpg"
  alt="Instructor demonstrating yoga pose for flexibility"
  width={600}
  height={400}
/>
```

**Next.js Image Component:**
```jsx
import Image from 'next/image';

<Image
  src="/images/yoga-pose.jpg"
  alt="Instructor demonstrating yoga pose for flexibility"
  width={600}
  height={400}
  quality={85}
/>
```

**With Loading Priority:**
```jsx
<Image
  src="/images/hero-yoga.jpg"
  alt="Yoga instructor in downward dog pose during session"
  width={1200}
  height={630}
  priority={true} // For above-fold images
/>
```

**Lazy Loading:**
```jsx
<Image
  src="/images/blog-feature.jpg"
  alt="Golfer practicing yoga pose for improved swing"
  width={1200}
  height={800}
  loading="lazy" // For below-fold images
/>
```

### In CSS Background Images

**Problem:** CSS background images can't have alt text

**Solution 1: Use `aria-label`**
```jsx
<div
  style={{ backgroundImage: 'url(/images/yoga.jpg)' }}
  aria-label="Yoga instructor demonstrating meditation pose"
  role="img"
/>
```

**Solution 2: Use semantic HTML**
```jsx
<figure>
  <img
    src="/images/yoga.jpg"
    alt="Yoga instructor demonstrating meditation pose"
  />
  <figcaption>Private yoga coaching session</figcaption>
</figure>
```

### In Content Management

**When uploading images:**
1. Fill in "Alt Text" field
2. Use guidelines above
3. Avoid generic descriptions
4. Include keywords naturally

**Example CMS field:**
```
Image: yoga-hero-1200x630.jpg
Alt Text: "Yoga instructor in downward dog pose during private coaching session"
Description: "Hero image for homepage"
Title: "Yoga Private Coaching Hero"
```

---

## 6. Image SEO Best Practices

### Image Search Optimization

**File Name:** ✅ Uses keywords
```
✅ golf-yoga-hip-opener-pose.jpg
❌ photo_2024_01_15_123456.jpg
```

**Alt Text:** ✅ Descriptive and includes keywords
```
✅ "Golfer performing hip opener yoga pose for better flexibility"
❌ "Yoga"
```

**Title Attribute:** ✅ Provides additional context
```jsx
<img
  src="/images/golf-yoga-pose.jpg"
  alt="Golfer performing hip opener yoga pose for flexibility"
  title="Hip Opener Yoga Pose for Golfers"
/>
```

**Image Captions:** ✅ Provide context
```jsx
<figure>
  <img
    src="/images/retreat-session.jpg"
    alt="Yoga retreat participants in meditation pose"
  />
  <figcaption>Sunset meditation during yoga retreat</figcaption>
</figure>
```

**Page Content:** ✅ References the image
```
Page text mentions "hip opener yoga poses" 
near the image with that alt text
```

### Structured Data for Images

**Google's Image Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "url": "https://aliyoga.com/images/yoga-pose.jpg",
  "name": "Yoga Pose for Flexibility",
  "description": "Instructor demonstrating hip opener pose"
}
```

---

## 7. Common Alt Text Mistakes

### ❌ Avoid These

**Too Vague**
```
❌ "Image"
❌ "Photo"
❌ "Picture of yoga"
✅ "Instructor demonstrating downward dog pose during private session"
```

**Keyword Stuffing**
```
❌ "yoga for golfers golf yoga poses mobility flexibility stretching"
✅ "Golfer practicing yoga pose for improved mobility and flexibility"
```

**Redundant with Caption**
```
❌ Alt: "Woman doing yoga"
❌ Caption: "Woman doing yoga"
✅ Alt: "Woman in yoga pose on mat"
✅ Caption: "Starting your daily practice"
```

**Missing Descriptive Details**
```
❌ "Yoga class"
✅ "Small group yoga class in studio with natural lighting"
```

**Decorative Images with Alt Text**
```
❌ <img src="decoration.jpg" alt="Decorative line" />
✅ <img src="decoration.jpg" alt="" aria-hidden="true" />
```

---

## 8. Monitoring & Maintenance

### Regular Image Audits

**Monthly:**
- Check for broken image links
- Verify alt text completeness
- Monitor image load times
- Test on mobile devices

**Quarterly:**
- Review alt text quality
- Check for duplicate images
- Assess image compression
- Update outdated images

### Tools for Monitoring

**Lighthouse:**
```
Run: npm run build && npm run start
Then test in Chrome DevTools > Lighthouse
Check "Accessibility" section
```

**WebAIM Contrast Checker:**
- https://webaim.org/resources/contrastchecker/
- Verify images have sufficient contrast

**Google PageSpeed Insights:**
- https://pagespeed.web.dev
- Check image optimization recommendations

**SEMrush Site Audit:**
- Check for missing alt texts
- Identify optimization opportunities

---

## 9. Image Management Workflow

### Upload Process

1. **Name the file** using convention: `category-descriptor-size.jpg`
2. **Resize to target dimensions** for intended use
3. **Optimize and compress** using TinyPNG or Squoosh
4. **Upload to `/public/images/` folder**
5. **Add to component** with descriptive alt text
6. **Test rendering** on mobile and desktop
7. **Verify alt text** with accessibility tools

### Update Process

1. Create new optimized version
2. Update file with same name (versioning via build)
3. Clear image cache if needed
4. Test on all devices
5. Verify analytics tracking

---

## 10. Implementation Checklist

### Images Currently Implemented
- [x] Hero images (all pages)
- [x] Service card images
- [x] Blog feature images
- [x] Testimonial placeholders
- [x] Retreat images
- [x] Course card images

### Alt Text Status
- [x] All images have alt text
- [x] Alt text follows guidelines
- [x] No keyword stuffing
- [x] Descriptive and accessible

### Optimization Status
- [ ] All images compressed
- [ ] Multiple sizes created
- [ ] WebP format available
- [ ] Core Web Vitals optimized
- [ ] Load times verified

### Next Steps
1. Replace placeholder images with real photos
2. Optimize all new images
3. Create WebP versions
4. Generate multiple sizes
5. Test performance with Lighthouse

---

## Resources

- **WebAIM Alt Text:** https://webaim.org/articles/alttext/
- **Google Image Search:** https://developers.google.com/search/docs/advanced/images/best-practices
- **Next.js Image Optimization:** https://nextjs.org/docs/basic-features/image-optimization
- **ImageOptim:** https://imageoptim.com
- **Squoosh:** https://squoosh.app
- **Lighthouse:** https://developers.google.com/web/tools/lighthouse