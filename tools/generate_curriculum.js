const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CONTRIBUTORS_DIR = path.join(ROOT, 'contributors');
const DOCS_DIR = path.join(ROOT, 'src/content/docs/contributors');
const CONTRIB_INDEX_FILE = path.join(DOCS_DIR, 'index.mdx');

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

function formatName(dirName) {
  return dirName
    .replace(/_/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

function analyzeContributor(files) {
  const allContent = files.map(f => f.content).join('\n\n');
  const lower = allContent.toLowerCase();

  const tools = [];
  if (lower.includes('chatgpt') || lower.includes('gpt-4')) tools.push('ChatGPT');
  if (lower.includes('copilot')) tools.push('Copilot');
  if (lower.includes('deepseek')) tools.push('DeepSeek');
  if (lower.includes('claude')) tools.push('Claude');
  if (lower.includes('cursor')) tools.push('Cursor');
  if (lower.includes('cline')) tools.push('Cline');
  if (lower.includes('vs code')) tools.push('VS Code');

  let style = 'Explorer';
  const chaoticSignals = ['copy paste', 'print(', 'no test'];
  const methodicalSignals = ['spec', 'tdd', 'atomic commit', 'eslint'];
  const chaoticScore = chaoticSignals.filter(s => lower.includes(s)).length;
  const methodicalScore = methodicalSignals.filter(s => lower.includes(s)).length;
  if (chaoticScore > methodicalScore) style = 'Rapid Prototyper';
  else if (methodicalScore > chaoticScore) style = 'Methodical Engineer';

  const phases = [];
  if (lower.includes('spec') || lower.includes('plan')) phases.push('Spec');
  if (lower.includes('code') || lower.includes('build')) phases.push('Build');
  if (lower.includes('test') || lower.includes('verify')) phases.push('Test');
  if (lower.includes('deploy') || lower.includes('release')) phases.push('Ship');

  return { tools, style, phases };
}

// --- Generators ---

function generateCourseIndex(name, files, sections) {
  const displayName = formatName(name);
  const sourceFiles = files.map(f => `- \`${f.name}\``).join('\n');

  return `---
title: "Learn from ${displayName}"
description: "Detailed course from ${displayName}"
---

# Learn from ${displayName}

This course was built from ${displayName}'s raw notes and workflows.

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

  return `---
title: "${displayName}'s Course"
description: "Complete walkthrough"
---

${courseParts.length ? courseParts.join('\n\n---\n\n') : '*Content coming soon.*'}
`;
}

function generateCheatsheet(name, files) {
  const displayName = formatName(name);
  const allContent = files.map(f => f.content).join('\n\n');
  const tips = extractTips(allContent);
  const codeBlocks = extractCodeBlocks(allContent);

  const tipsSection = tips.length ? tips.join('\n') : '*No quick tips extracted.*';
  const codeSection = codeBlocks.length
    ? codeBlocks.map(b => `\`\`\`${b.lang}\n${b.code}\n\`\`\``).join('\n\n')
    : '*No code snippets found.*';

  return `---
title: "${displayName}'s Cheatsheet"
description: "Quick reference"
---

## Key Tips

${tipsSection}

## Code & Commands

${codeSection}
`;
}

function generateStatsCard(contrib) {
  const displayName = formatName(contrib.name);
  return `
  <Card title="${displayName}" icon="open-book">
    **Style:** ${contrib.style}
    
    **Tools:** ${contrib.tools.join(', ') || 'None listed'}
    
    [View Course](/contributors/${contrib.name}/)
  </Card>`;
}

function generateContributorsIndex(contributors) {
  const cards = contributors.map(c => generateStatsCard(c)).join('\n');

  return `---
title: Contributors
description: "Learn from different styles"
---

import { Card, CardGrid } from '@astrojs/starlight/components';

Choose a mentor to learn from. Each contributor has a unique style and toolset.

<CardGrid>
${cards}
</CardGrid>
`;
}

// --- Main ---

// Ensure docs/contributors exists
if (!fs.existsSync(DOCS_DIR)) {
  fs.mkdirSync(DOCS_DIR, { recursive: true });
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

console.log(`Found ${contributors.length} contributors.`);

// Generate per-contributor content
for (const contrib of contributors) {
  const outDir = path.join(DOCS_DIR, contrib.name);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Files
  fs.writeFileSync(path.join(outDir, 'index.mdx'), generateCourseIndex(contrib.name, contrib.files));
  fs.writeFileSync(path.join(outDir, 'course.mdx'), generateCourse(contrib.name, contrib.files));
  fs.writeFileSync(path.join(outDir, 'cheatsheet.mdx'), generateCheatsheet(contrib.name, contrib.files));

  console.log(`Generated docs/contributors/${contrib.name}/`);
}

// Generate Contributors Landing Page
const realContributors = contributors.filter(c => !c.name.startsWith('ai_example'));
const indexContent = generateContributorsIndex(realContributors);
fs.writeFileSync(CONTRIB_INDEX_FILE, indexContent);
console.log('Generated docs/contributors/index.mdx');

console.log('Done.');
