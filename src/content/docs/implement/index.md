---
title: The Implement Phase
description: Execute tasks phase by phase with AI agents.
---

The Implement phase takes your task list and executes it. Run `/auro.implement` and the agent works through each phase, marking tasks complete as it goes.

## Execution Flow

<div class="flow-track" aria-label="Implementation execution flow">
  <div class="flow-card"><span class="flow-label">Input</span><p class="flow-title">tasks.md</p></div>
  <div class="flow-card"><span class="flow-label">Step</span><p class="flow-title">Parse Phases</p></div>
  <div class="flow-card"><span class="flow-label">Phase</span><p class="flow-title">Execute Setup</p></div>
  <div class="flow-card"><span class="flow-label">Phase</span><p class="flow-title">Execute Foundational</p></div>
  <div class="flow-card"><span class="flow-label">Phase</span><p class="flow-title">Execute User Stories</p></div>
  <div class="flow-card"><span class="flow-label">Phase</span><p class="flow-title">Execute Polish</p></div>
  <div class="flow-card"><span class="flow-label">Output</span><p class="flow-title">Done</p></div>
</div>
<div class="flow-gates" aria-label="Human checkpoints">
  <div class="flow-gate">
    <div class="flow-gate-title">Checkpoint 1 <span class="flow-chip">Review after Setup</span></div>
    <p>Validate baseline project scaffolding before foundational work continues.</p>
  </div>
  <div class="flow-gate">
    <div class="flow-gate-title">Checkpoint 2 <span class="flow-chip">Review after Foundational</span></div>
    <p>Confirm contracts, data flow, and testing baseline before story execution.</p>
  </div>
  <div class="flow-gate">
    <div class="flow-gate-title">Checkpoint 3 <span class="flow-chip">Review after User Stories</span></div>
    <p>Approve behavior completeness before final polish and release prep.</p>
  </div>
</div>

Between each phase, you review the output. This is the human-in-the-loop checkpoint. The agent does not proceed to the next phase until you approve.

## What Happens

1. The agent reads `tasks.md` and parses phases
2. It initializes the project structure from `plan.md`
3. It executes tasks in order, honoring `[P]` parallel markers
4. Completed tasks are marked `[X]` in the task file
5. On failure, non-parallel tasks halt the phase
6. At each phase boundary, you review before proceeding

## Pages in This Section

- [Agent Workflow](/weekend-to-release/implement/agent-workflow/) -- How AI agents interact with ACE artifacts
- [Agent Guidance File](/weekend-to-release/implement/agent-file/) -- Auto-generated context for your agent
