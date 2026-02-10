
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
3.  **Output:** A deployable `dist` folder (static website).

## 2. Setting Up Your Environment (Local CI/CD)

The user does not use GitHub Actions. We run the pipeline locally.

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
This starts a local server at `http://localhost:5173`. Any change to a `.md` file instantly refreshes the browser.

## 3. The Release Pipeline (Production Build)

When you are ready to "Ship" the documentation site:

### Run the Pipeline Script
We have a unified script in `tools/pipeline.sh`.
```bash
./tools/pipeline.sh
```

**What this script does:**
1.  Checks if `node_modules` exists (installs if missing).
2.  Runs `npm run docs:build`.
3.  Verifies the build exit code.
4.  Outputs the location of the static files (`.vitepress/dist`).

### Manual Build Command
```bash
npm run docs:build
```

### Preview the Production Build
To test exactly what users will see (including 404s and base paths):
```bash
npm run docs:preview
```

## 4. Instructions for AI Agents

If you are an AI Agent tasked with "Updating the Docs Site", follow this protocol:

1.  **Edit the Content:** Modify the specific file in `curriculum/` (e.g., `curriculum/01_idea_filter.md`).
2.  **Verify the Config:** If you added a *new* file, you MUST update `.vitepress/config.mts` in the `sidebar` section to include a link to the new file.
3.  **Run the Build:** Execute `./tools/pipeline.sh` to ensure your markdown syntax didn't break the build (e.g., broken frontmatter).
4.  **Report Success:** Confirm that "Build Success!" was outputted.

## 5. Deployment (Manual / Local)

Since we use Local CI/CD:
1.  Run the build.
2.  The output is in `.vitepress/dist`.
3.  You can zip this folder, rsync it to a server, or drag-and-drop it to a static host (Netlify/Vercel) manually if needed.
4.  To browse locally, just use `npm run docs:preview`.
