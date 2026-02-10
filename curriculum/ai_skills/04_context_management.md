
# 04. Context Management: The Secret to Long Contexts

> **Goal:** Keep your AI "Short-Term Memory" clean and effective.

Large projects confuse AI. Context Management is the art of telling the AI *only* what it needs to know.

---

## 1. The Token Limit (Concept)

Imagine hiring a brilliant intern who forgets everything every 2 hours (or after 200k tokens).
If you dump the entire Linux kernel code into the prompt, the intern will forget the first instruction.

**Rule:** Keep context focused.

### Techniques:

#### A. The "Focus Window"
Only include files relevant to the current task.
- **Good:** `claude "Read utils.py and main.py. Implement the login."`
- **Bad:** `claude "Read the entire src directory. Implement login."`

#### B. The "Summaries"
Use `repo_map` or generate a summary file.
- `claude "Create a SUMMARY.md of the project architecture."`
- Then use `SUMMARY.md` in future prompts.

#### C. The ".cursorrules" / System Prompt
Use a `.cursorrules` or `.system` file (if supported by tool) to enforce coding standards.

**Example .cursorrules:**
```markdown
- Use TypeScript with strict types.
- Write JSDoc comments for all exported functions.
- Prefer TailwindCSS for styling.
- Use `pnpm` for package management.
```

## 2. Managing "Drift"

After 10 turns, the AI might hallucinate old code or forget new changes.

**Solution:**
- **Restart the session**: If the AI is stuck or looping, clear context.
- **Provide "Fresh" State**: Explicitly tell it current file contents.

## 3. The "Reference Implementation"
When asking for new code, provide an example of existing *good* code in your project.

**Prompt:**
- "Create a new API route `GET /users`. Follow the pattern in `src/routes/products.ts`."
- This is the single most powerful technique for consistency.

## 4. Checklist

- [ ] Clear context every major task switch.
- [ ] Use Reference Implementations for consistency.
- [ ] Maintain a `SUMMARY.md` or `ARCHITECTURE.md` to re-ground the AI.
