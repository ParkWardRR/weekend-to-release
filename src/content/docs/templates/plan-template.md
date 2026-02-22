---
title: Plan Template
description: The template used by /auro.plan to generate implementation plans.
---

The plan template structures technical decisions and constitutional compliance.

## Structure

```markdown
# Implementation Plan: [FEATURE_NAME]
Branch: [N]-[short-name]
Charter: charters/[N]-[short-name]/charter.md

## Summary
[Primary requirements and technical approach]

## Technical Context
- Language/Version: [NEEDS CLARIFICATION]
- Dependencies: [NEEDS CLARIFICATION]
- Storage: [NEEDS CLARIFICATION]
- Testing: [NEEDS CLARIFICATION]
- Platform: [NEEDS CLARIFICATION]
- Type: [NEEDS CLARIFICATION]
- Performance: [NEEDS CLARIFICATION]
- Constraints: [NEEDS CLARIFICATION]
- Scale: [NEEDS CLARIFICATION]

## Constitution Check
| Gate | Status | Notes |
|------|--------|-------|
| Simplicity (VII) | [PASS/FAIL] | |
| Anti-Abstraction (VIII) | [PASS/FAIL] | |
| Integration-First (IX) | [PASS/FAIL] | |

## Project Structure
[Documentation tree and source layout]

## Complexity Tracking
| Gate | Violation | Justification | Simpler Alt. Rejected |
|------|-----------|---------------|-----------------------|
```

## Key Design Decisions

- **Everything starts as NEEDS CLARIFICATION** -- forces explicit decisions
- **Constitution gates are checked twice** -- once before research, once after design
- **Complexity tracking table** documents justified violations with rationale
- **Three project layout options** (single, web, mobile) keep structure predictable
