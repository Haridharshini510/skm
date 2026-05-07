# SMK Website

Marketing website for SMK Associates built with React + Vite, including Contact form lead capture to Google Sheets via Google Apps Script.

## Tech Stack

- React 19
- Vite 8
- ESLint 10
- React Icons

## Project Structure

- `client/` - Frontend application
- `client/src/components/` - Reusable UI sections/components
- `client/src/pages/` - Route-level page components
- `client/src/styles/` - Component/page styles
- `client/docs/` - Operational handoff docs

## Routing

This project currently uses simple pathname-based rendering in `client/src/App.jsx`:

- `/` -> Home
- `/about` -> About
- `/services` -> Services
- `/contact` -> Contact

## Prerequisites

- Node.js 20+ recommended
- npm 10+

## Local Setup

1. Install dependencies:

```bash
cd client
npm install
```

2. Configure environment:

```bash
cp .env.example .env
```

Then set:

```env
VITE_LEAD_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

3. Run development server:

```bash
npm run dev
```

If PowerShell blocks `npm.ps1`, use:

```bash
npm.cmd run dev
```

## Available Scripts

Run from `client/`:

- `npm run dev` - Start local dev server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Contact Form Lead Capture

The Contact enquiry form (Home contact section + `/contact` page) is integrated with a Google Apps Script Web App endpoint.

Payload sent:

```json
{
  "name": "...",
  "email": "...",
  "phone": "...",
  "service": "...",
  "message": "...",
  "source": "website-contact-form",
  "pageUrl": "...",
  "userAgent": "...",
  "hpField": "..."
}
```

Implemented safeguards:

- Client-side validation (required + email format)
- Trim/normalize values before submit
- Honeypot anti-spam field
- Request timeout handling
- Loading and success/error UI states

Detailed setup and operations guide:

- `client/docs/contact-form-google-sheets-handoff.md`

## Deployment Notes

- Build with `npm run build` inside `client/`.
- Deploy static output from `client/dist/`.
- Ensure `VITE_LEAD_WEBHOOK_URL` is set in the deployment environment.

## Troubleshooting

- `Lead endpoint is not configured`
  - Set `VITE_LEAD_WEBHOOK_URL` in `client/.env` and restart dev server.
- `Sheet tab not found: Leads`
  - Ensure target Google Sheet tab name is exactly `Leads`.
- Browser CORS/preflight error
  - Frontend uses `text/plain;charset=utf-8` body to avoid preflight for Apps Script.
- `ERR_CONNECTION_CLOSED`
  - Usually network, endpoint availability, or Apps Script deployment/access issue.
