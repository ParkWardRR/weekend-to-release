# Contributing to Weekend-to-Release

> **Audience:** Editors, contributors, and maintainers.
> This document is **not** part of the student-facing course.

Thanks for your interest in improving this curriculum. This project is a static educational site (Markdown + Mermaid diagrams, no executable code), so contributing is straightforward.

---

## The Two Audiences

This project serves **two distinct audiences**. Never mix them:

| Audience | They See | They Care About |
| :--- | :--- | :--- |
| **Students** | The published site at [parkwardrr.github.io/weekend-to-release](https://parkwardrr.github.io/weekend-to-release/) | Learning to build and ship with AI agents |
| **Editors/Contributors** | This GitHub repo | Improving the curriculum content |

**Rule:** Curriculum files (`curriculum/`, `index.md`, `CHEATSHEET.md`) should never mention this repo, its structure, the build pipeline, or how to contribute. They teach students about *their* projects.

---

## How to Contribute

### Fixing typos or broken links

1. Fork the repository.
2. Create a branch from `main`.
3. Make your fix.
4. Open a pull request with a short description.

### Suggesting new content or improvements

1. Open an issue describing the improvement or new topic.
2. Wait for feedback from a maintainer before investing time in a large change.
3. Once approved, follow the fork-and-PR workflow above.

### Adding or updating Mermaid diagrams

- Use `flowchart TD` or `flowchart LR` for most diagrams.
- Keep diagrams simple: aim for 6-12 nodes.
- Test that your diagram renders by running `npm run docs:dev` locally.

## Writing Style

This project targets an **ELI-15** audience. When writing:

- Use short sentences. Define jargon the first time it appears.
- Prefer "why this matters" followed by "do this now."
- Avoid walls of text; use headings, lists, and diagrams.
- Every module should end with a checklist.

## What We're Looking For

- Clearer explanations of existing topics.
- Better real-world examples.
- Diagram improvements.
- Typo and grammar fixes.
- Translations (open an issue first to coordinate).

## What We're Not Looking For

- Executable code or scripts (this is documentation only).
- Content that assumes deep programming knowledge.
- Enterprise-scale tooling or platform-specific guides.
- References to this repo's internals in student-facing content.

## Pull Request Guidelines

- Keep PRs focused on a single change.
- Write a clear title and description.
- Reference any related issue (e.g., `Fixes #12`).
- Verify the build passes: `npm run docs:build`

## License

By contributing, you agree that your contributions will be licensed under the
[Blue Oak Model License 1.0.0](./LICENSE.md).

## Questions?

Open an issue or reach out to **[ParkWardRR](https://github.com/ParkWardRR)**.
