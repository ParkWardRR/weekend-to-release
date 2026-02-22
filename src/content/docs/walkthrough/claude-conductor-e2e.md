---
title: "End-to-End: Claude + Conductor"
description: Practical runbook from project framing to deployment using Claude in Conductor.
---

This runbook is intentionally strict about unknowns. Anything not verified is marked with `[RESEARCH REQUIRED]`.

## Scope

- Environment: Conductor workspace + Claude-based coding agent
- Method: ACE (`/auro.constitution` -> `/auro.charter` -> `/auro.plan` -> `/auro.tasks` -> `/auro.implement`)
- Outcome: shipped change + traceable artifacts

## Preflight

1. Confirm repository and branch strategy:
- Repo URL: `<RESEARCH REQUIRED: canonical repo URL>`
- Default branch: `<RESEARCH REQUIRED: protected branch policy>`
2. Confirm local prerequisites:
- `git --version`
- `node --version`
- `npm --version`
3. Confirm Auro CLI:
- `auro --version`
4. Confirm Conductor workspace setup details:
- `<RESEARCH REQUIRED: exact Conductor UI flow/versioned labels>`
5. Confirm Claude integration mode:
- `<RESEARCH REQUIRED: Claude model + tool permissions policy>`

## Phase 1: Project Bootstrap

1. Create/open workspace in Conductor.
2. Ensure working directory is correct.
3. Initialize Auro (if missing):

```bash
auro init <PROJECT_NAME>
```

4. Validate `.auro/` structure exists.

Expected artifacts:
- `.auro/constitution.md`
- `.auro/templates/`
- `.auro/scripts/`

## Phase 2: Governance First

Run once per project:

```text
/auro.constitution
```

Checklist:
- principles are testable
- constraints are explicit
- no conflicting rules

If uncertain:
- add `[NEEDS CLARIFICATION: ...]` instead of assumptions

## Phase 3: Charter

Run:

```text
/auro.charter "<feature request>"
```

Review for:
- independent user stories (P1/P2/P3)
- numbered requirements
- measurable success criteria
- edge cases

Stop condition:
- no unresolved ambiguity markers

## Phase 4: Plan

Run:

```text
/auro.plan
```

Validate phase gates:
1. Simplicity
2. Anti-Abstraction
3. Integration-First

Expected outputs:
- `plan.md`
- `research.md`
- `data-model.md`
- `contracts/`
- `quickstart.md`

## Phase 5: Tasks

Run:

```text
/auro.tasks
```

Validate:
- every task maps to a user story
- `[P]` markers only where safe
- phases are dependency-correct

## Phase 6: Implementation

Run:

```text
/auro.implement
```

Execution guardrails:
- small commits per task cluster
- run tests after each phase
- stop and revise charter/plan if behavior drifts

## Phase 7: Verification

Run project checks:

```bash
<RESEARCH REQUIRED: exact lint command>
<RESEARCH REQUIRED: exact test command>
<RESEARCH REQUIRED: exact build command>
```

Manual verification checklist:
- happy path
- one expected failure path
- one boundary/edge case

## Phase 8: Ship

1. Open PR against `main`.
2. Include artifact traceability:
- charter section -> plan section -> task IDs -> commits
3. Merge with CI green.
4. Verify deployed URL:
- `<RESEARCH REQUIRED: environment URL>`

## Failure Recovery

If run gets stuck:
1. Return to latest valid charter.
2. Regenerate plan from charter.
3. Regenerate tasks from plan.
4. Continue implementation with smaller phase scope.

## Research Placeholders To Resolve

1. Conductor version-specific UI flow
2. Claude configuration and permissions
3. Canonical CI commands for this repo
4. Deployment verification URL/process
