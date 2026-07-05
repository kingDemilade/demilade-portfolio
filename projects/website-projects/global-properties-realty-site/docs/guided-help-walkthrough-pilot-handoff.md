# Guided Help and Website Walkthrough Pilot Handoff

Last updated: July 2, 2026

## Document Purpose

This internal handoff captures the idea of developing a reusable **Guided Help** system for client websites. Global Properties Realty is a possible pilot, but the larger goal is to create a repeatable service and technical pattern that can be adapted for future projects.

This is an exploration document, not an approved addition to the current Global Properties Realty redesign scope or price.

## Concept Summary

Guided Help is an on-demand help center embedded in a website. A visitor can open it, choose a task, and follow a short walkthrough made of modals, highlighted interface elements, and anchored tooltips.

The Flexmls reference demonstrates several connected features:

- A persistent Guided Help launcher.
- A menu containing multiple walkthroughs.
- A welcome or introductory modal, optionally containing a video.
- Tooltips positioned beside the interface element being explained.
- A dimmed overlay and a visual highlight around the active element.
- Back, Next, Finish, Skip, and Close controls.
- Steps that may ask the visitor to click or open part of the interface.
- Saved completion state and the ability to replay help later.

The proposed system should borrow this interaction pattern without copying Flexmls branding, text, artwork, or proprietary implementation.

## Why Explore It

A reusable walkthrough system could:

- Reduce confusion around unfamiliar or multi-step website tasks.
- Improve completion of important actions such as applications, inquiries, bookings, or account setup.
- Give clients a visible support feature that distinguishes a custom website from a basic brochure site.
- Reduce repetitive support questions.
- Provide measurable information about where visitors stop or request help.
- Become an optional service for future website projects and maintenance plans.

Guided Help should supplement clear navigation and page design, not compensate for a confusing interface.

## Proposed Global Properties Realty Pilot

### Pilot Objective

Test whether an on-demand walkthrough helps visitors understand the website and begin important tasks, especially the rental-application process, without introducing friction or collecting sensitive information.

### Recommended First Release

Keep the pilot intentionally small:

1. Add one clearly labeled **Guided Help** or **Need Help?** launcher.
2. Offer no more than three short walkthroughs.
3. Limit each walkthrough to approximately three to six steps.
4. Save dismissed and completed status in the visitor's browser.
5. Allow every walkthrough to be restarted from the launcher.
6. Measure starts, completions, exits, and the final call-to-action click without recording form contents.

### Candidate Pilot Walkthroughs

#### Find the Right Service

- Introduce the primary navigation.
- Explain Buying, Selling, Commercial Real Estate, Property Management, and REO services.
- End with the appropriate contact action.

#### Apply for a Rental

- Identify the Rental Application entry point.
- Explain what the applicant should prepare.
- Clarify that the application opens or embeds a third-party service.
- Point out the support and fallback links.
- End at **Begin Rental Application**.

The walkthrough must stop before sensitive information, payment, consent, or screening steps handled by Formsite, Resident Research, or another provider.

#### Contact Global Properties Realty

- Show phone, email, inquiry form, office information, and expected next steps.
- End with the visitor's chosen contact method.

### Pilot Success Signals

- Visitors can find and reopen Guided Help.
- The walkthrough works with mouse, keyboard, touch, and common screen sizes.
- The feature does not obstruct urgent contact or application actions.
- A useful percentage of started tours reach the final step.
- Fewer visitors abandon the path between the rental information page and the application provider.
- Client and visitor feedback indicates that the help is understandable and not intrusive.

Specific numeric targets should be established only after baseline analytics are available.

## Reusable Product Architecture

The system should be divided into two layers.

### Shared Tour Engine

Reusable across projects:

- Launcher and help-center interface.
- Modal, tooltip, overlay, and element-highlight behavior.
- Step navigation and progress display.
- Responsive positioning and scroll handling.
- Keyboard and focus management.
- Completion storage.
- Analytics event hooks.
- Versioning and reset behavior.
- Standard visual tokens that can be themed per client.

### Client Tour Configuration

Unique to each project:

- Tour names and descriptions.
- Step text and optional media.
- Target element selectors.
- Step order and page routes.
- Button labels and final calls to action.
- Client colors, typography, and logo treatment.
- Rules controlling when a tour is available or automatically introduced.

A configuration-based approach makes it possible to improve the engine once while maintaining different content for each client.

## Suggested Tour Data Model

Each tour should have:

- A stable tour ID and version.
- A title, short description, and category.
- Optional audience or page rules.
- A list of ordered steps.
- A completion action or destination.

Each step should have:

- A stable step ID.
- A heading and concise instruction.
- A target element or a centered-modal mode.
- Preferred tooltip position with automatic fallback.
- Optional image or video.
- Required action, such as Next, click target, or navigate.
- Back, Skip, Close, and progress settings.
- An alternate message if the target element cannot be found.

Stable attributes such as `data-tour="rental-application"` are preferable to fragile CSS selectors tied to layout or styling.

## Technical Approaches to Compare

### Lightweight Library

Examples to evaluate include Driver.js, Shepherd.js, and Intro.js.

Advantages:

- Faster pilot development.
- Established positioning and overlay behavior.
- Lower initial engineering cost.

Tradeoffs:

- Styling and accessibility quality must be verified.
- Some advanced behavior may require extensions.
- Licensing and current maintenance status must be reviewed before selection.

### Custom Tour Engine

Advantages:

- Full visual and behavioral control.
- No dependency on another product's roadmap.
- Can be shaped specifically for the reusable service.

Tradeoffs:

- More development and testing.
- Positioning, focus management, scrolling, route changes, and mobile behavior are deceptively complex.
- Long-term maintenance becomes an internal responsibility.

### Hosted Product-Adoption Platform

Commercial platforms may provide visual editors, analytics, segmentation, and content management.

Advantages:

- Non-developers may be able to update tours.
- Stronger reporting and targeting may be available.
- Faster deployment for larger applications.

Tradeoffs:

- Recurring client cost.
- Vendor scripts, privacy review, and possible performance impact.
- The experience may be less portable between client projects.
- Features and pricing can exceed the needs of a public marketing website.

### Initial Direction

For the pilot, compare a well-maintained lightweight library with a small custom proof of concept. Avoid committing to a commercial platform until the expected number of clients, editing needs, analytics requirements, and budget are clearer.

## State and Backend Requirements

### Browser-Only State

For public websites without user accounts, local browser storage can remember:

- Whether Guided Help was introduced or dismissed.
- Which tour versions were completed.
- The last completed step, if resuming is desirable.

This is the simplest pilot approach. Progress will not follow a visitor to another browser or device, and clearing browser data resets it.

### Account-Connected State

A backend becomes useful when a site has authenticated users and needs:

- Cross-device progress.
- Role-specific tours.
- Organization-level reporting.
- Centrally managed completion records.

No custom Guided Help backend is recommended for the initial Global Properties Realty public-site pilot.

## Accessibility and User-Control Requirements

The walkthrough must:

- Be fully operable by keyboard.
- Move focus into a modal or tooltip at the appropriate time and restore it when closed.
- Provide visible focus indicators.
- Use correct dialog names, descriptions, and status announcements.
- Support zoom, reflow, mobile orientation, and reduced-motion preferences.
- Maintain readable contrast and sufficiently large controls.
- Never trap a visitor without a Close or Skip option.
- Avoid automatically launching on every visit.
- Keep instructions short and avoid relying only on position, shape, or color.
- Handle missing target elements without freezing the tour.

Screen-reader and keyboard testing must be included; adding ARIA attributes alone is not sufficient validation.

## Privacy, Security, and Analytics Boundaries

- Do not record rental-application answers, payment details, identity information, or other sensitive form contents.
- Do not attach sensitive values or full page contents to analytics events.
- Use anonymous events such as `tour_opened`, `tour_started`, `step_viewed`, `tour_exited`, and `tour_completed`.
- Review consent requirements before loading third-party analytics or hosted walkthrough scripts.
- Keep walkthrough content free of confidential administrative instructions.
- Treat external application providers as separate systems with their own access and privacy controls.

## Content Guidelines

- Give each walkthrough one clear user goal.
- Explain actions in plain language.
- Keep one primary instruction per step.
- Prefer three to six meaningful steps over a long interface tour.
- Let the interface remain visible whenever context is useful.
- End with a real action or destination, not merely “Tour complete.”
- Review tour copy whenever navigation, buttons, routes, or third-party workflows change.
- Version a tour when a material change should allow visitors to see it again.

## Maintenance Implications

Walkthroughs are coupled to page structure. A renamed button, removed element, changed route, or redesigned navigation can break a step even when the rest of the website still works.

Maintenance should include:

- Automated checks that configured target elements exist where possible.
- Manual desktop, mobile, keyboard, and touch testing after relevant site changes.
- Periodic review of tour copy and screenshots or videos.
- Analytics review for unusual exits or broken paths.
- A documented owner for approving content changes.

Future proposals should identify Guided Help setup and ongoing walkthrough maintenance as separate line items rather than absorbing them into general website maintenance by default.

## Potential Service Packaging

### Guided Help Starter

- Branded launcher.
- Up to three short tours.
- Browser-only completion state.
- Basic event tracking.
- Initial testing and handoff.

### Guided Help Plus

- Additional tours and richer media.
- Multi-page or conditional steps.
- Enhanced reporting.
- Quarterly content and selector review.

### Application Onboarding

- Authenticated, role-aware tours.
- Cross-device state.
- Admin or visual editing workflow.
- Advanced analytics and integration work.

Pricing should be developed after the pilot records actual design, writing, implementation, testing, and maintenance time.

## Exploration Questions

Before implementation, determine:

1. Is the pilot for first-time visitors, all visitors, applicants, property owners, or another audience?
2. Should Guided Help open only on request, or should a one-time introduction appear automatically?
3. Which user task currently creates the most confusion?
4. Is a video genuinely useful, and who will produce and maintain it?
5. Must a tour cross multiple pages or enter a third-party embed?
6. Which analytics platform and consent method will the website use?
7. Who owns and approves walkthrough copy?
8. How frequently is the website expected to change?
9. Should visitors resume an unfinished tour?
10. Does the client want simple usage counts or detailed reporting?
11. Is editing by a non-developer a future requirement?
12. Which parts can become a reusable internal package without exposing client-specific content?

## Recommended Next Steps

1. Treat Guided Help as an optional pilot or change order for Global Properties Realty.
2. Confirm one high-value visitor journey for the first prototype.
3. Create a small interaction prototype using the approved website concept.
4. Compare one lightweight library against a minimal custom implementation.
5. Test positioning, keyboard behavior, mobile reflow, missing targets, and page transitions.
6. Define privacy-safe analytics events and capture baseline journey data.
7. Estimate the actual build and maintenance effort after the prototype.
8. Decide whether to include the pilot at no charge as documented R&D, price it separately, or defer it to a later phase.
9. Extract the validated engine, configuration format, QA checklist, and authoring guide into a reusable internal starter for future projects.

## Handoff Deliverables for a Completed Pilot

A future implementation handoff should include:

- Source code and dependency/license notes.
- Tour configuration and content inventory.
- Map of each step to its target element and page.
- Instructions for adding, editing, versioning, disabling, and testing a tour.
- Browser storage keys or backend data definitions.
- Analytics event definitions and reporting location.
- Accessibility and responsive QA results.
- Known limitations and third-party boundaries.
- Maintenance owner and recommended review schedule.
- Reusable engine files separated from Global Properties Realty branding and content.

## Current Status

Status: concept documented; no implementation or vendor selection has been approved.

Reference material currently available: screenshots of the Flexmls Guided Help launcher, walkthrough selection menu, introductory modal, video modal, anchored navigation tooltips, element highlighting, and step controls supplied on July 2, 2026.
