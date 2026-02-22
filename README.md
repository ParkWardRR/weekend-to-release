# Weekend-to-Release

[**START LEARNING (LIVE SITE)**](https://ParkWardRR.github.io/weekend-to-release/)

## Charter-Orchestrated Engineering with Auro

A practical guide to building software with AI agents using an ACE toolkit. Stop guessing, start specifying.

This site teaches **Charter-Orchestrated Engineering (ACE)** -- a methodology where charters are the primary artifact, not code. You write charters, and AI agents generate the implementation.

## What You'll Learn

| Phase | Command | What Happens |
|-------|---------|--------------|
| **charter** | `/auro.charter` | Define user stories, requirements, and success criteria |
| **Plan** | `/auro.plan` | Translate charters into technical plans with phase gates |
| **Tasks** | `/auro.tasks` | Break plans into phased, parallel-ready task lists |
| **Implement** | `/auro.implement` | AI agent executes tasks, you review and ship |

## Overhaul Highlights

- **Branding refresh:** renamed to **Auro** with `/auro.*` command namespace.
- **Context-window strategy:** layered charter model + explicit token budgets to protect implementation capacity.
- **charter integrity model:** canonical charters + feature deltas so charters stay long-lived and accurate.
- **New architecture template:** hybrid coordinator/storage/compute blueprint for low baseline cost and burst AI throughput.

See:

- `src/content/docs/guide/context-and-charter-integrity.md`
- `src/content/docs/templates/architecture-build-template.md`

## Tech Stack

Built with [Astro Starlight](https://starlight.astro.build/) for a fast, accessible documentation experience.

### Prerequisites

- Node.js 18+
- npm

### Running Locally

```bash
git clone https://github.com/ParkWardRR/weekend-to-release.git
cd weekend-to-release
npm install
npm run dev
```

Open [http://localhost:4321/weekend-to-release/](http://localhost:4321/weekend-to-release/) to view the site.

### Building for Production

```bash
npm run build
```

## Contributing

1. Fork the repo.
2. Edit content in `src/content/docs/`.
3. Run `npm run build` to verify.
4. Open a PR.

---

**License:** ISC
