---
name: build-lsa-page
description: Build a new static HTML page for the Life Skills Advocate site replica by extracting the page's real content from the WordPress XML export and reusing the site's existing shared header/footer/CSS/script. Use whenever the user asks to create/build/add a page for this project, gives a page slug or lifeskillsadvocate.com URL, and/or pastes DevTools-extracted HTML for a live page.
---

# Build an LSA static page from the WordPress export

This project (`Life-Skills-Advocate-Website`) is a plain static HTML/CSS/JS
replica of lifeskillsadvocate.com — no framework, no build step. Each page is
one self-contained `.html` file in the repo root with its own `<style>` block,
sharing a design system (CSS custom properties, `.btn`, header/footer markup)
copied by value into every page rather than an included partial.

This skill reproduces, step by step, the process used to build
`discover-the-life-skills-advocate-difference.html` from
`meet-our-team.html`/`index.html` as the header/footer source and
`lifeskillsadvocate.WordPress.2026-09-13.xml` (or whatever WXR export is
present) as the content source. Follow it in order — don't skip the
clarifying-question step when something is ambiguous or inconsistent across
existing pages.

## Inputs to gather from the user

Before starting, make sure you have:
1. **The target page** — a slug (e.g. `core-values`), a full
   `lifeskillsadvocate.com` URL, or an output filename. Derive the slug from
   whichever is given (the URL path segment, or the requested filename minus
   `.html`).
2. **DevTools-extracted HTML** for the live page, if the user has it (they
   often paste it, as with the discover-difference page). This is optional
   but valuable — it fills gaps the XML doesn't cover (see step 3).

If neither a clear slug/URL nor enough context to find the page in the XML is
given, ask before proceeding.

## Step 1 — Find the file to extract from

- Locate the WXR export in the repo root: `Glob` for `*.xml` (there is
  normally exactly one, e.g. `lifeskillsadvocate.WordPress.2026-09-13.xml`).
  It is large (~20MB) — never `Read` it whole; always `grep`/`Bash grep -n`
  for anchors first, then read narrow line ranges.
- Find the exact `<item>` for the page with:
  `grep -n "<link>https://lifeskillsadvocate.com/<slug>/</link>"` against the
  XML. This is more reliable than searching by title text, since the same
  title/keywords can appear inside other pages' content (internal links) and
  give false matches.
- From that line number, read a window around it (the `<item>...</item>`
  block) to get: `<title>`, `<content:encoded>` (CDATA — this is the page
  body), `<wp:post_name>` (should equal the slug), `<wp:post_modified>`, and
  any relevant `<wp:postmeta>`.

## Step 2 — Confirm against DevTools HTML (if provided)

If the user pasted DevTools output for the live page, use it to fill in what
`<content:encoded>` doesn't carry:
- `<title>` tag → page `<title>` and `og:title`/`twitter:title`.
- `<meta name="description">` → page meta description (also reuse for
  `og:description`/`twitter:description`).
- `<link rel="canonical">` → canonical URL.
- Any theme "symbol" buttons/CTAs (Thrive `thrv_symbol_*`, `thrv-button`
  blocks) that appear in the rendered DOM but are **absent** from
  `content:encoded` — these are page-builder shortcodes stored outside the
  content field. Include them where they visually sit in the DOM (typically:
  one CTA button right after the intro, one at the end before the footer).
  Don't invent CTAs that aren't actually present in either source.
- Cross-check that the `<content:encoded>` text and the DevTools body text
  actually match (same headings, same paragraph order) before trusting the
  XML as the source of truth for the body — if they diverge, prefer what's
  visually in the DevTools DOM and flag the discrepancy to the user.

If no DevTools HTML was given, use `<content:encoded>` alone and infer a
reasonable `<title>`/meta description from the page title and first
paragraph, then flag to the user that these were inferred rather than
sourced, in case they want to supply the real SEO tags.

## Step 3 — Pick the header/footer/CSS source

- Copy the `<head>` boilerplate pattern (charset, viewport, title, meta
  description, canonical, OG/Twitter tags, favicon links, Google Fonts
  preconnect+stylesheet) from the most recently built page (check file mtimes
  or ask) — currently `index.html`.
- Copy the **entire `<style>` block** from that same source page verbatim
  (reset, design tokens `:root`, buttons, header/nav, hero, footer, all
  responsive media queries) so the header/footer render pixel-identical to
  every other page. It's fine that most of that CSS (hero, carousel, etc.) is
  unused on the new page — don't trim it, that risks subtly breaking shared
  selectors.
- Copy the `<header class="site-header" id="siteHeader">
    <div class="header-inner">
      <div class="header-top">
        <a class="logo" href="index.html" aria-label="Life Skills Advocate home">
          <img src="/assets/img/Life-Skills-Advocate-1-e1561588375370.png" alt="Life Skills Advocate logo" width="180"
            height="auto" fetchpriority="high" />
        </a>
        <div class="header-cta-cont">
          <a class="btn btn-primary header-cta" href="https://lifeskillsadvocate.com/discovery/">Book A
            Complimentary Discovery Meeting</a>
        </div>
      </div>

      <div class="nav-scrim" id="navScrim"></div>

      <nav class="main-nav" id="mainNav" aria-label="Primary">
        <ul>
          <li>
            <button class="nav-top-link" aria-expanded="false">
              About LSA<span class="caret">▾</span>
            </button>
            <ul class="dropdown">
              <li>
                <a href="/meet-our-team.html">Meet Our Team</a>
              </li>
              <li>
                <a href="/discover-the-life-skills-advocate-difference.html">Discover The LSA
                  Difference</a>
              </li>
              <li>
                <a href="/core-values.html">Core Values</a>
              </li>
              <li><a href="/faqs.html">FAQs</a></li>
              <li>
                <a href="post.html?slug=what-is-neurodivergence">What is Neurodivergence?</a>
              </li>
              <li>
                <a href="post.html?slug=executive-functioning-skills">Understanding Executive
                  Functioning Skills</a>
              </li>
              <li>
                <a href="post.html?slug=executive-functioning-ripple-effect">Understanding the EF
                  Ripple Effect</a>
              </li>
              <li>
                <a href="/careers.html">Careers</a>
              </li>
              <li>
                <a href="/contact.html">Contact</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/executive-function-coaching.html" aria-expanded="false" class="nav-top-link">Explore Coaching
              <span class="caret">▾</span></a>
            <ul class="dropdown">
              <li>
                <button class="nav-sub-toggle">
                  By Area of Need <span class="caret">▾</span>
                </button>
                <ul class="dropdown">
                  <li>
                    <a href="/academic-coaching-for-neurodivergent-minds.html">School</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/career-coaching-for-neurodivergent-minds/">Work</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/life-skills-coaching-for-neurodivergent-minds/">Life</a>
                  </li>
                </ul>
              </li>
              <li>
                <button class="nav-sub-toggle">
                  By Age <span class="caret">▾</span>
                </button>
                <ul class="dropdown">
                  <li>
                    <a href="https://lifeskillsadvocate.com/executive-function-coaching-for-high-school-students/">High
                      School Students</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/executive-function-coaching-for-college-students/">College
                      Students</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/executive-function-coaching-for-young-adults/">Young
                      Adults</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/executive-function-coaching-for-adults/">Adults</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://lifeskillsadvocate.com/executive-function-coaching-pricing/">Pricing</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/adulting-like-a-champ-workbook.html"  
              class="nav-top-link adultinglikeachamp-cont"><span class="adultinglikeachamp-img"><img
                  src="/assets/img/newicon.png" alt="adultinglikeachamp-img"></span>Adulting Like
              A Champ <span class="caret">▾</span></a>
            <ul class="dropdown">
              <li>
                <a href="/adulting-like-a-champ-workbook.html">Get the Free Workbook</a>
              </li>
              <li>
                <button class="nav-sub-toggle">
                  Communication <span class="caret">▾</span>
                </button>
                <ul class="dropdown">
                  <li>
                    <a href="https://lifeskillsadvocate.com/asking-for-help-workbook/">Asking for Help</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/assertive-communication-workbook/">Assertive
                      Communication</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/active-listening-workbook/">Active Listening</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/setting-boundaries-workbook/">Setting Boundaries</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/conflict-management-workbook/">Conflict Management</a>
                  </li>
                </ul>
              </li>
              <li>
                <button class="nav-sub-toggle">
                  Executive Functioning <span class="caret">▾</span>
                </button>
                <ul class="dropdown">
                  <li>
                    <a href="https://lifeskillsadvocate.com/time-management-workbook/">Time Management</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/planning-and-prioritizing-workbook/">Planning &amp;
                      Prioritizing</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/task-initiation-workbook/">Task Initiation</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/organizing-spaces-workbook/">Organizing Spaces</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://lifeskillsadvocate.com/adulting-like-a-champ-bundle/">Get the 9-Pack Bundle</a>
              </li>
            </ul>
          </li>
          <li>
            <button class="nav-top-link" aria-expanded="false">
              Free Resources <span class="caret">▾</span>
            </button>
            <ul class="dropdown">
              <li>
                <a href="/adulting-like-a-champ-workbook.html">Adulting Like A Champ</a>
              </li>
              <li><a href="/blog.html">Blog</a></li>
              <li>
                <a href="/free-executive-functioning-worksheets.html">Worksheets &amp;
                  Printables</a>
              </li>
              <li>
                <a href="/free-executive-functioning-assessment.html">Executive Functioning
                  Assessment</a>
              </li>
              <li>
                <a href="/the-real-life-executive-functioning-meal-plan.html">Executive
                  Functioning Meal Plan</a>
              </li>
              <li>
                <a href="/executive-functioning-101-hub.html">Executive Functioning 101
                  Resource Hub</a>
              </li>
              <li>
                <a href="/post.html?slug=executive-function-iep-goals">Executive Functioning IEP Goal
                  Resource Hub</a>
              </li>
            </ul>
          </li>
          <li>
            <button class="nav-top-link" aria-expanded="false">
              Shop <span class="caret">▾</span>
            </button>
            <ul class="dropdown">
              <li>
                <a href="https://lifeskillsadvocate.com/real-life-executive-functioning-workbook/">Real-Life Executive
                  Functioning Workbook</a>
              </li>
              <li>
                <button class="nav-sub-toggle">
                  The Neurodivergent-Friendly Cookbook
                  <span class="caret">▾</span>
                </button>
                <ul class="dropdown">
                  <li>
                    <a href="https://lifeskillsadvocate.com/the-neurodivergent-friendly-cookbook/">Digital</a>
                  </li>
                  <li><a href="https://amzn.to/3RifaBq">Paperback</a></li>
                </ul>
              </li>
              <li>
                <a href="https://lifeskillsadvocate.com/comprehensive-iep-goal-bank/">Comprehensive IEP Goal Bank</a>
              </li>
              <li>
                <a href="https://neurowyld.com/" target="_blank" rel="noopener">Neurowyld</a>
              </li>
              <li>
                <a href="https://lifeskillsadvocate.com/neurodivergent-friendly-tools-resources/">Recommended Tools
                  &amp; Resources</a>
              </li>
            </ul>
          </li>
          <li>
            <button class="nav-top-link" aria-expanded="false">
              Become a Coach <span class="caret">▾</span>
            </button>
            <ul class="dropdown">
              <li>
                <a href="https://www.efcoachingacademy.com/pages/resource-page-for-life-skills-advocate?ref=c827c0"
                  target="_blank" rel="noopener">Executive Function Coach Resource Hub</a>
              </li>
              <li>
                <a
                  href="https://lifeskillsadvocate.com/resource/how-to-start-your-coaching-business-in-5-steps-workbook/">Free
                  5-Step Coaching Business Workbook</a>
              </li>
              <li>
                <a href="https://secure.executivefunctioncoachingacademy.com/find-your-niche?am_id=chris6592"
                  target="_blank" rel="noopener">Transition From Teaching Toolkit</a>
              </li>
              <li>
                <a href="https://secure.executivefunctioncoachingacademy.com/executive-function-coaching-certification?am_id=chris3334"
                  target="_blank" rel="noopener">Executive Function Coach Certification Course</a>
              </li>
              <li>
                <a href="https://www.skool.com/executive-function-coaches/about" target="_blank"
                  rel="noopener">Executive Function Coach Community</a>
              </li>
              <li>
                <a href="https://lifeskillsadvocate.com/blog/best-executive-functioning-coach-certification-programs/">Compare
                  EF Coach Certification Programs</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://advocate360.app/" target="_blank" rel="noopener" class="advocate360-cont"><span
                class="advocate360-img"><img src="/assets/img/advocate360icon.png"
                  alt="advocate360-img"></span>Advocate360</a>
          </li>
        </ul>
      </nav>

      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>` block, the closing `<footer>...</footer>`
  block, and the trailing `<script>` block verbatim from the same source
  page.
- **If the header source page has any inconsistency with the rest of the
  site** (broken/mismatched link, stray text, differs from what other already
  -built pages use for the same element) — do not silently pick a version.
  Use `AskUserQuestion` to ask whether to copy it verbatim (bug included) or
  use the corrected version consistent with the other built pages. This
  happened with `index.html`'s `index1.html` logo link and "About LSA Ezze"
  label — always check for this class of drift before assuming the newest
  file is correct.
- Adjust internal nav links (and only these) in the new page's own header
  copy:
  - The new page's own entry in the nav → point at its own local filename,
    add `aria-current="page"`.
  - Any other nav entries that correspond to pages that already exist locally
    in this repo (check with `Glob "*.html"`) → point at the local filename
    instead of the external `lifeskillsadvocate.com` URL, matching what
    those pages already do for themselves (e.g. `meet-our-team.html` links
    to itself locally already).
  - Leave every other nav entry pointing at the live `lifeskillsadvocate.com`
    URL unchanged — those pages don't exist locally yet.

## Step 4 — Build page-specific CSS

Below the copied shared CSS, append a new section (numbered continuing from
the shared sections, e.g. "4. PAGE NAME CONTENT") with only the classes this
page's content needs: a `.page-hero` title band (reuse the pattern from
`meet-our-team.html`/the previous built page if one exists), and whatever
layout the page's own content calls for (feature cards, split sections, grids
— match the visual structure implied by the source HTML/XML, not a rigid
template). Reuse existing tokens (`--blue`, `--radius`, `--shadow`, `--muted`,
`.btn`, `.container`) rather than introducing new ad hoc values. Add a mobile
breakpoint block for anything that needs to stack/center under ~767px,
consistent with the rest of the page's responsive rules.

## Step 5 — Convert the WordPress content to clean semantic HTML

- Strip Thrive/WordPress editor cruft: `data-css`, `tve_*`/`tcb-*` classes,
  `__CONFIG_colors_palette__` JSON blobs, empty `<p><br></p>` spacer
  paragraphs, `decoding="async"` etc.
- Split paragraphs that use `<br><br>` as an internal separator into proper
  separate `<p>` tags — don't preserve manual `<br><br>` spacing.
- Keep the real semantic content: headings (map the source's heading level to
  a sensible level for this page — e.g. repeated `h4` feature titles under a
  single `h1` page title become `h3`), paragraphs, links (add `target="_blank"
  rel="noopener"` for links that already had `target="_blank"`, drop it for
  internal same-site links), citations/footnotes (`<p class="cite"><em>…`),
  and images.
- Images: check `assets/img/` first (`Glob "assets/img/*"`) for a file that
  already matches. If the image isn't already downloaded locally, reference
  it directly from the live `lifeskillsadvocate.com` CDN URL exactly as given
  in the source (don't fabricate a local path) — don't download new binary
  assets into the repo unless the user asks for that.
- Preserve the original reading order from `<content:encoded>` exactly; treat
  the WYSIWYG page-builder's column/wrapper `<div>`s as pure layout noise, not
  as signal for content order.

## Step 6 — Assemble and write the file

Write `<slug>.html` in the repo root (matching the naming convention of
existing pages — no subfolders). Structure:
```
<!doctype html> <html lang="en-US"> <head>...</head>
<body>
  <header class="site-header" id="siteHeader">
    <div class="header-inner">
      <div class="header-top">
        <a class="logo" href="index.html" aria-label="Life Skills Advocate home">
          <img src="/assets/img/Life-Skills-Advocate-1-e1561588375370.png" alt="Life Skills Advocate logo" width="180"
            height="auto" fetchpriority="high" />
        </a>
        <div class="header-cta-cont">
          <a class="btn btn-primary header-cta" href="https://lifeskillsadvocate.com/discovery/">Book A
            Complimentary Discovery Meeting</a>
        </div>
      </div>

      <div class="nav-scrim" id="navScrim"></div>

      <nav class="main-nav" id="mainNav" aria-label="Primary">
        <ul>
          <li>
            <button class="nav-top-link" aria-expanded="false">
              About LSA<span class="caret">▾</span>
            </button>
            <ul class="dropdown">
              <li>
                <a href="/meet-our-team.html">Meet Our Team</a>
              </li>
              <li>
                <a href="/discover-the-life-skills-advocate-difference.html">Discover The LSA
                  Difference</a>
              </li>
              <li>
                <a href="/core-values.html">Core Values</a>
              </li>
              <li><a href="/faqs.html">FAQs</a></li>
              <li>
                <a href="post.html?slug=what-is-neurodivergence">What is Neurodivergence?</a>
              </li>
              <li>
                <a href="post.html?slug=executive-functioning-skills">Understanding Executive
                  Functioning Skills</a>
              </li>
              <li>
                <a href="post.html?slug=executive-functioning-ripple-effect">Understanding the EF
                  Ripple Effect</a>
              </li>
              <li>
                <a href="/careers.html">Careers</a>
              </li>
              <li>
                <a href="/contact.html">Contact</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/executive-function-coaching.html" aria-expanded="false" class="nav-top-link">Explore Coaching
              <span class="caret">▾</span></a>
            <ul class="dropdown">
              <li>
                <button class="nav-sub-toggle">
                  By Area of Need <span class="caret">▾</span>
                </button>
                <ul class="dropdown">
                  <li>
                    <a href="/academic-coaching-for-neurodivergent-minds.html">School</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/career-coaching-for-neurodivergent-minds/">Work</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/life-skills-coaching-for-neurodivergent-minds/">Life</a>
                  </li>
                </ul>
              </li>
              <li>
                <button class="nav-sub-toggle">
                  By Age <span class="caret">▾</span>
                </button>
                <ul class="dropdown">
                  <li>
                    <a href="https://lifeskillsadvocate.com/executive-function-coaching-for-high-school-students/">High
                      School Students</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/executive-function-coaching-for-college-students/">College
                      Students</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/executive-function-coaching-for-young-adults/">Young
                      Adults</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/executive-function-coaching-for-adults/">Adults</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://lifeskillsadvocate.com/executive-function-coaching-pricing/">Pricing</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/adulting-like-a-champ-workbook.html"  
              class="nav-top-link adultinglikeachamp-cont"><span class="adultinglikeachamp-img"><img
                  src="/assets/img/newicon.png" alt="adultinglikeachamp-img"></span>Adulting Like
              A Champ <span class="caret">▾</span></a>
            <ul class="dropdown">
              <li>
                <a href="/adulting-like-a-champ-workbook.html">Get the Free Workbook</a>
              </li>
              <li>
                <button class="nav-sub-toggle">
                  Communication <span class="caret">▾</span>
                </button>
                <ul class="dropdown">
                  <li>
                    <a href="https://lifeskillsadvocate.com/asking-for-help-workbook/">Asking for Help</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/assertive-communication-workbook/">Assertive
                      Communication</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/active-listening-workbook/">Active Listening</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/setting-boundaries-workbook/">Setting Boundaries</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/conflict-management-workbook/">Conflict Management</a>
                  </li>
                </ul>
              </li>
              <li>
                <button class="nav-sub-toggle">
                  Executive Functioning <span class="caret">▾</span>
                </button>
                <ul class="dropdown">
                  <li>
                    <a href="https://lifeskillsadvocate.com/time-management-workbook/">Time Management</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/planning-and-prioritizing-workbook/">Planning &amp;
                      Prioritizing</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/task-initiation-workbook/">Task Initiation</a>
                  </li>
                  <li>
                    <a href="https://lifeskillsadvocate.com/organizing-spaces-workbook/">Organizing Spaces</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://lifeskillsadvocate.com/adulting-like-a-champ-bundle/">Get the 9-Pack Bundle</a>
              </li>
            </ul>
          </li>
          <li>
            <button class="nav-top-link" aria-expanded="false">
              Free Resources <span class="caret">▾</span>
            </button>
            <ul class="dropdown">
              <li>
                <a href="/adulting-like-a-champ-workbook.html">Adulting Like A Champ</a>
              </li>
              <li><a href="/blog.html">Blog</a></li>
              <li>
                <a href="/free-executive-functioning-worksheets.html">Worksheets &amp;
                  Printables</a>
              </li>
              <li>
                <a href="/free-executive-functioning-assessment.html">Executive Functioning
                  Assessment</a>
              </li>
              <li>
                <a href="/the-real-life-executive-functioning-meal-plan.html">Executive
                  Functioning Meal Plan</a>
              </li>
              <li>
                <a href="/executive-functioning-101-hub.html">Executive Functioning 101
                  Resource Hub</a>
              </li>
              <li>
                <a href="/post.html?slug=executive-function-iep-goals">Executive Functioning IEP Goal
                  Resource Hub</a>
              </li>
            </ul>
          </li>
          <li>
            <button class="nav-top-link" aria-expanded="false">
              Shop <span class="caret">▾</span>
            </button>
            <ul class="dropdown">
              <li>
                <a href="https://lifeskillsadvocate.com/real-life-executive-functioning-workbook/">Real-Life Executive
                  Functioning Workbook</a>
              </li>
              <li>
                <button class="nav-sub-toggle">
                  The Neurodivergent-Friendly Cookbook
                  <span class="caret">▾</span>
                </button>
                <ul class="dropdown">
                  <li>
                    <a href="https://lifeskillsadvocate.com/the-neurodivergent-friendly-cookbook/">Digital</a>
                  </li>
                  <li><a href="https://amzn.to/3RifaBq">Paperback</a></li>
                </ul>
              </li>
              <li>
                <a href="https://lifeskillsadvocate.com/comprehensive-iep-goal-bank/">Comprehensive IEP Goal Bank</a>
              </li>
              <li>
                <a href="https://neurowyld.com/" target="_blank" rel="noopener">Neurowyld</a>
              </li>
              <li>
                <a href="https://lifeskillsadvocate.com/neurodivergent-friendly-tools-resources/">Recommended Tools
                  &amp; Resources</a>
              </li>
            </ul>
          </li>
          <li>
            <button class="nav-top-link" aria-expanded="false">
              Become a Coach <span class="caret">▾</span>
            </button>
            <ul class="dropdown">
              <li>
                <a href="https://www.efcoachingacademy.com/pages/resource-page-for-life-skills-advocate?ref=c827c0"
                  target="_blank" rel="noopener">Executive Function Coach Resource Hub</a>
              </li>
              <li>
                <a
                  href="https://lifeskillsadvocate.com/resource/how-to-start-your-coaching-business-in-5-steps-workbook/">Free
                  5-Step Coaching Business Workbook</a>
              </li>
              <li>
                <a href="https://secure.executivefunctioncoachingacademy.com/find-your-niche?am_id=chris6592"
                  target="_blank" rel="noopener">Transition From Teaching Toolkit</a>
              </li>
              <li>
                <a href="https://secure.executivefunctioncoachingacademy.com/executive-function-coaching-certification?am_id=chris3334"
                  target="_blank" rel="noopener">Executive Function Coach Certification Course</a>
              </li>
              <li>
                <a href="https://www.skool.com/executive-function-coaches/about" target="_blank"
                  rel="noopener">Executive Function Coach Community</a>
              </li>
              <li>
                <a href="https://lifeskillsadvocate.com/blog/best-executive-functioning-coach-certification-programs/">Compare
                  EF Coach Certification Programs</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://advocate360.app/" target="_blank" rel="noopener" class="advocate360-cont"><span
                class="advocate360-img"><img src="/assets/img/advocate360icon.png"
                  alt="advocate360-img"></span>Advocate360</a>
          </li>
        </ul>
      </nav>

      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>            (from step 3)
  <section class="page-hero">...  (h1 = page title)
  <main>...</main>                (content from steps 4-5)
  <footer>...</footer>            (from step 3, verbatim)
  <script>...</script>            (from step 3, verbatim)
</body></html>
```

## Step 7 — Verify

- `git status --short` — confirm only the new file is untracked/changed;
  nothing else in the repo was touched.
- Sanity-check tag balance on the new file (`grep -c` for opening vs closing
  `<section>`, `<header>`, `<footer>` at minimum).
- Report to the user: where the content came from (XML item + DevTools
  cross-check or not), which images are referenced live vs. local, and any
  judgment calls made (heading levels chosen, internal links relinked, any
  inconsistency flagged/resolved via question).

## Notes for repeated use

- Once more pages exist locally, prefer the **most recently built page** as
  the header/footer/CSS source (it's most likely to have picked up latest
  fixes), but always diff its header/footer against at least one other
  existing page first to catch drift before copying — see Step 3.
- Keep a running mental note of which pages exist locally so nav relinking
  (Step 3) stays accurate as more pages get built.
