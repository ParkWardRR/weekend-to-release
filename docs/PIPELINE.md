
# The Pipeline

> **Audience:** Editors, maintainers, and AI agents.
> This document is **not** part of the student-facing site.

---

## How It Works

Pros dump messy `.md` files into `contributors/their-name/`. A Node.js script turns those into structured per-contributor pages. VitePress builds the final site.

```
contributors/<name>/*.md   ──►   generate_curriculum.js   ──►   learn/<name>/
                                                                  ├── index.md
                                                                  ├── course.md
                                                                  └── cheatsheet.md

learn/**                   ──►   VitePress Build           ──►   GitHub Pages
curriculum/**                    (npm run docs:build)
index.md
CHEATSHEET.md
```

### Two-Step Process

**Step 1 — Generate:** `npm run generate:curriculum` reads raw contributor notes and outputs structured pages.

**Step 2 — Clean:** A human or AI reviews the generated output in `learn/` and polishes it before deploying.

## What Gets Published

| Source | Published URL |
| :--- | :--- |
| `index.md` | Homepage (`/`) |
| `CHEATSHEET.md` | `/cheatsheet` |
| `learn/<name>/index.md` | `/learn/<name>/` |
| `learn/<name>/course.md` | `/learn/<name>/course` |
| `learn/<name>/cheatsheet.md` | `/learn/<name>/cheatsheet` |
| `curriculum/ai_skills/*.md` | `/curriculum/ai_skills/*` (primers) |
| `curriculum/*.md` | `/curriculum/*` (primers) |

### What Does NOT Get Published

- `README.md` — Repo landing page
- `CONTRIBUTING.md` — Contributor guidelines
- `contributors/**` — Raw input files (excluded from build)
- `docs/**` — Pipeline docs and spec
- Governance files (CODE_OF_CONDUCT, LICENSE, SECURITY)

## Local Development

```bash
npm install
npm run generate:curriculum   # Generate pages from contributor notes
npm run docs:dev              # Dev server at http://localhost:5173/weekend-to-release/
```

### Full Pipeline

```bash
./tools/clean.sh              # Generate + review instructions
npm run docs:build            # Build for production
npm run docs:preview          # Preview at http://localhost:4173/weekend-to-release/
```

## Deploying to GitHub Pages

```bash
./tools/deploy.sh
```

Force-pushes the built site to the `gh-pages` branch.

**Live site:** [https://parkwardrr.github.io/weekend-to-release/](https://parkwardrr.github.io/weekend-to-release/)
