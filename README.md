# Sanjay.SR | Senior Frontend Engineer Portfolio

<div align="center">

![Portfolio Banner](public/logo.svg)

**Professional portfolio showcasing 5+ years of frontend engineering expertise**

[![Live Demo](https://img.shields.io/badge/Live-Demo-059669?style=for-the-badge&logo=vercel)](https://sanjaysr.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-059669?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-19-059669?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-059669?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

</div>

---

## Overview

A professionally crafted, high-performance portfolio for **Sanjay Kumar S R (Sanjay.SR)**, a Senior Experience Engineer specializing in:

- **Frontend Architecture** - React, TypeScript, Next.js, Micro-frontends
- **Design Systems** - Component libraries, Storybook, WCAG compliance
- **Performance Optimization** - Core Web Vitals, Lighthouse scores, LCP improvements
- **AI-Powered Applications** - Vercel AI SDK, Gemini, Claude integration
- **Backend Development** - Node.js, Express, MongoDB, REST APIs

---

## Key Features

### Design & UX

- Professional emerald (#059669) accent color throughout
- Seamless dark/light mode with system preference detection
- Mobile-first, tablet, and desktop optimized responsive design
- WCAG compliant with keyboard navigation and skip-to-content link
- Space Grotesk & JetBrains Mono professional typography

### Performance

- Optimized Largest Contentful Paint (LCP)
- Image optimization with priority loading and lazy loading
- Route-based code splitting for faster loads
- DNS prefetch for optimized font and resource loading
- Smooth, performant stagger animations

### Pages & Sections

- **Home** (`/`) - Hero section, stats, services overview, featured projects
- **About** (`/about`) - Professional summary, achievements, certifications
- **Projects** (`/projects`) - Horizontal card layout with image carousels, tech stacks
- **Skills** (`/skills`) - 5 categories: Frontend (15), Backend (7), AI Tools (4), Quality (12), Dev Tools (7)
- **Experience** (`/experience`) - Career timeline with responsibilities
- **Contact** (`/contact`) - Contact form, phone, email, LinkedIn, GitHub

### Technical Highlights

- Horizontal project cards with image carousel (5 cols) + content (7 cols)
- Object-contain images with no cropping and full image visibility
- Qualitative descriptions instead of metrics display
- Emerald outline focus indicators for keyboard navigation
- Complete SEO meta tags, Open Graph, and Twitter Cards
- Skip-to-content link for keyboard accessibility

---

## Tech Stack

### Frontend

- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first styling with custom theme
- **React Router** - Client-side routing

### UI Components

- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Custom Components** - Picture, ProjectCarousel, AnimatedBackground

### Data & Forms

- **TanStack Query** - Data fetching and caching
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **GitHub Actions** - CI/CD pipeline

---

## Project Structure

```
sanjay-portfolio-master/
├── public/
│   └── logo.svg              # Emerald-themed logo
├── src/
│   ├── components/           # Reusable components
│   │   ├── Picture.tsx       # Optimized image component
│   │   └── ProjectCarousel.tsx
│   ├── content/              # Content data
│   │   ├── home.tsx          # Stats, services
│   │   ├── project.tsx       # Project data
│   │   ├── skills.tsx        # Skills categories
│   │   └── routes.tsx        # Route configuration
│   ├── layout/               # Layout components
│   │   ├── Header.tsx        # Navigation header
│   │   └── Footer.tsx        # Footer with social links
│   ├── pages/                # Page components
│   │   ├── Index.tsx         # Home page
│   │   ├── About.tsx         # About page
│   │   ├── Projects.tsx      # Projects showcase
│   │   ├── Skills.tsx        # Skills grid
│   │   ├── Experience.tsx    # Career timeline
│   │   └── Contact.tsx       # Contact form
│   ├── index.css             # Global styles & theme
│   ├── App.tsx               # Root component
│   └── main.tsx              # Entry point
├── index.html                # HTML template with SEO meta tags
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind configuration
└── vite.config.ts            # Vite configuration
```

---

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: Node.js 22)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sanju1098/sanjay-portfolio.git
   cd sanjay-portfolio-master
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
5. Run linting

---

## License

MIT License - feel free to use this portfolio as inspiration or template for your own projects.

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
