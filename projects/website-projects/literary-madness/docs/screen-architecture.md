# Literary Madness Screen Architecture

## Experience Model

The first release will be one responsive event page powered by structured tournament data. It will present the reconstructed tournament as a completed historical event, not as a live election.

The page should answer three questions in order:

1. What is Literary Madness?
2. Who competed and how did the tournament unfold?
3. Who won?

## Page Structure

### 1. Site header

- Literary Madness wordmark
- Compact navigation: Matchups, Bracket, Champion, About
- “Archived Tournament” status
- No unverified year in the primary interface

### 2. Hero introduction

- Heroes versus Villains premise
- Short explanation of the library reading challenge
- Primary action: Explore the bracket
- Secondary action: Meet the contestants
- Decorative cosmic/book artwork that does not contain essential text

### 3. Tournament summary

- Completed-event status
- 16 contestants
- Two leagues
- Four rounds
- Champion: Matilda
- Short archival note explaining that vote totals and the exact year were not preserved

### 4. League overview

- Heroes League card using teal styling
- Villains League card using coral styling
- Each card identifies its league champion and links to its matchups

### 5. Matchups

- Round selector or tabs: Opening Round, League Semifinals, League Finals, Championship
- Matchup cards generated from `tournament.json`
- Contestant names and source works
- Clear winner state using text, iconography, and color
- Optional reading-list action only after replacement links are verified

### 6. Full bracket

- Connected bracket presentation on wide screens
- League-specific sides converging on the championship
- Champion emphasized in yellow
- Equivalent ordered matchup list available to assistive technology

### 7. Champion feature

- Matilda champion announcement
- Preserved archival quotation only if rights and quotation length are reviewed
- Path to victory: Lisbeth Salander, Arya Stark, Black Panther, Dolores Umbridge

### 8. About the redesign

- Concise project history
- Explanation that the site was inherited as a 2019 redesign challenge
- Clear distinction between original campaign material and the new implementation
- Link to portfolio case-study material when available

### 9. Footer

- Archive and rights note
- Portfolio attribution
- No implication of current library affiliation

## Responsive Bracket Behavior

### Wide screens: 1024px and above

- Display a traditional multi-column bracket.
- Keep Heroes and Villains visually distinct.
- Allow both league paths to converge on one central championship.
- Do not require horizontal page scrolling.

### Medium screens: 640px–1023px

- Separate the two league brackets into stacked sections.
- Use horizontally scrollable round columns inside each labeled bracket only if every column remains keyboard-accessible.
- Keep the championship as a separate convergence panel.

### Small screens: below 640px

- Replace connecting-line dependency with a round-by-round card sequence.
- Provide a sticky or compact round selector.
- State advancement explicitly: “Matilda advances.”
- Keep source matchup relationships in the data, not in visual lines alone.
- Avoid shrinking the desktop bracket into unreadable miniature text.

## Core Components

- `SiteHeader`
- `Hero`
- `TournamentSummary`
- `LeagueCard`
- `RoundSelector`
- `MatchupCard`
- `ContestantSummary`
- `BracketView`
- `AccessibleMatchupList`
- `ChampionFeature`
- `ProjectContext`
- `SiteFooter`

These names describe responsibilities; they do not require a JavaScript framework.

## Interaction States

The historical first release needs:

- Default
- Hover
- Keyboard focus
- Winner
- Eliminated
- Current round selection
- Missing or unavailable reading-list link

It does not need vote-selected, vote-submitted, or live-results states.

## Content Rules

- Never display an unverified year as fact.
- Never invent vote totals.
- Use corrected character names in primary copy while preserving archival variants in project documentation.
- Do not publish historical Booksite URLs until tested or replaced.
- Do not use artwork with unclear rights as functional page content.
- All essential words must be real text.

## Accessibility Baseline

- One clear `h1` and logical heading order
- Landmarks for header, navigation, main content, and footer
- Skip link
- Visible focus treatment
- Winner communicated in text, not color alone
- Minimum 44px touch targets where practical
- Bracket relationships represented in an ordered textual form
- No hidden essential information on hover
- Reduced-motion support

