---
title: Getting Started
description: Install ACE Toolkit and initialize your first project.
---

## Prerequisites

- **Python 3.11+** -- check with `python3 --version`
- **Git** -- check with `git --version`
- **Any AI coding agent** -- Claude Code, GitHub Copilot, Cursor, Windsurf, or any of the 15+ supported agents

## Installation

```bash
uv tool install charter-cli
```

If you do not have `uv`:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Verify: `charter --version`

## Initialize a Project

```bash
charter init my-project
cd my-project
```

This creates:

```
my-project/
  .charter/
    templates/       # charter, plan, and task templates
    scripts/         # Slash command definitions
    memory/          # Persistent context for AI agents
    constitution.md  # Governing principles
```

The `.charter/` directory is the source of truth. Everything else is derived from it.

## Agent Setup

ACE Toolkit auto-detects your AI agent. Verify with:

```bash
charter doctor
```

## The Quick Workflow

Four commands, run inside your AI agent's chat:

### 1. Set Your Constitution

```
/ACE.constitution
```

Define the rules that every charter, plan, and task must follow. Once per project.

### 2. Write a charter

```
/ACE.charter
```

Describe what you want to build. The agent produces structured charters with user stories, requirements, and acceptance criteria.

### 3. Generate a Plan

```
/ACE.plan
```

The agent reads your charter and produces a technical plan with architecture decisions and phase gates.

### 4. Create Tasks

```
/ACE.tasks
```

The agent breaks the plan into phased, parallel-ready task lists. Then `/ACE.implement` to execute them.

## The Feedback Loop

```mermaid
flowchart LR
    A[Constitution] --> B[charter]
    B --> C[Plan]
    C --> D[Tasks]
    D --> E[Implement]
    E -->|refine| B
```

After implementation, update charters based on what you learned and run through the cycle again.

## Next Steps

Before specifying anything, you need a constitution. Continue to [Your Constitution](/weekend-to-release/guide/constitution/).
