
# 05. Debugging Collaboratively: When Agents Fail

> **Goal:** Turn "Why is it broken??" into "Here's the error trace, try X."

Debugging is where most agentic loops fail. The AI can get stuck suggesting random fixes (hallucinations).

---

## 1. The Strategy: Isolate, Reproduce, Log

### Step 1: Isolation
Isolate the buggy code into a single file/function.
> "Create a `reproduce_bug.py` script that imports only the problematic function."

### Step 2: Reproduction
Ask the AI to generate a test case that *fails*.
> "Write a unit test that fails given the current implementation of `calculate_tax()`."

### Step 3: Logging (The Savior)
Agents are blind. They can't see `console.log` unless you feed it back.
> "Add logging to every step of this function. Run it. Show me the logs."

**Then paste the logs back into the prompt.**

## 2. Common Agent Pitfalls

### The "Loop of Death"
The AI writes code -> Tests Fail -> AI tries random change -> Tests Fail -> AI reverts -> Loop.

**Solution:**
- **Stop the loop immediately.**
- **Reset Context.**
- **Ask the AI to EXPLAIN the bug before fixing it.**
> "Explain *why* this test is failing. Do not write code yet."

### The "Hallucinated Import"
The AI uses a library/method that doesn't exist.

**Solution:**
- Paste the error explicitly: `AttributeError: module 'pandas' has no attribute 'read_excel_fake'`.
- Ask for documentation link or alternative method.

## 3. The "Rubber Duck" Method

Ask the AI to act as a rubber duck.

> "I am stuck on this logic error in `auth.service.ts`. Explain the flow of data step-by-step."

Often, simply explaining it will reveal the bug to *you*, or the AI will spot a logic gap.

## 4. Checklist

- [ ] Always feed error logs back into the prompt (copy/paste).
- [ ] Ask for an explanation *before* a fix.
- [ ] Use `print()` debugging liberally.
- [ ] If stuck > 3 loops, revert and break the problem down further.
