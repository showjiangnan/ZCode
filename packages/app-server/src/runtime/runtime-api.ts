export interface RuntimeApiStatus {
  state: "starting" | "ready" | "stopping" | "stopped" | "failed";
  activeThreads: number;
  activeWorkers: number;
  updatedAt: number;
}

export function createRuntimeApiStatus(input: {
  state: RuntimeApiStatus["state"];
  activeThreads?: number;
  activeWorkers?: number;
}): RuntimeApiStatus {
  return {
    state: input.state,
    activeThreads: input.activeThreads ?? 0,
    activeWorkers: input.activeWorkers ?? 0,
    updatedAt: Date.now(),
  };
}
