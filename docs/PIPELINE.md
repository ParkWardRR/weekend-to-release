
# The Documentation Pipeline

> **Audience:** Editors, maintainers, and AI agents working on the curriculum.
> This document is **not** part of the student-facing course.

---

## How the Pipeline Works

The pipeline uses **VitePress** (a Vue-powered Static Site Generator) to transform the Markdown curriculum into a polished static site.

```
curriculum/*.md   ──►   VitePress Build   ──►   GitHub Pages
index.md                (npm run docs:build)    (gh-pages branch)
CHEATSHEET.md
```

There is **no duplication** of content. The Markdown files in this repo are the single source of truth. VitePress reads them directly.

### What Gets Published

| Source File | Published URL |
| :--- | :--- |
| `index.md` | Homepage (`/`) |
| `CHEATSHEET.md` | `/cheatsheet` |
| `curriculum/ai_skills/*.md` | `/curriculum/ai_skills/*` |
| `curriculum/*.md` | `/curriculum/*` |

### What Does NOT Get Published

These files are **repo-only** and do not appear on the student site:

- `README.md` — Repo landing page for GitHub visitors
- `CONTRIBUTING.md` — Contributor guidelines
- `docs/PIPELINE.md` — This file
- `docs/spec.md` — Original project specification
- `CODE_OF_CONDUCT.md`, `LICENSE.md`, `SECURITY.md` — Repo governance

## Local Development

### Prerequisites

- Node.js (LTS recommended)

### Setup

```bash
npm install
```

### Dev Server (Hot Reload)

```bash
npm run docs:dev
# → http://localhost:5173/weekend-to-release/
```

Edit any `.md` file and the browser refreshes instantly.

### Production Preview

```bash
npm run docs:build
npm run docs:preview
# → http://localhost:4173/weekend-to-release/
```

## Deploying to GitHub Pages

We use a **local build + force-push** strategy to avoid burning GitHub Actions minutes.

```bash
./tools/deploy.sh
```

**What the script does:**

1. Builds the site locally (`npm run docs:build`).
2. Creates a temporary git repo inside `.vitepress/dist`.
3. Force-pushes that folder to the `gh-pages` branch on GitHub.
4. GitHub serves the `gh-pages` branch at the public URL.

**Live site:** [https://parkwardrr.github.io/weekend-to-release/](https://parkwardrr.github.io/weekend-to-release/)

## Instructions for AI Agents

If you are an AI agent tasked with updating the course content:

1. **Edit content** in `curriculum/` or `index.md`.
2. **Update the sidebar** in `.vitepress/config.mts` if you add a new file.
3. **Run the build** with `npm run docs:build` (or `./tools/pipeline.sh`) to verify nothing broke.
4. **Deploy** with `./tools/deploy.sh` if instructed to publish.

### Important Separation

- `index.md` is the **student-facing homepage**. Keep it clean, educational, and free of repo/contributor language.
- `README.md` is the **repo-facing landing page**. It should direct students to the live site and then serve editors/contributors.
- Curriculum files should teach concepts for the student's *own* projects. Never reference this repo's internal structure.
