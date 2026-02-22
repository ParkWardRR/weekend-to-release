---
title: Clarify Ambiguities
description: Resolve unknowns in your spec with interactive Q&A.
---

The `/speckit.clarify` command scans your specification for ambiguities and helps you resolve them interactively.

## How It Works

1. The agent scans the spec for `[NEEDS CLARIFICATION]` markers and implicit ambiguities
2. It categorizes findings across a taxonomy: scope, data model, UX flow, non-functional, integration, edge cases, constraints, terminology
3. It generates up to 5 prioritized questions
4. For each question, it presents a recommended option with reasoning
5. You accept, reject, or provide a custom answer
6. The spec is updated inline with your decisions

## Example Interaction

**Agent:** Your spec has 3 items needing clarification.

**Question 1 of 3:** What notification channel should overdue alerts use?
- **(Recommended) In-app notifications** -- Simplest to implement, no external dependencies, aligns with Article VII (Simplicity)
- Email notifications -- Requires SMTP setup, adds complexity
- Push notifications -- Requires service worker, mobile considerations

**You:** Accept recommended.

**Result:** The agent replaces `[NEEDS CLARIFICATION: notification channel]` with:
```
FR-004: The system shall display in-app notifications when a task is overdue.
  Clarification: In-app chosen over email/push for simplicity (Article VII).
```

## When to Run It

Run `/speckit.clarify` after `/speckit.specify` generates the initial spec. You can run it multiple times. Each pass resolves more ambiguities until the spec is clean.

A spec with zero `[NEEDS CLARIFICATION]` markers is ready for the [Plan phase](/weekend-to-release/plan/).
