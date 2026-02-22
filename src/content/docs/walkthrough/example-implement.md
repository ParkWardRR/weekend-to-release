---
title: "Step 4: Implement with Your Agent"
description: Execute the task list and build the energy monitor.
---

We run:

```
/ACE.implement
```

The agent reads `tasks.md` and begins executing phase by phase.

## Phase 1: Setup

The agent creates the project structure, installs dependencies, and configures tooling. Tasks [3] and [4] run in parallel since they touch different files.

```
- [x] [1] Initialize monorepo
- [x] [2] Install backend dependencies
- [x] [3] [P] Install frontend dependencies
- [x] [4] [P] Configure Vitest
```

**Review point.** We verify the project builds and tests run (even though there are no tests yet).

## Phase 2: Foundational

The agent creates the database schema, Express server, and React shell.

```
- [x] [5] Create SQLite schema
- [x] [6] Create Express server
- [x] [7] Create React app shell
```

**Review point.** We verify the server starts and the frontend loads.

## Phase 3: P1 Real-Time Dashboard

Tasks [8], [9], and [10] run in parallel -- they create different files with no dependencies.

```
- [x] [8] [P] [US1] GET /api/readings/current
- [x] [9] [P] [US1] POST /api/readings
- [x] [10] [P] [US1] Integration tests
- [x] [11] [US1] CurrentUsage component
- [x] [12] [US1] Component test
```

**Checkpoint.** The dashboard shows live readings. All P1 tests pass. We could ship here and have a working product.

## Phases 4-6

The agent continues through historical charts, spike alerts, and polish tasks. Each phase follows the same pattern: parallel tasks first, sequential tasks after, review at the boundary.

## Final Result

```
- [x] All 23 tasks complete
- [x] All tests passing
- [x] Dashboard shows real-time usage
- [x] Historical charts render for daily/weekly/monthly
- [x] Spike alerts appear and auto-dismiss
- [x] README documents setup instructions
```

From idea to working software, guided by charters every step of the way.

The charter told us what to build. The plan told us how. The tasks told us in what order. The agent wrote the code. We reviewed and shipped.
