# Telemetry & Privacy

StackSnap includes anonymized telemetry via **PostHog** to help us understand usage patterns and catch bugs.

## What we track
- Application startup
- Success/failure of backup/restore operations
- UI interaction counts

## What we NEVER track
- Backup keys
- S3 credentials
- Filenames
- Any sensitive data from your containers

**Goal**: This data is used solely to improve the software and monitor its health in diverse environments.

Built by engineers, for engineers. Distributed under MIT.
