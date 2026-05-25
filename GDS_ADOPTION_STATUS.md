# GDS Adoption Status

## Current Laura Baseline

Laura Organic is now built on real GDS runtime packages rather than local stand-in UI components.

Canonical GDS primitives currently used in the landing page:

- `PublicShell`
- `PublicNav`
- `EditorialHero`
- `FeatureBand`
- `PageHeader`
- `PublicProductCard`
- `PublicBrandFooter`
- `AccentPanel`

Runtime/theme integration:

- `GdsProvider` in [src/app/providers.tsx](/Users/Shared/Projects/lauraorganic/src/app/providers.tsx)
- theme extension in [src/lib/gds-theme.ts](/Users/Shared/Projects/lauraorganic/src/lib/gds-theme.ts)
- package consumption from [package.json](/Users/Shared/Projects/lauraorganic/package.json) through vendored tarballs in [vendor/gds](/Users/Shared/Projects/lauraorganic/vendor/gds)

## What Was Removed

The app no longer depends on project-local stand-in design-system components for public layout composition.

Removed local stand-ins:

- prior local shell wrapper
- prior local accent panel wrapper
- prior local section-header wrapper
- prior local theme file replaced by the GDS theme extension contract

## What Was Fixed In Laura

- the public page is composed from canonical GDS primitives
- the `Rólunk` navigation target now resolves to a real section instead of a dead anchor
- feature-band meta formatting no longer depends on inline styles
- the app builds and lints successfully on the current GDS-based setup

## What Is Still Project-Local

These parts are still Laura-specific and expected:

- brand colors, typography, and flat-surface preferences in [src/lib/gds-theme.ts](/Users/Shared/Projects/lauraorganic/src/lib/gds-theme.ts)
- page-level composition styling in [src/app/globals.css](/Users/Shared/Projects/lauraorganic/src/app/globals.css)
- content, imagery, and layout assembly in [src/app/page.tsx](/Users/Shared/Projects/lauraorganic/src/app/page.tsx)

These are acceptable local brand adaptations, not parallel UI primitives.

## Remaining Upstream GDS Blockers

These are the real reasons Laura is not yet fully reducible to zero branded page-level CSS or fully server-safe public rendering.

### 1. `@gds/core/server` is still not safe enough for this page

Attempted change:

- switch [src/app/page.tsx](/Users/Shared/Projects/lauraorganic/src/app/page.tsx) from `@gds/core/client` to `@gds/core/server`
- remove page-level client boundary

Observed result:

- Next.js prerender failed during `npm run build`
- the page currently needs `"use client"` to remain stable with the shipped GDS package line in this repo

Practical effect:

- Laura cannot yet rely on the promised server entrypoint for this public landing page

### 2. `EditorialHero` still needs stronger branded-public controls

Current workaround in Laura:

- hero image masking and blend treatment in [src/app/globals.css](/Users/Shared/Projects/lauraorganic/src/app/globals.css)

Missing GDS capability:

- more precise background-matched fade behavior
- clearer text/media slot hooks
- flatter public presentation controls without page-level overrides

### 3. `FeatureBand` is still too narrow for process-strip use

Current workaround in Laura:

- local numbered-step treatment in the preorder section

Missing GDS capability:

- stronger process-strip variant
- better numbered-step support
- broader public support-strip flexibility

### 4. `PublicShell` still needs branded header flexibility

Current workaround in Laura:

- local nav and CTA styling in [src/app/globals.css](/Users/Shared/Projects/lauraorganic/src/app/globals.css)

Missing GDS capability:

- stronger branded header spacing and slot-control contract
- clearer mobile-header/navigation flexibility

### 5. `PublicBrandFooter` still needs richer layout hooks

Current workaround in Laura:

- local footer media sizing and quote styling

Missing GDS capability:

- stronger layout variants for media/narrative/secondary composition
- stable slot hooks for branded footer refinement

### 6. `PublicProductCard` still needs tighter preorder/pickup semantics

Current workaround in Laura:

- local CTA styling
- product helper text kept simple to avoid semantic ambiguity

Missing GDS capability:

- stronger public preorder/pickup messaging contract
- clearer helper/state separation for food/menu use

## Verification

Current verified commands:

```bash
npm run build
npm run lint
```

Expected result:

- build passes
- lint passes
- homepage prerenders as static content

## Recommended Next Steps

### In Laura

- keep the current GDS-based baseline stable
- minimize new page-local styling that duplicates component behavior
- upgrade to published GDS packages once the upstream install contract is stable

### In GDS

- harden `@gds/core/server`
- improve `EditorialHero`
- improve `FeatureBand`
- improve `PublicShell`
- improve `PublicBrandFooter`
- improve `PublicProductCard`

## Operational Rule For Laura

Do not introduce new local public UI primitives unless a shipped GDS component is genuinely missing or broken.

Branding belongs in:

- theme extension
- content
- imagery
- narrowly-scoped page styling

Layout/system behavior should continue moving toward canonical GDS items as upstream capabilities improve.
