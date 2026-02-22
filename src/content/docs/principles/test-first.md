---
title: "Article III: Test-First"
description: Write tests before implementation to drive better design.
---

**Article III** states: write tests before implementation. Tests define expected behavior and drive design decisions.

## The Principle

Tests written before code serve a different purpose than tests written after. They are a **design tool**, not a verification afterthought.

When you write a test first, you must define:
- What the interface looks like (function signatures, API shapes)
- What the expected behavior is (inputs → outputs)
- What edge cases matter (errors, boundaries, empty states)

This is exactly what charters describe — making Test-First a natural extension of ACE.

## What It Looks Like in Tasks

Test tasks appear **before** implementation tasks in the task list:

```
### Phase 3: P1 Real-Time Dashboard

- [ ] [8] [P] [US1] Write integration tests for readings API
- [ ] [9] [P] [US1] Create GET /api/readings/current endpoint
- [ ] [10] [P] [US1] Create POST /api/readings endpoint
- [ ] [11] [US1] Write component test for CurrentUsage
- [ ] [12] [US1] Create CurrentUsage React component
```

Notice:
- Task [8] (tests) comes before tasks [9] and [10] (implementation)
- Task [11] (component test) comes before task [12] (component)
- Tests and implementation can run in parallel with `[P]` markers when they touch different files

## Test Categories

ACE recognizes three test categories, aligned with **Article IV (Integration Testing)**:

| Category | What It Tests | When Written |
|----------|--------------|--------------|
| Unit | Individual functions | During implementation |
| Integration | Components working together | Before implementation (from contracts) |
| End-to-end | Full user workflows | After implementation (from success criteria) |

Integration tests are the most valuable in ACE because they verify **contracts** — the agreements between components defined in the Plan phase.

## When the Gate Triggers

During the **Tasks** phase, the constitution gate checks:

| Signal | Action |
|--------|--------|
| No test tasks in a phase | Flag — every phase needs tests |
| Tests appear only after implementation | Reorder — tests first |
| Story has no test coverage | Flag — every story needs at least one test |

## Practical Test-First

You don't need 100% coverage to satisfy Test-First. Focus on:

1. **Contract tests** — Does the API return what the charter says?
2. **Acceptance tests** — Do the success criteria pass?
3. **Edge case tests** — What happens at boundaries?

Skip testing:
- Framework boilerplate (routing config, middleware wiring)
- Pure UI styling (colors, spacing, animations)
- Third-party library behavior
