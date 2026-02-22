---
title: The Implement Phase
description: Execute tasks phase by phase with AI agents.
---

The Implement phase takes your task list and executes it. Run `/speckit.implement` and the agent works through each phase, marking tasks complete as it goes.

## Execution Flow

```mermaid
flowchart TD
    T[tasks.md] --> P[Parse Phases]
    P --> S[Execute Setup]
    S --> F[Execute Foundational]
    F --> U[Execute User Stories]
    U --> PO[Execute Polish]
    PO --> D[Done]

    S --> R1{Review}
    F --> R2{Review}
    U --> R3{Review}
```

Between each phase, you review the output. This is the human-in-the-loop checkpoint. The agent does not proceed to the next phase until you approve.

## What Happens

1. The agent reads `tasks.md` and parses phases
2. It initializes the project structure from `plan.md`
3. It executes tasks in order, respecting `[P]` parallel markers
4. Completed tasks are marked `[X]` in the task file
5. On failure, non-parallel tasks halt the phase
6. At each phase boundary, you review before proceeding

## Pages in This Section

- [Agent Workflow](/weekend-to-release/implement/agent-workflow/) -- How AI agents interact with ACE artifacts
- [Agent Guidance File](/weekend-to-release/implement/agent-file/) -- Auto-generated context for your agent
