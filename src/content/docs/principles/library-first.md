---
title: "Article I: Library-First"
description: Prefer existing, maintained libraries over custom implementations.
---

**Article I** states: prefer existing, well-maintained libraries over writing custom code.

## The Principle

Before building anything, check if a library already does it. Custom code is a liability — it needs tests, documentation, maintenance, and bug fixes. A well-maintained library gives you all of that for free.

## What It Looks Like

### Without Library-First

```
FR-007: Implement JWT authentication with refresh tokens.
  - Custom token generation
  - Custom token validation
  - Custom refresh logic
  - Custom expiration handling
```

This is hundreds of lines of security-critical code you'll need to maintain forever.

### With Library-First

```
FR-007: Implement JWT authentication with refresh tokens.
  Library: passport-jwt + jsonwebtoken
  Custom code: configuration and middleware wiring only
```

Same result, fraction of the code, battle-tested security.

## When the Gate Triggers

During the **Plan** phase, the constitution gate checks for Library-First violations:

| Signal | Action |
|--------|--------|
| Plan mentions "implement from scratch" | Flag for review |
| Plan includes custom parsing, auth, or crypto | Require library justification |
| Plan has no external dependencies | Suspicious — likely reinventing |

## When Custom Code Is Justified

Library-First doesn't mean "never write code." Custom implementations are appropriate when:

- **No library exists** for your specific need
- **Available libraries are unmaintained** (no updates in 12+ months, unresolved security issues)
- **The library is too heavy** — you need 5% of its features but it pulls in 50 dependencies
- **Domain-specific logic** that no general library would cover

Document the justification in the plan:

```
Custom: Reading parser for proprietary meter format.
  Justification: No library exists for XYZ-9000 meter protocol.
  Scope: ~200 lines, well-tested, isolated module.
```

## Applying Library-First

When writing specs:
1. **Requirements** should describe *what*, not *how* — let the plan phase choose libraries
2. **Plans** should list chosen libraries with version constraints
3. **Tasks** should include "install and configure X" rather than "implement X from scratch"
