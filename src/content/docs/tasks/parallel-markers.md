---
title: Parallel Markers
description: Use [P] markers to identify tasks that can run simultaneously.
---

Tasks marked `[P]` can execute in parallel when they touch different files with no dependencies between them.

## How It Works

```
- [ ] [8] [P] [US1] Create Task model in src/models/task.ts
- [ ] [9] [P] [US1] Create GET /api/tasks in src/routes/tasks.ts
- [ ] [10] [P] [US1] Write test for Task model in tests/models/task.test.ts
```

These three tasks touch different files and have no data dependencies. They can run at the same time.

```
- [ ] [11] [US1] Create TaskList component (depends on API route)
- [ ] [12] [US1] Write E2E test (depends on component + API)
```

These tasks depend on earlier work. They are NOT marked `[P]` and must run sequentially after tasks 8-10 complete.

## Rules

1. `[P]` tasks within the same phase can run simultaneously
2. `[P]` tasks across different phases CANNOT -- phases are sequential
3. A non-`[P]` task means "wait for all prior tasks in this phase to finish"
4. If unsure, do not mark it `[P]` -- sequential is always safe

## Multi-Agent Workflows

If you have multiple AI agents or developers, assign parallel tasks to different workers:

- Agent A: Task [8] -- model
- Agent B: Task [9] -- route
- Agent C: Task [10] -- test

All three work simultaneously, then converge for task [11] which depends on their output.
