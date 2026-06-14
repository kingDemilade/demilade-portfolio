# Services Page Handoff

Date: June 14, 2026

This handoff summarizes the Demilade Creatives `services.html` revamp completed during this chat.

## Primary Files Changed

- `services.html`
- `css/style.css`
- `js/main.js`
- `index.html`
- `projects.html`
- `contact.html`
- `thank-you.html`

## Services Page Content Updates

The services page was reworked around three main service areas:

- Website Design & Development Packages
- Additional Creative Services
- Combined Service Packages

The page now uses a guided “choose your path” flow. Each tabbed service section starts with a skeleton-style prompt instead of showing every package immediately.

## Website Package Names

The Website Design & Development package names were renamed:

- `Launch` became `Launchpad`
- `Starter` became `Foundation`
- `Professional` became `Momentum`
- `Premium` became `Signature`

These names were updated in:

- package tabs
- package card titles
- comparison table headers
- “Everything in…” feature copy
- combined package feature references

The underlying IDs and data attributes were intentionally left unchanged, such as `data-package-tab="launch"` and `id="package-launch"`, so the JavaScript behavior remains stable.

## Combined Package Names

The Combined Service Package names were renamed:

- `Launch Kit` became `Launch Suite`
- `Brand Presence` became `Presence Suite`
- `Campaign Buildout` became `Campaign Suite`

These names were updated in:

- combined package tabs
- combined package card titles
- related feature copy

The underlying data attributes were left unchanged, such as `data-bundle-tab="launch-kit"`, to avoid unnecessary JavaScript changes.

## Tabbing Behavior

Three tabbing systems now exist on the services page:

- Website packages
- Additional Creative Services
- Combined Service Packages

Each tab system includes:

- a `View All` option
- individual selection tabs
- an initial skeleton prompt
- cards hidden on page load

The `View All` button now doubles as a reset button:

- On first click, `View All` reveals all cards.
- The button label changes to `Reset`.
- On second click, `Reset` clears the selection, hides the cards, and restores the skeleton prompt.

There are no separate reset buttons anymore.

## Website Comparison Accordion

The “Compare package highlights” section was converted into an accordion-style section.

Current behavior:

- The `Show Comparison` button is visible on page load.
- The comparison table is closed on page load.
- Clicking `Show Comparison` opens the table and changes the label to `Hide Comparison`.
- Clicking `Hide Comparison` closes the table and restores the `Show Comparison` label.
- Selecting any Website package tab opens the comparison table.
- Clicking `Reset` from the Website package `View All` tab clears the package selection and collapses the comparison table.

The comparison styling was also updated to better match the Add-On Services table in both light and dark mode.

## Add-On Services Accordion

The Add-On Services table was also converted into an accordion-style section.

Current behavior:

- The section is closed on page load.
- The `Show Add-Ons` button is visible.
- Clicking `Show Add-Ons` opens the table and changes the label to `Hide Add-Ons`.
- Clicking `Hide Add-Ons` closes the table.

This uses the same visual toggle style as the comparison section.

## Combined Services Background

The Combined Service Packages section was updated to use the same grid-like background treatment as the Web Design & Development packages section.

This effect is applied with a `::before` pseudo-element on `.combined-services-section`.

## Scroll-To-Top Button

A global scroll-to-top button was added for Demilade Creatives pages.

Explicit button markup was added to:

- `index.html`
- `projects.html`
- `services.html`
- `contact.html`

`thank-you.html` now loads `js/main.js` so it can participate in shared behavior.

The JavaScript also auto-creates a scroll-to-top button on pages that load `js/main.js` but do not already include one.

Current behavior:

- Button appears after scrolling past `180px`.
- Button scrolls smoothly to the top.
- Button respects existing `.scroll-top` buttons so duplicate buttons are avoided.

## JavaScript Notes

New or expanded logic in `js/main.js` includes:

- Website package tab filtering and reset toggle behavior
- Additional Creative Services tab filtering and reset toggle behavior
- Combined Services tab filtering and reset toggle behavior
- Website comparison accordion behavior
- Add-On Services accordion behavior
- Global scroll-to-top behavior

The comparison and add-on accordions keep labels, `aria-expanded`, hidden state, and arrow rotation in sync.

## CSS Notes

New or expanded styles in `css/style.css` include:

- five-column Website package tab layout
- skeleton prompt styling
- view-all grid layout for Website packages
- comparison accordion toggle styling
- updated comparison table light/dark mode styling
- creative services tab filtering layout
- combined services grid background
- combined package card styling
- add-on services table styling
- global scroll-to-top button styling

## Validation Completed

The following checks were run successfully during the work:

- `python3 -m html.parser services.html`
- `python3 -m html.parser index.html`
- `python3 -m html.parser projects.html`
- `python3 -m html.parser contact.html`
- `python3 -m html.parser thank-you.html`
- `git diff --check`

JavaScript syntax validation with Node was attempted earlier, but Node was not installed in the environment.

## Suggested Manual QA

Before publishing, manually test:

- Website package tabs on desktop and mobile
- `View All` to `Reset` behavior in all three tab systems
- comparison table open/close behavior
- add-on services open/close behavior
- dark mode styling for comparison and add-on sections
- scroll-to-top button visibility after scrolling
- scroll-to-top behavior on `index.html`, `projects.html`, `services.html`, `contact.html`, and `thank-you.html`

