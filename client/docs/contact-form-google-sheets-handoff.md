# Contact Form -> Google Sheets Handoff

## 1) Frontend webhook setup

- File: `client/.env`
- Set:

```env
VITE_LEAD_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

- Restart Vite dev server after updating `.env`.

## 2) Google Sheet setup

1. Create/open a Google Sheet for leads.
2. Rename the first tab to `Leads`.
3. Add this exact header row in row 1:

`Timestamp, Source, Name, Email, Phone, Service, Message, PageURL, UserAgent`

## 3) Google Apps Script setup

1. In the Sheet, go to `Extensions -> Apps Script`.
2. Replace default code with the script below.
3. Save the project.

```javascript
const SHEET_NAME = 'Leads';

function doPost(e) {
  try {
    const payload = parseJsonBody_(e);

    // Honeypot check
    if (payload.hpField) {
      return jsonResponse_({ ok: true, message: 'Accepted' });
    }

    const name = normalize_(payload.name);
    const email = normalize_(payload.email).toLowerCase();
    const phone = normalize_(payload.phone);
    const service = normalize_(payload.service);
    const message = normalize_(payload.message);
    const source = normalize_(payload.source) || 'website-contact-form';
    const pageUrl = normalize_(payload.pageUrl);
    const userAgent = normalize_(payload.userAgent);

    if (!name || !email || !phone) {
      return jsonResponse_({ ok: false, error: 'Missing required fields' });
    }

    if (!isValidEmail_(email)) {
      return jsonResponse_({ ok: false, error: 'Invalid email format' });
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      return jsonResponse_({ ok: false, error: 'Sheet tab not found: Leads' });
    }

    sheet.appendRow([
      new Date(),
      source,
      name,
      email,
      phone,
      service,
      message,
      pageUrl,
      userAgent,
    ]);

    return jsonResponse_({ ok: true, message: 'Enquiry submitted successfully' });
  } catch (err) {
    return jsonResponse_({ ok: false, error: 'Server error: ' + err.message });
  }
}

function parseJsonBody_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error('Empty request body');
  }

  try {
    return JSON.parse(e.postData.contents);
  } catch (err) {
    throw new Error('Invalid JSON body');
  }
}

function normalize_(value) {
  return (value == null ? '' : String(value)).trim();
}

function isValidEmail_(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function jsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 4) Deploy as Web App

1. Click `Deploy -> New deployment`.
2. Type: `Web app`.
3. Execute as: `Me`.
4. Who has access: `Anyone`.
5. Deploy and authorize.
6. Copy the Web app URL (`.../exec`) and put it into `client/.env` as `VITE_LEAD_WEBHOOK_URL`.

## 5) Redeploy / URL rotation

- If script logic changes, deploy a **new version** from Apps Script.
- If URL changes, update `client/.env` and restart frontend.

## 6) Column mapping

- `Timestamp` <- server time (`new Date()`)
- `Source` <- `source`
- `Name` <- `name`
- `Email` <- `email`
- `Phone` <- `phone`
- `Service` <- `service`
- `Message` <- `message`
- `PageURL` <- `pageUrl`
- `UserAgent` <- `userAgent`

## 7) Troubleshooting

- Browser CORS error mentioning preflight / `Access-Control-Allow-Origin`
  - Cause: frontend sent `application/json`, which triggers `OPTIONS` preflight.
  - Fix: send body as plain text JSON (`Content-Type: text/plain;charset=utf-8`) to avoid preflight on Apps Script Web Apps.
- Error: `Lead endpoint is not configured`
  - `VITE_LEAD_WEBHOOK_URL` missing/blank in `client/.env`.
- Error: `Unable to send your enquiry...`
  - Wrong Apps Script URL, deployment not public, or script threw an error.
- Error: timeout message
  - Endpoint latency > 10s. Check Apps Script execution logs.
- Rows not appearing
  - Verify tab is exactly named `Leads` and headers are in row 1.

## 8) Security notes

- Do not put API keys in frontend env.
- Only Web App URL is exposed client-side.
- Honeypot (`hpField`) is included to reduce bot spam.
