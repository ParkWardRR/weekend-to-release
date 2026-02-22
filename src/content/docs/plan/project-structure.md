---
title: Project Structure
description: Choose the right project layout for your implementation.
---

The plan defines two trees: a documentation tree (charter artifacts) and a source tree (code).

## Documentation Tree

Every feature generates this structure:

```
charters/N-feature-name/
  charter.md          # The charter
  plan.md          # Implementation plan
  research.md      # Phase 0 decisions
  data-model.md    # Entity definitions
  contracts/       # API contracts
  quickstart.md    # Key test scenarios
  tasks.md         # Task breakdown
```

## Source Tree Options

Auro supports three layouts. Pick the one that matches your project.

### Single Project

For CLIs, libraries, and simple apps:

```
src/
  models/      # Data structures
  services/    # Business logic
  cli/         # Command-line interface
  lib/         # Shared utilities
tests/
  integration/ # Integration tests
  unit/        # Unit tests
```

### Web Application

For frontend + backend:

```
backend/
  src/
    routes/    # API endpoints
    models/    # Database models
    services/  # Business logic
frontend/
  src/
    pages/     # Route components
    components/# Shared UI
    api/       # Backend client
```

### Mobile + API

For platform-tailored clients:

```
api/
  src/         # Shared API server
ios/
  Sources/     # Swift code
android/
  src/         # Kotlin code
```

## When to Use Which

- Building a CLI tool? **Single project.**
- Building a web app? **Web application** if frontend and backend are separate concerns, **single project** if it is a simple server-rendered app.
- Building for multiple platforms? **Mobile + API.**

The Simplicity Gate (Article VII) limits you to 3 projects maximum. If your structure has more, simplify.
