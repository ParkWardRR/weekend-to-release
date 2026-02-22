---
title: The Plan Phase
description: Translate charters into technical implementation plans.
---

The Plan phase takes your clean charter and produces a technical implementation plan. Run `/auro.plan` and the agent generates architecture decisions, phase gates, and supporting documents.

## Two Sub-Phases

<div class="flow-track" aria-label="Plan phase structure">
  <div class="flow-card"><span class="flow-label">Input</span><p class="flow-title">Charter</p></div>
  <div class="flow-card"><span class="flow-label">Phase 0</span><p class="flow-title">Research</p></div>
  <div class="flow-card"><span class="flow-label">Phase 1</span><p class="flow-title">Design</p></div>
</div>
<div class="flow-output-grid" aria-label="Design outputs">
  <div class="flow-output">plan.md</div>
  <div class="flow-output">research.md</div>
  <div class="flow-output">data-model.md</div>
  <div class="flow-output">contracts/</div>
  <div class="flow-output">quickstart.md</div>
</div>

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
