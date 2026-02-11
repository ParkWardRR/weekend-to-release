# Weekend-to-Release

**Start here:** [parkwardrr.github.io/weekend-to-release](https://parkwardrr.github.io/weekend-to-release/)

A practical guide to building and shipping with AI agents. Learn from experienced developers who share their real workflows, tips, and hard-won knowledge.

---

## For Contributors (Pros)

Share what you know. Write messy — the pipeline handles formatting.

1. Create a folder: `contributors/your-name/`
2. Drop any `.md` files — tips, workflows, war stories, whatever
3. Run `npm run generate:curriculum`
4. Review the generated output in `learn/your-name/`
5. Open a PR

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

---

## Building & Publishing the Site

### Setup

```bash
git clone https://github.com/ParkWardRR/weekend-to-release.git
cd weekend-to-release
npm install
```

### Generate + Dev Server

```bash
npm run generate:curriculum    # turns contributor notes into structured pages
npm run docs:dev               # localhost:5173/weekend-to-release/
```

### Deploy to GitHub Pages

```bash
npm run docs:build
bash tools/deploy.sh
```

See [docs/PIPELINE.md](./docs/PIPELINE.md) for the full pipeline reference.

---

Licensed under [Blue Oak Model License 1.0.0](./LICENSE.md).
