---
title: "End-to-End: Xcode"
description: Production-style runbook for delivering an Apple-platform feature with ACE and Xcode.
---

This guide focuses on a reliable sequence and marks unknowns explicitly with `[RESEARCH REQUIRED]`.

## Scope

- Platform: iOS/macOS via Xcode
- Method: ACE workflow for framing and delivery
- Outcome: tested build artifact with release traceability

## Preflight

1. Confirm Xcode and toolchain:

```bash
xcodebuild -version
swift --version
```

2. Confirm project coordinates:
- Project/workspace path: `<RESEARCH REQUIRED>`
- Scheme: `<RESEARCH REQUIRED>`
- Target platform: `<RESEARCH REQUIRED>`
- Minimum OS: `<RESEARCH REQUIRED>`

3. Confirm signing prerequisites:
- Team ID: `<RESEARCH REQUIRED>`
- Bundle ID strategy: `<RESEARCH REQUIRED>`
- Provisioning profile mode: `<RESEARCH REQUIRED>`

## Step 1: Define Governance

```text
/auro.constitution
```

Focus points for Apple-platform work:
- architecture simplicity
- deterministic builds
- explicit integration boundaries

## Step 2: Define Feature

```text
/auro.charter "<feature request>"
```

Require:
- UI behavior criteria
- error state behavior
- accessibility acceptance criteria
- performance constraints

## Step 3: Technical Plan

```text
/auro.plan
```

Require:
- data model changes
- navigation/state model
- API or persistence contracts
- test strategy (`unit` + `UI` + integration where applicable)

## Step 4: Task Decomposition

```text
/auro.tasks
```

Ensure tasks include:
- model layer
- view/view-model updates
- integration points
- tests
- release checks

## Step 5: Implement

```text
/auro.implement
```

Execution standard:
- keep commits small and traceable to task IDs
- run tests after each phase
- stop and adjust charter/plan on drift

## Step 6: Build and Test

Use verified commands for your project:

```bash
xcodebuild -project <RESEARCH REQUIRED>.xcodeproj -scheme <RESEARCH REQUIRED> -destination 'platform=iOS Simulator,name=<RESEARCH REQUIRED>' build
xcodebuild -project <RESEARCH REQUIRED>.xcodeproj -scheme <RESEARCH REQUIRED> -destination 'platform=iOS Simulator,name=<RESEARCH REQUIRED>' test
```

If your project uses a workspace:

```bash
xcodebuild -workspace <RESEARCH REQUIRED>.xcworkspace -scheme <RESEARCH REQUIRED> -destination 'platform=iOS Simulator,name=<RESEARCH REQUIRED>' test
```

## Step 7: Archive and Export

```bash
xcodebuild -workspace <RESEARCH REQUIRED>.xcworkspace -scheme <RESEARCH REQUIRED> -configuration Release -archivePath build/<RESEARCH REQUIRED>.xcarchive archive
xcodebuild -exportArchive -archivePath build/<RESEARCH REQUIRED>.xcarchive -exportOptionsPlist <RESEARCH REQUIRED>.plist -exportPath build/export
```

Confirm:
- archive success
- signing validity
- expected artifact type generated

## Step 8: Release

1. Merge to `main` with checks green.
2. Publish through your release channel:
- `<RESEARCH REQUIRED: App Store Connect flow>`
- `<RESEARCH REQUIRED: internal distribution flow>`
3. Record release evidence (build number, commit SHA, test summary).

## Research Placeholders To Resolve

1. Project coordinates (scheme, workspace/project naming)
2. Signing/export configuration
3. Simulator matrix and supported OS versions
4. Store/distribution workflow details
