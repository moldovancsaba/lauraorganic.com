# Laura Organic

Next.js landing page for `lauraorganic.com`.

## UI Stack

- Next.js App Router
- GDS runtime packages via local vendored tarballs
- Mantine through the GDS provider contract

## Current GDS Status

The landing page is built on canonical GDS public primitives:

- `PublicShell`
- `PublicNav`
- `EditorialHero`
- `FeatureBand`
- `PageHeader`
- `PublicProductCard`
- `PublicBrandFooter`
- `AccentPanel`

Project-local branding is currently handled through:

- [src/lib/gds-theme.ts](/Users/Shared/Projects/lauraorganic/src/lib/gds-theme.ts)
- [src/app/globals.css](/Users/Shared/Projects/lauraorganic/src/app/globals.css)

See [GDS_ADOPTION_STATUS.md](/Users/Shared/Projects/lauraorganic/GDS_ADOPTION_STATUS.md) for the exact Laura-specific adoption baseline and the remaining upstream GDS blockers.

## Scripts

- `npm run dev` - local development
- `npm run build` - production build
- `npm run start` - run the production build locally

## Deployment

The repository is ready for automatic deployment on Vercel from GitHub.
