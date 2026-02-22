import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';

export default defineConfig({
    output: 'static',
    site: 'https://parkwardrr.github.io',
    base: '/weekend-to-release',
    integrations: [
        starlight({
            title: 'Weekend-to-Release',
            description: 'Learn Specification-Driven Development with GitHub Spec Kit',
            favicon: '/favicon.png',
            defaultLocale: 'root',
            locales: {
                root: {
                    label: 'English',
                    lang: 'en'
                }
            },
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/ParkWardRR/weekend-to-release' },
            ],
            customCss: [
                './src/styles/custom.css',
            ],
            sidebar: [
                {
                    label: 'Foundations',
                    items: [
                        { label: 'What is SDD?', slug: 'guide/what-is-sdd' },
                        { label: 'Getting Started', slug: 'guide/getting-started' },
                        { label: 'Your Constitution', slug: 'guide/constitution' },
                    ],
                },
                {
                    label: '1. Specify',
                    items: [
                        { label: 'Overview', slug: 'specify' },
                        { label: 'User Stories', slug: 'specify/user-stories' },
                        { label: 'Requirements', slug: 'specify/requirements' },
                        { label: 'Success Criteria', slug: 'specify/success-criteria' },
                        { label: 'Clarify Ambiguities', slug: 'specify/clarify' },
                    ],
                },
                {
                    label: '2. Plan',
                    items: [
                        { label: 'Overview', slug: 'plan' },
                        { label: 'Technical Context', slug: 'plan/technical-context' },
                        { label: 'Phase Gates', slug: 'plan/phase-gates' },
                        { label: 'Project Structure', slug: 'plan/project-structure' },
                    ],
                },
                {
                    label: '3. Tasks',
                    items: [
                        { label: 'Overview', slug: 'tasks' },
                        { label: 'Phased Task Lists', slug: 'tasks/phased-tasks' },
                        { label: 'Parallel Markers', slug: 'tasks/parallel-markers' },
                        { label: 'Consistency Analysis', slug: 'tasks/analyze' },
                    ],
                },
                {
                    label: '4. Implement',
                    items: [
                        { label: 'Overview', slug: 'implement' },
                        { label: 'Agent Workflow', slug: 'implement/agent-workflow' },
                        { label: 'Agent Guidance File', slug: 'implement/agent-file' },
                    ],
                },
                {
                    label: 'Templates',
                    collapsed: true,
                    items: [
                        { label: 'All Templates', slug: 'templates' },
                        { label: 'Spec Template', slug: 'templates/spec-template' },
                        { label: 'Plan Template', slug: 'templates/plan-template' },
                        { label: 'Tasks Template', slug: 'templates/tasks-template' },
                        { label: 'Constitution Template', slug: 'templates/constitution-template' },
                        { label: 'Checklist Template', slug: 'templates/checklist-template' },
                        { label: 'Agent File Template', slug: 'templates/agent-file-template' },
                    ],
                },
                {
                    label: 'Walkthrough',
                    collapsed: true,
                    items: [
                        { label: 'Example Project', slug: 'walkthrough' },
                        { label: 'Step 1: Specify', slug: 'walkthrough/example-specify' },
                        { label: 'Step 2: Plan', slug: 'walkthrough/example-plan' },
                        { label: 'Step 3: Tasks', slug: 'walkthrough/example-tasks' },
                        { label: 'Step 4: Implement', slug: 'walkthrough/example-implement' },
                    ],
                },
                {
                    label: 'SDD Principles',
                    collapsed: true,
                    items: [
                        { label: 'The 9 Articles', slug: 'principles' },
                        { label: 'Library-First', slug: 'principles/library-first' },
                        { label: 'Test-First', slug: 'principles/test-first' },
                        { label: 'Simplicity', slug: 'principles/simplicity' },
                    ],
                },
            ],
            plugins: [
                starlightImageZoom(),
            ],
        }),
    ],
});
