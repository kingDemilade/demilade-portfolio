# Google Sheets Testimonials Setup

This site supports a simple review flow:

1. Customers submit `survey.html`.
2. Responses go into Google Sheets with `Approved` set to `no`.
3. Someone reviews the sheet and changes `Approved` to `yes`.
4. `testimonials.html` displays only approved rows.

## Sheet Columns

Create a Google Sheet with this header row:

```text
Timestamp, Approved, Name, Role, Title, Rating, Service, Testimonial, Photo, Permission
```

The Testimonials page expects these values:

- `Approved`: use `yes` to publish, anything else stays hidden.
- `Role`: `Athlete`, `Coach`, `Parent`, or `Director`.
- `Photo`: optional image URL. Leave it blank to show an upload placeholder.

## Publish Approved Testimonials

Publish the sheet as CSV:

1. In Google Sheets, go to `File > Share > Publish to web`.
2. Choose the response sheet/tab.
3. Choose `Comma-separated values (.csv)`.
4. Copy the published CSV URL.
5. Paste it into [testimonials-config.js](../js/testimonials-config.js):

```js
window.MPL_TESTIMONIALS_CONFIG = {
  googleSheetsCsvUrl: "PASTE_PUBLISHED_CSV_URL_HERE",
  googleAppsScriptUrl: "PASTE_APPS_SCRIPT_WEB_APP_URL_HERE",
  fallbackJsonUrl: "data/testimonials.json"
};
```

## Survey Submission Script

In Google Sheets:

1. Go to `Extensions > Apps Script`.
2. Paste this script.
3. Change `SHEET_NAME` if your tab is not named `Testimonials`.
4. Deploy as a web app.
5. Set access to allow anyone with the link to submit.
6. Paste the web app URL into `googleAppsScriptUrl` in `js/testimonials-config.js`.

### If Google Says "Google Hasn't Verified This App"

This is normal for a private Apps Script you just created. The "app" is your own script, not a third-party service.

To continue:

1. Click `Advanced`.
2. Click `Go to [project name] (unsafe)`.
3. Review the permissions.
4. Click `Allow`.

Only do this when the script is owned by the correct MPL/website Google account and the code matches the script below.

If you do not see the `Go to...` link after clicking `Advanced`, try:

1. Make sure you are signed into the account that owns the Sheet and Apps Script.
2. Open the deployment flow in an incognito/private window with only that account signed in.
3. If this is a Google Workspace account, ask the admin to allow unverified internal Apps Script apps or deploy/authorize it from an admin-approved account.

### If Apps Script Shows "Unable To Open The File"

That Google Drive page usually means Apps Script did not open with access to the current Sheet. Try these in order:

1. Make sure you are inside the actual Google Sheet, then use `Extensions > Apps Script`.
2. Confirm the active Google account owns the Sheet or has edit access.
3. If multiple Google accounts are signed in, open the Sheet in an incognito/private window and sign in with only the correct account.
4. Try opening Apps Script directly at `https://script.google.com/home`, then choose `New project`.
5. If direct Apps Script opens, paste the script there and replace this line:

```js
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
```

with this version:

```js
const SPREADSHEET_ID = 'PASTE_YOUR_GOOGLE_SHEET_ID_HERE';
const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
```

The Sheet ID is the long value in the Sheet URL between `/d/` and `/edit`.

Example:

```text
https://docs.google.com/spreadsheets/d/SHEET_ID_IS_HERE/edit
```

If Apps Script still will not open, it may be blocked by the Google Workspace/admin settings for that account. Use a personal Google account or ask the Workspace admin to enable Apps Script.

```js
const SHEET_NAME = 'Testimonials';

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
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

## Local Fallback

If the Google Sheet URL is blank or unavailable, testimonials load from:

```text
data/testimonials.json
```

That keeps the page working while the Google Sheet is being configured.
