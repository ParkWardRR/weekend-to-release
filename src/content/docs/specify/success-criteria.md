---
title: Success Criteria
description: Define measurable outcomes and acceptance scenarios.
---

Success criteria (SCs) define how you know the feature is done. They are technology-agnostic, measurable, and linked to user value.

## Format

```
SC-001: A new user can create their first task within 30 seconds of landing on the app.
SC-002: Task list loads within 200ms for up to 1,000 tasks.
SC-003: 90% of test users can complete the core workflow without consulting documentation.
SC-004: All P1 user stories pass acceptance tests in CI.
```

## Quantitative vs. Qualitative

Both types matter:

| Type | Example | How to Verify |
|------|---------|---------------|
| **Quantitative** | Page loads in < 200ms | Performance test |
| **Qualitative** | User can complete task without docs | Usability test / walkthrough |
| **Technical** | All tests pass in CI | Automated test suite |
| **Business** | Feature reduces support tickets by 20% | Post-launch metrics |

## Given/When/Then Acceptance

Each success criterion has concrete acceptance scenarios:

```
SC-001 Acceptance:
  Given a new user visits the app for the first time
  When they enter a task title and click Add
  Then the task appears in their list
  And the total elapsed time is under 30 seconds
```

## Edge Cases

The spec includes an explicit edge cases section for boundary conditions:

- What happens with an empty title?
- What happens with a 10,000-character description?
- What happens when the server is unreachable?
- What happens with concurrent edits to the same task?

Edge cases that are not listed are not tested. Be explicit about what the system should do in unusual situations.
