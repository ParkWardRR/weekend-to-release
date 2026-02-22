---
title: Phase Gates
description: Constitutional enforcement through gates at every phase.
---

Phase gates are checkpoints where the plan is validated against your constitution. Three gates must pass before implementation begins.

## The Three Gates

<div class="flow-track" aria-label="Phase gate sequence">
  <div class="flow-card"><span class="flow-label">Input</span><p class="flow-title">Plan</p></div>
  <div class="flow-card"><span class="flow-label">Gate 1</span><p class="flow-title">Simplicity</p></div>
  <div class="flow-card"><span class="flow-label">Gate 2</span><p class="flow-title">Anti-Abstraction</p></div>
  <div class="flow-card"><span class="flow-label">Gate 3</span><p class="flow-title">Integration-First</p></div>
  <div class="flow-card"><span class="flow-label">Pass Result</span><p class="flow-title">Tasks Ready</p></div>
</div>
<div class="flow-gates" aria-label="Gate fail actions">
  <div class="flow-gate">
    <div class="flow-gate-title"><span>Simplicity Gate</span><span class="flow-chip">Fail action</span></div>
    <p>Simplify architecture and reduce moving parts.</p>
  </div>
  <div class="flow-gate">
    <div class="flow-gate-title"><span>Anti-Abstraction Gate</span><span class="flow-chip">Fail action</span></div>
    <p>Remove wrappers and use frameworks directly.</p>
  </div>
  <div class="flow-gate">
    <div class="flow-gate-title"><span>Integration-First Gate</span><span class="flow-chip">Fail action</span></div>
    <p>Define contracts before implementation work.</p>
  </div>
</div>

### Simplicity Gate (Article VII)

- Maximum 3 projects in the initial structure
- No future-proofing for hypothetical requirements
- If two approaches work, pick the one with fewer moving parts

**Fail example:** A plan proposes 5 microservices for a single-user task manager. Gate fails. Simplify to a monolith.

### Anti-Abstraction Gate (Article VIII)

- Frameworks used directly, not wrapped
- No abstract base classes without 3+ concrete implementations
- Single model per entity, no mapper layers

**Fail example:** A plan includes a `DatabaseAdapter` interface wrapping Drizzle ORM. Gate fails. Use Drizzle directly.

### Integration-First Gate (Article IX)

- API contracts defined before implementation
- Contract tests exist for every integration boundary
- Real databases in tests, not mocks

**Fail example:** A plan has no `contracts/` directory. Gate fails. Define the API before building it.

## Complexity Tracking

When a gate violation is justified, document it:

| Gate | Violation | Justification | Simpler Alternative Rejected Because |
|------|-----------|---------------|--------------------------------------|
| Simplicity | 4 projects | Mobile + API requires separate builds | Single project cannot target both web and mobile |

This table lives in the plan and is reviewed during task generation.
