# Laura Organic

Next.js App Router implementation for `lauraorganic.com`.

`https://github.com/sovereignsquad/general-design-system` is the single source of truth for design, UI, and UX. Project-local files describe only implementation adapter details, migration state, validation commands, and approved exceptions.

## GDS Runtime

- consumed GDS package line: `2.6.4`
- canonical package names:
  - `@doneisbetter/gds`
  - `@doneisbetter/gds-eslint-config`
  - `@doneisbetter/gds-compliance`
- current install path:
  - npm registry packages
  - pinned directly in [package.json](/Users/Shared/Projects/lauraorganic/package.json)

## Local Adapter Paths

- root provider: [src/app/providers.tsx](/Users/Shared/Projects/lauraorganic/src/app/providers.tsx)
- root layout bootstrap: [src/app/layout.tsx](/Users/Shared/Projects/lauraorganic/src/app/layout.tsx)
- theme extension: [src/theme/gds-theme.ts](/Users/Shared/Projects/lauraorganic/src/theme/gds-theme.ts)
- machine-readable adoption manifest: [gds-adoption.json](/Users/Shared/Projects/lauraorganic/gds-adoption.json)
- current migration/adoption notes: [GDS_ADOPTION_STATUS.md](/Users/Shared/Projects/lauraorganic/GDS_ADOPTION_STATUS.md)

## Canonical GDS Contracts In Use

- `PublicShell`
- `PublicNav`
- `EditorialHero`
- `FeatureBand`
- `PageHeader`
- `PublicProductCard`
- `PublicBrandFooter`
- `AccentPanel`
- `EmptyState`
- `ChoiceChip`
- `StatusBadge`
- `FormField`

## Validation Commands

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run gds:manifest`
- `npm run gds:compliance`

There are currently no active GDS adoption exceptions in this repo.
