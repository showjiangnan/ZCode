import type { RuntimeStatus } from "./runtime-state.js";

export interface RuntimeHealthSnapshot {
  status: RuntimeStatus;
  timestamp: number;
  activeThreads: number;
  activeWorkers: number;
}

export function createRuntimeHealthSnapshot(input: RuntimeHealthSnapshot) {
  return {
    ...input,
    healthy: input.status === "ready",
  };
}
