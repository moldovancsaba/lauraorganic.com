# GDS Adoption Status

## Current Baseline

Laura Organic now consumes the current publishable GDS package line under the `@doneisbetter/*` scope.

Active package/runtime contract:

- `@doneisbetter/gds-theme/client` for the root provider in [src/app/providers.tsx](/Users/Shared/Projects/lauraorganic/src/app/providers.tsx)
- `@doneisbetter/gds-theme/server` for the theme extension in [src/theme/gds-theme.ts](/Users/Shared/Projects/lauraorganic/src/theme/gds-theme.ts)
- `@doneisbetter/gds-core/server` for server-safe locale/message lookup in [src/app/layout.tsx](/Users/Shared/Projects/lauraorganic/src/app/layout.tsx)
- `@doneisbetter/gds-core/client` for interactive public primitives in:
  - [src/app/page.tsx](/Users/Shared/Projects/lauraorganic/src/app/page.tsx)
  - [src/app/elorendeles/page.tsx](/Users/Shared/Projects/lauraorganic/src/app/elorendeles/page.tsx)
  - [src/components/reservation/reservation-summary-panel.tsx](/Users/Shared/Projects/lauraorganic/src/components/reservation/reservation-summary-panel.tsx)

## Consumed GDS Version

- package line: `2.6.1`
- SSOT docs reviewed from `/Users/Shared/Projects/general-design-system`
- adoption manifest: [gds-adoption.json](/Users/Shared/Projects/lauraorganic/gds-adoption.json)

## Current Install Path

The canonical package names are in use from npm:

- `@doneisbetter/gds-theme@2.6.1`
- `@doneisbetter/gds-core@2.6.1`
- `@doneisbetter/gds-admin@2.6.1`
- `@doneisbetter/gds-eslint-config@2.6.1`
- `@doneisbetter/gds-compliance@2.6.1`

This now matches the canonical package source.

## Canonical Contracts Currently Used

- `PublicShell`
- `PublicNav`
- `EditorialHero`
- `FeatureBand`
- `PageHeader`
- `PublicProductCard`
- `PublicBrandFooter`
- `AccentPanel`

## Repo-Level Compliance

Active governance files:

- [gds-adoption.json](/Users/Shared/Projects/lauraorganic/gds-adoption.json)
- [eslint.config.mjs](/Users/Shared/Projects/lauraorganic/eslint.config.mjs)
- [README.md](/Users/Shared/Projects/lauraorganic/README.md)

Active compliance commands:

```bash
npm run lint
npm run gds:manifest
npm run gds:compliance
```

## Remaining Local Responsibility

These remain product-local by design and are allowed:

- brand theme overrides in [src/theme/gds-theme.ts](/Users/Shared/Projects/lauraorganic/src/theme/gds-theme.ts)
- narrow global layout and branding CSS in [src/app/globals.css](/Users/Shared/Projects/lauraorganic/src/app/globals.css)
- reservation/business-flow code outside the design-system scope

## Current Exceptions

There are no active GDS adoption exceptions at the moment.

No legacy placeholder runtime imports should remain in the codebase after this migration.
