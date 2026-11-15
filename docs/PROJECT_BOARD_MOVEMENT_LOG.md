# Project board review and manual movement / Scrum journal

Reviewed: 2026-11-15 UTC. Repository: moldovancsaba/lauraorganic.com.

Canonical board: [project board](https://github.com/users/moldovancsaba/projects/29). **The board is the owner's source of truth and is read-only. Never add, remove, reorder or move cards or edit project fields.** This file records observations and conditional proposals for manual owner decisions only.

## Verified coverage and limitations

- Repository collection: 8 entries, including 8 issues and 0 pull requests; 7 issues are open.
- Board: all 8 returned items were read; totalCount matches the captured item count.
- Linked issue-state / Done-status discrepancies: 0. Open issues absent from this board snapshot: 0. Absence here does not prove absence from every board and does not authorize creating a card.
- Exact title-and-body duplicate groups among open issues: 0. Similar titles alone were not treated as duplicates.
- Issue and board reads succeeded. No access failure was observed for these captured collections. No board write was attempted.
- This is a documentation-only review. No runtime suite, production flow, user data mutation, external message, dependency upgrade or deployment action was performed. Source presence and previous Done status are not fresh acceptance evidence.

## Source observations and work clusters

### Reservation persistence is no longer an empty endpoint

Open #1 and README describe a transient stub, but the current POST route validates input, requires an idempotency key and calls persistReservationDraft. The store writes .data/reservations.store.json (or RESERVATION_STORE_PATH), uses a temporary-file rename and an in-process write lock, and indexes replay keys. Reframe remaining acceptance around actual production storage/durability, multi-process concurrency, request binding/replay correctness and failure recovery; source file persistence is not proof of serverless durable storage or distributed locking. No reservation was submitted or customer data read.

### Operational work remains distinct

#2 governed active-week publication and #3 server-side sellout protection remain requirements even with a cart and persistence helper. #4 operator transitions and #5 durable confirmation/pickup messaging need their own authorized workflows, delivery/retry evidence and traceable human handling. A generic commerce/email service could be evaluated against these contracts, but no provider is selected and no message sent. #6 already has client-side analytics events in src/lib/analytics.ts; this is not the complete durable operational taxonomy or verified reporting. #7 still requires mobile/accessibility/recovery and operational acceptance, beyond the closed UX baseline #8.

### Modernization and documentation boundaries

Preserve the calm brand and existing GDS consumer/exception contract; no package upgrade or design rewrite is needed for this review. README's absolute macOS links are not portable proof of local resources; new references are relative. Existing runtime/manifest package versions remain evidence, not an assertion that they are today's latest upstream release. This docs-only pass did not certify runtime gates, alter menu/inventory/customer records, or activate production ordering.

Inspected sources: [README.md](../README.md), [package.json](../package.json), [src/app/api/reservations/route.ts](../src/app/api/reservations/route.ts), [src/lib/reservation-store.ts](../src/lib/reservation-store.ts), [src/lib/analytics.ts](../src/lib/analytics.ts). Documentation paths and register coverage were checked before publication. No new technology is selected or installed by this assessment.

## Per-card review register

A destination is a proposal, never an executed move. Historical closed cards stay historical; migrated or not-planned closures do not prove feature delivery. Open work remains subject to its issue's acceptance criteria and owner decision.

| Issue / card | Title | Issue state / reason | Observed current column | Proposed destination / next evidence | Owner decision / manual execution |
| --- | --- | --- | --- | --- | --- |
| [#1](https://github.com/moldovancsaba/lauraorganic.com/issues/1) | Ordering: Durable reservation persistence and idempotent submission handling | open / unspecified | In Progress (NOW) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#2](https://github.com/moldovancsaba/lauraorganic.com/issues/2) | Content: Governed weekly menu publication and active-week resolution | open / unspecified | Todo (NEXT) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#3](https://github.com/moldovancsaba/lauraorganic.com/issues/3) | Ordering: Inventory enforcement and sellout protection for weekly dishes | open / unspecified | Backlog (SOONER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#4](https://github.com/moldovancsaba/lauraorganic.com/issues/4) | Operations: Reservation console with governed status transitions | open / unspecified | Backlog (SOONER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#5](https://github.com/moldovancsaba/lauraorganic.com/issues/5) | Operations: Customer confirmation and pickup messaging workflow | open / unspecified | Backlog (SOONER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#6](https://github.com/moldovancsaba/lauraorganic.com/issues/6) | Analytics: Reservation funnel telemetry and operational event taxonomy | open / unspecified | Roadmap (LATER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#7](https://github.com/moldovancsaba/lauraorganic.com/issues/7) | Quality: Launch hardening matrix for accessibility, mobile, and recovery | open / unspecified | Roadmap (LATER) | Remain; satisfy original issue acceptance before proposing Review or Done. | Pending / not executed |
| [#8](https://github.com/moldovancsaba/lauraorganic.com/issues/8) | Baseline: GDS-governed public preorder UX foundation | closed / completed | Done | Remain; preserve historical evidence, no fresh completion claim. | Pending / not executed |

## Append-only Scrum / manual movement journal

| Date / Scrum reference | Board and issue | Verified current column | Proposed destination | Evidence / rationale | Dependency / blocker | Owner decision | Manual execution / person | Verified new column | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-11-15 review | Board and issues above | Snapshot above | No automatic move | Recorded source/issue/board review | See unresolved requirements | Pending | Not executed | Snapshot only | Preserve history |
| YYYY-MM-DD / meeting link | Board URL + issue URL | Exact observed value | Exact proposed value or remain | Acceptance link | Specific condition | Pending | Not executed | Not verified | — |

Read the issue and actual board before each future proposal. Retain previous observations when a decision changes. Record execution only after the owner performs it and the result is read back. Documentation rollback requires no product or board rollback.
