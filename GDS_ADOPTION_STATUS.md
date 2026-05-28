# GDS Adoption Status

## Current Baseline

Laura Organic now consumes the current publishable GDS package line under the `@doneisbetter/*` scope.

Active package/runtime contract:

- `@doneisbetter/gds/client` for the root provider and interactive public primitives in:
  - [src/app/providers.tsx](/Users/Shared/Projects/lauraorganic/src/app/providers.tsx)
  - [src/app/page.tsx](/Users/Shared/Projects/lauraorganic/src/app/page.tsx)
  - [src/app/elorendeles/page.tsx](/Users/Shared/Projects/lauraorganic/src/app/elorendeles/page.tsx)
  - [src/components/reservation/reservation-summary-panel.tsx](/Users/Shared/Projects/lauraorganic/src/components/reservation/reservation-summary-panel.tsx)
- `@doneisbetter/gds/server` for the theme extension and server-safe locale/message lookup in:
  - [src/theme/gds-theme.ts](/Users/Shared/Projects/lauraorganic/src/theme/gds-theme.ts)
  - [src/app/layout.tsx](/Users/Shared/Projects/lauraorganic/src/app/layout.tsx)

## Consumed GDS Version

- package line: `2.6.4`
- SSOT docs reviewed from [sovereignsquad/general-design-system](https://github.com/sovereignsquad/general-design-system)
- adoption manifest: [gds-adoption.json](/Users/Shared/Projects/lauraorganic/gds-adoption.json)

## Current Install Path

The canonical package names are in use from npm:

- `@doneisbetter/gds@2.6.4`
- `@doneisbetter/gds-eslint-config@2.6.4`
- `@doneisbetter/gds-compliance@2.6.4`

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
- `EmptyState`
- `ChoiceChip`
- `StatusBadge`
- `FormField`

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

No legacy split-entry runtime imports should remain in the codebase after this migration.

## Additional Canonical Items Available Now

The unified `@doneisbetter/gds` package exposes more governed items than Laura currently uses. These can be adopted without requesting new GDS features:

- Public/editorial:
  - `ArticleShell`
  - `BrowseSurface`
  - `ConsumerSection`
  - `EditorialCard`
  - `MediaCard`
  - `CtaButtonGroup`
  - `EmptyState`
  - `PlaceholderPanel`
  - `PublicSiteFooter`
  - `StatsSection`
- Selection, filtering, and status:
  - `ChoiceChip`
  - `FilterDrawer`
  - `StatusBadge`
- Trust and access messaging:
  - `AccessSummary`
  - `AccessRecoveryPanel`
- Admin/operations for future Laura issues:
  - `AppShell`
  - `WorkspaceHeader`
  - `DataToolbar`
  - `DataTable`
  - `ResponsiveDataView`
  - `ContentOpsEditor`
  - `ContentOpsSection`
  - `FormSection`
  - `MetricCard`
  - `ProgressCard`
  - `StatsStrip`
  - `ConfirmDialog`
  - `UploadDropzone`
  - `MediaField`

Best immediate Laura fits:

- `EmptyState` or `PlaceholderPanel` for richer no-menu / no-order states
- `CtaButtonGroup` if the landing page returns to multi-CTA hero behavior
- `ChoiceChip` and `StatusBadge` for pickup-slot and inventory-state presentation
- `ResponsiveDataView`, `DataToolbar`, and `ConfirmDialog` for the planned reservation console
