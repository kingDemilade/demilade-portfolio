# Palm Beach County Website Redesign

Static HTML, CSS, and JavaScript prototype for a Palm Beach County website redesign. The project includes a redesigned homepage, Board of County Commissioners pages, department pages, a countywide events calendar, and a meeting calendars experience.

## Project Structure

```text
.
├── pbc-gov-redesign.html          # Homepage redesign
├── bcc.html                       # Board of County Commissioners landing page
├── bcc-staff.html                 # BCC staff page
├── bcc-meetings.html              # BCC meetings page
├── meeting-calendars.html         # Meeting calendars hub and interactive calendar
├── calendar-of-events.html        # Countywide events calendar
├── departments.html               # Departments directory hub
├── departments/
│   ├── administration.html
│   ├── administration-staff.html
│   └── county-administrator.html
├── css/
│   └── style.css                  # Main shared styles
├── js/
│   ├── main.js                    # Shared page behavior
│   ├── departments.js             # Departments filtering and pagination
│   ├── calendar-events.js         # Meeting calendars data and behavior
│   └── county-calendar-events.js  # County events calendar data and behavior
├── images/                        # Page, hero, department, and calendar imagery
├── videos/                        # Local video assets
└── calendar/                      # Downloadable .ics files
```

## Running Locally

This is a static site. No build step is required.

Open `pbc-gov-redesign.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000/pbc-gov-redesign.html
```

## Key Pages

- `pbc-gov-redesign.html` - main homepage prototype
- `departments.html` - department directory with search, filtering, reset, and pagination
- `calendar-of-events.html` - countywide events calendar
- `meeting-calendars.html` - BCC and public meeting calendar experience
- `departments/administration.html` - Administration department landing page
- `departments/administration-staff.html` - Administration staff/contact page
- `departments/county-administrator.html` - County Administrator profile page

## Calendar Behavior

### County Events Calendar

Implemented in `calendar-of-events.html` and `js/county-calendar-events.js`.

Features include:

- featured event carousel
- Today/Month featured controls
- search and reset
- category filters
- selected-date results
- pagination
- location/address splitting
- directions or virtual meeting action links

### Meeting Calendars

Implemented in `meeting-calendars.html` and `js/calendar-events.js`.

The Meeting Calendars page includes:

- yearwide results for All meetings
- filters for Regular Meetings, Workshops, Zoning Hearings, Comprehensive Plan Hearings, Public Notice, Boards, and Virtual
- month navigation for 2026
- paginated results, 8 meetings per page
- dynamic results count
- status badges for cancelled, postponed, and rescheduled meetings
- hidden action links for cancelled meetings

## Design Notes

- Main styling lives in `css/style.css`.
- Footer background uses `#1A2A5B`.
- Footer link icons use `#009ddd`.
- Hero `h1` elements should use the standard text shadow.
- `section-nav-grid` backgrounds use `rgb(245 245 245 / 95%)`.
- Search panels use the translucent raised treatment: `rgb(245 245 245 / 95%)`.
- Department/group hero images generally target `1920 x 800`.
- Featured calendar images use a `12 / 5` frame. Recommended exports are `1920 x 800` or `2400 x 1000`.

## Development Notes

- Keep changes scoped to the page/script being edited.
- Reuse existing button, card, pager, and section navigation classes before adding new patterns.
- Use `js/departments.js` as the reference pattern for directory pagination.
- Use existing Font Awesome icons already loaded in the HTML pages.
- Calendar event objects are currently stored directly in JavaScript files.
- When adding meetings with status text, the Meeting Calendars script can parse status wording such as cancelled, canceled, postponed, and rescheduled into styled badges.

## Quick Verification

Run syntax checks after editing JavaScript:

```bash
node --check js/main.js
node --check js/departments.js
node --check js/calendar-events.js
node --check js/county-calendar-events.js
```

For HTML/CSS changes, open the affected page in a browser and verify:

- desktop and mobile layout
- navigation links
- calendar filters and pagination
- event cards and status badges
- footer and scroll-to-top behavior

## Source Links Used During Prototyping

Several pages are based on or link back to existing Palm Beach County resources, including:

- `https://discover.pbc.gov/Pages/PBC-Calendars.aspx`
- `https://discover.pbc.gov/countycommissioners/Pages/Meeting-Dates.aspx`
- `https://discover.pbc.gov/pzb/planning/Pages/BCC-Agendas-Minutes.aspx`
- `https://discover.pbc.gov/pzb/zoning/Pages/Hearings-and-Meetings.aspx`
- `https://discover.pbc.gov/pzb/Lists/MeetingsCal/zoning.aspx`
- `https://pbc.gov/cal/event/PrintReport`

## Notes for Future Work

- Replace placeholder links as final IA decisions are made.
- Consider moving calendar event data to JSON if the dataset grows.
- Add automated HTML validation before production handoff.
- Review accessibility states for all interactive calendar and filter controls.
