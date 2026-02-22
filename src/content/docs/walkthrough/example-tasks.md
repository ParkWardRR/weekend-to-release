---
title: "Step 3: Generate Tasks"
description: Break the plan into phased, parallel-ready tasks.
---

We run:

```
/ACE.tasks
```

The agent reads the plan, charter, and data model, then generates `charters/1-energy-monitor/tasks.md`.

## Generated Task List

### Phase 1: Setup (4 tasks)

```
- [ ] [1] Initialize monorepo with backend/ and frontend/ directories
- [ ] [2] Install backend dependencies (express, better-sqlite3, vitest)
- [ ] [3] [P] Install frontend dependencies (react, vite, chart.js)
- [ ] [4] [P] Configure Vitest for backend and frontend
```

### Phase 2: Foundational (3 tasks)

```
- [ ] [5] Create SQLite database schema (readings, alert_config tables)
- [ ] [6] Create Express server with API router scaffolding
- [ ] [7] Create React app shell with Vite
```

### Phase 3: P1 Real-Time Dashboard (5 tasks)

```
- [ ] [8] [P] [US1] Create GET /api/readings/current endpoint
- [ ] [9] [P] [US1] Create POST /api/readings endpoint (for meter data)
- [ ] [10] [P] [US1] Write integration tests for readings API
- [ ] [11] [US1] Create CurrentUsage React component with polling
- [ ] [12] [US1] Write component test for CurrentUsage
```

**Checkpoint:** Dashboard shows live readings. P1 story independently testable.

### Phase 4: P2 Historical Charts (4 tasks)

```
- [ ] [13] [P] [US2] Create GET /api/readings?from=&to= with aggregation
- [ ] [14] [P] [US2] Write integration tests for date range queries
- [ ] [15] [US2] Create UsageChart component with Chart.js
- [ ] [16] [US2] Create time range picker (daily/weekly/monthly)
```

### Phase 5: P3 Spike Alerts (4 tasks)

```
- [ ] [17] [P] [US3] Create GET/PUT /api/alerts/config endpoints
- [ ] [18] [P] [US3] Write integration tests for alert config
- [ ] [19] [US3] Create AlertBanner component with auto-dismiss
- [ ] [20] [US3] Create threshold configuration UI
```

### Final: Polish (3 tasks)

```
- [ ] [21] [P] Add error handling for API failures
- [ ] [22] [P] Add loading states to all components
- [ ] [23] Write README with setup and usage instructions
```

**23 tasks across 6 phases.** 10 tasks marked `[P]` for parallel execution.

On to [Step 4: Implement](/weekend-to-release/walkthrough/example-implement/).
