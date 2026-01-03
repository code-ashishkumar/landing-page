# Praxis Landing Page

A modern, accessible landing page for Praxis - a special education platform that makes learning accessible through simplified text and emoji-based comprehension checks.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional-grade animations
- **Framer Motion** - React animation library

## Features

- ✨ Smooth scroll-based animations with GSAP
- 🎭 Interactive component animations with Framer Motion
- 📱 Fully responsive design
- ♿ Accessibility-focused (WCAG 2.1 AA compliant)
- 🎨 Modern gradient backgrounds
- 🎠 Interactive carousel showcase
- 📊 Animated statistics section

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
praxis-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with fonts
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Navigation.tsx   # Fixed navigation with scroll effect
│       ├── Hero.tsx         # Hero section with gradient
│       ├── DemoCarousel.tsx # Interactive carousel with GSAP
│       ├── Features.tsx     # Features with scroll animations
│       ├── ProblemSolution.tsx # Problem/Solution section
│       ├── Personas.tsx     # User personas
│       ├── Stats.tsx        # Animated statistics
│       ├── Pricing.tsx      # Pricing cards
│       ├── FinalCTA.tsx     # Call to action
│       └── Footer.tsx       # Footer with links
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies

```

## Key Components

### Navigation
- Fixed navigation with scroll effect
- Smooth scroll to sections
- Framer Motion animations

### Hero Section
- Gradient background with grid overlay
- Animated text entrance
- Call-to-action buttons

### Demo Carousel
- Auto-playing slideshow
- GSAP slide transitions
- Touch/swipe support
- Navigation dots

### Features Section
- GSAP ScrollTrigger animations
- Staggered card animations
- Hover effects

### Stats Section
- Number counter animations with GSAP
- Scroll-triggered reveals

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: '#4F46E5',
  secondary: '#06B6D4',
  accent: '#F59E0B',
  // ... more colors
}
```

### Animations
- GSAP animations are in component files using `useEffect` hooks
- Framer Motion animations use `motion` components with `initial`, `animate`, `whileInView` props

## Performance

- Server-side rendering with Next.js
- Optimized images and fonts
- Code splitting by component
- Minimal bundle size

## License

MIT

## Support

For questions or support, contact: support@praxis.edu
