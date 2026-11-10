# Literary Madness Redesign Brief

**Brief date:** July 5, 2026  
**Project type:** Portfolio redesign of an inherited public-library event website  
**Working direction:** A responsive, accessible literary tournament that preserves the original retro-cosmic personality

## Project Background

Literary Madness was a website project inherited in 2019. The Webmaster supervising the work offered the site as a redesign challenge. At that time, the project was not completed.

The redesign revisits that challenge with stronger design and development experience, assisted by modern AI tools. The purpose is not to rewrite history or imply ownership of the original concept and artwork. It is to demonstrate how the inherited experience could be thoughtfully reimagined today.

## Design Challenge

Transform a fixed-width, image-based tournament page into a genuine website without sanding away the charm that made the original memorable.

The redesign needs to answer two questions at once:

1. How can a literary tournament become easy to use, update, and understand on any device?
2. How can modernization strengthen the original personality instead of replacing it with a generic library interface?

## Product Vision

Literary Madness should feel like a month-long literary sporting event: spirited, theatrical, welcoming, and easy to follow. Visitors should be able to understand the current round, compare contestants, discover related books, and see how the tournament is progressing without deciphering a large static graphic.

## Primary Goals

1. Preserve the Heroes versus Villains identity and retro-cosmic energy.
2. Make the complete experience responsive from small phones through large desktops.
3. Represent all meaningful content as accessible, semantic text and controls.
4. Make contestants and reading recommendations easy to explore.
5. Make tournament stages and winners easy to understand.
6. Create a reusable system that could support new years and rounds without duplicating pages.
7. Present the work honestly as a portfolio redesign of an inherited project.

## Initial Audience

### Primary audience

- Library patrons participating in a community reading event
- Teens and adults who enjoy popular fiction, comics, fantasy, and literary characters
- Visitors discovering books through familiar characters

### Portfolio audience

- Designers, developers, hiring managers, and collaborators evaluating the redesign process
- Stakeholders interested in accessibility, content structure, and modernization of legacy websites

## Core User Needs

A visitor should be able to:

- Understand Literary Madness quickly
- See which tournament year and round is being displayed
- Distinguish heroes from villains
- Compare the contestants in each matchup
- Learn enough about a contestant to become curious
- Open an associated library reading list
- Identify matchup winners and tournament progress
- View the complete bracket
- Use the experience by keyboard and on a mobile device

If voting is introduced later, the visitor should also be able to cast a vote confidently and understand whether it was accepted.

## Recommended First Release

The first release should be a polished portfolio prototype centered on one reconstructed tournament. It should include:

- Responsive event introduction
- Current-round summary
- Heroes League matchup section
- Villains League matchup section
- Accessible contestant cards
- Reading-list actions
- Responsive full bracket
- Clear winner and advancement states
- About-the-project or case-study context
- Documented historical uncertainty where applicable

The first release should not depend on a production voting backend. A clearly labeled demonstration voting interaction may be considered, but it must not pretend to record real public votes.

## Proposed Page Architecture

### Option recommended for the first release

Use a focused single-page event experience with anchored navigation:

1. Header and year/round context
2. Event introduction
3. Current matchups
4. Heroes League
5. Villains League
6. Full bracket
7. Champion or final result
8. About the project

An archive selector can later introduce additional years without making the initial experience feel fragmented.

## Content Model

The interface should be generated from structured tournament data rather than manually duplicated pages.

### Tournament

- Year
- Title
- Status
- Current round
- Start and end dates, when known
- Introduction
- Champion

### Contestant

- Name
- League
- Source work or franchise
- Short description
- Image or illustration
- Accessible image description
- Reading-list label
- Reading-list URL

### Matchup

- Round
- League
- First contestant
- Second contestant
- Voting or display status
- Winner
- Optional vote totals for a demonstration dataset

This model will allow the same components to render opening rounds, semifinals, and the championship.

## Visual Direction

The redesign should evolve the original visual language rather than imitate every pixel.

### Preserve

- Dark blue-gray space backdrop
- Teal for heroes
- Coral or crimson for villains
- Yellow for champions and decisive actions
- Orbital lines, stars, planets, and book imagery
- Bold, slightly eccentric display typography
- League-versus-league theatricality

### Refine

- Use cleaner spacing and a stronger type hierarchy.
- Let typography remain playful in headings while keeping body text highly readable.
- Use cosmic decoration as atmosphere, not as content-bearing imagery.
- Develop cards and bracket nodes from a consistent component system.
- Use motion sparingly for round changes, winner advancement, and bracket connections.
- Respect `prefers-reduced-motion`.

### Avoid

- A generic corporate-library aesthetic
- Flattening the entire experience into one oversized bracket
- Recreating textual content inside images
- Excessive animation or game effects that compete with reading
- Using unlicensed character imagery merely because it appears in the archive

## Interaction Direction

### Contestant cards

Each card should expose the contestant name, source context, league, advancement state, and reading-list action. The entire card should not become one ambiguous link if it contains multiple actions.

### Tournament navigation

Users should be able to move between rounds or select a year while always knowing their current context.

### Bracket

On large screens, show a familiar connected bracket. On smaller screens, use a round-by-round or horizontally navigable presentation with clear labels; do not merely shrink the desktop bracket until it becomes unreadable.

### Voting

If a prototype vote interaction is included, label it as a demonstration. Provide selected, submitted, success, closed, and error states. A production version would require a separate backend and governance plan.

## Accessibility Requirements

The redesign should target WCAG 2.2 Level AA and include:

- Semantic page landmarks and heading hierarchy
- Keyboard access for all interactive elements
- Strong, visible focus indicators
- Sufficient text and interface contrast
- Text alternatives for meaningful artwork
- Real text at usable responsive sizes
- Touch targets sized for mobile use
- Status announcements for dynamic interactions
- No essential meaning communicated by color alone
- Reduced-motion support
- A usable bracket alternative for screen readers and narrow screens

The bracket may require two coordinated representations: a visual diagram and a logically ordered matchup list that communicates equivalent information.

## Technical Direction

For the first release, a lightweight front-end implementation is sufficient:

- Semantic HTML
- Modern CSS with custom properties and responsive layout
- Modular JavaScript only where interaction adds value
- Structured JSON or JavaScript data for tournaments and contestants
- Reusable rendering functions or components
- No framework unless the interaction or future content requirements justify one

The implementation should remain understandable as a portfolio artifact. Technology should support the concept rather than become the concept.

## Content and Rights Guardrails

- Keep the inherited reference files unchanged.
- Clearly credit the project as an inherited redesign challenge.
- Do not imply authorship of original illustrations or campaign strategy.
- Confirm rights before publicly reusing original artwork or character images.
- Prefer newly created visual assets, licensed imagery, abstract character treatments, or typography-led cards if rights are unclear.
- Verify or replace old reading-list and event links before publishing.
- Label reconstructed historical data when the archive does not establish it conclusively.

## Measures of Success

The first release succeeds if:

- A first-time visitor can explain the event after viewing the opening section.
- The current round and winners are understandable without relying only on color.
- All content and actions work at approximately 320px viewport width and above.
- The primary experience can be completed by keyboard.
- Screen-reader users receive an equivalent understanding of matchups and advancement.
- A new tournament round can be added through data changes rather than copied page markup.
- The result still feels unmistakably like Literary Madness.

## Out of Scope for the First Release

- Production vote storage
- User accounts
- Anti-fraud systems
- Live library-catalog integration
- Administrative content management
- Verified reconstruction of every archived year
- Public reuse of assets whose rights have not been confirmed

## Open Decisions

Before visual implementation begins, decide:

1. Whether the first prototype reconstructs the later Matilda tournament or uses an original demonstration roster.
2. Whether original artwork will appear only in case-study comparisons or also in the redesign.
3. Whether the redesign is presented primarily as a functioning event prototype, a portfolio case study, or both.
4. Whether a demonstration voting interaction adds enough value to the first release.
5. What library identity, if any, should appear in the reconstructed experience.

## Recommended Next Move

Create a content-reconstruction document for one tournament. List its contestants, leagues, matchups, advancement results, source works, and available reading-list links. Mark every uncertain field. That dataset will reveal whether the first design can responsibly use the historical tournament or should use an original demonstration roster.
