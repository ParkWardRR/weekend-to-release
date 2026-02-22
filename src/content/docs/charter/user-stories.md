---
title: User Stories
description: Write prioritized user stories with acceptance criteria.
---

User stories define what users can do with your software. In ACE, every story is prioritized, independently testable, and has explicit acceptance criteria.

## Priority Levels

| Priority | Meaning | Rule |
|----------|---------|------|
| **P1** | Must have | Core functionality. Ship is blocked without it. |
| **P2** | Should have | Important but not blocking. Can ship without it. |
| **P3** | Nice to have | Enhances the product. Implement if time allows. |

## Story Format

Each story includes:

- **Title** -- Brief, action-oriented
- **Description** -- Plain-language explanation of what the user does
- **Priority justification** -- Why this priority level
- **Independent test** -- How to verify this story works in isolation
- **Acceptance scenarios** -- Given/When/Then format

## Example: Task Manager App

### P1: Create and View Tasks

> As a user, I can create a task with a title and see it in my task list.

**Priority:** P1 -- Without this, the app has no purpose.

**Acceptance:**
- Given I am on the task list page
- When I enter "Buy groceries" and click Add
- Then "Buy groceries" appears in my task list

### P2: Mark Tasks Complete

> As a user, I can mark a task as complete and see it visually distinguished.

**Priority:** P2 -- Important UX but the app works without it.

**Acceptance:**
- Given I have a task "Buy groceries"
- When I click the complete button
- Then the task shows a strikethrough style

### P3: Due Dates

> As a user, I can set a due date on a task and see overdue tasks highlighted.

**Priority:** P3 -- Nice to have, not core functionality.

## The Independence Rule

Each story should be an independently shippable MVP slice. If you implement only P1 stories, you should have a working product. P2 stories enhance it. P3 stories polish it.

This matters because AI agents work best on small, well-defined pieces. A story that depends on three other stories is too big.
