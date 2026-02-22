---
title: The Charter Phase
description: Define what to build with structured charters before writing any code.
---

The Charter phase transforms a feature idea into a structured charter. Run `/auro.charter "your feature description"` and Auro creates a branch, generates a charter from the template, and marks ambiguities.

## What Gets Generated

```mermaid
flowchart LR
    A[Feature Idea] --> B["/auro.charter"]
    B --> C[Branch Created]
    C --> D[charter.md Generated]
    D --> E[Review & Clarify]
```

The charter contains four sections:

1. **User Stories** -- Prioritized P1/P2/P3 scenarios with acceptance criteria
2. **Functional Requirements** -- Numbered FR-001+ requirements with entity definitions
3. **Success Criteria** -- Measurable outcomes SC-001+ in Given/When/Then format
4. **Edge Cases** -- Boundary conditions and error scenarios

Each user story must be independently testable. If you implement only one story, you should still have a viable MVP.

## Key Principle

Ambiguity is marked, not assumed. When the agent encounters something unclear, it writes `[NEEDS CLARIFICATION: question]` instead of guessing. You resolve these with `/auro.clarify`.

## Pages in This Section

- [User Stories](/weekend-to-release/charter/user-stories/) -- P1/P2/P3 priority system
- [Requirements](/weekend-to-release/charter/requirements/) -- FR numbering and entity modeling
- [Success Criteria](/weekend-to-release/charter/success-criteria/) -- Measurable outcomes
- [Clarify Ambiguities](/weekend-to-release/charter/clarify/) -- Resolving unknowns interactively
