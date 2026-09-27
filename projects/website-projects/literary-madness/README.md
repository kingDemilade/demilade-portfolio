# Literary Madness

Literary Madness is a portfolio redesign of an inherited public-library tournament website. The experience pits fictional heroes against villains, connects contestants to reading discovery, and follows each matchup through a final championship.

The original files are preserved unchanged in `reference-site`. The new implementation lives separately in `redesign`.

## Project Status

The portfolio prototype is complete through its first six project phases:

1. Reference-site audit
2. Tournament reconstruction
3. Semantic prototype
4. Retro-cosmic visual system
5. Responsive bracket and progressive interactions
6. Verification and case-study documentation

The project is not presented as a currently operating library event. Production voting, live catalog integration, rights clearance, and deployment remain outside the prototype scope.

## Preview

From the portfolio repository root, run:

```sh
python3 -m http.server 8765
```

Then open:

```text
http://localhost:8765/projects/website-projects/literary-madness/redesign/index.html
```

The page also works when opened directly, although serving the repository is the preferred preview method.

## Project Structure

```text
literary-madness/
├── README.md
├── docs/
│   ├── build-plan.md
│   ├── case-study.md
│   ├── phase-5-verification-report.md
│   ├── redesign-brief.md
│   ├── reference-site-audit.md
│   ├── screen-architecture.md
│   └── tournament-reconstruction.md
├── redesign/
│   ├── css/site.css
│   ├── data/tournament.json
│   ├── js/site.js
│   └── index.html
└── reference-site/
    └── inherited archival files
```

## Redesign Highlights

- Complete semantic HTML experience
- Structured data for 16 contestants, 15 matchups, and four rounds
- Responsive desktop and mobile bracket presentations
- Equivalent ordered bracket results for assistive technology
- Keyboard-visible focus states and skip navigation
- WCAG-informed color contrast and reduced-motion behavior
- Progressive round spotlight controls
- No framework, build process, external font, or external script dependency
- No invented vote totals or unverified tournament year

## Historical Note

The archive contains folders labeled 2017 and 2019, but the weekly and championship HTML inside those folders is duplicated. The root version clearly establishes the later Matilda tournament, but it does not reliably prove its year.

The redesign therefore labels the experience **Archived Tournament**. Historical Booksite IDs are retained as research metadata but are not exposed as verified live links.

## Original Work and Rights

This project began as an inherited redesign challenge. The original campaign concept, artwork, character selections, and archival files are not presented as my original creation.

The redesign does not reuse character portraits or depend on the original flattened artwork. Its visual system is recreated with HTML and CSS using the archive as design reference. Public reuse of original material or fictional-character imagery would require separate rights review.

## AI Assistance

Codex assisted with archive inventory, duplicate-file analysis, tournament reconstruction, documentation, implementation, responsive QA, contrast calculations, and verification.

The project history, redesign intent, scope decisions, and final portfolio framing were directed collaboratively. No unverified historical facts or vote totals were generated to fill gaps in the archive.

## Documentation

Start with the [case study](docs/case-study.md) for the complete project narrative. The [verification report](docs/phase-5-verification-report.md) records checks, corrections, and remaining pre-publication work.
