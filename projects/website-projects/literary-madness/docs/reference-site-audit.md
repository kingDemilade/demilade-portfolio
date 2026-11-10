# Literary Madness Reference-Site Audit

**Audit date:** July 5, 2026  
**Reference material:** Inherited Literary Madness website files  
**Original project period represented:** 2017–2019  
**Audit scope:** Structure, content, visual design, interaction, accessibility, responsiveness, maintainability, and archival condition

## Purpose

This audit documents the inherited Literary Madness website before redesign work begins. The reference files should remain unchanged. They are both the source material for the redesign and evidence of the original project’s history.

The goal is not to judge the site by present-day standards alone. It is to identify what the original experience was trying to accomplish, what still works, and what prevented the concept from becoming a flexible, accessible website.

## Executive Summary

Literary Madness is a public-library reading event presented as a tournament between famous fictional heroes and villains. Visitors follow weekly matchups, explore library reading lists associated with the characters, and watch winners advance toward a final championship.

The concept and visual identity are strong. The site has a memorable retro-cosmic style, a clear heroes-versus-villains premise, and an effective tournament metaphor. Its principal limitation is structural: almost the entire experience is rendered as fixed-width JPEG artwork. HTML supplies little more than image placement and invisible image-map links.

The redesign should preserve the event’s wit, color, theatricality, and bracket progression while rebuilding the experience as real, responsive, accessible, maintainable web content.

## Reference-Site Inventory

The archive contains:

- A root version of the site
- A `2017` tournament archive
- A `2019` tournament archive
- `Week1`, `Week2`, `Week3`, `Week4`, and `Championship` snapshots for both archived years
- One `index.html` and one `mad.css` file in each weekly snapshot
- Repeated JPEG artwork for introductions, league labels, matchups, dividers, and brackets
- Legacy operating-system artifacts including `.DS_Store` and `Thumbs.db`
- An accidental nested `images/images` directory

All CSS files are identical. Several HTML snapshots are also exact duplicates:

- The 2017 and 2019 weekly and championship HTML files match one another byte for byte.
- Week 2 and Week 3 use identical HTML within both archives.
- The root `index.html` contains later Booksite identifiers and appears to represent the actual later tournament state more accurately than the HTML inside the `2019` archive.

This means the folder names cannot be treated as fully reliable historical metadata without additional source information.

## Original Experience

The site presents one long, centered page in this sequence:

1. Illustrated Literary Madness introduction
2. A linked event header
3. Heroes League matchup artwork
4. A section divider
5. Villains League matchup artwork
6. A full tournament bracket

The introductory copy explains that visitors will choose the greatest hero and villain during March and that the finalists will meet in a final battle. Character artwork links visitors to library-curated reading lists. Weekly versions update the visible matchups and bracket results.

The surviving files do not contain an on-site voting form or voting logic. Any voting process likely happened through an external event channel or an operational process not preserved in this archive.

## What Works Well

### Concept

The core premise is immediately understandable and unusually engaging for a library campaign. A tournament makes literary discovery participatory and gives visitors a reason to return as results progress.

### Visual Identity

The visual system is cohesive and distinctive:

- Deep blue-gray background
- Teal Heroes League identity
- Coral-red Villains League identity
- Bright yellow championship highlight
- Space, orbit, planet, rocket, and telescope imagery
- Display typography with a playful retro-science-fiction character
- Clear bracket conventions and winner progression

The artwork feels energetic without abandoning the educational and community-centered nature of a library event.

### Information Model

The original experience already contains the foundation of a useful system:

- Tournament year
- Tournament stage
- League
- Contestant
- Matchup
- Winner
- Reading-list destination
- Full bracket

These concepts can become structured content in the redesign instead of being flattened into images.

### Connection to Library Resources

Linking characters to related library reading lists turns the competition into a discovery tool. This is one of the project’s most valuable ideas and should remain central.

## Findings and Risks

### Content Is Embedded in Images

Headings, instructions, contestant names, bracket outcomes, and most other meaningful content are pixels rather than document text.

Consequences include:

- Search engines cannot understand the page meaningfully.
- Screen readers cannot access the content.
- Users cannot select, translate, enlarge, or search the text reliably.
- Routine content changes require image editing.
- The content cannot adapt to different screen sizes.

### Fixed-Width Layout

The stylesheet sets the body to exactly `974px` wide. All primary artwork is also `974px` wide, and no viewport metadata or responsive rules are present.

The page therefore requires horizontal scrolling or browser scaling on phones and narrow windows. It does not provide a deliberately designed mobile experience.

### Image-Map Interaction

Clickable contestants are implemented with `<map>` and `<area>` elements using hard-coded pixel coordinates.

This approach is fragile because:

- The clickable regions depend on the image retaining its original dimensions.
- The interactive targets are invisible.
- Hover, focus, selected, and visited states are not communicated visually.
- Keyboard and assistive-technology use is poor.
- Editors must manually calculate coordinates whenever artwork changes.

### Missing Semantic Structure

The HTML has no meaningful headings, paragraphs, lists, navigation, landmarks, or page hierarchy. Images also lack `alt` attributes.

The document title is present, but the visible experience has no machine-readable structure beyond links and images.

### External Links

The pages point to old `http` Booksite reading-list URLs and historic Facebook event pages. These destinations should be considered archival until individually verified.

One Darth Vader image-map link begins with `#http://`, which makes it an invalid external destination. New-tab links also lack modern contextual or security handling.

### No On-Site Voting System

Despite voting language in the artwork, the archive does not contain forms, scripts, server integrations, confirmation states, result logic, or vote protections.

A future voting feature would require explicit decisions about:

- Whether the project is a functional event site or a portfolio demonstration
- How votes are stored
- Whether voting is anonymous
- Duplicate-vote handling
- Opening and closing times
- Result visibility
- Moderation and privacy

### Maintenance Model

Each tournament stage is preserved as a complete copy of the page, stylesheet, and artwork. This makes updates labor-intensive and encourages files to drift or be mislabeled.

A structured data source and reusable components would allow a year or round to be updated without rebuilding the entire page.

### Archival Ambiguity

The duplicated 2017 and 2019 files make chronology uncertain. The archive should be preserved as received, but the redesign should not silently present every folder as a verified historical record.

Unknowns should be labeled honestly in project documentation.

## Accessibility Assessment

The original site does not meet current accessibility expectations. Major issues include:

- No text alternatives for meaningful images
- No semantic heading structure
- No responsive text resizing
- Poor keyboard discoverability for image-map links
- No visible focus styling
- Text embedded in images
- Fixed pixel dimensions
- No skip link or landmarks
- Link purpose depending heavily on visual position
- No reduced-motion concern, though the original page contains no animation

The redesign should target WCAG 2.2 Level AA for the interface and content under our control.

## Content and Historical Unknowns

The following questions cannot be answered from the files alone:

- Which library or library system originally operated the event
- Who created the illustration system
- Whether the supplied artwork may be publicly republished
- How and where visitors voted
- Whether the 2019 archive was mislabeled, partially copied, or intentionally reused
- Whether later reading lists still exist at new URLs
- Whether character names and images were cleared for promotional use
- Whether additional tournament years existed

These are constraints to document, not gaps to conceal.

## Preserve, Rebuild, Reconsider

### Preserve

- Literary Heroes versus Literary Villains premise
- Retro-cosmic tone
- Teal and coral league distinction
- Tournament stages and full-bracket payoff
- Book-discovery links for every contestant
- Community-event energy
- The original files as an untouched archive

### Rebuild

- Page content as semantic HTML
- Contestants as responsive, accessible cards
- Bracket as a responsive interface
- Year and round navigation
- Link and focus states
- Content storage and update workflow
- Mobile layout

### Reconsider

- Whether real voting is required for the initial portfolio version
- Whether original character artwork can be reused publicly
- How historic results should be labeled given archive duplication
- Whether the Facebook event belongs in the redesigned experience
- Whether reading-list links should use live destinations, documented placeholders, or archived labels

## Recommended Next Move

Use the accompanying redesign brief to define the first portfolio-ready version. Build the experience around one complete tournament dataset before adding multiple years or real vote persistence. This will keep the initial scope focused while proving the new design system and interaction model.
