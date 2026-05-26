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

The canonical package names are in use, but the install source is a temporary GitHub release asset path:

- [gds-v2.6.1 release assets](https://github.com/sovereignsquad/general-design-system/releases/tag/gds-v2.6.1)

Reason:

- the SSOT release/install docs approve GitHub release assets until npm publication is live
- the future canonical source remains npm

This exception is documented in the manifest and is temporary.

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

### Temporary package distribution exception

- scope: install source only
- current path: GitHub release asset tarballs for `gds-v2.6.1`
- removal condition: switch to npm installation as soon as `@doneisbetter/*` is published there

No legacy placeholder runtime imports should remain in the codebase after this migration.
