const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CONTRIBUTORS_DIR = path.join(ROOT, 'contributors');
const LEARN_DIR = path.join(ROOT, 'learn');
const INDEX_FILE = path.join(ROOT, 'index.md');

// --- Helpers ---

function readContributorFiles(contributorDir) {
  return fs.readdirSync(contributorDir)
    .filter(f => f.endsWith('.md') && f !== 'README.md')
    .sort()
    .map(f => ({
      name: f,
      content: fs.readFileSync(path.join(contributorDir, f), 'utf8')
    }));
}

function stripFrontmatter(content) {
  return content.replace(/^---[\s\S]*?---\n*/, '').trim();
}

function extractSections(content) {
  const clean = stripFrontmatter(content);
  const sections = [];
  let current = { heading: null, lines: [] };

  for (const line of clean.split('\n')) {
    const headingMatch = line.match(/^#{1,3}\s+(.+)/);
    if (headingMatch) {
      if (current.heading || current.lines.length) {
        sections.push(current);
      }
      current = { heading: headingMatch[1], lines: [] };
    } else {
      current.lines.push(line);
    }
  }
  if (current.heading || current.lines.length) {
    sections.push(current);
  }
  return sections;
}

function extractTips(content) {
  const tips = [];
  const lines = content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    // Bullet points that look like tips/advice
    if (/^[-*]\s+\*\*/.test(trimmed) || /^[-*]\s+`.+`/.test(trimmed)) {
      tips.push(trimmed);
    }
  }
  return tips;
}

function extractCodeBlocks(content) {
  const blocks = [];
  const regex = /```(\w*)\n([\s\S]*?)```/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    blocks.push({ lang: match[1] || 'text', code: match[2].trim() });
  }
  return blocks;
}

function extractBulletPoints(content) {
  return content.split('\n')
    .filter(l => /^\s*[-*]\s+/.test(l))
    .map(l => l.trim());
}

function formatName(dirName) {
  return dirName
    .replace(/_/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

// --- Generators ---

function generateCourseIndex(name, files, sections) {
  const displayName = formatName(name);
  const topics = sections
    .filter(s => s.heading)
    .map(s => `- ${s.heading}`)
    .join('\n');

  const sourceFiles = files.map(f => `- \`${f.name}\``).join('\n');

  return `---
title: "Learn from ${displayName}"
---

# Learn from ${displayName}

This course was built from ${displayName}'s raw notes and workflows.

## What's Covered

${topics || '- General development workflow'}

## Source Material

${sourceFiles}

## Start Learning

- [Full Course](./course) — The complete walkthrough
- [Cheatsheet](./cheatsheet) — Quick reference
`;
}

function generateCourse(name, files) {
  const displayName = formatName(name);
  let courseParts = [];

  for (const file of files) {
    const sections = extractSections(file.content);
    for (const section of sections) {
      const body = section.lines.join('\n').trim();
      if (section.heading) {
        courseParts.push(`## ${section.heading}\n\n${body}`);
      } else if (body) {
        courseParts.push(body);
      }
    }
  }

  if (courseParts.length === 0) {
    courseParts.push('*Content coming soon.*');
  }

  return `---
title: "${displayName}'s Course"
---

# ${displayName}'s Course

What follows is ${displayName}'s knowledge, organized for learning.

---

${courseParts.join('\n\n---\n\n')}
`;
}

function generateCheatsheet(name, files) {
  const displayName = formatName(name);
  const allContent = files.map(f => f.content).join('\n\n');

  const tips = extractTips(allContent);
  const codeBlocks = extractCodeBlocks(allContent);
  const bullets = extractBulletPoints(allContent);

  // Collect unique actionable items
  const cheatItems = [];

  // Tips from bold bullet points
  for (const tip of tips) {
    cheatItems.push(tip);
  }

  // If few tips found, fall back to all bullet points
  if (cheatItems.length < 3) {
    for (const bullet of bullets) {
      if (!cheatItems.includes(bullet)) {
        cheatItems.push(bullet);
      }
    }
  }

  const tipsSection = cheatItems.length
    ? cheatItems.join('\n')
    : '*No quick tips extracted yet. Add more bullet points to your notes.*';

  const codeSection = codeBlocks.length
    ? codeBlocks.map(b => `\`\`\`${b.lang}\n${b.code}\n\`\`\``).join('\n\n')
    : '*No code snippets found.*';

  return `---
title: "${displayName}'s Cheatsheet"
---

# ${displayName}'s Cheatsheet

Quick reference extracted from ${displayName}'s notes.

## Key Tips

${tipsSection}

## Code & Commands

${codeSection}
`;
}

function generateHomepage(contributors) {
  const contribCards = contributors.map(c => {
    const displayName = formatName(c.name);
    return `
      <div class="module-card">
        <a href="/learn/${c.name}/">
          <h4>${displayName}</h4>
          <p>${c.fileCount} note${c.fileCount === 1 ? '' : 's'} &middot; <a href="/learn/${c.name}/course">Course</a> &middot; <a href="/learn/${c.name}/cheatsheet">Cheatsheet</a></p>
        </a>
      </div>`;
  }).join('\n');

  return `---
layout: home

hero:
  name: Weekend-to-Release
  text: Learn from the Pros
  tagline: Real developers share how they actually build and ship. Messy notes in, structured courses out.
  actions:
    - theme: brand
      text: Start with the Primers
      link: /curriculum/ai_skills/01_the_ai_stack
    - theme: alt
      text: Cheatsheet
      link: /cheatsheet

features:
  - icon: "📝"
    title: "Pros Write"
    details: Experienced developers dump their knowledge into messy markdown files.
  - icon: "⚙️"
    title: "Pipeline Builds"
    details: A generator turns raw notes into structured courses and cheatsheets.
  - icon: "🎓"
    title: "Students Learn"
    details: Per-contributor curriculum, course content, and quick-reference guides.
---

<div class="container">

<h2 id="pros">Learn from the Pros</h2>
<p>Each contributor shares their real workflow, tips, and hard-won knowledge.</p>

<div class="module-grid">
${contribCards}
</div>

<h2 id="primers">Primers</h2>
<p>Baseline modules covering the fundamentals of building and shipping with AI.</p>

<div class="phase-section">
  <h3>Phase 1: From Blank Page to "It Runs"</h3>
  <div class="module-grid">
    <div class="module-card"><a href="/curriculum/ai_skills/01_the_ai_stack"><h4>The AI Stack</h4></a></div>
    <div class="module-card"><a href="/curriculum/ai_skills/02_prompt_engineering"><h4>Prompt Engineering</h4></a></div>
    <div class="module-card"><a href="/curriculum/ai_skills/03_agentic_workflow"><h4>Agentic Workflow</h4></a></div>
    <div class="module-card"><a href="/curriculum/ai_skills/04_context_management"><h4>Context Mastery</h4></a></div>
    <div class="module-card"><a href="/curriculum/ai_skills/05_debugging_collaboratively"><h4>AI Debugging</h4></a></div>
  </div>
</div>

<div class="phase-section">
  <h3>Phase 2: What to Build</h3>
  <div class="module-grid">
    <div class="module-card"><a href="/curriculum/01_idea_filter"><h4>Idea Filter</h4></a></div>
    <div class="module-card"><a href="/curriculum/02_mvp_scope"><h4>MVP Scope</h4></a></div>
  </div>
</div>

<div class="phase-section">
  <h3>Phase 3: From "It Runs" to "It Ships"</h3>
  <div class="module-grid">
    <div class="module-card"><a href="/curriculum/03_distribution"><h4>Distribution</h4></a></div>
    <div class="module-card"><a href="/curriculum/04_config_safety"><h4>Config & Safety</h4></a></div>
    <div class="module-card"><a href="/curriculum/05_testing"><h4>Testing</h4></a></div>
    <div class="module-card"><a href="/curriculum/06_versioning"><h4>Versioning</h4></a></div>
    <div class="module-card"><a href="/curriculum/07_support_loop"><h4>Support Loop</h4></a></div>
    <div class="module-card"><a href="/curriculum/08_launch_feedback"><h4>Launch & Roadmap</h4></a></div>
  </div>
</div>

</div>

<style>
.container { max-width: 960px; margin: 0 auto; padding: 2rem 1rem; }
h2 { border-bottom: 1px solid var(--vp-c-divider); padding-bottom: 0.5rem; margin-top: 4rem; margin-bottom: 2rem; }

.phase-section { margin-bottom: 2rem; }
.phase-section h3 { color: var(--vp-c-brand); margin-bottom: 1rem; }

.module-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; }

.module-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  transition: transform 0.2s;
}
.module-card:hover { transform: translateY(-2px); border-color: var(--vp-c-brand); }
.module-card a { display: block; padding: 1.25rem; text-decoration: none !important; color: inherit !important; }
.module-card h4 { margin: 0 0 0.25rem 0; font-weight: 600; }
.module-card p { margin: 0; font-size: 0.85em; opacity: 0.8; }
</style>
`;
}

// --- Main ---

// Ensure learn/ exists
if (!fs.existsSync(LEARN_DIR)) {
  fs.mkdirSync(LEARN_DIR, { recursive: true });
}

// Scan contributors
const contributors = fs.readdirSync(CONTRIBUTORS_DIR)
  .filter(f => {
    const fullPath = path.join(CONTRIBUTORS_DIR, f);
    return fs.lstatSync(fullPath).isDirectory();
  })
  .map(name => {
    const dir = path.join(CONTRIBUTORS_DIR, name);
    const files = readContributorFiles(dir);
    return { name, files, fileCount: files.length };
  })
  .filter(c => c.files.length > 0);

console.log(`Found ${contributors.length} contributors with content.`);

// Generate per-contributor courses
for (const contrib of contributors) {
  const outDir = path.join(LEARN_DIR, contrib.name);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const sections = extractSections(contrib.files.map(f => f.content).join('\n\n'));

  const indexContent = generateCourseIndex(contrib.name, contrib.files, sections);
  const courseContent = generateCourse(contrib.name, contrib.files);
  const cheatsheetContent = generateCheatsheet(contrib.name, contrib.files);

  fs.writeFileSync(path.join(outDir, 'index.md'), indexContent);
  fs.writeFileSync(path.join(outDir, 'course.md'), courseContent);
  fs.writeFileSync(path.join(outDir, 'cheatsheet.md'), cheatsheetContent);

  console.log(`  Generated learn/${contrib.name}/ (${contrib.fileCount} source files)`);
}

// Generate homepage
const homepageContent = generateHomepage(contributors);
fs.writeFileSync(INDEX_FILE, homepageContent);
console.log('Generated index.md');

console.log('Done.');
