
# 01. The AI Stack: Your New Development Team

> **Goal:** Understand the tools that will write 80% of your code.

In this course, you are **not** the coder. You are the **Product Manager (PM)** and the **Code Reviewer**. The AI is your Senior Engineer.

---

## 1. The Core Toolkit

### 🧠 The Brains: Claude 3.5 Sonnet / Google Antigravity
These are the models that understand complex instructions, refactoring, and project architecture.
- **Role:** Writing logic, generating tests, planning refactors.
- **When to use:** "Write a Python script to parse this CSV."

### 💻 The Hands: `claude.code` / Antigravity Terminal
These are the command-line interfaces (CLI) that give the AI access to your file system.
- **Role:** Creating files, running tests, fixing lint errors.
- **Capability:** They can investigate the codebase, read files, and edit them directly.

### 📝 The Editor: VS Code / Cursor
Your view into what the AI is doing.
- **Role:** Code review, small manual tweaks, Git operations.

---

## 2. The Mental Model Shift

| Old Way (Manual) | New Way (Agentic) |
| :--- | :--- |
| You write the function. | You write the *spec* for the function. |
| You Google syntax errors. | You paste the error to the Agent. |
| You manually run tests. | You ask the Agent to "run tests and fix failures". |
| **Time spent:** 90% Coding, 10% Planning | **Time spent:** 80% Planning/Review, 20% Tweaking |

## 3. Setup Checklist
- [ ] Install the CLI tool (e.g., `npm install -g @anthropic/claude-code` or internal equivalent).
- [ ] Authenticate with your API key.
- [ ] Verify access by running: `claude "what time is it?"`
- [ ] Create an alias for speed (e.g., `alias c="claude"`).

## 4. First Run Exercise
Run this command in your terminal:
```bash
claude "Create a file named hello_agent.py that prints a random compliment to the user. Run it to verify it works."
```
Observe how the agent:
1. Plans the action.
2. Creates the file.
3. executes the file.
4. Returns the output.

**This is your new workflow.**
