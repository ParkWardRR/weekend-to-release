---
title: "Step 1: Specify the Energy Monitor"
description: Define user stories, requirements, and success criteria for the energy monitor.
---

We run the specify command with our feature description:

```
/speckit.specify "Home energy monitoring dashboard that displays real-time
electricity usage, historical charts, and spike alerts"
```

Spec Kit creates branch `1-energy-monitor` and generates `specs/1-energy-monitor/spec.md`.

## Generated User Stories

### P1: Real-Time Dashboard

> As a homeowner, I can see my current electricity usage updating in real time.

**Acceptance:**
- Given the dashboard is open
- When a new reading arrives from the smart meter
- Then the current usage display updates within 2 seconds

### P2: Historical Charts

> As a homeowner, I can view my electricity usage over daily, weekly, and monthly periods.

**Acceptance:**
- Given I am on the dashboard
- When I select "Weekly" from the time range picker
- Then a chart shows usage data for the past 7 days

### P3: Spike Alerts

> As a homeowner, I receive a notification when my usage exceeds a configurable threshold.

**Acceptance:**
- Given I have set a threshold of 5 kW
- When a reading exceeds 5 kW
- Then an alert banner appears on the dashboard

## Generated Requirements

```
FR-001: Display current electricity usage in kW, updated in real time.
FR-002: Store readings with timestamp and value in persistent storage.
FR-003: Render time-series charts for daily, weekly, and monthly views.
FR-004: Allow users to set a usage threshold for spike alerts.
FR-005: Display alert when a reading exceeds the configured threshold.
  [NEEDS CLARIFICATION: Should alerts persist or auto-dismiss?]
```

## Clarification

We run `/speckit.clarify` to resolve the ambiguity:

**Question:** Should spike alerts persist or auto-dismiss?
- **(Recommended) Auto-dismiss after 30 seconds** -- Keeps the UI clean, user has already seen it
- Persist until manually dismissed

We accept the recommendation. The spec updates:

```
FR-005: Display alert banner when reading exceeds threshold.
  Auto-dismisses after 30 seconds. Clarified per Article VII (Simplicity).
```

The spec is now clean. On to [Step 2: Plan](/weekend-to-release/walkthrough/example-plan/).
