
# 02. Prompt Engineering: Writing the Spec

> **Goal:** If you give a vague spec, you get vague code. Garbage in, garbage out.

The **Primary Skill** of 2024+ is writing clear, specific instructions for AI.

---

## 1. The Anatomy of a Perfect Prompt

A perfect prompt has 3 components: **Role + Context + Action + Constraint.**

### Bad Prompt:
> "Write a script to process CSVs."

### Perfect Prompt:
> **(Role)** You are a Senior Data Engineer.
> **(Context)** I have a CSV file `data.csv` with columns: `date`, `amount`, `customer_id`.
> **(Action)** Write a Python script to aggregate the total `amount` by `date`.
> **(Constraint)** Use the `pandas` library. Output the result to `summary.json`. Handle missing values by dropping the row.

## 2. Iterative Prompting Loop

Don't write one massive prompt and hope. Use the **Loop**:

1. **Start Small:** "Create the file structure for the app."
2. **Review:** Does it look right?
3. **Expand:** "Now add the core logic for the parser."
4. **Refine:** "Refactor the logic to be more modular."

## 3. The "Spec-First" Approach

Before asking for code, ask for a **Plan**.

```bash
claude "I need to build a CLI tool. First, read the README.md to understand the goal. Then, propose a file structure and key functions. Do not write code yet."
```

This forces the AI to align with your vision *before* waisting tokens on hallucinations.

## 4. Exercise

**Task:** Create a simple HTML page with a blue button.

**Step 1 (Plan):**
`claude "Propose the HTML structure for a landing page with a hero section and a CTA button."`

**Step 2 (Code):**
`claude "Implement the proposed structure. Use inline CSS for now. Make the background dark gray and the button bright blue."`

**Step 3 (Refine):**
`claude "Move the CSS to a separate styles.css file and link it."`

## 5. Checklist

- [ ] Always specify the tech stack (language, frameworks).
- [ ] Always specify the input and output format.
- [ ] Ask for a plan before code for complex tasks.
- [ ] Provide examples if specific formatting is needed.
