# MPL Recovery Testimonials + Google Sheets Handoff

Last updated: June 18, 2026

## What This Setup Does

The MPL Recovery site now has a lightweight testimonial workflow:

1. A customer submits feedback through `survey.html`.
2. The survey sends the response to a Google Apps Script web app.
3. Apps Script writes the response into Google Sheets.
4. New responses enter the sheet with `Approved` set to `no`.
5. Someone reviews the row and changes `Approved` to `yes`.
6. `testimonials.html` reads the published Google Sheet CSV and displays approved testimonials dynamically.

This keeps the website maintainable without editing HTML every time a new testimonial comes in.

## Key Files

- `survey.html`
  Customer-facing survey form.

- `testimonials.html`
  Dynamic testimonials page.

- `js/testimonials-config.js`
  Stores the live Google Sheet CSV URL and Apps Script web app URL.

- `js/survey.js`
  Handles survey form submission.

- `js/testimonials.js`
  Fetches approved testimonials and renders the cards.

- `data/testimonials.json`
  Local fallback testimonials if the Google Sheet is not configured or temporarily unavailable.

- `docs/google-sheets-testimonials.md`
  Setup and troubleshooting notes.

## Live Config

Current config file:

```js
window.MPL_TESTIMONIALS_CONFIG = {
  googleSheetsCsvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQHqqhBpDY9GFoTVuBIbYnfE9K6JtCkDdgKmwN-cxZckb7tK_5yqmPSAlVf1CXX8bX_DHjorrT-3DS2/pub?gid=0&single=true&output=csv",
  googleAppsScriptUrl: "https://script.google.com/macros/s/AKfycbze_3pm2zIAKOsj62sT4VwdOzYlyFeIThh_njqlHwqdsJ7eMNT8W1hWj9NU3pZooq0V/exec",
  fallbackJsonUrl: "data/testimonials.json"
};
```

If either Google URL changes, update `js/testimonials-config.js`.

## Google Sheet

Spreadsheet edit URL:

```text
https://docs.google.com/spreadsheets/d/1B8O0IuD5hGyW2blcD-zgioqTr-t5QGwGt3HSh-WEzn4/edit?gid=0#gid=0
```

Required header row:

```text
Timestamp, Approved, Name, Role, Title, Rating, Service, Testimonial, Photo, Permission
```

Important:

- `Approved` must be `yes` for a testimonial to appear on the site.
- New survey submissions should enter as `no`.
- The `Role` value controls filtering on the Testimonials page.
- The accepted roles are `Athlete`, `Coach`, `Parent`, and `Director`.
- `Photo` is optional. If blank or unavailable, the site shows a styled placeholder.

## Working Apps Script

This is the version that fixed the submission issue. It writes to the spreadsheet by ID, which is more reliable than relying on `getActiveSpreadsheet()`.

```js
const SPREADSHEET_ID = '1B8O0IuD5hGyW2blcD-zgioqTr-t5QGwGt3HSh-WEzn4';
const SHEET_NAME = 'Testimonials';

function doGet() {
  return ContentService
    .createTextOutput('MPL testimonials web app is live.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.getSheets()[0];
  const data = e.parameter;

  sheet.appendRow([
    new Date(),
    'no',
    data.name || '',
    data.role || '',
    data.title || '',
    data.rating || '',
    data.service || '',
    data.testimonial || '',
    data.photo || '',
    data.permission || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Why This Script Version Was Needed

The first deployed script used:

```js
SpreadsheetApp.getActiveSpreadsheet()
```

That caused this error during testing:

```text
TypeError: Cannot read properties of null (reading 'appendRow')
```

The fix was to use:

```js
SpreadsheetApp.openById(SPREADSHEET_ID)
```

That makes the web app write to the exact intended Google Sheet.

## Deployment Notes

If the Apps Script code changes:

1. Open Apps Script.
2. Save the code.
3. Go to `Deploy > Manage deployments`.
4. Click the pencil/edit icon on the current web app deployment.
5. Choose `New version`.
6. Click `Deploy`.
7. Copy the latest `/exec` URL if Google gives a new one.
8. Update `googleAppsScriptUrl` in `js/testimonials-config.js` if needed.

Opening the `/exec` URL in a browser should show:

```text
MPL testimonials web app is live.
```

If it does not, the deployment is not using the correct saved code.

## Approval Workflow

After a survey submission:

1. Open the Google Sheet.
2. Find the new row.
3. Review the testimonial.
4. Change `Approved` from `no` to `yes`.
5. Refresh the Testimonials page.

The published CSV may take a minute or two to update.

## Frontend Behavior

`testimonials.html`:

- Loads the published CSV from Google Sheets.
- Filters out rows where `Approved` is not accepted.
- Accepted approval values include `yes`, `y`, `true`, `approved`, and `1`.
- Renders testimonial cards dynamically.
- Preserves the alternating left/right scroll animation.
- Falls back to `data/testimonials.json` if no approved Google Sheet rows are available.

`survey.html`:

- Posts form data to the Apps Script URL.
- Shows a success message after submission.
- Uses `mode: no-cors`, so the browser cannot read the Apps Script response directly. This is expected.

## Quick Test

To verify the connection:

1. Open the live survey page:

```text
https://dev.demilade-creatives.com/projects/website-projects/mpl-recovery-site/survey
```

2. Submit a test testimonial.
3. Confirm a new row appears in the Google Sheet.
4. Change `Approved` to `yes`.
5. Open or refresh:

```text
https://dev.demilade-creatives.com/projects/website-projects/mpl-recovery-site/testimonials
```

The approved testimonial should appear.
