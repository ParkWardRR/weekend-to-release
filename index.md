---
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


    <div class="phase-section">
      <h3>Phase 1: From Blank Page to "It Runs"</h3>
      <div class="module-grid">
      <div class="module-card">
        <a href="/curriculum/ai_skills/01_the_ai_stack">
            <h4>The AI Stack</h4>
            <div class="tags"><span class="tag">setup</span><span class="tag">tools</span></div>
        </a>
      </div>
    
      <div class="module-card">
        <a href="/curriculum/ai_skills/02_prompt_engineering">
            <h4>The Perfect Spec</h4>
            <div class="tags"><span class="tag">planning</span><span class="tag">specs</span></div>
        </a>
      </div>
    
      <div class="module-card">
        <a href="/curriculum/ai_skills/03_agentic_workflow">
            <h4>The Build Loop</h4>
            <div class="tags"><span class="tag">coding</span><span class="tag">workflow</span></div>
        </a>
      </div>
    
      <div class="module-card">
        <a href="/curriculum/ai_skills/04_context_management">
            <h4>Context Mastery</h4>
            <div class="tags"><span class="tag">coding</span><span class="tag">context</span></div>
        </a>
      </div>
    
      <div class="module-card">
        <a href="/curriculum/ai_skills/05_debugging_collaboratively">
            <h4>AI Debugging</h4>
            <div class="tags"><span class="tag">debugging</span><span class="tag">testing</span></div>
        </a>
      </div>
    </div>
    </div>

    <div class="phase-section">
      <h3>Phase 2: What to Build</h3>
      <div class="module-grid">
      <div class="module-card">
        <a href="/curriculum/01_idea_filter">
            <h4>The Idea Filter</h4>
            <div class="tags"><span class="tag">planning</span><span class="tag">idea</span></div>
        </a>
      </div>
    
      <div class="module-card">
        <a href="/curriculum/02_mvp_scope">
            <h4>The MVP Scope</h4>
            <div class="tags"><span class="tag">planning</span><span class="tag">scope</span></div>
        </a>
      </div>
    </div>
    </div>

    <div class="phase-section">
      <h3>Phase 3: From "It Runs" to "It Ships"</h3>
      <div class="module-grid">
      <div class="module-card">
        <a href="/curriculum/03_distribution">
            <h4>Distribution & Install</h4>
            <div class="tags"><span class="tag">deployment</span><span class="tag">shipping</span></div>
        </a>
      </div>
    
      <div class="module-card">
        <a href="/curriculum/04_config_safety">
            <h4>Config & Safety</h4>
            <div class="tags"><span class="tag">security</span><span class="tag">config</span></div>
        </a>
      </div>
    
      <div class="module-card">
        <a href="/curriculum/05_testing">
            <h4>Testing Strategy</h4>
            <div class="tags"><span class="tag">testing</span><span class="tag">qa</span></div>
        </a>
      </div>
    
      <div class="module-card">
        <a href="/curriculum/06_versioning">
            <h4>Versioning & Upgrades</h4>
            <div class="tags"><span class="tag">deployment</span><span class="tag">versioning</span></div>
        </a>
      </div>
    
      <div class="module-card">
        <a href="/curriculum/07_support_loop">
            <h4>Support Loop</h4>
            <div class="tags"><span class="tag">maintenance</span><span class="tag">support</span></div>
        </a>
      </div>
    
      <div class="module-card">
        <a href="/curriculum/08_launch_feedback">
            <h4>Launch & Roadmap</h4>
            <div class="tags"><span class="tag">shipping</span><span class="tag">launch</span></div>
        </a>
      </div>
    </div>
    </div>

<h2 id="human-devs">👤 Human Developers (Criteria Packages)</h2>
<p>See how real developers customized their learning path based on their chaos.</p>

<ul>
<li><a href="/curriculum/user_ai_example_1.md"><strong>@ai_example_1</strong></a> (4 modules recommended)</li><li><a href="/curriculum/user_ai_example_2.md"><strong>@ai_example_2</strong></a> (0 modules recommended)</li><li><a href="/curriculum/user_alex.md"><strong>@alex</strong></a> (4 modules recommended)</li><li><a href="/curriculum/user_antigravity.md"><strong>@antigravity</strong></a> (0 modules recommended)</li><li><a href="/curriculum/user_claire.md"><strong>@claire</strong></a> (0 modules recommended)</li>
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
