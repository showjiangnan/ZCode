import type { RuntimeHealthSnapshot } from "./health.js";

export function createHealthResponse(snapshot: RuntimeHealthSnapshot) {
  return {
    ok: snapshot.healthy,
    status: snapshot.status,
    activeThreads: snapshot.activeThreads,
    activeWorkers: snapshot.activeWorkers,
    timestamp: snapshot.timestamp,
  };
}
