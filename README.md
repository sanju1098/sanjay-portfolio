# Sanjay.SR | Senior Frontend Engineer Portfolio

<div align="center">

![Portfolio Banner](public/logo.svg)

**Frontend engineer focused on React, accessible interfaces, and design systems**

[![Live Demo](https://img.shields.io/badge/Live-Demo-059669?style=for-the-badge&logo=vercel)](https://sanjaysr.vercel.app/)
[![React](https://img.shields.io/badge/React-19-059669?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-059669?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

</div>

---

## Overview

A portfolio for **Sanjay Kumar S R (Sanjay.SR)**, a Senior Experience Engineer focused on frontend engineering:

- **Frontend engineering** - React, TypeScript, Next.js, and micro-frontends
- **UI systems** - Reusable components, Storybook, and accessibility
- **Product delivery** - Responsive interfaces for enterprise and airline products
- **Supporting full-stack experience** - REST APIs, Node.js, databases, and AI integrations

---

## Key Features

### Design & UX

- Responsive layouts and dark/light themes with system preference detection
- Keyboard-visible focus styling and a skip-to-content link
- Space Grotesk and JetBrains Mono typography

### Performance

- Lazy-loaded routes and project imagery
- Font preconnect hints
- Lightweight page transition and loading states

### Pages & Sections

- **Home** (`/`) - Hero section, stats, services overview, featured projects
- **About** (`/about`) - Professional summary, achievements, and certifications
- **Projects** (`/projects`) - Horizontal card layout with image carousels, tech stacks
- **Skills** (`/skills`) - Frontend, backend, quality, DevOps, tools, and AI
- **Experience** (`/experience`) - Career timeline with responsibilities
- **Contact** (`/contact`) - Email, LinkedIn, GitHub, StackBlitz, and a mailto form

### Technical Highlights

- Project cards with screenshot carousels and technology lists
- Responsive project imagery using `object-contain`
- Page titles and descriptions, Open Graph, and Twitter metadata
- Shared main landmark and skip-to-content link

---

## Tech Stack

### Frontend

- **React 19** - UI library
- **TypeScript 5** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first styling with custom theme
- **React Router** - Client-side routing

### UI Components

- **Radix UI** - Component primitives
- **Lucide React** - Icon library
- **Local UI components** - Buttons, dialogs, inputs, toasts, and tooltips

### Data & Forms

- **TanStack Query** - Data fetching and caching
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **GitHub Actions** - CI/CD pipeline

---

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sanju1098/sanjay-portfolio.git
   cd sanjay-portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## Continuous Integration

GitHub Actions workflow (`.github/workflows/portfolio.yml`) runs on:

- Pull requests to `master`
- Pushes to `master`

**Workflow steps:**

1. Checkout code
2. Setup Node.js 22
3. Install dependencies
4. Build project

The workflow builds the project; run linting locally with `npm run lint`.

---

## Author

**Sanjay Kumar S R (Sanjay.SR)**

- Website: [sanjaysr.vercel.app](https://sanjaysr.vercel.app)
- LinkedIn: [linkedin.com/in/sanjay-kumar-s-r](https://www.linkedin.com/in/sanjay-kumar-s-r/)
- GitHub: [github.com/sanju1098](https://github.com/sanju1098)
- Email: sanjaykumar.sr1011@gmail.com

---

## Acknowledgments

- **Design System:** Inspired by modern SaaS products and design tools
- **Icons:** [Lucide React](https://lucide.dev)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Fonts:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) & [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

---

<div align="center">

**Built with care by Sanjay.SR**

[![Portfolio](https://img.shields.io/badge/View-Portfolio-059669?style=for-the-badge)](https://sanjaysr.vercel.app/)

</div>
