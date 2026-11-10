# Literary Madness Redesign Build Plan

**Status:** Complete through Phase 6 on July 7, 2026  
**Prototype state:** Portfolio-ready local implementation; not deployed as a live library event

## Current State

Research and planning are complete enough to begin implementation:

- The inherited site has been audited.
- The redesign brief defines the product direction.
- The later/root tournament has been reconstructed.
- The tournament now exists as structured JSON.
- The first-release screen architecture is defined.

## Phase 1: Semantic Foundation

- Create the page shell in the `redesign` directory.
- Add skip navigation, landmarks, headings, and anchored sections.
- Render tournament facts from `data/tournament.json`.
- Build matchup cards without final decorative styling.
- Provide the ordered textual bracket first.

**Completion check:** Every contestant, matchup, winner, and round can be understood with CSS and JavaScript disabled.

## Phase 2: Design System

- Define color, typography, spacing, border, shadow, and motion tokens.
- Reinterpret the dark cosmic background, teal heroes, coral villains, and yellow champion treatment.
- Select legally usable fonts and decorative assets.
- Establish reusable card, button, badge, and section patterns.

**Completion check:** The experience feels recognizably Literary Madness without relying on the original flattened artwork.

## Phase 3: Responsive Tournament Interface

- Implement the wide-screen connected bracket.
- Implement stacked league brackets for medium screens.
- Implement the round-by-round small-screen sequence.
- Add a round selector where it improves navigation.
- Keep an equivalent accessible matchup list.

**Completion check:** The bracket remains understandable at 320px, 768px, and 1440px widths.

## Phase 4: Progressive Enhancement

- Add restrained round transitions and winner advancement effects.
- Add active navigation state where useful.
- Add unavailable-link handling for reading lists.
- Respect reduced-motion preferences.
- Avoid adding simulated voting unless separately approved.

**Completion check:** JavaScript improves the experience but is not required to understand the tournament.

## Phase 5: Verification

- Validate HTML and JSON.
- Test keyboard navigation and focus order.
- Test color contrast.
- Inspect screen-reader reading order.
- Test narrow, medium, and wide layouts.
- Check for broken internal links and missing assets.
- Verify that no unconfirmed year, vote total, affiliation, or asset ownership is presented as fact.

## Phase 6: Portfolio Case Study

- Document the inherited challenge and 2019 context.
- Show the fixed-image and image-map limitations.
- Explain the reconstruction process and archival uncertainty.
- Compare original and redesigned information architecture.
- Highlight responsive bracket and accessibility decisions.
- Credit original work and describe AI assistance accurately.

**Completion note:** The project case study and root README now document the inherited challenge, archival analysis, reconstruction, information architecture, visual system, responsive bracket, accessibility decisions, verification findings, rights boundaries, and AI assistance.

## Deferred Work

- Production voting backend
- Live results
- User accounts
- Library-catalog integration
- Content-management interface
- Additional tournament years
- Public use of unverified artwork or links

## Next Implementation Action

The six-phase prototype plan is complete. The next work should be publication preparation: cross-browser and screen-reader testing, dedicated 320px emulation, favicon and social metadata, rights review, and integration into the main portfolio navigation.
