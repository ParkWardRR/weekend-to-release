# Contributing to Weekend-to-Release

> **Audience:** Contributors and maintainers.
> This document is **not** part of the student-facing site.

## How to Contribute Your Knowledge

1. Create a folder: `contributors/your-name/`
2. Drop any `.md` files with your thoughts, tips, workflows, war stories, whatever
3. Run `npm run generate:curriculum`
4. Review the generated output in `learn/your-name/`
5. Polish if needed, then open a PR

### What to write about

Anything useful. Write messy — the pipeline handles formatting.

- How you debug things
- Your deployment process
- Tools you use and why
- Mistakes you've made and what you learned
- Shortcuts that save you time
- How you think about architecture

### The two-step process

**Step 1:** The pipeline generates structured courses from your raw notes automatically.

**Step 2:** You (or a reviewer) polish the generated output before it goes live. Fix rough spots, add context where needed.

## Fixing Typos or Broken Links

1. Fork the repository
2. Create a branch from `main`
3. Make your fix
4. Open a pull request

## Writing Style

This project targets beginners. When writing or reviewing:

- Use short sentences. Define jargon the first time it appears.
- Prefer "why this matters" followed by "do this now."
- Avoid walls of text; use headings, lists, and diagrams.

## The Two Audiences

| Audience | They See | They Care About |
| :--- | :--- | :--- |
| **Students** | The published site | Learning to build and ship |
| **Contributors** | This GitHub repo | Sharing their knowledge |

**Rule:** Course content should never mention this repo's internals.

## Pull Request Guidelines

- Keep PRs focused on a single change
- Write a clear title and description
- Verify the build passes: `npm run docs:build`

## License

By contributing, you agree that your contributions will be licensed under the
[Blue Oak Model License 1.0.0](./LICENSE.md).
