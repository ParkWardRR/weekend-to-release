---
title: Architecture and Build Template
description: Hybrid cloud + local template for coordinator services, persistent state, and burst AI compute.
---

Use this template when you want predictable coordination, low-cost persistence, and elastic AI throughput.

## Design Goals

- Keep always-on services cheap and reliable.
- Keep persistent state in managed storage.
- Scale AI-heavy workloads only when needed.
- Preserve a strong local dev and fallback path.

## Reference Topology

### 1. Control Plane (Managed Cloud)

Run lightweight coordinator services on GCP:

- API gateway and auth edge
- workflow coordinators
- job scheduler and queue router
- webhook/event receivers

Good targets: Cloud Run and Cloud Functions for low idle cost and simple scaling.

### 2. Persistent Storage (Managed and Cheap at Low Volume)

Use managed storage for durability and operational simplicity:

- document metadata and workflow state in Firestore
- blobs, model artifacts, and logs in Cloud Storage
- optional relational state in Cloud SQL when strict SQL constraints are needed

This keeps ops overhead low while taking advantage of free-tier-friendly usage for early-stage workloads.

### 3. Burst AI Compute (External GPU Pool)

For model-heavy spikes, route jobs to on-demand external GPU workers instead of keeping expensive GPUs always on.

Why:

- better cost-per-token during bursts
- no fixed idle GPU burn
- ability to select higher VRAM profiles only for selected jobs

Route via queue + worker heartbeats, and keep coordinator logic in GCP.

### 4. Local Runtime Profile

Your local template can be split across two machines:

- **Mac mini M4 (24 GB unified memory)**:
  - orchestrator development
  - API and coordinator testing
  - lightweight local inference and evaluation
  - CI-like preflight checks before remote dispatch

- **HTPC with RTX 3060 (12 GB VRAM)**:
  - quantized model inference
  - embedding and reranking jobs
  - GPU integration tests and fallback inference path

This gives fast iteration locally while preserving the option to burst remotely.

## Build Template (Monorepo)

```text
apps/
  coordinator-api/
  scheduler/
workers/
  inference-worker/
  embedding-worker/
packages/
  contracts/
  orchestration-sdk/
infra/
  gcp/
  worker-images/
.auro/
  charters/
  templates/
```

## Environment Profiles

| Profile | Coordinator | Storage | AI Compute |
|---|---|---|---|
| `local-dev` | Mac mini | local + managed test buckets | RTX 3060 + CPU fallback |
| `staging` | GCP managed services | managed persistent storage | mixed local + external GPU workers |
| `production` | GCP managed services | managed persistent storage | external burst GPU workers |

## Guardrails

- Keep coordinator services stateless.
- Persist all job state transitions.
- Make worker jobs idempotent and retry-safe.
- Version contracts between coordinator and workers.
- Track queue latency, token throughput, and GPU job failure rates.

## Drop-In Plan Snippet

Use this directly in your plan's technical context:

```text
Architecture Profile:
  Coordinator: GCP managed serverless services
  Persistent Storage: Firestore + Cloud Storage (+ Cloud SQL optional)
  AI Compute: On-demand external GPU workers for burst workloads
  Local Runtime: Mac mini M4 24 GB + RTX 3060 12 GB HTPC
  Routing: Queue-based dispatch with retry-safe workers
```
