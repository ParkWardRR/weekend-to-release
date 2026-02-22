---
title: The Plan Phase
description: Translate specifications into technical implementation plans.
---

The Plan phase takes your clean specification and produces a technical implementation plan. Run `/speckit.plan` and the agent generates architecture decisions, phase gates, and supporting documents.

## Two Sub-Phases

```mermaid
flowchart LR
    S[Spec] --> P0[Phase 0: Research]
    P0 --> P1[Phase 1: Design]
    P1 --> O1[plan.md]
    P1 --> O2[research.md]
    P1 --> O3[data-model.md]
    P1 --> O4[contracts/]
    P1 --> O5[quickstart.md]
```

**Phase 0 -- Research:** Resolves all remaining `[NEEDS CLARIFICATION]` items. Produces `research.md` documenting decisions, rationale, and rejected alternatives.

**Phase 1 -- Design:** Creates the technical architecture. Produces data models, API contracts, and quickstart validation scenarios.

## Constitution Check

Before any design work begins, the plan runs a constitution check. The three gates must pass:

1. **Simplicity Gate** -- Is the architecture minimal?
2. **Anti-Abstraction Gate** -- Are frameworks used directly?
3. **Integration-First Gate** -- Do contracts exist?

If a gate fails, the plan explains why and suggests corrections.

## Pages in This Section

- [Technical Context](/weekend-to-release/plan/technical-context/) -- Documenting your tech stack
- [Phase Gates](/weekend-to-release/plan/phase-gates/) -- Constitutional enforcement
- [Project Structure](/weekend-to-release/plan/project-structure/) -- Layout options
