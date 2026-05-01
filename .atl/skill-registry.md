# Skill Registry

**Delegator use only.** Any agent that launches sub-agents reads this registry to resolve compact rules, then injects them directly into sub-agent prompts. Sub-agents do NOT read this registry or individual SKILL.md files.

See `_shared/skill-resolver.md` for the full resolution protocol.

## User Skills

| Trigger | Skill | Path |
|---------|-------|------|
| "improve accessibility", "a11y audit", "WCAG compliance", "screen reader support", "keyboard navigation", "make accessible" | accessibility | D:/Workspace/luxe-estate/.agents/skills/accessibility/SKILL.md |
| "refactoring components with boolean prop proliferation", "building flexible component libraries", "designing reusable APIs", "compound components", "render props", "context providers", "component architecture", "React 19" | vercel-composition-patterns | D:/Workspace/luxe-estate/.agents/skills/composition-patterns/SKILL.md |
| "build web components", "pages", "artifacts", "posters", "applications", "websites", "landing pages", "dashboards", "React components", "HTML/CSS layouts", "styling/beautifying any web UI" | frontend-design | D:/Workspace/luxe-estate/.agents/skills/frontend-design/SKILL.md |
| "Next.js best practices", "file conventions", "RSC boundaries", "data patterns", "async APIs", "metadata", "error handling", "route handlers", "image/font optimization", "bundling" | next-best-practices | D:/Workspace/luxe-estate/.agents/skills/next-best-practices/SKILL.md |
| "Next.js 16 Cache Components", "PPR", "use cache directive", "cacheLife", "cacheTag", "updateTag" | next-cache-components | D:/Workspace/luxe-estate/.agents/skills/next-cache-components/SKILL.md |
| "Upgrade Next.js", "migrate Next.js version", "codemods" | next-upgrade | D:/Workspace/luxe-estate/.agents/skills/next-upgrade/SKILL.md |
| "Node.js backend", "Express/Fastify server", "REST API", "GraphQL backend", "microservices", "authentication", "middleware patterns" | nodejs-backend-patterns | D:/Workspace/luxe-estate/.agents/skills/nodejs-backend-patterns/SKILL.md |
| "Node.js architecture", "framework selection", "async patterns", "security best practices", "Node.js decisions" | nodejs-best-practices | D:/Workspace/luxe-estate/.agents/skills/nodejs-best-practices/SKILL.md |
| "React performance", "React/Next.js optimization", "data fetching", "bundle size", "re-renders", "React best practices" | vercel-react-best-practices | D:/Workspace/luxe-estate/.agents/skills/react-best-practices/SKILL.md |
| "improve SEO", "optimize for search", "fix meta tags", "add structured data", "sitemap", "search engine optimization" | seo | D:/Workspace/luxe-estate/.agents/skills/seo/SKILL.md |
| "Tailwind CSS", "styling components", "responsive layouts", "design systems", "CSS utilities" | tailwind-css-patterns | D:/Workspace/luxe-estate/.agents/skills/tailwind-css-patterns/SKILL.md |
| "TypeScript advanced types", "generics", "conditional types", "mapped types", "type utilities", "type-safe applications" | typescript-advanced-types | D:/Workspace/luxe-estate/.agents/skills/typescript-advanced-types/SKILL.md |

## Compact Rules

Pre-digested rules per skill. Delegators copy matching blocks into sub-agent prompts as `## Project Standards (auto-resolved)`.

### accessibility
- Prefer native HTML elements (`<button>`, `<input>`, `<nav>`) over ARIA — native is always accessible
- Every image needs `alt` text (or `alt=""` for decorative with `role="presentation"`)
- Icon buttons need `aria-label` or visually hidden text for accessible name
- Color contrast: 4.5:1 minimum for normal text (AA), 3:1 for large text/UI components
- Never rely on color alone — add icons/text for errors/warnings
- All interactive elements keyboard accessible (Tab/Enter/Space), no keyboard traps
- Use `:focus-visible` for visible focus indicators, never `outline: none` without alternative
- Interactive targets minimum 24x24px, recommend 44x44px for touch
- Respect `prefers-reduced-motion` — disable animations for users who prefer reduced motion
- Use `role="alert"` or `aria-live` for dynamic content announcements
- Skip links for keyboard navigation bypassing repetitive content
- Form labels: associate `<label>` with `id`, use `aria-describedby` for instructions/errors
- Page must have `lang` attribute on `<html>`

### vercel-composition-patterns
- Avoid boolean props (`isX`, `isEditing`, `showY`) — use composition instead
- Compound components: create `Composer.Frame`, `Composer.Input`, `Composer.Footer` etc.
- Lifting state: move shared state into Provider, siblings access via context
- Context interface pattern: `{ state, actions, meta }` for dependency injection
- Provider is the only place that knows how state is managed — UI is dumb
- Create explicit variant components instead of one component with boolean modes
- Prefer `children` over `renderX` props for composition
- React 19: `ref` is a regular prop (no `forwardRef`), use `use()` instead of `useContext()`

### frontend-design
- Choose BOLD aesthetic direction before coding — committed style, not safe mediocrity
- Typography: distinctive fonts, avoid Inter/Roboto/Arial — pair display + body fonts
- Motion: CSS-only for simple cases, Motion library for React — orchestrate page load with staggered reveals
- Spatial: asymmetry, overlap, diagonal flow, grid-breaking — generous negative space OR controlled density
- Backgrounds: create atmosphere with textures, gradients, noise — not solid fills
- Never generic AI aesthetics: no purple gradients on white, no predictable layouts
- Match complexity to vision — minimalist needs precision, maximalist needs elaborate code
- Design memorable differentiation — one thing someone will remember

### next-best-practices
- File conventions: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts`
- Dynamic routes: `[param]`, catch-all `[...param]`, optional `[...param]`
- RSC: async components are Server Components — no async in client components
- Server Components can `use` context directly; client components need `useContext`
- `cookies()`, `headers()`, `searchParams` are async in Next.js 15+
- `generateStaticParams` for static generation of dynamic routes
- Image: always `next/image`, specify `sizes` for responsive, use `priority` for LCP
- Font: `next/font` for optimization, use `display: swap`
- Route Handlers vs Server Actions: use Actions for mutations, Handlers for GET-like API
- Error handling: `error.tsx` for errors, `not-found.tsx` for 404, `redirect()` for navigation
- `'use server'` at top of file for Server Actions, `'use client'` for Client Components
- Middleware in v16 is `proxy` (renamed from `middleware`)

### next-cache-components
- Enable via `cacheComponents: true` in `next.config.ts` (replaces `experimental.ppr`)
- Three content types: Static (sync, prerendered), Cached (`use cache`), Dynamic (Suspense)
- `use cache` directive: file-level, component-level, or function-level
- `cacheLife('hours'|'minutes'|'days'|'weeks'|'max')` for cache duration
- `cacheTag('tag-name')` for invalidation — tag individual records
- `updateTag()` for immediate invalidation within same request
- `revalidateTag()` for background revalidation
- Cannot use `cookies()`, `headers()`, `searchParams` inside `use cache` — pass as arguments
- `use cache: private` allows runtime APIs (compliance requirement only)
- Cache keys: build ID + function ID + serialized arguments
- Migrate `unstable_cache` → `use cache`, `revalidate=N` → `cacheLife`
- Edge runtime not supported, static export not supported

### next-upgrade
- Read `package.json` to detect current Next.js version before upgrading
- Fetch official upgrade guide from `nextjs.org/docs/app/guides/upgrading/codemods`
- Run codemods FIRST: `npx @next/codemod@latest <transform> <path>`
- Upgrade incrementally for major version jumps (e.g., 14 → 15 → 16)
- Update dependencies together: `npm install next@latest react@latest react-dom@latest`
- Review breaking changes in upgrade guide after running codemods
- Update TypeScript types: `npm install @types/react@latest @types/react-dom@latest`
- Test: run `npm run build` then `npm run dev` and test key functionality

### nodejs-backend-patterns
- Layered architecture: Controllers → Services → Repositories — never mix layers
- Input validation at boundaries (Zod/Joi), not in business logic
- Custom error classes: `AppError`, `ValidationError`, `NotFoundError`, `UnauthorizedError`
- Global error handler middleware — consistent error response format
- Environment variables for secrets — never hardcode
- Parameterized queries for SQL — prevent injection
- Rate limiting with `express-rate-limit` or similar
- Security headers: Helmet.js
- Connection pooling for databases — configure limits
- Health check endpoint for monitoring
- Graceful shutdown: clean up resources on SIGTERM

### nodejs-best-practices
- Framework selection by context: Hono (edge/serverless), Fastify (high perf), Express (legacy), NestJS (enterprise)
- Node.js 22+ has built-in test runner: `node --test src/**/*.test.ts`
- Use `async/await` for sequential, `Promise.all` for parallel independent ops
- Never sync I/O in production (no `readFileSync`)
- Validate at boundaries — API entry, before DB ops, external data
- Security: input validation, parameterized queries, bcrypt/argon2 for passwords, JWT verification
- Layered architecture for growing projects — single file OK for scripts/prototypes
- Status codes: 400 (bad input), 401 (no auth), 403 (no permission), 404 (not found), 500 (server error)
- Event loop awareness: async helps I/O, doesn't help CPU-bound (use worker threads)
- Test critical paths first — auth, payments, core business logic

### vercel-react-best-practices
- **CRITICAL waterfalls**: use `Promise.all()` for parallel independent fetches, avoid sequential awaits
- **Bundle size**: avoid barrel file imports (`import from 'lucide-react'` loads 1500+ modules), use direct paths or `optimizePackageImports`
- **Server Components**: parallelize with composition, hoist static I/O to module level
- **Client data**: use SWR for deduplication, `useTransition` for non-urgent updates
- **Re-renders**: subscribe to derived booleans not continuous values, use functional setState
- **Memoization**: don't memo simple primitives, use lazy init for expensive `useState` values
- **Effects**: put interaction logic in event handlers, not effects
- **Avoid layout thrashing**: batch DOM reads/writes, prefer CSS classes over inline styles
- **Hydration**: use inline script pattern for localStorage/theme to prevent flicker
- **Refs vs state**: use refs for transient values that don't need re-renders
- **LocalStorage**: version keys, wrap in try-catch (throws in private browsing)

### seo
- Single `<h1>` per page with primary keyword — logical heading hierarchy (no skipping levels)
- Title tags: 50-60 chars, primary keyword near start, unique per page
- Meta descriptions: 150-160 chars, include keyword naturally, unique per page
- Image `alt` text: descriptive, include keywords naturally — never empty except decorative
- URL structure: hyphens, lowercase, short (<75 chars), include keywords
- Canonical URLs: self-referencing for all pages, prevent duplicate content
- Structured data (JSON-LD): Organization, Product, Article, FAQ, Breadcrumbs
- XML sitemap: max 50K URLs or 50MB, submit to Google Search Console
- Internal links: descriptive anchor text with keywords
- Mobile: responsive viewport, 48px minimum tap targets
- HTTPS always — security trust signal for SEO
- robots.txt: allow crawling, don't block resources needed for rendering

### tailwind-css-patterns
- Mobile-first: base styles for mobile, add `sm:`, `md:`, `lg:`, `xl:`, `2xl:` prefixes
- Compose utilities: combine classes for complex styles, prefer over `@apply`
- Extract reusable patterns into components or `@apply` in CSS
- Dark mode: `dark:` prefix requires `darkMode: 'class'` or `'media'` in config
- Dark toggle: `document.documentElement.classList.toggle('dark')`
- Responsive order: non-responsive first, then responsive (`flex md:flex` not `md:flex flex`)
- Custom utilities: define in CSS with `@utility` or Tailwind config
- Design tokens: use Tailwind's spacing/color/typography scales, avoid arbitrary values
- Focus styles: always include visible focus states, respect `prefers-reduced-motion`
- Performance: ensure content paths include all template files for purging

### typescript-advanced-types
- Generics: `<T>` for reusable type-flexible components, `extends` for constraints
- Conditional types: `T extends U ? X : Y` for type-level logic
- Mapped types: `{ [K in keyof T]: T[K] }` transforms object shapes
- Template literals: `` `on${Capitalize<Event>}` `` for string pattern types
- Utility types: `Partial`, `Required`, `Readonly`, `Pick`, `Omit`, `Exclude`, `Extract`
- Discriminated unions for type-safe state machines: `{ type: 'loading' } | { type: 'error' }`
- `unknown` over `any` — enforce type checking
- `infer` keyword for extracting types: `T extends Promise<infer U> ? U : never`
- Type guards: `value is T` for narrowing, `asserts value is T` for assertion functions
- Prefer `interface` for object shapes, `type` for unions/complex types
- Avoid circular type references — can cause compiler errors
- Deep `Readonly`/`Partial` for nested object types

## Project Conventions

No convention files found in project root.