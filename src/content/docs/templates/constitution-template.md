---
title: Constitution Template
description: The template used by /speckit.constitution to define project principles.
---

The constitution template structures your project's governing principles.

## Structure

```markdown
# [PROJECT_NAME] Constitution
Version: 1.0.0
Ratified: [DATE]

## Core Principles

### Article 1: [Principle Name]
[Description of the principle and how to verify compliance]

### Article 2: [Principle Name]
[Description]

### Article 3: [Principle Name]
[Description]

## Additional Constraints
- [Technology constraints]
- [Compliance requirements]
- [Deployment policies]

## Development Workflow
- [Code review requirements]
- [Testing gates]
- [Approval processes]

## Governance
This constitution is binding guidance for all development.
- Amendments require documented justification
- Version follows MAJOR.MINOR.PATCH
- Compliance verified at each phase gate
```

## Example

```markdown
### Article 1: TypeScript Only
All code must be written in TypeScript with strict mode enabled.
No `any` types except at validated system boundaries.

### Article 2: Test Coverage
Minimum 80% line coverage. All P1 user stories require
integration tests. Unit tests alone are insufficient.

### Article 3: No ORM Magic
Database queries must be explicit. No hidden N+1 queries.
Use query builders, not full ORMs with lazy loading.
```
