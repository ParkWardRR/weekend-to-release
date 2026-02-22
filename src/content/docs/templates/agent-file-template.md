---
title: Agent File Template
description: The template for auto-generated agent guidance files.
---

The agent file template auto-populates from your charter-kit artifacts to give AI agents persistent project context.

## Structure

```markdown
# Project Context

## Active Technologies
[Auto-extracted from plan.md files]
- TypeScript 5.4
- React 18
- PostgreSQL 16

## Project Structure
[Auto-generated from plans]
src/
  models/
  routes/
  components/

## Commands
[Only commands for active technologies]
- npm run dev -- Start development server
- npm test -- Run test suite
- npm run build -- Production build

## Code Style
[Language-specific guidelines]
- Named exports only
- Functional components
- Explicit return types

## Recent Changes
[Last 3 features]
- 1-task-crud: Task create/read/update/delete
- 2-auth: User authentication
- 3-notifications: In-app notifications

<!-- MANUAL ADDITIONS START -->
[Your custom instructions here -- preserved across regeneration]
<!-- MANUAL ADDITIONS END -->
```

## Agent-Specific Formats

| Agent | Format | Location |
|-------|--------|----------|
| Claude Code | Markdown | `.claude/CLAUDE.md` |
| Copilot | Markdown | `.github/copilot-instructions.md` |
| Cursor | Markdown | `.cursor/rules` |
| Gemini | TOML | `.gemini/commands/speckit.toml` |
| Windsurf | Markdown | `.windsurf/workflows/speckit.md` |

The content is the same across agents. Only the file format and location change.
