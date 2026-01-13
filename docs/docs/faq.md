# Frequently Asked Questions

## The Practical Stuff

### Does this scale to 100GB+ volumes?
**Yes.** We stream the archive directly to the storage provider where possible, avoiding massive memory buffers. However, your local disk needs enough temp space for the initial database dump file before encryption.

### What happens if my S3 credentials expire mid-backup?
The operation fails gracefully. StackSnap detects the network/auth error, broadcasts a failure to the UI, and cleans up the local staging artifacts. We don't leave "ghost files" on your disk.

## The Internal "Hard" Questions

### How do you handle 'Snapshot Isolation' during a hot dump?
We don't just 'copy files'. For Postgres, we use `pg_dump --single-transaction`, which forces the database to provide a snapshot-isolated view of the data. For volumes, we use an 'Atomic Copy' pattern. While it's not a block-level filesystem snapshot (like ZFS/LVM), it minimizes the window of inconsistency by pausing the application runtime (if Safe Mode is enabled) during the archive phase.

### Go is garbage-collected. Does the encryption process cause GC spikes on large archives?
We use a streaming buffer approach. We read from the source tarball in 32KB chunks, run them through the AES-256-GCM cipher, and write the result immediately. This keeps the memory footprint (RSS) stable regardless of whether you're backing up 10MB or 10GB.

### What if the StackSnap process itself crashes during a restore?
This is the most critical failure mode. During restore, we capture the state of your existing containers. If a crash occurs during extraction, your containers might be stopped. However, because we don't 'delete' your old data until the new data is extractable, you can always manually restart your old stack using the existing Docker volumes. StackSnap acts as an orchestrator, not a black-box storage layer.

### How do you prevent 'Version Drift' if I restore an old backup to a newer version of Docker Compose?
Each backup includes the exact `docker-compose.yml` that was active at the time of the backup. When you restore, we use that specific manifest to recreate the services. This ensures that even if you've changed your local files in the meantime, the restored environment matches the data exactly.
