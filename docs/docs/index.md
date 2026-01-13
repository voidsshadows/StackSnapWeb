# Welcome to StackSnap

StackSnap is a precision backup engine for Docker Compose environments. It solves the "trust gap" in self-hosting by providing a verifiable, encrypted, and automated recovery workflow that just works.

## Core Pillars

- **Synchronized Orchestration**: We coordinate database-native exports with filesystem snapshots to ensure a consistent point-in-time recovery.
- **Zero-Trust Encryption**: Your data is encrypted locally with AES-256-GCM.
- **Streamed Visibility**: Real-time log streaming via SSE gives you absolute certainty during long-running operations.
- **Verification First**: Every backup can be automatically verified. If it can't be decompressed or decrypted, it's not a backup—it's just a file.

## Getting Started

Check out the [Getting Started](getting-started.md) guide to install StackSnap.
