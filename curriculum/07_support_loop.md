# Module G: Support Loop

> **Goal:** Manage issues and feedback without burnout.

Issue templates, triage labels, “known issues”, and boundaries.

---

## 1. What You'll Build
Create GitHub Issue Templates.

## 2. Why It Matters
Documentation and process save you from answering the same questions 100 times.

## 3. The Concept
```mermaid
flowchart TD
    A[New Issue] --> B{Is it a Bug?}
    B -- Yes --> C[Reproduce]
    C --> D[Fix & Release]
    B -- No --> E{Feature Request?}
    E -- Yes --> F[Add to Roadmap (Maybe)]
    E -- No --> G[Close (Support/Question)]
```

## 4. Do This Now

Create GitHub Issue Templates.

## 5. Checklist

- [ ] Created Bug Report template.
- [ ] Created Feature Request template.
- [ ] Defined support policy (what you will/won't fix).
