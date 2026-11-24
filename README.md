# Sanjay.SR Portfolio

<div align="center">

![Sanjay.SR logo](public/logo.svg)

**Senior Frontend Engineer portfolio built with React, TypeScript, and Vite**

[![Live portfolio](https://img.shields.io/badge/Live-Portfolio-059669?style=for-the-badge&logo=vercel)](https://sanjaysr.vercel.app/)
[![React](https://img.shields.io/badge/React-19-059669?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-059669?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

</div>

## Overview

This repository contains the personal portfolio of **Sanjay Kumar S R**, a Senior Experience Engineer focused on frontend architecture, design systems, accessibility, performance, and AI-enabled applications.

The site presents professional experience, technical skills, achievements, certifications, and selected full-stack, frontend, backend, and AI projects.

## Features

- Responsive portfolio sections for home, projects, experience, skills, and about
- Light and dark themes with system preference detection and saved user preference
- Lazy-loaded route components and loading states
- Skip-to-content navigation and keyboard-focused route transitions
- Dynamic document titles, descriptions, canonical URLs, Open Graph, and Twitter metadata
- Structured `Person` and `WebSite` metadata
- Project cards, technology stacks, source links, live demos, and image carousels
- Shared navigation, footer, error boundary, and scroll-to-top behavior
- Vercel SPA rewrite support for client-side routes

## Pages

| Route         | Purpose                                                       |
| ------------- | ------------------------------------------------------------- |
| `/`           | Introduction, service pillars, approach, and featured content |
| `/projects`   | Selected portfolio and open-source projects                   |
| `/experience` | Career timeline and role responsibilities                     |
| `/skills`     | Frontend, backend, quality, DevOps, tools, and AI skills      |
| `/about`      | Professional summary, achievements, and certifications        |
| `*`           | Accessible not-found page                                     |

## Tech Stack

### Application

- React 19
- React Router DOM 7
- TypeScript 5
- Vite 8
- Tailwind CSS 4
- Lucide React and React Icons

### Styling and Components

- Tailwind CSS utility classes and CSS custom properties
- Light and dark design themes
- `class-variance-authority`, `clsx`, and `tailwind-merge`
- `tw-animate-css`
- Local reusable UI components

### Quality and Tooling

- ESLint 9 with React Hooks and React Refresh rules
- TypeScript strict project configuration
- Prettier with the Tailwind CSS plugin
- GitHub Actions
- Vercel deployment configuration

## Getting Started

### Prerequisites

- Node.js 22 or a compatible current Node.js LTS release
- npm

### Installation

```bash
git clone https://github.com/sanju1098/sanjay-portfolio.git
cd sanjay-portfolio
npm install
```

### Development

```bash
npm run dev
```

Vite starts the local development server, normally at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

This runs `tsc -b` and creates the optimized output in `dist/`.

### Preview

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

### Format Source

```bash
npm run format
```

The format script writes changes to files under `src/**/*`.

## Available Scripts

| Script      | Command           | Purpose                                         |
| ----------- | ----------------- | ----------------------------------------------- |
| Development | `npm run dev`     | Start the Vite development server               |
| Build       | `npm run build`   | Type-check the project and build for production |
| Lint        | `npm run lint`    | Run ESLint across the repository                |
| Format      | `npm run format`  | Format source files with Prettier               |
| Preview     | `npm run preview` | Preview the production build locally            |

## Deployment

The project is configured for Vercel. [vercel.json](vercel.json) rewrites every path to `index.html`, allowing React Router to handle client-side routes after deployment.

Production is available at [sanjaysr.vercel.app](https://sanjaysr.vercel.app).

## Continuous Integration

The [portfolio workflow](.github/workflows/portfolio.yml) runs for pushes and pull requests targeting `master`.

It performs the following steps:

1. Check out the repository
2. Set up Node.js 22
3. Install dependencies with `npm install`
4. Run `npm run build`, including the strict TypeScript build

Run `npm run lint` separately before submitting changes.

## Development Standards

- Keep route-level components in `src/pages/`
- Keep reusable UI and layout behavior in `src/components/` and `src/layout/`
- Keep portfolio content and configuration in `src/content/`
- Use the existing `@/` alias for imports from `src/`
- Use semantic HTML and preserve keyboard and screen-reader navigation
- Extend the existing Tailwind theme variables instead of introducing unrelated color values
- Keep components typed and resolve lint or strict TypeScript errors before building
- Use lazy loading for route-level pages where possible
- Update page metadata when adding or changing routes

## Author

**Sanjay Kumar S R (Sanjay.SR)**

- Portfolio: [sanjaysr.vercel.app](https://sanjaysr.vercel.app/)
- GitHub: [github.com/sanju1098](https://github.com/sanju1098)
- LinkedIn: [linkedin.com/in/sanjay-kumar-s-r](https://www.linkedin.com/in/sanjay-kumar-s-r/)
- StackBlitz: [stackblitz.com/@sanju1098](https://stackblitz.com/@sanju1098)
- Email: [sanjaykumar.sr1011@gmail.com](mailto:sanjaykumar.sr1011@gmail.com)

---

<div align="center">

Built with React, TypeScript, Tailwind CSS, and Vite.

</div>
