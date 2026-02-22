---
title: Tasks Template
description: The template used by /auro.tasks to generate phased task lists.
---

The tasks template organizes work into sequential phases with parallel markers.

## Format

```
- [ ] [ID] [P?] [Story?] Description file/path
```

- `[ID]` -- Sequential number
- `[P]` -- Parallel-capable (optional)
- `[Story]` -- User story tag: US1, US2, etc. (optional)

## Phase Structure

```markdown
# Task List: [FEATURE_NAME]

## Phase 1: Setup
- [ ] [1] Initialize project structure
- [ ] [2] Install dependencies
- [ ] [3] [P] Configure build tools
- [ ] [4] [P] Configure test runner

## Phase 2: Foundational
MUST complete before ANY user story.
- [ ] [5] Create database schema
- [ ] [6] Create API scaffolding

## Phase 3: [P1 Story Name]
- [ ] [7] [P] [US1] Create model
- [ ] [8] [P] [US1] Create route
- [ ] [9] [US1] Create component
Checkpoint: US1 independently testable.

## Phase 4: [P2 Story Name]
...

## Final: Polish
- [ ] [N] Update documentation
- [ ] [N+1] [P] Add error handling
```

## Key Design Decisions

- **Phases are sequential** -- Phase 2 cannot start until Phase 1 completes
- **`[P]` tasks within a phase are parallel** -- different files, no dependencies
- **Checkpoint validation** after each story phase ensures independent testability
- **Three execution strategies**: MVP-first (P1 only), incremental, parallel team
