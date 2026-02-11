const fs = require('fs');
const path = require('path');

// --- Paths ---
const ROOT = path.join(__dirname, '..');
const CONTRIBUTORS_DIR = path.join(ROOT, 'contributors');
const CURRICULUM_DIR = path.join(ROOT, 'curriculum');
const INDEX_FILE = path.join(ROOT, 'index.md');

// --- Helper: Clean Markdown ---
const cleanMarkdown = (content) => content.replace(/^---[\s\S]*?---\n/, '').trim();

// --- Configuration: SDLC Phases & Modules ---
const sdlcPhases = {
  phase1: {
    title: 'Phase 1: From Blank Page to "It Runs"',
    modules: [
      { id: 'ai_skills/01_the_ai_stack', title: 'The AI Stack', tags: ['setup', 'tools'] },
      { id: 'ai_skills/02_prompt_engineering', title: 'The Perfect Spec', tags: ['planning', 'specs'] },
      { id: 'ai_skills/03_agentic_workflow', title: 'The Build Loop', tags: ['coding', 'workflow'] },
      { id: 'ai_skills/04_context_management', title: 'Context Mastery', tags: ['coding', 'context'] },
      { id: 'ai_skills/05_debugging_collaboratively', title: 'AI Debugging', tags: ['debugging', 'testing'] }
    ]
  },
  phase2: {
    title: 'Phase 2: What to Build',
    modules: [
      { id: '01_idea_filter', title: 'The Idea Filter', tags: ['planning', 'idea'] },
      { id: '02_mvp_scope', title: 'The MVP Scope', tags: ['planning', 'scope'] }
    ]
  },
  phase3: {
    title: 'Phase 3: From "It Runs" to "It Ships"',
    modules: [
      { id: '03_distribution', title: 'Distribution & Install', tags: ['deployment', 'shipping'] },
      { id: '04_config_safety', title: 'Config & Safety', tags: ['security', 'config'] },
      { id: '05_testing', title: 'Testing Strategy', tags: ['testing', 'qa'] },
      { id: '06_versioning', title: 'Versioning & Upgrades', tags: ['deployment', 'versioning'] },
      { id: '07_support_loop', title: 'Support Loop', tags: ['maintenance', 'support'] },
      { id: '08_launch_feedback', title: 'Launch & Roadmap', tags: ['shipping', 'launch'] }
    ]
  }
};

// --- Main ---

// 1. Scan Contributors
const users = fs.readdirSync(CONTRIBUTORS_DIR).filter(f => fs.lstatSync(path.join(CONTRIBUTORS_DIR, f)).isDirectory());
const contributorData = [];

users.forEach(user => {
  const workflowPath = path.join(CONTRIBUTORS_DIR, user, 'journey', 'workflow.md');
  if (fs.existsSync(workflowPath)) {
    const content = fs.readFileSync(workflowPath, 'utf8');
    const lower = content.toLowerCase();

    // Analyze
    const recommendations = [];
    const stack = [];

    // Simple Heuristics
    if (lower.includes('chatgpt')) stack.push('ChatGPT');
    if (lower.includes('copilot')) stack.push('GitHub Copilot');

    // Map to Modules based on "chaotic" keywords
    if (lower.includes('copy paste') || lower.includes('error')) {
      recommendations.push(sdlcPhases.phase1.modules.find(m => m.id.includes('debugging')));
      recommendations.push(sdlcPhases.phase1.modules.find(m => m.id.includes('agentic_workflow')));
    }
    if (!lower.includes('test')) {
      recommendations.push(sdlcPhases.phase3.modules.find(m => m.id.includes('testing')));
    }
    if (!lower.includes('spec') && !lower.includes('plan')) {
      recommendations.push(sdlcPhases.phase1.modules.find(m => m.id.includes('prompt_engineering')));
      recommendations.push(sdlcPhases.phase2.modules.find(m => m.id.includes('idea_filter')));
    }

    // Dedupe
    const uniqueRecs = [...new Set(recommendations.filter(Boolean))];

    const data = {
      user,
      raw: cleanMarkdown(content),
      stack,
      recommendations: uniqueRecs
    };

    contributorData.push(data);

    // Generate User's "Criteria Package" Page
    generateUserPage(data);
  }
});

// 2. Generate Main Index
generateIndex(contributorData, sdlcPhases);

console.log('✅ Generated Curriculum and User Pages.');


// --- Generators ---

function generateUserPage(data) {
  const recLinks = data.recommendations.map(m => `- [${m.title}](/curriculum/${m.id})`).join('\n');

  const content = `---
title: Criteria Package for ${data.user}
---

# 📦 Criteria Package: @${data.user}

Based on your workflow analysis, here is your customized learning path.

## 🧠 Your Workflow Analysis

::: info Chaos Context
${data.raw}
:::

## 🛠️ Detected Stack
${data.stack.length ? data.stack.map(s => `- ${s}`).join('\n') : '- General Tools'}

## 🎓 Recommended Modules
Detailed deep dives for your specific gaps:

${recLinks || "No specific gaps detected! You seem orderly."}

## ⚡ Quick Actions (Cheatsheet)
- **Stop Copy-Pasting**: Use CLI agents.
- **Write Specs**: Don't start coding until you have a plan.
- **Test**: Even one test saved 5 hours of debugging.
`;

  const outPath = path.join(CURRICULUM_DIR, `user_${data.user}.md`);
  fs.writeFileSync(outPath, content);
}

function generateIndex(contributors, phases) {

  // Phase HTML Generator
  const renderPhase = (phaseKey) => {
    const p = phases[phaseKey];
    const mods = p.modules.map(m => `
      <div class="module-card">
        <a href="/curriculum/${m.id}">
            <h4>${m.title}</h4>
            <div class="tags">${m.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        </a>
      </div>
    `).join('');
    return `
    <div class="phase-section">
      <h3>${p.title}</h3>
      <div class="module-grid">${mods}</div>
    </div>`;
  };

  const contribLinks = contributors.map(c =>
    `<li><a href="/curriculum/user_${c.user}.md"><strong>@${c.user}</strong></a> (${c.recommendations.length} modules recommended)</li>`
  ).join('');

  const content = `---
layout: home

hero:
  name: Weekend-to-Release
  text: The Agentic SDLC
  tagline: From Blank Page to "It Ships" — Tailored for Humans & AI.
  actions:
    - theme: brand
      text: Start Phase 1
      link: /curriculum/ai_skills/01_the_ai_stack
    - theme: alt
      text: View Cheatsheets
      link: /cheatsheet

features:
  - icon: "🧠"
    title: "Phase 1: It Runs"
    details: Master the AI stack, prompting, and the build loop.
  - icon: "🏗️"
    title: "Phase 2: Build"
    details: Filter ideas and scope your MVP.
  - icon: "🚀"
    title: "Phase 3: It Ships"
    details: Testing, distribution, and launch.
---

<div class="container">

<h2 id="curriculum">📚 The Curriculum</h2>
<p>Choose your path. View as full course modules or quick cheatsheets.</p>

${renderPhase('phase1')}
${renderPhase('phase2')}
${renderPhase('phase3')}

<h2 id="human-devs">👤 Human Developers (Criteria Packages)</h2>
<p>See how real developers customized their learning path based on their chaos.</p>

<ul>
${contribLinks}
</ul>

</div>

<style>
.container { max-width: 960px; margin: 0 auto; padding: 2rem 1rem; }
h2 { border-bottom: 1px solid var(--vp-c-divider); padding-bottom: 0.5rem; margin-top: 4rem; margin-bottom: 2rem; }

.phase-section { margin-bottom: 3rem; }
.phase-section h3 { color: var(--vp-c-brand); margin-bottom: 1rem; }

.module-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem; }

.module-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  transition: transform 0.2s;
}
.module-card:hover { transform: translateY(-2px); border-color: var(--vp-c-brand); }
.module-card a { display: block; padding: 1.5rem; text-decoration: none !important; color: inherit !important; }
.module-card h4 { margin: 0 0 0.5rem 0; font-weight: 600; }

.tags { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.tag { font-size: 0.75em; background: var(--vp-c-bg-mute); padding: 2px 6px; border-radius: 4px; opacity: 0.8; }
</style>
`;

  fs.writeFileSync(INDEX_FILE, content);
}
