# Literary Madness Website Redesign

## Returning to an Unfinished Challenge

In 2019, I inherited Literary Madness as a website project. My supervisor, the Webmaster, gave me a challenge: redesign it.

I was not in the right space to take on that challenge at the time. The project required more than making an old page look newer. It needed archival interpretation, content reconstruction, responsive interface design, accessibility work, and a maintainable technical model. I did not yet have the process or confidence to bring those pieces together.

Years later, I returned to the project with stronger judgment and AI-assisted development tools. The goal was not to erase that earlier moment. It was to answer the original challenge honestly and show what had changed in how I approach design problems.

## The Inherited Website

Literary Madness was a public-library reading event presented as a tournament. Famous fictional heroes and villains competed through weekly rounds until the winning hero and villain met in a championship.

The original experience had real personality:

- Heroes and Villains League identities
- A dark retro-cosmic setting
- Teal, coral, and yellow tournament colors
- Playful science-fiction typography
- A complete elimination bracket
- Character links intended to encourage book discovery

The concept was immediately understandable and more spirited than a conventional library reading list. Its weakness was not the idea. Its weakness was that almost the entire website had been flattened into images.

## The Original Technical Model

The inherited page was a fixed `974px` column assembled from JPEGs. Headings, instructions, character names, matchups, and bracket results were all embedded inside those images.

Invisible HTML image maps placed clickable rectangles over contestants. The stylesheet contained only three meaningful rules: a background color, a fixed body width, and image-border removal.

That implementation caused several problems:

- Screen readers could not access the content.
- Text could not reflow or scale for mobile devices.
- Keyboard interaction was unclear.
- Search engines could not understand the page.
- Editors had to update artwork and pixel coordinates for every round.
- Responsive resizing could break the invisible clickable regions.
- Every weekly state duplicated the entire page and its assets.

There was also no voting form, vote storage, or result logic in the surviving files. Although the campaign invited visitors to decide winners, the archive did not preserve how voting actually occurred.

## The Archive Was Not Fully Reliable

The supplied files contained 2017 and 2019 directories, each with Week 1 through Week 4 and Championship folders. At first glance, that appeared to be a clean two-year history.

File comparison told a different story:

- The 2017 and 2019 weekly HTML files were byte-for-byte duplicates.
- Week 2 and Week 3 also reused identical HTML.
- Every copy of the stylesheet was identical.
- The root page contained later Booksite identifiers and a different completed bracket.
- Legacy files such as `.DS_Store`, `Thumbs.db`, and a nested `images/images` folder remained in the archive.

The visible root bracket was trustworthy enough to reconstruct a tournament, but the folder names were not trustworthy enough to assert its year.

That changed an important product decision: the redesign would say **Archived Tournament**, not “2019 Tournament.” Unknown information would remain unknown.

## Reconstructing the Tournament

Before designing a new interface, I treated the old bracket as a source document.

The surviving artwork established:

- 16 contestants
- Eight opening matchups
- Four league semifinals
- Two league finals
- One championship
- Every advancement result
- Matilda as Heroes League champion
- Dolores Umbridge as Villains League champion
- Matilda as the overall Literary Madness champion

The original HTML also preserved Booksite group identifiers for every contestant. Those IDs remain in the structured project data as archival metadata, but the old unsecured URLs are not presented as verified destinations.

No vote totals were invented. Character-source descriptions that were not explicit in the archive were marked for verification.

## Redesign Strategy

The redesign followed one central principle:

> Preserve the event’s personality while replacing its fragile implementation.

This meant avoiding two easy but unhelpful directions. I did not reproduce the page as another large graphic, and I did not turn it into a generic institutional library website.

Instead, the new experience keeps the theatrical tournament tone while making its content structural, responsive, and understandable.

## Information Architecture

The new single-page experience is organized around the questions a visitor is likely to ask:

1. What is Literary Madness?
2. What is the status of this tournament?
3. Who represented each league?
4. What happened in every matchup?
5. How did the full bracket progress?
6. Who won?
7. What is the context behind this redesign?

The page now includes:

- Event introduction
- Tournament summary
- League champion cards
- Complete semantic matchup lists
- Responsive visual bracket
- Accessible ordered bracket summary
- Champion feature
- Project-history disclosure

## Structured Content Instead of Copied Pages

The reconstructed tournament is stored in `tournament.json`. It defines contestants, leagues, rounds, matchups, winners, archival IDs, provenance, and uncertainty flags.

This is a significant change from the original maintenance model. A new tournament no longer needs to be expressed as five duplicated websites. The same content model can eventually generate different rounds and years through reusable components.

The initial HTML also contains the complete tournament directly. This deliberate redundancy ensures that the prototype remains understandable if JavaScript fails or is disabled.

## Visual Direction

The redesign returns to the original visual vocabulary without copying the original flattened layouts.

The system uses:

- Deep blue-gray space backgrounds
- Teal for heroes
- Coral and crimson for villains
- Yellow for championship moments
- Oversized condensed display typography
- Stars, orbital lines, and a CSS-built planet
- Bold cards and tournament labels
- Restrained movement during section entry and bracket focus

All decorative space artwork is created with CSS. Essential words remain real text. The redesign introduces no unverified character artwork or third-party visual asset dependency.

## Responsive Bracket Design

The bracket was the central responsive challenge.

On large screens, each league uses a familiar multi-column progression:

- Four opening matchups
- Two semifinals
- One league final
- One league champion

Both champions then meet in a yellow championship panel.

On tablet and mobile screens, the bracket does not shrink into a miniature diagram. It changes form. Rounds become a vertical sequence of readable matchup cards with explicit winners and advancement.

This preserves the tournament logic instead of preserving one rigid geometry.

## Accessibility Decisions

The redesign was built around semantic content before visual polish.

Accessibility work includes:

- Skip navigation
- Page landmarks
- Logical heading hierarchy
- Native links and buttons
- Strong visible focus treatments
- Winner labels that do not depend on color
- Minimum mobile target sizing
- Reduced-motion support
- Full content availability without JavaScript
- An ordered text alternative to the visual bracket
- Live status announcements for bracket spotlight changes
- Pressed-state semantics for round controls

The visual bracket is hidden from assistive technology because its equivalent results appear immediately afterward in logical order. This avoids forcing screen-reader users through a diagram whose meaning depends on spatial lines.

## Progressive Interaction

JavaScript enhances rather than owns the experience.

It adds:

- Active section navigation
- Reveal-on-scroll motion
- Round spotlight controls
- Full, opening, semifinal, league-final, and championship focus states
- Accessible state and status updates

There is deliberately no simulated voting interface. A button that appears to collect a vote without a real voting system would undermine the historical honesty of the project.

## Verification and Corrections

The completed prototype was checked at desktop, tablet, and narrow/mobile widths. Data references, fragment links, duplicate IDs, local resources, headings, contrast, motion preferences, and progressive enhancement were reviewed.

The audit found one meaningful contrast defect. Cream text over the bright-coral portion of the Villains card measured `3.33:1`, below the normal-text requirement. Deepening that surface produced `4.91:1` while keeping bright coral elsewhere in the identity.

Other key combinations measured between `6.53:1` and `13.47:1`.

The project verification report records both completed checks and remaining pre-publication work. Formal cross-browser, screen-reader, 320px emulation, favicon, and rights checks are still identified rather than implied complete.

## Role of AI and Codex

Codex supported the project as a collaborative research, implementation, and verification tool.

AI assistance helped with:

- Inventorying the inherited files
- Comparing duplicated HTML and CSS
- Reading the archived tournament artwork
- Reconstructing matchups and advancement
- Organizing uncertainty and provenance
- Drafting the structured dataset
- Implementing semantic HTML, CSS, and JavaScript
- Rendering responsive browser checks
- Calculating contrast ratios
- Recording decisions and verification results

AI did not resolve missing historical facts by guessing. The exact tournament year, vote totals, asset ownership, and original voting workflow remain explicitly unverified.

## Outcome

The redesign turns Literary Madness from a fixed image map into a responsive event experience with structured content, semantic markup, accessible results, and a maintainable tournament model.

More importantly, it answers the challenge I was given in 2019 without pretending that the years between did not happen.

The original site remains preserved. The new work sits beside it as both a redesign and a record of growth: better tools helped, but so did learning how to examine a system, respect what was already good, identify uncertainty, and make deliberate choices about what to rebuild.

## Future Opportunities

A production version could later add:

- Verified library-catalog and reading-list destinations
- New tournament years generated from the data model
- A content-management workflow
- A real voting backend with privacy and duplicate-vote rules
- Live round status and result publication
- Rights-cleared contestant imagery or commissioned illustration
- A public library identity once affiliation is confirmed

Those additions should follow operational and rights decisions. They are not prerequisites for the portfolio prototype to communicate its redesign argument.
