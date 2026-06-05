# Claude Prompt Pack for VS Code
## Build the New Ali Yoga Website

Use these prompts sequentially in Claude inside VS Code.

---

## Prompt 1: Project Setup

You are my senior frontend engineer and product-minded web designer.

We are rebuilding an existing yoga website into a modern, SEO-driven brand website for Ali Yoga. The site should be built with Next.js App Router, TypeScript, Tailwind CSS, and a clean reusable component architecture.

Create the initial project structure for a premium wellness website.

Requirements:
- Use Next.js App Router
- Use TypeScript
- Use Tailwind CSS
- Create a clean `/app` route structure
- Create `/components`
- Create `/content`
- Create `/lib`
- Create `/types`
- Create global design tokens
- Use a warm natural color palette
- Use elegant heading typography and clean body typography
- Set up reusable layout components
- Add responsive mobile-first styling
- Add accessibility-friendly semantic HTML
- Add placeholder images where final assets are not available

Brand direction:
- Premium holistic yoga
- Yoga for golfers
- Private coaching
- Retreats
- Breathwork and meditation
- Warm, calm, elegant, natural, modern

Color palette:
- Cream `#FAF7F0`
- Warm Sand `#E8D8C3`
- Deep Olive `#3F4A36`
- Soft Clay `#B9866B`
- Charcoal Brown `#2B2520`
- Sage `#A8B8A0`
- Golden Sun `#D8A84E`

Typography:
- Heading font should feel elegant and editorial
- Body font should be clean and highly readable

Create the base project files and explain the file structure when done.

---

## Prompt 2: Brand System and Core Components

Build the design system and reusable components for the Ali Yoga website.

Create the following components:

1. `SiteHeader`
2. `MobileNav`
3. `SiteFooter`
4. `Container`
5. `Section`
6. `Button`
7. `Hero`
8. `ServiceCard`
9. `TestimonialCard`
10. `FAQAccordion`
11. `CTASection`
12. `BlogCard`
13. `RetreatCard`
14. `CourseCard`
15. `BookingForm`
16. `Breadcrumbs`
17. `JsonLd`

Design requirements:
- Premium wellness aesthetic
- Soft rounded corners
- Natural spacing
- Strong mobile experience
- Sticky header
- Clear CTA button
- Smooth hover states
- Accessible focus states
- Semantic HTML
- No overdone animations
- Use subtle transitions only

Header navigation:
- Home
- Private Coaching
- Yoga for Golfers
- Retreats
- Online Courses
- About Ali
- Blog
- Book a Session

Primary CTA:
Book a Session

Footer should include:
- Brand summary
- Navigation
- Services
- Social links
- Contact CTA
- Copyright

Use placeholder logo text: “Ali Yoga”

---

## Prompt 3: Content Model

Create structured content files for the site.

Create:

`/content/site.ts`
- brand name
- tagline
- description
- social links
- contact info placeholder
- booking link placeholder
- default SEO

`/content/services.ts`
Include:
1. Private Yoga Coaching
2. Yoga for Golfers
3. Online Yoga Courses
4. Yoga Retreats
5. Breathwork & Meditation

`/content/testimonials.ts`
Use placeholder testimonial text, but structure it so real testimonials can easily replace it.

`/content/faqs.ts`
Create FAQs for:
- Private coaching
- Yoga for golfers
- Retreats
- Online courses
- Booking

`/content/retreats.ts`
Create placeholder retreat data.

`/content/courses.ts`
Create placeholder course data.

Each content object should support:
- title
- slug
- description
- SEO title
- SEO description
- image
- CTA label
- CTA href
- FAQs where applicable

Keep all content realistic, polished, and aligned to the Ali Yoga brand.

---

## Prompt 4: Build the Home Page

Build the homepage for Ali Yoga.

Route:
`/`

Homepage sections:

1. Hero
Headline:
“Yoga for Freedom, Focus & Flow”

Subheadline:
“Private yoga coaching, golf-focused mobility, retreats, and online practices designed to help you move better, breathe deeper, and live with more presence.”

Primary CTA:
“Book a Private Session”

Secondary CTA:
“Explore Yoga for Golfers”

2. Trust bar
Mention:
- Yoga teacher trained in India
- Golf background
- Private coaching
- Retreats
- Breathwork and meditation

3. Services section
Cards:
- Private Yoga Coaching
- Yoga for Golfers
- Online Courses
- Retreats

4. Yoga for golfers feature
Position this as the flagship offer.
Focus on mobility, balance, rotation, flexibility, body awareness, and mental focus.

5. About Ali preview
Include her background:
- From Colombia
- Discovered yoga at 15
- Golf scholarship to Jacksonville State University
- Studied yoga in Rishikesh, India
- Teaches asana, pranayama, and meditation

6. Testimonials preview

7. Retreat CTA

8. Blog preview

9. Final CTA

SEO:
- Add page metadata
- Add Organization JSON-LD
- Add Person JSON-LD
- Add WebSite JSON-LD
- Add canonical URL
- Add Open Graph data

Design:
- Premium, calm, image-rich
- Mobile-first
- Warm natural background
- Strong CTA hierarchy

---

## Prompt 5: Build the Yoga for Golfers Page

Build the `/yoga-for-golfers` page.

This is the flagship SEO landing page.

SEO targets:
- yoga for golfers
- golf yoga
- yoga for golf flexibility
- golf mobility
- yoga for better golf swing
- golf balance exercises
- breathwork for golf focus

Page structure:

1. Hero
Headline:
“Yoga for Golfers Who Want More Mobility, Balance & Focus”

Subheadline:
“A golf-focused yoga method designed to improve body awareness, flexibility, rotation, breathing, and mental presence on and off the course.”

Primary CTA:
“Start Golf Yoga Coaching”

Secondary CTA:
“View Online Course”

2. Problem section
Explain common golfer issues:
- tight hips
- limited rotation
- low back tension
- poor balance
- inconsistent focus
- lack of body awareness

3. Method section
Pillars:
- Mobility
- Balance
- Rotation
- Breath
- Focus
- Recovery

4. What sessions include
- mobility flow
- yoga postures
- breathwork
- body awareness
- balance training
- meditation
- recovery guidance

5. Who it is for
- recreational golfers
- competitive golfers
- older golfers
- golfers with stiffness
- golfers wanting better mental focus

6. Online course CTA

7. Private coaching CTA

8. FAQ section

9. Final CTA

SEO:
- Add metadata
- Add Service JSON-LD
- Add FAQPage JSON-LD
- Add BreadcrumbList JSON-LD
- Use semantic headings
- Add internal links to Private Coaching and Online Courses

Make the copy persuasive but grounded. Do not make medical claims or guarantee performance improvement.

---

## Prompt 6: Build the Private Coaching Page

Build `/private-yoga-coaching`.

SEO targets:
- private yoga coaching
- private yoga instructor
- one on one yoga sessions
- personal yoga coach
- private yoga for flexibility
- private yoga for stress relief

Page structure:

1. Hero
Headline:
“Private Yoga Coaching Designed Around Your Body, Breath & Goals”

2. Who it is for
3. What each session includes
4. Benefits
5. Ali’s holistic method
6. Session options
7. FAQ
8. Booking CTA

Positioning:
Private yoga coaching should feel personal, premium, and transformational. It should blend asana, breathwork, meditation, body awareness, and gentle discipline.

SEO:
- Metadata
- Service schema
- FAQ schema
- Breadcrumb schema
- Internal links

---

## Prompt 7: Build Retreats Page

Build `/retreats`.

SEO targets:
- yoga retreats
- wellness retreats
- spiritual yoga retreats
- yoga retreat waitlist
- holistic yoga retreat

Page structure:
1. Hero
2. Upcoming retreats section
3. Retreat philosophy
4. What’s included
5. Sample itinerary
6. Gallery
7. Testimonials
8. FAQ
9. Waitlist CTA

If no retreat dates are active, create a polished “Join the Retreat Waitlist” section.

Add Event schema only for active retreat dates. Otherwise do not create fake events.

---

## Prompt 8: Build Online Courses Page

Build `/online-yoga-courses`.

SEO targets:
- online yoga courses
- yoga for golfers online
- online breathwork course
- yoga mobility course

Page structure:
1. Hero
2. Featured golf yoga course
3. Course cards
4. How online courses work
5. Who courses are for
6. FAQ
7. CTA to course platform

Use placeholder external paid course URL.

Add Course schema where applicable.

---

## Prompt 9: Build About Page

Build `/about`.

Use this story:

Ali is originally from Colombia. She discovered yoga at the age of 15. Yoga became a transformative discipline that helped her thrive in a competitive environment and eventually earn a golf scholarship to Jacksonville State University. Her love for yoga took her to Rishikesh, India, where she studied Hatha, Vinyasa, and Ashtanga yoga. She teaches asana, pranayama, and meditation and believes yoga is more than physical postures. Her teaching helps students build body awareness, quiet the mind, and experience more freedom.

Page structure:
1. Founder hero
2. Origin story
3. Golf and yoga connection
4. India training
5. Teaching philosophy
6. Personal gallery
7. CTA

SEO:
- Person schema
- Breadcrumb schema
- Metadata
- Internal links

Tone:
Warm, credible, spiritual, grounded.

---

## Prompt 10: Build Blog System

Create a blog system.

Routes:
- `/blog`
- `/blog/[slug]`

Use MDX or structured TypeScript content for now.

Create these initial posts as placeholders with polished intro copy and outline sections:

1. Yoga for Golfers: 7 Benefits for Mobility, Balance & Focus
2. Best Yoga Poses for a Better Golf Swing
3. How Breathwork Improves Focus on the Golf Course
4. Private Yoga Coaching vs Group Classes: Which Is Right for You?
5. What to Expect at a Yoga Retreat
6. How Yoga Builds Body Awareness
7. Hatha vs Vinyasa vs Ashtanga: What’s the Difference?
8. Why Flexibility Alone Is Not Enough for Golfers
9. The Role of Meditation in Athletic Performance
10. How to Start a Daily Yoga Practice at Home

Each blog post should include:
- title
- slug
- description
- publish date
- category
- author
- featured image placeholder
- SEO title
- SEO description
- related posts
- CTA at bottom

SEO:
- BlogPosting JSON-LD
- BreadcrumbList JSON-LD
- metadata
- canonical URL

---

## Prompt 11: Build Testimonials and Booking Pages

Build `/testimonials` and `/book`.

Testimonials page:
- Use structured, crawlable text testimonials
- Include filters or sections:
  - Private coaching
  - Yoga for golfers
  - Retreats
  - Online courses
- Add CTA sections

Booking page:
- Include inquiry form
- Include service interest dropdown
- Include session format dropdown
- Include goals field
- Include message field
- Add form validation
- Add placeholder submission handler
- Add success state
- Add error state

Booking form fields:
- Name
- Email
- Phone
- Location
- Interested in
- Experience level
- Preferred session format
- Goals
- Message

Do not connect to a live email service yet. Make the form integration-ready.

---

## Prompt 12: Technical SEO Implementation

Implement full technical SEO.

Requirements:
1. Add metadata to every page
2. Add canonical URLs
3. Add Open Graph metadata
4. Add Twitter card metadata
5. Add sitemap
6. Add robots
7. Add JSON-LD utilities
8. Add Organization schema
9. Add Person schema
10. Add Service schema for service pages
11. Add Course schema for course pages
12. Add BlogPosting schema for blog pages
13. Add FAQPage schema where FAQs exist
14. Add BreadcrumbList schema
15. Add image alt text strategy
16. Add 301 redirects from old URLs to new URLs

Redirects:
- `/about-me` to `/about`
- `/classes` to `/yoga-for-golfers`
- `/retreats` to `/retreats`
- `/testimonials` to `/testimonials`
- `/member-site-homepage-1` to `/online-yoga-courses`

Use Next.js conventions for sitemap, robots, and redirects.

---

## Prompt 13: Polish, Accessibility, and Performance

Perform a final polish pass.

Check:
- Mobile layout
- Tablet layout
- Desktop layout
- Header responsiveness
- Footer responsiveness
- Button contrast
- Keyboard navigation
- Focus states
- Image sizes
- Semantic headings
- Alt text
- Lighthouse performance
- Accessibility
- SEO
- Form usability
- Broken links
- Empty states
- Loading states

Improve:
- Spacing
- Typography
- Visual hierarchy
- CTA clarity
- Card consistency
- Hero composition
- Blog readability
- Page transitions

Do not introduce unnecessary dependencies.

---

## Prompt 14: Launch Prep

Prepare the site for deployment.

Tasks:
1. Add environment variable examples
2. Add README setup instructions
3. Add deployment checklist
4. Add content editing guide
5. Add image replacement guide
6. Add SEO checklist
7. Add analytics placeholder
8. Add Google Search Console checklist
9. Add Vercel deployment notes
10. Add final QA checklist

Create a `README.md` that explains:
- project overview
- local setup
- folder structure
- content editing
- deployment
- SEO files
- image handling
- forms
- future CMS upgrade path

Make it clear enough for a non-developer owner and a developer to understand.
