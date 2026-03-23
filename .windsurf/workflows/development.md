# XBit Development Workflow

## Project Structure
- **Framework:** React + Vite + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Routing:** React Router (environment-specific)
- **Deployment:** GitHub Pages via GitHub Actions

## Routing Configuration

### Environment-Specific Routers
The project uses different routers for local vs production:

**Local Development:** `BrowserRouter` with `basename="./"`
- Clean URLs: `http://localhost:8080/`, `http://localhost:8080/prislista`
- Hash links scroll smoothly to sections

**Production (GitHub Pages):** `HashRouter` (no basename)
- Hash URLs: `https://xbitse.github.io/xbitse/#/`, `https://xbitse.github.io/xbitse/#/prislista`
- Handles subdirectory deployment correctly

### Creating Navigation Links

#### 1. Hash Links (Section Navigation)
For links that scroll to sections on the home page:

```typescript
const navLinks = [
  { href: "#services", label: "Tjänster" },
  { href: "#rut", label: "RUT-avdrag" },
  { href: "#about", label: "Om oss" },
  { href: "#contact", label: "Kontakt" },
];
```

**Important:** Never prepend `import.meta.env.BASE_URL` to hash links. Use the hash directly.

#### 2. Page Links (Route Navigation)
For links to separate pages:

```typescript
const navLinks = [
  { href: "/prislista", label: "Prislista" },
];
```

**Implementation:** Use React Router's `Link` component:
```tsx
<Link to="/prislista">Prislista</Link>
```

### Common Mistakes to Avoid

❌ **Don't use BASE_URL in navigation:**
```typescript
// WRONG - breaks one environment
window.location.href = `${import.meta.env.BASE_URL}${link.href}`;
```

✅ **Use simple paths:**
```typescript
// CORRECT - works in both environments
window.location.href = link.href; // for hash links on non-home pages
```

## Asset Path Rules

### Images and Static Assets
**CRITICAL:** Always use `import.meta.env.BASE_URL` for images in React components:

```tsx
// CORRECT - works in both environments
<img src={`${import.meta.env.BASE_URL}image-name.png`} alt="description" />

// WRONG - breaks GitHub Pages
<img src="/image.png" alt="description" />

// WRONG - breaks production builds  
<img src="./image.png" alt="description" />
```

### Environment Values
- **Local:** `BASE_URL = "./"`
- **Production:** `BASE_URL = "/xbitse/"`

### Navigation Links
- **Hash links:** Use simple format `#section-id`
- **Page links:** Use React Router `Link to="/path"`
- **NEVER** use `import.meta.env.BASE_URL` in navigation

### Favicon and Meta Tags
- Use absolute paths with cache-busting: `href="/favicon.ico?v=5"`
- These work because they're in HTML head, not React components

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Push to deploy
npm run build && git add -A && git commit -m "message" && git push origin main
```

## Deployment

1. Push to `main` branch
2. GitHub Actions automatically builds and deploys to GitHub Pages
3. Site available at: https://xbitse.github.io/xbitse/

## File Locations

- **Router Configuration:** `src/components/Router.tsx`
- **Header Navigation:** `src/components/Header.tsx`
- **Footer Navigation:** `src/components/Footer.tsx`
- **Vite Config:** `vite.config.ts` (contains base path settings)
