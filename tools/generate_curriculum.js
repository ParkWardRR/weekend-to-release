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

// --- Contributor Analysis ---

function analyzeContributor(files) {
  const allContent = files.map(f => f.content).join('\n\n');
  const lower = allContent.toLowerCase();

  // Detect tools
  const tools = [];
  if (lower.includes('chatgpt') || lower.includes('gpt-4') || lower.includes('gpt4')) tools.push('ChatGPT');
  if (lower.includes('copilot')) tools.push('Copilot');
  if (lower.includes('deepseek')) tools.push('DeepSeek');
  if (lower.includes('claude')) tools.push('Claude');
  if (lower.includes('cursor') || lower.includes('cursorrules')) tools.push('Cursor');
  if (lower.includes('roo cline') || lower.includes('cline')) tools.push('Cline');
  if (lower.includes('vs code') || lower.includes('vscode')) tools.push('VS Code');
  if (lower.includes('jest')) tools.push('Jest');
  if (lower.includes('eslint')) tools.push('ESLint');
  if (lower.includes('prettier')) tools.push('Prettier');
  if (lower.includes('jira')) tools.push('Jira');
  if (lower.includes('python')) tools.push('Python');
  if (lower.includes('npm')) tools.push('npm');
  if (lower.includes('git commit') || lower.includes('atomic commit')) tools.push('Git');

  // Detect style
  let style = 'explorer';
  const chaoticSignals = ['copy paste', 'copy-paste', 'print(', 'print statement', 'never write test', 'no test', 'commit everything'];
  const methodicalSignals = ['spec', 'test-driven', 'tdd', 'red green', 'atomic commit', 'eslint', 'prettier', '.cursorrules', 'npm test'];
  const chaoticScore = chaoticSignals.filter(s => lower.includes(s)).length;
  const methodicalScore = methodicalSignals.filter(s => lower.includes(s)).length;
  if (chaoticScore > methodicalScore) style = 'rapid-prototyper';
  else if (methodicalScore > chaoticScore) style = 'methodical';

  // Detect PDLC phase alignment
  const phases = [];
  const specSignals = ['spec', 'plan', 'requirements', 'jira', 'product brief', 'idea'];
  const buildSignals = ['code', 'function', 'script', 'implement', 'write', 'copilot', 'chatgpt', 'agent'];
  const testSignals = ['test', 'jest', 'npm test', 'verify', 'debug', 'lint', 'eslint'];
  const shipSignals = ['deploy', 'release', 'version', 'changelog', 'publish', 'install', 'package'];
  const supportSignals = ['issue', 'support', 'feedback', 'roadmap', 'bug report'];

  if (specSignals.some(s => lower.includes(s))) phases.push('spec');
  if (buildSignals.some(s => lower.includes(s))) phases.push('build');
  if (testSignals.some(s => lower.includes(s))) phases.push('test');
  if (shipSignals.some(s => lower.includes(s))) phases.push('ship');
  if (supportSignals.some(s => lower.includes(s))) phases.push('support');

  if (phases.length === 0) phases.push('build');

  return { tools, style, phases };
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
  // Build pro cards with tags and phase alignment
  const styleLabels = {
    'rapid-prototyper': 'Rapid Prototyper',
    'methodical': 'Methodical',
    'explorer': 'Explorer'
  };
  const styleColors = {
    'rapid-prototyper': 'tag-orange',
    'methodical': 'tag-green',
    'explorer': 'tag-blue'
  };
  const phaseLabels = {
    'spec': 'Spec',
    'build': 'Build',
    'test': 'Test',
    'ship': 'Ship',
    'support': 'Support'
  };

  const proCards = contributors.map(c => {
    const displayName = formatName(c.name);
    const styleTag = `<span class="tag ${styleColors[c.style] || 'tag-blue'}">${styleLabels[c.style] || c.style}</span>`;
    const toolTags = c.tools.slice(0, 4).map(t => `<span class="tag tag-tool">${t}</span>`).join('');
    const phaseDots = c.phases.map(p => `<span class="phase-dot phase-${p}" title="${phaseLabels[p]}">${phaseLabels[p]}</span>`).join('');
    return `
      <div class="pro-card">
        <a href="/learn/${c.name}/">
          <div class="pro-header">
            <h4>${displayName}</h4>
            ${styleTag}
          </div>
          <div class="pro-phases">${phaseDots}</div>
          <div class="pro-tools">${toolTags}</div>
          <div class="pro-links">
            <a href="/learn/${c.name}/course" class="pro-link">Course</a>
            <a href="/learn/${c.name}/cheatsheet" class="pro-link">Cheatsheet</a>
          </div>
        </a>
      </div>`;
  }).join('\n');

  return `---
layout: home

hero:
  name: Weekend-to-Release
  text: Build and Ship with AI
  tagline: A step-by-step guide to going from a blank page to a public release, using AI agents as your development team.
  actions:
    - theme: brand
      text: Start Learning
      link: /curriculum/ai_skills/01_the_ai_stack
    - theme: alt
      text: Cheatsheet
      link: /cheatsheet

features:
  - icon: "🧠"
    title: "You're the Architect"
    details: AI writes the code. You define the spec, review the output, and make the decisions.
  - icon: "🔄"
    title: "Spec-Build-Test-Ship"
    details: A repeatable loop that turns weekend ideas into real, installable releases.
  - icon: "🚀"
    title: "Ship for Real"
    details: Versioning, install paths, config safety, support loops — the stuff that makes software real.
---

<div class="container">

<h2 id="pdlc">The AI-Led Development Lifecycle</h2>
<p>This is how modern developers build with AI. Each phase has a clear input, a clear output, and you stay in the driver's seat.</p>

\`\`\`mermaid
flowchart LR
  SPEC["Spec\\n---\\nDefine what to build"]
  BUILD["Build\\n---\\nAI writes, you review"]
  TEST["Test\\n---\\nVerify it works"]
  SHIP["Ship\\n---\\nPackage & release"]
  SUPPORT["Support\\n---\\nFeedback & iterate"]

  SPEC --> BUILD --> TEST --> SHIP --> SUPPORT
  SUPPORT -.->|"next cycle"| SPEC

  style SPEC fill:#e8f4fd,stroke:#4a9eca,color:#1a1a1a
  style BUILD fill:#fff3e0,stroke:#e6a23c,color:#1a1a1a
  style TEST fill:#e8f5e9,stroke:#67c23a,color:#1a1a1a
  style SHIP fill:#f3e5f5,stroke:#9c27b0,color:#1a1a1a
  style SUPPORT fill:#fce4ec,stroke:#f56c6c,color:#1a1a1a
\`\`\`

---

<h2 id="phases">Your Learning Path</h2>

<div class="phase-block phase-spec">
  <div class="phase-label">Phase 1</div>
  <h3>Spec — Define What to Build</h3>
  <p>Before writing a single line of code, learn to write prompts that actually work. You're the PM now — AI is your senior engineer.</p>

\`\`\`mermaid
flowchart TD
  A["Weekend Idea"] --> B{"Can a stranger\\ninstall it?"}
  B -- No --> C["Cut scope"]
  B -- Yes --> D{"Does it solve\\none problem?"}
  D -- No --> E["Pick the core problem"]
  D -- Yes --> F["Write the Spec"]
  F --> G["Hand it to AI"]
  C --> D

  style F fill:#e8f4fd,stroke:#4a9eca,color:#1a1a1a
  style G fill:#e8f4fd,stroke:#4a9eca,color:#1a1a1a
\`\`\`

  <div class="module-grid">
    <div class="module-card"><a href="/curriculum/ai_skills/01_the_ai_stack"><h4>The AI Stack</h4><span class="tag tag-tool">Setup</span></a></div>
    <div class="module-card"><a href="/curriculum/ai_skills/02_prompt_engineering"><h4>Prompt Engineering</h4><span class="tag tag-tool">Prompts</span></a></div>
    <div class="module-card"><a href="/curriculum/01_idea_filter"><h4>Idea Filter</h4><span class="tag tag-tool">Scoping</span></a></div>
    <div class="module-card"><a href="/curriculum/02_mvp_scope"><h4>MVP Scope</h4><span class="tag tag-tool">Planning</span></a></div>
  </div>
</div>

<div class="phase-block phase-build">
  <div class="phase-label">Phase 2</div>
  <h3>Build — AI Writes, You Review</h3>
  <p>The Spec-Agent-Review loop. AI generates code in focused chunks, you review and steer. Context management keeps things on track.</p>

\`\`\`mermaid
flowchart LR
  S["Spec / Prompt"] --> A["AI Agent\\nwrites code"]
  A --> R{"You Review"}
  R -- "Looks good" --> M["Merge it"]
  R -- "Needs work" --> S
  M --> N["Next chunk"]
  N --> S

  style S fill:#fff3e0,stroke:#e6a23c,color:#1a1a1a
  style A fill:#fff3e0,stroke:#e6a23c,color:#1a1a1a
  style M fill:#e8f5e9,stroke:#67c23a,color:#1a1a1a
\`\`\`

  <div class="module-grid">
    <div class="module-card"><a href="/curriculum/ai_skills/03_agentic_workflow"><h4>Agentic Workflow</h4><span class="tag tag-tool">Workflow</span></a></div>
    <div class="module-card"><a href="/curriculum/ai_skills/04_context_management"><h4>Context Mastery</h4><span class="tag tag-tool">Context</span></a></div>
    <div class="module-card"><a href="/curriculum/ai_skills/05_debugging_collaboratively"><h4>AI Debugging</h4><span class="tag tag-tool">Debugging</span></a></div>
  </div>
</div>

<div class="phase-block phase-test">
  <div class="phase-label">Phase 3</div>
  <h3>Test — Verify It Actually Works</h3>
  <p>You don't need a massive test suite. A smoke test, a config check, and a clean install path go a long way.</p>

\`\`\`mermaid
flowchart TD
  A["Feature done"] --> B["Run smoke test"]
  B --> C{"Pass?"}
  C -- No --> D["Read logs,\\nfeed to AI"]
  D --> E["AI fixes it"]
  E --> B
  C -- Yes --> F["Config safe?"]
  F --> G{"Secrets\\nexposed?"}
  G -- Yes --> H["Fix .env"]
  G -- No --> I["Ready to ship"]

  style I fill:#e8f5e9,stroke:#67c23a,color:#1a1a1a
  style D fill:#fce4ec,stroke:#f56c6c,color:#1a1a1a
\`\`\`

  <div class="module-grid">
    <div class="module-card"><a href="/curriculum/05_testing"><h4>Testing Strategy</h4><span class="tag tag-tool">Testing</span></a></div>
    <div class="module-card"><a href="/curriculum/04_config_safety"><h4>Config & Safety</h4><span class="tag tag-tool">Security</span></a></div>
  </div>
</div>

<div class="phase-block phase-ship">
  <div class="phase-label">Phase 4</div>
  <h3>Ship — Package and Release</h3>
  <p>Tag a version, write release notes, make sure a stranger can install it. This is where "it works on my machine" becomes "it works on yours."</p>

\`\`\`mermaid
flowchart LR
  A["Code ready"] --> B["Write INSTALL.md"]
  B --> C["Tag version\\nv1.0.0"]
  C --> D["Write changelog"]
  D --> E["Test on clean\\nmachine"]
  E --> F{"Installs\\ncleanly?"}
  F -- No --> B
  F -- Yes --> G["Publish release"]

  style G fill:#f3e5f5,stroke:#9c27b0,color:#1a1a1a
\`\`\`

  <div class="module-grid">
    <div class="module-card"><a href="/curriculum/03_distribution"><h4>Distribution</h4><span class="tag tag-tool">Install</span></a></div>
    <div class="module-card"><a href="/curriculum/06_versioning"><h4>Versioning</h4><span class="tag tag-tool">Releases</span></a></div>
  </div>
</div>

<div class="phase-block phase-support">
  <div class="phase-label">Phase 5</div>
  <h3>Support — Feedback and Iterate</h3>
  <p>Shipping isn't the end. Set up issue templates, define what you will and won't support, and feed user feedback into the next cycle.</p>

  <div class="module-grid">
    <div class="module-card"><a href="/curriculum/07_support_loop"><h4>Support Loop</h4><span class="tag tag-tool">Issues</span></a></div>
    <div class="module-card"><a href="/curriculum/08_launch_feedback"><h4>Launch & Roadmap</h4><span class="tag tag-tool">Iterate</span></a></div>
  </div>
</div>

---

<h2 id="pros">Learn from Real Developers</h2>
<p>See how experienced developers actually work — their tools, their style, and which phases they've mastered. Learn from what they do right (and wrong).</p>

\`\`\`mermaid
flowchart LR
  subgraph PDLC["Development Lifecycle"]
    direction LR
    S["Spec"] --> B["Build"] --> T["Test"] --> H["Ship"] --> U["Support"]
  end

  style S fill:#e8f4fd,stroke:#4a9eca,color:#1a1a1a
  style B fill:#fff3e0,stroke:#e6a23c,color:#1a1a1a
  style T fill:#e8f5e9,stroke:#67c23a,color:#1a1a1a
  style H fill:#f3e5f5,stroke:#9c27b0,color:#1a1a1a
  style U fill:#fce4ec,stroke:#f56c6c,color:#1a1a1a
\`\`\`

<div class="pro-grid">
${proCards}
</div>

</div>

<style>
.container { max-width: 960px; margin: 0 auto; padding: 2rem 1rem; }
h2 { border-bottom: 1px solid var(--vp-c-divider); padding-bottom: 0.5rem; margin-top: 4rem; margin-bottom: 1.5rem; }

/* Tags */
.tag { display: inline-block; font-size: 0.72em; padding: 2px 8px; border-radius: 12px; font-weight: 500; }
.tag-tool { background: var(--vp-c-bg-mute); color: var(--vp-c-text-2); }
.tag-green { background: #e8f5e9; color: #2e7d32; }
.tag-orange { background: #fff3e0; color: #e65100; }
.tag-blue { background: #e3f2fd; color: #1565c0; }

/* Phase blocks */
.phase-block { margin-bottom: 3rem; padding: 1.5rem; border-radius: 12px; border: 1px solid var(--vp-c-divider); position: relative; }
.phase-block h3 { margin-top: 0.5rem; }
.phase-label { display: inline-block; font-size: 0.7em; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; padding: 2px 10px; border-radius: 12px; margin-bottom: 0.25rem; }
.phase-spec { border-left: 4px solid #4a9eca; }
.phase-spec .phase-label { background: #e8f4fd; color: #4a9eca; }
.phase-build { border-left: 4px solid #e6a23c; }
.phase-build .phase-label { background: #fff3e0; color: #e6a23c; }
.phase-test { border-left: 4px solid #67c23a; }
.phase-test .phase-label { background: #e8f5e9; color: #67c23a; }
.phase-ship { border-left: 4px solid #9c27b0; }
.phase-ship .phase-label { background: #f3e5f5; color: #9c27b0; }
.phase-support { border-left: 4px solid #f56c6c; }
.phase-support .phase-label { background: #fce4ec; color: #f56c6c; }

/* Module grid */
.module-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 0.75rem; margin-top: 1rem; }
.module-card { border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft); transition: transform 0.2s, border-color 0.2s; }
.module-card:hover { transform: translateY(-2px); border-color: var(--vp-c-brand); }
.module-card a { display: block; padding: 1rem; text-decoration: none !important; color: inherit !important; }
.module-card h4 { margin: 0 0 0.4rem 0; font-weight: 600; font-size: 0.95em; }

/* Pro grid */
.pro-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1rem; margin-top: 1.5rem; }
.pro-card { border: 1px solid var(--vp-c-divider); border-radius: 10px; background: var(--vp-c-bg-soft); transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s; overflow: hidden; }
.pro-card:hover { transform: translateY(-3px); border-color: var(--vp-c-brand); box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
.pro-card > a { display: block; padding: 1.25rem; text-decoration: none !important; color: inherit !important; }
.pro-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; }
.pro-header h4 { margin: 0; font-size: 1.05em; font-weight: 700; }
.pro-phases { display: flex; gap: 0.35rem; margin-bottom: 0.6rem; flex-wrap: wrap; }
.phase-dot { font-size: 0.65em; padding: 2px 8px; border-radius: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
.phase-spec { background: #e8f4fd; color: #4a9eca; }
.phase-build { background: #fff3e0; color: #e6a23c; }
.phase-test { background: #e8f5e9; color: #2e7d32; }
.phase-ship { background: #f3e5f5; color: #9c27b0; }
.phase-support { background: #fce4ec; color: #c62828; }
.pro-tools { display: flex; gap: 0.35rem; flex-wrap: wrap; margin-bottom: 0.75rem; }
.pro-links { display: flex; gap: 0.75rem; border-top: 1px solid var(--vp-c-divider); padding-top: 0.75rem; margin-top: 0.25rem; }
.pro-link { font-size: 0.82em; font-weight: 600; color: var(--vp-c-brand) !important; text-decoration: none !important; }
.pro-link:hover { text-decoration: underline !important; }

@media (max-width: 640px) {
  .module-grid { grid-template-columns: 1fr; }
  .pro-grid { grid-template-columns: 1fr; }
}
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
    const analysis = analyzeContributor(files);
    return { name, files, fileCount: files.length, ...analysis };
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
