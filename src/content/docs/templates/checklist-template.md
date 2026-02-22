---
title: Checklist Template
description: The meta-template for generating feature-specific validation checklists.
---

The checklist template is a framework for creating feature-specific validation checklists. Run `/auro.checklist` to generate one for your current feature.

## Structure

```markdown
# Checklist: [TYPE] - [FEATURE_NAME]
Purpose: [Brief description]
Created: [DATE]
Feature: charters/[N]-[name]/charter.md

## [Category 1]
- [ ] CHK001: [Validation item]
- [ ] CHK002: [Validation item]

## [Category 2]
- [ ] CHK003: [Validation item]
- [ ] CHK004: [Validation item]
```

## How It Works

The checklist is auto-generated from your charter, plan, and tasks. It extracts testable assertions and organizes them by category. Categories depend on your feature -- a database feature gets data integrity checks, a UI feature gets accessibility checks.

Mark items complete as you verify them: `[x] CHK001`. Add inline comments for context.

This is a validation tool, not a to-do list. Use it before marking a feature as done to ensure nothing was missed.
