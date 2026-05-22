![GridPing-Showcase](src/assets/GridPing_WhiteBG.png)

# GridPing — Grid Edge Computing Showcase

GridPing demonstrates a grid-edge pipeline that processes meter data, stores results in the cloud, and presents them in a simple web app.

[Live site](https://gridping.vercel.app/)

[Source repository](https://github.com/nikoloda/GridPing-Showcase)

## Sections

- Navbar
- Hero
- Map Visualization
- About (Research Motivation)
- How It Works
- Application Demo
- Development Stack (Pipeline Stages)
- Team
- Footer

## Key Features

- Responsive landing page with modular components
- Embedded Application Demo (see Services / Demo)
- Clear pipeline examples: Smart Meter → Cloud Hosted → User Application
- Light-mode UI only (no dark-mode switching)

## Card Descriptions (Development Stack)

- Smart Meter — Receives data and processes .m files using lightweight Julia code with PowerModels.jl.
- Cloud Hosted — Records update an AWS-hosted PostgreSQL database for asynchronous frontend access.
- User Application — Connects to an AWS Lambda function to retrieve records and render them in the UI.

## Local development

1. Clone the repo

```bash
git clone https://github.com/nikoloda/GridPing-Showcase
```

2. Install dependencies

```bash
npm install
```

3. Run the dev server

```bash
npm run dev
```

Open the app in your browser after starting the dev server. The Application Demo is available in the Services section (anchor `#demo`).

## Notes

- This site uses a light-only theme; dark-mode styles and toggles have been removed.
- The GridPing logo links scroll to the top of the page.

Contact:
Daniel Nikolov - nikoloda@oregonstate.edu
