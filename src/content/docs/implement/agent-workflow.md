---
title: Agent Workflow
description: How AI agents interact with ACE artifacts during implementation.
---

AI agents work best when given structured context. ACE provides that structure at every step.

## What the Agent Reads

During implementation, the agent has access to:

- **charter.md** -- What to build (requirements, stories, criteria)
- **plan.md** -- How to build it (architecture, tech stack, constraints)
- **tasks.md** -- What to do next (ordered, phased task list)
- **constitution.md** -- Rules that cannot be broken
- **data-model.md** -- Entity definitions and relationships
- **contracts/** -- API charters

The agent does not guess. It reads the charter, follows the plan, and executes the tasks.

## Agent-Agnostic

ACE works with any AI coding agent:

| Agent | Slash Command Support | Agent File |
|-------|----------------------|------------|
| Claude Code | `/ACE.*` commands | `.claude/CLAUDE.md` |
| GitHub Copilot | Chat mode | `.github/copilot-instructions.md` |
| Cursor | Composer | `.cursor/rules` |
| Windsurf | Cascade | `.windsurf/workflows/` |
| Gemini CLI | Direct | `.gemini/commands/` |

ACE Toolkit auto-detects your agent and generates the right file format.

## The 15-Minute Advantage

Traditional documentation takes hours. ACE takes about 15 minutes:

- 5 min: `/ACE.charter` -- write the charter
- 5 min: `/ACE.plan` -- generate the plan
- 5 min: `/ACE.tasks` -- break into tasks

After 15 minutes, you have a complete charter, a technical plan, and an executable task list. The agent knows exactly what to build, how to build it, and in what order.

## Review Points

After each phase, review the output:

1. **Do the tests pass?** If not, fix before proceeding.
2. **Does the output match the charter?** If not, the code is wrong.
3. **Are constitutional articles respected?** If not, revise.

The agent marks tasks `[X]` as they complete. Incomplete tasks remain `[ ]`. You can see progress at a glance.
