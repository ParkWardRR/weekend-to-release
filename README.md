# Weekend-to-Release

<div align="center">

![Weekend-to-Release Hero](./src/assets/hero_starlight.png)

### Build and Ship with AI
**A step-by-step guide to going from a blank page to a public release, using AI agents as your development team.**

</div>

---

## 🚀 Overview

This repository is a **living curriculum** and **cheatsheet** for developers who want to master the art of building software with AI agents (like ChatGPT, Claude, DeepSeek, Cursor, and Cline).

It is built with **Astro Starlight** for a high-performance, beautiful documentation experience.

## 📚 Curriculum

We have gathered workflows from different "mentors" (personas) to show you different ways to build:

- **Antigravity (The Methodical Engineer):** Uses `spec -> build -> test` loops, atomic commits, and strict context management.
- **Alex (The Rapid Prototyper):** Moves fast, breaks things, and iterates quickly.
- **Claire (The Explorer):** Focuses on learning and deeper understanding.

## 🛠️ Tech Stack & Setup

This project uses **Astro Starlight**.

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/ParkWardRR/weekend-to-release.git
cd weekend-to-release
npm install
```

### Running Locally

```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) to view the site.

### Generating Content

The curriculum is generated from raw markdown files in the `contributors/` directory. To regenerate the site content:

```bash
npm run generate:curriculum
```

### Building for Production

```bash
npm run build
```

## 🎨 Customization

- **Theme:** The site uses a custom "Friendly & Inspiring" theme defined in `src/styles/custom.css`.
- **Configuration:** `astro.config.mjs` handles Starlight plugins and sidebar.
- **Content:** Edit files in `contributors/` and regenerate, or edit `src/content/docs/` directly for static pages.

## 🤝 Contributing

1. Fork the repo.
2. Add your own notes to `contributors/your_name/`.
3. Run `npm run generate:curriculum` to test.
4. Open a PR.

---

**License:** ISC
