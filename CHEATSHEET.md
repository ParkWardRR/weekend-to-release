# ACE Toolkit Cheatsheet

Quick reference for Charter-Orchestrated Engineering with ACE Toolkit.

---

## Install

```bash
uv tool install charter-cli
```

## The Workflow

```
Idea --> /ACE.charter --> charter --> /ACE.plan --> Plan --> /ACE.tasks --> Tasks --> /ACE.implement --> Ship
```

## Commands

| Command | Phase | What It Does |
|---------|-------|--------------|
| `/ACE.constitution` | Setup | Define project governing principles |
| `/ACE.charter` | 1. charter | Create feature charter (stories, requirements, criteria) |
| `/ACE.clarify` | 1. charter | Resolve [NEEDS CLARIFICATION] markers interactively |
| `/ACE.plan` | 2. Plan | Generate technical plan with phase gates |
| `/ACE.tasks` | 3. Tasks | Break plan into phased task list with [P] markers |
| `/ACE.analyze` | 3. Tasks | Run consistency analysis across charter/plan/tasks |
| `/ACE.implement` | 4. Implement | Execute tasks phase by phase |
| `/ACE.checklist` | Any | Generate validation checklist for a feature |

## charter Structure

```
User Stories (P1, P2, P3 priority)
  -> Each: title, description, Given/When/Then acceptance
Requirements (FR-001, FR-002, ...)
  -> Key Entities for data features
Success Criteria (SC-001, SC-002, ...)
  -> Measurable, technology-agnostic
Edge Cases
  -> Boundary conditions, error scenarios
```

## Plan Structure

```
Technical Context (language, deps, storage, testing, platform)
Constitution Check (gates must pass)
Project Structure (docs tree + source layout)
Phase 0: Research (resolve unknowns)
Phase 1: Design (data models, contracts, quickstart)
```

## Task Format

```
- [ ] [ID] [P?] [US#] Description file/path

[P]  = can run in parallel
[US#] = maps to user story
[ID]  = sequential number
```

## Task Phases

```
Phase 1: Setup (scaffolding, deps, CI)
Phase 2: Foundational (blocking prereqs for all stories)
Phase 3+: User Stories (one phase per story, P1 first)
Final: Polish (docs, cross-cutting, cleanup)
```

## The 9 Articles

| # | Article | Key Rule |
|---|---------|----------|
| I | Library-First | Every feature starts as a standalone library |
| II | CLI Interface | Libraries expose text-in/structured-out CLI |
| III | Test-First | Write tests before code (NON-NEGOTIABLE) |
| IV | Integration Testing | Real databases, actual services, no mocks |
| V | Observability | Text I/O ensures debuggability |
| VI | Versioning | MAJOR.MINOR.BUILD format |
| VII | Simplicity | Max 3 projects, no future-proofing |
| VIII | Anti-Abstraction | Use frameworks directly, no wrappers |
| IX | Integration-First | Realistic environments required |

## Phase Gates

Three gates that must pass before implementation:

1. **Simplicity Gate** -- Confirms minimal project structure (Article VII)
2. **Anti-Abstraction Gate** -- Validates direct framework usage (Article VIII)
3. **Integration-First Gate** -- Ensures contracts and contract tests exist (Article IX)

## Decision Tree

Not sure which command to use?

- Have an idea but no charter? --> `/ACE.charter`
- charter has [NEEDS CLARIFICATION]? --> `/ACE.clarify`
- charter is clean, need a plan? --> `/ACE.plan`
- Plan is ready, need tasks? --> `/ACE.tasks`
- Want to check consistency? --> `/ACE.analyze`
- Tasks are ready, time to build? --> `/ACE.implement`
- Need project principles? --> `/ACE.constitution`

---

**Official repo:** Use your organization's approved ACE toolkit repository.
