---
title: "Articles VII & VIII: Simplicity"
description: Minimize complexity and resist premature abstraction.
---

Two articles work together to keep projects simple:

- **Article VII (Simplicity)**: Minimize moving parts
- **Article VIII (Anti-Abstraction)**: Don't abstract until you must

## Article VII: Simplicity

Every component you add is a component you must maintain, monitor, deploy, and debug. Simplicity means choosing the architecture with the fewest moving parts that still meets requirements.

### The Complexity Check

During planning, count your components:

| Count | Assessment |
|-------|-----------|
| 1-2 projects | Simple — default approval |
| 3 projects | Review — is the third necessary? |
| 4+ projects | Requires justification for each |

A "project" is anything independently deployable: a server, a frontend app, a worker process, a database.

### Examples

**Over-engineered:**
```
- React frontend
- Express API server
- Redis cache
- PostgreSQL database
- RabbitMQ message queue
- Worker process
```
Six components for a dashboard that shows readings from a smart meter.

**Right-sized:**
```
- React frontend
- Express API server with SQLite
```
Two components. SQLite eliminates the need for a separate database server. No cache needed at this scale. No queue needed for synchronous reads.

## Article VIII: Anti-Abstraction

Don't create abstractions (interfaces, base classes, factories, wrappers) until you have concrete evidence they're needed.

### The Rule of Three

Abstract when you have **three concrete cases** — not before:

```
// Too early — one case, one abstraction
class BaseDataSource { ... }
class SqliteDataSource extends BaseDataSource { ... }

// Right — direct implementation
const db = new Database('readings.db')
```

When you eventually need PostgreSQL support *and* MySQL support, then create the abstraction. Until then, the direct approach is simpler, more readable, and easier to change.

### Common Violations

| Pattern | Why It's Premature |
|---------|-------------------|
| Repository pattern for one database | Extra layer with no benefit |
| Event bus for two components | Direct function calls are clearer |
| Plugin system for one plugin | Build the plugin, not the system |
| Config file for three settings | Constants in code are simpler |
| Factory for one product type | Direct construction is clearer |

### When the Gate Triggers

During planning, the constitution gate flags:

| Signal | Action |
|--------|--------|
| Plan includes "abstraction layer" | Require three concrete use cases |
| Plan mentions "future-proofing" | Flag — build for now, not later |
| Plan adds indirection with one consumer | Simplify — remove the indirection |

## Together

Simplicity and Anti-Abstraction reinforce each other:

- Simplicity asks: "Can we use fewer components?"
- Anti-Abstraction asks: "Can we use fewer layers?"

The result is code that's direct, readable, and easy to change — exactly what you want when working with AI agents that need to understand your codebase quickly.
