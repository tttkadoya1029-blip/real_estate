# JapanHome - Japanese Real Estate for International Buyers

A content-driven website helping international buyers discover and purchase property in Japan. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Interest-based Discovery**: Explore Japan through genres like City Life, Traditional Culture, Nature & Escape
- **Area Guides**: Detailed guides for 8 Japanese regions with lifestyle fit assessment
- **Property Listings**: Sample properties with pricing, yields, and features
- **Interactive Quiz**: 5-question quiz to match users with ideal areas and property types
- **Educational Content**: Complete guide to buying property in Japan with FAQ
- **Contact Form**: Structured inquiry form for lead generation

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/tttkadoya1029-blip/real_estate.git

# Navigate to project directory
cd japan-real-estate

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── genre/[slug]/      # Genre landing pages
│   ├── area/[slug]/       # Area guide pages
│   ├── properties/        # Property listings
│   ├── why-japan/         # Educational content
│   ├── contact/           # Contact form
│   └── quiz/              # Interactive quiz
├── components/            # React components
│   ├── layout/           # Header, Footer
│   ├── home/             # Home page components
│   ├── shared/           # Reusable components
│   └── ...
├── data/                  # JSON data files
│   ├── genres.json       # Genre definitions
│   ├── areas.json        # Area data (8 regions)
│   ├── properties.json   # Sample properties
│   ├── faq.json          # FAQ content
│   └── quiz.json         # Quiz questions
├── lib/                   # Utility functions
│   ├── data.ts           # Data fetching
│   └── quiz-logic.ts     # Quiz scoring
└── types/                 # TypeScript types
```

## Deployment to Vercel

### Option 1: Import from GitHub

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your GitHub repository
4. Deploy (no environment variables needed)

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Customization

### Replacing Demo Data

All content is stored in JSON files under `src/data/`:

1. **Areas** (`areas.json`): Add/edit regions with details like price ranges, highlights, fit assessments
2. **Properties** (`properties.json`): Replace with real listings
3. **Genres** (`genres.json`): Customize interest categories
4. **FAQ** (`faq.json`): Update with your FAQ content
5. **Quiz** (`quiz.json`): Modify questions and scoring logic

### Styling

- Colors defined in `src/app/globals.css` using CSS variables
- Design system: Modern × Japanese (朱色/藍色 accent colors)
- Fully responsive with dark mode support

### Adding Backend

The contact form currently logs to console. To connect to a backend:

1. Create an API route in `src/app/api/contact/route.ts`
2. Connect to your email service (SendGrid, Resend, etc.) or CRM
3. Update the form submission handler in `src/app/contact/page.tsx`

## Pages Overview

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero, genre grid, featured properties, quiz CTA |
| Genre | `/genre/[slug]` | Interest-based area discovery |
| Area Guide | `/area/[slug]` | Detailed region information |
| Properties | `/properties` | All property listings |
| Why Japan | `/why-japan` | Buying guide, FAQ |
| Contact | `/contact` | Lead generation form |
| Quiz | `/quiz` | Interactive matching quiz |

## SEO Features

- Meta tags and OpenGraph configured
- Static generation for genre and area pages
- Semantic HTML structure
- Mobile-first responsive design

## License

Private - All rights reserved

---

Built with Next.js and deployed on Vercel.
