---
title: Agent Guidance File
description: Auto-generated context files that ground AI agents in your project.
---

charter Kit generates an agent-specific guidance file that provides persistent context about your project. This file is automatically updated when you run `/speckit.plan`.

## What It Contains

- **Active Technologies** -- Extracted from all `plan.md` files in your project
- **Project Structure** -- The actual directory layout from your plans
- **Commands** -- Only the commands relevant to your tech stack
- **Code Style** -- Language-specific guidelines
- **Recent Changes** -- The last 3 features added to the project

## Agent File Locations

| Agent | File Path |
|-------|-----------|
| Claude Code | `.claude/CLAUDE.md` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Cursor | `.cursor/rules` |
| Windsurf | `.windsurf/workflows/speckit.md` |
| Gemini CLI | `.gemini/commands/speckit.toml` |

## How It Works

When you run `/speckit.plan`, the `update-agent-context` script:

1. Scans all `plan.md` files for technology references
2. Extracts the project structure
3. Filters commands to only those relevant to your stack
4. Updates the agent file in the correct format for your agent

The result is an agent that understands your project from the first message. No need to explain your tech stack, project structure, or coding conventions -- it is already in the guidance file.

## Manual Additions

The agent file includes a section bounded by HTML comments where you can add custom instructions:

```markdown
<!-- MANUAL ADDITIONS START -->
- Always use named exports, never default exports
- Database migrations must be reversible
- All API endpoints require authentication
<!-- MANUAL ADDITIONS END -->
```

Content between these markers is preserved when the file is regenerated.
