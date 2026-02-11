# Weekend-to-Release: The Self-Optimizing Agentic Pipeline

> **Don't just learn AI. Transform your messy creative process into a shipping machine.**

This project is not just a course—it is a live, agentic environment that analyzes *your specific* workflow and builds a custom release pipeline around it.

## 🚀 The Philosophy: Chaos to Release

We believe that human creativity is messy (`journey/workflow.md`). We believe that software delivery should be boring and reliable (`my_cheatsheet.md`).

This tool bridges the gap.

1.  **Input:** You dump your raw, chaotic, stream-of-consciousness coding style into `journey/workflow.md`.
2.  **Analysis:** The system (`npm run analyze:workflow`) reads your "Chaos Context".
3.  **Output:** It generates a personalized **Dashboard** (`index.md`) and **Cheatsheet**, identifying exactly which agentic skills you need to learn to ship.

## 🛠️ How to Use This

**1. Clone & Install**
```bash
git clone https://github.com/ParkWardRR/weekend-to-release.git
cd weekend-to-release
npm install
```

**2. Define Your Chaos**
Open `journey/workflow.md` and write about how you code. Be honest.
> "I copy paste errors."
> "I never write tests."
> "I ask GPT-4 to write my entire backend."

**3. Run the Analyzer**
```bash
npm run analyze:workflow
```

**4. View Your Dashboard**
```bash
npm run docs:dev
```
Go to `http://localhost:5173`. You will see your personalized breakdown.

## 📚 The Curriculum (On Demand)

The curriculum modules are now resources that you pull *when you need them*, tailored to your identified gaps.

- **Phase 1: The Build Loop** (For the copy-pasters)
- **Phase 2: The Idea Filter** (For the excited starters)
- **Phase 3: The Release Rocket** (For the non-shippers)

## 📦 For Contributors

This project uses `VitePress` for documentation and simple Node scripts for the analysis engine.

**Build & Deploy:**
```bash
./tools/deploy.sh
```

---
<div align="center">
Built for builders who ship.
</div>
