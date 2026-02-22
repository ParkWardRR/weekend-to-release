---
title: Agent Workflow
description: How AI agents interact with SDD artifacts during implementation.
---

AI agents work best when given structured context. SDD provides that structure at every step.

## What the Agent Reads

During implementation, the agent has access to:

- **spec.md** -- What to build (requirements, stories, criteria)
- **plan.md** -- How to build it (architecture, tech stack, constraints)
- **tasks.md** -- What to do next (ordered, phased task list)
- **constitution.md** -- Rules that cannot be broken
- **data-model.md** -- Entity definitions and relationships
- **contracts/** -- API specifications

The agent does not guess. It reads the spec, follows the plan, and executes the tasks.

## Agent-Agnostic

SDD works with any AI coding agent:

| Agent | Slash Command Support | Agent File |
|-------|----------------------|------------|
| Claude Code | `/speckit.*` commands | `.claude/CLAUDE.md` |
| GitHub Copilot | Chat mode | `.github/copilot-instructions.md` |
| Cursor | Composer | `.cursor/rules` |
| Windsurf | Cascade | `.windsurf/workflows/` |
| Gemini CLI | Direct | `.gemini/commands/` |

Spec Kit auto-detects your agent and generates the right file format.

## The 15-Minute Advantage

Traditional documentation takes hours. SDD takes about 15 minutes:

- 5 min: `/speckit.specify` -- write the spec
- 5 min: `/speckit.plan` -- generate the plan
- 5 min: `/speckit.tasks` -- break into tasks

After 15 minutes, you have a complete specification, a technical plan, and an executable task list. The agent knows exactly what to build, how to build it, and in what order.

## Review Points

After each phase, review the output:

1. **Do the tests pass?** If not, fix before proceeding.
2. **Does the output match the spec?** If not, the code is wrong.
3. **Are constitutional articles respected?** If not, revise.

The agent marks tasks `[X]` as they complete. Incomplete tasks remain `[ ]`. You can see progress at a glance.
