# GridPing Landing Page

## <a href="https://ui.shadcn.com/" target="_blank">ShadcnUI</a> + <a href="https://react.dev/" target="_blank">React</a> + <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> + <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>.

![GridPing-Showcase](https://github.com/nikoloda/GridPing-Showcase/blob/d192ab8fefad8109541aa15a0fc81d8be2c5a783/src/assets/GridPing.png)


Demo and Showcase of our GridPing Application<a href="https://gridping.vercel.app/" target="_blank">Link to Site</a>


# GridPing — Grid Edge Computing Showcase

GridPing demonstrates a small end-to-end pipeline for processing and displaying grid-edge telemetry. The site highlights three stages: the smart meter at the edge, cloud-hosted storage, and the user-facing application.

## Sections

- Navbar
- Hero
- Map Visualization
- About (Research Motivation)
- How It Works
- Application Demo
- Development Stack (Pipeline Stages)
- Call-to-Action (CTA)
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

Open http://localhost:5173 in your browser. The Application Demo is available in the Services section (anchor `#demo`).

## Notes

- This site uses a light-only theme; dark-mode styles and toggles have been removed.
- The GridPing logo links scroll to the top of the page.

If you'd like a more detailed developer guide or additional examples for the demo app, tell me which parts you want expanded.
