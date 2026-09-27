# Literary Madness Mobile UI and Bracket Refinement Log

**Date:** July 14, 2026  
**Scope:** Later-stage redesign refinements for the Literary Madness prototype, focused on mobile navigation, full bracket behavior, champion presentation, and responsive polish.

## Summary

This work session refined the Literary Madness redesign from a functional responsive prototype into a more intentional mobile experience. The largest shift was the Full Bracket section: mobile no longer behaves like a compressed desktop bracket or a simple vertical stack. It now works as a horizontal swipeable bracket lane that communicates tournament progression from opening rounds to champion.

The session also improved the mobile header/navigation pattern, clarified title alignment rules, adjusted champion and matchup card presentation, and documented several design decisions around what should differ between desktop and mobile.

## Mobile Navigation

The header was updated so navigation works better on small screens.

Changes made:

- Added a hamburger menu button for mobile.
- Kept the desktop navigation visible and traditional.
- Made the mobile header fixed so it remains available while the user scrolls.
- Added JavaScript behavior to open and close the menu.
- Closed the menu when a user selects a nav link.
- Added Escape-key closing behavior.
- Added top spacing and scroll padding so anchor links do not hide behind the fixed mobile header.
- Moved the “Archived Tournament” pill into the primary navigation list with Matchups, Bracket, and About.

Design rationale:

- The page is long, especially after expanding the tournament and bracket sections.
- A fixed mobile nav reduces the need to scroll back to the top.
- The archive-status pill belongs with navigation because it is part of the page’s top-level context.

## Full Bracket Mobile Redesign

The Full Bracket section received the most iteration.

The mobile bracket was reshaped into a horizontal swipe lane inspired by sports bracket interfaces. Instead of stacking every round vertically, mobile now presents bracket stages as horizontally scrollable columns.

Final mobile sequence:

1. Road to the Final intro card
2. Opening Round column with Heroes and Villains paired vertically
3. Semifinals column with Heroes and Villains paired vertically
4. League Final column with Heroes and Villains paired vertically
5. Championship Matchup card
6. Champion/Winner card

Design rationale:

- The tournament should visually “funnel” from many contestants to one winner.
- Heroes and Villains should stay visually paired by round on mobile.
- The user should swipe through the bracket rather than scroll through a long disconnected stack.
- The mobile bracket can have a unique structure while preserving the desktop bracket layout.

## Swipe Cues

To make the horizontal bracket interaction more discoverable, swipe cues were added.

Changes made:

- Added a mobile hint explaining that users can swipe across the bracket.
- Added an animated right-to-left cue to the hint.
- Added circular swipe icons around the Road to the Final card to visually reinforce the interaction.
- Added reduced-motion safeguards so animations stop for users who prefer reduced motion.

Design rationale:

- Horizontal scrolling is not always obvious.
- The cue needed to be visually connected to the bracket itself, not just explained in text.
- The animation should be noticeable but not overwhelming.

## Road to the Final Card

The Road to the Final card was refined for mobile.

Changes made:

- Converted the title into a narrow vertical card in the first bracket column.
- Used vertical writing mode for the title.
- Added a multicolored border treatment using layered backgrounds.
- Hid the extra multicolored divider line on mobile.
- Adjusted the title card height so it is centered in the opening-round area without taking excessive vertical space.

Important implementation note:

CSS gradients cannot be used directly as a `border-color`. The working approach uses a transparent border plus layered backgrounds:

```css
background:
  linear-gradient(rgb(7 23 30 / 100%), rgb(7 23 30 / 100%)) padding-box,
  linear-gradient(180deg, var(--hero), var(--champion), var(--villain)) border-box;
```

## Bracket Round Spacing

The mobile bracket round columns were adjusted to use vertical space more intentionally.

Changes made:

- Reduced the vertical height from the earlier oversized treatment to a more compact viewport-based height.
- Used vertical spacing to make semifinals visually align with the opening-round matchups that feed into them.
- Centered league-final matchups to continue the funnel effect.

Design rationale:

- The earlier mobile bracket used too much vertical space.
- Semifinal matchups should visually sit between the opening matchups that created them.
- The bracket should feel like progression, not just adjacent cards.

## Championship Matchup and Champion Card

The Championship portion was refined separately for desktop and mobile.

Changes made:

- Added league champion images to the Championship Matchup card on mobile.
- Hid those matchup images on desktop so the desktop card stays compact.
- Split the mobile Championship and Champion moments into separate swipe destinations.
- Added a Champion spotlight button so the winner card can be targeted directly.
- Later exposed the Champion spotlight button on desktop as well.
- Made the Champion card more celebratory with a stronger yellow treatment, larger image, star detail, winner badge, and bolder Matilda type.
- Adjusted the Champion card column width after it collapsed into a narrow implicit grid column.
- Reordered the Champion card on mobile to show Winner badge, larger Matilda image, then Matilda name.

Design rationale:

- The Championship Matchup card introduces the final face-off.
- The Champion card should feel like the final payoff.
- Desktop and mobile have different space constraints, so image usage differs between them.

## Spotlight Round Controls

The bracket spotlight controls were refined as the mobile bracket became more unique.

Changes made:

- Added a Champion spotlight option.
- Wired the Champion option to the winner card.
- Hid the spotlight controls on mobile after the mobile swipe lane became the preferred interaction.
- Kept the controls available on desktop.

Implementation note:

The first mobile hide attempt did not work because a later `@media (max-width: 30rem)` rule restored `.round-spotlight` to `display: grid`. The final fix hides it in the mobile cascade where later rules do not override it.

## Title Alignment Rules

Several section titles were standardized.

Current alignment intent:

- Desktop: left-aligned
- Mobile: centered

Titles included:

- `#about-title` / `.about-title`
- `#bracket-title` / `.bracket-title`
- `#leagues-title` / `.leagues-title`
- `#matchups-title` / `.matchups-title`
- `#summary-title` / `.summary-title`

Design rationale:

- Desktop benefits from stronger editorial left alignment.
- Mobile benefits from centered section landmarks because the layout is narrower and more poster-like.

## League Champion Cards

The Two Leagues section was refined for mobile.

Changes made:

- Added mobile tab buttons for Heroes League Champion and Villains League Champion.
- Added an empty state prompting the user to select a league champion.
- Kept both champion cards visible on desktop.
- Removed the old card link treatment.
- Centered the champion badge and name treatment.

Design rationale:

- The two large league cards work well side by side on desktop.
- On mobile, showing both large cards at once felt too long and repetitive.
- The tabbed pattern keeps the section interactive and compact.

## Matchup Cards

The Tournament Matchups section was refined to feel less wordy and more like face-offs.

Changes made:

- Removed all `<h5>` matchup labels such as “Matchup H1” and “Matchup V1.”
- Removed the unused `.matchup h5` CSS block.
- Retained accessible `aria-label` descriptions on matchup face-offs.
- Kept visible winner ribbons.

Design rationale:

- The matchup labels added clutter without helping users understand the tournament.
- The visible contestants, VS marker, and winner ribbon already communicate the matchup structure.

## Scroll-to-Top Button

The scroll-to-top button was iterated for mobile and desktop polish.

Changes made:

- Replaced the original bottom link with a floating circular button.
- Added an upward chevron.
- Added a glowing effect that alternates between hero and villain colors.
- Adjusted mobile sizing and positioning to avoid horizontal overflow.
- Restored the stronger desktop-like glow on mobile after testing.

Design rationale:

- The long single-page layout benefits from a persistent return-to-top affordance.
- The glow connects the control visually to the hero/villain theme.

## Current Design Direction

The project now treats desktop and mobile as related but not identical experiences.

Desktop priorities:

- Combined bracket overview
- Larger editorial layout
- Visible primary nav
- Compact championship matchup
- Spotlight controls for bracket focus

Mobile priorities:

- Fixed hamburger navigation
- Swipeable bracket progression
- Paired Heroes/Villains rounds
- Strong Champion payoff card
- Reduced clutter
- Interaction cues for horizontal scrolling

## Follow-Up Considerations

Potential next checks:

- Test mobile hamburger navigation on an actual phone.
- Verify fixed header spacing for all anchor links.
- Review the mobile bracket swipe cues after using the page naturally.
- Confirm the Champion card does not overlap the scroll-to-top button near the bottom of the viewport.
- Run a quick 390px, 430px, and 500px responsive pass.
- Revisit the case study after final UI decisions settle, so the written story reflects the final mobile bracket strategy.

