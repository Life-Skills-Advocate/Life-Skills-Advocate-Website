# Life Skills Advocate — WordPress Export Breakdown

Source: `lifeskillsadvocate.WordPress.2026-09-13.xml` (WXR 1.2, 22 MB) + the live homepage DOM captured from DevTools on `https://lifeskillsadvocate.com/`.

This document is the reference map for rebuilding the site as static HTML/CSS/JS. Read this before touching `index.html` or any later page.

---

## 1. What the export actually contains

The XML is **not** a full site backup — it's a *pages-only* WXR export.

| `wp:post_type` | Count |
|---|---|
| `page` | 101 |
| `attachment` (featured images tied to those pages) | 53 |
| `post` (blog articles) | **0 — not included** |
| `wp:category` / `wp:term` (taxonomies) | **0 — not included** |
| `nav_menu_item` (menu structure) | **0 — not included** |

Channel metadata:
- Site title: **Life Skills Advocate**
- Base URL: `https://lifeskillsadvocate.com`
- Mission (channel `<description>`): *"With everything we do, our mission is to provide neurodivergent learners and families with the individualized life skills training, executive functioning support, mentorship & coaching they need to build and sustain autonomy & independence."*
- Two authors: `Chris Hanson` (founder) and `Webster Munoz`.

**Implication:** the 412 blog posts referenced in the live homepage's post-list widget, and the full nav menu structure, are **not** in this file. Nav structure and blog post teasers below were recovered from the live DOM you pasted (menu markup, post-list markup), not the XML. If a full posts/menu export becomes available later, re-run this same extraction against it.

---

## 2. Platform / plugin stack (from the live DOM + postmeta keys)

The site is WordPress + **Thrive Theme / Thrive Architect ("tcb")** — a visual page-builder, not a normal theme. That explains the inline `data-css="tve-u-..."` attributes and giant generated `<style>` blocks in the raw HTML. None of that plumbing should be carried into the replica; only the rendered content/layout it produces matters.

Key integrations found in the `<head>` and postmeta:
- **Rank Math SEO Pro** — meta title/description, Open Graph, Twitter Card, JSON‑LD (`Organization`, `WebSite`, `WebPage`) — see §4 for exact values to reuse.
- **Google Tag Manager** (`GTM-5FRJGPV`) + gtag (`AW-727408660`, `G-NZXZR66V9V`).
- **Meta/Facebook Pixel** (`fbevents.js`, app id `396578677657516`).
- **HubSpot** — forms tracking, `hs-scripts.js` (portal `24316344`), collected-forms, banner/cookie consent, analytics. Also two direct HubSpot meeting links used as CTAs:
  - `https://meetings.hubspot.com/lifeskillsadvocate/adult-discovery-meeting` ("For Myself")
  - `https://meetings.hubspot.com/lifeskillsadvocate/frp-discovery-meeting` ("For Someone Else")
- **Klaviyo** — onsite forms/analytics.
- Fonts loaded via Google Fonts: **Literata** (headings), **Open Sans** (body copy/paragraphs), **Muli** (base body/lists), **Nunito** (numbered step badges).
- Organization schema: legal name *Life Skills Advocate LLC*, phone `253-656-4668`, email `admin@lifeskillsadvocate.com`, founded 9‑12‑2019, social: Facebook, Instagram, TikTok, Pinterest, LinkedIn.

None of the tracking scripts (GTM/GA/Meta/HubSpot/Klaviyo/Rank Math PHP output) should be reproduced verbatim in the static replica — flag them in §6 as "needs a decision," since they require real account IDs the user controls.

---

## 3. Full page inventory (101 pages from the XML)

Grouped by function. All are `post_status: publish`, top-level (`post_parent: 0`) except *Welcome* (child of 17134).

### Core / primary nav
- Home → `/`
- Meet Our Team → `/meet-our-team/`
- Discover The Life Skills Advocate Difference → `/discover-the-life-skills-advocate-difference/`
- Core Values → `/core-values/`
- Frequently Asked Questions → `/faqs/`
- Careers → `/careers/`
- Contact → `/contact/`
- Blog (index) → `/blog/`
- Book a Complimentary 30‑Minute Coaching Discovery Meeting → `/discovery/`

### Coaching / service pages
- Real-Life Executive Function Coaching → `/executive-function-coaching/`
- Real-Life ADHD Coaching → `/adhd-coaching/`
- Executive Function Coaching Pricing → `/executive-function-coaching-pricing/`
- Academic Coaching for Neurodivergent Minds → `/academic-coaching-for-neurodivergent-minds/`
- Career Coaching for Neurodivergent Minds → `/career-coaching-for-neurodivergent-minds/`
- Life Skills Coaching for Neurodivergent Minds → `/life-skills-coaching-for-neurodivergent-minds/`
- Executive Function Coaching For High School Students → `/executive-function-coaching-for-high-school-students/`
- Executive Function Coaching For College Students → `/executive-function-coaching-for-college-students/`
- Executive Function Coaching For Young Adults → `/executive-function-coaching-for-young-adults/`
- Executive Function Coaching For Adults → `/executive-function-coaching-for-adults/`
- Back-To-School Executive Function Coaching → `/back-to-school-executive-function-coaching/`
- Summer Executive Function Coaching → `/summer-executive-function-coaching/`
- Financial Aid for Executive Function Coaching → `/financial-aid-for-executive-function-coaching/`

### Team member bio pages (13)
Chris Hanson, Amy Kim Waschke, Karrissa Doree, Shannon Snow, Danny Doyle, Eleanor Chapman, Heather Reed, Jennifer Schmidt, Jess Brady, John Reilly, Ket Buchholz, Kyle Mosler, Liz Makhramadzhyan, Morgan Hale, Nicole Castillo — all `/[first-last]/`.

### Free resources / lead magnets
- Free Executive Functioning Assessment For Teens, Adults & Professionals → `/free-executive-functioning-assessment/`
- Free Executive Functioning Worksheets & Printables → `/free-executive-functioning-worksheets/`
- 100+ Free Executive Functioning IEP Goals → `/executive-functioning-iep-goals/`
- Comprehensive IEP Goal Bank → `/comprehensive-iep-goal-bank/`
- Executive Functioning 101 Resource Hub → `/executive-functioning-101-hub/`
- Real-Life Executive Functioning Workbook → `/real-life-executive-functioning-workbook/`
- The Real-Life Executive Functioning Meal Plan → `/the-real-life-executive-functioning-meal-plan/`
- The Neurodivergent-Friendly Cookbook → `/the-neurodivergent-friendly-cookbook/`
- Neurodivergent-Friendly Tools & Resources → `/neurodivergent-friendly-tools-resources/`
- LSA Nation → `/lsa-nation/`
- Events → `/events/`
- Courses → `/courses/`

### "Adulting Like a Champ" workbook family (lead-magnet funnel)
- Adulting Like A Champ Workbook & Assessment → `/adulting-like-a-champ/`
- Adulting Like A Champ Workbook → `/adulting-like-a-champ-workbook/`
- Adulting Like A Champ Bundle → `/adulting-like-a-champ-bundle/`
- Six topic workbooks: Active Listening, Asking for Help, Assertive Communication, Conflict Management, Organizing Spaces, Planning & Prioritizing, Setting Boundaries, Task Initiation, Time Management — all `/[topic]-workbook/`

### Download/landing pages for lead magnets
- Executive Functioning Assessment Download Page
- IEP Goal Bank Download Page
- Real-Life Executive Functioning Meal Plan Free Download Page
- EFS - Real-Life Executive Functioning Workbook (email-sequence variant)

### Thank-you pages (post-form-submit confirmations — 17 total)
One per lead form/segment: generic inquiry, family, adult, young adult (+family), college (+family), high school, academic coaching, career coaching, life skills coaching, requesting the assessment, requesting the meal plan, requesting Adulting Like a Champ (+ the assessment/workbook variant), reconfirming email, "letting us know," "for your patience," and a YouTube-video-specific thank-you.

### Opt-out / preference pages
- Marketing Opt-Out, Neurowyld Opt-Out, TEFOS Opt-Out, TEFOS, Thrive Opt-Out, Executive Function Coach Certification Course Opt-In/Opt-Out, Stay Updated with EF Coaching Academy.

### Legal
- Privacy Policy, Terms of Service, Disclaimer, Cookie Policy.

### Housekeeping / low-value (do not replicate)
- Checkout Test, Clone of Book a Complimentary 30-Minute Coaching Discovery Meeting, test page 3, LSA Bulk & Purchase Order FAQs, Welcome (draft/child page, parent id 17134 not present in export).

---

## 4. Homepage (`/`, `wp:post_id 3090`) — exact content map

Metadata to reuse verbatim on `index.html`:

- `<title>`: `Life Skills Advocate | Become Your Own Best Advocate`
- Meta description: `Life Skills Advocate's mission: Uplifting the neurodivergent community to embrace their strengths and self-advocate with confidence.`
- Canonical: `https://lifeskillsadvocate.com`
- OG image: `https://lifeskillsadvocate.com/wp-content/uploads/2019/12/logo.png` (1200×630)
- Favicon: `Life-Skills-Advocate-1-e1561588375370.png`

### Section-by-section structure (top to bottom)

1. **Header / nav** (sticky, shrinks on scroll) — logo left, primary nav center, CTA button "Book A Complimentary Discovery Meeting" right, linking to `/discovery/`. Nav groups: *About LSA* (dropdown), *Explore Coaching* (dropdown: by area of need / by age / pricing), *Adulting Like A Champ* (dropdown), *Free Resources* (dropdown), *Shop* (dropdown), *Become a Coach* (dropdown), *Advocate360* (external, `advocate360.app`).
2. **Hero** — H1 "Become Your Own **Best Advocate**", sub-line "**And lean into...**", a 10-item checklist (autonomy, healthier narrative, improved EF, higher grades, motivation, time management, self-confidence, relationships, order/organization), CTA button "Book a Complimentary Discovery Meeting" (jump-scroll to `#tve-jump-1999be28d30`, the booking section). Background: blue gradient over a photo.
3. **"What Is Executive Functioning & Why Is It Important?"** — two-column: copy explaining EF + "EF Ripple Effect" (footnoted, Diamond 2013 citation) / image `word-image-2.png`. CTA "Learn More About The EF Ripple Effect" → blog post.
4. **"How Can Life Skills Advocate Help?"** — centered copy + portrait image (`Hero-Image`).
5. **"Discover How Coaching With LSA Can Support YOU"** — two 4-up card rows: (a) by age — High School / College / Young Adults / Adults, each with a headshot + "Learn More"; (b) by area — School / Work / Life, each with an icon + "Learn More".
6. **"Who is Life Skills Advocate?"** (symbol/reusable block) — founder story (Chris Hanson) copy + right-side image carousel of 4 team headshots (Shannon, Chris, Karrissa, Amy).
7. **"Our Mission"** — centered statement on blue background: *"Uplifting the neurodivergent community to embrace their strengths and self-advocate with confidence."*
8. **Booking section** (`id="tve-jump-1999be28d30"`) — "Book Your Complimentary 30-Minute Coaching Discovery Meeting With Amy 👇", headshot, two HubSpot-meeting CTA buttons ("For Myself" / "For Someone Else"), then a 4-step "What to Expect" row (Welcome → Goals → Overview → Next Steps).
9. **Testimonials** — eyebrow "testimonials", H2 "What Our Clients & Parents Are Saying", 3 cards (Lisa – parent; Tyler – college student; Jade – adult client) + repeat CTA button.
10. **"Partnerships & Professional Affiliations"** — 3 rows of partner/affiliate logos (PolyTech, Eaton-Arrowsmith, Bellevue College OLS, Fusion Academy, iADHD Coalition, Guardian Light, RISE Educational Advocacy, Social Skills Laboratory, Open Doors Mentoring, Fawn Friends, EF Coaching Academy, Canopy Neurodiversity Foundation).
11. **Neurowyld promo** (symbol block, curved-edge section) — "We've launched **Neurowyld**" shop announcement, product photo, CTA "Shop Neurowyld" → `neurowyld.com`.
12. **"We Wrote the Workbook on Executive Functioning"** — Real-Life EF Workbook promo (3,000+ copies sold), CTA "Learn More" → `/real-life-executive-functioning-workbook/`.
13. **"From Our Blog"** — eyebrow "research-based strategies", 3 latest post cards (desktop grid) / 2 (mobile list) pulled live from `/blog/`, "Visit Our Blog" CTA.
14. **Footer** (symbol/reusable block, dark `#36454f`/`#4c4c4f`) — Neurowyld + LSA white logos, social icons (Facebook, Instagram, Pinterest, LinkedIn), copyright line with dynamic year, legal links (Privacy Policy, Terms of Service, Cookie Policy, Disclaimer, Contact), "Privacy Settings" (Usercentrics).

### Copy assets worth preserving exactly
- Footnote citation: *Diamond, A. (2013). Executive Functions. Annual review of psychology, 64, 135-68. https://doi.org/10.1146/annurev-psych-113011-143750.*
- Testimonial quotes (Lisa/Tyler/Jade) — reused verbatim in §the HTML build.

---

## 5. Design tokens recovered from the DOM

| Token | Value | Where used |
|---|---|---|
| Brand blue | `rgb(0,174,239)` / `#00AEEF` | buttons, links, eyebrow text, card accents |
| Dark footer/navy | `rgb(12,17,21)` `#0C1115`; footer bg `rgb(54,69,79)` `#36454F` | header CTA hover state / footer |
| Light tint bg | `rgba(240,246,251,.85)` | alternating section backgrounds |
| Body text | `rgb(41,47,51)` headings / `rgba(10,10,10,.85)` body | — |
| Heading font | **Literata** (serif), weight 600–700 | h1–h6 |
| Body font | **Open Sans** (paragraphs), **Muli** (base/lists) | — |
| Step-number font | **Nunito**, bold | "1 2 3 4" badges |
| Radius | buttons/cards `5px` | — |
| Shadow | `0 8px 12px rgba(0,0,0,.15–.25)` | buttons, cards |
| Max content width | `1080px`–`1250px` per section | — |
| Breakpoints | 1023px (tablet), 767px (mobile) | matches Thrive's own breakpoints, reuse them |

---

## 6. What YOU need to supply / decide before this is a pixel-exact, functioning replica

1. **Real image assets.** The draft `index.html` currently hotlinks the original `lifeskillsadvocate.com/wp-content/uploads/...` URLs (same as the live DOM) so the page renders identically right now — but hotlinking someone else's WP media library is not durable. Decide: (a) download the ~60+ images referenced (logo, hero photo, team headshots, partner logos, Neurowyld art, workbook mockup) into `/assets/img/` and swap paths, or (b) keep hotlinking short-term. I did **not** silently download third-party binaries into the repo without you confirming that's OK.
2. **Blog post list.** The "From Our Blog" section on the live site is populated dynamically from 412 posts (not in this XML). I hardcoded the 2 real, currently-live post titles/thumbnails I could see in your DOM paste (`autism-brushing-teeth`, `adhd-hygiene`) as static teaser cards. If you get the *posts* WXR export, I can generate this section (and `/blog/` itself) for real.
3. **Forms/CTAs.** All "Book a Discovery Meeting" buttons point to your real HubSpot meeting links (kept as-is, since those are your business infra, not WordPress markup). Confirm you want to keep sending people to HubSpot, vs. building your own form.
4. **Tracking scripts** (GTM, GA, Meta Pixel, HubSpot loader, Klaviyo, Rank Math JSON-LD). None are wired into `index.html` yet — say the word and I'll add your real container IDs.
5. **Mobile hamburger menu, sticky-header shrink, image carousel, scroll-jump-to-booking, testimonials layout** are implemented in plain JS in `index.html` (no jQuery/Thrive runtime) — behavior-equivalent, not code-equivalent.
6. **Fonts** are loaded from Google Fonts CDN (Literata/Open Sans/Muli/Nunito) same families as the original, not self-hosted — fine for now, flag if you want them local for perf/offline builds.

---

## 7. Pages built so far

| Page | File | Notes |
|---|---|---|
| Home | `index.html` | Was authored as `index1.html`, later renamed to `index.html` by the user — nav/logo links updated accordingly. |
| Blog index | `blog.html` | 6 real posts (see §6.2); "Meet Our Team" nav link wired to `meet-our-team.html`. |
| Meet Our Team | `meet-our-team.html` | 13 team members across 4 groups (Coaching, Client Service Coordinator, Content, Leadership), matching the live DOM capture exactly. "Read Bio" buttons point to the **live** `lifeskillsadvocate.com/[slug]/` URLs since the 13 individual bio pages aren't built locally yet — switch these to local relative links once those pages exist. |

## 8. Next-phase plan

1. Extract shared header/footer into includable partials (or a tiny JS include/templating step) — now duplicated across 3 files.
2. Build the 13 team-bio pages (`chris-hanson.html`, `karrissa-doree.html`, `kyle-mosler.html`, `amy-kim-waschke.html`, `jennifer-schmidt.html`, `shannon-snow.html`, `jess-brady.html`, `eleanor-chapman.html`, `heather-reed.html`, `morgan-hale.html`, `liz-makhramadzhyan.html`, `ket-buchholz.html`, `danny-doyle.html`) — note **Eleanor Chapman is not in the pages-only XML export** (her page/slug is a best guess: `eleanor-chapman`), everyone else's slug is confirmed against the XML page list in §3.
3. Build the coaching/service page template (used by 9+ pages in §3).
4. Build the workbook-product template (used by 12 pages).
5. Build the thank-you page template (used by 17 pages — mostly just a message + tracking pixel).
6. Wire the real blog once the posts XML is available.
