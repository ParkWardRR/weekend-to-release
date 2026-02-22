# Research Needed

This file tracks all unresolved placeholders in the docs. Replace placeholders with verified sources before treating any runbook as production-ready.

## Status Legend

- `OPEN` - not yet validated
- `IN_PROGRESS` - validation started
- `DONE` - validated and docs updated

## Backlog

| ID | Area | Placeholder | Source Needed | Status | Evidence |
|----|------|-------------|---------------|--------|----------|
| R-001 | Claude + Conductor | Canonical repo URL and branch policy | Internal repo governance docs | OPEN | `<LINK OR NOTE>` |
| R-002 | Claude + Conductor | Conductor UI flow labels and version notes | Conductor product docs / in-app help | OPEN | `<LINK OR NOTE>` |
| R-003 | Claude + Conductor | Claude model/tool permission baseline | Claude integration docs / team policy | OPEN | `<LINK OR NOTE>` |
| R-004 | Claude + Conductor | Repo CI commands (lint/test/build) | Project `package.json` and CI workflow | OPEN | `<LINK OR NOTE>` |
| R-005 | Claude + Conductor | Deployment verification URL/process | Deployment workflow docs | OPEN | `<LINK OR NOTE>` |
| R-006 | Google Antigravity | Official product identity and URL | Google official docs | OPEN | `<LINK OR NOTE>` |
| R-007 | Google Antigravity | Access model and integration method | Google official docs | OPEN | `<LINK OR NOTE>` |
| R-008 | Google Antigravity | Auth model, quotas, and limits | Google official docs | OPEN | `<LINK OR NOTE>` |
| R-009 | Google Antigravity | Deploy workflow and live URL | Project deployment docs | OPEN | `<LINK OR NOTE>` |
| R-010 | Xcode | Scheme/project/workspace canonical names | Project repo and Xcode settings | OPEN | `<LINK OR NOTE>` |
| R-011 | Xcode | Signing and export options | Apple Developer portal + team release policy | OPEN | `<LINK OR NOTE>` |
| R-012 | Xcode | Supported simulator/device matrix | QA matrix / release notes | OPEN | `<LINK OR NOTE>` |
| R-013 | Xcode | Distribution flow details | App Store Connect / internal release SOP | OPEN | `<LINK OR NOTE>` |

## Update Rules

1. Add source links or validation notes in `Evidence` when closing any `R-###` item.
2. Remove corresponding `[RESEARCH REQUIRED]` markers in docs when status reaches `DONE`.
3. Keep this file in sync with runbooks under `src/content/docs/walkthrough/`.
