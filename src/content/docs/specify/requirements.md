---
title: Functional Requirements
description: Number and track requirements with entity modeling.
---

Functional requirements (FRs) are specific, testable statements about what the system must do. They are numbered sequentially and mapped to user stories.

## Format

```
FR-001: The system shall display a list of tasks belonging to the authenticated user.
FR-002: The system shall allow creating a task with a title (required) and description (optional).
FR-003: The system shall persist tasks across browser sessions using server-side storage.
```

Each requirement is:
- **Numbered** -- FR-001, FR-002, etc. for traceability
- **Testable** -- You can write a test that verifies it
- **Atomic** -- One requirement per item, not compound statements
- **Mapped** -- Links back to one or more user stories

## Key Entities

For data-heavy features, the spec includes a Key Entities sub-section defining the data model at a conceptual level:

```
Task
  - id: unique identifier
  - title: string, required, max 200 characters
  - description: string, optional
  - status: enum (pending, complete)
  - created_at: timestamp
  - user_id: reference to User
```

This is not a database schema. It is a conceptual model that the Plan phase will translate into technical specifics.

## Clarity Markers

When a requirement is ambiguous, mark it instead of guessing:

```
FR-004: The system shall send notifications when a task is overdue.
  [NEEDS CLARIFICATION: What notification channel -- email, push, in-app?]
  [NEEDS CLARIFICATION: How overdue -- immediately at midnight, or after a grace period?]
```

The agent adds these markers during `/speckit.specify`. You resolve them with `/speckit.clarify`. This prevents the common failure mode where the AI assumes an answer and builds the wrong thing.
