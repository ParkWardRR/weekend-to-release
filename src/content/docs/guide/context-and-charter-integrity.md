---
title: Context Budget and charter Integrity
description: Resolve token-window constraints and keep charters as a long-lived source of truth.
---

This guide addresses two common failure modes in AI-assisted charter workflows:

1. Context windows get saturated by verbose charters, leaving too little room for implementation.
2. charters become branch-local artifacts that drift away from the actual target architecture.

## Gap 1: Token Budget and Context Limits

Large charters can consume too much context before implementation starts.

### Auro Solution: Layered charters + Budget Policy

Use three layers instead of one monolithic charter:

- **Canonical charter (long-lived)**: full target-state document in `.auro/charters/`.
- **Execution Brief (short-lived)**: the current story/phase summary used by the agent.
- **Evidence Pack (retrieved on demand)**: ADRs, contracts, benchmarks, and prior decisions.

Set a strict context budget per run:

- **25%** for requirements and constraints
- **60%** for implementation and tests
- **15%** for logs, errors, and diffs

When a run exceeds budget:

- compress old discussion into a changelog note,
- keep only unresolved constraints in active context,
- retrieve deeper detail from `.auro/charters/` only when needed.

## Gap 2: charter Philosophy Conflicts

If charters are treated as disposable branch artifacts, they stop representing the real system.

### Auro Solution: Canonical + Delta Model

Store charters in two tracks:

- **Canonical track**: stable target-state charters under `.auro/charters/`.
- **Delta track**: feature/branch deltas under `.auro/changes/<feature>/`.

Merge policy:

1. Implement from delta charters.
2. On merge, fold accepted deltas back into canonical charters.
3. Reject merges where code changes are not reflected in canonical charters.

This keeps charters alive and authoritative instead of becoming stale branch notes.

## Operational Rules

- Every PR must include either:
  - a charter delta update, or
  - an explicit `no-charter-change` rationale.
- Every release must run a **charter drift check**:
  - contracts vs implementation,
  - architecture decisions vs runtime topology,
  - success criteria vs observed metrics.

## Recommended File Layout

```text
.auro/
  charters/
    product/
    architecture/
  changes/
    001-auth-hardening/
    002-billing-rework/
  decisions/
    ADR-001.md
    ADR-002.md
```

This structure keeps context small during implementation while preserving a durable source of truth.
