# AI Coding Agent Instructions for JJ Pet House

## Project Overview
This is a Next.js 16 pet care service mockup ("JJ PET HOUSE") featuring pet shop, grooming, hotel, clinic, and delivery services. It uses React 19, TypeScript, Tailwind CSS, shadcn/ui components, and client-side state management with localStorage.

## Architecture & Key Files

### App Structure (App Router)
- **Root layout** ([app/layout.tsx](app/layout.tsx)): Sets metadata, font imports, body wrapper
- **Page routing**: Each service (booking, clinic, delivery, grooming, etc.) has its own page directory with `page.tsx`
- **Nested routes**: Examples include [app/booking/confirmation/](app/booking/confirmation/) for multi-step flows
- **Loading states**: `loading.tsx` files provide Suspense fallbacks for async pages

### Critical Data Layer
- **[lib/booking-data.ts](lib/booking-data.ts)**: Core data structures (`Service`, `Booking`, `TimeSlot`, `PET_TYPES`, `TIME_SLOTS`). Services have id, name, category, price, image, duration, and rating
- **[lib/auth.ts](lib/auth.ts)**: Mock authentication with dummy users (customer@petshop.com / password123). Returns `User` object stored in localStorage
- **[lib/utils.ts](lib/utils.ts)**: Helper `cn()` function for Tailwind class merging

### Component Architecture
- **Layout components**: [components/header.tsx](components/header.tsx), [components/footer.tsx](components/footer.tsx), [components/hero-section.tsx](components/hero-section.tsx)
- **Service display**: [components/service-card.tsx](components/service-card.tsx) - reusable card showing service details with "Pesan Sekarang" button
- **UI library**: [components/ui/](components/ui/) contains 50+ shadcn/ui components (button, dialog, form, select, etc.)
- **Theme**: [components/theme-provider.tsx](components/theme-provider.tsx) wraps next-themes

## Critical Patterns & Conventions

### State Management
- **Client-side only**: Use `"use client"` directive (React 19)
- **localStorage auth**: After login, user object stored with `localStorage.setItem("user", JSON.stringify(user))`
- **Query params**: Booking page reads service ID from URL with `useSearchParams().get("service")`

### Form Patterns
- **Multi-step flows**: [app/booking/page.tsx](app/booking/page.tsx) uses `step` state (1-4) to control wizard UI
- **Form libraries**: @hookform/resolvers available but components use manual state management
- **Validation**: Custom validation logic in components (check nulls/emptiness before submit)

### Styling
- **Utility-first CSS**: Tailwind only (no CSS modules). Use className for all styling
- **Component spacing**: `container mx-auto px-4` for consistent page padding
- **Responsive**: `hidden md:flex` for desktop-only, grid breakpoints at sm/md/lg
- **Theme colors**: `bg-primary`, `text-muted-foreground`, `border-border`, `bg-muted` — these come from CSS variables
- **Common patterns**:
  - Cards: `bg-white rounded-lg border border-border overflow-hidden`
  - Buttons: `bg-primary hover:bg-primary/90`
  - Links: Always wrap in `<Link>` component, use `<Button>` inside for styling consistency

### Image Handling
- **Next.js Image**: Must use `<Image>` with `fill` prop for containers, set `alt` text
- **Static images**: `/public/*` folder, referenced as `src="/image.png"`
- **Unoptimized**: next.config.mjs has `images: { unoptimized: true }` (static export mode)

### Routing & Navigation
- **Next/Link**: Always use for internal navigation, don't use `<a>` tags
- **Router**: [useRouter](app/booking/page.tsx#L3) for programmatic navigation like `router.push("/dashboard")`
- **Dynamic routes**: Example: `/booking?service={id}` for service selection

## Developer Workflows

### Build & Run
```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build for static export
npm run start        # Start production server
npm run lint         # Run eslint
```

### Static Export
- Config exports with `output: 'export'` and `trailingSlash: true` 
- No Server Components or API routes — all "use client" components
- Images must be unoptimized

### Testing Credentials
- Email: `customer@petshop.com`
- Password: `password123`
- User object has: id, email, name, phone

## Common Pitfalls to Avoid

1. **Don't forget "use client"**: Pages with interactive elements (forms, state) need this directive
2. **Don't hardcode colors**: Use theme classes like `text-primary`, not hex values
3. **Don't use `<a>` tags**: Always use `<Link>` for internal navigation
4. **localStorage scope**: Only works client-side; wrap access in useEffect or check isClient
5. **Image paths**: All images must be in `/public/` and referenced with leading `/`
6. **Suspense boundaries**: Pages with `loading.tsx` should wrap async components properly

## Key Integration Points

- **Icons**: lucide-react (Menu, X, Star, MapPin, Phone, Mail, Lock, etc.)
- **Forms**: Use manual state or @hookform/resolvers + react-hook-form
- **Toast notifications**: sonner (via [components/ui/sonner.tsx](components/ui/sonner.tsx))
- **Date handling**: date-fns for calendar/date logic
- **Carousel**: embla-carousel-react for image galleries

## When Adding New Features

1. Create feature in `app/[feature-name]/page.tsx`
2. Import data from `lib/booking-data.ts` or `lib/auth.ts`
3. Use existing [components/service-card.tsx](components/service-card.tsx) or build from UI components
4. Add "use client" if page has interactivity
5. Follow className patterns from existing pages (header, main, section, container patterns)
6. Store user data in localStorage after auth actions
