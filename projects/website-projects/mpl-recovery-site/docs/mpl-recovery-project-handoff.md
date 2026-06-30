# MPL Recovery Website - Project Handoff

Last updated: June 26, 2026

## Project Overview

MPL Recovery is a mobile sports medicine and athletic recovery service focused on providing on-site care for athletes, teams, tournaments, events, and training facilities.

The website should feel:

- Professional
- Athletic
- Modern
- Trustworthy
- Premium but approachable

The visual direction combines sports performance, recovery, and medical credibility while avoiding a generic healthcare appearance. MPL Recovery should feel like a premium sports medicine partner rather than a traditional medical clinic.

## Brand Direction

Core brand attributes:

- Sports medicine
- Athlete focused
- Mobile service
- Professional
- Fast response
- Performance and recovery

### Color Palette

Primary Navy:

- HEX: `#0F2246`
- RGB: `15, 34, 70`
- CMYK: `100, 85, 30, 45`

Primary Blue:

- HEX: `#00AAF0`
- RGB: `0, 170, 240`
- CMYK: `70, 10, 0, 0`

Off Black:

- HEX: `#111111`
- RGB: `17, 17, 17`
- CMYK: `60, 40, 40, 100`

Off White:

- HEX: `#F8F8F6`
- RGB: `248, 248, 246`
- CMYK: `0, 0, 1, 3`

Note: The current CSS uses close operational tokens such as `#0b2a4a`, `#00aeef`, and `#f4f4f4`. Future polish should either align the CSS variables exactly to the brand palette above or intentionally document any adjusted web-safe variants.

## Domain Strategy

Preferred domain:

- `mplrecovery.org`

Secondary redirect:

- `mpl-recovery.org`

Reasoning:

- Cleaner branding
- Easier to remember
- Better for social media
- Better for QR codes
- Matches logo presentation

## Current Site Files

Primary pages:

- `index.html`
- `about.html`
- `services.html`
- `testimonials.html`
- `survey.html`
- `book.html`

Core CSS:

- `css/styles.css` for desktop-first base styles and component styling
- `css/media.css` for responsive behavior
- `css/utilities.css` exists but is not currently linked by the main pages

Core JavaScript:

- `js/main.js` for mobile navigation, reveal animations, sticky navbar behavior, dark mode, and booking widget selection state
- `js/testimonials.js` for loading, filtering, and rendering approved testimonials
- `js/survey.js` for submitting testimonial survey responses
- `js/testimonials-config.js` for Google Sheets, Apps Script, and fallback JSON configuration

Data and docs:

- `data/testimonials.json` is the local fallback source for approved testimonials
- `docs/google-sheets-testimonials.md` documents the Google Sheets testimonial setup
- `docs/testimonials-google-sheets-handoff.md` documents the testimonial integration handoff

## Homepage

Purpose:

- Introduce MPL Recovery immediately as mobile, athlete-centered sports medicine and recovery support.

Current sections:

- Fixed navigation
- Full hero with strong athlete imagery, left-aligned copy, blue/navy overlay, CTA buttons, and performance-focused headline
- Features section with four trust points
- Services preview with three linked service cards
- Benefits section
- Quiz and booking split section
- Footer

Features section:

1. Licensed and Insured
2. On-Site Care
3. Athlete Focused
4. Trusted by Teams

Services preview cards:

1. Sports Emergency
2. Performance and Injury Prevention
3. Recovery and Regeneration

Current homepage behavior:

- Service cards link to `services.html`
- Booking widget stores selected date and time in `localStorage`
- CTA continues to `book.html`
- Quiz CTA is still placeholder-linked with `href="#"`

## Shared Navigation

Desktop layout:

- Logo
- Navigation links
- Theme toggle

Mobile layout:

- Logo
- Theme toggle
- Hamburger menu

Implementation:

- `mobile-controls`
- `desktop-theme-toggle`
- `mobile-theme-toggle`
- `#menu-toggle`
- `#nav-links`

Current nav links:

- Home
- About
- Services
- Videos
- Testimonials
- Book Now

Important note:

- The Videos link is currently a placeholder (`href="#"`) on the checked pages.

## Dark Mode System

Implemented in `js/main.js`.

Current behavior:

- Desktop and mobile toggles both change the same `body.dark-mode` state
- Preference is saved in `localStorage` under `theme`
- Saved dark mode preference is restored on page load
- CSS variables and page-specific dark mode selectors handle the visual switch

## Interior Hero System

Reusable classes:

- `interior-hero`
- `interior-hero-overlay`
- `interior-hero-content`
- `interior-hero-text`

Current pages using the interior hero system:

- `about.html`
- `services.html`
- `testimonials.html`
- `survey.html`
- `book.html`

Page-specific hero classes:

- `about-hero`
- `services-hero`
- `testimonials-hero`
- `survey-hero`
- `booking-hero`

Image strategy:

- Services and booking currently use actual hero images in `images/hero/`
- About and testimonials use image slot markup pointing to planned image paths
- Missing images display intentional upload placeholders rather than broken layouts

## Services Page

Purpose:

- Present the primary MPL Recovery service offerings in a more detailed, premium editorial layout.

Primary services:

1. Sports Emergency
2. Performance and Injury Prevention
3. Recovery and Regeneration

Implemented service card features:

- Alternating editorial card layout
- Image/content pairing
- Premium badge styling
- Elevated hover state
- Reveal animation support
- Featured service styling on Recovery and Regeneration

Current badges:

- Sports Emergency: `Event Coverage`
- Performance and Injury Prevention: `Athlete Performance`
- Recovery and Regeneration: `Most Popular`

Current service details:

- Sports Emergency includes on-site emergency coverage, injury assessment, concussion/cervical spine evaluation, CPR/AED readiness, and heat illness management
- Performance and Injury Prevention includes mobility prep, movement optimization, taping/KT application, activation routines, and injury risk reduction
- Recovery and Regeneration includes recovery stations, ice baths/contrast therapy, post-game flush sessions, mobility/stretching, and massage gun therapy

Wellness Extras:

- KT Tape Application
- Hydration Support
- Recovery Essentials
- Custom Packages

Bottom CTA:

- Headline: `Ready To Elevate Your Event?`
- CTA links to `book.html`

## About Page

Status: Implemented.

Purpose:

- Introduce MPL Recovery's story, mission, values, and founder in a premium but personal way.

Current sections:

- About hero
- Our Story
- Three value cards
- Founder card
- Mission band
- CTA section

Value cards:

1. Expert Care
2. On-Site Convenience
3. Whole Athlete

Founder content:

- Name: Makeshia Lucien, PT, DPT
- Title: Doctor of Physical Therapy
- Founder image slot: `images/about/founder.jpg`

Image placeholders:

- `images/hero/about-hero.jpg`
- `images/about/founder.jpg`
- `images/about/about-cta.jpg`

Note:

- The founder image `alt` text currently references a different name than the visible founder heading. This should be corrected during cleanup.

## Testimonials Page

Status: Implemented.

Purpose:

- Build social proof from athletes, coaches, parents, and event leaders.

Current sections:

- Testimonials hero
- Filter/action row
- Dynamic testimonial list
- CTA section

Filters:

- All Stories
- Athletes
- Coaches
- Parents
- Directors

Primary CTA:

- `Share Your Experience` links to `survey.html`

Bottom CTA:

- `Book Now` links to `book.html`
- `Leave A Review` links to `survey.html`

Testimonial data flow:

- `js/testimonials.js` tries the published Google Sheets CSV first
- If no approved testimonials load from Sheets, it falls back to `data/testimonials.json`
- Only approved testimonials are rendered
- Testimonials can include name, role, title, rating, service, testimonial text, and photo

Image placeholders:

- `images/hero/testimonials-hero.jpg`
- `images/testimonials/testimonials-cta.jpg`
- Testimonial photos from Google Sheets or fallback JSON

## Survey Page

Status: Implemented.

Purpose:

- Collect customer testimonial submissions for review before publishing.

Current form fields:

- Name
- Role
- Display Title
- Service Used
- Rating
- Testimonial
- Optional Photo URL
- Permission checkbox
- Hidden `approved` field defaulting to `no`

Submission behavior:

- `js/survey.js` posts form data to the configured Google Apps Script URL
- Request uses `mode: "no-cors"`
- Success messaging tells users the testimonial was submitted for review
- If no Apps Script URL exists, an error message tells the maintainer to configure `js/testimonials-config.js`

## Booking Page

Status: Partially implemented.

Purpose:

- Give users a dedicated path to request or book MPL Recovery service.

Current sections:

- Booking hero
- Hidden Calendly embed wrapper
- What Happens Next process section
- Footer

Current behavior:

- Calendly iframe remains in the HTML with placeholder URL `https://calendly.com/YOUR-LINK`
- CSS hides Calendly iframes and hides `.booking-page .booking-embed`
- Booking selection confirmation can still render on the booking page if date/time selections exist in `localStorage`

Future direction:

- Replace Calendly with a custom booking experience
- Consider Netlify Forms for static deployment
- Consider CRM integration later
- Add automated confirmations once the booking workflow is finalized

## Testimonials Integration

Current config file:

- `js/testimonials-config.js`

Current settings:

- `googleSheetsCsvUrl` points to a published Google Sheets CSV
- `googleAppsScriptUrl` points to a Google Apps Script endpoint
- `fallbackJsonUrl` points to `data/testimonials.json`

Clean operating model:

- Public testimonials page reads only approved rows
- Survey submissions enter the Sheet as unapproved
- The site owner reviews submissions in Sheets
- Approved rows display automatically after the published CSV updates
- Local JSON remains a fallback/demo data source

## Image Asset Status

Current real assets:

- `images/hero/01_test-hero-image.jpg`
- `images/hero/01_test-hero-image.png`
- `images/hero/booking-hero.jpg`
- `images/hero/services-hero.jpg`
- `images/services/01-test-package.jpg`
- `images/services/02-test-package.jpg`
- `images/services/03-test-package.jpg`
- `images/logos/02-horizontal_mpl-recovery-logo.svg`
- `images/logos/horizontal_mpl-recovery-logo.svg`

Current placeholder folders:

- `images/about/`
- `images/testimonials/`

Planned or referenced image paths:

- `images/hero/about-hero.jpg`
- `images/about/founder.jpg`
- `images/about/about-cta.jpg`
- `images/hero/testimonials-hero.jpg`
- `images/testimonials/testimonials-cta.jpg`
- Testimonial person photos, such as `images/testimonials/athlete-jaylen.jpg`

## Responsive Strategy

Preferred workflow:

1. Build desktop-first component styles in `css/styles.css`
2. Add responsive behavior in `css/media.css`
3. Avoid mixing new responsive rules into `styles.css` unless they are component-local and clearly justified
4. Test mobile navigation, hero text, cards, forms, filters, and CTA button wrapping after each layout change

Current responsive coverage includes:

- Mobile nav
- Logo sizing
- Hero sizing
- Services cards
- Wellness extras
- About values and founder layout
- Testimonials cards and filters
- Survey layout
- Interior hero adjustments

## Logo System

Recommended deliverables:

RGB versions:

- Full color
- Navy
- Off black
- White knockout

CMYK versions:

- Full color
- Rich navy
- Off black
- One color black
- One color gray
- White knockout

Transparent PNG exports:

- Full color
- Navy
- Off black
- White

Recommended off black:

- HEX: `#111111`
- RGB: `17, 17, 17`
- CMYK: `60, 40, 40, 100`

Recommended off white:

- HEX: `#F8F8F6`
- RGB: `248, 248, 246`
- CMYK: `0, 0, 1, 3`

## Remaining Items

High priority:

- Add final About page imagery
- Add final Testimonials page imagery and person photos
- Build Videos page or remove/disable placeholder nav link until ready
- Finalize booking flow
- Replace placeholder Calendly URL or remove embed markup completely
- Domain deployment
- Netlify hosting setup

Medium priority:

- FAQ section
- Team partnerships section
- Contact form enhancements
- Brand palette cleanup in CSS variables
- Accessibility cleanup for repeated nav markup and interactive controls

Known cleanup items:

- Fix About founder image `alt` text mismatch
- Decide whether `css/utilities.css` should be linked or removed
- Decide whether `.DS_Store` files should be ignored and removed from tracking
- Replace `images/ui/athletes.png` reference or remove the quiz image block if the asset is not used
- Connect or remove the homepage quiz CTA
- Consider extracting repeated navigation into a shared include if a static site generator or build step is introduced

Future enhancements:

- Online booking system
- Automated confirmations
- Team scheduling portal
- Tournament request forms
- CRM integration
- Admin-friendly testimonial review workflow

## Design Philosophy

Whenever making future decisions, choose:

- Cleaner
- Simpler
- More athletic
- More premium

Avoid:

- Excessive effects
- Overly corporate healthcare aesthetics
- Visual clutter
- Unnecessary interactions
- Generic healthcare stock imagery

## Cleanest Method For Future Updates

The most sensible approach is to keep this file as the canonical project handoff and treat pasted chat summaries as temporary notes.

Recommended workflow:

1. Update the actual site files first.
2. Review changed pages, CSS, JS, image paths, and docs.
3. Update this handoff in the same branch or commit.
4. Keep completed work, current state, known cleanup, and future work separate.
5. Prefer Markdown in `docs/` over editing attachment files, because project docs are versioned, reviewable, and easy to maintain.

