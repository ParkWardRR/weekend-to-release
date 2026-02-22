---
title: Phased Task Lists
description: Organize tasks into setup, foundational, story, and polish phases.
---

Tasks are organized into phases that must execute in order. Each phase has a defined purpose.

## Phase 1: Setup

Project scaffolding. These tasks run once and create the project skeleton.

```
- [ ] [1] Initialize project with npm init
- [ ] [2] Install dependencies (React, Express, Drizzle, Vitest)
- [ ] [3] [P] Configure TypeScript (tsconfig.json)
- [ ] [4] [P] Configure Vitest (vitest.config.ts)
```

## Phase 2: Foundational

Blocking prerequisites that ALL user stories need. Nothing in Phase 3+ works without these.

```
- [ ] [5] Create database schema and migration (tasks, users tables)
- [ ] [6] Create API scaffolding with Express router
- [ ] [7] Create authentication middleware
```

## Phase 3+: User Stories

One phase per user story, in P1/P2/P3 priority order.

```
Phase 3 - P1: Create and View Tasks
- [ ] [8] [P] [US1] Create Task model
- [ ] [9] [P] [US1] Create GET /api/tasks route
- [ ] [10] [P] [US1] Create POST /api/tasks route
- [ ] [11] [US1] Create TaskList React component
- [ ] [12] [US1] Write integration tests for task CRUD

Phase 4 - P2: Mark Tasks Complete
- [ ] [13] [US2] Add PATCH /api/tasks/:id route
- [ ] [14] [US2] Add complete button to TaskList component
- [ ] [15] [US2] Write integration tests for completion
```

## Final: Polish

Cross-cutting concerns after all stories are done.

```
- [ ] [16] [P] Add error handling middleware
- [ ] [17] [P] Add loading states to all components
- [ ] [18] Update README with setup instructions
```

## Checkpoint Validation

After each story phase, the feature should be independently testable. Run the tests, verify the acceptance criteria, then move to the next phase.
