
# 03. The Agentic Workflow: Build, Run, Fix

> **Goal:** Let the AI do the heavy lifting while you review.

The "Red/Green/Refactor" loop is now "Spec/Agent/Review".

---

## 1. The Red/Green/Review Loop

### Step 1: Write a Test (Red)
> "Write a test file `test_server.py` that checks if `/` returns 200 OK. Do not implement the server yet."

### Step 2: Ask Agent to Pass Test (Green)
> "Implement `server.py` using Flask to make the test pass. Run `pytest` to confirm."

### Step 3: Review Code & Refactor (Refactor)
> "Review `server.py`. Are there any hardcoded values? Refactor to use environment variables."

## 2. When to Step In (Manual vs. AI)

**Use AI for:**
- Writing boilerplate (HTML/CSS structure).
- Writing unit tests.
- Refactoring huge files.
- Generating documentation.
- Converting formats (JSON -> YAML).

**Use Manual Coding for:**
- Fixing small logic errors the AI misses.
- Tweaking UI styles (CSS pixel pushing).
- Config files with sensitive keys.
- Merging Git conflicts (be careful with AI here).

## 3. Handling Complexity

Break big tasks into small prompts.

**Task:** Build a full To-Do App.

**Prompt 1 (Backend):**
> "Create a `tasks.json` file with sample data. Write a Python function `load_tasks()` to read it."

**Prompt 2 (Frontend):**
> "Create an `index.html` that displays the tasks in a list. Use vanilla JS to fetch via API (mock for now)."

**Prompt 3 (Integration):**
> "Implement a simple HTTP server to serve `tasks.json` to the frontend."

## 4. Context Management Strategy

The AI has a limited "token window" (memory). If you feed it your entire repo, it gets confused or expensive.

**Context Best Practices:**
- Use `.cursorrules` or system prompt to set context.
- Start new sessions for new tasks.
- Keep relevant files open or explicitly reference them: `claude "Read src/main.py and fix the bug in line 45."`

## 5. Checklist

- [ ] Break tasks into < 50 line changes.
- [ ] Run tests frequently (every prompt if possible).
- [ ] Review every file change *before* committing.
- [ ] Restart the AI context/session if it starts looping errors.
