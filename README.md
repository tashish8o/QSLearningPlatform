# QSLearningPlatform

Live sites
- Main: https://www.quantum-society.org
- Project demo / frontend: https://qs-learning-platfo-git-1ae194-tagore-ashish-yelisettys-projects.vercel.app

Summary
This repository contains QSLearningPlatform — a learning & events site for the Quantum Society developed by Tagore Ashish Yelisetty (March – June 2025) with contributions and guidance from the Quantum Society team. The site supports dynamic events and email-collection functionality powered by a Google Sheet.

Special thanks to Anna Atlasova and Kiara Diaz for their support throughout the project.

Quick links
- Google Sheet used for dynamic events and email collection:
  - Sheet (events + email tab): https://docs.google.com/spreadsheets/d/1up66550ZYH88hl0N4SnKzZZHj9V5m8Az1WR_fs0CMp4/edit?gid=0#gid=0
- Join page (collects emails): 
  - https://www.quantum-society.org/join
  - https://qs-learning-platfo-git-1ae194-tagore-ashish-yelisettys-projects.vercel.app/join

Repository layout
- qslp-frontend/ — Next.js frontend (TypeScript)
- qslp-backend/  — Backend (API endpoints and glue for form submissions and sheet integration)

Features
- Next.js frontend with dynamic content rendering.
- Events page that pulls events data from a Google Sheet and displays it in the UI.
- Join page that collects user emails and pushes them to the Google Sheet.
- Hosted on Vercel (frontend) and optionally server/backends on platforms of choice.
- TypeScript codebase and modern frontend tooling.

Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- (Optional) Vercel account for deployment

Configuration (environment variables)
Both frontend and backend will likely need a few environment variables. Below are recommended variable names and descriptions — adapt to your codebase's actual variable names.

Common
- GOOGLE_SHEET_ID — the ID from the Google Sheets URL (example: the long string in your provided sheet)
- GOOGLE_SHEET_GID — the gid (tab id) for the events / emails tab (optional if your integration uses named ranges)
- SHEET_PUBLISHED_CSV_URL — (optional) the published CSV/JSON URL for a sheet tab if you use the "Publish to web" approach

Frontend (qslp-frontend/.env.local)
- NEXT_PUBLIC_GOOGLE_SHEET_ID=your_google_sheet_id
- NEXT_PUBLIC_SHEET_EVENTS_GID=0
- NEXT_PUBLIC_API_BASE_URL=http://localhost:4000 (or your backend URL / Vercel functions if used)

Backend (qslp-backend/.env)
- PORT=4000
- GOOGLE_SHEET_ID=your_google_sheet_id
- GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account-email@project.iam.gserviceaccount.com (if using service account)
- GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----" (if using Sheets API with a service account)
- SHEET_EVENTS_RANGE='Events!A1:Z' (example)
- SHEET_EMAILS_RANGE='Emails!A1:Z' (example)

Notes on Google Sheets integration
You have two common approaches to pull events and save emails:

1) Publish sheet to the web (simpler, read-only)
- In Google Sheets: File → Publish to the web → choose the events tab and CSV format.
- Use the published CSV URL in the frontend to fetch and parse events.
- This requires no credentials but is read-only and the sheet is publicly readable.

2) Use Google Sheets API (read/write)
- Create a Google Cloud project, enable the Google Sheets API.
- Create a service account and grant access to the target Google Sheet (Share the sheet with the service account email).
- Use service-account credentials in the backend to read events and append email rows securely.
- This approach allows the backend to append collected emails into the Sheet.

Running locally

1) Clone the repo
```bash
git clone https://github.com/tashish8o/QSLearningPlatform.git
cd QSLearningPlatform
```

2) Frontend
```bash
cd qslp-frontend
npm install
# create .env.local with the variables described above (NEXT_PUBLIC_*)
npm run dev
# open http://localhost:3000
```

3) Backend
```bash
cd ../qslp-backend
npm install
# create .env with the variables described above (GOOGLE_* etc.)
npm run dev
# opens on PORT (default 4000). Confirm frontend NEXT_PUBLIC_API_BASE_URL points to this backend during development.
```

Build & production
- Frontend:
  - npm run build
  - npm run start (or deploy to Vercel for serverless/edge)
- Backend:
  - Build (if TypeScript): npm run build
  - Start: npm start
  - Deploy to a provider that supports your chosen runtime (Vercel Serverless Functions, Heroku, Railway, Render, etc.)

Deployment notes
- Frontend: Vercel works out of the box with Next.js. Make sure to set the NEXT_PUBLIC_ environment variables in the Vercel project settings.
- Backend: If you need a persistent server to handle writes to Google Sheets, deploy qslp-backend to a host that supports Node.js and set environment variables there. Alternatively, convert backend endpoints to Vercel Serverless Functions if desired.

How events are updated (implementation overview)
- The frontend fetches a data source (published CSV or backend-proxied Google Sheets API) and transforms rows into event objects used by the Events page.
- When the Google Sheet is updated, the frontend will show updated events on the next fetch/page load.

How email collection works (implementation overview)
- The Join page submits an email to an API endpoint (qslp-backend) which validates the input and appends a new row into the Emails tab in your Google Sheet either via:
  - Direct append using Google Sheets API credentials (secure), or
  - A backend-managed append to an intermediate DB/CSV depending on your setup.

Security & privacy
- Never commit service account private keys, API keys, or other secrets to version control.
- Use environment variables on your host (Vercel/Heroku/Railway) and GitHub secrets for CI/CD.
- If using the "Publish to web" option for the sheet, the sheet becomes publicly readable. Do not store private data in a published sheet.

Testing
- Unit tests: run test scripts inside each package if present (npm run test).
- Manual test: run the frontend and backend locally and validate:
  - Events page shows rows from the sheet.
  - Join page posts an email and the backend appends it to the Emails tab of the sheet.

Contributing
- Open issues for bugs or feature requests.
- For code changes:
  - Fork the repo
  - Create a feature branch
  - Open a pull request with a clear description and reference to any relevant issue
- Add explanations, screenshots, or recordings in PRs when UI changes are involved.

Troubleshooting tips
- If events do not appear:
  - Check that GOOGLE_SHEET_ID is correct.
  - Confirm the published CSV URL or API ranges are correct.
  - Check console/network logs for fetch errors (CORS, 404, 403).
- If emails are not saved:
  - Check backend logs and ensure service account has permission to edit the sheet.
  - If using publish-to-web, remember it is read-only; you must use the Sheets API for writes.

Maintainers & credits
- Author / Main developer: Tagore Ashish Yelisetty
- Quantum Society team contributors and supporters
- Special thanks: Anna Atlasova, Kiara Diaz

License
- Specify a license (e.g., MIT) in LICENSE file. If none exists, add one appropriate to your project.

Contact
- For questions, issues, or help with deployment: open an issue in this repository.

Changelog
- Keep a CHANGELOG.md or GitHub releases for major changes and deployments.

---

Thank you — the README above documents the repo structure, local setup, sheet integration, deployment tips, and credits. If you’d like, I can:
- update or tailor the env variable names to match the repository’s current config (I can inspect the code to grab exact variable names), or
- open a pull request with this README added to the repo.
