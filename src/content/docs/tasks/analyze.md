---
title: Consistency Analysis
description: Check alignment across your charter, plan, and tasks.
---

The `/auro.analyze` command performs a read-only analysis of your charter artifacts. It finds gaps, duplications, and inconsistencies before implementation begins.

## What It Checks

| Detection Pass | What It Finds |
|---------------|---------------|
| **Duplication** | Multiple tasks doing the same thing |
| **Ambiguity** | Vague adjectives without metrics ("fast", "scalable") |
| **Underdefinition** | Tasks without mapped requirements |
| **Constitution alignment** | Violations of constitutional articles |
| **Coverage gaps** | Requirements with zero tasks |
| **Inconsistencies** | Terminology drift, conflicting statements |

## Severity Levels

- **CRITICAL** -- Missing coverage for a P1 requirement. Must fix.
- **HIGH** -- Constitution violation. Should fix before implementation.
- **MEDIUM** -- Ambiguity or inconsistency. Fix when convenient.
- **LOW** -- Style or naming issue. Optional.

## Output

The analysis produces a findings table (max 50 items), a coverage summary, and remediation suggestions. It does not modify any files.

```
Coverage Summary:
  Requirements: 7 total, 7 covered (100%)
  User Stories: 3 total, 3 with tasks (100%)
  Constitution: 2 warnings (Articles VII, IX)

Findings:
  [HIGH] FR-004 has no corresponding task
  [MEDIUM] SC-002 uses "fast" without a metric
  [LOW] Task [12] and [15] have similar descriptions
```

## When to Run

Run `/auro.analyze` after generating tasks and before starting implementation. It is your last chance to catch problems cheaply. After implementation begins, fixes cost 10x more.
