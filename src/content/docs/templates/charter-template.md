---
title: charter Template
description: The template used by /auro.charter to generate feature charters.
---

The charter template structures every feature charter into consistent sections.

## Structure

```markdown
# Feature: [FEATURE_NAME]
Branch: [N]-[short-name]
Created: [DATE]
Status: Draft

## User Scenarios & Testing

### [P1] [Story Title]
**Description:** [What the user does]
**Priority:** P1 -- [Justification]
**Independent Test:** [How to test this story alone]

**Acceptance:**
- Given [precondition]
- When [action]
- Then [expected result]

### [P2] [Story Title]
...

## Requirements

- FR-001: [Requirement]
- FR-002: [Requirement]
  [NEEDS CLARIFICATION: question]
- FR-003: [Requirement]

### Key Entities

[Entity Name]
  - field: type, constraints

## Success Criteria

- SC-001: [Measurable outcome]
- SC-002: [Measurable outcome]

## Edge Cases

- [Boundary condition and expected behavior]
```

## Key Design Decisions

- **Stories are prioritized P1/P2/P3** so implementation can stop at any priority level and still deliver value
- **Each story has an independent test** ensuring it works as a standalone MVP slice
- **`[NEEDS CLARIFICATION]` markers** prevent the agent from guessing -- unknowns are flagged, not assumed
- **Success criteria are technology-agnostic** -- they describe outcomes, not implementations
