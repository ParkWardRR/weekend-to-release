---
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

      <div class="module-card">
        <a href="/courses/ai_example_1/">
          <h4>Ai Example 1</h4>
          <p>1 note &middot; <a href="/courses/ai_example_1/course">Course</a> &middot; <a href="/courses/ai_example_1/cheatsheet">Cheatsheet</a></p>
        </a>
      </div>

      <div class="module-card">
        <a href="/courses/ai_example_2/">
          <h4>Ai Example 2</h4>
          <p>1 note &middot; <a href="/courses/ai_example_2/course">Course</a> &middot; <a href="/courses/ai_example_2/cheatsheet">Cheatsheet</a></p>
        </a>
      </div>

      <div class="module-card">
        <a href="/courses/alex/">
          <h4>Alex</h4>
          <p>1 note &middot; <a href="/courses/alex/course">Course</a> &middot; <a href="/courses/alex/cheatsheet">Cheatsheet</a></p>
        </a>
      </div>

      <div class="module-card">
        <a href="/courses/antigravity/">
          <h4>Antigravity</h4>
          <p>1 note &middot; <a href="/courses/antigravity/course">Course</a> &middot; <a href="/courses/antigravity/cheatsheet">Cheatsheet</a></p>
        </a>
      </div>

      <div class="module-card">
        <a href="/courses/claire/">
          <h4>Claire</h4>
          <p>1 note &middot; <a href="/courses/claire/course">Course</a> &middot; <a href="/courses/claire/cheatsheet">Cheatsheet</a></p>
        </a>
      </div>
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
