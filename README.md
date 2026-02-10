<div align="center">

# Weekend-to-Release (Agentic Edition)

### From Idea to "It Runs" to "It Ships"

[![License: Blue Oak 1.0.0](https://img.shields.io/badge/License-Blue_Oak_1.0.0-blue.svg)](https://blueoakcouncil.org/license/1.0.0)
[![Status: Active](https://img.shields.io/badge/Status-Active_Maintenance-brightgreen.svg?style=flat-square)](https://github.com/ParkWardRR/weekend-to-release)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg?style=flat-square)](http://makeapullrequest.com)
[![Diagrams: Mermaid](https://img.shields.io/badge/Diagrams-Mermaid_JS-ff69b4.svg?style=flat-square)](https://mermaid.js.org/)
[![Curriculum: 13 Modules](https://img.shields.io/badge/Course-13_Modules-blueviolet.svg?style=flat-square)](./curriculum)

---

### **[Read the Course Online](https://parkwardrr.github.io/weekend-to-release/)**

If you're here to **learn**, head straight to the live site above.
Everything below is for **editors, contributors, and maintainers** of this curriculum.

---

</div>

## About This Repository

This repo is the source content for **Weekend-to-Release** — a 13-module curriculum that teaches builders how to go from a weekend idea to a versioned, installable product using AI agents.

The Markdown files in this repo are compiled into a static site via [VitePress](https://vitepress.dev) and deployed to GitHub Pages. Students interact with the published site. Contributors and editors work here.

### How It Works

```
curriculum/*.md  ──►  VitePress Build  ──►  Static Site (GitHub Pages)
     (source)           (pipeline)          (student-facing)
```

- **Students** read the course at [parkwardrr.github.io/weekend-to-release](https://parkwardrr.github.io/weekend-to-release/).
- **Editors** modify Markdown files in `curriculum/` and submit pull requests.
- **Maintainers** review PRs, merge to `main`, and deploy with `./tools/deploy.sh`.

## Curriculum Overview

### Phase 1: From Blank Page to "It Runs"

| Module | Topic | File |
| :--- | :--- | :--- |
| Skill 01 | The AI Stack | [`curriculum/ai_skills/01_the_ai_stack.md`](./curriculum/ai_skills/01_the_ai_stack.md) |
| Skill 02 | The Perfect Spec | [`curriculum/ai_skills/02_prompt_engineering.md`](./curriculum/ai_skills/02_prompt_engineering.md) |
| Skill 03 | The Build Loop | [`curriculum/ai_skills/03_agentic_workflow.md`](./curriculum/ai_skills/03_agentic_workflow.md) |
| Skill 04 | Context Mastery | [`curriculum/ai_skills/04_context_management.md`](./curriculum/ai_skills/04_context_management.md) |
| Skill 05 | AI Debugging | [`curriculum/ai_skills/05_debugging_collaboratively.md`](./curriculum/ai_skills/05_debugging_collaboratively.md) |

### Phase 2: The Idea Filter

| Module | Topic | File |
| :--- | :--- | :--- |
| Module A | The Idea Filter | [`curriculum/01_idea_filter.md`](./curriculum/01_idea_filter.md) |
| Module B | The MVP Scope | [`curriculum/02_mvp_scope.md`](./curriculum/02_mvp_scope.md) |

### Phase 3: From "It Runs" to "It Ships"

| Module | Topic | File |
| :--- | :--- | :--- |
| Module C | Distribution & Install | [`curriculum/03_distribution.md`](./curriculum/03_distribution.md) |
| Module D | Config & Safety | [`curriculum/04_config_safety.md`](./curriculum/04_config_safety.md) |
| Module E | Testing Strategy | [`curriculum/05_testing.md`](./curriculum/05_testing.md) |
| Module F | Versioning & Upgrades | [`curriculum/06_versioning.md`](./curriculum/06_versioning.md) |
| Module G | Support Loop | [`curriculum/07_support_loop.md`](./curriculum/07_support_loop.md) |
| Module H | Launch & Roadmap | [`curriculum/08_launch_feedback.md`](./curriculum/08_launch_feedback.md) |

## For Editors & Contributors

### Quick Start

```bash
# Clone and install
git clone https://github.com/ParkWardRR/weekend-to-release.git
cd weekend-to-release
npm install

# Start local dev server (hot-reload)
npm run docs:dev
# → http://localhost:5173/weekend-to-release/
```

### Writing Guidelines

- **Audience:** ELI-15 (Explain Like I'm 15). Short sentences, define jargon, prefer examples.
- **Structure:** Every module follows "What You'll Build" → "Why It Matters" → "Do This Now" → Checklist.
- **Diagrams:** Use Mermaid (`flowchart TD` or `flowchart LR`), 6-12 nodes per diagram.
- **Tone:** Practical, direct, zero fluff.

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the full guide.

### Deploying

We use a local build-and-deploy pipeline (no paid GitHub Actions minutes).

```bash
./tools/deploy.sh
```

This builds the VitePress site locally and force-pushes the output to the `gh-pages` branch.

See [`docs/PIPELINE.md`](./docs/PIPELINE.md) for the full pipeline documentation.

### Tech Stack

- **Content:** Markdown + Mermaid diagrams
- **Generator:** [VitePress](https://vitepress.dev) (Vue-powered SSG)
- **Hosting:** GitHub Pages (`gh-pages` branch)
- **License:** [Blue Oak Model License 1.0.0](https://blueoakcouncil.org/license/1.0.0)

---

<div align="center">
<sub>Built for builders who ship.</sub>
</div>
