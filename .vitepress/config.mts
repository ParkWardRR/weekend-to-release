
import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Weekend-to-Release",
    description: "The Definitive Guide to Building with AI Agents & Shipping Like a Pro",
    base: "/weekend-to-release/", // Set base to /weekend-to-release/ if deploying to GitHub Pages or similar
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Cheatsheet', link: '/CHEATSHEET' },
            { text: 'Curriculum', link: '/curriculum/ai_skills/01_the_ai_stack' },
        ],

        sidebar: {
            '/': [
                {
                    text: 'Phase 1: From Blank Page to "It Runs"',
                    items: [
                        { text: 'Overview', link: '/curriculum/ai_skills/01_the_ai_stack' },
                        { text: 'Prompt Engineering', link: '/curriculum/ai_skills/02_prompt_engineering' },
                        { text: 'Agentic Workflow', link: '/curriculum/ai_skills/03_agentic_workflow' },
                        { text: 'Context Mastery', link: '/curriculum/ai_skills/04_context_management' },
                        { text: 'Debugging Collaboratively', link: '/curriculum/ai_skills/05_debugging_collaboratively' },
                    ]
                },
                {
                    text: 'Phase 2: The Logic (What to Build)',
                    items: [
                        { text: 'Idea Filter', link: '/curriculum/01_idea_filter' },
                        { text: 'MVP Scope', link: '/curriculum/02_mvp_scope' },
                    ]
                },
                {
                    text: 'Phase 3: From "It Runs" to "It Ships"',
                    items: [
                        { text: 'Distribution', link: '/curriculum/03_distribution' },
                        { text: 'Config & Safety', link: '/curriculum/04_config_safety' },
                        { text: 'Testing Strategy', link: '/curriculum/05_testing' },
                        { text: 'Versioning', link: '/curriculum/06_versioning' },
                        { text: 'Support Loop', link: '/curriculum/07_support_loop' },
                        { text: 'Launch Roadmap', link: '/curriculum/08_launch_feedback' },
                    ]
                }
            ]
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/ParkWardRR/weekend-to-release' }
        ],

        footer: {
            message: 'Released under the Blue Oak Model License 1.0.0.',
            copyright: 'Copyright © 2024-present Twesh'
        }
    },
    rewrites: {
        'README.md': 'index.md', // Use README.md as the homepage
        'CHEATSHEET.md': 'cheatsheet.md',
        'curriculum/:path*': 'curriculum/:path*'
    },
    ignoreDeadLinks: true
})
