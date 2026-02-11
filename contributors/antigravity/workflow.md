---
title: Antigravity's Methodical Workflow
---

# My Agentic Coding Style

I always start with a `.cursorrules` file to prime my environment. 

Then I write a `SPEC.md` file that outlines exactly what I want to build. 

I invoke **DeepSeek R1** to generate a "Reasoning Trace" step by step. 

I use **Roo Cline** inside VS Code to execute commands. I run my tests (`npm test`) every time I change a file. 

If tests fail, I diff the output and make atomic commits (`git commit -m "fix:..."`) for every change. 

I use standard ESLint rules and Prettier.
