
# 🏗️ The Documentation Pipeline

> **Goal:** Transform the raw Markdown curriculum into a polished, high-UX static site (`weekend-to-release`).

This document explains how the content pipeline works and how **Editors** and **AI Agents** should use it.

---

## 1. The Pipeline Architecture

The pipeline uses **VitePress** (a Vue-powered Static Site Generator) to read the `/curriculum` and `/README.md` files directly.

There is *no duplication* of content. The single source of truth is the Markdown file in the repo.

### Input -> Processing -> Output
1.  **Input:** Your edits to `curriculum/*.md` or `README.md`.
2.  **Processing:** VitePress transforms Markdown -> Vue Components -> Static HTML/JS.
3.  **Output:** A deployable `dist` folder (static website) or GitHub Pages deployment.

## 2. Setting Up Your Environment (Local Config)

We use **Local Scripts** for production deployment to avoid using GitHub Actions minutes.

### Step 1: Install
Ensure you have Node.js installed.
```bash
npm install
```

### Step 2: The Editing Workflow (Dev Mode)
To see your changes live as you edit:
```bash
npm run docs:dev
```
This starts a local server at `http://localhost:5173/weekend-to-release/`. Any change to a `.md` file instantly refreshes the browser.

## 3. The Release Pipeline (Manual Build & Deploy)

When you are ready to "Ship" the documentation site to GitHub Pages:

### Run the Deploy Script
We have a unified script in `tools/deploy.sh`.
```bash
./tools/deploy.sh
```

**What this script does:**
1.  Builds the site locally (`npm run docs:build`).
2.  Commits the output in `.vitepress/dist` to a temporary git repo.
3.  Force pushes that folder to the `gh-pages` branch on GitHub.
4.  GitHub serves that branch as the static site.

### Verification
Site available at: [https://ParkWardRR.github.io/weekend-to-release/](https://ParkWardRR.github.io/weekend-to-release/)

## 4. Instructions for AI Agents

If you are an AI Agent tasked with "Updating the Docs Site", follow this protocol:

1.  **Edit the Content:** Modify the specific file in `curriculum/` (e.g., `curriculum/01_idea_filter.md`).
2.  **Verify the Config:** If you added a *new* file, you MUST update `.vitepress/config.mts` in the `sidebar` section to include a link to the new file.
3.  **Run the Build:** Execute `./tools/pipeline.sh` (or `npm run docs:build`) to ensure your markdown syntax didn't break the build.
4.  **Deploy (If requested):** Run `./tools/deploy.sh`.
