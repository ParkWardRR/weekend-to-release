const fs = require('fs');
const path = require('path');

// --- Paths ---
const ROOT = path.join(__dirname, '..');
const JOURNEY_DIR = path.join(ROOT, 'journey');
const WORKFLOW_FILE = path.join(JOURNEY_DIR, 'workflow.md');
const CHEATSHEET_FILE = path.join(JOURNEY_DIR, 'my_cheatsheet.md');
const HISTORY_FILE = path.join(JOURNEY_DIR, 'history.json');
const DASHBOARD_FILE = path.join(ROOT, 'index.md'); // Overwrites the root landing page

// --- Helpers: Reading/Writing ---
const ensureFile = (file, defaultContent) => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, defaultContent);
    return defaultContent;
  }
  return fs.readFileSync(file, 'utf8');
};

const writeJSON = (file, data) => fs.writeFileSync(file, JSON.stringify(data, null, 2));

// --- Core Logic ---

// 1. Load User's "Messy Context" (was Messy User Story)
let workflowRaw = ensureFile(WORKFLOW_FILE,
  `---
title: My Raw Context
---

# The Brain Dump

Describe exactly how you currently work. Be honest. Be messy.

I usually...
`);

// 2. Simulate Analysis (mock LLM)
const analysis = analyzeContext(workflowRaw);

// 3. Update Historical Context
let history = [];
try {
  history = JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf8'));
} catch (e) {
  history = [];
}

const timestamp = new Date().toISOString();
const lastEntry = history.length > 0 ? history[history.length - 1] : null;

if (!lastEntry || lastEntry.raw !== workflowRaw) {
  history.push({
    timestamp,
    raw: workflowRaw,
    processed: analysis
  });
  writeJSON(HISTORY_FILE, history);
  console.log('✅ History updated.');
} else {
  console.log('ℹ️ No context changes detected.');
}

// 4. Generate the Cheatsheet (Reference)
fs.writeFileSync(CHEATSHEET_FILE, analysis.cheatsheetContent);
console.log('✅ Generated journey/my_cheatsheet.md');

// 5. OVERHAUL: Generate the Dynamic Dashboard (index.md)
const dashboardContent = generateDashboard(workflowRaw, analysis, history);
fs.writeFileSync(DASHBOARD_FILE, dashboardContent);
console.log('✅ OVERHAULED index.md (The Dashboard)');


// --- Analysis Engine (Mock) ---

function analyzeContext(raw) {
  const lower = raw.toLowerCase();
  const tools = [];
  if (lower.includes('chatgpt')) tools.push('ChatGPT');
  if (lower.includes('copilot')) tools.push('GitHub Copilot');
  if (lower.includes('cursor')) tools.push('Cursor');
  if (lower.includes('vscode')) tools.push('VS Code');

  // Determine Maturity Level
  let maturity = "Chaos";
  if (lower.includes('test')) maturity = "Developing";
  if (lower.includes('ci/cd') || lower.includes('github actions')) maturity = "Professional";

  // Generate Recommendations
  const recs = [];
  if (!lower.includes('spec') && !lower.includes('requirements')) {
    recs.push({
      title: "Missing Specs",
      desc: "You jump straight to code. Agents hallucinate less when you give them a roadmap first.",
      link: "/curriculum/ai_skills/02_prompt_engineering"
    });
  }
  if (lower.includes('paste error') || lower.includes('copy paste')) {
    recs.push({
      title: "The Copy-Paste Loop",
      desc: "Stop pasting errors manually. Use a terminal-integrated agent or CLI tool.",
      link: "/curriculum/ai_skills/05_debugging_collaboratively"
    });
  }

  return {
    tools,
    maturity,
    recommendations: recs,
    cheatsheetContent: `---
title: Your Personalized Pipeline
---
# 🚀 Your Pipeline

Based on your input, here is the structured version of your workflow.

## Tools Detected
${tools.map(t => `- ${t}`).join('\n')}

## Recommended Flow
1. **Spec**: Write a \`spec.md\` first.
2. **Build**: Use ${tools[0] || 'AI'} to generate code against the spec.
3. **Verify**: Run tests tailored to the spec.
`
  };
}

// --- Dashboard Generator ---

function generateDashboard(raw, analysis, history) {
  // Strip frontmatter
  const cleanRaw = raw.replace(/^---[\s\S]*?---\n/, '').trim();

  // Recommendations HTML
  const cards = analysis.recommendations.map(rec => `
    <div class="card suggestion">
        <div class="icon">⚠️</div>
        <div class="details">
            <h4>${rec.title}</h4>
            <p>${rec.desc}</p>
            <a href="${rec.link}">Fix this →</a>
        </div>
    </div>
    `).join('');

  const latestUpdate = new Date(history[history.length - 1].timestamp).toLocaleString();

  return `---
layout: doc
title: Dashboard
aside: false
---

# Your AI Dashboard

<div class="dashboard-header">
    <div class="stat">
        <span class="label">Maturity Score</span>
        <span class="value ${analysis.maturity.toLowerCase()}">${analysis.maturity}</span>
    </div>
    <div class="stat">
        <span class="label">Iterations</span>
        <span class="value">${history.length}</span>
    </div>
    <div class="stat">
        <span class="label">Last Update</span>
        <span class="value small">${latestUpdate}</span>
    </div>
</div>

::: tip
This dashboard is dynamically generated from **\`journey/workflow.md\`**. Edit that file to update your analysis.
:::

## 🔍 Visualizing Your Workflow

<div class="comparison-grid">
    <div class="col messy">
        <h3>Your Raw Context</h3>
        <div class="content markdown-body">

${cleanRaw}

        </div>
        <a href="/journey/workflow.md" class="edit-link">✏️ Edit Context</a>
    </div>
    <div class="col clean">
        <h3>The Optimized Pipeline</h3>
        <div class="content">
            <h4>Detected Stack</h4>
            <ul>
                ${analysis.tools.map(t => `<li>${t}</li>`).join('')}
            </ul>
             <h4>Critical Upgrades Needed</h4>
            <div class="cards-container">
                ${cards}
            </div>
        </div>
        <a href="/journey/my_cheatsheet.md" class="action-btn">View Full Cheatsheet →</a>
        <a href="/curriculum/ai_skills/01_the_ai_stack" class="action-btn secondary">Start Course →</a>

    </div>
</div>

`;
}
