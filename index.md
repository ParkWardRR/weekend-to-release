---
layout: doc
title: Dashboard
aside: false
---

# Your AI Dashboard

<div class="dashboard-header">
    <div class="stat">
        <span class="label">Maturity Score</span>
        <span class="value developing">Developing</span>
    </div>
    <div class="stat">
        <span class="label">Iterations</span>
        <span class="value">2</span>
    </div>
    <div class="stat">
        <span class="label">Last Update</span>
        <span class="value small">2/10/2026, 6:40:40 PM</span>
    </div>
</div>

::: tip
This dashboard is dynamically generated from **`journey/workflow.md`**. Edit that file to update your analysis.
:::

## 🔍 Visualizing Your Workflow

<div class="comparison-grid">
    <div class="col messy">
        <h3>Your Raw Context</h3>
        <div class="content markdown-body">

# My Chaotic Coding Style

I usually start by asking **ChatGPT** to write me a python script to pull data from an API. 

I copy paste it into **VS Code**. If it doesn't work, I copy the error message back to ChatGPT and ask it to fix it. I keep doing this until it works. 

Sometimes I use **GitHub Copilot** to help me write functions. 

I don't really use version control until the end when I just commit everything. 

I debug with print statements. I never write tests first.

        </div>
        <a href="/journey/workflow.md" class="edit-link">✏️ Edit Context</a>
    </div>
    <div class="col clean">
        <h3>The Optimized Pipeline</h3>
        <div class="content">
            <h4>Detected Stack</h4>
            <ul>
                <li>ChatGPT</li><li>GitHub Copilot</li>
            </ul>
             <h4>Critical Upgrades Needed</h4>
            <div class="cards-container">
                
    <div class="card suggestion">
        <div class="icon">⚠️</div>
        <div class="details">
            <h4>Missing Specs</h4>
            <p>You jump straight to code. Agents hallucinate less when you give them a roadmap first.</p>
            <a href="/curriculum/ai_skills/02_prompt_engineering">Fix this →</a>
        </div>
    </div>
    
    <div class="card suggestion">
        <div class="icon">⚠️</div>
        <div class="details">
            <h4>The Copy-Paste Loop</h4>
            <p>Stop pasting errors manually. Use a terminal-integrated agent or CLI tool.</p>
            <a href="/curriculum/ai_skills/05_debugging_collaboratively">Fix this →</a>
        </div>
    </div>
    
            </div>
        </div>
        <a href="/journey/my_cheatsheet.md" class="action-btn">View Full Cheatsheet →</a>
        <a href="/curriculum/ai_skills/01_the_ai_stack" class="action-btn secondary">Start Course →</a>

    </div>
</div>

