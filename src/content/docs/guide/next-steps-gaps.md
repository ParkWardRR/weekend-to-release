---
title: Next Steps, Gaps, and User Education
description: Priority roadmap for tightening execution quality and teaching users faster.
---

This project is strong on methodology and templates. The highest leverage now is execution clarity: faster onboarding, fewer unknowns during implementation, and tighter operator-specific guidance.

## Priority Next Steps

### 0-2 Weeks (Immediate)

1. **Complete operator playbooks with verified commands**
2. **Turn placeholders into validated snippets**
3. **Add a "First 30 Minutes" path from install to first shipped artifact**
4. **Document failure recovery paths** (`plan` fails gate, tests fail, deployment fails)

### 2-6 Weeks (Stabilization)

1. **Add architecture variants** (single-service, API + worker, event-driven)
2. **Add scale profiles** (solo builder, two-engineer team, multi-agent execution)
3. **Add validation bundles** per phase (`charter` lint, plan gate checks, task consistency checks)

### 6+ Weeks (Expansion)

1. **Add vertical examples** (mobile, data pipeline, internal tooling)
2. **Add change-management workflow** for requirement drift
3. **Publish operator compatibility matrix** with tested versions and known limitations

## Current Gaps

### Gap 1: Operator-Specific End-to-End Coverage

General methodology is clear, but concrete execution differs by agent environment.

**Impact:** Users stall at setup and orchestration details.

**Fix:** Provide tested playbooks for each operator with:
- exact prerequisites
- exact commands
- expected outputs
- failure handling

### Gap 2: Unknowns Are Not Centrally Tracked

Open questions are spread across docs and chats.

**Impact:** Knowledge gaps persist and recur.

**Fix:** Maintain `RESEARCH_NEEDED.md` as a live backlog with owner + due date + source.

### Gap 3: Limited "What Good Looks Like" Evidence

Current walkthrough is strong but single-domain.

**Impact:** Users cannot map ACE to their stack quickly.

**Fix:** Add multiple production-like examples and include measurable success criteria (time to first commit, test pass rate, deployment lead time).

### Gap 4: Insufficient Troubleshooting Paths

Users need explicit recovery when gates fail or generated tasks are inconsistent.

**Impact:** Momentum loss during first adoption cycle.

**Fix:** Add troubleshooting runbooks:
- charter ambiguity saturation
- phase gate rejection
- task dependency deadlocks
- implementation mismatch vs charter

## How To Educate Users Better

### Teach in Layers

1. **Layer 1:** 15-minute orientation (concepts + one command chain)
2. **Layer 2:** 60-minute guided build (copyable end-to-end runbook)
3. **Layer 3:** advanced operations (parallel agents, governance, scale)

### Teach with Artifacts, Not Theory

For each phase, show:
- input artifact
- command/operator action
- output artifact
- review checklist

### Teach with Fast Feedback

Include checkpoints every 5-10 minutes:
- "You should now have `<artifact>`"
- "Run `<verification command>`"
- "If it fails, do `<recovery step>`"

### Teach with Verified Deltas

Every operator playbook should include:
- tested date
- tested version
- known limitations
- compatibility notes

## Definition of Done for Documentation Quality

Documentation is "operationally complete" when a new user can:

1. Install tools and initialize a project without external help.
2. Run charter -> plan -> tasks -> implement once end-to-end.
3. Resolve one controlled failure using documented recovery steps.
4. Deploy and verify a live artifact.

