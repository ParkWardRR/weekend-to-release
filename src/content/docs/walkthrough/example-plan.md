---
title: "Step 2: Plan the Energy Monitor"
description: Generate a technical implementation plan from the charter.
---

We run the plan command:

```
/ACE.plan
```

The agent reads the charter and generates `charters/1-energy-monitor/plan.md`.

## Technical Context

```
Language: TypeScript 5.4
Dependencies: React 18, Vite, Express, better-sqlite3, Chart.js
Storage: SQLite (single file, no server needed)
Testing: Vitest + Testing Library
Platform: Web browser + Node.js server
Type: Full-stack web dashboard
Performance: < 200ms API response, < 2s real-time update
Constraints: Runs on a single Raspberry Pi
Scale: Single household, ~1 reading per second
```

## Constitution Check

| Gate | Status | Notes |
|------|--------|-------|
| Simplicity (VII) | PASS | 2 projects (backend + frontend), under the 3 limit |
| Anti-Abstraction (VIII) | PASS | Using better-sqlite3 directly, no ORM layer |
| Integration-First (IX) | PASS | Contracts defined for all API endpoints |

## Data Model (data-model.md excerpt)

```
Reading
  - id: integer, primary key
  - timestamp: datetime, indexed
  - value_kw: float, required
  - created_at: datetime

AlertConfig
  - id: integer, primary key
  - threshold_kw: float, required
  - updated_at: datetime
```

## API Contracts (contracts/ excerpt)

```
GET /api/readings?from=&to=
  Response: { readings: [{ timestamp, value_kw }] }

GET /api/readings/current
  Response: { timestamp, value_kw }

GET /api/alerts/config
  Response: { threshold_kw }

PUT /api/alerts/config
  Body: { threshold_kw }
  Response: { threshold_kw }
```

All gates pass. On to [Step 3: Tasks](/weekend-to-release/walkthrough/example-tasks/).
