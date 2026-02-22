---
title: Technical Context
description: Document the technology stack and constraints for your implementation.
---

The technical context section of the plan captures every technology decision in one place. Everything starts as `[NEEDS CLARIFICATION]` and gets resolved during planning.

## Fields

| Field | Description | Example |
|-------|-------------|---------|
| Language/Version | Primary language and version | TypeScript 5.4 |
| Primary Dependencies | Key libraries/frameworks | React 18, Express 4 |
| Storage | Database or persistence layer | PostgreSQL 16 |
| Testing Framework | How tests are run | Vitest |
| Target Platform | Where it runs | Web browser + Node.js server |
| Project Type | What kind of thing | Full-stack web application |
| Performance Goals | Speed/scale targets | < 200ms page load, 10K users |
| Constraints | Hard limits | Must run on free-tier hosting |
| Scale/Scope | Size of the initial release | MVP: 3 user stories, single-tenant |

## Example

```
Technical Context:
  Language: TypeScript 5.4
  Dependencies: React 18, Express 4, Drizzle ORM
  Storage: PostgreSQL 16
  Testing: Vitest + Playwright
  Platform: Web (Node.js 20 server, modern browsers)
  Type: Full-stack web application
  Performance: < 200ms API response, < 1s page load
  Constraints: Deploy to single VPS, no managed services
  Scale: MVP for single user, designed for multi-tenant later
```

Every entry traces back to a charter requirement or a constitutional article. If the charter does not mention performance, the performance field says so explicitly rather than inventing a target.

## Architecture Template

For a production-ready hybrid profile (managed coordinators, persistent storage, burst AI workers, and local fallback hardware), use:

- [Architecture and Build Template](/weekend-to-release/templates/architecture-build-template/)
