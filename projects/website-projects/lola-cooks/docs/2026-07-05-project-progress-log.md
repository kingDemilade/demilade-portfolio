# LolaCooks Website Project Progress Log

**Date:** July 5, 2026  
**Project:** LolaCooks website  
**Focus:** Service strategy, page architecture, visual refinement, accessibility, and responsive navigation

## Starting Point

The website began as a single-page meal-prep site with:

- A patterned hero section
- Three general benefit cards
- Basic, Premium, and Custom pricing cards
- A four-step weekly ordering process
- A short LolaCooks story section
- An Instagram call to action
- Light and dark modes

The original content positioned LolaCooks primarily as a weekly meal-preparation service.

## New Business Information Reviewed

A handwritten strategy page introduced a more complete service model:

### Tier 1: Meal Prep Only

- 8, 10, or 12 meals per week
- Macro-friendly, balanced meals
- Weekly menu options
- Weekly prepaid subscription

### Tier 2: Nutrition Coaching

- One-on-one coaching
- Weekly meal planning
- Grocery lists and recipes
- Macro and portion guidance
- Habit coaching related to consistency, emotional eating, protein intake, portion awareness, and late-night eating
- Proposed price: $120–$150 per month

### Tier 3: Coaching and Prepared Meals

- Nutrition coaching plus LolaCooks meals
- Personal macro targets
- Weekly check-ins and adjustments
- 8–12 prepared meals
- Proposed price: $300–$350 per month

The strongest positioning statement from the strategy was:

> “I won’t just tell you what to eat—I can make it for you.”

## Strategic Direction Chosen

The website architecture was changed from one long pricing page into two layers:

1. A homepage that introduces the brand and briefly presents the three service tiers.
2. A dedicated services page that gives visitors enough detail to compare their options.

This decision keeps the homepage inviting while allowing the services page to handle pricing, inclusions, subscription rules, coaching topics, and availability.

## Existing Version Preserved

Before restructuring the live page, the previous homepage was saved as:

`lola-cooks-v1.html`

The archived page is unlinked and includes `noindex, nofollow` instructions so it can remain available as a project reference without being treated as a live search result.

## Homepage Updates

The homepage was repositioned around the new service model.

Changes included:

- Added primary navigation.
- Rewrote the hero around the message: “Your goals. Your meals. Your level of support.”
- Changed the primary hero action to “Choose Your Support.”
- Replaced the general benefit cards with previews of the three service tiers.
- Added links from each tier preview to its matching services-page section.
- Added a “Compare All Services” action.
- Replaced the outdated Basic, Premium, and Custom pricing section.
- Created a prominent signature statement using Lola’s differentiating quote.
- Updated the “How It Works” steps to support meals, coaching, or both.
- Updated the story section to emphasize realistic nutrition support and consistency.
- Changed the final call to action to guide visitors toward the services page or Instagram.

## Dedicated Services Page Created

A new `services.html` page was created with:

- A service-focused hero
- Three detailed service-tier cards
- Current coaching price ranges
- A placeholder for meal-prep pricing until Lola confirms it
- Weekly subscription quantities of 8, 10, or 12 meals
- Automatic-renewal and pause information
- Thursday-night ordering language
- A coaching-topics section
- The signature LolaCooks positioning statement
- An Instagram inquiry call to action

Exact scarcity counts were not hard-coded because “two clients” or “one spot left” can become outdated quickly. The page instead communicates that coaching space is intentionally limited.

## Theme Toggle Improvements

The original emoji-based light/dark toggle was redesigned as a branded plate-style control.

Changes included:

- Connected Font Awesome Free.
- Used sun and moon icons.
- Added animated icon transitions.
- Added playful “Serve light mode” and “Serve dark mode” tooltips.
- Preserved saved theme preferences.
- Preserved automatic system-theme detection.
- Added keyboard focus styling and accessible labels.

## Color and Contrast Work

The color system was reorganized into reusable CSS variables.

The light theme moved away from pure white and now uses warm off-white surfaces:

- Main background: `#f7f4ee`
- Card background: `#fffdf8`
- Secondary surface: `#eee9df`

The stylesheet now separates:

- Base palette colors
- Background and surface tokens
- Text tokens
- Accent tokens
- Button gradients
- CTA colors
- Header and hero overlays
- Borders and shadows

Several contrast problems were identified and corrected:

- Bright blue with white text was replaced by deeper accessible blue combinations.
- The hero overlay was strengthened so text contrast does not depend on image pixels.
- The dark-mode CTA originally used dark text on a deep blue gradient and failed WCAG AA at 2.91:1–3.65:1.
- A dedicated off-white CTA text token corrected the dark-mode CTA to 5.04:1–6.34:1.

## Card and Interaction Refinements

The pricing-card and offer-card animations initially felt rigid because a later CSS rule was overriding their transform transitions.

The cascade was corrected and both card types received:

- Smoother spring-like easing
- A subtler lift
- Softer shadow movement
- Smooth theme transitions
- Reduced-motion support

The service cards were further refined by:

- Turning tier links into high-contrast buttons
- Turning homepage text links into outlined CTA buttons
- Styling service prices as centered, framed panels
- Aligning service-price panels across the desktop cards
- Reserving equal title space for multi-line headings
- Adding deliberate spacing between feature lists and CTA buttons

## Typography Improvements

The original Helvetica-based system was upgraded to:

- **Fraunces** for headlines and signature statements
- **Manrope** for body copy, navigation, pricing, cards, and controls

Font-family variables were added to the root token system for easier future changes. Headline wrapping, letter spacing, and fallback fonts were also refined.

## Mobile Navigation

The mobile header was changed to the requested order:

1. LolaCooks logo
2. Light/dark mode control
3. Hamburger control

The mobile navigation now:

- Opens beneath the main header row
- Changes from a hamburger to a close icon
- Updates its accessible expanded state
- Closes after a navigation link is selected
- Closes when the Escape key is pressed
- Resets when the viewport returns to desktop width

## Accessibility Considerations Added

- WCAG AA color-contrast checks
- Keyboard-visible focus states
- Accessible theme and menu labels
- `aria-expanded` and `aria-controls` on the mobile menu
- Decorative icons hidden from assistive technology
- Reduced-motion behavior for animated cards and buttons
- Semantic page sections, headings, navigation, articles, and blockquotes

## Scroll-to-Top Control

A shared scroll-to-top button was added to the live homepage and services page.

The control:

- Uses an upward Font Awesome chevron
- Appears after the visitor scrolls 500 pixels
- Returns the visitor smoothly to the top
- Uses an immediate jump when reduced motion is preferred
- Includes an accessible label and keyboard focus state
- Is hidden from pointer and keyboard interaction when it is not visible

The archived v1 page was intentionally left unchanged so it remains an accurate snapshot of the earlier site.

## Verification Performed

- Checked HTML page structure and internal links.
- Served the project locally to verify root-relative assets.
- Rendered desktop views of the homepage and services page.
- Reviewed responsive behavior and corrected header-width overflow.
- Confirmed that images, stylesheets, scripts, and dark-mode logo assets load successfully.
- Ran `git diff --check` throughout the work to catch whitespace and patch issues.
- Calculated contrast ratios for critical text and background combinations.

## Files Created

- `services.html`
- `lola-cooks-v1.html`
- `docs/down-the-road-priorities.md`
- `docs/2026-07-05-project-progress-log.md`

## Files Updated

- `lola-cooks.html`
- `css/lola-cooks.css`
- `js/lola-cooks.js`

## Open Questions and Next Decisions

The following information still needs confirmation from Lola:

1. Prices for the 8-, 10-, and 12-meal subscriptions
2. Whether the $120–$150 and $300–$350 ranges are final public prices
3. Exact weekly renewal, pause, and cancellation wording
4. Whether the Thursday deadline has a specific cutoff time
5. Pickup schedule, delivery schedule, service area, and delivery fee
6. Dietary restriction and allergy policies
7. Nutrition-coaching credentials and approved scope language
8. Whether availability should be shown dynamically or confirmed only by inquiry
9. Whether Instagram should remain the primary contact method or be supplemented with a website form

## Recommended Next Step

Confirm the missing pricing and policy information with Lola. After that, create a focused client inquiry form that collects the information Lola currently has to gather manually through Instagram messages.

## Documentation Habit for Future Sessions

At the end of each meaningful project session, record:

1. What information or feedback was received
2. What decisions were made
3. Why those decisions were made
4. What files or systems changed
5. What was tested or verified
6. What remains unresolved
7. What the next recommended action is

This creates a reliable narrative of how the project developed—not only a list of code changes.
